import { toSimpleSmartAccount } from "permissionless/accounts"
import { createSmartAccountClient } from "permissionless/clients"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

const publicClient = createPublicClient({
	chain: base,
	transport: http("https://mainnet.base.org"),
})

const owner = privateKeyToAccount(generatePrivateKey())

const simpleSmartAccount = await toSimpleSmartAccount({
	owner,
	client: publicClient,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

const pimlicoUrl = "https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"

const pimlicoClient = createPimlicoClient({
	chain: base,
	transport: http(pimlicoUrl),
})

export const smartAccountClient = createSmartAccountClient({
	chain: base,
	account: simpleSmartAccount,
	bundlerTransport: http(pimlicoUrl),
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
