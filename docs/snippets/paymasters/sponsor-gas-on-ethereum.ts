// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, type Hex, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { mainnet } from "viem/chains"

const pimlicoUrl = `https://api.pimlico.io/v2/${mainnet.id}/rpc?apikey=YOUR_PIMLICO_API_KEY`

const publicClient = createPublicClient({
	chain: mainnet,
	transport: http("https://ethereum-rpc.publicnode.com"),
})

const pimlicoClient = createPimlicoClient({
	chain: mainnet,
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
	chain: mainnet,
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
import { encodeFunctionData, erc20Abi, parseUnits } from "viem"

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC on Ethereum

// Batch everything the user is doing into one user operation to pay the overhead once
const userOpHash = await smartAccountClient.sendUserOperation({
	calls: [
		{
			to: USDC,
			value: 0n,
			data: encodeFunctionData({
				abi: erc20Abi,
				functionName: "transfer",
				args: ["0x1111111111111111111111111111111111111111", parseUnits("25", 6)],
			}),
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

console.log(`Included: https://etherscan.io/tx/${receipt.receipt.transactionHash}`)
console.log(`Gas you sponsored: ${formatEther(receipt.actualGasCost)} ETH`)
// [!endregion receipt]

// [!region policy]
const SPONSORSHIP_POLICY_ID = "sp_your_ethereum_policy"

const limitedHash = await smartAccountClient.sendUserOperation({
	calls: [{ to: "0x1111111111111111111111111111111111111111", value: 0n, data: "0x" }],
	paymasterContext: { sponsorshipPolicyId: SPONSORSHIP_POLICY_ID },
})
// [!endregion policy]
console.log(limitedHash)
