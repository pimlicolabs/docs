// [!region authorization]
import { createWalletClient, Hex, http, zeroAddress } from "viem"
import { privateKeyToAccount, privateKeyToAddress } from "viem/accounts"
import { odysseyTestnet } from "viem/chains"
import { eip7702Actions } from "viem/experimental"
import { safeAbiImplementation } from "./safeAbi"
import { getSafeModuleSetupData } from "./getSetupData"
import dotenv from "dotenv"
dotenv.config()

const eoaPrivateKey = process.env.EOA_PRIVATE_KEY as Hex
if (!eoaPrivateKey) throw new Error("EOA_PRIVATE_KEY is required")

const account = privateKeyToAccount(eoaPrivateKey)

const walletClient = createWalletClient({
	account,
	chain: odysseyTestnet,
	transport: http("https://odyssey.ithaca.xyz"),
}).extend(eip7702Actions())

const SAFE_SINGLETON_ADDRESS = "0x41675C099F32341bf84BFc5382aF534df5C7461a"

const authorization = await walletClient.signAuthorization({
	contractAddress: SAFE_SINGLETON_ADDRESS,
})

// [!endregion authorization]

// [!region sendAuthorization]
const SAFE_MULTISEND_ADDRESS = "0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526"
const SAFE_4337_MODULE_ADDRESS = "0x75cf11467937ce3F2f357CE24ffc3DBF8fD5c226"

const safePrivateKey = process.env.SAFE_PRIVATE_KEY as Hex | undefined
if (!safePrivateKey) throw new Error("SAFE_PRIVATE_KEY is required")

// Parameters for Safe's setup call.
const owners = [privateKeyToAddress(safePrivateKey)]
const signerThreshold = 1n
const setupAddress = SAFE_MULTISEND_ADDRESS
const setupData = getSafeModuleSetupData()
const fallbackHandler = SAFE_4337_MODULE_ADDRESS
const paymentToken = zeroAddress
const paymentValue = 0n
const paymentReceiver = zeroAddress

const txHash = await walletClient.writeContract({
	address: account.address,
	abi: safeAbiImplementation,
	functionName: "setup",
	args: [
		owners,
		signerThreshold,
		setupAddress,
		setupData,
		fallbackHandler,
		paymentToken,
		paymentValue,
		paymentReceiver,
	],
	authorizationList: [authorization],
})

console.log(`Submitted: https://odyssey-explorer.ithaca.xyz/tx/${txHash}`)
// [!endregion sendAuthorization]
