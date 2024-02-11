const smartAccountSigner = privateKeyToAccount(generatePrivateKey())

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
	entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
})
// [!endregion main]
