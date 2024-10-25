// [!region prepareClients]
import { toSafeSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, Hex, http, zeroAddress } from "viem"
import { odysseyTestnet } from "viem/chains"
import { privateKeyToAccount, privateKeyToAddress } from "viem/accounts"
import dotenv from "dotenv"
import { createSmartAccountClient } from "permissionless"
dotenv.config()

const eoaPrivateKey = process.env.EOA_PRIVATE_KEY as Hex | undefined
if (!eoaPrivateKey) throw new Error("EOA_PRIVATE_KEY is required")

const safePrivateKey = process.env.SAFE_PRIVATE_KEY as Hex | undefined
if (!safePrivateKey) throw new Error("SAFE_PRIVATE_KEY is required")

const pimlicoApiKey = process.env.PIMLICO_API_KEY as Hex | undefined
if (!pimlicoApiKey) throw new Error("PIMLICO_API_KEY is required")

const pimlicoUrl = `https://api.pimlico.io/v2/${odysseyTestnet.id}/rpc?apikey=${pimlicoApiKey}`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
})

const publicClient = createPublicClient({
	chain: odysseyTestnet,
	transport: http("https://odyssey.ithaca.xyz"),
})

const safeAccount = await toSafeSmartAccount({
	address: privateKeyToAddress(eoaPrivateKey), // [!code ++]
	owners: [privateKeyToAccount(safePrivateKey)],
	client: publicClient,
	version: "1.4.1",
})

const smartAccountClient = createSmartAccountClient({
	account: safeAccount,
	paymaster: pimlicoClient,
	bundlerTransport: http(pimlicoUrl),
	userOperation: {
		estimateFeesPerGas: async () => (await pimlicoClient.getUserOperationGasPrice()).fast,
	},
})
// [!endregion prepareClients]

// [!region sendUserOperation]
const userOperationHash = await smartAccountClient.sendUserOperation({
	calls: [
		{
			to: zeroAddress,
			value: 0n,
			data: "0x",
		},
	],
})

const { receipt } = await smartAccountClient.waitForUserOperationReceipt({
	hash: userOperationHash,
})

console.log(
	`UserOperation included: https://odyssey-explorer.ithaca.xyz/tx/${receipt.transactionHash}`,
)
// [!endregion sendUserOperation]
