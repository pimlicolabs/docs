// [!region main]
import { LitAbility, LitActionResource } from "@lit-protocol/auth-helpers"
import { LitNodeClient } from "@lit-protocol/lit-node-client"
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers"
import { AuthCallbackParams } from "@lit-protocol/types"
import { providerToSmartAccountSigner } from "permissionless"

const POLYGON_MUMBAI_RPC_URL = "<YOUR RPC URL HERE>"
const PKP_PUBLIC_KEY = "<YOUR PKP PUBLIC KEY>"

const litNodeClient = new LitNodeClient({
	litNetwork: "cayenne",
	debug: false,
})
await litNodeClient.connect()

const resourceAbilities = [
	{
		resource: new LitActionResource("*"),
		ability: LitAbility.PKPSigning,
	},
]

/**
 * For provisioning keys and setting up authentication methods see documentation below
 * https://developer.litprotocol.com/v2/pkp/minting
 */
const authNeededCallback = async (params: AuthCallbackParams) => {
	const response = await litNodeClient.signSessionKey({
		sessionKey: params.sessionKeyPair,
		statement: params.statement,
		authMethods: [],
		pkpPublicKey: PKP_PUBLIC_KEY,
		expiration: params.expiration,
		resources: params.resources,
		chainId: 1,
	})
	return response.authSig
}

const sessionSigs = await litNodeClient
	.getSessionSigs({
		chain: "ethereum",
		expiration: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
		resourceAbilityRequests: resourceAbilities,
		authNeededCallback,
	})
	.catch((err) => {
		console.log("error while attempting to access session signatures: ", err)
		throw err
	})

const pkpWallet = new PKPEthersWallet({
	pkpPubKey: PKP_PUBLIC_KEY,
	rpc: POLYGON_MUMBAI_RPC_URL,
	controllerSessionSigs: sessionSigs,
})

await pkpWallet.init()

const smartAccountSigner = await providerToSmartAccountSigner(pkpWallet)
// [!endregion main]
