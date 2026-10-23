// [!region clients]
import { createSmartAccountClient } from "permissionless";
import { toSimpleSmartAccount } from "permissionless/accounts";
import { pimlicoActions } from "permissionless/actions/pimlico";
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { createPublicClient, type Hex, http } from "viem";
import { entryPoint07Address } from "viem/account-abstraction";
import { privateKeyToAccount } from "viem/accounts";
import { base as chain } from "viem/chains"; // or bsc. For Robinhood, define the chain with viem's defineChain

const pimlicoUrl = `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=YOUR_PIMLICO_API_KEY`;

const publicClient = createPublicClient({
	chain,
	transport: http(), // use your own RPC URL in production
});

const pimlicoClient = createPimlicoClient({
	chain,
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
});

const account = await toSimpleSmartAccount({
	client: publicClient,
	owner: privateKeyToAccount(process.env.PRIVATE_KEY as Hex), // the user's signer
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
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
	},
}).extend(
	pimlicoActions({
		entryPoint: {
			address: entryPoint07Address,
			version: "0.7",
		},
	}),
);
// [!endregion clients]

// [!region send]
const receipt = await smartAccountClient.sendUserOperationSync({
	calls: [
		{
			to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
			value: 0n,
			data: "0x1234",
		},
	],
});

if (!receipt.success) {
	throw new Error("The call reverted inside the account");
}

console.log(
	`Included: ${chain.blockExplorers.default.url}/tx/${receipt.receipt.transactionHash}`,
);
// [!endregion send]

// [!region errors]
import { SendUserOperationSyncError } from "permissionless/actions/pimlico";

const calls = [
	{
		to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
		value: 0n,
		data: "0x1234",
	},
] as const;

try {
	await smartAccountClient.sendUserOperationSync({ calls });
} catch (error) {
	if (!(error instanceof SendUserOperationSyncError)) throw error;

	if (error.kind === "pending") {
		// May have been sent: wait for it, don't resend
		await smartAccountClient.waitForUserOperationReceipt({
			hash: error.userOperationHash,
		});
	} else if (error.kind === "bundle_reverted") {
		// Another bundler may have included it first: check before resending
		const included = await smartAccountClient
			.getUserOperationReceipt({ hash: error.userOperationHash })
			.catch(() => null);
		if (!included) await smartAccountClient.sendUserOperationSync({ calls });
	} else if (error.canResend) {
		// not_found: nothing was sent, send the calls again
		await smartAccountClient.sendUserOperationSync({ calls });
	} else {
		// rejected: fix the cause in error.cause, then send again
		throw error;
	}
}
// [!endregion errors]

// [!region boosted]
const boostedClient = createSmartAccountClient({
	account,
	chain,
	bundlerTransport: http(pimlicoUrl),
	// no paymaster: Pimlico bills the gas to your balance
	userOperation: {
		estimateFeesPerGas: async () => ({
			maxFeePerGas: 0n,
			maxPriorityFeePerGas: 0n,
		}),
	},
}).extend(
	pimlicoActions({
		entryPoint: {
			address: entryPoint07Address,
			version: "0.7",
		},
	}),
);

const boostedReceipt = await boostedClient.sendUserOperationSync({ calls });
// [!endregion boosted]
console.log(boostedReceipt);
