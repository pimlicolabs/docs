export const multiSendAbi = [
	{
		inputs: [
			{
				internalType: "bytes",
				name: "transactions",
				type: "bytes",
			},
		],
		name: "multiSend",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
] as const
