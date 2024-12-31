import { defineConfig } from "vocs"
import viteConfig from "./utils"

type SidebarItem = {
	text: string;
	link?: string;
	collapsed?: boolean;
	items?: SidebarItem[];
};

export const platformSidebar: SidebarItem[] = [
	{
		text: "Overview",
		link: "/infra/platform",
	},
	{
		text: "Why Pimlico",
		items: [
			{
				text: "For Startups",
				link: "/infra/platform/why-pimlico/startups",
			},
			{
				text: "For Enterprise",
				link: "/infra/platform/why-pimlico/enterprise",
			},
		],
	},
	{
		text: "Pricing",
		link: "/infra/platform/pricing",
	},
	{
		text: "Supported Chains",
		link: "/infra/platform/supported-chains",
	},
	{
		text: "Sponsorship Policies",
		items: [
			{
				text: "How to use sponsorship policies",
				link: "/infra/platform/sponsorship-policies",
			},
			{
				text: "How to use a webhook",
				link: "/infra/platform/sponsorship-policies/webhook",
			},
			{
				text: "How to create a gas program",
				link: "/infra/platform/sponsorship-policies/gas-program",
			},
		],
	},
	{
		text: "Security",
		items: [
			{
				text: "How to protect your API keys",
				link: "/infra/platform/security/protect-api-keys",
			},
		],
	},
	{
		text: "Debugging",
		items: [
			{
				text: "How to debug dropped user operations",
				link: "/infra/platform/debugging/dropped-user-operations",
			},
		],
	},
	{
		text: "API",
		items: [
			{
				text: "Pagination",
				link: "/infra/platform/api/pagination",
			},
			{
				text: "Sponsorship Policies",
				link: "/infra/platform/api/sponsorship-policies",
				collapsed: false,
				items: [
					{
						text: "The Sponsorship Policy object",
						link: "/infra/platform/api/sponsorship-policies/object",
					},
					{
						text: "Retrieve a sponsorship policy",
						link: "/infra/platform/api/sponsorship-policies/retrieve",
					},
					{
						text: "List all sponsorship policies",
						link: "/infra/platform/api/sponsorship-policies/list",
					},
					{
						text: "Create a sponsorship policy",
						link: "/infra/platform/api/sponsorship-policies/create",
					},
					{
						text: "Update a sponsorship policy",
						link: "/infra/platform/api/sponsorship-policies/update",
					},
				],
			},
		],
	},
]

