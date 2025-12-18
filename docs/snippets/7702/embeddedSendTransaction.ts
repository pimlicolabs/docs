// [!region createSmartAccount]
import { createPublicClient, Hex, http } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import {
	to7702KernelSmartAccount,
	to7702SimpleSmartAccount,
} from "permissionless/accounts";
import { sepolia } from "viem/chains";

// This is your EOA's private key
const privateKey = generatePrivateKey();

const eoa7702 = privateKeyToAccount(privateKey);

const client = createPublicClient({
	chain: sepolia,
	transport: http("https://sepolia.drpc.org"),
});

// you can use either simple smart account
const simple7702Account = await to7702SimpleSmartAccount({
	client,
	owner: eoa7702,
});

// or use a kernel smart account
const kernel7702Account = await to7702KernelSmartAccount({
	client,
	owner: eoa7702,
});

// [!endregion createSmartAccount]

// [!region setupPaymaster]
import { createPimlicoClient } from "permissionless/clients/pimlico";

const pimlicoAPIKey = "<YOUR_PIMLICO_API_KEY>";

const pimlicoClient = createPimlicoClient({
	chain: sepolia,
	transport: http(
		`https://api.pimlico.io/v2/11155111/rpc?apikey=${pimlicoAPIKey}`,
	),
});
// [!endregion setupPaymaster]

// [!region createSmartAccountClient]

import { createSmartAccountClient } from "permissionless";
import { zeroAddress } from "viem";

const smartAccountClient = createSmartAccountClient({
	client,
	chain: sepolia,
	account: simple7702Account, // or kernel7702Account
	paymaster: pimlicoClient,
	bundlerTransport: http(
		`https://api.pimlico.io/v2/11155111/rpc?apikey=${pimlicoAPIKey}`,
	),
	userOperation: {
		// this is where we setup how on every send transaction/send user operation, gas price will be fetched.
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast;
		},
	},
});
// [!endregion createSmartAccountClient]

// [!region sendTransaction]

const isSmartAccountDeployed = await smartAccountClient.account.isDeployed();

let transactionHash: Hex;

// We only have to add the authorization field if the EOA does not have the authorization code set
if (!isSmartAccountDeployed) {
	transactionHash = await smartAccountClient.sendTransaction({
		to: zeroAddress,
		value: 0n,
		data: "0x",
		authorization: await eoa7702.signAuthorization({
			address: "0xe6Cae83BdE06E4c305530e199D7217f42808555B",
			chainId: sepolia.id,
			nonce: await client.getTransactionCount({
				address: eoa7702.address,
			}),
		}),
	});
} else {
	transactionHash = await smartAccountClient.sendTransaction({
		to: zeroAddress,
		value: 0n,
		data: "0x",
	});
}

// [!endregion sendTransaction]

// [!region sendTransactions]

let transactionHash_2: Hex;

// We only have to add the authorization field if the EOA does not have the authorization code set
if (!isSmartAccountDeployed) {
	transactionHash_2 = await smartAccountClient.sendTransaction({
		calls: [
			{
				to: zeroAddress,
				value: 0n,
				data: "0x",
			},
			{
				to: zeroAddress,
				value: 0n,
				data: "0x",
			},
		],
		authorization: await eoa7702.signAuthorization({
			address: "0xe6Cae83BdE06E4c305530e199D7217f42808555B",
			chainId: sepolia.id,
			nonce: await client.getTransactionCount({
				address: eoa7702.address,
			}),
		}),
	});
} else {
	transactionHash_2 = await smartAccountClient.sendTransaction({
		calls: [
			{
				to: zeroAddress,
				value: 0n,
				data: "0x",
			},
			{
				to: zeroAddress,
				value: 0n,
				data: "0x",
			},
		],
	});
}

// [!endregion sendTransactions]

console.log("Transaction sent:", transactionHash);
console.log("Transaction sent:", transactionHash_2);
