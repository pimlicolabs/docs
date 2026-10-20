// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSafeSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { prepareUserOperationForErc20Paymaster } from "permissionless/experimental/pimlico"
import { createPublicClient, http, type LocalAccount } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
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

// The agent's signer: a Turnkey, Privy server wallet, Fireblocks or KMS-backed account.
// Never put the private key in the model's prompt or tool output.
declare const agentSigner: LocalAccount

const agentAccount = await toSafeSmartAccount({
	client: publicClient,
	owners: [agentSigner],
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	version: "1.4.1",
})

const agentClient = createSmartAccountClient({
	account: agentAccount,
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
import type { Address, Hex } from "viem"

const AGENT_POLICY_ID = "sp_your_agent_policy"

type AgentCall = { to: Address; value: bigint; data: Hex }

async function submit(calls: AgentCall[]) {
	try {
		// Sponsored by your Pimlico balance, within the policy's limits
		const hash = await agentClient.sendUserOperation({
			calls,
			paymasterContext: { sponsorshipPolicyId: AGENT_POLICY_ID },
		})
		return { hash, feePaidBy: "app" as const }
	} catch (error) {
		// The policy declined (limit reached or call not allowed): the agent pays in USDC
		console.warn("Sponsorship declined, paying gas in USDC", error)
		const hash = await agentClient.sendUserOperation({
			calls,
			paymasterContext: { token: USDC },
		})
		return { hash, feePaidBy: "agent" as const }
	}
}
// [!endregion send]

// [!region tool]
// Register this as a tool in your agent framework. The model only sees the result.
export async function sendAgentTransaction(calls: AgentCall[]) {
	const { hash, feePaidBy } = await submit(calls)

	const receipt = await agentClient.waitForUserOperationReceipt({ hash })

	return {
		success: receipt.success,
		transactionHash: receipt.receipt.transactionHash,
		feePaidBy,
		error: receipt.success ? undefined : (receipt.reason ?? "reverted"),
	}
}
// [!endregion tool]

// [!region usdc-only]
// The agent always pays its own gas from its USDC balance
const hash = await agentClient.sendUserOperation({
	calls: [{ to: "0x1111111111111111111111111111111111111111", value: 0n, data: "0x" }],
	paymasterContext: { token: USDC },
})
// [!endregion usdc-only]
console.log(hash)
