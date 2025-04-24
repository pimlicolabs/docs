import { defineConfig } from "vocs";
import viteConfig from "./utils";

export const platformSidebar = [
	{
		text: "Overview",
		link: "/references/platform",
	},
	{
		text: "Why Pimlico",
		items: [
			{
				text: "For Startups",
				link: "/references/platform/why-pimlico/startups",
			},
			{
				text: "For Enterprise",
				link: "/references/platform/why-pimlico/enterprise",
			},
		],
	},
	{
		text: "Pricing",
		link: "/references/platform/pricing",
	},
	{
		text: "Supported Chains",
		link: "/references/platform/supported-chains",
	},
	{
		text: "Sponsorship Policies",
		items: [
			{
				text: "How to use sponsorship policies",
				link: "/references/platform/sponsorship-policies",
			},
			{
				text: "Webhook docs",
				link: "/references/platform/sponsorship-policies/webhook",
			},
			{
				text: "How to create a gas program",
				link: "/references/platform/sponsorship-policies/gas-program",
			},
		],
	},
	{
		text: "Security",
		items: [
			{
				text: "How to protect your API keys",
				link: "/references/platform/security/protect-api-keys",
			},
		],
	},
	{
		text: "Debugging",
		items: [
			{
				text: "How to debug dropped user operations",
				link: "/references/platform/debugging/dropped-user-operations",
			},
		],
	},
	{
		text: "API",
		items: [
			{
				text: "Pagination",
				link: "/references/platform/api/pagination",
			},
			{
				text: "Sponsorship Policies",
				link: "/references/platform/api/sponsorship-policies",
				collapsed: false,
				items: [
					{
						text: "The Sponsorship Policy object",
						link: "/references/platform/api/sponsorship-policies/object",
					},
					{
						text: "Retrieve a sponsorship policy",
						link: "/references/platform/api/sponsorship-policies/retrieve",
					},
					{
						text: "List all sponsorship policies",
						link: "/references/platform/api/sponsorship-policies/list",
					},
					{
						text: "Create a sponsorship policy",
						link: "/references/platform/api/sponsorship-policies/create",
					},
					{
						text: "Update a sponsorship policy",
						link: "/references/platform/api/sponsorship-policies/update",
					},
				],
			},
		],
	},
];

