type Hex = `0x${string}`

export type SolanaBridgeAddresses = {
	feePayer: string
	executor: string
	reserveTokenAccounts: { token: string; address: string }[]
}

export type SolanaAuthorization = {
	type: "solana-transaction"
	// The signed transaction, base64 encoded
	transaction: string
}

export type Eip3009Authorization = {
	type: "eip3009"
	token: Hex
	from: Hex
	to: Hex
	amount: string
	validAfter: number
	validBefore: number
	nonce: Hex
	signature: Hex
}

export type BridgeRequest = {
	originChainId: number
	destinationChainId: number
	originToken: string
	destinationToken: string
	authorization: SolanaAuthorization | Eip3009Authorization
	// Required when either chain is Solana
	recipient: string
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
