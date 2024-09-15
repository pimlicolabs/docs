// [!region main]
import { ParticleNetwork } from "@particle-network/auth"
import { ParticleProvider } from "@particle-network/provider"
import { providerToSmartAccountSigner } from "permissionless"

// Param options here will be specific to your project.  See the Particle docs for more info.
const particle = new ParticleNetwork({
	projectId,
	clientKey,
	appId,
	chainName,
	chainId,
})
const particleProvider = new ParticleProvider(particle.auth)

// Convert the particleProvider to a SmartAccountSigner
const smartAccountSigner = await providerToSmartAccountSigner(particleProvider)
// [!endregion main]
