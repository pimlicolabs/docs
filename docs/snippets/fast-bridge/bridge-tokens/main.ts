// [!region setup]
import { type Address, type Hex, parseUnits, toHex } from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { arbitrum, base } from "viem/chains"
import type {
	BridgeAddresses,
	BridgeRequest,
	BridgeStatus,
	Eip3009Authorization,
} from "./types"

const apiKey = "YOUR_PIMLICO_API_KEY"

const USDC_BASE: Address = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
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

// [!region sign]
// Authorizations are made out to the origin chain's approvalAddress
const { approvalAddress } = await getBridgeAddresses(base.id)

const amount = parseUnits("25", 6) // 25 USDC
const validBefore = Math.floor(Date.now() / 1000) + 5 * 60 // 5 minutes
const nonce = toHex(crypto.getRandomValues(new Uint8Array(32)))

const signature = await user.signTypedData({
	// USDC's EIP-712 domain on Base
	domain: {
		name: "USD Coin",
		version: "2",
		chainId: base.id,
		verifyingContract: USDC_BASE,
	},
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

const authorization: Eip3009Authorization = {
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
const result = await bridgeTokens({
	originChainId: base.id,
	destinationChainId: arbitrum.id,
	originToken: USDC_BASE,
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
