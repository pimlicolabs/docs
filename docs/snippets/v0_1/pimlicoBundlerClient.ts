// [!region client]
import { ENTRYPOINT_ADDRESS_V07, bundlerActions } from "permissionless"
import { pimlicoBundlerActions } from "permissionless/actions/pimlico"
import { createClient, http } from "viem"
import { sepolia } from "viem/chains"

export const pimlicoBundlerClient = createClient({
	chain: sepolia,
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_API_KEY_HERE"),
})
	.extend(bundlerActions(ENTRYPOINT_ADDRESS_V07))
	.extend(pimlicoBundlerActions(ENTRYPOINT_ADDRESS_V07))
// [!endregion client]
