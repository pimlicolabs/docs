import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"

const privateKey = generatePrivateKey()

export const signer = privateKeyToAccount(privateKey)
