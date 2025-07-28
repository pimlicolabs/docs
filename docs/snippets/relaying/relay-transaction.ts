// Example ABI for demonstration
const yourABI = [
	{
		inputs: [
			{ name: "recipient", type: "address" },
			{ name: "amount", type: "uint256" },
		],
		name: "someFunction",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
] as const;

// [!region main]
import { createWalletClient, http, zeroAddress } from "viem";
import { baseSepolia } from "viem/chains";

const walletClient = createWalletClient({
	transport: http("https://api.pimlico.io/v2/wallet/rpc?apikey=<API_KEY>"),
});

const result = await walletClient.sendCalls({
	chain: baseSepolia,
	calls: [
		{
			to: "0xYOUR_CONTRACT",
			abi: yourABI,
			functionName: "someFunction",
			args: [zeroAddress, 1n],
		},
	],
});

await walletClient.waitForCallsStatus({
	id: result.id,
});
// [!endregion main]
