// [!region setup]
import {
	type Address,
	createWalletClient,
	erc20Abi,
	type Hex,
	http,
	maxUint256,
	parseUnits,
	publicActions,
	toHex,
} from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { arbitrum, bsc } from "viem/chains"
import type {
	BridgeAddresses,
	BridgeRequest,
	BridgeStatus,
	Permit2Authorization,
} from "./types"

const apiKey = "YOUR_PIMLICO_API_KEY"

const PERMIT2: Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3"
const USDC_BSC: Address = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" // 18 decimals
const USDC_ARBITRUM: Address = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"

// The account that holds the USDC on the origin chain
const user = privateKeyToAccount(process.env.USER_PRIVATE_KEY as Hex)

// Throws the bridge's { code, message } if it rejected the request
const readResponse = async (response: Response) => {
	const body = await response.json()
	if (!response.ok) {
		throw new Error(`${body.code}: ${body.message}`)
	}
	return body
}

// Who authorizations on a chain are made out to
const getBridgeAddresses = async (
	chainId: number,
): Promise<BridgeAddresses> => {
	const response = await fetch(
		`https://api.pimlico.io/v1/bridge/addresses/${chainId}?apikey=${apiKey}`,
	)
	return readResponse(response)
}

// Bridges the tokens to the recipient and waits for the outcome
const bridgeTokens = async (request: BridgeRequest): Promise<BridgeStatus> => {
	const response = await fetch(
		`https://api.pimlico.io/v1/bridge/execute/sync?apikey=${apiKey}`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(request),
		},
	)
	return readResponse(response)
}
// [!endregion setup]

// [!region approve]
const client = createWalletClient({
	account: user,
	chain: bsc,
	transport: http(),
}).extend(publicActions)

const hash = await client.writeContract({
	address: USDC_BSC,
	abi: erc20Abi,
	functionName: "approve",
	args: [PERMIT2, maxUint256],
})
await client.waitForTransactionReceipt({ hash })
// [!endregion approve]

// [!region sign]
// Authorizations are made out to the origin chain's approvalAddress
const { approvalAddress } = await getBridgeAddresses(bsc.id)

const amount = parseUnits("25", 18) // 25 USDC
const deadline = Math.floor(Date.now() / 1000) + 5 * 60 // 5 minutes
// Permit2 SignatureTransfer nonces are unordered: any unused uint256 works
const nonce = BigInt(toHex(crypto.getRandomValues(new Uint8Array(32))))

const signature = await user.signTypedData({
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
		permitted: { token: USDC_BSC, amount },
		spender: approvalAddress,
		nonce,
		deadline: BigInt(deadline),
	},
})

const authorization: Permit2Authorization = {
	type: "permit2",
	token: USDC_BSC,
	from: user.address,
	spender: approvalAddress,
	amount: amount.toString(),
	nonce: nonce.toString(),
	deadline,
	signature,
}
// [!endregion sign]

// [!region execute]
const result = await bridgeTokens({
	originChainId: bsc.id,
	destinationChainId: arbitrum.id,
	originToken: USDC_BSC,
	destinationToken: USDC_ARBITRUM,
	authorization,
	recipient: user.address,
})
// [!endregion execute]

// [!region result]
if (result.status === "success") {
	console.log("Delivered:", result.destination.transactionHash)
} else if (result.status === "failed") {
	console.log("Nothing was bridged")
} else {
	console.log("Still pending")
}
// [!endregion result]
