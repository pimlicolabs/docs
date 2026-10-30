// [!region setup]
import {
	type Address,
	createPublicClient,
	encodeFunctionData,
	erc20Abi,
	type Hex,
	http,
	parseAbi,
	parseUnits,
	toHex,
} from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { arbitrum, base, bsc } from "viem/chains"

const BRIDGE_URL = "https://api.pimlico.io/v1/bridge"
const API_KEY = "YOUR_PIMLICO_API_KEY"

const USDC_BASE: Address = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
const USDC_ARBITRUM: Address = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"

const basePublicClient = createPublicClient({
	chain: base,
	transport: http("https://mainnet.base.org"),
})

// The EOA that holds the USDC on the origin chain
const user = privateKeyToAccount(process.env.USER_PRIVATE_KEY as Hex)

type BridgeStatus = {
	requestId: string
	status: "pending" | "success" | "failed" | "refunded"
	amountIn: string
	fee: string
	amountOut: string
	origin: { chainId: number; status: string; transactionHash?: string }
	destination: {
		chainId: number
		recipient: string
		status: string
		transactionHash?: string
	}
}

// Sends a request to the bridge and throws its { code, message } on rejection
const callBridge = async <T>(path: string, init?: RequestInit): Promise<T> => {
	const response = await fetch(`${BRIDGE_URL}${path}`, {
		...init,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
	})
	const body = await response.json()
	if (!response.ok) {
		throw new Error(`${body.code}: ${body.message}`)
	}
	return body as T
}
// [!endregion setup]

// [!region addresses]
const { approvalAddress, multicaller } = await callBridge<{
	approvalAddress: Address
	multicaller: Address
}>("/addresses")
// [!endregion addresses]

// [!region sign]
const amount = parseUnits("25", 6) // 25 USDC
const validBefore = Math.floor(Date.now() / 1000) + 5 * 60 // 5 minutes
const nonce = toHex(crypto.getRandomValues(new Uint8Array(32)))

// The token's EIP-712 domain
const domainAbi = parseAbi([
	"function name() view returns (string)",
	"function version() view returns (string)",
])
const [name, version] = await Promise.all([
	basePublicClient.readContract({
		address: USDC_BASE,
		abi: domainAbi,
		functionName: "name",
	}),
	basePublicClient.readContract({
		address: USDC_BASE,
		abi: domainAbi,
		functionName: "version",
	}),
])

const signature = await user.signTypedData({
	domain: { name, version, chainId: base.id, verifyingContract: USDC_BASE },
	types: {
		ReceiveWithAuthorization: [
			{ name: "from", type: "address" },
			{ name: "to", type: "address" },
			{ name: "value", type: "uint256" },
			{ name: "validAfter", type: "uint256" },
			{ name: "validBefore", type: "uint256" },
			{ name: "nonce", type: "bytes32" },
		],
	},
	primaryType: "ReceiveWithAuthorization",
	message: {
		from: user.address,
		to: approvalAddress,
		value: amount,
		validAfter: 0n,
		validBefore: BigInt(validBefore),
		nonce,
	},
})

const authorization = {
	type: "eip3009",
	token: USDC_BASE,
	from: user.address,
	to: approvalAddress,
	amount: amount.toString(),
	validAfter: 0,
	validBefore,
	nonce,
	signature,
}
// [!endregion sign]

// [!region execute]
const result = await callBridge<BridgeStatus>("/execute/sync?timeout=30", {
	method: "POST",
	body: JSON.stringify({
		originChainId: base.id,
		destinationChainId: arbitrum.id,
		originToken: USDC_BASE,
		destinationToken: USDC_ARBITRUM,
		authorization,
		// Leave it out to deliver to authorization.from
		recipient: user.address,
	}),
})
// [!endregion execute]

// [!region status]
const waitForBridge = async (requestId: string): Promise<BridgeStatus> => {
	while (true) {
		const status = await callBridge<BridgeStatus>(`/status/${requestId}`)
		// A failed delivery leaves the request pending, with the leg's error set
		const deliveryFailed = ["reverted", "failed"].includes(
			status.destination.status,
		)
		if (status.status !== "pending" || deliveryFailed) {
			return status
		}
		await new Promise((resolve) => setTimeout(resolve, 1_000))
	}
}

const final =
	result.status === "pending" ? await waitForBridge(result.requestId) : result

if (final.status === "success") {
	console.log(
		`Delivered ${final.amountOut} on chain ${final.destination.chainId}:`,
		final.destination.transactionHash,
	)
} else {
	console.log(`Bridge ${final.status}`, final.origin, final.destination)
}
// [!endregion status]

// [!region calls]
// An ERC-4626 vault on Arbitrum that takes USDC
const VAULT: Address = "0x2222222222222222222222222222222222222222"
const vaultAbi = parseAbi([
	"function deposit(uint256 assets, address receiver) returns (uint256 shares)",
])

const callsResult = await callBridge<BridgeStatus>("/execute/sync", {
	method: "POST",
	body: JSON.stringify({
		originChainId: base.id,
		destinationChainId: arbitrum.id,
		originToken: USDC_BASE,
		destinationToken: USDC_ARBITRUM,
		authorization,
		// Run by `multicaller`, which holds amountOut when the calls start
		calls: [
			{
				to: USDC_ARBITRUM,
				data: encodeFunctionData({
					abi: erc20Abi,
					functionName: "approve",
					args: [VAULT, amount],
				}),
			},
			{
				to: VAULT,
				data: encodeFunctionData({
					abi: vaultAbi,
					functionName: "deposit",
					args: [amount, user.address],
				}),
			},
		],
	}),
})
// [!endregion calls]

// [!region permit2]
const PERMIT2: Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3"
const USDC_BSC: Address = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" // 18 decimals

const permit2Amount = parseUnits("25", 18)
const deadline = Math.floor(Date.now() / 1000) + 5 * 60
// Permit2 SignatureTransfer nonces are unordered: any unused uint256 works
const permit2Nonce = BigInt(toHex(crypto.getRandomValues(new Uint8Array(32))))

const permit2Signature = await user.signTypedData({
	domain: { name: "Permit2", chainId: bsc.id, verifyingContract: PERMIT2 },
	types: {
		PermitTransferFrom: [
			{ name: "permitted", type: "TokenPermissions" },
			{ name: "spender", type: "address" },
			{ name: "nonce", type: "uint256" },
			{ name: "deadline", type: "uint256" },
		],
		TokenPermissions: [
			{ name: "token", type: "address" },
			{ name: "amount", type: "uint256" },
		],
	},
	primaryType: "PermitTransferFrom",
	message: {
		permitted: { token: USDC_BSC, amount: permit2Amount },
		spender: approvalAddress,
		nonce: permit2Nonce,
		deadline: BigInt(deadline),
	},
})

const permit2Authorization = {
	type: "permit2",
	token: USDC_BSC,
	from: user.address,
	spender: approvalAddress,
	amount: permit2Amount.toString(),
	nonce: permit2Nonce.toString(),
	deadline,
	signature: permit2Signature,
}
// [!endregion permit2]

console.log(multicaller, callsResult, permit2Authorization)