export const bundlerSidebar: SidebarItem[] = [
	{
		text: "Overview",
		link: "/infra/bundler",
	},
	{
		text: "How to use the bundler",
		link: "/infra/bundler/usage",
	},
	{
		text: "Self host guide",
		link: "/infra/bundler/self-host",
	},
	{ text: "FAQs", link: "/infra/bundler/faqs" },
	{
		text: "Compression",
		items: [
			{
				text: "How to create your own inflator contract and submit compressed user operations",
				link: "/infra/bundler/compression",
			},
			{
				text: "Contracts Reference",
				link: "/infra/bundler/compression/reference",
			},
		],
	},
	{
		text: "Endpoints",
		collapsed: false,
		items: [
			{
				text: "eth_sendUserOperation",
				link: "/infra/bundler/endpoints/eth_sendUserOperation",
			},
			{
				text: "eth_estimateUserOperationGas",
				link: "/infra/bundler/endpoints/eth_estimateUserOperationGas",
			},
			{
				text: "eth_getUserOperationReceipt",
				link: "/infra/bundler/endpoints/eth_getUserOperationReceipt",
			},
			{
				text: "eth_getUserOperationByHash",
				link: "/infra/bundler/endpoints/eth_getUserOperationByHash",
			},
			{
				text: "eth_supportedEntryPoints",
				link: "/infra/bundler/endpoints/eth_supportedEntryPoints",
			},
			{
				text: "pimlico_sendCompressedUserOperation",
				link: "/infra/bundler/endpoints/pimlico_sendCompressedUserOperation",
			},
			{
				text: "pimlico_getUserOperationGasPrice",
				link: "/infra/bundler/endpoints/pimlico_getUserOperationGasPrice",
			},
			{
				text: "pimlico_getUserOperationStatus",
				link: "/infra/bundler/endpoints/pimlico_getUserOperationStatus",
			},
		],
	},
	{
		text: "Bundler Errors",
		collapsed: true,
		items: [
			{
				text: "Invalid 'apikey' query parameter",
				link: "/infra/bundler/bundler-errors/invalid-api-key",
			},
			{
				text: "Chain is not supported",
				link: "/infra/bundler/bundler-errors/chain-not-supported",
			},
			{
				text: "Validation Error: Invalid Discriminator Value",
				link: "/infra/bundler/bundler-errors/invalid-discriminator-value",
			},
			{
				text: "Unknown error from alto bundler",
				link: "/infra/bundler/bundler-errors/unknown-error",
			},
		],
	},
	{
		text: "EntryPoint Errors",
		link: "/infra/bundler/entrypoint-errors",
		collapsed: true,
		items: [
			{
				text: "AA10 sender already constructed",
				link: "/infra/bundler/entrypoint-errors/aa10",
			},
			{
				text: "AA13 initCode failed or OOG",
				link: "/infra/bundler/entrypoint-errors/aa13",
			},
			{
				text: "AA14 initCode must return sender",
				link: "/infra/bundler/entrypoint-errors/aa14",
			},
			{
				text: "AA15 initCode must create sender",
				link: "/infra/bundler/entrypoint-errors/aa15",
			},
			{
				text: "AA20 account not deployed",
				link: "/infra/bundler/entrypoint-errors/aa20",
			},
			{
				text: "AA21 didn't pay prefund",
				link: "/infra/bundler/entrypoint-errors/aa21",
			},
			{
				text: "AA22 expired or not due",
				link: "/infra/bundler/entrypoint-errors/aa22",
			},
			{ text: "AA23 reverted", link: "/infra/bundler/entrypoint-errors/aa23" },
			{
				text: "AA24 signature error",
				link: "/infra/bundler/entrypoint-errors/aa24",
			},
			{
				text: "AA25 invalid account nonce",
				link: "/infra/bundler/entrypoint-errors/aa25",
			},
			{
				text: "AA30 paymaster not deployed",
				link: "/infra/bundler/entrypoint-errors/aa30",
			},
			{
				text: "AA31 paymaster deposit too low",
				link: "/infra/bundler/entrypoint-errors/aa31",
			},
			{
				text: "AA32 paymaster expired or not due",
				link: "/infra/bundler/entrypoint-errors/aa32",
			},
			{ text: "AA33 reverted", link: "/infra/bundler/entrypoint-errors/aa33" },
			{
				text: "AA34 signature error",
				link: "/infra/bundler/entrypoint-errors/aa34",
			},
			{
				text: "AA40 over verificationGasLimit",
				link: "/infra/bundler/entrypoint-errors/aa40",
			},
			{
				text: "AA41 too little verificationGas",
				link: "/infra/bundler/entrypoint-errors/aa41",
			},
			{
				text: "AA50 postOp reverted",
				link: "/infra/bundler/entrypoint-errors/aa50",
			},
			{
				text: "AA51 prefund below actualGasCost",
				link: "/infra/bundler/entrypoint-errors/aa51",
			},
			{
				text: "AA90 invalid beneficiary",
				link: "/infra/bundler/entrypoint-errors/aa90",
			},
			{
				text: "AA91 failed send to beneficiary",
				link: "/infra/bundler/entrypoint-errors/aa91",
			},
			{
				text: "AA92 internal call only",
				link: "/infra/bundler/entrypoint-errors/aa92",
			},
			{
				text: "AA93 invalid paymasterAndData",
				link: "/infra/bundler/entrypoint-errors/aa93",
			},
			{
				text: "AA94 gas values overflow",
				link: "/infra/bundler/entrypoint-errors/aa94",
			},
			{
				text: "AA95 out of gas",
				link: "/infra/bundler/entrypoint-errors/aa95",
			},
			{
				text: "AA96 invalid aggregator",
				link: "/infra/bundler/entrypoint-errors/aa96",
			},
		],
	},
]

