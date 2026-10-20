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
		// Injects the exact USDC approval for the ERC-20 Paymaster when it is needed
		prepareUserOperation: prepareUserOperationForErc20Paymaster(pimlicoClient),
	},
})
// [!endregion clients]

// [!region quote]
import { encodeFunctionData, erc20Abi, formatUnits, parseUnits } from "viem"

const recipient = "0x1111111111111111111111111111111111111111" // replace with the recipient's address
const amount = parseUnits("25", USDC_DECIMALS) // 25 USDC

const transferCall = {
	to: USDC,
	value: 0n,
	data: encodeFunctionData({
		abi: erc20Abi,
		functionName: "transfer",
		args: [recipient, amount],
	}),
} as const

const userOperation = await smartAccountClient.prepareUserOperation({
	calls: [transferCall],
	paymasterContext: { token: USDC },
})

const { costInToken, costInUsd } = await pimlicoClient.estimateErc20PaymasterCost({
	userOperation,
	token: USDC,
})

console.log(`Max network fee: ${formatUnits(costInToken, USDC_DECIMALS)} USDC (~$${formatUnits(costInUsd, 6)})`)
// [!endregion quote]

// [!region balance]
const balance = await publicClient.readContract({
	address: USDC,
	abi: erc20Abi,
	functionName: "balanceOf",
	args: [account.address],
})

if (balance < amount + costInToken) {
	throw new Error(
		`Insufficient USDC: need ${formatUnits(amount + costInToken, USDC_DECIMALS)}, have ${formatUnits(balance, USDC_DECIMALS)}`,
	)
}
// [!endregion balance]

// [!region send]
const userOpHash = await smartAccountClient.sendUserOperation({
	calls: [transferCall],
	paymasterContext: { token: USDC },
})

const receipt = await smartAccountClient.waitForUserOperationReceipt({
	hash: userOpHash,
})

if (!receipt.success) {
	throw new Error(`User operation reverted: ${receipt.reason ?? "unknown reason"}`)
}

console.log(`Sent 25 USDC: https://basescan.org/tx/${receipt.receipt.transactionHash}`)
console.log(`Fee paid in USDC, actual gas cost: ${receipt.actualGasCost} wei`)
// [!endregion send]

