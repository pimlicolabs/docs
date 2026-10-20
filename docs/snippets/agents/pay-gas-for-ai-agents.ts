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

// [!region tool]
import type { Address, Hex } from "viem"

type AgentCall = { to: Address; value: bigint; data: Hex }

// Register this as a tool in your agent framework. The model only sees the result.
export async function sendAgentTransaction(calls: AgentCall[]) {
	// No paymasterContext: Pimlico sponsors the gas from your balance
	const hash = await agentClient.sendUserOperation({ calls })

	const receipt = await agentClient.waitForUserOperationReceipt({ hash })

	return {
		success: receipt.success,
		transactionHash: receipt.receipt.transactionHash,
		error: receipt.success ? undefined : (receipt.reason ?? "reverted"),
	}
}
// [!endregion tool]

// [!region usdc-only]
// The agent pays its own gas from its USDC balance
const hash = await agentClient.sendUserOperation({
	calls: [{ to: "0x1111111111111111111111111111111111111111", value: 0n, data: "0x" }],
	paymasterContext: { token: USDC },
})
// [!endregion usdc-only]
console.log(hash)

// [!region policy]
const AGENT_POLICY_ID = "sp_your_agent_policy"

// In sendAgentTransaction, call this instead of agentClient.sendUserOperation
async function sendWithinLimits(calls: AgentCall[]) {
	try {
		// Sponsored only within the policy's limits
		return await agentClient.sendUserOperation({
			calls,
			paymasterContext: { sponsorshipPolicyId: AGENT_POLICY_ID },
		})
	} catch {
		// Limit reached: the agent pays gas from its own USDC
		return agentClient.sendUserOperation({
			calls,
			paymasterContext: { token: USDC },
		})
	}
}
// [!endregion policy]
console.log(sendWithinLimits)
