import { signerToSafeSmartAccount } from "permissionless/accounts"
import { publicClient } from "../publicClient"
import { signer } from "../signer"
import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless"
import { sepolia } from "viem/chains"
import { encodePacked, http } from "viem"
import { createPimlicoBundlerClient } from "permissionless/clients/pimlico"
import { pimlicoPaymasterActions } from "permissionless/actions/pimlico"

const apiKey = "YOUR_PIMLICO_API_KEY"
const bundlerUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const pimlicoBundlerClient = createPimlicoBundlerClient({
	transport: http(bundlerUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
}).extend(pimlicoPaymasterActions(ENTRYPOINT_ADDRESS_V07))

// [!region safe-smart-account-client]
import { erc7579Actions } from "permissionless/actions/erc7579"

const safeAccount = await signerToSafeSmartAccount(publicClient, {
	signer,
	safeVersion: "1.4.1",
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	safe4337ModuleAddress: "0x3Fdb5BC686e861480ef99A6E3FaAe03c0b9F32e2", // These are not meant to be used in production as of now.
	erc7579LaunchpadAddress: "0xEBe001b3D534B9B6E2500FB78E67a1A137f561CE", // These are not meant to be used in production as of now.
})

// Extend the client with the ERC7579 actions
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

const isExecutionModeSupported = await smartAccountClient.supportsExecutionMode({
	type: "delegatecall",
	revertOnError: true,
	selector: "0x",
	context: "0x",
})

// [!endregion safe-smart-account-client]
