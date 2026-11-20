import type { Address, Hex } from "viem"

export type BridgeAddresses = { approvalAddress: Address; multicaller: Address }

export type Eip3009Authorization = {
	type: "eip3009"
	token: Address
	from: Address
	to: Address
	amount: string
	validAfter: number
	validBefore: number
	nonce: Hex
	signature: Hex
}

export type BridgeRequest = {
	originChainId: number
	destinationChainId: number
	originToken: Address
	destinationToken: Address
	authorization: Eip3009Authorization
	// Defaults to authorization.from
	recipient?: Address
}

export type BridgeStatus = {
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
		error?: { code: string; message: string }
	}
}