export const paymasterSidebar: SidebarItem[] = [
	{
		text: "Overview",
		link: "/infra/paymaster",
	},
	{
		text: "Verifying Paymaster",
		link: "/infra/paymaster/verifying-paymaster",
		items: [
			{
				text: "How to use the Verifying Paymaster",
				link: "/infra/paymaster/verifying-paymaster/usage",
			},
			{
				text: "Endpoints",
				link: "/infra/paymaster/verifying-paymaster/endpoints",
			},
			{ text: "FAQs", link: "/infra/paymaster/verifying-paymaster/faqs" },
			{
				text: "Common Errors",
				link: "/infra/paymaster/verifying-paymaster/common-errors",
			},
		],
	},
	{
		text: "ERC-20 Paymaster",
		link: "/infra/paymaster/erc20-paymaster",
		items: [
			{ text: "Overview", link: "/infra/paymaster/erc20-paymaster" },
			{ text: "Supported Tokens", link: "/infra/paymaster/erc20-paymaster/supported-tokens" },
			{
				text: "Guides",
				items: [
					{
						text: "How to use the ERC-20 Paymaster",
						link: "/infra/paymaster/erc20-paymaster/how-to/use-paymaster",
					},
					{
						text: "How to use the ERC-20 Paymaster without unlimited token approvals",
						link: "/infra/paymaster/erc20-paymaster/how-to/use-paymaster-without-unlimited-approval",
					},
					{
						text: "How to estimate token cost and cost in USD",
						link: "/infra/paymaster/erc20-paymaster/how-to/calculate-costs",
					},
				],
			},
			{
				text: "Endpoints",
				items: [
					{
						text: "pimlico_getTokenQuotes",
						link: "/infra/paymaster/erc20-paymaster/endpoints/pimlico_getTokenQuotes",
					},
					{
						text: "pm_getPaymasterData",
						link: "/infra/paymaster/erc20-paymaster/endpoints/pm_getPaymasterData",
					},
					{
						text: "pm_getPaymasterStubData",
						link: "/infra/paymaster/erc20-paymaster/endpoints/pm_getPaymasterStubData",
					},
					{
						text: "pm_sponsorUserOperation",
						link: "/infra/paymaster/erc20-paymaster/endpoints/pm_sponsorUserOperation",
					},
				],
			},
			{ text: "Architecture", link: "/infra/paymaster/erc20-paymaster/architecture" },
			{ text: "Contract Addresses", link: "/infra/paymaster/erc20-paymaster/contract-addresses" },
		],
	},
	{
		text: "ERC-20 Paymaster (permissionless)",
		collapsed: true,
		link: "/infra/paymaster/erc20-paymaster-permissionless",
		items: [
			{ text: "Overview", link: "/infra/paymaster/erc20-paymaster-permissionless" },
			{
				text: "Contract Addresses",
				link: "/infra/paymaster/erc20-paymaster-permissionless/contract-addresses",
			},
			{
				text: "Architecture",
				link: "/infra/paymaster/erc20-paymaster-permissionless/architecture",
			},
			{ text: "Guides", link: "/infra/paymaster/erc20-paymaster-permissionless/guides" },
			{ text: "FAQs", link: "/infra/paymaster/erc20-paymaster-permissionless/faqs" },
		],
	},
]

/*
					{ text: "deployContract", link: "/permissionless/reference/smart-account-actions/deployContract" },
					{ text: "sendTransaction", link: "/permissionless/reference/smart-account-actions/sendTransaction" },
					{ text: "sendTransactions", link: "/permissionless/reference/smart-account-actions/sendTransactions" },
					{ text: "signMessage", link: "/permissionless/reference/smart-account-actions/signMessage" },
					{ text: "signTypedData", link: "/permissionless/reference/smart-account-actions/signTypedData" },
					{ text: "writeContract", link: "/permissionless/reference/smart-account-actions/writeContract" },

*/

export const conceptualSidebar: SidebarItem[] = [
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
]

