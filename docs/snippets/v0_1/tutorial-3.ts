import "dotenv/config"
import { writeFileSync } from "node:fs"
import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless"
import { signerToSafeSmartAccount } from "permissionless/accounts"
import { pimlicoPaymasterActions } from "permissionless/actions/pimlico"
import { createPimlicoBundlerClient } from "permissionless/clients/pimlico"
import { type Hex, createPublicClient, encodeFunctionData, http, parseAbiItem } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { baseSepolia } from "viem/chains"

// [!region clients]
const erc20PaymasterAddress = "0x00000000002E3A39aFEf1132214fEee5a55ce127"
const usdcAddress = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"

const privateKey =
	(process.env.PRIVATE_KEY as Hex) ??
	(() => {
		const pk = generatePrivateKey()
		writeFileSync(".env", `PRIVATE_KEY=${pk}`)
		return pk
	})()

const publicClient = createPublicClient({
	transport: http("https://sepolia.base.org"),
})

const apiKey = "YOUR_PIMLICO_API_KEY"
const bundlerUrl = `https://api.pimlico.io/v2/84532/rpc?apikey=${apiKey}`

const bundlerClient = createPimlicoBundlerClient({
	transport: http(bundlerUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
}).extend(pimlicoPaymasterActions(ENTRYPOINT_ADDRESS_V07))
// [!endregion clients]

// [!region smartAccount]
const account = await signerToSafeSmartAccount(publicClient, {
	signer: privateKeyToAccount(privateKey),
	entryPoint: ENTRYPOINT_ADDRESS_V07, // global entrypoint
	safeVersion: "1.4.1",
	setupTransactions: [
		{
			to: usdcAddress,
			value: 0n,
			data: encodeFunctionData({
				abi: [parseAbiItem("function approve(address spender, uint256 amount)")],
				args: [
					erc20PaymasterAddress,
					0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn,
				],
			}),
		},
	],
})

console.log(`Smart account address: https://sepolia.basescan.org/address/${account.address}`)
// [!endregion smartAccount]

// [!region checkBalance]
const senderUsdcBalance = await publicClient.readContract({
	abi: [parseAbiItem("function balanceOf(address account) returns (uint256)")],
	address: usdcAddress,
	functionName: "balanceOf",
	args: [account.address],
})

if (senderUsdcBalance < 1_000_000n) {
	throw new Error(
		`insufficient USDC balance for counterfactual wallet address ${account.address}: ${
			Number(senderUsdcBalance) / 1000000
		} USDC, required at least 1 USDC. Load up balance at https://faucet.circle.com/ (Base Sepolia)`,
	)
}

console.log(`Smart account USDC balance: ${Number(senderUsdcBalance) / 1000000} USDC`)
// [!endregion checkBalance]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account,
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	chain: baseSepolia,
	bundlerTransport: http(bundlerUrl),
	middleware: {
		gasPrice: async () => {
			return (await bundlerClient.getUserOperationGasPrice()).fast
		},
		sponsorUserOperation: async (args) => {
			const gasEstimates = await bundlerClient.estimateUserOperationGas({
				userOperation: {
					...args.userOperation,
					paymaster: erc20PaymasterAddress,
				},
			})

			return {
				...gasEstimates,
				paymaster: erc20PaymasterAddress,
			}
		},
	},
})
// [!endregion smartAccountClient]

// [!region submit]
const txHash = await smartAccountClient.sendTransaction({
	to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
	value: 0n,
	data: "0x1234",
})

console.log(`User operation included: https://sepolia.basescan.org/tx/${txHash}`)
// [!endregion submit]
