// [!region main]
import { OAuthExtension } from "@magic-ext/oauth"
import { Magic as MagicBase } from "magic-sdk"
import { providerToSmartAccountSigner } from "permissionless"

const magic = new MagicBase(process.env.MAGIC_API_KEY as string, {
	network: {
		rpcUrl: "https://sepolia.rpc.thirdweb.com",
		chainId: 11155111,
	},
	extensions: [new OAuthExtension()],
})

// Get the Provider from Magic and convert it to a SmartAccountSigner
const magicProvider = await magic.wallet.getProvider()
const smartAccountSigner = await providerToSmartAccountSigner(magicProvider)
// [!endregion main]
