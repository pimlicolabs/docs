import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const smartAccountSigner = privateKeyToAccount(generatePrivateKey())

// [!region main]
import { createSmartAccountClient } from "permissionless";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"
import { toEcdsaKernelSmartAccount } from "permissionless/accounts";

const publicClient = createPublicClient({
  chain: sepolia, // or whatever chain you are using
  transport: http()
})

const pimlicoUrl = `https://api-staging.pimlico.io/v2/sepolia/rpc?apikey=<PIMLICO_API_KEY>`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	}
})

const simpleSmartAccount = await toEcdsaKernelSmartAccount({
	owners: [smartAccountSigner],
	client: publicClient,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7"
	},
})

const smartAccountClient = createSmartAccountClient({
  account: simpleSmartAccount,
  chain: sepolia,
  bundlerTransport: http(pimlicoUrl),
  paymaster: pimlicoClient,
  userOperation: {
    estimateFeesPerGas: async () => {
      return (await pimlicoClient.getUserOperationGasPrice()).fast
    },
  }
})

// [!endregion main]
