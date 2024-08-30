// [!region main]
import {
	ChainId,
	FireblocksWeb3Provider,
	type FireblocksProviderConfig,
} from "@fireblocks/fireblocks-web3-provider"
import { providerToSmartAccountSigner } from "permissionless"

// Config options here will be specific to your project.  See the Fireblocks docs for more info.
const fireblocksProviderConfig: FireblocksProviderConfig = {
	apiKey: process.env.FIREBLOCKS_API_KEY,
	privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH,
	chainId: ChainId.SEPOLIA,
}
const fireblocksWeb3Provider = new FireblocksWeb3Provider(fireblocksProviderConfig)

// Convert the FireblocksWeb3Provider to a SmartAccountSigner
const smartAccountSigner = providerToSmartAccountSigner(fireblocksWeb3Provider)
// [!endregion main]
