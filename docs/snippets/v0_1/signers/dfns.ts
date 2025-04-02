const DFNS_PRIVATE_KEY = null
const DFNS_CRED_ID = null
const DFNS_APP_ORIGIN = null
const DFNS_APP_ID = null
const DFNS_AUTH_TOKEN = null
const DFNS_API_URL = "https://api.dfns.ninja"
const SEPOLIA_WALLET_ID = null

// [!region main]
import { DfnsWallet } from "@dfns/lib-viem"
import { DfnsApiClient } from "@dfns/sdk"
import { AsymmetricKeySigner } from "@dfns/sdk-keysigner"
import { walletClientToSmartAccountSigner } from "permissionless"
import { AccountSource, createWalletClient, http } from "viem"
import { toAccount } from "viem/accounts"

const initDfnsWallet = (walletId: string) => {
	const signer = new AsymmetricKeySigner({
		privateKey: DFNS_PRIVATE_KEY,
		credId: DFNS_CRED_ID,
		appOrigin: DFNS_APP_ORIGIN,
	})

	const dfnsClient = new DfnsApiClient({
		appId: DFNS_APP_ID,
		authToken: DFNS_AUTH_TOKEN,
		baseUrl: DFNS_API_URL,
		signer,
	})

	return DfnsWallet.init({
		walletId,
		dfnsClient,
		maxRetries: 10,
	})
}

const sepoliaWallet = await initDfnsWallet(SEPOLIA_WALLET_ID)
const account = toAccount(sepoliaWallet as AccountSource)
const walletClient = createWalletClient({
	account,
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

const smartAccountSigner = walletClientToSmartAccountSigner(walletClient)
// [!endregion main]
