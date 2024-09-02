// [!region client]
import { createPublicClient, http } from "viem"
import { sepolia } from "viem/chains"

export const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})
// [!endregion client]
