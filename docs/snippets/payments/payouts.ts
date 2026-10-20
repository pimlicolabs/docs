// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSafeSmartAccount } from "permissionless/accounts"
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

// The treasury signer. In production, use a KMS / MPC signer instead of a raw key.
const treasurySigner = privateKeyToAccount(process.env.TREASURY_SIGNER_KEY as Hex)

const treasury = await toSafeSmartAccount({
	client: publicClient,
	owners: [treasurySigner],
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	version: "1.4.1",
})

const treasuryClient = createSmartAccountClient({
	account: treasury,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	// Gas is sponsored from your Pimlico balance. To pay it from the treasury's USDC instead,
	// set `paymasterContext: { token: USDC }`
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
		prepareUserOperation: prepareUserOperationForErc20Paymaster(pimlicoClient),
	},
})
// [!endregion clients]

// [!region chunk]
import { type Address, encodeFunctionData, erc20Abi } from "viem"

type Payout = { recipient: Address; amount: bigint } // amount in USDC base units (6 decimals)

function toTransferCall({ recipient, amount }: Payout) {
	return {
		to: USDC as Address,
		value: 0n,
		data: encodeFunctionData({
			abi: erc20Abi,
			functionName: "transfer",
			args: [recipient, amount],
		}),
	}
}

function chunk<T>(items: T[], size: number): T[][] {
	const chunks: T[][] = []
	for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size))
	return chunks
}
// [!endregion chunk]

// [!region measure]
import { getRequiredPrefund } from "permissionless/utils"

declare const payouts: Payout[] // loaded from your database

const sample = await treasuryClient.prepareUserOperation({
	calls: payouts.slice(0, 50).map(toTransferCall),
})

console.log({
	callGasLimit: sample.callGasLimit,
	callGasPerTransfer: sample.callGasLimit / 50n,
	// Upper bound in wei for this user operation at the current gas price
	maxCostWei: getRequiredPrefund({ userOperation: sample, entryPointVersion: "0.7" }),
})
// [!endregion measure]

// [!region nonce]
import { keccak256, toHex } from "viem"
import { encodeNonce } from "permissionless/utils"

// Same run + same chunk index => same nonce. A nonce can only be used once,
// so a retried chunk can never be paid out twice.
function nonceForChunk(payoutRunId: string, chunkIndex: number): bigint {
	const key = BigInt(keccak256(toHex(`${payoutRunId}:${chunkIndex}`))) >> 64n // 192-bit key
	return encodeNonce({ key, sequence: 0n })
}
// [!endregion nonce]

// [!region send]
const CHUNK_SIZE = 100 // tune using the measurement above
const CONCURRENCY = 10 // stays well under the bundler's parallel user operation limit

async function sendChunk(payoutRunId: string, chunkIndex: number, items: Payout[]) {
	const userOpHash = await treasuryClient.sendUserOperation({
		calls: items.map(toTransferCall),
		nonce: nonceForChunk(payoutRunId, chunkIndex),
	})
	// Persist (payoutRunId, chunkIndex, userOpHash) before waiting
	return userOpHash
}

export async function runPayouts(payoutRunId: string, items: Payout[]) {
	// Parallel nonce keys only work once the Safe is deployed (see the note above)
	if (!(await treasury.isDeployed())) {
		throw new Error("Deploy the treasury Safe with a single user operation first")
	}

	const chunks = chunk(items, CHUNK_SIZE)
	const results: { chunkIndex: number; userOpHash?: Hex; error?: unknown }[] = []

	for (let start = 0; start < chunks.length; start += CONCURRENCY) {
		const group = chunks.slice(start, start + CONCURRENCY)
		const settled = await Promise.allSettled(
			group.map((chunkItems, j) => sendChunk(payoutRunId, start + j, chunkItems)),
		)
		settled.forEach((result, j) =>
			results.push(
				result.status === "fulfilled"
					? { chunkIndex: start + j, userOpHash: result.value }
					: { chunkIndex: start + j, error: result.reason }, // e.g. AA25: chunk already sent
			),
		)
	}

	return results
}
// [!endregion send]

// [!region receipts]
import { formatEther, isAddressEqual, parseEventLogs } from "viem"

export async function confirmChunk(userOpHash: Hex, expected: Payout[]) {
	const receipt = await treasuryClient.waitForUserOperationReceipt({
		hash: userOpHash,
		timeout: 120_000,
	})

	if (!receipt.success) {
		// The whole chunk reverted; none of its transfers happened. Fix and resend.
		return { status: "reverted" as const, reason: receipt.reason }
	}

	const transfers = parseEventLogs({
		abi: erc20Abi,
		eventName: "Transfer",
		logs: receipt.logs, // only this user operation's logs
	}).filter(
		(log) => isAddressEqual(log.address, USDC) && isAddressEqual(log.args.from, treasury.address),
	)

	if (transfers.length !== expected.length) {
		throw new Error(`Expected ${expected.length} transfers, found ${transfers.length}`)
	}

	return {
		status: "paid" as const,
		transactionHash: receipt.receipt.transactionHash,
		gasCostEth: formatEther(receipt.actualGasCost),
	}
}
// [!endregion receipts]

// [!region status]
const status = await pimlicoClient.getUserOperationStatus({
	hash: "0x...", // a userOpHash you persisted
})
// status.status: "not_found" | "not_submitted" | "submitted" | "rejected" | "included" | "failed" | "queued"
// [!endregion status]
console.log(status)
