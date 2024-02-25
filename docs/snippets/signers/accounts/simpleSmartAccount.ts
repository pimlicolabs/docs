const smartAccountSigner = privateKeyToAccount(generatePrivateKey())

import { ENTRYPOINT_ADDRESS_V06 } from "permissionless"
// [!region main]
import { signerToSimpleSmartAccount } from "permissionless/accounts"
import { createPublicClient, http } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
	chain: sepolia,
})

const smartAccount = await signerToSimpleSmartAccount(publicClient, {
	signer: smartAccountSigner,
	factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
	entryPoint: ENTRYPOINT_ADDRESS_V06,
})
// [!endregion main]
