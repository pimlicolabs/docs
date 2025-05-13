// [!region client]
import { createPublicClient, Hex, http, zeroAddress } from "viem"
import { decodeNonce } from "permissionless/utils"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"

const publicClient = createPublicClient({
	chain: sepolia,
	transport: http("https://sepolia.rpc.thirdweb.com"),
})

const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion client]

// [!region account]
import { toSimpleSmartAccount } from "permissionless/accounts"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"

export const simpleSmartAccount = await toSimpleSmartAccount({
	client: publicClient,
	owner: privateKeyToAccount(generatePrivateKey()),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion account]

// [!region smart-account-client]
import { sepolia } from "viem/chains"
import { createSmartAccountClient } from "permissionless"
import { getAccountNonce } from "permissionless/actions"

const smartAccountClient = createSmartAccountClient({
	client: publicClient,
	account: simpleSmartAccount,
	chain: sepolia,
	bundlerTransport: http(pimlicoUrl),
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})

// Only sponsor userOps with nonce sequence < 10
const nonce = await getAccountNonce(publicClient, {
	address: simpleSmartAccount.address,
	entryPointAddress: entryPoint07Address,
})
const { sequence } = decodeNonce(nonce)

let txHash: Hex
if (sequence < 10) {
    txHash = await smartAccountClient.sendTransaction({
    	calls: [
    		{
    			to: zeroAddress,
    			value: 0n,
    			data: "0x",
    		},
    	],
    	paymaster: pimlicoClient // [!code ++]
    });
} else {
	txHash = await smartAccountClient.sendTransaction({
		calls: [
			{
				to: zeroAddress,
				value: 0n,
				data: "0x",
			},
		]
	});
}
// [!endregion smart-account-client]
