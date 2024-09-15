// [!region main]
import { TurnkeyClient } from "@turnkey/http"
import { createAccount } from "@turnkey/viem"
import { walletClientToSmartAccountSigner } from "permissionless"
import { createWalletClient, http } from "viem"

// Param options here will be specific to your project.  See the Turnkey docs for more info.
const turnkeyClient = new TurnkeyClient({ baseUrl: "" }, stamper)

const turnkeyAccount = await createAccount({
	client: turnkeyClient,
	organizationId: subOrganizationId, // Your subOrganization id
	signWith: signWith, // Your suborganization `signWith` param.
})

// Create a SmartAccountSigner from the turnkeyAccount
const walletClient = createWalletClient({
	account: turnkeyAccount,
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

const smartAccountSigner = walletClientToSmartAccountSigner(walletClient)
// [!endregion main]
