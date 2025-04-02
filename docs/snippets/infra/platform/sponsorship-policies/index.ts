// [!region client]
import { createPublicClient, http } from "viem"

const publicClient = createPublicClient({
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

const pimlicoClient = createPimlicoClient({
	chain: sepolia,
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion client]

// [!region account]
import { privateKeyToAccount } from "viem/accounts"
import { toSimpleSmartAccount } from "permissionless/accounts"

export const simpleSmartAccount = await toSimpleSmartAccount({
	client: publicClient,
	owner: privateKeyToAccount("0xPRIVATE_KEY"),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion account]

// [!region smart-account-client]
import { sepolia } from "viem/chains"
import { createSmartAccountClient } from "permissionless"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"

export const smartAccountClient = createSmartAccountClient({
	account: simpleSmartAccount,
	chain: sepolia, // or whatever chain you are using
	bundlerTransport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	paymaster: pimlicoClient,
	paymasterContext: {
		sponsorshipPolicyId: "sp_my_policy_id",
	},
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast // if using pimlico bundlers
		},
	},
})
// [!endregion smart-account-client]
