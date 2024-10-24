// [!region main]
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base"
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider"
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal"
import { EIP1193Provider } from "viem"

const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0xaa36a7",
    rpcTarget: "https://rpc.ankr.com/eth_sepolia",
    displayName: "Ethereum Sepolia Testnet",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    ticker: "ETH",
    tickerName: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
}

const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
})

// Config options here will be specific to your project.  See the Web3Auth docs for more info.
const web3AuthOptions: Web3AuthOptions = {
    // TODO: Replace with your Web3Auth client ID
    // Get it from https://dashboard.web3auth.io/
    clientId: "YOUR_WEB3AUTH_CLIENT_ID",
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    privateKeyProvider,
}

const web3auth = new Web3Auth(web3AuthOptions)

// Get the Provider and EOA address (this will be the address of the signer) from Web3Auth
const smartAccountOwner = web3auth.provider as EIP1193Provider

if (!smartAccountOwner) {
    throw new Error("No provider found")
}
// [!endregion main]