// [!region client]
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { sepolia } from "viem/chains"

export const pimlicoClient = createPimlicoClient({
	chain: sepolia,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_API_KEY_HERE"),
})
// [!endregion client]
