// [!region client]
import { createSmartAccountClient } from "permissionless"
import { createPublicClient, http, parseEther } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { sepolia } from "viem/chains"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { privateKeyToAccount } from "viem/accounts"

export const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

// if using a paymaster
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
	},
})

const smartAccountClient = createSmartAccountClient({
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

// [!region multiple-transactions]
const transactionHash = await smartAccountClient.sendTransaction({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
	],
})
// [!endregion multiple-transactions]

// [!region multiple-transactions-parallel]
import { encodeNonce } from "permissionless/utils"

const parallelNonce1 = encodeNonce({
	key: BigInt(Date.now()),
	sequence: 0n,
})

const transaction1 = smartAccountClient.sendTransaction({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
	],
	nonce: parallelNonce1,
})

const parallelNonce2 = encodeNonce({
	key: BigInt(Date.now()),
	sequence: 0n,
})

const transaction2 = smartAccountClient.sendTransaction({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
	],
	nonce: parallelNonce2,
})

const hashes = await Promise.all([transaction1, transaction2])

// [!endregion multiple-transactions-parallel]
