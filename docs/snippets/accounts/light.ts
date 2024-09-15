// [!region imports]
import { createSmartAccountClient } from "permissionless"
import { toLightSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, getContract, http, parseEther } from "viem"
import { entryPoint06Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"
// [!endregion imports]

// [!region clients]
export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

export const paymasterClient = createPimlicoClient({
	entryPoint: {
		address: entryPoint06Address,
		version: "0.6",
	},
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"),
})

// [!endregion clients]

// [!region smartAccount]
const lightAccount = await toLightSmartAccount({
	client: publicClient,
	entryPoint: {
		address: entryPoint06Address,
		version: "0.6",
	},
	owner: privateKeyToAccount("0x..."),
	version: "1.1.0",
})
// [!endregion smartAccount]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: lightAccount,
	chain: sepolia,
	paymaster: paymasterClient,
	bundlerTransport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"),
	userOperation: {
		estimateFeesPerGas: async () => (await paymasterClient.getUserOperationGasPrice()).fast,
	},
})
// [!endregion smartAccountClient]

// [!region submit]
const txHash_$1 = await smartAccountClient.sendTransaction({
	to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
	value: parseEther("0.1"),
})
// [!endregion submit]

const nftAbi = [
	{
		inputs: [],
		name: "mint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
] as const

// [!region submitNft]
const nftContract = getContract({
	address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
	abi: nftAbi,
	client: {
		public: publicClient,
		wallet: smartAccountClient,
	},
})

const txHash_$2 = await nftContract.write.mint()
// [!endregion submitNft]

// [!region submitBatch]
const txHash_$3 = await smartAccountClient.sendUserOperation({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
		{
			to: "0x1440ec793aE50fA046B95bFeCa5aF475b6003f9e",
			value: parseEther("0.1"),
			data: "0x1234",
		},
	],
})
// [!endregion submitBatch]
