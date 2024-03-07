const bundlerUrl = "https://api.pimlico.io/v1/sepolia/rpc?apikey=YOUR_API_KEY"
const paymasterUrl = "https://api.pimlico.io/v2/sepolia/rpc?apikey=YOUR_API_KEY"
const rpcUrl = "https://rpc.ankr.com/eth_sepolia"
const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454"
const entryPoint = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
// ---cut---

// [!region imports]
import { simpleSmartAccount } from "@permissionless/wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { walletClientToSmartAccountSigner } from "permissionless"
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico"
import { http } from "viem"
import { sepolia } from "viem/chains"
import { WagmiProvider, createConfig, useConfig } from "wagmi"
import { connect, getPublicClient, getWalletClient } from "wagmi/actions"
import { injected } from "wagmi/connectors"
// [!endregion imports]

// [!region config]
const connectSmartAccount = async () => {
	const config = useConfig()

	const publicClient = getPublicClient(config)
	const walletClient = await getWalletClient(config) // to get metamask or you can do privatekey here

	// or any other paymaster client
	const paymasterClient = createPimlicoPaymasterClient({
		entryPoint,
		transport: http(paymasterUrl),
	})

	const connector = await simpleSmartAccount({
		publicClient,
		bundlerTransport: http(bundlerUrl),
		signer: walletClientToSmartAccountSigner(walletClient),
		factoryAddress,
		entryPoint,
		sponsorUserOperation: paymasterClient.sponsorUserOperation,
	})
	connect(config, { connector })
}
// [!endregion config]

// [!region button]
const ConnectButton = () => {
	return (
		<button onClick={connectSmartAccount} type="button">
			Connect
		</button>
	)
}
// [!endregion button]

// [!region app]
const wagmiConfig = createConfig({
	chains: [sepolia],
	connectors: [injected()],
	transports: {
		[sepolia.id]: http(rpcUrl),
	},
})

const queryClient = new QueryClient()

export function App() {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<ConnectButton />
				{/** ... */}
			</QueryClientProvider>
		</WagmiProvider>
	)
}
// [!endregion app]
