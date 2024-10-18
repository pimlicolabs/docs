// [!region imports]
import { createSmartAccountClient } from "permissionless"
import { createPublicClient, getContract, http, parseEther } from "viem"
import { sepolia } from "viem/chains"
// [!endregion imports]

// [!region clients]
export const publicClient = createPublicClient({
	transport: http("https://11155111.rpc.thirdweb.com"),
})

const CLIENT_ID = "CLIENT_ID"
export const paymasterClient = createPimlicoClient({
	transport: http(`https://11155111.bundler.thirdweb.com/v2?clientId=${CLIENT_ID}`),
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
import { toThirdwebSmartAccount } from "permissionless/accounts"

const owner = privateKeyToAccount("0xPRIVATE_KEY")
// [!endregion signer]

// [!region smartAccount]
const thirdwebAccount = await toThirdwebSmartAccount({
	client: publicClient,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	owner,
	salt: "0x", // optional
	address: "0x...", // optional, only if you are using an already created account
})
// [!endregion smartAccount]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: thirdwebAccount,
	chain: sepolia,
	paymaster: paymasterClient,
	bundlerTransport: http(`https://11155111.bundler.thirdweb.com/v2?clientId=${CLIENT_ID}`),
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