export const bundlerSidebar = [
	{
		text: "Overview",
		link: "/references/bundler",
	},
	{
		text: "How to use the bundler",
		link: "/references/bundler/usage",
	},
	{
		text: "How to use Alto in CI/CD testing",
		link: "/references/bundler/testing",
	},
	{
		text: "Self host guide",
		link: "/references/bundler/self-host",
	},
	{ text: "FAQs", link: "/references/bundler/faqs" },
	{
		text: "Endpoints",
		collapsed: false,
		items: [
			{
				text: "eth_sendUserOperation",
				link: "/references/bundler/endpoints/eth_sendUserOperation",
			},
			{
				text: "eth_estimateUserOperationGas",
				link: "/references/bundler/endpoints/eth_estimateUserOperationGas",
			},
			{
				text: "eth_getUserOperationReceipt",
				link: "/references/bundler/endpoints/eth_getUserOperationReceipt",
			},
			{
				text: "eth_getUserOperationByHash",
				link: "/references/bundler/endpoints/eth_getUserOperationByHash",
			},
			{
				text: "eth_supportedEntryPoints",
				link: "/references/bundler/endpoints/eth_supportedEntryPoints",
			},
			{
				text: "pimlico_getUserOperationGasPrice",
				link: "/references/bundler/endpoints/pimlico_getUserOperationGasPrice",
			},
			{
				text: "pimlico_getUserOperationStatus",
				link: "/references/bundler/endpoints/pimlico_getUserOperationStatus",
			},
			{
				text: "pimlico_simulateAssetChanges",
				link: "/references/bundler/endpoints/pimlico_simulateAssetChanges",
			},
		],
	},
	{
		text: "Bundler Errors",
		collapsed: true,
		items: [
			{
				text: "Invalid 'apikey' query parameter",
				link: "/references/bundler/bundler-errors/invalid-api-key",
			},
			{
				text: "Chain is not supported",
				link: "/references/bundler/bundler-errors/chain-not-supported",
			},
			{
				text: "Validation Error: Invalid Discriminator Value",
				link: "/references/bundler/bundler-errors/invalid-discriminator-value",
			},
			{
				text: "Unknown error from alto bundler",
				link: "/references/bundler/bundler-errors/unknown-error",
			},
		],
	},
	{
		text: "EntryPoint Errors",
		link: "/references/bundler/entrypoint-errors",
		collapsed: true,
		items: [
			{
				text: "AA10 sender already constructed",
				link: "/references/bundler/entrypoint-errors/aa10",
			},
			{
				text: "AA13 initCode failed or OOG",
				link: "/references/bundler/entrypoint-errors/aa13",
			},
			{
				text: "AA14 initCode must return sender",
				link: "/references/bundler/entrypoint-errors/aa14",
			},
			{
				text: "AA15 initCode must create sender",
				link: "/references/bundler/entrypoint-errors/aa15",
			},
			{
				text: "AA20 account not deployed",
				link: "/references/bundler/entrypoint-errors/aa20",
			},
			{
				text: "AA21 didn't pay prefund",
				link: "/references/bundler/entrypoint-errors/aa21",
			},
			{
				text: "AA22 expired or not due",
				link: "/references/bundler/entrypoint-errors/aa22",
			},
			{
				text: "AA23 reverted",
				link: "/references/bundler/entrypoint-errors/aa23",
			},
			{
				text: "AA24 signature error",
				link: "/references/bundler/entrypoint-errors/aa24",
			},
			{
				text: "AA25 invalid account nonce",
				link: "/references/bundler/entrypoint-errors/aa25",
			},
			{
				text: "AA30 paymaster not deployed",
				link: "/references/bundler/entrypoint-errors/aa30",
			},
			{
				text: "AA31 paymaster deposit too low",
				link: "/references/bundler/entrypoint-errors/aa31",
			},
			{
				text: "AA32 paymaster expired or not due",
				link: "/references/bundler/entrypoint-errors/aa32",
			},
			{
				text: "AA33 reverted",
				link: "/references/bundler/entrypoint-errors/aa33",
			},
			{
				text: "AA34 signature error",
				link: "/references/bundler/entrypoint-errors/aa34",
			},
			{
				text: "AA40 over verificationGasLimit",
				link: "/references/bundler/entrypoint-errors/aa40",
			},
			{
				text: "AA41 too little verificationGas",
				link: "/references/bundler/entrypoint-errors/aa41",
			},
			{
				text: "AA50 postOp reverted",
				link: "/references/bundler/entrypoint-errors/aa50",
			},
			{
				text: "AA51 prefund below actualGasCost",
				link: "/references/bundler/entrypoint-errors/aa51",
			},
			{
				text: "AA90 invalid beneficiary",
				link: "/references/bundler/entrypoint-errors/aa90",
			},
			{
				text: "AA91 failed send to beneficiary",
				link: "/references/bundler/entrypoint-errors/aa91",
			},
			{
				text: "AA92 internal call only",
				link: "/references/bundler/entrypoint-errors/aa92",
			},
			{
				text: "AA93 invalid paymasterAndData",
				link: "/references/bundler/entrypoint-errors/aa93",
			},
			{
				text: "AA94 gas values overflow",
				link: "/references/bundler/entrypoint-errors/aa94",
			},
			{
				text: "AA95 out of gas",
				link: "/references/bundler/entrypoint-errors/aa95",
			},
			{
				text: "AA96 invalid aggregator",
				link: "/references/bundler/entrypoint-errors/aa96",
			},
		],
	},
];

export const paymasterSidebar = [
	{
		text: "Overview",
		link: "/references/paymaster",
	},
	{
		text: "Verifying Paymaster",
		link: "/references/paymaster/verifying-paymaster",
		items: [
			{
				text: "How to use the Verifying Paymaster",
				link: "/references/paymaster/verifying-paymaster/usage",
			},
			{
				text: "Endpoints",
				link: "/references/paymaster/verifying-paymaster/endpoints",
			},
			{ text: "FAQs", link: "/references/paymaster/verifying-paymaster/faqs" },
			{
				text: "Common Errors",
				link: "/references/paymaster/verifying-paymaster/common-errors",
			},
		],
	},
	{
		text: "ERC-20 Paymaster",
		link: "/references/paymaster/erc20-paymaster",
		items: [
			{ text: "Overview", link: "/references/paymaster/erc20-paymaster" },
			{
				text: "Supported Tokens",
				link: "/references/paymaster/erc20-paymaster/supported-tokens",
			},
			{
				text: "Guides",
				items: [
					{
						text: "How to use the ERC-20 Paymaster",
						link: "/references/paymaster/erc20-paymaster/how-to/use-paymaster",
					},
					{
						text: "How to use the ERC-20 Paymaster without unlimited token approvals",
						link: "/references/paymaster/erc20-paymaster/how-to/use-paymaster-without-unlimited-approval",
					},
					{
						text: "How to estimate token cost and cost in USD",
						link: "/references/paymaster/erc20-paymaster/how-to/calculate-costs",
					},
				],
			},
			{
				text: "Endpoints",
				items: [
					{
						text: "pimlico_getTokenQuotes",
						link: "/references/paymaster/erc20-paymaster/endpoints/pimlico_getTokenQuotes",
					},
					{
						text: "pm_getPaymasterData",
						link: "/references/paymaster/erc20-paymaster/endpoints/pm_getPaymasterData",
					},
					{
						text: "pm_getPaymasterStubData",
						link: "/references/paymaster/erc20-paymaster/endpoints/pm_getPaymasterStubData",
					},
					{
						text: "pm_sponsorUserOperation",
						link: "/references/paymaster/erc20-paymaster/endpoints/pm_sponsorUserOperation",
					},
				],
			},
			{
				text: "Architecture",
				link: "/references/paymaster/erc20-paymaster/architecture",
			},
			{
				text: "Contract Addresses",
				link: "/references/paymaster/erc20-paymaster/contract-addresses",
			},
		],
	},
	{
		text: "ERC-20 Paymaster (permissionless)",
		collapsed: true,
		link: "/references/paymaster/erc20-paymaster-permissionless",
		items: [
			{
				text: "Overview",
				link: "/references/paymaster/erc20-paymaster-permissionless",
			},
			{
				text: "Contract Addresses",
				link: "/references/paymaster/erc20-paymaster-permissionless/contract-addresses",
			},
			{
				text: "Architecture",
				link: "/references/paymaster/erc20-paymaster-permissionless/architecture",
			},
			{
				text: "Guides",
				link: "/references/paymaster/erc20-paymaster-permissionless/guides",
			},
			{
				text: "FAQs",
				link: "/references/paymaster/erc20-paymaster-permissionless/faqs",
			},
		],
	},
];

