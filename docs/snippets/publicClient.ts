// [!region client]
import { createPublicClient, http } from "viem"

export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})
// [!endregion client]
