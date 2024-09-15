// [!region client]
import { createPublicClient, http } from "viem"
import {
	createPimlicoBundlerClient,
	createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico"
import { ENTRYPOINT_ADDRESS_V07 } from "permissionless"
import { decodeNonce } from "permissionless/utils"

const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

const bundlerClient = createPimlicoBundlerClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})

const paymasterClient = createPimlicoPaymasterClient({
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
import { createSmartAccountClient, getAccountNonce } from "permissionless"

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
			const transactionCount = await getAccountNonce(publicClient, {
				sender: args.userOperation.sender,
				entryPoint: args.entryPoint,
			})

			const { sequence } = decodeNonce(transactionCount)

			if (sequence < 10) {
				// sponsor it for the user as the sequence is less than 10
				// sequence is the number of transactions sent by the user for a given key
				// by default key is 0x0
				return paymasterClient.sponsorUserOperation(args)
			}

			const gasEstimates = await bundlerClient.estimateUserOperationGas(args)

			return {
				...gasEstimates,
			}
		},
	},
})
// [!endregion smart-account-client]
