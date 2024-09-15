const smartAccountSigner = privateKeyToAccount(generatePrivateKey())

import { ENTRYPOINT_ADDRESS_V06, createSmartAccountClient } from "permissionless"
// [!region main]
import { signerToEcdsaKernelSmartAccount } from "permissionless/accounts"
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico"
import { createPublicClient, http } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"

const pimlicoRpcUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=<api-key>`

const pimlicoPaymaster = createPimlicoPaymasterClient({
    transport: http(pimlicoRpcUrl),
    entryPoint: ENTRYPOINT_ADDRESS_V06
})

const bundlerClient = createPimlicoBundlerClient({
    transport: http(pimlicoRpcUrl),
    entryPoint: ENTRYPOINT_ADDRESS_V06,
})

const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
	chain: sepolia,
})

const smartAccount = await signerToEcdsaKernelSmartAccount(publicClient, {
	signer: smartAccountSigner,
	entryPoint: ENTRYPOINT_ADDRESS_V06,
})

const smartAccountClient = createSmartAccountClient({
	account: smartAccount,
	entryPoint: ENTRYPOINT_ADDRESS_V06,
	chain: sepolia, // or whatever chain you are using
	bundlerTransport: http(pimlicoRpcUrl, {
		timeout: 30_000 // optional
	}),
	middleware: {
		gasPrice: async () => (await bundlerClient.getUserOperationGasPrice()).fast,
		sponsorUserOperation: pimlicoPaymaster.sponsorUserOperation,
	},
})
// [!endregion main]
