// [!region main]
import { OAuthExtension } from "@magic-ext/oauth"
import { Magic as MagicBase } from "magic-sdk"

const magic = new MagicBase(process.env.MAGIC_API_KEY as string, {
	network: {
		rpcUrl: "https://sepolia.rpc.thirdweb.com",
		chainId: 11155111,
	},
	extensions: [new OAuthExtension()],
})

// Get the Provider from Magic and convert it to a smartAccountOwner
const smartAccountOwner = await magic.wallet.getProvider()
// [!endregion main]
