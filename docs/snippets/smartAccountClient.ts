// [!region client]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"

const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

// if using a paymaster
const apiKey = "YOUR_PIMLICO_API_KEY"
const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

export const simpleSmartAccount = await toSimpleSmartAccount({
	client: publicClient,
	owner: privateKeyToAccount("0xPRIVATE_KEY"),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	}, // global entrypoint
})

export const smartAccountClient = createSmartAccountClient({
	account: simpleSmartAccount,
	chain: sepolia,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion client]
