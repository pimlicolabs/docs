import type { Address, Hex } from "viem"

export type BridgeAddresses = { approvalAddress: Address; multicaller: Address }

export type Permit2Authorization = {
	type: "permit2"
	token: Address
	from: Address
	spender: Address
	amount: string
	nonce: string
	deadline: number
	signature: Hex
}

export type BridgeRequest = {
	originChainId: number
	destinationChainId: number
	originToken: Address
	destinationToken: Address
	authorization: Permit2Authorization
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
