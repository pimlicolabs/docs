// [!region imports]
import { createSmartAccountClient } from "permissionless";
import {
	createPublicClient,
	encodeFunctionData,
	getContract,
	Hex,
	http,
	parseEther,
} from "viem";
import { sepolia } from "viem/chains";
// [!endregion imports]

// [!region clients]
export const publicClient = createPublicClient({
	transport: http("https://sepolia.rpc.thirdweb.com"),
});

export const paymasterClient = createPimlicoClient({
	transport: http("https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY"),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
});
// [!endregion clients]

// [!region signer]
import { privateKeyToAccount } from "viem/accounts";
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { entryPoint07Address } from "viem/account-abstraction";

const owner = privateKeyToAccount("0xPRIVATE_KEY");
// [!endregion signer]

// [!region delegateSigner]
const delegateSigner = privateKeyToAccount("0xPRIVATE_KEY");
// [!endregion delegateSigner]

// [!region smartAccount]
import {
	Implementation,
	toMetaMaskSmartAccount,
} from "@metamask/delegation-toolkit";

const delegatorSmartAccount = await toMetaMaskSmartAccount({
	client: publicClient,
	implementation: Implementation.Hybrid,
	deployParams: [owner.address, [], [], []],
	deploySalt: "0x",
	signatory: { account: owner },
});

// [!endregion smartAccount]

// [!region delegateSmartAccount]
const delegateSmartAccount = await toMetaMaskSmartAccount({
	client: publicClient,
	implementation: Implementation.Hybrid,
	deployParams: [delegateSigner.address, [], [], []],
	deploySalt: "0x",
	signatory: { account: delegateSigner },
});
// [!endregion delegateSmartAccount]

// [!region createDelegation]
import { createDelegation } from "@metamask/delegation-toolkit";

const delegation = createDelegation({
	to: delegateSmartAccount.address,
	from: delegatorSmartAccount.address,
	caveats: [],
});
// [!endregion createDelegation]

// [!region signDelegation]
const signature = await delegatorSmartAccount.signDelegation({
	delegation,
});

const signedDelegation = {
	...delegation,
	signature,
};
// [!endregion signDelegation]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account: delegatorSmartAccount,
	chain: sepolia,
	paymaster: paymasterClient,
	bundlerTransport: http(
		"https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY",
	),
	userOperation: {
		estimateFeesPerGas: async () =>
			(await paymasterClient.getUserOperationGasPrice()).fast,
	},
});
// [!endregion smartAccountClient]

// [!region delegateSmartAccountClient]
const delegateSmartAccountClient = createSmartAccountClient({
	account: delegateSmartAccount,
	chain: sepolia,
	paymaster: paymasterClient,
	bundlerTransport: http(
		"https://api.pimlico.io/v2/sepolia/rpc?apikey=API_KEY",
	),
	userOperation: {
		estimateFeesPerGas: async () =>
			(await paymasterClient.getUserOperationGasPrice()).fast,
	},
});
// [!endregion delegateSmartAccountClient]

// [!region submit]
const txHash_$1 = await smartAccountClient.sendTransaction({
	to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
	value: parseEther("0.1"),
});
// [!endregion submit]

const tokenAbi = [
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "mint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
] as const;

// [!region submitNft]
const nftContract = getContract({
	address: "0xFC3e86566895Fb007c6A0d3809eb2827DF94F751",
	abi: tokenAbi,
	client: {
		public: publicClient,
		wallet: smartAccountClient,
	},
});

const txHash_$2 = await nftContract.write.mint([
	"0x_MY_ADDRESS_TO_MINT_TOKENS",
	parseEther("1"),
]);
// [!endregion submitNft]

// [!region submitBatch]
const userOpHash_$3 = await smartAccountClient.sendUserOperation({
	calls: [
		{
			to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			value: parseEther("0.1"),
			data: "0x",
		},
		{
			to: "0x1440ec793aE50fA046B95bFeCa5aF475b6003f9e",
			value: parseEther("0.1"),
			data: "0x1234",
		},
	],
});
// [!endregion submitBatch]

// [!region sendTransactionWithDelegation]
import { DelegationManager } from "@metamask/delegation-toolkit/contracts";
import { SINGLE_DEFAULT_MODE } from "@metamask/delegation-toolkit/utils";

const delegations = [signedDelegation];

// Actual execution to be performed by the delegate account
const executions = [
	{
		target: "0xFC3e86566895Fb007c6A0d3809eb2827DF94F751",
		value: parseEther("0"),
		callData: encodeFunctionData({
			abi: tokenAbi,
			functionName: "mint",
			args: ["0x_MY_ADDRESS_TO_MINT_TOKENS", parseEther("1")],
		}),
	},
];

const redeemDelegationCalldata = DelegationManager.encode.redeemDelegations({
	delegations: [delegations],
	modes: [SINGLE_DEFAULT_MODE],
	executions: [executions],
});

const txHash_$4 = await delegateSmartAccountClient.sendTransaction({
	calls: [
		{
			to: delegateSmartAccount.address,
			data: redeemDelegationCalldata,
		},
	],
});
// [!endregion sendTransactionWithDelegation]
