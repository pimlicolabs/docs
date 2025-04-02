// [!region client]
import { createPublicClient, http } from "viem"
import { decodeNonce } from "permissionless/utils"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"

const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion client]

// [!region account]
import { toSimpleSmartAccount } from "permissionless/accounts"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"

export const simpleSmartAccount = await toSimpleSmartAccount({
	client: publicClient,
	owner: privateKeyToAccount(generatePrivateKey()),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion account]

// [!region smart-account-client]
import { sepolia } from "viem/chains"
import { createSmartAccountClient } from "permissionless"
import { getAccountNonce } from "permissionless/actions"

const smartAccountClient = createSmartAccountClient({
	client: publicClient,
	account: simpleSmartAccount,
	chain: sepolia,
	bundlerTransport: http(pimlicoUrl),
	paymaster: {
		async getPaymasterData(parameters) {
			const nonce = await getAccountNonce(publicClient, {
				address: parameters.sender,
				entryPointAddress: parameters.entryPointAddress,
			})

			const { sequence } = decodeNonce(nonce)

			if (sequence < 10) {
				// sponsor it for the user as the sequence is less than 10
				// sequence is the number of transactions sent by the user for a given key
				// by default key is 0x0
				return pimlicoClient.getPaymasterData(parameters)
			}

			return {
				paymaster: "0x",
				paymasterData: "0x",
				paymasterVerificationGasLimit: 0n,
				paymasterPostOpGasLimit: 0n,
			}
		},
		async getPaymasterStubData(parameters) {
			const nonce = await getAccountNonce(publicClient, {
				address: parameters.sender,
				entryPointAddress: parameters.entryPointAddress,
			})

			const { sequence } = decodeNonce(nonce)

			if (sequence < 10) {
				// sponsor it for the user as the sequence is less than 10
				// sequence is the number of transactions sent by the user for a given key
				// by default key is 0x0
				return pimlicoClient.getPaymasterStubData(parameters)
			}

			return {
				paymaster: "0x",
				paymasterData: "0x",
				paymasterVerificationGasLimit: 0n,
				paymasterPostOpGasLimit: 0n,
			}
		},
	},
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion smart-account-client]
