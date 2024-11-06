import { publicClient } from "../publicClient"
import { createSmartAccountClient } from "permissionless"
import { sepolia } from "viem/chains"
import { http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { erc7579Actions } from "permissionless/actions/erc7579"
import { owner } from "../owner"
import { toSafeSmartAccount } from "permissionless/accounts"

const apiKey = "YOUR_PIMLICO_API_KEY"
const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	chain: sepolia,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
const safeAccount = await toSafeSmartAccount({
	client: publicClient,
	owners: [owner],
	version: "1.4.1",
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	safe4337ModuleAddress: "0x7579EE8307284F293B1927136486880611F20002",
	erc7579LaunchpadAddress: "0x7579011aB74c46090561ea277Ba79D510c6C00ff",
	attesters: ["0x000000333034E9f539ce08819E12c1b8Cb29084d"], // This address belongs to Rhinestone. By designating them as attesters, you authorize that only modules explicitly approved by Rhinestone can be installed on your safe.
	attestersThreshold: 1,
})

// Extend the client with the ERC7579 actions
const smartAccountClient = createSmartAccountClient({
	account: safeAccount,
	chain: sepolia,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
}).extend(erc7579Actions())
