// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { to7702SimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { prepareUserOperationForErc20Paymaster } from "permissionless/experimental/pimlico"
import { createPublicClient, type Hex, http } from "viem"
import { entryPoint08Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base

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

// [!region quote]
import type { Address } from "viem"

// The fields most swap aggregator APIs return for an "exact input" quote.
// Map your aggregator's response onto this shape.
type SwapQuote = {
	to: Address // router contract to call
	data: Hex // swap calldata
	value: bigint // native value to send, 0n when selling an ERC-20
	allowanceTarget: Address // contract that must be approved to pull sellToken
	sellAmount: bigint
}

declare function getSwapQuote(params: {
	chainId: number
	sellToken: Address
	buyToken: Address
	sellAmount: bigint
	taker: Address // the smart account / 7702 EOA address
	slippageBps: number
}): Promise<SwapQuote>
// [!endregion quote]

// [!region calls]
import { encodeFunctionData, erc20Abi, parseUnits } from "viem"

const WETH = "0x4200000000000000000000000000000000000006" // WETH on Base

async function buildSwapCalls(
	sellAmount: bigint,
): Promise<{ to: Address; value: bigint; data: Hex }[]> {
	const quote = await getSwapQuote({
		chainId: base.id,
		sellToken: USDC,
		buyToken: WETH,
		sellAmount,
		taker: account.address,
		slippageBps: 50,
	})

	return [
		{
			to: USDC,
			value: 0n,
			data: encodeFunctionData({
				abi: erc20Abi,
				functionName: "approve",
				args: [quote.allowanceTarget, quote.sellAmount],
			}),
		},
		{
			to: quote.to,
			value: quote.value,
			data: quote.data,
		},
	]
}
// [!endregion calls]

// [!region fee]
import { formatUnits } from "viem"

const requestedSell = parseUnits("100", 6) // user wants to sell 100 USDC

const usdcBalance = await publicClient.readContract({
	address: USDC,
	abi: erc20Abi,
	functionName: "balanceOf",
	args: [account.address],
})

const draft = await smartAccountClient.prepareUserOperation({
	calls: await buildSwapCalls(requestedSell),
	paymasterContext: { token: USDC },
})

const { costInToken } = await pimlicoClient.estimateErc20PaymasterCost({
	userOperation: draft,
	token: USDC,
})

// The fee is collected in USDC after the swap executes, so the balance must cover both
if (requestedSell + costInToken > usdcBalance) {
	throw new Error(
		`Not enough USDC: max sellable is ${formatUnits(usdcBalance - costInToken, 6)} USDC`,
	)
}

const sellAmount = requestedSell

console.log(`Network fee (max): ${formatUnits(costInToken, 6)} USDC`)
// [!endregion fee]

// [!region send]
const SIMPLE_7702_IMPLEMENTATION = "0xe6Cae83BdE06E4c305530e199D7217f42808555B"

// The EOA only has code once its EIP-7702 delegation has landed
const isDelegated = await account.isDeployed()

// Fetch a fresh quote right before sending: quotes expire quickly
const userOpHash = await smartAccountClient.sendUserOperation({
	calls: await buildSwapCalls(sellAmount),
	paymasterContext: { token: USDC },
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

console.log(`Swap included: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
// [!endregion send]

// [!region sponsored]
// No token in paymasterContext: the verifying paymaster sponsors it
const sponsoredHash = await smartAccountClient.sendUserOperation({
	calls: await buildSwapCalls(requestedSell),
})
// [!endregion sponsored]
console.log(sponsoredHash)
