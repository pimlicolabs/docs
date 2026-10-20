import { type Order, orderNonceKey } from "./order"

// [!region backend]
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { decodeNonce } from "permissionless/utils"
import { createPublicClient, erc20Abi, type Hex, http, isAddressEqual, parseEventLogs } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

const pimlicoClient = createPimlicoClient({
	chain: base,
	transport: http(`https://api.pimlico.io/v2/${base.id}/rpc?apikey=${process.env.PIMLICO_API_KEY}`),
	entryPoint: { address: entryPoint07Address, version: "0.7" },
})

// Your own RPC, used to double-check what the bundler reports
const publicClient = createPublicClient({ chain: base, transport: http(process.env.BASE_RPC_URL) })

export async function verifyOrderPayment(order: Order, userOpHash: Hex) {
	const receipt = await pimlicoClient.waitForUserOperationReceipt({
		hash: userOpHash,
		timeout: 60_000,
	})

	if (!receipt.success) return { paid: false, reason: "user operation reverted" }

	// 1. The user operation was signed for this order
	if (decodeNonce(receipt.nonce).key !== orderNonceKey(order.id)) {
		return { paid: false, reason: "user operation is not for this order" }
	}

	// 2. It moved enough USDC from the sender to the merchant
	const payments = parseEventLogs({
		abi: erc20Abi,
		eventName: "Transfer",
		logs: receipt.logs, // logs of this user operation only
	}).filter(
		(log) =>
			isAddressEqual(log.address, USDC) &&
			isAddressEqual(log.args.from, receipt.sender) &&
			isAddressEqual(log.args.to, order.merchant),
	)

	const received = payments.reduce((sum, log) => sum + log.args.value, 0n)
	if (received < order.amount) return { paid: false, reason: "amount too low" }

	// 3. The transaction is on chain according to your own node
	const txReceipt = await publicClient.getTransactionReceipt({
		hash: receipt.receipt.transactionHash,
	})
	if (txReceipt.status !== "success") return { paid: false, reason: "transaction failed" }

	return {
		paid: true,
		payer: receipt.sender,
		transactionHash: receipt.receipt.transactionHash,
		blockNumber: txReceipt.blockNumber,
	}
}
// [!endregion backend]
