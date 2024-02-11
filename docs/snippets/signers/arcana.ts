// [!region main]
import { AuthProvider, type ConstructorParams } from "@arcana/auth"
import { providerToSmartAccountSigner } from "permissionless"

// Param options here will be specific to your project.  See the Arcana Auth docs for more info.
const params: ConstructorParams = {}
const authProvider = new AuthProvider(clientId, params)

// Convert the authProvider to a SmartAccountSigner
const smartAccountSigner = await providerToSmartAccountSigner(authProvider.provider)
// [!endregion main]
