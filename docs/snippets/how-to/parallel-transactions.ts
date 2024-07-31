// [!region client]
import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless"
import { privateKeyToSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico"
import { concat, createPublicClient, http, parseEther } from "viem"
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

// [!region multiple-transactions]
const transactionHash = await smartAccountClient.sendTransactions({
	transactions: [
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

const transaction1 = smartAccountClient.sendTransactions({
	transactions: [
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

const transaction2 = smartAccountClient.sendTransactions({
	transactions: [
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
