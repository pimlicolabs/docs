// [!region imports]
import { createSmartAccountClient, ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { signerToLightSmartAccount } from "permissionless/accounts";
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
// [!endregion imports]


// [!region clients]
// Get your API key here: https://dashboard.pimlico.io/apikeys
const API_KEY = 'YOUR API KEY';

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
});

export const paymasterClient = createPimlicoPaymasterClient({
	entryPoint: ENTRYPOINT_ADDRESS_V06,
	transport: http(
		`https://api.pimlico.io/v2/sepolia/rpc?apikey=${API_KEY}`,
	),
});

export const pimlicoBundlerClient = createPimlicoBundlerClient({
	transport: http(
		`https://api.pimlico.io/v2/sepolia/rpc?apikey=${API_KEY}`,
	),
	entryPoint: ENTRYPOINT_ADDRESS_V06,
});
// [!endregion clients]


// [!region smartAccount]
const lightAccount = await signerToLightSmartAccount(publicClient, {
    signer: privateKeyToAccount('0x...'),
    entryPoint: ENTRYPOINT_ADDRESS_V06,
    lightAccountVersion: '1.1.0'
})
// [!endregion smartAccount]


// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: lightAccount,
	entryPoint: ENTRYPOINT_ADDRESS_V06,
	chain: sepolia,
	bundlerTransport: http(
		`https://api.pimlico.io/v2/sepolia/rpc?apikey=${API_KEY}`,
	),
	middleware: {
		sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
		gasPrice: async () => (await pimlicoBundlerClient.getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
	}
});
// [!endregion smartAccountClient]

// [!region submit]
const txHash = await smartAccountClient.sendTransaction({
	to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", // Vitalik
    data: "0x",
    value: 0n,
});

console.log(`Transaction: https://sepolia.etherscan.io/address/${txHash}`)
// [!region submit]