/*
                    { text: "deployContract", link: "/permissionless/reference/smart-account-actions/deployContract" },
                    { text: "sendTransaction", link: "/permissionless/reference/smart-account-actions/sendTransaction" },
                    { text: "sendTransactions", link: "/permissionless/reference/smart-account-actions/sendTransactions" },
                    { text: "signMessage", link: "/permissionless/reference/smart-account-actions/signMessage" },
                    { text: "signTypedData", link: "/permissionless/reference/smart-account-actions/signTypedData" },
                    { text: "writeContract", link: "/permissionless/reference/smart-account-actions/writeContract" },

*/

export const conceptualSidebar = [
	{
		text: "Overview",
		link: "/conceptual",
	},
	{
		text: "Account Abstraction",
		link: "/conceptual/account-abstraction",
	},
	{
		text: "ERC-4337",
		link: "/conceptual/erc4337",
	},
	{
		text: "ERC-7579",
		link: "/conceptual/erc7579",
	},
	{
		text: "EIP-7702",
		link: "/conceptual/eip7702",
	},
];

export const permissionlessSidebar = [
	{
		text: "Overview",
		link: "/permissionless",
	},
	{
		text: "Why permissionless.js",
		link: "/permissionless/why",
	},
	{
		text: "FAQs",
		link: "/permissionless/faqs",
	},

	{
		text: "Tutorials",
		link: "/permissionless/tutorial",
		items: [
			{
				text: "1. Send your first gasless transaction",
				link: "/permissionless/tutorial/tutorial-1",
			},
			{
				text: "2. Submit a user operation with an ERC-20 Paymaster",
				link: "/permissionless/tutorial/tutorial-2",
			},
		],
	},
	{
		text: "How-to Guides",
		items: [
			{
				text: "Update your existing app to sponsor gas fees for smart account users",
				link: "/permissionless/how-to/dapp-gas-sponsorship",
			},
			{
				text: "How to send multiple user operations in parallel",
				link: "/permissionless/how-to/parallel-transactions",
			},
			{
				text: "How to send a userOperation from a EOA using EIP-7702",
				link: "/permissionless/how-to/eip-7702-demo",
			},
			// {
			//     text: "Error Handling",
			//     link: "/permissionless/how-to/error-handling",
			// },
			{
				text: "Migration Guide",
				link: "/permissionless/how-to/migration-guide",
			},
			{
				text: "Testing",
				items: [
					{
						text: "Docker",
						link: "/permissionless/how-to/testing/docker",
					},
					{
						text: "Build Bear",
						link: "/permissionless/how-to/testing/build-bear",
					},
				],
			},
			{
				text: "Accounts",
				items: [
					{
						text: "EntryPoint support",
						link: "/permissionless/how-to/accounts/support",
					},
					{
						text: "Account types comparison",
						link: "/permissionless/how-to/accounts/comparison",
					},
					{
						text: "Safe",
						link: "/permissionless/how-to/accounts/use-safe-account",
					},
					{
						text: "Safe (multiple signers)",
						link: "/permissionless/how-to/accounts/use-safe-account-with-multiple-signers",
					},
					{
						text: "Kernel",
						link: "/permissionless/how-to/accounts/use-kernel-account",
					},
					{
						text: "Coinbase Wallet",
						link: "/permissionless/how-to/accounts/use-coinbase-account",
					},
					{
						text: "Simple Account",
						link: "/permissionless/how-to/accounts/use-simple-account",
					},
					{
						text: "Thirdweb",
						link: "/permissionless/how-to/accounts/use-thirdweb-account",
					},
					{
						text: "Trust Wallet",
						link: "/permissionless/how-to/accounts/use-trustwallet-account",
					},
					{
						text: "Biconomy Nexus",
						link: "/permissionless/how-to/accounts/use-nexus-account",
					},
					{
						text: "Alchemy Light Account",
						link: "/permissionless/how-to/accounts/use-light-account",
					},
					{
						text: "How to use an ERC-7579 compatible smart account",
						link: "/permissionless/how-to/accounts/use-erc7579-account",
					},
				],
			},
			{
				text: "Paymasters",
				items: [
					{
						text: "How to use a custom Paymaster",
						link: "/permissionless/how-to/paymasters/use-custom-paymaster",
					},
					{
						text: "How to conditionally sponsor a user operation",
						link: "/permissionless/how-to/paymasters/conditional-sponsoring",
					},
				],
			},
			{
				text: "Signers",
				link: "/permissionless/how-to/signers",
				items: [
					{
						text: "Passkey (WebAuthn) signer",
						link: "/permissionless/how-to/signers/passkey",
					},
					{
						text: "Passkey (WebAuthn) server",
						link: "/permissionless/how-to/signers/passkey-server",
					},
					{
						text: "Dynamic",
						link: "/permissionless/how-to/signers/dynamic",
					},
					{
						text: "Privy",
						link: "/permissionless/how-to/signers/privy",
					},
					{
						text: "Magic",
						link: "/permissionless/how-to/signers/magic",
					},
					{
						text: "Lit Protocol",
						link: "/permissionless/how-to/signers/lit-protocol",
					},
					{
						text: "Web3Auth",
						link: "/permissionless/how-to/signers/web3auth",
					},
					{
						text: "Turnkey",
						link: "/permissionless/how-to/signers/turnkey",
					},
					{
						text: "Fireblocks",
						link: "/permissionless/how-to/signers/fireblocks",
					},
					{
						text: "Para",
						link: "/permissionless/how-to/signers/para",
					},
					{
						text: "DFNS",
						link: "/permissionless/how-to/signers/dfns",
					},
					{
						text: "Arcana Auth",
						link: "/permissionless/how-to/signers/arcana",
					},
					{
						text: "Particle Network",
						link: "/permissionless/how-to/signers/particle-network",
					},
				],
			},
		],
	},
	{
		text: "Reference",
		link: "/permissionless/reference",
		items: [
			{
				text: "Clients",
				collapsed: true,
				items: [
					{
						text: "Pimlico Client",
						link: "/permissionless/reference/clients/pimlicoClient",
					},
					{
						text: "Smart Account Client",
						link: "/permissionless/reference/clients/smartAccountClient",
					},
				],
			},
			{
				text: "Accounts",
				collapsed: true,
				items: [
					{
						text: "toSimpleSmartAccount",
						link: "/permissionless/reference/accounts/toSimpleSmartAccount",
					},
					{
						text: "toSafeSmartAccount",
						link: "/permissionless/reference/accounts/toSafeSmartAccount",
					},
					{
						text: "toKernelSmartAccount",
						link: "/permissionless/reference/accounts/toKernelSmartAccount",
					},
					{
						text: "toNexusSmartAccount",
						link: "/permissionless/reference/accounts/toNexusSmartAccount",
					},
					{
						text: "toLightSmartAccount",
						link: "/permissionless/reference/accounts/toLightSmartAccount",
					},
					{
						text: "toTrustSmartAccount",
						link: "/permissionless/reference/accounts/toTrustSmartAccount",
					},
				],
			},
			{
				text: "Smart Account Actions",
				collapsed: true,
				items: [
					{
						text: "sendTransaction",
						link: "/permissionless/reference/smart-account-actions/sendTransaction",
					},
					{
						text: "writeContract",
						link: "/permissionless/reference/smart-account-actions/writeContract",
					},
					{
						text: "estimateUserOperationGas",
						link: "/permissionless/reference/smart-account-actions/estimateUserOperationGas",
					},
					{
						text: "getChainId",
						link: "/permissionless/reference/smart-account-actions/getChainId",
					},
					{
						text: "getSupportedEntryPoints",
						link: "/permissionless/reference/smart-account-actions/getSupportedEntryPoints",
					},
					{
						text: "getUserOperation",
						link: "/permissionless/reference/smart-account-actions/getUserOperation",
					},
					{
						text: "getUserOperationReceipt",
						link: "/permissionless/reference/smart-account-actions/getUserOperationReceipt",
					},
					{
						text: "prepareUserOperation",
						link: "/permissionless/reference/smart-account-actions/prepareUserOperation",
					},
					{
						text: "sendUserOperation",
						link: "/permissionless/reference/smart-account-actions/sendUserOperation",
					},
					{
						text: "waitForUserOperationReceipt",
						link: "/permissionless/reference/smart-account-actions/waitForUserOperationReceipt",
					},
				],
			},
			{
				text: "Pimlico Actions",
				collapsed: true,
				items: [
					{
						text: "getPaymasterData",
						link: "/permissionless/reference/pimlico-actions/getPaymasterData",
					},
					{
						text: "getPaymasterStubData",
						link: "/permissionless/reference/pimlico-actions/getPaymasterStubData",
					},
					{
						text: "getUserOperationGasPrice",
						link: "/permissionless/reference/pimlico-actions/getUserOperationGasPrice",
					},
					{
						text: "getUserOperationStatus",
						link: "/permissionless/reference/pimlico-actions/getUserOperationStatus",
					},
					{
						text: "validateSponsorshipPolicies",
						link: "/permissionless/reference/pimlico-actions/validateSponsorshipPolicies",
					},
				],
			},
			{
				text: "Public Actions",
				collapsed: true,
				items: [
					{
						text: "getSenderAddress",
						link: "/permissionless/reference/public-actions/getSenderAddress",
					},
					{
						text: "getAccountNonce",
						link: "/permissionless/reference/public-actions/getAccountNonce",
					},
				],
			},
			{
				text: "ERC-7579 Actions",
				collapsed: true,
				items: [
					{
						text: "accountId",
						link: "/permissionless/reference/erc7579-actions/accountId",
					},
					{
						text: "installModule",
						link: "/permissionless/reference/erc7579-actions/installModule",
					},
					{
						text: "uninstallModule",
						link: "/permissionless/reference/erc7579-actions/uninstallModule",
					},
					{
						text: "isModuleInstalled",
						link: "/permissionless/reference/erc7579-actions/isModuleInstalled",
					},
					{
						text: "supportsExecutionMode",
						link: "/permissionless/reference/erc7579-actions/supportsExecutionMode",
					},
					{
						text: "supportsModule",
						link: "/permissionless/reference/erc7579-actions/supportsModule",
					},
				],
			},
			{
				text: "Utilities",
				collapsed: true,
				items: [
					{
						text: "getRequiredPrefund",
						link: "/permissionless/reference/utils/getRequiredPrefund",
					},
				],
			},
		],
	},
	{
		text: "permissionless 0.1.x",
		link: "/permissionless/v0_1",
	},
];