export const permissionlessSidebar: SidebarItem[] = [
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
				link: "/permissionless/parallel-transactions",
			},
			{
				text: "How to send a userOperation from a EOA using EIP-7702",
				link: "/permissionless/how-to/eip-7702-demo",
			},
			{
				text: "Migration Guide",
				link: "/permissionless/how-to/migration-guide",
			},
			{
				text: "Local Testing",
				link: "/permissionless/how-to/local-testing",
			},
		],
	},
	{
		text: "Accounts",
		items: [
			{
				text: "EntryPoint support",
				link: "/permissionless/accounts/support",
			},
			{
				text: "Account types comparison",
				link: "/permissionless/accounts/comparison",
			},
			{
				text: "How to use a Safe account",
				link: "/permissionless/accounts/use-safe-account",
			},
			{
				text: "How to use a Safe account with multiple signers",
				link: "/permissionless/accounts/use-safe-account-with-multiple-signers",
			},
			{
				text: "How to use a Kernel account",
				link: "/permissionless/accounts/use-kernel-account",
			},
			{
				text: "How to use a Thirdweb account",
				link: "/permissionless/accounts/use-thirdweb-account",
			},
			{
				text: "How to use a SimpleAccount",
				link: "/permissionless/accounts/use-simple-account",
			},
			{
				text: "How to use a Biconomy Nexus account",
				link: "/permissionless/accounts/use-nexus-account",
			},
			{
				text: "How to use a LightAccount",
				link: "/permissionless/accounts/use-light-account",
			},
			{
				text: "How to use a Trust Wallet account",
				link: "/permissionless/accounts/use-trustwallet-account",
			},
			{
				text: "How to use a Coinbase Wallet account",
				link: "/permissionless/accounts/use-coinbase-account",
			},
			{
				text: "How to use an ERC-7579 compatible smart account",
				link: "/permissionless/accounts/use-erc7579-account",
			},
		],
	},
	{
		text: "Paymasters",
		link: "/permissionless/paymasters",
		items: [
			{
				text: "How to use a custom Paymaster",
				link: "/permissionless/paymasters/use-custom-paymaster",
			},
			{
				text: "How to conditionally sponsor a user operation",
				link: "/permissionless/paymasters/conditional-sponsoring",
			},
		],
	},
	{
		text: "Signers",
		link: "/permissionless/signers",
		items: [
			{
				text: "How to use a Passkey (WebAuthn) signer",
				link: "/permissionless/signers/passkey",
			},
			{
				text: "How to use a Dynamic signer",
				link: "/permissionless/signers/dynamic",
			},
			{
				text: "How to use a Privy signer",
				link: "/permissionless/signers/privy",
			},
			{
				text: "How to use a Magic signer",
				link: "/permissionless/signers/magic",
			},
			{
				text: "How to use a Passport signer",
				link: "/permissionless/signers/passport",
			},
			{
				text: "How to use a Lit Protocol signer",
				link: "/permissionless/signers/lit-protocol",
			},
			{
				text: "How to use a Web3Auth signer",
				link: "/permissionless/signers/web3auth",
			},
			{
				text: "How to use a Turnkey signer",
				link: "/permissionless/signers/turnkey",
			},
			{
				text: "How to use a Fireblocks signer",
				link: "/permissionless/signers/fireblocks",
			},
			{
				text: "How to use a Capsule signer",
				link: "/permissionless/signers/capsule",
			},
			{
				text: "How to use a DFNS signer",
				link: "/permissionless/signers/dfns",
			},
			{
				text: "How to use an Arcana Auth signer",
				link: "/permissionless/signers/arcana",
			},
			{
				text: "How to use a Particle Network signer",
				link: "/permissionless/signers/particle-network",
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
						text: "toEcdsaKernelSmartAccount",
						link: "/permissionless/reference/accounts/toEcdsaKernelSmartAccount",
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
						text: "sendCompressedUserOperation",
						link: "/permissionless/reference/pimlico-actions/sendCompressedUserOperation",
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
]

export const magicSpendSidebarItems: SidebarItem[] = [
	{
		text: "Overview",
		link: "/infra/magic-spend",
	},
	{
		text: "Architecture",
		link: "/infra/magic-spend/architecture",
	},
	{
		text: "Endpoints",
		collapsed: false,
		items: [
			{
				text: "pimlico_getMagicSpendContracts",
				link: "/infra/magic-spend/endpoints/pimlico_getMagicSpendContracts",
			},
			{
				text: "pimlico_sponsorMagicSpendWithdrawal",
				link: "/infra/magic-spend/endpoints/pimlico_sponsorMagicSpendWithdrawal",
			},
		],
	},
	{
		text: "Guides",
		items: [
			{
				text: "How to request ETH from a MagicSpend++",
				link: "/infra/magic-spend/how-to/request-eth",
			},
		],
	},
	{
		text: "Supported chains and tokens",
		link: "/infra/magic-spend/supported-chains-and-tokens",
	},
]

export const magicSpendSidebar: SidebarItem[] = magicSpendSidebarItems

export const permissionlessWagmiSidebar: SidebarItem[] = [
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
]

export const permissionlessSidebar0Point1: SidebarItem[] = [
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
				link: "/permissionless/v0_1/parallel-transactions",
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
		],
	},
	{
		text: "Accounts",
		items: [
			{
				text: "EntryPoint support",
				link: "/permissionless/v0_1/accounts/support",
			},
			{
				text: "How to use a Safe account",
				link: "/permissionless/v0_1/accounts/use-safe-account",
			},
			{
				text: "How to use a Kernel account",
				link: "/permissionless/v0_1/accounts/use-kernel-account",
			},
			{
				text: "How to use a SimpleAccount",
				link: "/permissionless/v0_1/accounts/use-simple-account",
			},
			{
				text: "How to use a Biconomy account",
				link: "/permissionless/v0_1/accounts/use-biconomy-account",
			},
			{
				text: "How to use a LightAccount",
				link: "/permissionless/v0_1/accounts/use-light-account",
			},
			{
				text: "How to use a Trust Wallet account",
				link: "/permissionless/v0_1/accounts/use-trustwallet-account",
			},
			{
				text: "How to use an ERC-7579 compatible smart account",
				link: "/permissionless/v0_1/accounts/use-erc7579-account",
			},
		],
	},
	{
		text: "Paymasters",
		link: "/permissionless/v0_1/paymasters",
		items: [
			{
				text: "How to use a custom Paymaster",
				link: "/permissionless/v0_1/paymasters/use-custom-paymaster",
			},
			{
				text: "How to conditionally sponsor a user operation",
				link: "/permissionless/v0_1/paymasters/conditional-sponsoring",
			},
		],
	},
	{
		text: "Signers",
		link: "/permissionless/v0_1/signers",
		items: [
			{
				text: "How to use a Dynamic signer",
				link: "/permissionless/v0_1/signers/dynamic",
			},
			{
				text: "How to use a Privy signer",
				link: "/permissionless/v0_1/signers/privy",
			},
			{
				text: "How to use a Magic signer",
				link: "/permissionless/v0_1/signers/magic",
			},
		],
	},
	{
		text: "permissionless 0.2.x",
		link: "/permissionless",
	},
]

