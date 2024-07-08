import "dotenv/config"
import { writeFileSync } from "node:fs"
import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless"
import { signerToSafeSmartAccount } from "permissionless/accounts"
import {
	createPimlicoBundlerClient,
	createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico"
import { type Hex, createPublicClient, http } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"

// [!region clients]
const apiKey = "YOUR_PIMLICO_API_KEY"
const paymasterUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const privateKey =
	(process.env.PRIVATE_KEY as Hex) ??
	(() => {
		const pk = generatePrivateKey()
		writeFileSync(".env", `PRIVATE_KEY=${pk}`)
		return pk
	})()

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

export const paymasterClient = createPimlicoPaymasterClient({
	transport: http(paymasterUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})
// [!endregion clients]

// [!region smartAccount]
const account = await signerToSafeSmartAccount(publicClient, {
	signer: privateKeyToAccount(privateKey),
	entryPoint: ENTRYPOINT_ADDRESS_V07, // global entrypoint
	safeVersion: "1.4.1",
})

console.log(`Smart account address: https://sepolia.etherscan.io/address/${account.address}`)
// [!endregion smartAccount]

// [!region smartAccountClient]
const bundlerUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const bundlerClient = createPimlicoBundlerClient({
	transport: http(bundlerUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})

const smartAccountClient = createSmartAccountClient({
	account,
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	chain: sepolia,
	bundlerTransport: http(bundlerUrl, {
		timeout: 30_000 // Wait 30 seconds for user operation to be included
	}),
	middleware: {
		gasPrice: async () => {
			return (await bundlerClient.getUserOperationGasPrice()).fast
		},
		sponsorUserOperation: paymasterClient.sponsorUserOperation,
	},
})
// [!endregion smartAccountClient]

// [!region submit]
const txHash = await smartAccountClient.sendTransaction({
	to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
	value: 0n,
	data: "0x1234",
})

console.log(`User operation included: https://sepolia.etherscan.io/tx/${txHash}`)
// [!endregion submit]
