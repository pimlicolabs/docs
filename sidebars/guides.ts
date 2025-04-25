export const gettingStartedSidebar = [
	{
		text: "Overview",
		link: "/guides/getting-started",
	},
	{
		text: "Supported Chains",
		link: "/guides/supported-chains",
	},
	{
		text: "Pricing",
		link: "/guides/pricing",
	},
	{
		text: "Why Pimlico",
		items: [
			{
				text: "For Startups",
				link: "/guides/why-pimlico/startups",
			},
			{
				text: "For Enterprise",
				link: "/guides/why-pimlico/enterprise",
			},
		],
	},
];

export const eip7702Sidebar = [
	{
		text: "Overview",
		link: "/guides/eip7702",
	},
	{
		text: "ERC-4337 vs EIP-7702",
		link: "/guides/eip7702/erc4337-vs-eip7702",
	},
	{
		text: "How to send a user operation from an EOA using EIP-7702",
		link: "/guides/eip7702/demo",
	},
];

export const tutorialSidebar = [
	{
		text: "Send your first gasless transaction",
		link: "/guides/tutorials/tutorial-1",
	},
	{
		text: "Submit a user operation with an ERC-20 Paymaster",
		link: "/guides/tutorials/tutorial-2",
	},
];

export const howToSidebar = [
	{
		text: "Update your existing app to sponsor gas fees for smart account users",
		link: "/guides/how-to/dapp-gas-sponsorship",
	},
	{
		text: "How to send multiple user operations in parallel",
		link: "/guides/how-to/parallel-transactions",
	},
	{
		text: "ERC-20 Paymaster",
		items: [
			{
				text: "How to send a userOperation from a EOA using EIP-7702",
				link: "/guides/how-to/eip-7702-demo",
			},
			{
				text: "How to use the ERC-20 Paymaster",
				link: "/guides/how-to/erc20-paymaster/how-to/use-paymaster",
			},
			{
				text: "How to use the ERC-20 Paymaster without unlimited token approvals",
				link: "/guides/how-to/erc20-paymaster/how-to/use-paymaster-without-unlimited-approval",
			},
			{
				text: "How to estimate token cost and cost in USD",
				link: "/guides/how-to/erc20-paymaster/how-to/calculate-costs",
			},
		],
	},
	{
		text: "Sponsorship Policies",
		items: [
			{
				text: "How to use sponsorship policies",
				link: "/guides/how-to/sponsorship-policies",
			},
			{
				text: "Webhook docs",
				link: "/guides/how-to/sponsorship-policies/webhook",
			},
			{
				text: "How to create a gas program",
				link: "/guides/how-to/sponsorship-policies/gas-program",
			},
		],
	},
	{
		text: "Security",
		items: [
			{
				text: "How to protect your API keys",
				link: "/guides/how-to/security/protect-api-keys",
			},
		],
	},
	{
		text: "Testing",
		items: [
			{
				text: "Docker",
				link: "/guides/how-to/testing/docker",
			},
			{
				text: "Build Bear",
				link: "/guides/how-to/testing/build-bear",
			},
		],
	},
	{
		text: "Debugging",
		items: [
			{
				text: "How to debug dropped user operations",
				link: "/guides/how-to/debugging/dropped-user-operations",
			},
		],
	},
	{
		text: "Accounts",
		items: [
			{
				text: "EntryPoint support",
				link: "/guides/how-to/accounts/support",
			},
			{
				text: "Account types comparison",
				link: "/guides/how-to/accounts/comparison",
			},
			{
				text: "Safe",
				link: "/guides/how-to/accounts/use-safe-account",
			},
			{
				text: "Safe (multiple signers)",
				link: "/guides/how-to/accounts/use-safe-account-with-multiple-signers",
			},
			{
				text: "Kernel",
				link: "/guides/how-to/accounts/use-kernel-account",
			},
			{
				text: "Coinbase Wallet",
				link: "/guides/how-to/accounts/use-coinbase-account",
			},
			{
				text: "Simple Account",
				link: "/guides/how-to/accounts/use-simple-account",
			},
			{
				text: "Thirdweb",
				link: "/guides/how-to/accounts/use-thirdweb-account",
			},
			{
				text: "Trust Wallet",
				link: "/guides/how-to/accounts/use-trustwallet-account",
			},
			{
				text: "Biconomy Nexus",
				link: "/guides/how-to/accounts/use-nexus-account",
			},
			{
				text: "Alchemy Light Account",
				link: "/guides/how-to/accounts/use-light-account",
			},
			{
				text: "How to use an ERC-7579 compatible smart account",
				link: "/guides/how-to/accounts/use-erc7579-account",
			},
		],
	},
	{
		text: "Paymasters",
		items: [
			{
				text: "How to use a custom Paymaster",
				link: "/guides/how-to/paymasters/use-custom-paymaster",
			},
			{
				text: "How to conditionally sponsor a user operation",
				link: "/guides/how-to/paymasters/conditional-sponsoring",
			},
		],
	},
	{
		text: "Signers",
		link: "/guides/how-to/signers",
		items: [
			{
				text: "Passkey (WebAuthn) signer",
				link: "/guides/how-to/signers/passkey",
			},
			{
				text: "Passkey (WebAuthn) server",
				link: "/guides/how-to/signers/passkey-server",
			},
			{
				text: "Dynamic",
				link: "/guides/how-to/signers/dynamic",
			},
			{
				text: "Privy",
				link: "/guides/how-to/signers/privy",
			},
			{
				text: "Magic",
				link: "/guides/how-to/signers/magic",
			},
			{
				text: "Lit Protocol",
				link: "/guides/how-to/signers/lit-protocol",
			},
			{
				text: "Web3Auth",
				link: "/guides/how-to/signers/web3auth",
			},
			{
				text: "Turnkey",
				link: "/guides/how-to/signers/turnkey",
			},
			{
				text: "Fireblocks",
				link: "/guides/how-to/signers/fireblocks",
			},
			{
				text: "Para",
				link: "/guides/how-to/signers/para",
			},
			{
				text: "DFNS",
				link: "/guides/how-to/signers/dfns",
			},
			{
				text: "Arcana Auth",
				link: "/guides/how-to/signers/arcana",
			},
			{
				text: "Particle Network",
				link: "/guides/how-to/signers/particle-network",
			},
		],
	},
];
export const conceptualSidebar = [
	{
		text: "Overview",
		link: "/guides/conceptual",
	},
	{
		text: "Account Abstraction",
		link: "/guides/conceptual/account-abstraction",
	},
	{
		text: "ERC-4337",
		link: "/guides/conceptual/erc4337",
	},
	{
		text: "ERC-7579",
		link: "/guides/conceptual/erc7579",
	},
];
