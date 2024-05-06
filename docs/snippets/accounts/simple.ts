// [!region imports]
import { createSmartAccountClient, ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { signerToSimpleSmartAccount } from "permissionless/accounts";
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { createPublicClient, getContract, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
// [!endregion imports]


// [!region clients]
// Get your API key here: https://dashboard.pimlico.io/apikeys
const API_KEY = 'YOUR API KEY';

export const publicClient = createPublicClient({
	transport: http("https://sepolia.infura.io/v3/API_KEY"),
});
 
export const paymasterClient = createPimlicoPaymasterClient({
	entryPoint: ENTRYPOINT_ADDRESS_V06,
	transport: http(
		`https://api.pimlico.io/v2/sepolia/rpc?apikey=${API_KEY}`,
	),
});
// [!endregion clients]


// [!region smartAccount]
const simpleAccount = await signerToSimpleSmartAccount(publicClient, {
    signer: privateKeyToAccount('0x...'),
	factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
	entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // global entrypoint
	address: "0x..." // optional, only if you are using an already created account
});
// [!endregion smartAccount]


// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: simpleAccount,
	entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
	chain: sepolia,
	bundlerTransport: http(
		"https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY",
	),
	middleware: {
		sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
	}
});
// [!endregion smartAccountClient]

// [!region smartAccountClientGasPrice]
export const pimlicoBundlerClient = createPimlicoBundlerClient({
	transport: http(
		"https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY",
	),
	entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
});
 
const smartAccountClient_$2 = createSmartAccountClient({
	account: simpleAccount,
	entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
	chain: sepolia,
	bundlerTransport: http(
		"https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY",
	),
	middleware: {
		gasPrice: async () => (await pimlicoBundlerClient.getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
		sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
	}
});
// [!region smartAccountClientGasPrice]


// [!region submit]
const txHash_$1 = await smartAccountClient.sendTransaction({
	to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
	value: parseEther("0.1"),
});
// [!endregion submit]


// [!region submitNft]
const nftContract = getContract({
	address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
	abi: nftAbi,
	client: {
		public: publicClient,
		wallet: smartAccountClient,
	},
});
 
const txHash_$2 = await nftContract.write.mint()
// [!endregion submitNft]
