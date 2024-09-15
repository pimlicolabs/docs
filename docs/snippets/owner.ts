import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"

const privateKey = generatePrivateKey()

export const owner = privateKeyToAccount(privateKey)
