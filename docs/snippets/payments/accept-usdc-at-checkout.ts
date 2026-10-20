// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSafeSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, http, type LocalAccount } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base

const pimlicoUrl = `https://api.pimlico.io/v2/${base.id}/rpc?apikey=YOUR_PIMLICO_API_KEY`

const publicClient = createPublicClient({
	chain: base,
	transport: http("https://mainnet.base.org"),
})

const pimlicoClient = createPimlicoClient({
	chain: base,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

// Your merchant signer: a Turnkey, Fireblocks, Dfns or KMS-backed account
declare const merchantSigner: LocalAccount

const merchant = await toSafeSmartAccount({
	client: publicClient,
	owners: [merchantSigner],
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	version: "1.4.1",
})

const merchantClient = createSmartAccountClient({
	account: merchant,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	// No token in paymasterContext: the verifying paymaster sponsors every settlement
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion clients]

// [!region request]
import { type Address, type Hex, parseUnits, toHex } from "viem"

const receiveWithAuthorizationTypes = {
	ReceiveWithAuthorization: [
		{ name: "from", type: "address" },
		{ name: "to", type: "address" },
		{ name: "value", type: "uint256" },
		{ name: "validAfter", type: "uint256" },
		{ name: "validBefore", type: "uint256" },
		{ name: "nonce", type: "bytes32" },
	],
} as const

export function createPaymentRequest(customer: Address, amountUsdc: string) {
	return {
		domain: {
			name: "USD Coin", // USDC's name() on Base
			version: "2", // USDC's version() on Base
			chainId: base.id,
			verifyingContract: USDC,
		},
		types: receiveWithAuthorizationTypes,
		primaryType: "ReceiveWithAuthorization",
		message: {
			from: customer,
			to: merchant.address,
			value: parseUnits(amountUsdc, 6),
			validAfter: 0n,
			validBefore: BigInt(Math.floor(Date.now() / 1000) + 30 * 60), // 30 minutes
			nonce: toHex(crypto.getRandomValues(new Uint8Array(32))), // store it with the order
		},
	} as const
}
// [!endregion request]

// [!region sign]
import { createWalletClient, custom } from "viem"

declare const window: { ethereum: Parameters<typeof custom>[0] }

// In the customer's browser: any wallet works, and it doesn't need ETH
const walletClient = createWalletClient({
	chain: base,
	transport: custom(window.ethereum),
})

const [customer] = await walletClient.requestAddresses()

// Fetched from your backend, which calls createPaymentRequest(customer, "25")
const paymentRequest = createPaymentRequest(customer, "25")

const signature = await walletClient.signTypedData({
	account: customer,
	...paymentRequest,
})
// [!endregion sign]

// [!region settle]
import { encodeFunctionData, erc20Abi, parseAbi } from "viem"

const usdcAuthorizationAbi = parseAbi([
	"function receiveWithAuthorization(address from, address to, uint256 value, uint256 validAfter, uint256 validBefore, bytes32 nonce, bytes signature)",
	"function authorizationState(address authorizer, bytes32 nonce) view returns (bool)",
])

export async function settlePayment(
	request: ReturnType<typeof createPaymentRequest>,
	customerSignature: Hex,
) {
	const { from, to, value, validAfter, validBefore, nonce } = request.message

	const balance = await publicClient.readContract({
		address: USDC,
		abi: erc20Abi,
		functionName: "balanceOf",
		args: [from],
	})

	if (balance < value) {
		throw new Error("Customer doesn't have enough USDC")
	}

	return merchantClient.sendUserOperation({
		calls: [
			{
				to: USDC,
				value: 0n,
				data: encodeFunctionData({
					abi: usdcAuthorizationAbi,
					functionName: "receiveWithAuthorization",
					args: [from, to, value, validAfter, validBefore, nonce, customerSignature],
				}),
			},
		],
	})
}
// [!endregion settle]

// [!region confirm]
const userOpHash = await settlePayment(paymentRequest, signature)

const receipt = await merchantClient.waitForUserOperationReceipt({ hash: userOpHash })

const isPaid = await publicClient.readContract({
	address: USDC,
	abi: usdcAuthorizationAbi,
	functionName: "authorizationState",
	args: [paymentRequest.message.from, paymentRequest.message.nonce],
})

if (!receipt.success || !isPaid) {
	throw new Error(`Payment not settled: ${receipt.reason ?? "authorization unused"}`)
}

console.log(`Order paid: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
// [!endregion confirm]

// [!region batch]
type SignedPayment = {
	request: ReturnType<typeof createPaymentRequest>
	signature: Hex
}

declare const pendingPayments: SignedPayment[]

// Settle several checkouts in one sponsored user operation
const batchHash = await merchantClient.sendUserOperation({
	calls: pendingPayments.map(({ request, signature }) => {
		const { from, to, value, validAfter, validBefore, nonce } = request.message
		return {
			to: USDC,
			value: 0n,
			data: encodeFunctionData({
				abi: usdcAuthorizationAbi,
				functionName: "receiveWithAuthorization",
				args: [from, to, value, validAfter, validBefore, nonce, signature],
			}),
		} as const
	}),
})
// [!endregion batch]

// [!region refund]
export async function refund(customerAddress: Address, amount: bigint) {
	return merchantClient.sendUserOperation({
		calls: [
			{
				to: USDC,
				value: 0n,
				data: encodeFunctionData({
					abi: erc20Abi,
					functionName: "transfer",
					args: [customerAddress, amount],
				}),
			},
		],
	})
}
// [!endregion refund]
console.log(batchHash)
