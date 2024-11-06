import { Address, Hex } from "viem"

export type MagicSpendCall = {
    to: Address
    data: Hex
    value: bigint
}

export type MagicSpendWithdrawal = {
    token: Address
    amount: bigint
    chainId: bigint
    recipient: Address
    preCalls: MagicSpendCall[]
    postCalls: MagicSpendCall[]
    validUntil: bigint
    validAfter: bigint
    salt: bigint
}

export type MagicSpendAssetAllowance = {
    token: Address
    amount: bigint
    chainId: bigint
}

export type MagicSpendAllowance = {
    account: Address
    assets: MagicSpendAssetAllowance[]
    validUntil: bigint
    validAfter: bigint
    salt: bigint
    operator: Address
}