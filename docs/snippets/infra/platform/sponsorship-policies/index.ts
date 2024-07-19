// [!region client]
import { createPublicClient, http } from "viem"
import {
	createPimlicoBundlerClient,
	createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico"
import { ENTRYPOINT_ADDRESS_V07 } from "permissionless"

const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

const bundlerClient = createPimlicoBundlerClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})

const pimlicoPaymasterClient = createPimlicoPaymasterClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})
// [!endregion client]

// [!region account]
import { privateKeyToSimpleSmartAccount } from "permissionless/accounts"

export const simpleSmartAccount = await privateKeyToSimpleSmartAccount(publicClient, {
	privateKey: "0xPRIVATE_KEY",
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})
// [!endregion account]

// [!region smart-account-client]
import { sepolia } from "viem/chains"
import { createSmartAccountClient } from "permissionless"

export const smartAccountClient = createSmartAccountClient({
	account: simpleSmartAccount,
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	chain: sepolia, // or whatever chain you are using
	bundlerTransport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	middleware: {
		gasPrice: async () => {
			return (await bundlerClient.getUserOperationGasPrice()).fast // if using pimlico bundlers
		},
		sponsorUserOperation: async (args) => {
			return pimlicoPaymasterClient.sponsorUserOperation({
				...args,
				sponsorshipPolicyId: "sp_my_policy_id",
			})
		},
	},
})
// [!endregion smart-account-client]
