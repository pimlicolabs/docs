// [!region main]
import Capsule from "@usecapsule/web-sdk"
import { createCapsuleViemClient } from "@usecapsule/viem-v2-integration"
import { http } from "viem"
import { sepolia } from "viem/chains"

// Param options here will be specific to your project.  See the Capsule docs for more info.
const capsule = new Capsule(env, apiKey)

// Follow the Capsule docs for more instructions on creating the Viem client https://docs.usecapsule.com/integration-guide/signing-transactions
const smartAccountOwner = createCapsuleViemClient(capsule, {
	chain: sepolia,
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})
// [!endregion main]
