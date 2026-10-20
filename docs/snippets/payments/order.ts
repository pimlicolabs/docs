// [!region order]
import { type Address, keccak256, toHex } from "viem"

// Shared by the checkout frontend and your backend
export function orderNonceKey(orderId: string): bigint {
	return BigInt(keccak256(toHex(`order:${orderId}`))) >> 64n // fits the 192-bit nonce key
}

export type Order = {
	id: string
	merchant: Address // the address that receives USDC
	amount: bigint // USDC base units (6 decimals)
}
// [!endregion order]
