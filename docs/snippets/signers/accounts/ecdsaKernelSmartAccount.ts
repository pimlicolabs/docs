const smartAccountSigner = privateKeyToAccount(generatePrivateKey())

import { ENTRYPOINT_ADDRESS_V06 } from "permissionless"
// [!region main]
import { signerToEcdsaKernelSmartAccount } from "permissionless/accounts"
import { createPublicClient, http } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
	chain: sepolia,
})

const smartAccount = await signerToEcdsaKernelSmartAccount(publicClient, {
	signer: smartAccountSigner,
	entryPoint: ENTRYPOINT_ADDRESS_V06,
})
// [!endregion main]