export const permissionlessWagmiSidebar = [
	{
		text: "Overview",
		link: "/permissionless/wagmi",
	},
	{
		text: "Tutorials",
		link: "/permissionless/wagmi/tutorial",
		items: [
			{
				text: "Send your first gasless transaction",
				link: "/permissionless/wagmi/tutorial/tutorial-1",
			},
		],
	},
	{
		text: "How-to Guides",
		items: [
			{
				text: "Check if an external account supports paymasters",
				link: "/permissionless/wagmi/how-to/check-paymaster-support",
			},
		],
	},
	{
		text: "Reference",
		link: "/permissionless/reference",
		items: [
			{
				text: "Configuration",
				items: [
					{
						text: "PermissionlessProvider",
						link: "/permissionless/wagmi/reference/configuration/PermissionlessProvider",
					},
				],
			},
			{
				text: "Hooks",
				items: [
					{
						text: "useSendTransaction",
						link: "/permissionless/wagmi/reference/hooks/useSendTransaction",
					},
					{
						text: "useWaitForTransactionReceipt",
						link: "/permissionless/wagmi/reference/hooks/useWaitForTransactionReceipt",
					},
				],
			},
		],
	},
];

export const permissionlessSidebar0Point1 = [
	{
		text: "Overview",
		link: "/permissionless/v0_1",
	},
	{
		text: "Why permissionless.js",
		link: "/permissionless/v0_1/why",
	},
	{
		text: "FAQs",
		link: "/permissionless/v0_1/faqs",
	},
	{
		text: "Tutorials",
		link: "/permissionless/v0_1/tutorial",
		items: [
			{
				text: "1. Send your first gasless transaction",
				link: "/permissionless/v0_1/tutorial/tutorial-1",
			},
			{
				text: "2. Submit a user operation with a Verifying Paymaster",
				link: "/permissionless/v0_1/tutorial/tutorial-2",
			},
		],
	},
	{
		text: "How-to Guides",
		items: [
			{
				text: "Update your existing app to sponsor gas fees for smart account users",
				link: "/permissionless/v0_1/how-to/dapp-gas-sponsorship",
			},
			{
				text: "How to send multiple user operations in parallel",
				link: "/permissionless/v0_1/how-to/parallel-transactions",
			},
			{
				text: "Error Handling",
				link: "/permissionless/v0_1/how-to/error-handling",
			},
			{
				text: "Migration Guide",
				link: "/permissionless/v0_1/how-to/migration-guide",
			},
			{
				text: "Local Testing",
				link: "/permissionless/v0_1/how-to/local-testing",
			},
			{
				text: "Accounts",
				items: [
					{
						text: "EntryPoint support",
						link: "/permissionless/v0_1/how-to/accounts/support",
					},
					{
						text: "How to use a Safe account",
						link: "/permissionless/v0_1/how-to/accounts/use-safe-account",
					},
					{
						text: "How to use a Kernel account",
						link: "/permissionless/v0_1/how-to/accounts/use-kernel-account",
					},
					{
						text: "How to use a SimpleAccount",
						link: "/permissionless/v0_1/how-to/accounts/use-simple-account",
					},
					{
						text: "How to use a Biconomy account",
						link: "/permissionless/v0_1/how-to/accounts/use-biconomy-account",
					},
					{
						text: "How to use a LightAccount",
						link: "/permissionless/v0_1/how-to/accounts/use-light-account",
					},
					{
						text: "How to use a Trust Wallet account",
						link: "/permissionless/v0_1/how-to/accounts/use-trustwallet-account",
					},
					{
						text: "How to use an ERC-7579 compatible smart account",
						link: "/permissionless/v0_1/how-to/accounts/use-erc7579-account",
					},
				],
			},
			{
				text: "Paymasters",
				items: [
					{
						text: "How to use a custom Paymaster",
						link: "/permissionless/v0_1/how-to/paymasters/use-custom-paymaster",
					},
					{
						text: "How to conditionally sponsor a user operation",
						link: "/permissionless/v0_1/how-to/paymasters/conditional-sponsoring",
					},
				],
			},
			{
				text: "Signers",
				link: "/permissionless/v0_1/how-to/signers",
				items: [
					{
						text: "How to use a Dynamic signer",
						link: "/permissionless/v0_1/how-to/signers/dynamic",
					},
					{
						text: "How to use a Privy signer",
						link: "/permissionless/v0_1/how-to/signers/privy",
					},
					{
						text: "How to use a Magic signer",
						link: "/permissionless/v0_1/how-to/signers/magic",
					},
					{
						text: "How to use a Lit Protocol signer",
						link: "/permissionless/v0_1/how-to/signers/lit-protocol",
					},
					{
						text: "How to use a Web3Auth signer",
						link: "/permissionless/v0_1/how-to/signers/web3auth",
					},
					{
						text: "How to use a Turnkey signer",
						link: "/permissionless/v0_1/how-to/signers/turnkey",
					},
					{
						text: "How to use a Fireblocks signer",
						link: "/permissionless/v0_1/how-to/signers/fireblocks",
					},
					{
						text: "How to use a Para signer",
						link: "/permissionless/v0_1/how-to/signers/para",
					},
					{
						text: "How to use a DFNS signer",
						link: "/permissionless/v0_1/how-to/signers/dfns",
					},
					{
						text: "How to use an Arcana Auth signer",
						link: "/permissionless/v0_1/how-to/signers/arcana",
					},
					{
						text: "How to use a Particle Network signer",
						link: "/permissionless/v0_1/how-to/signers/particle-network",
					},
				],
			},
		],
	},
	{
		text: "Reference",
		link: "/permissionless/v0_1/reference",
		items: [
			{
				text: "Clients",
				collapsed: false,
				items: [
					{
						text: "Bundler Client",
						link: "/permissionless/v0_1/reference/clients/bundlerClient",
					},
					{
						text: "Pimlico Bundler Client",
						link: "/permissionless/v0_1/reference/clients/pimlicoBundlerClient",
					},
					{
						text: "Pimlico Paymaster Client",
						link: "/permissionless/v0_1/reference/clients/pimlicoPaymasterClient",
					},
					{
						text: "Smart Account Client",
						link: "/permissionless/v0_1/reference/clients/smartAccountClient",
					},
				],
			},
			{
				text: "Accounts",
				collapsed: false,
				items: [
					{
						text: "signerToSimpleSmartAccount",
						link: "/permissionless/v0_1/reference/accounts/signerToSimpleSmartAccount",
					},
					{
						text: "signerToSafeSmartAccount",
						link: "/permissionless/v0_1/reference/accounts/signerToSafeSmartAccount",
					},
					{
						text: "signerToKernelSmartAccount",
						link: "/permissionless/v0_1/reference/accounts/signerToKernelSmartAccount",
					},
					{
						text: "signerToLightSmartAccount",
						link: "/permissionless/v0_1/reference/accounts/signerToLightSmartAccount",
					},
					{
						text: "signerToTrustSmartAccount",
						link: "/permissionless/v0_1/reference/accounts/signerToTrustSmartAccount",
					},
				],
			},
			{
				text: "Bundler Actions",
				collapsed: false,
				items: [
					{
						text: "sendUserOperation",
						link: "/permissionless/v0_1/reference/bundler-actions/sendUserOperation",
					},
					{
						text: "estimateUserOperationGas",
						link: "/permissionless/v0_1/reference/bundler-actions/estimateUserOperationGas",
					},
					{
						text: "getUserOperationReceipt",
						link: "/permissionless/v0_1/reference/bundler-actions/getUserOperationReceipt",
					},
					{
						text: "waitForUserOperationReceipt",
						link: "/permissionless/v0_1/reference/bundler-actions/waitForUserOperationReceipt",
					},
					{
						text: "getUserOperationByHash",
						link: "/permissionless/v0_1/reference/bundler-actions/getUserOperationByHash",
					},
					{
						text: "supportedEntryPoints",
						link: "/permissionless/v0_1/reference/bundler-actions/supportedEntryPoints",
					},
				],
			},
			{
				text: "Smart Account Actions",
				collapsed: false,
				items: [
					{
						text: "prepareUserOperationRequest",
						link: "/permissionless/v0_1/reference/smart-account-actions/prepareUserOperationRequest",
					},
					{
						text: "sendTransaction",
						link: "/permissionless/v0_1/reference/smart-account-actions/sendTransaction",
					},
					{
						text: "sendTransactions",
						link: "/permissionless/v0_1/reference/smart-account-actions/sendTransactions",
					},
					{
						text: "sendUserOperation",
						link: "/permissionless/v0_1/reference/smart-account-actions/sendUserOperation",
					},
					{
						text: "deployContract",
						link: "/permissionless/v0_1/reference/smart-account-actions/deployContract",
					},
					{
						text: "writeContract",
						link: "/permissionless/v0_1/reference/smart-account-actions/writeContract",
					},
					{
						text: "signMessage",
						link: "/permissionless/v0_1/reference/smart-account-actions/signMessage",
					},
					{
						text: "signTypedData",
						link: "/permissionless/v0_1/reference/smart-account-actions/signTypedData",
					},
				],
			},
			{
				text: "Pimlico Bundler Actions",
				collapsed: false,
				items: [
					{
						text: "getUserOperationGasPrice",
						link: "/permissionless/v0_1/reference/pimlico-bundler-actions/getUserOperationGasPrice",
					},
					{
						text: "getUserOperationStatus",
						link: "/permissionless/v0_1/reference/pimlico-bundler-actions/getUserOperationStatus",
					},
				],
			},
			{
				text: "Pimlico Paymaster Actions",
				collapsed: false,
				items: [
					{
						text: "sponsorUserOperation",
						link: "/permissionless/v0_1/reference/pimlico-paymaster-actions/sponsorUserOperation",
					},
					{
						text: "validateSponsorshipPolicies",
						link: "/permissionless/v0_1/reference/pimlico-paymaster-actions/validateSponsorshipPolicies",
					},
				],
			},
			{
				text: "Public Actions",
				collapsed: false,
				items: [
					{
						text: "getSenderAddress",
						link: "/permissionless/v0_1/reference/public-actions/getSenderAddress",
					},
					{
						text: "getAccountNonce",
						link: "/permissionless/v0_1/reference/public-actions/getAccountNonce",
					},
				],
			},
			{
				text: "ERC-7579 Actions",
				collapsed: false,
				items: [
					{
						text: "accountId",
						link: "/permissionless/v0_1/reference/erc7579-actions/accountId",
					},
					{
						text: "installModule",
						link: "/permissionless/v0_1/reference/erc7579-actions/installModule",
					},
					{
						text: "uninstallModule",
						link: "/permissionless/v0_1/reference/erc7579-actions/uninstallModule",
					},
					{
						text: "isModuleInstalled",
						link: "/permissionless/v0_1/reference/erc7579-actions/isModuleInstalled",
					},
					{
						text: "supportsExecutionMode",
						link: "/permissionless/v0_1/reference/erc7579-actions/supportsExecutionMode",
					},
					{
						text: "supportsModule",
						link: "/permissionless/v0_1/reference/erc7579-actions/supportsModule",
					},
				],
			},
			{
				text: "Utilities",
				collapsed: false,
				items: [
					{
						text: "getUserOperationHash",
						link: "/permissionless/v0_1/reference/utils/getUserOperationHash",
					},
					{
						text: "signUserOperationHashWithECDSA",
						link: "/permissionless/v0_1/reference/utils/signUserOperationHashWithECDSA",
					},
					{
						text: "getRequiredPrefund",
						link: "/permissionless/v0_1/reference/utils/getRequiredPrefund",
					},
					{
						text: "walletClientToSmartAccountSigner",
						link: "/permissionless/v0_1/reference/utils/walletClientToSmartAccountSigner",
					},
					{
						text: "providerToSmartAccountSigner",
						link: "/permissionless/v0_1/reference/utils/providerToSmartAccountSigner",
					},
				],
			},
			{
				text: "Glossary",
				collapsed: false,
				items: [
					{
						text: "Errors",
						link: "/permissionless/v0_1/reference/glossary/errors",
					},
				],
			},
		],
	},
	{
		text: "Experimental",
		collapsed: false,
		items: [
			{
				text: "ERC-7677",
				collapsed: false,
				items: [
					{
						text: "getPaymasterData",
						link: "/permissionless/v0_1/experimental/eip7677/getPaymasterData",
					},
					{
						text: "getPaymasterStubData",
						link: "/permissionless/v0_1/experimental/eip7677/getPaymasterStubData",
					},
				],
			},
		],
	},
	{
		text: "permissionless 0.2.x",
		link: "/permissionless",
	},
];

