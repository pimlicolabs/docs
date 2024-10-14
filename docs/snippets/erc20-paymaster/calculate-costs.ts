// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSafeSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { type Address, createPublicClient, getAddress, http, maxUint256, parseAbi } from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { entryPoint07Address } from "viem/account-abstraction"
import { base } from "viem/chains"

const chain = base

export const publicClient = createPublicClient({
	chain,
	transport: http("https://mainnet.base.org"),
})

const pimlicoUrl = `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.PIMLICO_API_KEY}`

const pimlicoClient = createPimlicoClient({
	chain,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

const account = await toSafeSmartAccount({
	client: publicClient,
	owners: [
		privateKeyToAccount("0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),
	],
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	version: "1.4.1",
})

const smartAccountClient = createSmartAccountClient({
	account,
	chain,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion clients]

// [!region fetchQuotes]
const token = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
const tokenDecimals = 6

const quotes = await pimlicoClient.getTokenQuotes({
	tokens: [getAddress(token)],
})

const postOpGas: bigint = quotes[0].postOpGas
const exchangeRate: bigint = quotes[0].exchangeRate
const exchangeRateNativeToUsd: bigint = quotes[0].exchangeRateNativeToUsd
const paymaster: Address = quotes[0].paymaster
// [!endregion fetchQuotes]

// [!region calculateMaxCost]
const op = await smartAccountClient.prepareUserOperation({
	calls: [
		{
			to: token,
			abi: parseAbi(["function approve(address, uint)"]),
			args: [paymaster, maxUint256],
		},
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: 0n,
			data: "0x1234",
		},
	],
	paymasterContext: {
		token,
	},
})

const userOperationMaxCost =
	op.preVerificationGas +
	op.verificationGasLimit +
	op.callGasLimit +
	(op.paymasterVerificationGasLimit || 0n) +
	(op.paymasterPostOpGasLimit || 0n)
// [!endregion calculateMaxCost]

// [!region calculateCostInToken]
// represents the userOperation's max cost in demoniation of wei
const maxCostInWei = userOperationMaxCost + postOpGas * op.maxFeePerGas

// represents the userOperation's max cost in token demoniation (wei)
const maxCostInTokenRaw = (maxCostInWei * exchangeRate) / BigInt(1e18)

// represents the userOperation's max cost in token (human readable format)
const maxCostInToken = Number(maxCostInTokenRaw) / 10 ** tokenDecimals
// [!endregion calculateCostInToken]

// [!region calculateUsdCost]
// represents the userOperation's max cost in usd (with 6 decimals of precision)
const rawCostInUsd = (maxCostInWei * exchangeRateNativeToUsd) / 10n ** 18n

// represents the userOperation's max cost in usd
// (human readable format after dividing by 6 decimal places)
const costInUsd = Number(rawCostInUsd) / 10 ** 6
// [!endregion calculateUsdCost]

console.log({
	maxCostInWei,
	maxCostInToken,
	rawCostInUsd,
	maxCostInTokenRaw,
	costInUsd,
})
