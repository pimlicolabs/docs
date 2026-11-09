// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, type Hex, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

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

// The user's signer, for example an embedded wallet or passkey signer
const owner = privateKeyToAccount(process.env.PRIVATE_KEY as Hex)

const account = await toSimpleSmartAccount({
	client: publicClient,
	owner,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

const smartAccountClient = createSmartAccountClient({
	account,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	// Remove `paymaster` if the account pays its own gas in ETH
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion clients]

// [!region quote]
import type { Address } from "viem"

// The fields most swap routers and aggregator APIs return for an exact-input quote.
// Map your provider's response onto this shape.
type SwapQuote = {
	to: Address // router contract to call
	data: Hex // swap calldata, with the minimum output (slippage limit) encoded in it
	value: bigint // native value to send, 0n when selling an ERC-20
	allowanceTarget: Address // contract that pulls the sell token
	sellAmount: bigint
}

declare function getSwapQuote(params: {
	chainId: number
	sellToken: Address
	buyToken: Address
	sellAmount: bigint
	taker: Address // the address that executes the swap: the smart account
	slippageBps: number
}): Promise<SwapQuote>

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base
const WETH = "0x4200000000000000000000000000000000000006" // WETH on Base

const quote = await getSwapQuote({
	chainId: base.id,
	sellToken: USDC,
	buyToken: WETH,
	sellAmount: 100_000_000n, // 100 USDC
	taker: account.address,
	slippageBps: 50,
})
// [!endregion quote]

// [!region calls]
import { erc20Abi } from "viem"

const calls = [
	{
		to: USDC,
		abi: erc20Abi,
		functionName: "approve",
		args: [quote.allowanceTarget, quote.sellAmount],
	},
	{
		to: quote.to,
		value: quote.value,
		data: quote.data,
	},
] as const
// [!endregion calls]

// [!region send]
const userOpHash = await smartAccountClient.sendUserOperation({ calls })

const receipt = await smartAccountClient.waitForUserOperationReceipt({
	hash: userOpHash,
})

if (!receipt.success) {
	throw new Error(`Swap reverted: ${receipt.reason ?? "unknown reason"}`)
}

console.log(`Approve + swap included: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
// [!endregion send]

// [!region eip7702]
import { to7702SimpleSmartAccount } from "permissionless/accounts"
import { entryPoint08Address } from "viem/account-abstraction"

// EIP-7702 accounts use EntryPoint 0.8
const pimlicoClient08 = createPimlicoClient({
	chain: base,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint08Address,
		version: "0.8",
	},
})

const eoa = privateKeyToAccount(process.env.EOA_PRIVATE_KEY as Hex)

// The account address is the EOA's own address
const eoaAccount = await to7702SimpleSmartAccount({
	client: publicClient,
	owner: eoa,
})

const eoaAccountClient = createSmartAccountClient({
	account: eoaAccount,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient08,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient08.getUserOperationGasPrice()).fast
		},
	},
})

// Implementation that to7702SimpleSmartAccount expects the EOA to delegate to
const SIMPLE_7702_IMPLEMENTATION = "0xe6Cae83BdE06E4c305530e199D7217f42808555B"

// Fetch the quote with `taker: eoa.address`, then build `calls` exactly as above
const eoaUserOpHash = await eoaAccountClient.sendUserOperation({
	calls,
	// Only needed until the delegation is set on this chain
	authorization: (await eoaAccount.isDeployed())
		? undefined
		: await eoa.signAuthorization({
				address: SIMPLE_7702_IMPLEMENTATION,
				chainId: base.id,
				nonce: await publicClient.getTransactionCount({ address: eoa.address }),
			}),
})
// [!endregion eip7702]

// [!region erc20]
import { prepareUserOperationForErc20Paymaster } from "permissionless/experimental/pimlico"

const erc20AccountClient = createSmartAccountClient({
	account,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
		// Adds the paymaster's USDC approval to the batch when needed
		prepareUserOperation: prepareUserOperationForErc20Paymaster(pimlicoClient),
	},
})

const erc20UserOpHash = await erc20AccountClient.sendUserOperation({
	calls,
	paymasterContext: { token: USDC },
})
// [!endregion erc20]

// [!region wallet]
import { createWalletClient, custom, type EIP1193Provider } from "viem"

declare const provider: EIP1193Provider // the user's injected or WalletConnect provider

const walletClient = createWalletClient({
	chain: base,
	transport: custom(provider),
})

const [address] = await walletClient.requestAddresses()

const { id } = await walletClient.sendCalls({
	account: address,
	calls,
	// Fail instead of falling back to separate transactions
	forceAtomic: true,
	// Only if the wallet reports `paymasterService` support for this chain
	capabilities: {
		paymasterService: { url: pimlicoUrl },
	},
})

const { status, receipts } = await walletClient.waitForCallsStatus({ id })
// [!endregion wallet]

console.log(eoaUserOpHash, erc20UserOpHash, status, receipts)
