// [!region main]
import Para from "@getpara/web-sdk"
import { createParaViemClient } from "@getpara/viem-v2-integration"
import { walletClientToSmartAccountSigner } from "permissionless"
import { http } from "viem"
import { sepolia } from "viem/chains"

// Param options here will be specific to your project.  See the Para docs for more info.
const para = new Para(env, apiKey)

// Convert a Para viem client to a SmartAccountSigner
// Follow the Para docs for more instructions on creating the Viem client https://docs.getpara.com/integration-guide/signing-transactions
const viemClient = createParaViemClient(para, {
	chain: sepolia,
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

const smartAccountSigner = walletClientToSmartAccountSigner(viemClient)
// [!endregion main]
