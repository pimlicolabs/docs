export const platformSidebar = [
	{
		text: "Overview",
		link: "/references/platform",
	},
	{
		text: "API",
		items: [
			{
				text: "Upgrade",
				link: "/references/platform/api/upgrade",
			},
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
		text: "Public Endpoint",
		link: "/references/bundler/public-endpoint",
	},
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
	{
		text: "Bundler Error Codes",
		link: "/references/bundler/bundler-error-codes",
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
				text: "Endpoints",
				items: [
					{
						text: "pimlico_getSupportedTokens",
						link: "/references/paymaster/erc20-paymaster/endpoints/pimlico_getSupportedTokens",
					},
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
];

export const permissionlessSidebar = [
	{
		text: "Overview",
		link: "/references/permissionless",
	},
	{
		text: "Why permissionless.js",
		link: "/references/permissionless/why",
	},
	{
		text: "FAQs",
		link: "/references/permissionless/faqs",
	},
	{
		text: "How-to Guides",
		items: [
			{
				text: "Migration Guide",
				link: "/references/permissionless/how-to/migration-guide",
			},
		],
	},
	{
		text: "Reference",
		link: "/references/permissionless/reference",
		items: [
			{
				text: "Clients",
				collapsed: true,
				items: [
					{
						text: "Pimlico Client",
						link: "/references/permissionless/reference/clients/pimlicoClient",
					},
					{
						text: "Smart Account Client",
						link: "/references/permissionless/reference/clients/smartAccountClient",
					},
				],
			},
			{
				text: "Accounts",
				collapsed: true,
				items: [
					{
						text: "toSimpleSmartAccount",
						link: "/references/permissionless/reference/accounts/toSimpleSmartAccount",
					},
					{
						text: "to7702SimpleSmartAccount",
						link: "/references/permissionless/reference/accounts/to7702SimpleSmartAccount",
					},
					{
						text: "toSafeSmartAccount",
						link: "/references/permissionless/reference/accounts/toSafeSmartAccount",
					},
					{
						text: "toKernelSmartAccount",
						link: "/references/permissionless/reference/accounts/toKernelSmartAccount",
					},
					{
						text: "to7702KernelSmartAccount",
						link: "/references/permissionless/reference/accounts/to7702KernelSmartAccount",
					},
					{
						text: "toNexusSmartAccount",
						link: "/references/permissionless/reference/accounts/toNexusSmartAccount",
					},
					{
						text: "toLightSmartAccount",
						link: "/references/permissionless/reference/accounts/toLightSmartAccount",
					},
					{
						text: "toTrustSmartAccount",
						link: "/references/permissionless/reference/accounts/toTrustSmartAccount",
					},
				],
			},
			{
				text: "Smart Account Actions",
				collapsed: true,
				items: [
					{
						text: "sendTransaction",
						link: "/references/permissionless/reference/smart-account-actions/sendTransaction",
					},
					{
						text: "writeContract",
						link: "/references/permissionless/reference/smart-account-actions/writeContract",
					},
					{
						text: "estimateUserOperationGas",
						link: "/references/permissionless/reference/smart-account-actions/estimateUserOperationGas",
					},
					{
						text: "getChainId",
						link: "/references/permissionless/reference/smart-account-actions/getChainId",
					},
					{
						text: "getSupportedEntryPoints",
						link: "/references/permissionless/reference/smart-account-actions/getSupportedEntryPoints",
					},
					{
						text: "getUserOperation",
						link: "/references/permissionless/reference/smart-account-actions/getUserOperation",
					},
					{
						text: "getUserOperationReceipt",
						link: "/references/permissionless/reference/smart-account-actions/getUserOperationReceipt",
					},
					{
						text: "prepareUserOperation",
						link: "/references/permissionless/reference/smart-account-actions/prepareUserOperation",
					},
					{
						text: "sendUserOperation",
						link: "/references/permissionless/reference/smart-account-actions/sendUserOperation",
					},
					{
						text: "waitForUserOperationReceipt",
						link: "/references/permissionless/reference/smart-account-actions/waitForUserOperationReceipt",
					},
				],
			},
			{
				text: "Pimlico Actions",
				collapsed: true,
				items: [
					{
						text: "getPaymasterData",
						link: "/references/permissionless/reference/pimlico-actions/getPaymasterData",
					},
					{
						text: "getPaymasterStubData",
						link: "/references/permissionless/reference/pimlico-actions/getPaymasterStubData",
					},
					{
						text: "getUserOperationGasPrice",
						link: "/references/permissionless/reference/pimlico-actions/getUserOperationGasPrice",
					},
					{
						text: "getUserOperationStatus",
						link: "/references/permissionless/reference/pimlico-actions/getUserOperationStatus",
					},
					{
						text: "validateSponsorshipPolicies",
						link: "/references/permissionless/reference/pimlico-actions/validateSponsorshipPolicies",
					},
				],
			},
			{
				text: "Public Actions",
				collapsed: true,
				items: [
					{
						text: "getSenderAddress",
						link: "/references/permissionless/reference/public-actions/getSenderAddress",
					},
					{
						text: "getAccountNonce",
						link: "/references/permissionless/reference/public-actions/getAccountNonce",
					},
				],
			},
			{
				text: "ERC-7579 Actions",
				collapsed: true,
				items: [
					{
						text: "accountId",
						link: "/references/permissionless/reference/erc7579-actions/accountId",
					},
					{
						text: "installModule",
						link: "/references/permissionless/reference/erc7579-actions/installModule",
					},
					{
						text: "uninstallModule",
						link: "/references/permissionless/reference/erc7579-actions/uninstallModule",
					},
					{
						text: "isModuleInstalled",
						link: "/references/permissionless/reference/erc7579-actions/isModuleInstalled",
					},
					{
						text: "supportsExecutionMode",
						link: "/references/permissionless/reference/erc7579-actions/supportsExecutionMode",
					},
					{
						text: "supportsModule",
						link: "/references/permissionless/reference/erc7579-actions/supportsModule",
					},
				],
			},
			{
				text: "Utilities",
				collapsed: true,
				items: [
					{
						text: "getRequiredPrefund",
						link: "/references/permissionless/reference/utils/getRequiredPrefund",
					},
				],
			},
		],
	},
	{
		text: "permissionless 0.1.x",
		link: "/references/permissionless/v0_1",
	},
];

export const permissionlessWagmiSidebar = [
	{
		text: "Overview",
		link: "/references/permissionless/wagmi",
	},
	{
		text: "Tutorials",
		link: "/references/permissionless/wagmi/tutorial",
		items: [
			{
				text: "Send your first gasless transaction",
				link: "/references/permissionless/wagmi/tutorial/tutorial-1",
			},
		],
	},
	{
		text: "How-to Guides",
		items: [
			{
				text: "Check if an external account supports paymasters",
				link: "/references/permissionless/wagmi/how-to/check-paymaster-support",
			},
		],
	},
	{
		text: "Reference",
		link: "/references/permissionless/reference",
		items: [
			{
				text: "Configuration",
				items: [
					{
						text: "PermissionlessProvider",
						link: "/references/permissionless/wagmi/reference/configuration/PermissionlessProvider",
					},
				],
			},
			{
				text: "Hooks",
				items: [
					{
						text: "useSendTransaction",
						link: "/references/permissionless/wagmi/reference/hooks/useSendTransaction",
					},
					{
						text: "useWaitForTransactionReceipt",
						link: "/references/permissionless/wagmi/reference/hooks/useWaitForTransactionReceipt",
					},
				],
			},
		],
	},
];

export const permissionlessSidebar0Point1 = [
	{
		text: "Overview",
		link: "/references/permissionless/v0_1",
	},
	{
		text: "Why permissionless.js",
		link: "/references/permissionless/v0_1/why",
	},
	{
		text: "FAQs",
		link: "/references/permissionless/v0_1/faqs",
	},
	{
		text: "Tutorials",
		link: "/references/permissionless/v0_1/tutorial",
		items: [
			{
				text: "1. Send your first gasless transaction",
				link: "/references/permissionless/v0_1/tutorial/tutorial-1",
			},
			{
				text: "2. Submit a user operation with a Verifying Paymaster",
				link: "/references/permissionless/v0_1/tutorial/tutorial-2",
			},
		],
	},
	{
		text: "How-to Guides",
		items: [
			{
				text: "Update your existing app to sponsor gas fees for smart account users",
				link: "/references/permissionless/v0_1/how-to/dapp-gas-sponsorship",
			},
			{
				text: "How to send multiple user operations in parallel",
				link: "/references/permissionless/v0_1/how-to/parallel-transactions",
			},
			{
				text: "Error Handling",
				link: "/references/permissionless/v0_1/how-to/error-handling",
			},
			{
				text: "Migration Guide",
				link: "/references/permissionless/v0_1/how-to/migration-guide",
			},
			{
				text: "Local Testing",
				link: "/references/permissionless/v0_1/how-to/local-testing",
			},
			{
				text: "Accounts",
				items: [
					{
						text: "EntryPoint support",
						link: "/references/permissionless/v0_1/how-to/accounts/support",
					},
					{
						text: "How to use a Safe account",
						link: "/references/permissionless/v0_1/how-to/accounts/use-safe-account",
					},
					{
						text: "How to use a Kernel account",
						link: "/references/permissionless/v0_1/how-to/accounts/use-kernel-account",
					},
					{
						text: "How to use a SimpleAccount",
						link: "/references/permissionless/v0_1/how-to/accounts/use-simple-account",
					},
					{
						text: "How to use a Biconomy account",
						link: "/references/permissionless/v0_1/how-to/accounts/use-biconomy-account",
					},
					{
						text: "How to use a LightAccount",
						link: "/references/permissionless/v0_1/how-to/accounts/use-light-account",
					},
					{
						text: "How to use a Trust Wallet account",
						link: "/references/permissionless/v0_1/how-to/accounts/use-trustwallet-account",
					},
					{
						text: "How to use an ERC-7579 compatible smart account",
						link: "/references/permissionless/v0_1/how-to/accounts/use-erc7579-account",
					},
				],
			},
			{
				text: "Signers",
				link: "/references/permissionless/v0_1/how-to/signers",
				items: [
					{
						text: "How to use a Dynamic signer",
						link: "/references/permissionless/v0_1/how-to/signers/dynamic",
					},
					{
						text: "How to use a Privy signer",
						link: "/references/permissionless/v0_1/how-to/signers/privy",
					},
					{
						text: "How to use a Magic signer",
						link: "/references/permissionless/v0_1/how-to/signers/magic",
					},
					{
						text: "How to use a Lit Protocol signer",
						link: "/references/permissionless/v0_1/how-to/signers/lit-protocol",
					},
					{
						text: "How to use a Web3Auth signer",
						link: "/references/permissionless/v0_1/how-to/signers/web3auth",
					},
					{
						text: "How to use a Turnkey signer",
						link: "/references/permissionless/v0_1/how-to/signers/turnkey",
					},
					{
						text: "How to use a Fireblocks signer",
						link: "/references/permissionless/v0_1/how-to/signers/fireblocks",
					},
					{
						text: "How to use a Para signer",
						link: "/references/permissionless/v0_1/how-to/signers/para",
					},
					{
						text: "How to use a DFNS signer",
						link: "/references/permissionless/v0_1/how-to/signers/dfns",
					},
					{
						text: "How to use an Arcana Auth signer",
						link: "/references/permissionless/v0_1/how-to/signers/arcana",
					},
					{
						text: "How to use a Particle Network signer",
						link: "/references/permissionless/v0_1/how-to/signers/particle-network",
					},
				],
			},
		],
	},
	{
		text: "Reference",
		link: "/references/permissionless/v0_1/reference",
		items: [
			{
				text: "Clients",
				collapsed: false,
				items: [
					{
						text: "Bundler Client",
						link: "/references/permissionless/v0_1/reference/clients/bundlerClient",
					},
					{
						text: "Pimlico Bundler Client",
						link: "/references/permissionless/v0_1/reference/clients/pimlicoBundlerClient",
					},
					{
						text: "Pimlico Paymaster Client",
						link: "/references/permissionless/v0_1/reference/clients/pimlicoPaymasterClient",
					},
					{
						text: "Smart Account Client",
						link: "/references/permissionless/v0_1/reference/clients/smartAccountClient",
					},
				],
			},
			{
				text: "Accounts",
				collapsed: false,
				items: [
					{
						text: "signerToSimpleSmartAccount",
						link: "/references/permissionless/v0_1/reference/accounts/signerToSimpleSmartAccount",
					},
					{
						text: "signerToSafeSmartAccount",
						link: "/references/permissionless/v0_1/reference/accounts/signerToSafeSmartAccount",
					},
					{
						text: "signerToKernelSmartAccount",
						link: "/references/permissionless/v0_1/reference/accounts/signerToKernelSmartAccount",
					},
					{
						text: "signerToLightSmartAccount",
						link: "/references/permissionless/v0_1/reference/accounts/signerToLightSmartAccount",
					},
					{
						text: "signerToTrustSmartAccount",
						link: "/references/permissionless/v0_1/reference/accounts/signerToTrustSmartAccount",
					},
				],
			},
			{
				text: "Bundler Actions",
				collapsed: false,
				items: [
					{
						text: "sendUserOperation",
						link: "/references/permissionless/v0_1/reference/bundler-actions/sendUserOperation",
					},
					{
						text: "estimateUserOperationGas",
						link: "/references/permissionless/v0_1/reference/bundler-actions/estimateUserOperationGas",
					},
					{
						text: "getUserOperationReceipt",
						link: "/references/permissionless/v0_1/reference/bundler-actions/getUserOperationReceipt",
					},
					{
						text: "waitForUserOperationReceipt",
						link: "/references/permissionless/v0_1/reference/bundler-actions/waitForUserOperationReceipt",
					},
					{
						text: "getUserOperationByHash",
						link: "/references/permissionless/v0_1/reference/bundler-actions/getUserOperationByHash",
					},
					{
						text: "supportedEntryPoints",
						link: "/references/permissionless/v0_1/reference/bundler-actions/supportedEntryPoints",
					},
				],
			},
			{
				text: "Smart Account Actions",
				collapsed: false,
				items: [
					{
						text: "prepareUserOperationRequest",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/prepareUserOperationRequest",
					},
					{
						text: "sendTransaction",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/sendTransaction",
					},
					{
						text: "sendTransactions",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/sendTransactions",
					},
					{
						text: "sendUserOperation",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/sendUserOperation",
					},
					{
						text: "deployContract",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/deployContract",
					},
					{
						text: "writeContract",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/writeContract",
					},
					{
						text: "signMessage",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/signMessage",
					},
					{
						text: "signTypedData",
						link: "/references/permissionless/v0_1/reference/smart-account-actions/signTypedData",
					},
				],
			},
			{
				text: "Pimlico Bundler Actions",
				collapsed: false,
				items: [
					{
						text: "getUserOperationGasPrice",
						link: "/references/permissionless/v0_1/reference/pimlico-bundler-actions/getUserOperationGasPrice",
					},
					{
						text: "getUserOperationStatus",
						link: "/references/permissionless/v0_1/reference/pimlico-bundler-actions/getUserOperationStatus",
					},
				],
			},
			{
				text: "Pimlico Paymaster Actions",
				collapsed: false,
				items: [
					{
						text: "sponsorUserOperation",
						link: "/references/permissionless/v0_1/reference/pimlico-paymaster-actions/sponsorUserOperation",
					},
					{
						text: "validateSponsorshipPolicies",
						link: "/references/permissionless/v0_1/reference/pimlico-paymaster-actions/validateSponsorshipPolicies",
					},
				],
			},
			{
				text: "Public Actions",
				collapsed: false,
				items: [
					{
						text: "getSenderAddress",
						link: "/references/permissionless/v0_1/reference/public-actions/getSenderAddress",
					},
					{
						text: "getAccountNonce",
						link: "/references/permissionless/v0_1/reference/public-actions/getAccountNonce",
					},
				],
			},
			{
				text: "ERC-7579 Actions",
				collapsed: false,
				items: [
					{
						text: "accountId",
						link: "/references/permissionless/v0_1/reference/erc7579-actions/accountId",
					},
					{
						text: "installModule",
						link: "/references/permissionless/v0_1/reference/erc7579-actions/installModule",
					},
					{
						text: "uninstallModule",
						link: "/references/permissionless/v0_1/reference/erc7579-actions/uninstallModule",
					},
					{
						text: "isModuleInstalled",
						link: "/references/permissionless/v0_1/reference/erc7579-actions/isModuleInstalled",
					},
					{
						text: "supportsExecutionMode",
						link: "/references/permissionless/v0_1/reference/erc7579-actions/supportsExecutionMode",
					},
					{
						text: "supportsModule",
						link: "/references/permissionless/v0_1/reference/erc7579-actions/supportsModule",
					},
				],
			},
			{
				text: "Utilities",
				collapsed: false,
				items: [
					{
						text: "getUserOperationHash",
						link: "/references/permissionless/v0_1/reference/utils/getUserOperationHash",
					},
					{
						text: "signUserOperationHashWithECDSA",
						link: "/references/permissionless/v0_1/reference/utils/signUserOperationHashWithECDSA",
					},
					{
						text: "getRequiredPrefund",
						link: "/references/permissionless/v0_1/reference/utils/getRequiredPrefund",
					},
					{
						text: "walletClientToSmartAccountSigner",
						link: "/references/permissionless/v0_1/reference/utils/walletClientToSmartAccountSigner",
					},
					{
						text: "providerToSmartAccountSigner",
						link: "/references/permissionless/v0_1/reference/utils/providerToSmartAccountSigner",
					},
				],
			},
			{
				text: "Glossary",
				collapsed: false,
				items: [
					{
						text: "Errors",
						link: "/references/permissionless/v0_1/reference/glossary/errors",
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
						link: "/references/permissionless/v0_1/experimental/eip7677/getPaymasterData",
					},
					{
						text: "getPaymasterStubData",
						link: "/references/permissionless/v0_1/experimental/eip7677/getPaymasterStubData",
					},
				],
			},
		],
	},
	{
		text: "permissionless 0.2.x",
		link: "/references/permissionless",
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
