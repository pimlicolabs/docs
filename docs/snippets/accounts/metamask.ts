// [!region clients]
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { entryPoint07Address } from "viem/account-abstraction";

export const publicClient = createPublicClient({
	chain: sepolia,
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

const owner = privateKeyToAccount("0xPRIVATE_KEY");
// [!endregion signer]

// [!region delegateSigner]
import { privateKeyToAccount } from "viem/accounts";

const delegateSigner = privateKeyToAccount("0xPRIVATE_KEY");
// [!endregion delegateSigner]

// [!region smartAccount]
import {
	Implementation,
	toMetaMaskSmartAccount,
} from "@metamask/smart-accounts-kit";

const delegatorSmartAccount = await toMetaMaskSmartAccount({
	client: publicClient,
	implementation: Implementation.Hybrid,
	deployParams: [owner.address, [], [], []],
	deploySalt: "0x",
	signer: { account: owner },
});
// [!endregion smartAccount]

// [!region delegateSmartAccount]
import {
	Implementation,
	toMetaMaskSmartAccount,
} from "@metamask/smart-accounts-kit";

const delegateSmartAccount = await toMetaMaskSmartAccount({
	client: publicClient,
	implementation: Implementation.Hybrid,
	deployParams: [delegateSigner.address, [], [], []],
	deploySalt: "0x",
	signer: { account: delegateSigner },
});
// [!endregion delegateSmartAccount]

// [!region createDelegation]
import { createDelegation } from "@metamask/smart-accounts-kit";
import { parseUnits } from "viem";

const delegation = createDelegation({
	to: delegateSmartAccount.address,
	from: delegatorSmartAccount.address,
	environment: delegatorSmartAccount.environment
	scope: {
		type: "erc20TransferAmount",
		tokenAddress,
		maxAmount: parseUnits("10", 6),
	},
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
import { createSmartAccountClient } from "permissionless";

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
import { createSmartAccountClient } from "permissionless";

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
import { parseEther } from "viem";

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
import { getContract } from "viem";

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
import { DelegationManager } from "@metamask/smart-accounts-kit/contracts";
import { createExecution, ExecutionMode } from "@metamask/smart-accounts-kit";
import { encodeFunctionData, parseEther } from "viem";

const delegations = [signedDelegation];

// Actual execution to be performed by the delegate account
const executions = [
	createExecution({
		target: "0xFC3e86566895Fb007c6A0d3809eb2827DF94F751",
		callData: encodeFunctionData({
			abi: tokenAbi,
			functionName: "mint",
			args: ["0x_MY_ADDRESS_TO_MINT_TOKENS", parseEther("1")],
		}),
	}),
];

const redeemDelegationCalldata = DelegationManager.encode.redeemDelegations({
	delegations: [delegations],
	modes: [ExecutionMode.SingleDefault],
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
