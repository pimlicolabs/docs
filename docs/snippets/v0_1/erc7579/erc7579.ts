// [!region imports]
import { signerToSafeSmartAccount } from "permissionless/accounts"
import { signer } from "../signer"
import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless"
import { sepolia } from "viem/chains"
import { encodePacked, http } from "viem"
import { createPimlicoBundlerClient } from "permissionless/clients/pimlico"
import { pimlicoPaymasterActions } from "permissionless/actions/pimlico"
import { erc7579Actions } from "permissionless/actions/erc7579"
import { createPublicClient } from "viem"
// [!endregion imports]

// [!region clients]
const apiKey = "YOUR_PIMLICO_API_KEY"
const bundlerUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

const pimlicoBundlerClient = createPimlicoBundlerClient({
	transport: http(bundlerUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
}).extend(pimlicoPaymasterActions(ENTRYPOINT_ADDRESS_V07))
// [!endregion clients]

// [!region smartAccount]
const safeAccount = await signerToSafeSmartAccount(publicClient, {
	signer,
	safeVersion: "1.4.1",
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	safe4337ModuleAddress: "0x7579EE8307284F293B1927136486880611F20002", 
	erc7579LaunchpadAddress: "0x7579011aB74c46090561ea277Ba79D510c6C00ff", 
	attesters: ["0x000000333034E9f539ce08819E12c1b8Cb29084d"],
	attestersThreshold: 1
})
// [!endregion smartAccount]

// Extend the client with the ERC7579 actions
// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: safeAccount,
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	chain: sepolia,
	bundlerTransport: http(bundlerUrl),
	middleware: {
		gasPrice: async () => {
			return (await pimlicoBundlerClient.getUserOperationGasPrice()).fast
		},
		sponsorUserOperation: pimlicoBundlerClient.sponsorUserOperation,
	},
}).extend(erc7579Actions({ entryPoint: ENTRYPOINT_ADDRESS_V07 }))
// [!endregion smartAccountClient]

// [!region installModule]
const ownableExecutorModule = "0xc98B026383885F41d9a995f85FC480E9bb8bB891"
const moduleData = encodePacked(["address"], ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"])
const userOpHash = await smartAccountClient.installModule({
	type: "executor",
	address: ownableExecutorModule,
	context: moduleData,
})

const receipt = await pimlicoBundlerClient.waitForUserOperationReceipt({ hash: userOpHash })
// [!endregion installModule]

// [!region supportsExecutionMode]
const isExecutionModeSupported = await smartAccountClient.supportsExecutionMode({
	type: "delegatecall",
	revertOnError: true,
	selector: "0x",
	context: "0x",
})
// [!endregion supportsExecutionMode]

console.log(receipt)
