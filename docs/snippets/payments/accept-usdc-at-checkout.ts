// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { type Address, createPublicClient, type Hex, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base
const MERCHANT_TREASURY: Address = "0x1111111111111111111111111111111111111111" // where payments land

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

// The server account's owner. It never holds funds, only spends what customers permit.
const owner = privateKeyToAccount(process.env.SERVER_PRIVATE_KEY as Hex)

const serverAccount = await toSimpleSmartAccount({
	client: publicClient,
	owner,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

const serverClient = createSmartAccountClient({
	account: serverAccount,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	// No paymasterContext needed: the verifying paymaster sponsors every settlement
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion clients]

// [!region request]
import { parseAbi, parseUnits } from "viem"

const usdcAbi = parseAbi([
	"function nonces(address owner) view returns (uint256)",
	"function allowance(address owner, address spender) view returns (uint256)",
	"function balanceOf(address account) view returns (uint256)",
	"function permit(address owner, address spender, uint256 value, uint256 deadline, bytes signature)",
	"function transferFrom(address from, address to, uint256 value) returns (bool)",
])

export async function createPermitRequest(customer: Address, amountUsdc: string) {
	const nonce = await publicClient.readContract({
		address: USDC,
		abi: usdcAbi,
		functionName: "nonces",
		args: [customer],
	})

	return {
		domain: {
			name: "USD Coin", // USDC's name() on Base
			version: "2", // USDC's version() on Base
			chainId: base.id,
			verifyingContract: USDC,
		},
		types: {
			Permit: [
				{ name: "owner", type: "address" },
				{ name: "spender", type: "address" },
				{ name: "value", type: "uint256" },
				{ name: "nonce", type: "uint256" },
				{ name: "deadline", type: "uint256" },
			],
		},
		primaryType: "Permit",
		message: {
			owner: customer,
			spender: serverAccount.address,
			value: parseUnits(amountUsdc, 6),
			nonce,
			deadline: BigInt(Math.floor(Date.now() / 1000) + 30 * 60), // 30 minutes
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

// Fetched from your backend, which calls createPermitRequest(customer, "25")
const permitRequest = await createPermitRequest(customer, "25")

const signature = await walletClient.signTypedData({
	account: customer,
	...permitRequest,
})
// [!endregion sign]

// [!region settle]
import { encodeFunctionData } from "viem"

type PermitRequest = Awaited<ReturnType<typeof createPermitRequest>>

async function paymentCalls(request: PermitRequest, customerSignature: Hex) {
	const { owner: from, spender, value, deadline } = request.message

	const [balance, allowance] = await Promise.all([
		publicClient.readContract({ address: USDC, abi: usdcAbi, functionName: "balanceOf", args: [from] }),
		publicClient.readContract({
			address: USDC,
			abi: usdcAbi,
			functionName: "allowance",
			args: [from, spender],
		}),
	])

	if (balance < value) {
		throw new Error("Customer doesn't have enough USDC")
	}

	const pull = {
		to: USDC,
		value: 0n,
		data: encodeFunctionData({
			abi: usdcAbi,
			functionName: "transferFrom",
			args: [from, MERCHANT_TREASURY, value],
		}),
	} as const

	// Anyone can submit a permit. If it already landed, only pull the funds.
	if (allowance >= value) return [pull]

	const permit = {
		to: USDC,
		value: 0n,
		data: encodeFunctionData({
			abi: usdcAbi,
			functionName: "permit",
			args: [from, spender, value, deadline, customerSignature],
		}),
	} as const

	return [permit, pull]
}

export async function settlePayment(request: PermitRequest, customerSignature: Hex) {
	return serverClient.sendUserOperation({
		calls: await paymentCalls(request, customerSignature),
	})
}
// [!endregion settle]

// [!region confirm]
const userOpHash = await settlePayment(permitRequest, signature)

const receipt = await serverClient.waitForUserOperationReceipt({ hash: userOpHash })

if (!receipt.success) {
	throw new Error(`Payment not settled: ${receipt.reason ?? "unknown reason"}`)
}

console.log(`Order paid: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
// [!endregion confirm]

// [!region batch]
type SignedPayment = { request: PermitRequest; signature: Hex }

declare const pendingPayments: SignedPayment[]

// Settle several checkouts in one sponsored user operation
const calls = await Promise.all(
	pendingPayments.map(({ request, signature }) => paymentCalls(request, signature)),
)

const batchHash = await serverClient.sendUserOperation({ calls: calls.flat() })
// [!endregion batch]
console.log(batchHash)

// [!region policy]
const SPONSORSHIP_POLICY_ID = "sp_your_policy_id"

const limitedHash = await serverClient.sendUserOperation({
	calls: await paymentCalls(permitRequest, signature),
	paymasterContext: { sponsorshipPolicyId: SPONSORSHIP_POLICY_ID },
})
// [!endregion policy]
console.log(limitedHash)
