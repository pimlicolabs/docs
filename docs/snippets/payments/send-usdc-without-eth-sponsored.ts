// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, encodeFunctionData, erc20Abi, type Hex, http, parseUnits } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base
const USDC_DECIMALS = 6

const pimlicoUrl = `https://api.pimlico.io/v2/${base.id}/rpc?apikey=YOUR_PIMLICO_API_KEY`

const publicClient = createPublicClient({
	chain: base,
	transport: http("https://mainnet.base.org"),
})

const pimlicoClient = createPimlicoClient({
	chain: base,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

// The user's signer. In production this is usually an embedded wallet or passkey signer.
const owner = privateKeyToAccount(process.env.PRIVATE_KEY as Hex)

const account = await toSimpleSmartAccount({
	client: publicClient,
	owner,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

const smartAccountClient = createSmartAccountClient({
	account,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion clients]

// [!region send]
const recipient = "0x1111111111111111111111111111111111111111" // replace with the recipient's address
const amount = parseUnits("25", USDC_DECIMALS) // 25 USDC

// No paymasterContext: the verifying paymaster sponsors it and charges your Pimlico balance
const userOpHash = await smartAccountClient.sendUserOperation({
	calls: [
		{
			to: USDC,
			value: 0n,
			data: encodeFunctionData({
				abi: erc20Abi,
				functionName: "transfer",
				args: [recipient, amount],
			}),
		},
	],
})

const receipt = await smartAccountClient.waitForUserOperationReceipt({
	hash: userOpHash,
})

if (!receipt.success) {
	throw new Error(`User operation reverted: ${receipt.reason ?? "unknown reason"}`)
}

console.log(`Sent 25 USDC: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
// [!endregion send]