export const flashFundSidebar = [
	{
		text: "Overview",
		link: "/references/flash-fund",
	},
	{
		text: "Modes",
		items: [
			{
				text: "Credit Mode",
				link: "/references/flash-fund/modes/credit",
			},
			{
				text: "Resource Lock Mode",
				link: "/references/flash-fund/modes/resource-lock",
			},
		],
	},
	{
		text: "Endpoints",
		collapsed: false,
		items: [
			{
				text: "flashfund_getLocks",
				link: "/references/flash-fund/endpoints/flashfund_getLocks",
			},
			{
				text: "flashfund_prepareLock",
				link: "/references/flash-fund/endpoints/flashfund_prepareLock",
			},
			{
				text: "flashfund_prepareAllowance",
				link: "/references/flash-fund/endpoints/flashfund_prepareAllowance",
			},
			{
				text: "flashfund_sponsorWithdrawal",
				link: "/references/flash-fund/endpoints/flashfund_sponsorWithdrawal",
			},
		],
	},
	{
		text: "Guides",
		items: [
			{
				text: "How to use Credit Mode",
				link: "/references/flash-fund/how-to/credit-mode",
			},
			{
				text: "How to use Pimlico Lock",
				link: "/references/flash-fund/how-to/pimlico-lock",
			},
			{
				text: "How to use FlashFund to swap ETH for USDC on Uniswap V3",
				link: "/references/flash-fund/how-to/eth-to-usdc-uniswap",
			},
		],
	},
	{
		text: "Supported chains and tokens",
		link: "/references/flash-fund/supported-chains-and-tokens",
	},
];

