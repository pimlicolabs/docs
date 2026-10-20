import { type Order, orderNonceKey } from "./order"

// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { toSimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, http, type LocalAccount } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base

// Your backend proxy that adds the Pimlico API key and authenticates the shopper
const pimlicoProxyUrl = "https://shop.example.com/api/pimlico/8453"

declare const customerSigner: LocalAccount // embedded wallet / passkey signer

const publicClient = createPublicClient({ chain: base, transport: http() })

const pimlicoClient = createPimlicoClient({
	chain: base,
	transport: http(pimlicoProxyUrl),
	entryPoint: { address: entryPoint07Address, version: "0.7" },
})

const account = await toSimpleSmartAccount({
	client: publicClient,
	owner: customerSigner,
	entryPoint: { address: entryPoint07Address, version: "0.7" },
})

const smartAccountClient = createSmartAccountClient({
	account,
	chain: base,
	bundlerTransport: http(pimlicoProxyUrl),
	paymaster: pimlicoClient,
	paymasterContext: { sponsorshipPolicyId: "sp_checkout_policy" },
	userOperation: {
		estimateFeesPerGas: async () => (await pimlicoClient.getUserOperationGasPrice()).fast,
	},
})
// [!endregion clients]

// [!region pay]
import { encodeFunctionData, erc20Abi } from "viem"
import { decodeNonce } from "permissionless/utils"

export async function payOrder(order: Order) {
	// Tie this user operation to the order: the nonce key is derived from the order ID
	const nonce = await account.getNonce({ key: orderNonceKey(order.id) })
	if (decodeNonce(nonce).sequence > 0n) {
		throw new Error("This account has already sent a payment for this order")
	}

	const userOpHash = await smartAccountClient.sendUserOperation({
		calls: [
			{
				to: USDC,
				value: 0n,
				data: encodeFunctionData({
					abi: erc20Abi,
					functionName: "transfer",
					args: [order.merchant, order.amount],
				}),
			},
		],
		nonce,
	})

	// Hand the hash to your backend, which decides whether the order is paid
	await fetch(`/api/orders/${order.id}/payment`, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ userOpHash }),
	})

	return userOpHash
}
// [!endregion pay]
