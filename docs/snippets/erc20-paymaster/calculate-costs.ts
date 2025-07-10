// [!region clients]
import { createSmartAccountClient } from "permissionless";
import { toSafeSmartAccount } from "permissionless/accounts";
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { createPublicClient, formatUnits, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { entryPoint07Address } from "viem/account-abstraction";
import { base } from "viem/chains";
import { prepareUserOperationForErc20Paymaster } from "permissionless/experimental/pimlico";

const chain = base;

export const publicClient = createPublicClient({
	chain,
	transport: http("https://mainnet.base.org"),
});

const pimlicoUrl = `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.PIMLICO_API_KEY}`;

const pimlicoClient = createPimlicoClient({
	chain,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
});

const account = await toSafeSmartAccount({
	client: publicClient,
	owners: [
		privateKeyToAccount(
			"0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
		),
	],
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
	version: "1.4.1",
});

const smartAccountClient = createSmartAccountClient({
	account,
	chain,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast;
		},
		prepareUserOperation: prepareUserOperationForErc20Paymaster(pimlicoClient),
	},
});
// [!endregion clients]

// [!region prepareUserOperation]
const token = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const tokenDecimals = 6;

const userOperation = await smartAccountClient.prepareUserOperation({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: 0n,
			data: "0x1234",
		},
	],
	paymasterContext: {
		token,
	},
});

// [!endregion prepareUserOperation]

// [!region calculateCostInToken]

const { costInToken, costInUsd } =
	await pimlicoClient.estimateErc20PaymasterCost({
		userOperation,
		token,
	});

// constInToken is in token decimals
const humanReadableCostInToken = formatUnits(costInToken, tokenDecimals);

// costInUsd is ALWAYS in 6 decimals
const humanReadableCostInUSD = formatUnits(costInUsd, 6); // this should output $1.05

// [!endregion calculateCostInToken]

console.log({ humanReadableCostInUSD, humanReadableCostInToken });
