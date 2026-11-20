// [!region setup]
import {
	address,
	appendTransactionMessageInstructions,
	createKeyPairSignerFromBytes,
	createNoopSigner,
	createSolanaRpc,
	createTransactionMessage,
	getBase64EncodedWireTransaction,
	partiallySignTransactionMessageWithSigners,
	pipe,
	setTransactionMessageFeePayerSigner,
	setTransactionMessageLifetimeUsingBlockhash,
} from "@solana/kit"
import {
	findAssociatedTokenPda,
	getTransferCheckedInstruction,
	TOKEN_PROGRAM_ADDRESS,
} from "@solana-program/token"
import type {
	BridgeRequest,
	BridgeStatus,
	Eip3009Authorization,
	SolanaBridgeAddresses,
} from "./types"

const apiKey = "YOUR_PIMLICO_API_KEY"

const SOLANA_CHAIN_ID = 101
const BASE_CHAIN_ID = 8453
const USDC_SOLANA = address("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v")
const USDC_BASE = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

// The account that holds the USDC on Solana
const user = await createKeyPairSignerFromBytes(
	new Uint8Array(JSON.parse(process.env.USER_SECRET_KEY as string)),
)

const rpc = createSolanaRpc("https://api.mainnet-beta.solana.com")

// Throws the bridge's { code, message } if it rejected the request
const readResponse = async (response: Response) => {
	const body = await response.json()
	if (!response.ok) {
		throw new Error(`${body.code}: ${body.message}`)
	}
	return body
}

// The fee payer and reserve token accounts a Solana transaction is built with
const getSolanaBridgeAddresses = async (): Promise<SolanaBridgeAddresses> => {
	const response = await fetch(
		`https://api.pimlico.io/v1/bridge/addresses/solana?apikey=${apiKey}`,
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
const { feePayer, reserveTokenAccounts } = await getSolanaBridgeAddresses()
const reserve = reserveTokenAccounts.find(
	(account) => account.token === USDC_SOLANA,
)
if (!reserve) {
	throw new Error("The bridge has no reserve token account for USDC")
}

const amount = 25_000_000n // 25 USDC

const [source] = await findAssociatedTokenPda({
	owner: user.address,
	mint: USDC_SOLANA,
	tokenProgram: TOKEN_PROGRAM_ADDRESS,
})
const { value: latestBlockhash } = await rpc.getLatestBlockhash().send()

const message = pipe(
	createTransactionMessage({ version: 0 }),
	// The bridge pays the fee. It signs later, so a noop signer leaves its signature empty
	(m) =>
		setTransactionMessageFeePayerSigner(createNoopSigner(address(feePayer)), m),
	(m) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, m),
	// One transfer of the USDC into the bridge's reserve
	(m) =>
		appendTransactionMessageInstructions(
			[
				getTransferCheckedInstruction({
					source,
					mint: USDC_SOLANA,
					destination: address(reserve.address),
					authority: user,
					amount,
					decimals: 6,
				}),
			],
			m,
		),
)

// The user signs as the transfer's authority
const transaction = getBase64EncodedWireTransaction(
	await partiallySignTransactionMessageWithSigners(message),
)
// [!endregion sign]

// [!region execute]
const result = await bridgeTokens({
	originChainId: SOLANA_CHAIN_ID,
	destinationChainId: BASE_CHAIN_ID,
	originToken: USDC_SOLANA,
	destinationToken: USDC_BASE,
	authorization: { type: "solana-transaction", transaction },
	// The EVM address that receives the USDC
	recipient: "YOUR_EVM_ADDRESS",
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

// The EIP-3009 authorization from "How to bridge tokens"
declare const authorization: Eip3009Authorization

// [!region to-solana]
const toSolana = await bridgeTokens({
	originChainId: BASE_CHAIN_ID,
	destinationChainId: SOLANA_CHAIN_ID,
	originToken: USDC_BASE,
	destinationToken: USDC_SOLANA,
	authorization,
	// The Solana account that receives the USDC
	recipient: user.address,
})
// [!endregion to-solana]

console.log(toSolana)
