// [!region client]
import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless"
import { privateKeyToSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico"
import { createPublicClient, http } from "viem"
import { sepolia } from "viem/chains"

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

// if using a paymaster
const paymasterClient = createPimlicoPaymasterClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})

export const simpleSmartAccount = await privateKeyToSimpleSmartAccount(publicClient, {
	privateKey: "0xPRIVATE_KEY",
	factoryAddress: "0x91E60e0613810449d098b0b5Ec8b51A0FE8c8985", // simple version
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})

export const smartAccountClient = createSmartAccountClient({
	account: simpleSmartAccount,
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	chain: sepolia, // or whatever chain you are using
	bundlerTransport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	middleware: {
		sponsorUserOperation: paymasterClient.sponsorUserOperation, // if using a paymaster
	},
})
// [!endregion client]
