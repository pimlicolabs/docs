const smartAccountSigner = privateKeyToAccount(generatePrivateKey())

import { ENTRYPOINT_ADDRESS_V06 } from "permissionless"
// [!region main]
import { signerToSafeSmartAccount } from "permissionless/accounts"
import { createPublicClient, http } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
	chain: sepolia,
})

const smartAccount = await signerToSafeSmartAccount(publicClient, {
	signer: smartAccountSigner,
	safeVersion: "1.4.1",
	entryPoint: ENTRYPOINT_ADDRESS_V06,
})
// [!endregion main]
