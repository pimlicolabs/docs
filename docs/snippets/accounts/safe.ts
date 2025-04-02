// [!region imports]
import { createSmartAccountClient } from "permissionless"
import { createPublicClient, getContract, http, parseEther } from "viem"
import { sepolia } from "viem/chains"
// [!endregion imports]

// [!region clients]
export const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

export const paymasterClient = createPimlicoClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion clients]

// [!region signer]
import { privateKeyToAccount } from "viem/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"
import { toSafeSmartAccount } from "permissionless/accounts"

const owner = privateKeyToAccount("0xPRIVATE_KEY")
// [!endregion signer]

// [!region smartAccount]
const safeAccount = await toSafeSmartAccount({
	client: publicClient,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	owners: [owner],
	saltNonce: 0n, // optional
	version: "1.4.1",
	address: "0x...", // optional, only if you are using an already created account
})
// [!endregion smartAccount]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: safeAccount,
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
const userOpHash_$3 = await smartAccountClient.sendUserOperation({
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
