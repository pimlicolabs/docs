// [!region main]
import {
	ChainId,
	FireblocksWeb3Provider,
	type FireblocksProviderConfig,
} from "@fireblocks/fireblocks-web3-provider"

// Config options here will be specific to your project.  See the Fireblocks docs for more info.
const fireblocksProviderConfig: FireblocksProviderConfig = {
	apiKey: process.env.FIREBLOCKS_API_KEY,
	privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH,
	chainId: ChainId.SEPOLIA,
}
const smartAccountOwner = new FireblocksWeb3Provider(fireblocksProviderConfig)
// [!endregion main]
