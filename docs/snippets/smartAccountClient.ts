// [!region client]
import { createSmartAccountClient } from "permissionless"
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
})

export const simpleSmartAccount = await privateKeyToSimpleSmartAccount(publicClient, {
	privateKey: "0xPRIVATE_KEY",
	factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454", // simple version
	entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // global entrypoint
})

export const smartAccountClient = createSmartAccountClient({
	account: simpleSmartAccount,
	chain: sepolia, // or whatever chain you are using
	transport: http("https://api.pimlico.io/v1/sepolia/rpc?apikey=YOUR_PIMLICO_API_KEY"),
	sponsorUserOperation: paymasterClient.sponsorUserOperation, // if using a paymaster
})
// [!endregion client]
