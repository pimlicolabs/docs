// [!region client]
import { bundlerActions } from 'permissionless'
import { pimlicoBundlerActions } from 'permissionless/actions/pimlico'
import { createClient, http } from 'viem'
import { sepolia } from 'viem/chains'

export const pimlicoBundlerClient = createClient({ 
  chain: sepolia,
  transport: http("https://api.pimlico.io/v1/sepolia/rpc?apikey=YOUR_API_KEY_HERE")
})
.extend(bundlerActions)
.extend(pimlicoBundlerActions)
// [!endregion client]