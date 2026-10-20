// [!region clients7702]
import { createSmartAccountClient } from "permissionless"
import { to7702SimpleSmartAccount } from "permissionless/accounts"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, encodeFunctionData, erc20Abi, type Hex, http, parseUnits } from "viem"
import { entryPoint08Address } from "viem/account-abstraction"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"

const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" // USDC on Base
const SIMPLE_7702_IMPLEMENTATION = "0xe6Cae83BdE06E4c305530e199D7217f42808555B"

const pimlicoUrl = `https://api.pimlico.io/v2/${base.id}/rpc?apikey=YOUR_PIMLICO_API_KEY`

const publicClient = createPublicClient({
	chain: base,
	transport: http("https://mainnet.base.org"),
})

const pimlicoClient = createPimlicoClient({
	chain: base,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint08Address,
		version: "0.8",
	},
})

// The user's existing EOA. It must be a signer that can sign EIP-7702 authorizations.
const eoa = privateKeyToAccount(process.env.EOA_PRIVATE_KEY as Hex)

// The smart account address is the EOA's own address
const account = await to7702SimpleSmartAccount({
	client: publicClient,
	owner: eoa,
})

const smartAccountClient = createSmartAccountClient({
	account,
	chain: base,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion clients7702]

// [!region send7702]
const transferCall = {
	to: USDC,
	value: 0n,
	data: encodeFunctionData({
		abi: erc20Abi,
		functionName: "transfer",
		args: ["0x1111111111111111111111111111111111111111", parseUnits("25", 6)],
	}),
} as const

// The EOA only has code once its EIP-7702 delegation has landed
const isDelegated = await account.isDeployed()

const txHash = await smartAccountClient.sendTransaction({
	calls: [transferCall],
	// Only the first user operation needs to carry the signed authorization
	authorization: isDelegated
		? undefined
		: await eoa.signAuthorization({
				address: SIMPLE_7702_IMPLEMENTATION,
				chainId: base.id,
				nonce: await publicClient.getTransactionCount({ address: eoa.address }),
			}),
})

console.log(`https://basescan.org/tx/${txHash}`)
// [!endregion send7702]
