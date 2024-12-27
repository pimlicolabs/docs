// [!region imports]
import { createSmartAccountClient } from "permissionless"
import { createPublicClient, getContract, http, parseEther } from "viem"
import { sepolia } from "viem/chains"
// [!endregion imports]

// [!region clients]
export const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://rpc.ankr.com/eth_sepolia"),
})

export const paymasterClient = createPimlicoClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion clients]

// [!region signer]
import { privateKeyToAccount, toAccount } from "viem/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"
import { toSafeSmartAccount } from "permissionless/accounts"

const ownerOne = "0xPUBLIC-ADDRESS-ONE"
const ownerTwo = "0xPUBLIC-ADDRESS-TWO"
const ownerThree = "0xPUBLIC-ADDRESS-THREE"
// [!endregion signer]

// [!region smartAccount]

const owners = [toAccount(ownerOne), toAccount(ownerTwo), toAccount(ownerThree)]

const safeAccount = await toSafeSmartAccount({
	client: publicClient,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	owners,
	saltNonce: 0n, // optional
	version: "1.4.1",
})
// [!endregion smartAccount]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: safeAccount,
	chain: sepolia,
	paymaster: paymasterClient,
	bundlerTransport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"),
	userOperation: {
		estimateFeesPerGas: async () => (await paymasterClient.getUserOperationGasPrice()).fast,
	},
})
// [!endregion smartAccountClient]

// [!region prepare]
const unSignedUserOperation = await smartAccountClient.prepareUserOperation({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
		},
	],
})
// [!endregion prepare]

// [!region sign]
import { SafeSmartAccount } from "permissionless/accounts/safe"

const ownerOneAccount = privateKeyToAccount("0xPRIVATE-KEY-ONE") // this can any LocalAccount | EIP1193Provider | WalletClient

let partialSignatures = await SafeSmartAccount.signUserOperation({
	version: "1.4.1",
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	chainId: sepolia.id,
	owners: owners.map((owner) => toAccount(owner.address)),
	account: ownerOneAccount, // the owner that will sign the user operation
	...unSignedUserOperation,
})

const ownerTwoAccount = privateKeyToAccount("0xPRIVATE-KEY-TWO") // this can any LocalAccount | EIP1193Provider | WalletClient
partialSignatures = await SafeSmartAccount.signUserOperation({
	version: "1.4.1",
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	chainId: sepolia.id,
	owners: owners.map((owner) => toAccount(owner.address)),
	account: ownerTwoAccount, // the owner that will sign the user operation
	signatures: partialSignatures,
	...unSignedUserOperation,
})

const ownerThreeAccount = privateKeyToAccount("0xPRIVATE-KEY-THREE") // this can any LocalAccount | EIP1193Provider | WalletClient
const finalSignature = await SafeSmartAccount.signUserOperation({
	version: "1.4.1",
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	chainId: sepolia.id,
	owners: owners.map((owner) => toAccount(owner.address)),
	account: ownerThreeAccount, // the owner that will sign the user operation
	signatures: partialSignatures,
	...unSignedUserOperation,
})

// [!endregion sign]

// [!region submit]
const userOpHash = await smartAccountClient.sendUserOperation({
	...unSignedUserOperation,
	signature: finalSignature,
})

const receipt = await smartAccountClient.waitForUserOperationReceipt({
	hash: userOpHash,
})
// [!endregion submit]
