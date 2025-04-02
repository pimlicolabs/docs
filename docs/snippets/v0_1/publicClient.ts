// [!region client]
import { createPublicClient, http } from "viem"

export const publicClient = createPublicClient({
	transport: http("https://sepolia.rpc.thirdweb.com"),
})
// [!endregion client]
