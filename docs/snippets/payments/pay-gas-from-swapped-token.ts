// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { to7702SimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { prepareUserOperationForErc20Paymaster } from "permissionless/experimental/pimlico"
import { type Address, createPublicClient, type Hex, http } from "viem"
import { entryPoint08Address } from "viem/account-abstraction"
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
		address: entryPoint08Address,
		version: "0.8",
	},
})

const eoa = privateKeyToAccount(process.env.EOA_PRIVATE_KEY as Hex)

const account = await to7702SimpleSmartAccount({
	client: publicClient,
	owner: eoa,
})

const smartAccountClient = createSmartAccountClient({
	account,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
		prepareUserOperation: prepareUserOperationForErc20Paymaster(pimlicoClient),
	},
})
// [!endregion clients]


// [!region calls]
import { encodeFunctionData, erc20Abi } from "viem"

const sellToken: Address = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base
const buyToken: Address = "0x4200000000000000000000000000000000000006" // WETH on Base

// Map your aggregator's "exact input" quote onto this shape
type SwapQuote = {
	to: Address
	data: Hex
	value: bigint
	allowanceTarget: Address
	sellAmount: bigint
}

declare function getSwapQuote(params: {
	chainId: number
	sellToken: Address
	buyToken: Address
	sellAmount: bigint
	taker: Address
	slippageBps: number
}): Promise<SwapQuote>

async function buildSwapCalls(sellAmount: bigint) {
	const quote = await getSwapQuote({
		chainId: base.id,
		sellToken,
		buyToken,
		sellAmount,
		taker: account.address,
		slippageBps: 50,
	})

	return [
		{
			to: sellToken,
			value: 0n,
			data: encodeFunctionData({
				abi: erc20Abi,
				functionName: "approve",
				args: [quote.allowanceTarget, quote.sellAmount],
			}),
		},
		{ to: quote.to, value: quote.value, data: quote.data },
	]
}
// [!endregion calls]

// [!region fee]
import { parseUnits } from "viem"

// What the user typed in: the most they want to spend, gas included
const spendAmount = parseUnits("100", 6)

async function estimateFee(sellAmount: bigint) {
	const userOperation = await smartAccountClient.prepareUserOperation({
		calls: await buildSwapCalls(sellAmount),
		paymasterContext: { token: sellToken },
	})

	const { costInToken } = await pimlicoClient.estimateErc20PaymasterCost({
		userOperation,
		token: sellToken,
	})

	return costInToken
}

// Estimate with the full amount, then sell what's left after the fee.
// The 5% buffer covers gas price moves between this estimate and the send.
const fee = ((await estimateFee(spendAmount)) * 105n) / 100n
const sellAmount = spendAmount - fee
// [!endregion fee]

// [!region check]
import { formatUnits } from "viem"

const balance = await publicClient.readContract({
	address: sellToken,
	abi: erc20Abi,
	functionName: "balanceOf",
	args: [account.address],
})

if (spendAmount > balance) {
	throw new Error(`Not enough balance: max spend is ${formatUnits(balance, 6)}`)
}

console.log(`You sell ${formatUnits(sellAmount, 6)} + network fee up to ${formatUnits(fee, 6)}`)
// [!endregion check]

// [!region send]
const SIMPLE_7702_IMPLEMENTATION = "0xe6Cae83BdE06E4c305530e199D7217f42808555B"

const isDelegated = await account.isDeployed()

// Fetch a fresh quote for the reduced amount right before sending
const userOpHash = await smartAccountClient.sendUserOperation({
	calls: await buildSwapCalls(sellAmount),
	paymasterContext: { token: sellToken },
	authorization: isDelegated
		? undefined
		: await eoa.signAuthorization({
				address: SIMPLE_7702_IMPLEMENTATION,
				chainId: base.id,
				nonce: await publicClient.getTransactionCount({ address: eoa.address }),
			}),
})

const receipt = await smartAccountClient.waitForUserOperationReceipt({ hash: userOpHash })

if (!receipt.success) {
	throw new Error(`Swap reverted: ${receipt.reason ?? "unknown reason"}`)
}
// [!endregion send]

// [!region supported]
const quotes = await pimlicoClient.getTokenQuotes({ tokens: [sellToken] })

// If the sell token isn't supported, sponsor the swap instead
const canPayGasInSellToken = quotes.length > 0
// [!endregion supported]
console.log(canPayGasInSellToken)
