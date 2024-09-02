// [!region main]
import { ParticleNetwork } from "@particle-network/auth"
import { ParticleProvider } from "@particle-network/provider"

// Param options here will be specific to your project.  See the Particle docs for more info.
const particle = new ParticleNetwork({
	projectId,
	clientKey,
	appId,
	chainName,
	chainId,
})
const smartAccountOwner = new ParticleProvider(particle.auth)
// [!endregion main]