export default defineConfig({
	title: "Pimlico",
	logoUrl: { light: "/pimlico-purple.svg", dark: "/pimlico-white.svg" },
	iconUrl: "/favicons/favicon.svg",
	titleTemplate: "%s | Pimlico Docs",
	editLink: {
		pattern: "https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path",
		text: "Edit on GitHub",
	},
	description:
		"Pimlico is the world's most popular account abstraction infrastructure platform",
	head: () => (
		<>
			<script src="/posthog.js" />
		</>
	),
	banner: {
		content: (
			<a
				href="https://twitter.com/pimlicoHQ/status/1721890681185321018"
				target="_blank"
				rel="nofollow noreferrer"
			>
				🎉 We raised $4.2 million from a16z to power Ethereum's transition to
				smart accounts! Read more →
			</a>
		),
		dismissable: true,
		backgroundColor: "#3c393f",
		textColor: "#eeeef0",
	},
	vite: viteConfig,
	sidebar: {
		"/references": [
			{
				text: "Platform",
				link: "/references/platform",
				items: platformSidebar,
			},
			{
				text: "Bundler",
				link: "/references/bundler",
				items: bundlerSidebar,
			},
			{
				text: "Paymaster",
				link: "/references/paymaster",
				items: paymasterSidebar,
			},
			{
				text: "FlashFund",
				link: "/references/flash-fund",
				items: flashFundSidebar,
			},
		],
		"/references/permissionless": [
			{
				link: "/permissionless",
				text: "permissionless.js Core",
				items: permissionlessSidebar,
			},
			{
				link: "/permissionless/wagmi",
				text: "permissionless.js Wagmi",
				items: permissionlessWagmiSidebar,
			},
		],
		"/references/permissionless/v0_1": permissionlessSidebar0Point1,
		"/conceptual": conceptualSidebar,
	},
	ogImageUrl: {
		"/": "https://docs-og-pimlico.vercel.app/api/og?logo=%logo&title=%title&description=%description",
	},
	rootDir: "docs",
	theme: {
		accentColor: { light: "#7115AA", dark: "#a66cc9" },
	},
	socials: [
		{
			icon: "github",
			link: "https://github.com/pimlicolabs",
		},
		{
			icon: "telegram",
			link: "https://t.me/pimlicoHQ",
		},
		{
			icon: "x",
			link: "https://twitter.com/pimlicoHQ",
		},
		{
			icon: "warpcast",
			link: "https://warpcast.com/~/channel/pimlico",
		},
	],
	topNav: [
		{
			text: "Guides",
			link: "/guides",
		},
		{
			text: "References",
			items: [
				{ text: "permissionless.js", link: "/references/permissionless" },
				{ text: "Platform", link: "/references/platform" },
				{ text: "Bundler", link: "/references/bundler" },
				{ text: "Paymaster", link: "/references/paymaster" },
				{ text: "FlashFund", link: "/references/flash-fund" },
			],
			match: "/references",
		},
		{
			text: "Dashboard",
			link: "https://dashboard.pimlico.io",
		},
	],
});