// Export the configuration
export default defineConfig({
	title: "Pimlico",
	logoUrl: { light: "/pimlico-purple.svg", dark: "/pimlico-white.svg" },
	iconUrl: "/favicons/favicon.svg",
	titleTemplate: "%s | Pimlico Docs",
	editLink: {
		pattern: "https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path",
		text: "Edit on GitHub",
	},
	description: "Pimlico is the world's most popular account abstraction infrastructure platform",
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
				🎉 We raised $4.2 million from a16z to power Ethereum's transition to smart accounts! Read
				more →
			</a>
		),
		dismissable: true,
		backgroundColor: "#3c393f",
		textColor: "#eeeef0",
	},
	vite: viteConfig,
	sidebar: {
		"/permissionless": [
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
		"/permissionless/v0_1": permissionlessSidebar0Point1,
		"/infra": [
			{
				text: "Platform",
				link: "/infra/platform",
				items: platformSidebar,
			},
			{
				text: "Bundler",
				link: "/infra/bundler",
				items: bundlerSidebar,
			},
			{
				text: "Paymaster",
				link: "/infra/paymaster",
				items: paymasterSidebar,
			},
			{
				text: "MagicSpend++",
				link: "/infra/magic-spend",
				items: magicSpendSidebar,
			},
		],
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
			text: "permissionless.js",
			match: "/permissionless",
			items: [
				{
					text: "core",
					link: "/permissionless",
				},
				{
					text: "wagmi",
					match: "/permissionless/wagmi",
					link: "/permissionless/wagmi",
				},
			],
		},
		{
			text: "Infrastructure",
			items: [
				{ text: "Platform", link: "/infra/platform" },
				{ text: "Bundler", link: "/infra/bundler" },
				{ text: "Paymaster", link: "/infra/paymaster" },
			],
			match: "/infra",
		},
		{
			text: "Conceptual",
			link: "/conceptual",
		},
		{
			text: "Dashboard",
			link: "https://dashboard.pimlico.io",
		},
	],
})
