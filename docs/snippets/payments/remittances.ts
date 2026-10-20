// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { prepareUserOperationForErc20Paymaster } from "permissionless/experimental/pimlico"
import { createPublicClient, type Hex, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base

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
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
		// Only changes behaviour when paymasterContext contains a `token`
		prepareUserOperation: prepareUserOperationForErc20Paymaster(pimlicoClient),
	},
})
// [!endregion clients]

// [!region send]
import { type Address, encodeFunctionData, erc20Abi, parseUnits } from "viem"

export async function sendRemittance(recipient: Address, amountUsdc: string) {
	const calls = [
		{
			to: USDC,
			value: 0n,
			data: encodeFunctionData({
				abi: erc20Abi,
				functionName: "transfer",
				args: [recipient, parseUnits(amountUsdc, 6)],
			}),
		},
	] as const

	try {
		// 1. No paymasterContext: the verifying paymaster sponsors the transfer
		//    and charges your Pimlico balance
		const hash = await smartAccountClient.sendUserOperation({ calls })
		return { hash, feePaidBy: "app" as const }
	} catch (error) {
		// 2. Sponsorship was declined: let the ERC-20 Paymaster take the
		//    network fee in USDC instead
		console.warn("Sponsorship declined, falling back to USDC gas", error)
		const hash = await smartAccountClient.sendUserOperation({
			calls,
			paymasterContext: { token: USDC },
		})
		return { hash, feePaidBy: "user" as const }
	}
}
// [!endregion send]

// [!region wait]
const { hash } = await sendRemittance("0x1111111111111111111111111111111111111111", "50")

const receipt = await smartAccountClient.waitForUserOperationReceipt({ hash })

if (!receipt.success) {
	throw new Error(`Transfer reverted: ${receipt.reason ?? "unknown reason"}`)
}

console.log(`Delivered: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
// [!endregion wait]

// [!region policy]
const SPONSORSHIP_POLICY_ID = "sp_your_policy_id"

// In sendRemittance, replace the sponsored attempt with:
const hash = await smartAccountClient.sendUserOperation({
	calls,
	paymasterContext: { sponsorshipPolicyId: SPONSORSHIP_POLICY_ID },
})
// [!endregion policy]
