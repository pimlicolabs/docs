// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, type Hex, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { mainnet as chain } from "viem/chains" // the only line that changes per chain

const pimlicoUrl = `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=YOUR_PIMLICO_API_KEY`

const publicClient = createPublicClient({
	chain,
	transport: http(), // use your own RPC URL in production
})

const pimlicoClient = createPimlicoClient({
	chain,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

// Replace with the user's signer (embedded wallet, passkey, etc.)
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
	chain,
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
// Batch everything the user is doing into one user operation to pay the overhead once
const userOpHash = await smartAccountClient.sendUserOperation({
	calls: [
		{
			to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
			value: 0n,
			data: "0x1234",
		},
	],
})
// [!endregion send]

// [!region receipt]
import { formatEther } from "viem"

const receipt = await smartAccountClient.waitForUserOperationReceipt({ hash: userOpHash })

if (!receipt.success) {
	throw new Error(`User operation reverted: ${receipt.reason ?? "unknown reason"}`)
}

console.log(`Included: ${chain.blockExplorers.default.url}/tx/${receipt.receipt.transactionHash}`)
console.log(`Gas you sponsored: ${formatEther(receipt.actualGasCost)} ${chain.nativeCurrency.symbol}`)
// [!endregion receipt]

// [!region policy]
const SPONSORSHIP_POLICY_ID = "sp_your_policy_id"

const limitedHash = await smartAccountClient.sendUserOperation({
	calls: [{ to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", value: 0n, data: "0x1234" }],
	paymasterContext: { sponsorshipPolicyId: SPONSORSHIP_POLICY_ID },
})
// [!endregion policy]
console.log(limitedHash)
