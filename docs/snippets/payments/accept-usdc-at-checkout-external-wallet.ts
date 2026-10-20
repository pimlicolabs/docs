// [!region external]
import { createWalletClient, custom, encodeFunctionData, erc20Abi, type EIP1193Provider } from "viem"
import { base } from "viem/chains"
import type { Order } from "./order"

declare const provider: EIP1193Provider // e.g. window.ethereum
const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

const walletClient = createWalletClient({ chain: base, transport: custom(provider) })

export async function payOrderWithExternalWallet(order: Order) {
	const [address] = await walletClient.requestAddresses()

	const capabilities = await walletClient.getCapabilities({ account: address, chainId: base.id })
	const canSponsor = capabilities.paymasterService?.supported === true

	const { id } = await walletClient.sendCalls({
		account: address,
		calls: [
			{
				to: USDC,
				data: encodeFunctionData({
					abi: erc20Abi,
					functionName: "transfer",
					args: [order.merchant, order.amount],
				}),
			},
		],
		capabilities: canSponsor
			? {
					paymasterService: {
						url: "https://shop.example.com/api/pimlico/8453", // your proxy
						context: { sponsorshipPolicyId: "sp_checkout_policy" },
					},
				}
			: undefined,
	})

	const { status, receipts } = await walletClient.waitForCallsStatus({ id })
	if (status !== "success" || !receipts?.[0]) throw new Error("Payment failed")

	return receipts[0].transactionHash // send this to your backend
}
// [!endregion external]
