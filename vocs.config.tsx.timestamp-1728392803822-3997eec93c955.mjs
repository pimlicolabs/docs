// vocs.config.tsx
import { defineConfig } from "file:///Users/garvitkhatri/dev/docs/node_modules/.pnpm/vocs@1.0.0-alpha.55_@types+node@20.11.2_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0_ro_6xqajxyn5wfo5sqz2itlawtndi/node_modules/vocs/_lib/index.js";

// utils.ts
import path from "path";
var __vite_injected_original_dirname = "/Users/garvitkhatri/dev/docs";
var viteConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./docs")
    }
  }
};
var utils_default = viteConfig;

// vocs.config.tsx
import { Fragment, jsx } from "file:///Users/garvitkhatri/dev/docs/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";
var platformSidebar = [
  {
    text: "Overview",
    link: "/infra/platform"
  },
  {
    text: "Why Pimlico",
    items: [
      {
        text: "For Startups",
        link: "/infra/platform/why-pimlico/startups"
      },
      {
        text: "For Enterprise",
        link: "/infra/platform/why-pimlico/enterprise"
      }
    ]
  },
  {
    text: "Pricing",
    link: "/infra/platform/pricing"
  },
  {
    text: "Supported Chains",
    link: "/infra/platform/supported-chains"
  },
  {
    text: "Sponsorship Policies",
    items: [
      {
        text: "How to use sponsorship policies",
        link: "/infra/platform/sponsorship-policies"
      },
      {
        text: "How to use a webhook",
        link: "/infra/platform/sponsorship-policies/webhook"
      },
      {
        text: "How to create a gas program",
        link: "/infra/platform/sponsorship-policies/gas-program"
      }
    ]
  },
  {
    text: "Debugging",
    items: [
      {
        text: "How to debug dropped user operations",
        link: "/infra/platform/debugging/dropped-user-operations"
      }
    ]
  },
  {
    text: "API",
    items: [
      {
        text: "Pagination",
        link: "/infra/platform/api/pagination"
      },
      {
        text: "Sponsorship Policies",
        link: "/infra/platform/api/sponsorship-policies",
        collapsed: false,
        items: [
          {
            text: "The Sponsorship Policy object",
            link: "/infra/platform/api/sponsorship-policies/object"
          },
          {
            text: "Retrieve a sponsorship policy",
            link: "/infra/platform/api/sponsorship-policies/retrieve"
          },
          {
            text: "List all sponsorship policies",
            link: "/infra/platform/api/sponsorship-policies/list"
          },
          {
            text: "Create a sponsorship policy",
            link: "/infra/platform/api/sponsorship-policies/create"
          },
          {
            text: "Update a sponsorship policy",
            link: "/infra/platform/api/sponsorship-policies/update"
          }
        ]
      }
    ]
  }
];
var bundlerSidebar = [
  {
    text: "Overview",
    link: "/infra/bundler"
  },
  {
    text: "How to use the bundler",
    link: "/infra/bundler/usage"
  },
  {
    text: "Self host guide",
    link: "/infra/bundler/self-host"
  },
  { text: "FAQs", link: "/infra/bundler/faqs" },
  {
    text: "Compression",
    items: [
      {
        text: "How to create your own inflator contract and submit compressed user operations",
        link: "/infra/bundler/compression"
      },
      {
        text: "Contracts Reference",
        link: "/infra/bundler/compression/reference"
      }
    ]
  },
  {
    text: "Endpoints",
    collapsed: false,
    items: [
      {
        text: "eth_sendUserOperation",
        link: "/infra/bundler/endpoints/eth_sendUserOperation"
      },
      {
        text: "eth_estimateUserOperationGas",
        link: "/infra/bundler/endpoints/eth_estimateUserOperationGas"
      },
      {
        text: "eth_getUserOperationReceipt",
        link: "/infra/bundler/endpoints/eth_getUserOperationReceipt"
      },
      {
        text: "eth_getUserOperationByHash",
        link: "/infra/bundler/endpoints/eth_getUserOperationByHash"
      },
      {
        text: "eth_supportedEntryPoints",
        link: "/infra/bundler/endpoints/eth_supportedEntryPoints"
      },
      {
        text: "pimlico_sendCompressedUserOperation",
        link: "/infra/bundler/endpoints/pimlico_sendCompressedUserOperation"
      },
      {
        text: "pimlico_getUserOperationGasPrice",
        link: "/infra/bundler/endpoints/pimlico_getUserOperationGasPrice"
      },
      {
        text: "pimlico_getUserOperationStatus",
        link: "/infra/bundler/endpoints/pimlico_getUserOperationStatus"
      }
    ]
  },
  {
    text: "Bundler Errors",
    collapsed: true,
    items: [
      {
        text: "Invalid 'apikey' query parameter",
        link: "/infra/bundler/bundler-errors/invalid-api-key"
      },
      {
        text: "Chain is not supported",
        link: "/infra/bundler/bundler-errors/chain-not-supported"
      },
      {
        text: "Validation Error: Invalid Discriminator Value",
        link: "/infra/bundler/bundler-errors/invalid-discriminator-value"
      },
      {
        text: "Unknown error from alto bundler",
        link: "/infra/bundler/bundler-errors/unknown-error"
      }
    ]
  },
  {
    text: "EntryPoint Errors",
    collapsed: true,
    items: [
      {
        text: "AA10 sender already constructed",
        link: "/infra/bundler/entrypoint-errors/aa10"
      },
      {
        text: "AA13 initCode failed or OOG",
        link: "/infra/bundler/entrypoint-errors/aa13"
      },
      {
        text: "AA14 initCode must return sender",
        link: "/infra/bundler/entrypoint-errors/aa14"
      },
      {
        text: "AA15 initCode must create sender",
        link: "/infra/bundler/entrypoint-errors/aa15"
      },
      {
        text: "AA20 account not deployed",
        link: "/infra/bundler/entrypoint-errors/aa20"
      },
      {
        text: "AA21 didn't pay prefund",
        link: "/infra/bundler/entrypoint-errors/aa21"
      },
      {
        text: "AA22 expired or not due",
        link: "/infra/bundler/entrypoint-errors/aa22"
      },
      { text: "AA23 reverted", link: "/infra/bundler/entrypoint-errors/aa23" },
      {
        text: "AA24 signature error",
        link: "/infra/bundler/entrypoint-errors/aa24"
      },
      {
        text: "AA25 invalid account nonce",
        link: "/infra/bundler/entrypoint-errors/aa25"
      },
      {
        text: "AA30 paymaster not deployed",
        link: "/infra/bundler/entrypoint-errors/aa30"
      },
      {
        text: "AA31 paymaster deposit too low",
        link: "/infra/bundler/entrypoint-errors/aa31"
      },
      {
        text: "AA32 paymaster expired or not due",
        link: "/infra/bundler/entrypoint-errors/aa32"
      },
      { text: "AA33 reverted", link: "/infra/bundler/entrypoint-errors/aa33" },
      {
        text: "AA34 signature error",
        link: "/infra/bundler/entrypoint-errors/aa34"
      },
      {
        text: "AA40 over verificationGasLimit",
        link: "/infra/bundler/entrypoint-errors/aa40"
      },
      {
        text: "AA41 too little verificationGas",
        link: "/infra/bundler/entrypoint-errors/aa41"
      },
      {
        text: "AA50 postOp reverted",
        link: "/infra/bundler/entrypoint-errors/aa50"
      },
      {
        text: "AA51 prefund below actualGasCost",
        link: "/infra/bundler/entrypoint-errors/aa51"
      },
      {
        text: "AA90 invalid beneficiary",
        link: "/infra/bundler/entrypoint-errors/aa90"
      },
      {
        text: "AA91 failed send to beneficiary",
        link: "/infra/bundler/entrypoint-errors/aa91"
      },
      {
        text: "AA92 internal call only",
        link: "/infra/bundler/entrypoint-errors/aa92"
      },
      {
        text: "AA93 invalid paymasterAndData",
        link: "/infra/bundler/entrypoint-errors/aa93"
      },
      {
        text: "AA94 gas values overflow",
        link: "/infra/bundler/entrypoint-errors/aa94"
      },
      {
        text: "AA95 out of gas",
        link: "/infra/bundler/entrypoint-errors/aa95"
      },
      {
        text: "AA96 invalid aggregator",
        link: "/infra/bundler/entrypoint-errors/aa96"
      }
    ]
  }
];
var paymasterSidebar = [
  {
    text: "Overview",
    link: "/infra/paymaster"
  },
  {
    text: "Verifying Paymaster",
    link: "/infra/paymaster/verifying-paymaster",
    items: [
      {
        text: "How to use the Verifying Paymaster",
        link: "/infra/paymaster/verifying-paymaster/usage"
      },
      {
        text: "Endpoints",
        link: "/infra/paymaster/verifying-paymaster/endpoints"
      },
      { text: "FAQs", link: "/infra/paymaster/verifying-paymaster/faqs" },
      {
        text: "Common Errors",
        link: "/infra/paymaster/verifying-paymaster/common-errors"
      }
    ]
  },
  {
    text: "ERC-20 Paymaster",
    link: "/infra/paymaster/erc20-paymaster",
    items: [
      { text: "Overview", link: "/infra/paymaster/erc20-paymaster" },
      {
        text: "How to use the ERC-20 Paymaster",
        link: "/infra/paymaster/erc20-paymaster/how-to/use-paymaster"
      },
      {
        text: "Estimating costs with ERC-20 Paymaster",
        link: "/infra/paymaster/erc20-paymaster/how-to/calculate-costs"
      },
      {
        text: "Endpoints",
        items: [
          {
            text: "pimlico_getTokenQuotes",
            link: "/infra/paymaster/erc20-paymaster/endpoints/pimlico_getTokenQuotes"
          },
          {
            text: "pm_getPaymasterData",
            link: "/infra/paymaster/erc20-paymaster/endpoints/pm_getPaymasterData"
          },
          {
            text: "pm_getPaymasterStubData",
            link: "/infra/paymaster/erc20-paymaster/endpoints/pm_getPaymasterStubData"
          },
          {
            text: "pm_sponsorUserOperation",
            link: "/infra/paymaster/erc20-paymaster/endpoints/pm_sponsorUserOperation"
          }
        ]
      },
      { text: "Architecture", link: "/infra/paymaster/erc20-paymaster/architecture" },
      { text: "Contract Addresses", link: "/infra/paymaster/erc20-paymaster/contract-addresses" }
    ]
  },
  {
    text: "ERC-20 Paymaster (permissionless)",
    collapsed: true,
    link: "/infra/paymaster/erc20-paymaster-permissionless",
    items: [
      { text: "Overview", link: "/infra/paymaster/erc20-paymaster-permissionless" },
      {
        text: "Contract Addresses",
        link: "/infra/paymaster/erc20-paymaster-permissionless/contract-addresses"
      },
      {
        text: "Architecture",
        link: "/infra/paymaster/erc20-paymaster-permissionless/architecture"
      },
      { text: "Guides", link: "/infra/paymaster/erc20-paymaster-permissionless/guides" },
      { text: "FAQs", link: "/infra/paymaster/erc20-paymaster-permissionless/faqs" }
    ]
  }
];
var conceptualSidebar = [
  {
    text: "Overview",
    link: "/conceptual"
  },
  {
    text: "Account Abstraction",
    link: "/conceptual/account-abstraction"
  },
  {
    text: "ERC-4337",
    link: "/conceptual/erc4337"
  },
  {
    text: "ERC-7579",
    link: "/conceptual/erc7579"
  }
];
var permissionlessSidebar = [
  {
    text: "Overview",
    link: "/permissionless/core"
  },
  {
    text: "Why permissionless.js",
    link: "/permissionless/core/why"
  },
  {
    text: "FAQs",
    link: "/permissionless/core/faqs"
  },
  {
    text: "Tutorials",
    link: "/permissionless/core/tutorial",
    items: [
      {
        text: "1. Send your first gasless transaction",
        link: "/permissionless/core/tutorial/tutorial-1"
      },
      {
        text: "2. Submit a user operation with an ERC-20 Paymaster",
        link: "/permissionless/core/tutorial/tutorial-2"
      }
    ]
  },
  {
    text: "How-to Guides",
    items: [
      {
        text: "Update your existing app to sponsor gas fees for smart account users",
        link: "/permissionless/core/how-to/dapp-gas-sponsorship"
      },
      {
        text: "How to send multiple user operations in parallel",
        link: "/permissionless/core/how-to/parallel-transactions"
      },
      // {
      // 	text: "Error Handling",
      // 	link: "/permissionless/core/how-to/error-handling",
      // },
      {
        text: "Migration Guide",
        link: "/permissionless/core/how-to/migration-guide"
      },
      {
        text: "Local Testing",
        link: "/permissionless/core/how-to/local-testing"
      },
      {
        text: "Accounts",
        items: [
          {
            text: "EntryPoint support",
            link: "/permissionless/core/how-to/accounts/support"
          },
          {
            text: "How to use a Safe account",
            link: "/permissionless/core/how-to/accounts/use-safe-account"
          },
          {
            text: "How to use a Kernel account",
            link: "/permissionless/core/how-to/accounts/use-kernel-account"
          },
          {
            text: "How to use a SimpleAccount",
            link: "/permissionless/core/how-to/accounts/use-simple-account"
          },
          {
            text: "How to use a Biconomy account",
            link: "/permissionless/core/how-to/accounts/use-biconomy-account"
          },
          {
            text: "How to use a LightAccount",
            link: "/permissionless/core/how-to/accounts/use-light-account"
          },
          {
            text: "How to use a Trust Wallet account",
            link: "/permissionless/core/how-to/accounts/use-trustwallet-account"
          },
          {
            text: "How to use a Coinbase Wallet account",
            link: "/permissionless/core/how-to/accounts/use-coinbase-account"
          },
          {
            text: "How to use an ERC-7579 compatible smart account",
            link: "/permissionless/core/how-to/accounts/use-erc7579-account"
          }
        ]
      },
      {
        text: "Paymasters",
        items: [
          {
            text: "How to use a custom Paymaster",
            link: "/permissionless/core/how-to/paymasters/use-custom-paymaster"
          },
          {
            text: "How to conditionally sponsor a user operation",
            link: "/permissionless/core/how-to/paymasters/conditional-sponsoring"
          }
        ]
      },
      {
        text: "Signers",
        link: "/permissionless/core/how-to/signers",
        items: [
          {
            text: "How to use a Dynamic signer",
            link: "/permissionless/core/how-to/signers/dynamic"
          },
          {
            text: "How to use a Privy signer",
            link: "/permissionless/core/how-to/signers/privy"
          },
          {
            text: "How to use a Magic signer",
            link: "/permissionless/core/how-to/signers/magic"
          },
          {
            text: "How to use a Passport signer",
            link: "/permissionless/core/how-to/signers/passport"
          },
          {
            text: "How to use a Lit Protocol signer",
            link: "/permissionless/core/how-to/signers/lit-protocol"
          },
          {
            text: "How to use a Web3Auth signer",
            link: "/permissionless/core/how-to/signers/web3auth"
          },
          {
            text: "How to use a Turnkey signer",
            link: "/permissionless/core/how-to/signers/turnkey"
          },
          {
            text: "How to use a Fireblocks signer",
            link: "/permissionless/core/how-to/signers/fireblocks"
          },
          {
            text: "How to use a Capsule signer",
            link: "/permissionless/core/how-to/signers/capsule"
          },
          {
            text: "How to use a DFNS signer",
            link: "/permissionless/core/how-to/signers/dfns"
          },
          {
            text: "How to use an Arcana Auth signer",
            link: "/permissionless/core/how-to/signers/arcana"
          },
          {
            text: "How to use a Particle Network signer",
            link: "/permissionless/core/how-to/signers/particle-network"
          }
        ]
      }
    ]
  },
  {
    text: "Reference",
    link: "/permissionless/core/reference",
    items: [
      {
        text: "Clients",
        collapsed: false,
        items: [
          {
            text: "Pimlico Client",
            link: "/permissionless/core/reference/clients/pimlicoClient"
          },
          {
            text: "Smart Account Client",
            link: "/permissionless/core/reference/clients/smartAccountClient"
          }
        ]
      },
      {
        text: "Accounts",
        collapsed: false,
        items: [
          {
            text: "toSimpleSmartAccount",
            link: "/permissionless/core/reference/accounts/toSimpleSmartAccount"
          },
          {
            text: "toSafeSmartAccount",
            link: "/permissionless/core/reference/accounts/toSafeSmartAccount"
          },
          {
            text: "toEcdsaKernelSmartAccount",
            link: "/permissionless/core/reference/accounts/toEcdsaKernelSmartAccount"
          },
          {
            text: "toLightSmartAccount",
            link: "/permissionless/core/reference/accounts/toLightSmartAccount"
          },
          {
            text: "toTrustSmartAccount",
            link: "/permissionless/core/reference/accounts/toTrustSmartAccount"
          }
        ]
      },
      {
        text: "Smart Account Actions",
        collapsed: false,
        items: [
          {
            text: "sendTransaction",
            link: "/permissionless/core/reference/smart-account-actions/sendTransaction"
          },
          {
            text: "writeContract",
            link: "/permissionless/core/reference/smart-account-actions/writeContract"
          },
          {
            text: "estimateUserOperationGas",
            link: "/permissionless/core/reference/smart-account-actions/estimateUserOperationGas"
          },
          {
            text: "getChainId",
            link: "/permissionless/core/reference/smart-account-actions/getChainId"
          },
          {
            text: "getSupportedEntryPoints",
            link: "/permissionless/core/reference/smart-account-actions/getSupportedEntryPoints"
          },
          {
            text: "getUserOperation",
            link: "/permissionless/core/reference/smart-account-actions/getUserOperation"
          },
          {
            text: "getUserOperationReceipt",
            link: "/permissionless/core/reference/smart-account-actions/getUserOperationReceipt"
          },
          {
            text: "prepareUserOperation",
            link: "/permissionless/core/reference/smart-account-actions/prepareUserOperation"
          },
          {
            text: "sendUserOperation",
            link: "/permissionless/core/reference/smart-account-actions/sendUserOperation"
          },
          {
            text: "waitForUserOperationReceipt",
            link: "/permissionless/core/reference/smart-account-actions/waitForUserOperationReceipt"
          }
        ]
      },
      {
        text: "Pimlico Actions",
        collapsed: false,
        items: [
          {
            text: "getPaymasterData",
            link: "/permissionless/core/reference/pimlico-actions/getPaymasterData"
          },
          {
            text: "getPaymasterStubData",
            link: "/permissionless/core/reference/pimlico-actions/getPaymasterStubData"
          },
          {
            text: "sendCompressedUserOperation",
            link: "/permissionless/core/reference/pimlico-actions/sendCompressedUserOperation"
          },
          {
            text: "getUserOperationGasPrice",
            link: "/permissionless/core/reference/pimlico-actions/getUserOperationGasPrice"
          },
          {
            text: "getUserOperationStatus",
            link: "/permissionless/core/reference/pimlico-actions/getUserOperationStatus"
          },
          {
            text: "validateSponsorshipPolicies",
            link: "/permissionless/core/reference/pimlico-actions/validateSponsorshipPolicies"
          }
        ]
      },
      {
        text: "Public Actions",
        collapsed: false,
        items: [
          {
            text: "getSenderAddress",
            link: "/permissionless/core/reference/public-actions/getSenderAddress"
          },
          {
            text: "getAccountNonce",
            link: "/permissionless/core/reference/public-actions/getAccountNonce"
          }
        ]
      },
      {
        text: "ERC-7579 Actions",
        collapsed: false,
        items: [
          {
            text: "accountId",
            link: "/permissionless/core/reference/erc7579-actions/accountId"
          },
          {
            text: "installModule",
            link: "/permissionless/core/reference/erc7579-actions/installModule"
          },
          {
            text: "uninstallModule",
            link: "/permissionless/core/reference/erc7579-actions/uninstallModule"
          },
          {
            text: "isModuleInstalled",
            link: "/permissionless/core/reference/erc7579-actions/isModuleInstalled"
          },
          {
            text: "supportsExecutionMode",
            link: "/permissionless/core/reference/erc7579-actions/supportsExecutionMode"
          },
          {
            text: "supportsModule",
            link: "/permissionless/core/reference/erc7579-actions/supportsModule"
          }
        ]
      },
      {
        text: "Utilities",
        collapsed: false,
        items: [
          {
            text: "getRequiredPrefund",
            link: "/permissionless/core/reference/utils/getRequiredPrefund"
          }
        ]
      }
    ]
  },
  {
    text: "permissionless 0.1.x",
    link: "/permissionless/core/v0_1"
  }
];
var permissionlessWagmiSidebar = [
  {
    text: "Overview",
    link: "/permissionless/wagmi"
  }
];
var permissionlessSidebar0Point1 = [
  {
    text: "Overview",
    link: "/permissionless/v0_1"
  },
  {
    text: "Why permissionless.js",
    link: "/permissionless/v0_1/why"
  },
  {
    text: "FAQs",
    link: "/permissionless/v0_1/faqs"
  },
  {
    text: "Tutorials",
    link: "/permissionless/v0_1/tutorial",
    items: [
      {
        text: "1. Send your first gasless transaction",
        link: "/permissionless/v0_1/tutorial/tutorial-1"
      },
      {
        text: "2. Submit a user operation with a Verifying Paymaster",
        link: "/permissionless/v0_1/tutorial/tutorial-2"
      }
    ]
  },
  {
    text: "How-to Guides",
    items: [
      {
        text: "Update your existing app to sponsor gas fees for smart account users",
        link: "/permissionless/v0_1/how-to/dapp-gas-sponsorship"
      },
      {
        text: "How to send multiple user operations in parallel",
        link: "/permissionless/v0_1/how-to/parallel-transactions"
      },
      {
        text: "Error Handling",
        link: "/permissionless/v0_1/how-to/error-handling"
      },
      {
        text: "Migration Guide",
        link: "/permissionless/v0_1/how-to/migration-guide"
      },
      {
        text: "Local Testing",
        link: "/permissionless/v0_1/how-to/local-testing"
      },
      {
        text: "Accounts",
        items: [
          {
            text: "EntryPoint support",
            link: "/permissionless/v0_1/how-to/accounts/support"
          },
          {
            text: "How to use a Safe account",
            link: "/permissionless/v0_1/how-to/accounts/use-safe-account"
          },
          {
            text: "How to use a Kernel account",
            link: "/permissionless/v0_1/how-to/accounts/use-kernel-account"
          },
          {
            text: "How to use a SimpleAccount",
            link: "/permissionless/v0_1/how-to/accounts/use-simple-account"
          },
          {
            text: "How to use a Biconomy account",
            link: "/permissionless/v0_1/how-to/accounts/use-biconomy-account"
          },
          {
            text: "How to use a LightAccount",
            link: "/permissionless/v0_1/how-to/accounts/use-light-account"
          },
          {
            text: "How to use a Trust Wallet account",
            link: "/permissionless/v0_1/how-to/accounts/use-trustwallet-account"
          },
          {
            text: "How to use an ERC-7579 compatible smart account",
            link: "/permissionless/v0_1/how-to/accounts/use-erc7579-account"
          }
        ]
      },
      {
        text: "Paymasters",
        items: [
          {
            text: "How to use a custom Paymaster",
            link: "/permissionless/v0_1/how-to/paymasters/use-custom-paymaster"
          },
          {
            text: "How to conditionally sponsor a user operation",
            link: "/permissionless/v0_1/how-to/paymasters/conditional-sponsoring"
          }
        ]
      },
      {
        text: "Signers",
        link: "/permissionless/v0_1/how-to/signers",
        items: [
          {
            text: "How to use a Dynamic signer",
            link: "/permissionless/v0_1/how-to/signers/dynamic"
          },
          {
            text: "How to use a Privy signer",
            link: "/permissionless/v0_1/how-to/signers/privy"
          },
          {
            text: "How to use a Magic signer",
            link: "/permissionless/v0_1/how-to/signers/magic"
          },
          {
            text: "How to use a Passport signer",
            link: "/permissionless/v0_1/how-to/signers/passport"
          },
          {
            text: "How to use a Lit Protocol signer",
            link: "/permissionless/v0_1/how-to/signers/lit-protocol"
          },
          {
            text: "How to use a Web3Auth signer",
            link: "/permissionless/v0_1/how-to/signers/web3auth"
          },
          {
            text: "How to use a Turnkey signer",
            link: "/permissionless/v0_1/how-to/signers/turnkey"
          },
          {
            text: "How to use a Fireblocks signer",
            link: "/permissionless/v0_1/how-to/signers/fireblocks"
          },
          {
            text: "How to use a Capsule signer",
            link: "/permissionless/v0_1/how-to/signers/capsule"
          },
          {
            text: "How to use a DFNS signer",
            link: "/permissionless/v0_1/how-to/signers/dfns"
          },
          {
            text: "How to use an Arcana Auth signer",
            link: "/permissionless/v0_1/how-to/signers/arcana"
          },
          {
            text: "How to use a Particle Network signer",
            link: "/permissionless/v0_1/how-to/signers/particle-network"
          }
        ]
      }
    ]
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
            link: "/permissionless/v0_1/reference/clients/bundlerClient"
          },
          {
            text: "Pimlico Bundler Client",
            link: "/permissionless/v0_1/reference/clients/pimlicoBundlerClient"
          },
          {
            text: "Pimlico Paymaster Client",
            link: "/permissionless/v0_1/reference/clients/pimlicoPaymasterClient"
          },
          {
            text: "Smart Account Client",
            link: "/permissionless/v0_1/reference/clients/smartAccountClient"
          }
        ]
      },
      {
        text: "Accounts",
        collapsed: false,
        items: [
          {
            text: "signerToSimpleSmartAccount",
            link: "/permissionless/v0_1/reference/accounts/signerToSimpleSmartAccount"
          },
          {
            text: "signerToSafeSmartAccount",
            link: "/permissionless/v0_1/reference/accounts/signerToSafeSmartAccount"
          },
          {
            text: "signerToKernelSmartAccount",
            link: "/permissionless/v0_1/reference/accounts/signerToKernelSmartAccount"
          },
          {
            text: "signerToLightSmartAccount",
            link: "/permissionless/v0_1/reference/accounts/signerToLightSmartAccount"
          },
          {
            text: "signerToTrustSmartAccount",
            link: "/permissionless/v0_1/reference/accounts/signerToTrustSmartAccount"
          }
        ]
      },
      {
        text: "Bundler Actions",
        collapsed: false,
        items: [
          {
            text: "sendUserOperation",
            link: "/permissionless/v0_1/reference/bundler-actions/sendUserOperation"
          },
          {
            text: "estimateUserOperationGas",
            link: "/permissionless/v0_1/reference/bundler-actions/estimateUserOperationGas"
          },
          {
            text: "getUserOperationReceipt",
            link: "/permissionless/v0_1/reference/bundler-actions/getUserOperationReceipt"
          },
          {
            text: "waitForUserOperationReceipt",
            link: "/permissionless/v0_1/reference/bundler-actions/waitForUserOperationReceipt"
          },
          {
            text: "getUserOperationByHash",
            link: "/permissionless/v0_1/reference/bundler-actions/getUserOperationByHash"
          },
          {
            text: "supportedEntryPoints",
            link: "/permissionless/v0_1/reference/bundler-actions/supportedEntryPoints"
          }
        ]
      },
      {
        text: "Smart Account Actions",
        collapsed: false,
        items: [
          {
            text: "prepareUserOperationRequest",
            link: "/permissionless/v0_1/reference/smart-account-actions/prepareUserOperationRequest"
          },
          {
            text: "sendTransaction",
            link: "/permissionless/v0_1/reference/smart-account-actions/sendTransaction"
          },
          {
            text: "sendTransactions",
            link: "/permissionless/v0_1/reference/smart-account-actions/sendTransactions"
          },
          {
            text: "sendUserOperation",
            link: "/permissionless/v0_1/reference/smart-account-actions/sendUserOperation"
          },
          {
            text: "deployContract",
            link: "/permissionless/v0_1/reference/smart-account-actions/deployContract"
          },
          {
            text: "writeContract",
            link: "/permissionless/v0_1/reference/smart-account-actions/writeContract"
          },
          {
            text: "signMessage",
            link: "/permissionless/v0_1/reference/smart-account-actions/signMessage"
          },
          {
            text: "signTypedData",
            link: "/permissionless/v0_1/reference/smart-account-actions/signTypedData"
          }
        ]
      },
      {
        text: "Pimlico Bundler Actions",
        collapsed: false,
        items: [
          {
            text: "sendCompressedUserOperation",
            link: "/permissionless/v0_1/reference/pimlico-bundler-actions/sendCompressedUserOperation"
          },
          {
            text: "getUserOperationGasPrice",
            link: "/permissionless/v0_1/reference/pimlico-bundler-actions/getUserOperationGasPrice"
          },
          {
            text: "getUserOperationStatus",
            link: "/permissionless/v0_1/reference/pimlico-bundler-actions/getUserOperationStatus"
          }
        ]
      },
      {
        text: "Pimlico Paymaster Actions",
        collapsed: false,
        items: [
          {
            text: "sponsorUserOperation",
            link: "/permissionless/v0_1/reference/pimlico-paymaster-actions/sponsorUserOperation"
          },
          {
            text: "validateSponsorshipPolicies",
            link: "/permissionless/v0_1/reference/pimlico-paymaster-actions/validateSponsorshipPolicies"
          }
        ]
      },
      {
        text: "Public Actions",
        collapsed: false,
        items: [
          {
            text: "getSenderAddress",
            link: "/permissionless/v0_1/reference/public-actions/getSenderAddress"
          },
          {
            text: "getAccountNonce",
            link: "/permissionless/v0_1/reference/public-actions/getAccountNonce"
          }
        ]
      },
      {
        text: "ERC-7579 Actions",
        collapsed: false,
        items: [
          {
            text: "accountId",
            link: "/permissionless/v0_1/reference/erc7579-actions/accountId"
          },
          {
            text: "installModule",
            link: "/permissionless/v0_1/reference/erc7579-actions/installModule"
          },
          {
            text: "uninstallModule",
            link: "/permissionless/v0_1/reference/erc7579-actions/uninstallModule"
          },
          {
            text: "isModuleInstalled",
            link: "/permissionless/v0_1/reference/erc7579-actions/isModuleInstalled"
          },
          {
            text: "supportsExecutionMode",
            link: "/permissionless/v0_1/reference/erc7579-actions/supportsExecutionMode"
          },
          {
            text: "supportsModule",
            link: "/permissionless/v0_1/reference/erc7579-actions/supportsModule"
          }
        ]
      },
      {
        text: "Utilities",
        collapsed: false,
        items: [
          {
            text: "getUserOperationHash",
            link: "/permissionless/v0_1/reference/utils/getUserOperationHash"
          },
          {
            text: "signUserOperationHashWithECDSA",
            link: "/permissionless/v0_1/reference/utils/signUserOperationHashWithECDSA"
          },
          {
            text: "getRequiredPrefund",
            link: "/permissionless/v0_1/reference/utils/getRequiredPrefund"
          },
          {
            text: "walletClientToSmartAccountSigner",
            link: "/permissionless/v0_1/reference/utils/walletClientToSmartAccountSigner"
          },
          {
            text: "providerToSmartAccountSigner",
            link: "/permissionless/v0_1/reference/utils/providerToSmartAccountSigner"
          }
        ]
      },
      {
        text: "Glossary",
        collapsed: false,
        items: [{ text: "Errors", link: "/permissionless/v0_1/reference/glossary/errors" }]
      }
    ]
  },
  {
    text: "Experimental",
    collapsed: false,
    items: [
      {
        text: "EIP-7677",
        collapsed: false,
        items: [
          {
            text: "getPaymasterData",
            link: "/permissionless/v0_1/experimental/eip7677/getPaymasterData"
          },
          {
            text: "getPaymasterStubData",
            link: "/permissionless/v0_1/experimental/eip7677/getPaymasterStubData"
          }
        ]
      }
    ]
  },
  {
    text: "permissionless 0.2.x",
    link: "/permissionless"
  }
];
var vocs_config_default = defineConfig({
  title: "Pimlico",
  logoUrl: { light: "/pimlico-purple.svg", dark: "/pimlico-white.svg" },
  iconUrl: "/favicons/favicon.svg",
  titleTemplate: "%s | Pimlico Docs",
  editLink: {
    pattern: "https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path",
    text: "Edit on GitHub"
  },
  description: "Pimlico is the world's most popular account abstraction infrastructure platform",
  head: () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("script", { src: "/posthog.js" }) }),
  banner: {
    content: /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://twitter.com/pimlicoHQ/status/1721890681185321018",
        target: "_blank",
        rel: "nofollow noreferrer",
        children: "\u{1F389} We raised $4.2 million from a16z to power Ethereum's transition to smart accounts! Read more \u2192"
      }
    ),
    dismissable: true,
    backgroundColor: "#3c393f",
    textColor: "#eeeef0"
  },
  vite: utils_default,
  sidebar: {
    "/permissionless": [
      {
        link: "/permissionless/core",
        text: "Core",
        items: permissionlessSidebar
      },
      {
        link: "/permissionless/wagmi",
        text: "Wagmi",
        items: permissionlessWagmiSidebar
      }
    ],
    "/permissionless/v0_1": permissionlessSidebar0Point1,
    "/infra": [
      {
        text: "Platform",
        link: "/infra/platform",
        items: platformSidebar
      },
      {
        text: "Bundler",
        link: "/infra/bundler",
        items: bundlerSidebar
      },
      {
        text: "Paymaster",
        link: "/infra/paymaster",
        items: paymasterSidebar
      }
    ],
    "/conceptual": conceptualSidebar
  },
  ogImageUrl: {
    "/": "https://docs-og-pimlico.vercel.app/api/og?logo=%logo&title=%title&description=%description"
  },
  rootDir: "docs",
  theme: {
    accentColor: { light: "#7115AA", dark: "#a66cc9" }
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/pimlicolabs"
    },
    {
      icon: "telegram",
      link: "https://t.me/pimlicoHQ"
    },
    {
      icon: "x",
      link: "https://twitter.com/pimlicoHQ"
    },
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/pimlico"
    }
  ],
  topNav: [
    {
      text: "permissionless.js",
      match: "/permissionless",
      items: [
        {
          text: "core",
          link: "/permissionless/core"
        },
        {
          text: "wagmi",
          match: "/permissionless/wagmi",
          link: "/permissionless/wagmi"
        }
      ]
    },
    {
      text: "Infrastructure",
      items: [
        { text: "Platform", link: "/infra/platform" },
        { text: "Bundler", link: "/infra/bundler" },
        { text: "Paymaster", link: "/infra/paymaster" }
      ],
      match: "/infra"
    },
    {
      text: "Conceptual",
      link: "/conceptual"
    },
    {
      text: "Dashboard",
      link: "https://dashboard.pimlico.io"
    }
  ]
});
export {
  bundlerSidebar,
  conceptualSidebar,
  vocs_config_default as default,
  paymasterSidebar,
  permissionlessSidebar,
  permissionlessSidebar0Point1,
  permissionlessWagmiSidebar,
  platformSidebar
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgInV0aWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiXG5pbXBvcnQgdml0ZUNvbmZpZyBmcm9tIFwiLi91dGlsc1wiXG5cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybVNpZGViYXIgPSBbXG5cdHtcblx0XHR0ZXh0OiBcIk92ZXJ2aWV3XCIsXG5cdFx0bGluazogXCIvaW5mcmEvcGxhdGZvcm1cIixcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiV2h5IFBpbWxpY29cIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkZvciBTdGFydHVwc1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybS93aHktcGltbGljby9zdGFydHVwc1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJGb3IgRW50ZXJwcmlzZVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybS93aHktcGltbGljby9lbnRlcnByaXNlXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlByaWNpbmdcIixcblx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybS9wcmljaW5nXCIsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlN1cHBvcnRlZCBDaGFpbnNcIixcblx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybS9zdXBwb3J0ZWQtY2hhaW5zXCIsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlNwb25zb3JzaGlwIFBvbGljaWVzXCIsXG5cdFx0aXRlbXM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIHNwb25zb3JzaGlwIHBvbGljaWVzXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL3BsYXRmb3JtL3Nwb25zb3JzaGlwLXBvbGljaWVzXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSB3ZWJob29rXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL3BsYXRmb3JtL3Nwb25zb3JzaGlwLXBvbGljaWVzL3dlYmhvb2tcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiSG93IHRvIGNyZWF0ZSBhIGdhcyBwcm9ncmFtXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL3BsYXRmb3JtL3Nwb25zb3JzaGlwLXBvbGljaWVzL2dhcy1wcm9ncmFtXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkRlYnVnZ2luZ1wiLFxuXHRcdGl0ZW1zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiSG93IHRvIGRlYnVnIGRyb3BwZWQgdXNlciBvcGVyYXRpb25zXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL3BsYXRmb3JtL2RlYnVnZ2luZy9kcm9wcGVkLXVzZXItb3BlcmF0aW9uc1wiLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJBUElcIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlBhZ2luYXRpb25cIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvcGxhdGZvcm0vYXBpL3BhZ2luYXRpb25cIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiU3BvbnNvcnNoaXAgUG9saWNpZXNcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvcGxhdGZvcm0vYXBpL3Nwb25zb3JzaGlwLXBvbGljaWVzXCIsXG5cdFx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJUaGUgU3BvbnNvcnNoaXAgUG9saWN5IG9iamVjdFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvaW5mcmEvcGxhdGZvcm0vYXBpL3Nwb25zb3JzaGlwLXBvbGljaWVzL29iamVjdFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJSZXRyaWV2ZSBhIHNwb25zb3JzaGlwIHBvbGljeVwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvaW5mcmEvcGxhdGZvcm0vYXBpL3Nwb25zb3JzaGlwLXBvbGljaWVzL3JldHJpZXZlXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkxpc3QgYWxsIHNwb25zb3JzaGlwIHBvbGljaWVzXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybS9hcGkvc3BvbnNvcnNoaXAtcG9saWNpZXMvbGlzdFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJDcmVhdGUgYSBzcG9uc29yc2hpcCBwb2xpY3lcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL2luZnJhL3BsYXRmb3JtL2FwaS9zcG9uc29yc2hpcC1wb2xpY2llcy9jcmVhdGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiVXBkYXRlIGEgc3BvbnNvcnNoaXAgcG9saWN5XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybS9hcGkvc3BvbnNvcnNoaXAtcG9saWNpZXMvdXBkYXRlXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbl1cblxuZXhwb3J0IGNvbnN0IGJ1bmRsZXJTaWRlYmFyID0gW1xuXHR7XG5cdFx0dGV4dDogXCJPdmVydmlld1wiLFxuXHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXJcIixcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiSG93IHRvIHVzZSB0aGUgYnVuZGxlclwiLFxuXHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvdXNhZ2VcIixcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiU2VsZiBob3N0IGd1aWRlXCIsXG5cdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9zZWxmLWhvc3RcIixcblx0fSxcblx0eyB0ZXh0OiBcIkZBUXNcIiwgbGluazogXCIvaW5mcmEvYnVuZGxlci9mYXFzXCIgfSxcblx0e1xuXHRcdHRleHQ6IFwiQ29tcHJlc3Npb25cIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkhvdyB0byBjcmVhdGUgeW91ciBvd24gaW5mbGF0b3IgY29udHJhY3QgYW5kIHN1Ym1pdCBjb21wcmVzc2VkIHVzZXIgb3BlcmF0aW9uc1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2NvbXByZXNzaW9uXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkNvbnRyYWN0cyBSZWZlcmVuY2VcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9jb21wcmVzc2lvbi9yZWZlcmVuY2VcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiRW5kcG9pbnRzXCIsXG5cdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcImV0aF9zZW5kVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VuZHBvaW50cy9ldGhfc2VuZFVzZXJPcGVyYXRpb25cIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiZXRoX2VzdGltYXRlVXNlck9wZXJhdGlvbkdhc1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VuZHBvaW50cy9ldGhfZXN0aW1hdGVVc2VyT3BlcmF0aW9uR2FzXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcImV0aF9nZXRVc2VyT3BlcmF0aW9uUmVjZWlwdFwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VuZHBvaW50cy9ldGhfZ2V0VXNlck9wZXJhdGlvblJlY2VpcHRcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiZXRoX2dldFVzZXJPcGVyYXRpb25CeUhhc2hcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbmRwb2ludHMvZXRoX2dldFVzZXJPcGVyYXRpb25CeUhhc2hcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiZXRoX3N1cHBvcnRlZEVudHJ5UG9pbnRzXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW5kcG9pbnRzL2V0aF9zdXBwb3J0ZWRFbnRyeVBvaW50c1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJwaW1saWNvX3NlbmRDb21wcmVzc2VkVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VuZHBvaW50cy9waW1saWNvX3NlbmRDb21wcmVzc2VkVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJwaW1saWNvX2dldFVzZXJPcGVyYXRpb25HYXNQcmljZVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VuZHBvaW50cy9waW1saWNvX2dldFVzZXJPcGVyYXRpb25HYXNQcmljZVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJwaW1saWNvX2dldFVzZXJPcGVyYXRpb25TdGF0dXNcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbmRwb2ludHMvcGltbGljb19nZXRVc2VyT3BlcmF0aW9uU3RhdHVzXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkJ1bmRsZXIgRXJyb3JzXCIsXG5cdFx0Y29sbGFwc2VkOiB0cnVlLFxuXHRcdGl0ZW1zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiSW52YWxpZCAnYXBpa2V5JyBxdWVyeSBwYXJhbWV0ZXJcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9idW5kbGVyLWVycm9ycy9pbnZhbGlkLWFwaS1rZXlcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQ2hhaW4gaXMgbm90IHN1cHBvcnRlZFwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2J1bmRsZXItZXJyb3JzL2NoYWluLW5vdC1zdXBwb3J0ZWRcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiVmFsaWRhdGlvbiBFcnJvcjogSW52YWxpZCBEaXNjcmltaW5hdG9yIFZhbHVlXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvYnVuZGxlci1lcnJvcnMvaW52YWxpZC1kaXNjcmltaW5hdG9yLXZhbHVlXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlVua25vd24gZXJyb3IgZnJvbSBhbHRvIGJ1bmRsZXJcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9idW5kbGVyLWVycm9ycy91bmtub3duLWVycm9yXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkVudHJ5UG9pbnQgRXJyb3JzXCIsXG5cdFx0Y29sbGFwc2VkOiB0cnVlLFxuXHRcdGl0ZW1zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUExMCBzZW5kZXIgYWxyZWFkeSBjb25zdHJ1Y3RlZFwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMTBcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUExMyBpbml0Q29kZSBmYWlsZWQgb3IgT09HXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWExM1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTE0IGluaXRDb2RlIG11c3QgcmV0dXJuIHNlbmRlclwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMTRcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUExNSBpbml0Q29kZSBtdXN0IGNyZWF0ZSBzZW5kZXJcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbnRyeXBvaW50LWVycm9ycy9hYTE1XCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBMjAgYWNjb3VudCBub3QgZGVwbG95ZWRcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbnRyeXBvaW50LWVycm9ycy9hYTIwXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBMjEgZGlkbid0IHBheSBwcmVmdW5kXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWEyMVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTIyIGV4cGlyZWQgb3Igbm90IGR1ZVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMjJcIixcblx0XHRcdH0sXG5cdFx0XHR7IHRleHQ6IFwiQUEyMyByZXZlcnRlZFwiLCBsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMjNcIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBMjQgc2lnbmF0dXJlIGVycm9yXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWEyNFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTI1IGludmFsaWQgYWNjb3VudCBub25jZVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMjVcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUEzMCBwYXltYXN0ZXIgbm90IGRlcGxveWVkXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWEzMFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTMxIHBheW1hc3RlciBkZXBvc2l0IHRvbyBsb3dcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbnRyeXBvaW50LWVycm9ycy9hYTMxXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBMzIgcGF5bWFzdGVyIGV4cGlyZWQgb3Igbm90IGR1ZVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMzJcIixcblx0XHRcdH0sXG5cdFx0XHR7IHRleHQ6IFwiQUEzMyByZXZlcnRlZFwiLCBsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhMzNcIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBMzQgc2lnbmF0dXJlIGVycm9yXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWEzNFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTQwIG92ZXIgdmVyaWZpY2F0aW9uR2FzTGltaXRcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbnRyeXBvaW50LWVycm9ycy9hYTQwXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBNDEgdG9vIGxpdHRsZSB2ZXJpZmljYXRpb25HYXNcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbnRyeXBvaW50LWVycm9ycy9hYTQxXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBNTAgcG9zdE9wIHJldmVydGVkXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWE1MFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTUxIHByZWZ1bmQgYmVsb3cgYWN0dWFsR2FzQ29zdFwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhNTFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUE5MCBpbnZhbGlkIGJlbmVmaWNpYXJ5XCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWE5MFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTkxIGZhaWxlZCBzZW5kIHRvIGJlbmVmaWNpYXJ5XCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWE5MVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTkyIGludGVybmFsIGNhbGwgb25seVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhOTJcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUE5MyBpbnZhbGlkIHBheW1hc3RlckFuZERhdGFcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvYnVuZGxlci9lbnRyeXBvaW50LWVycm9ycy9hYTkzXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkFBOTQgZ2FzIHZhbHVlcyBvdmVyZmxvd1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhOTRcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQUE5NSBvdXQgb2YgZ2FzXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXIvZW50cnlwb2ludC1lcnJvcnMvYWE5NVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBQTk2IGludmFsaWQgYWdncmVnYXRvclwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9idW5kbGVyL2VudHJ5cG9pbnQtZXJyb3JzL2FhOTZcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbl1cblxuZXhwb3J0IGNvbnN0IHBheW1hc3RlclNpZGViYXIgPSBbXG5cdHtcblx0XHR0ZXh0OiBcIk92ZXJ2aWV3XCIsXG5cdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyXCIsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlZlcmlmeWluZyBQYXltYXN0ZXJcIixcblx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvdmVyaWZ5aW5nLXBheW1hc3RlclwiLFxuXHRcdGl0ZW1zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSB0aGUgVmVyaWZ5aW5nIFBheW1hc3RlclwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvdmVyaWZ5aW5nLXBheW1hc3Rlci91c2FnZVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJFbmRwb2ludHNcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyL3ZlcmlmeWluZy1wYXltYXN0ZXIvZW5kcG9pbnRzXCIsXG5cdFx0XHR9LFxuXHRcdFx0eyB0ZXh0OiBcIkZBUXNcIiwgbGluazogXCIvaW5mcmEvcGF5bWFzdGVyL3ZlcmlmeWluZy1wYXltYXN0ZXIvZmFxc1wiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQ29tbW9uIEVycm9yc1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvdmVyaWZ5aW5nLXBheW1hc3Rlci9jb21tb24tZXJyb3JzXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkVSQy0yMCBQYXltYXN0ZXJcIixcblx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvZXJjMjAtcGF5bWFzdGVyXCIsXG5cdFx0aXRlbXM6IFtcblx0XHRcdHsgdGV4dDogXCJPdmVydmlld1wiLCBsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvZXJjMjAtcGF5bWFzdGVyXCIgfSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIHRoZSBFUkMtMjAgUGF5bWFzdGVyXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL3BheW1hc3Rlci9lcmMyMC1wYXltYXN0ZXIvaG93LXRvL3VzZS1wYXltYXN0ZXJcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiRXN0aW1hdGluZyBjb3N0cyB3aXRoIEVSQy0yMCBQYXltYXN0ZXJcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyL2VyYzIwLXBheW1hc3Rlci9ob3ctdG8vY2FsY3VsYXRlLWNvc3RzXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkVuZHBvaW50c1wiLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwicGltbGljb19nZXRUb2tlblF1b3Rlc1wiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyL2VyYzIwLXBheW1hc3Rlci9lbmRwb2ludHMvcGltbGljb19nZXRUb2tlblF1b3Rlc1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJwbV9nZXRQYXltYXN0ZXJEYXRhXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvZXJjMjAtcGF5bWFzdGVyL2VuZHBvaW50cy9wbV9nZXRQYXltYXN0ZXJEYXRhXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInBtX2dldFBheW1hc3RlclN0dWJEYXRhXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvZXJjMjAtcGF5bWFzdGVyL2VuZHBvaW50cy9wbV9nZXRQYXltYXN0ZXJTdHViRGF0YVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJwbV9zcG9uc29yVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyL2VyYzIwLXBheW1hc3Rlci9lbmRwb2ludHMvcG1fc3BvbnNvclVzZXJPcGVyYXRpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHsgdGV4dDogXCJBcmNoaXRlY3R1cmVcIiwgbGluazogXCIvaW5mcmEvcGF5bWFzdGVyL2VyYzIwLXBheW1hc3Rlci9hcmNoaXRlY3R1cmVcIiB9LFxuXHRcdFx0eyB0ZXh0OiBcIkNvbnRyYWN0IEFkZHJlc3Nlc1wiLCBsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvZXJjMjAtcGF5bWFzdGVyL2NvbnRyYWN0LWFkZHJlc3Nlc1wiIH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiRVJDLTIwIFBheW1hc3RlciAocGVybWlzc2lvbmxlc3MpXCIsXG5cdFx0Y29sbGFwc2VkOiB0cnVlLFxuXHRcdGxpbms6IFwiL2luZnJhL3BheW1hc3Rlci9lcmMyMC1wYXltYXN0ZXItcGVybWlzc2lvbmxlc3NcIixcblx0XHRpdGVtczogW1xuXHRcdFx0eyB0ZXh0OiBcIk92ZXJ2aWV3XCIsIGxpbms6IFwiL2luZnJhL3BheW1hc3Rlci9lcmMyMC1wYXltYXN0ZXItcGVybWlzc2lvbmxlc3NcIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkNvbnRyYWN0IEFkZHJlc3Nlc1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wYXltYXN0ZXIvZXJjMjAtcGF5bWFzdGVyLXBlcm1pc3Npb25sZXNzL2NvbnRyYWN0LWFkZHJlc3Nlc1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBcmNoaXRlY3R1cmVcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyL2VyYzIwLXBheW1hc3Rlci1wZXJtaXNzaW9ubGVzcy9hcmNoaXRlY3R1cmVcIixcblx0XHRcdH0sXG5cdFx0XHR7IHRleHQ6IFwiR3VpZGVzXCIsIGxpbms6IFwiL2luZnJhL3BheW1hc3Rlci9lcmMyMC1wYXltYXN0ZXItcGVybWlzc2lvbmxlc3MvZ3VpZGVzXCIgfSxcblx0XHRcdHsgdGV4dDogXCJGQVFzXCIsIGxpbms6IFwiL2luZnJhL3BheW1hc3Rlci9lcmMyMC1wYXltYXN0ZXItcGVybWlzc2lvbmxlc3MvZmFxc1wiIH0sXG5cdFx0XSxcblx0fSxcbl1cblxuLypcbiAgICAgICAgICB7IHRleHQ6IFwiZGVwbG95Q29udHJhY3RcIiwgbGluazogXCIvcGVybWlzc2lvbmxlc3MvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9kZXBsb3lDb250cmFjdFwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcInNlbmRUcmFuc2FjdGlvblwiLCBsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3NlbmRUcmFuc2FjdGlvblwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcInNlbmRUcmFuc2FjdGlvbnNcIiwgbGluazogXCIvcGVybWlzc2lvbmxlc3MvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9zZW5kVHJhbnNhY3Rpb25zXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwic2lnbk1lc3NhZ2VcIiwgbGluazogXCIvcGVybWlzc2lvbmxlc3MvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9zaWduTWVzc2FnZVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcInNpZ25UeXBlZERhdGFcIiwgbGluazogXCIvcGVybWlzc2lvbmxlc3MvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9zaWduVHlwZWREYXRhXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwid3JpdGVDb250cmFjdFwiLCBsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3dyaXRlQ29udHJhY3RcIiB9LFxuXG4qL1xuXG5leHBvcnQgY29uc3QgY29uY2VwdHVhbFNpZGViYXIgPSBbXG5cdHtcblx0XHR0ZXh0OiBcIk92ZXJ2aWV3XCIsXG5cdFx0bGluazogXCIvY29uY2VwdHVhbFwiLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJBY2NvdW50IEFic3RyYWN0aW9uXCIsXG5cdFx0bGluazogXCIvY29uY2VwdHVhbC9hY2NvdW50LWFic3RyYWN0aW9uXCIsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkVSQy00MzM3XCIsXG5cdFx0bGluazogXCIvY29uY2VwdHVhbC9lcmM0MzM3XCIsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkVSQy03NTc5XCIsXG5cdFx0bGluazogXCIvY29uY2VwdHVhbC9lcmM3NTc5XCIsXG5cdH0sXG5dXG5cbmV4cG9ydCBjb25zdCBwZXJtaXNzaW9ubGVzc1NpZGViYXIgPSBbXG5cdHtcblx0XHR0ZXh0OiBcIk92ZXJ2aWV3XCIsXG5cdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZVwiLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJXaHkgcGVybWlzc2lvbmxlc3MuanNcIixcblx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3doeVwiLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJGQVFzXCIsXG5cdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9mYXFzXCIsXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlR1dG9yaWFsc1wiLFxuXHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvdHV0b3JpYWxcIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIjEuIFNlbmQgeW91ciBmaXJzdCBnYXNsZXNzIHRyYW5zYWN0aW9uXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvdHV0b3JpYWwvdHV0b3JpYWwtMVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCIyLiBTdWJtaXQgYSB1c2VyIG9wZXJhdGlvbiB3aXRoIGFuIEVSQy0yMCBQYXltYXN0ZXJcIixcblx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS90dXRvcmlhbC90dXRvcmlhbC0yXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkhvdy10byBHdWlkZXNcIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlVwZGF0ZSB5b3VyIGV4aXN0aW5nIGFwcCB0byBzcG9uc29yIGdhcyBmZWVzIGZvciBzbWFydCBhY2NvdW50IHVzZXJzXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL2RhcHAtZ2FzLXNwb25zb3JzaGlwXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkhvdyB0byBzZW5kIG11bHRpcGxlIHVzZXIgb3BlcmF0aW9ucyBpbiBwYXJhbGxlbFwiLFxuXHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9wYXJhbGxlbC10cmFuc2FjdGlvbnNcIixcblx0XHRcdH0sXG5cdFx0XHQvLyB7XG5cdFx0XHQvLyBcdHRleHQ6IFwiRXJyb3IgSGFuZGxpbmdcIixcblx0XHRcdC8vIFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vZXJyb3ItaGFuZGxpbmdcIixcblx0XHRcdC8vIH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiTWlncmF0aW9uIEd1aWRlXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL21pZ3JhdGlvbi1ndWlkZVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJMb2NhbCBUZXN0aW5nXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL2xvY2FsLXRlc3RpbmdcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQWNjb3VudHNcIixcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkVudHJ5UG9pbnQgc3VwcG9ydFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vYWNjb3VudHMvc3VwcG9ydFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgU2FmZSBhY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9hY2NvdW50cy91c2Utc2FmZS1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBLZXJuZWwgYWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vYWNjb3VudHMvdXNlLWtlcm5lbC1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBTaW1wbGVBY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9hY2NvdW50cy91c2Utc2ltcGxlLWFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIEJpY29ub215IGFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL2FjY291bnRzL3VzZS1iaWNvbm9teS1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBMaWdodEFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL2FjY291bnRzL3VzZS1saWdodC1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBUcnVzdCBXYWxsZXQgYWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vYWNjb3VudHMvdXNlLXRydXN0d2FsbGV0LWFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIENvaW5iYXNlIFdhbGxldCBhY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9hY2NvdW50cy91c2UtY29pbmJhc2UtYWNjb3VudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGFuIEVSQy03NTc5IGNvbXBhdGlibGUgc21hcnQgYWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vYWNjb3VudHMvdXNlLWVyYzc1NzktYWNjb3VudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlBheW1hc3RlcnNcIixcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBjdXN0b20gUGF5bWFzdGVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9wYXltYXN0ZXJzL3VzZS1jdXN0b20tcGF5bWFzdGVyXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byBjb25kaXRpb25hbGx5IHNwb25zb3IgYSB1c2VyIG9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vcGF5bWFzdGVycy9jb25kaXRpb25hbC1zcG9uc29yaW5nXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiU2lnbmVyc1wiLFxuXHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9zaWduZXJzXCIsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgRHluYW1pYyBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL3NpZ25lcnMvZHluYW1pY1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgUHJpdnkgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9zaWduZXJzL3ByaXZ5XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBNYWdpYyBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL3NpZ25lcnMvbWFnaWNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIFBhc3Nwb3J0IHNpZ25lclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vc2lnbmVycy9wYXNzcG9ydFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgTGl0IFByb3RvY29sIHNpZ25lclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vc2lnbmVycy9saXQtcHJvdG9jb2xcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIFdlYjNBdXRoIHNpZ25lclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vc2lnbmVycy93ZWIzYXV0aFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgVHVybmtleSBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL3NpZ25lcnMvdHVybmtleVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgRmlyZWJsb2NrcyBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL3NpZ25lcnMvZmlyZWJsb2Nrc1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgQ2Fwc3VsZSBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL3NpZ25lcnMvY2Fwc3VsZVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgREZOUyBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvaG93LXRvL3NpZ25lcnMvZGZuc1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGFuIEFyY2FuYSBBdXRoIHNpZ25lclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9ob3ctdG8vc2lnbmVycy9hcmNhbmFcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIFBhcnRpY2xlIE5ldHdvcmsgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL2hvdy10by9zaWduZXJzL3BhcnRpY2xlLW5ldHdvcmtcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJSZWZlcmVuY2VcIixcblx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZVwiLFxuXHRcdGl0ZW1zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQ2xpZW50c1wiLFxuXHRcdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiUGltbGljbyBDbGllbnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL2NsaWVudHMvcGltbGljb0NsaWVudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJTbWFydCBBY2NvdW50IENsaWVudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvY2xpZW50cy9zbWFydEFjY291bnRDbGllbnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBY2NvdW50c1wiLFxuXHRcdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwidG9TaW1wbGVTbWFydEFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL2FjY291bnRzL3RvU2ltcGxlU21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInRvU2FmZVNtYXJ0QWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvYWNjb3VudHMvdG9TYWZlU21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInRvRWNkc2FLZXJuZWxTbWFydEFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL2FjY291bnRzL3RvRWNkc2FLZXJuZWxTbWFydEFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwidG9MaWdodFNtYXJ0QWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvYWNjb3VudHMvdG9MaWdodFNtYXJ0QWNjb3VudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJ0b1RydXN0U21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9hY2NvdW50cy90b1RydXN0U21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiU21hcnQgQWNjb3VudCBBY3Rpb25zXCIsXG5cdFx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJzZW5kVHJhbnNhY3Rpb25cIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9zZW5kVHJhbnNhY3Rpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwid3JpdGVDb250cmFjdFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3dyaXRlQ29udHJhY3RcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZXN0aW1hdGVVc2VyT3BlcmF0aW9uR2FzXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9zbWFydC1hY2NvdW50LWFjdGlvbnMvZXN0aW1hdGVVc2VyT3BlcmF0aW9uR2FzXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldENoYWluSWRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9nZXRDaGFpbklkXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFN1cHBvcnRlZEVudHJ5UG9pbnRzXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9zbWFydC1hY2NvdW50LWFjdGlvbnMvZ2V0U3VwcG9ydGVkRW50cnlQb2ludHNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0VXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL2dldFVzZXJPcGVyYXRpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0VXNlck9wZXJhdGlvblJlY2VpcHRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9nZXRVc2VyT3BlcmF0aW9uUmVjZWlwdFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJwcmVwYXJlVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3ByZXBhcmVVc2VyT3BlcmF0aW9uXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNlbmRVc2VyT3BlcmF0aW9uXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9zbWFydC1hY2NvdW50LWFjdGlvbnMvc2VuZFVzZXJPcGVyYXRpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwid2FpdEZvclVzZXJPcGVyYXRpb25SZWNlaXB0XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9zbWFydC1hY2NvdW50LWFjdGlvbnMvd2FpdEZvclVzZXJPcGVyYXRpb25SZWNlaXB0XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiUGltbGljbyBBY3Rpb25zXCIsXG5cdFx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJnZXRQYXltYXN0ZXJEYXRhXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9waW1saWNvLWFjdGlvbnMvZ2V0UGF5bWFzdGVyRGF0YVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJnZXRQYXltYXN0ZXJTdHViRGF0YVwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvcGltbGljby1hY3Rpb25zL2dldFBheW1hc3RlclN0dWJEYXRhXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNlbmRDb21wcmVzc2VkVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvcGltbGljby1hY3Rpb25zL3NlbmRDb21wcmVzc2VkVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJnZXRVc2VyT3BlcmF0aW9uR2FzUHJpY2VcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL3BpbWxpY28tYWN0aW9ucy9nZXRVc2VyT3BlcmF0aW9uR2FzUHJpY2VcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0VXNlck9wZXJhdGlvblN0YXR1c1wiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvcGltbGljby1hY3Rpb25zL2dldFVzZXJPcGVyYXRpb25TdGF0dXNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwidmFsaWRhdGVTcG9uc29yc2hpcFBvbGljaWVzXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9waW1saWNvLWFjdGlvbnMvdmFsaWRhdGVTcG9uc29yc2hpcFBvbGljaWVzXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiUHVibGljIEFjdGlvbnNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFNlbmRlckFkZHJlc3NcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL3B1YmxpYy1hY3Rpb25zL2dldFNlbmRlckFkZHJlc3NcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0QWNjb3VudE5vbmNlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9wdWJsaWMtYWN0aW9ucy9nZXRBY2NvdW50Tm9uY2VcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJFUkMtNzU3OSBBY3Rpb25zXCIsXG5cdFx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJhY2NvdW50SWRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmUvcmVmZXJlbmNlL2VyYzc1NzktYWN0aW9ucy9hY2NvdW50SWRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiaW5zdGFsbE1vZHVsZVwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvZXJjNzU3OS1hY3Rpb25zL2luc3RhbGxNb2R1bGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwidW5pbnN0YWxsTW9kdWxlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9lcmM3NTc5LWFjdGlvbnMvdW5pbnN0YWxsTW9kdWxlXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImlzTW9kdWxlSW5zdGFsbGVkXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9lcmM3NTc5LWFjdGlvbnMvaXNNb2R1bGVJbnN0YWxsZWRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic3VwcG9ydHNFeGVjdXRpb25Nb2RlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9lcmM3NTc5LWFjdGlvbnMvc3VwcG9ydHNFeGVjdXRpb25Nb2RlXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInN1cHBvcnRzTW9kdWxlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3JlZmVyZW5jZS9lcmM3NTc5LWFjdGlvbnMvc3VwcG9ydHNNb2R1bGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJVdGlsaXRpZXNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFJlcXVpcmVkUHJlZnVuZFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvY29yZS9yZWZlcmVuY2UvdXRpbHMvZ2V0UmVxdWlyZWRQcmVmdW5kXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwicGVybWlzc2lvbmxlc3MgMC4xLnhcIixcblx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlL3YwXzFcIixcblx0fSxcbl1cblxuZXhwb3J0IGNvbnN0IHBlcm1pc3Npb25sZXNzV2FnbWlTaWRlYmFyID0gW1xuXHR7XG5cdFx0dGV4dDogXCJPdmVydmlld1wiLFxuXHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3dhZ21pXCIsXG5cdH0sXG5dXG5cbmV4cG9ydCBjb25zdCBwZXJtaXNzaW9ubGVzc1NpZGViYXIwUG9pbnQxID0gW1xuXHR7XG5cdFx0dGV4dDogXCJPdmVydmlld1wiLFxuXHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzFcIixcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiV2h5IHBlcm1pc3Npb25sZXNzLmpzXCIsXG5cdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS93aHlcIixcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiRkFRc1wiLFxuXHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvZmFxc1wiLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJUdXRvcmlhbHNcIixcblx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3R1dG9yaWFsXCIsXG5cdFx0aXRlbXM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCIxLiBTZW5kIHlvdXIgZmlyc3QgZ2FzbGVzcyB0cmFuc2FjdGlvblwiLFxuXHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3R1dG9yaWFsL3R1dG9yaWFsLTFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiMi4gU3VibWl0IGEgdXNlciBvcGVyYXRpb24gd2l0aCBhIFZlcmlmeWluZyBQYXltYXN0ZXJcIixcblx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS90dXRvcmlhbC90dXRvcmlhbC0yXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkhvdy10byBHdWlkZXNcIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlVwZGF0ZSB5b3VyIGV4aXN0aW5nIGFwcCB0byBzcG9uc29yIGdhcyBmZWVzIGZvciBzbWFydCBhY2NvdW50IHVzZXJzXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL2RhcHAtZ2FzLXNwb25zb3JzaGlwXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkhvdyB0byBzZW5kIG11bHRpcGxlIHVzZXIgb3BlcmF0aW9ucyBpbiBwYXJhbGxlbFwiLFxuXHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9wYXJhbGxlbC10cmFuc2FjdGlvbnNcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiRXJyb3IgSGFuZGxpbmdcIixcblx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vZXJyb3ItaGFuZGxpbmdcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiTWlncmF0aW9uIEd1aWRlXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL21pZ3JhdGlvbi1ndWlkZVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJMb2NhbCBUZXN0aW5nXCIsXG5cdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL2xvY2FsLXRlc3RpbmdcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiQWNjb3VudHNcIixcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkVudHJ5UG9pbnQgc3VwcG9ydFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vYWNjb3VudHMvc3VwcG9ydFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgU2FmZSBhY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9hY2NvdW50cy91c2Utc2FmZS1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBLZXJuZWwgYWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vYWNjb3VudHMvdXNlLWtlcm5lbC1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBTaW1wbGVBY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9hY2NvdW50cy91c2Utc2ltcGxlLWFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIEJpY29ub215IGFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL2FjY291bnRzL3VzZS1iaWNvbm9teS1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBMaWdodEFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL2FjY291bnRzL3VzZS1saWdodC1hY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBUcnVzdCBXYWxsZXQgYWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vYWNjb3VudHMvdXNlLXRydXN0d2FsbGV0LWFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhbiBFUkMtNzU3OSBjb21wYXRpYmxlIHNtYXJ0IGFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL2FjY291bnRzL3VzZS1lcmM3NTc5LWFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJQYXltYXN0ZXJzXCIsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgY3VzdG9tIFBheW1hc3RlclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vcGF5bWFzdGVycy91c2UtY3VzdG9tLXBheW1hc3RlclwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gY29uZGl0aW9uYWxseSBzcG9uc29yIGEgdXNlciBvcGVyYXRpb25cIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL3BheW1hc3RlcnMvY29uZGl0aW9uYWwtc3BvbnNvcmluZ1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlNpZ25lcnNcIixcblx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vc2lnbmVyc1wiLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIER5bmFtaWMgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9zaWduZXJzL2R5bmFtaWNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIFByaXZ5IHNpZ25lclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vc2lnbmVycy9wcml2eVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJIb3cgdG8gdXNlIGEgTWFnaWMgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9zaWduZXJzL21hZ2ljXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBQYXNzcG9ydCBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL3NpZ25lcnMvcGFzc3BvcnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIExpdCBQcm90b2NvbCBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL3NpZ25lcnMvbGl0LXByb3RvY29sXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBXZWIzQXV0aCBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL3NpZ25lcnMvd2ViM2F1dGhcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIFR1cm5rZXkgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9zaWduZXJzL3R1cm5rZXlcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIEZpcmVibG9ja3Mgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9zaWduZXJzL2ZpcmVibG9ja3NcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIENhcHN1bGUgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9zaWduZXJzL2NhcHN1bGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhIERGTlMgc2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL2hvdy10by9zaWduZXJzL2RmbnNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiSG93IHRvIHVzZSBhbiBBcmNhbmEgQXV0aCBzaWduZXJcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvaG93LXRvL3NpZ25lcnMvYXJjYW5hXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkhvdyB0byB1c2UgYSBQYXJ0aWNsZSBOZXR3b3JrIHNpZ25lclwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9ob3ctdG8vc2lnbmVycy9wYXJ0aWNsZS1uZXR3b3JrXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiUmVmZXJlbmNlXCIsXG5cdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2VcIixcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkNsaWVudHNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkJ1bmRsZXIgQ2xpZW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9jbGllbnRzL2J1bmRsZXJDbGllbnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiUGltbGljbyBCdW5kbGVyIENsaWVudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvY2xpZW50cy9waW1saWNvQnVuZGxlckNsaWVudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJQaW1saWNvIFBheW1hc3RlciBDbGllbnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2NsaWVudHMvcGltbGljb1BheW1hc3RlckNsaWVudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJTbWFydCBBY2NvdW50IENsaWVudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvY2xpZW50cy9zbWFydEFjY291bnRDbGllbnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJBY2NvdW50c1wiLFxuXHRcdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic2lnbmVyVG9TaW1wbGVTbWFydEFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2FjY291bnRzL3NpZ25lclRvU2ltcGxlU21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNpZ25lclRvU2FmZVNtYXJ0QWNjb3VudFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvYWNjb3VudHMvc2lnbmVyVG9TYWZlU21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNpZ25lclRvS2VybmVsU21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9hY2NvdW50cy9zaWduZXJUb0tlcm5lbFNtYXJ0QWNjb3VudFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJzaWduZXJUb0xpZ2h0U21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9hY2NvdW50cy9zaWduZXJUb0xpZ2h0U21hcnRBY2NvdW50XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNpZ25lclRvVHJ1c3RTbWFydEFjY291bnRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2FjY291bnRzL3NpZ25lclRvVHJ1c3RTbWFydEFjY291bnRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJCdW5kbGVyIEFjdGlvbnNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNlbmRVc2VyT3BlcmF0aW9uXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9idW5kbGVyLWFjdGlvbnMvc2VuZFVzZXJPcGVyYXRpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZXN0aW1hdGVVc2VyT3BlcmF0aW9uR2FzXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9idW5kbGVyLWFjdGlvbnMvZXN0aW1hdGVVc2VyT3BlcmF0aW9uR2FzXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFVzZXJPcGVyYXRpb25SZWNlaXB0XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9idW5kbGVyLWFjdGlvbnMvZ2V0VXNlck9wZXJhdGlvblJlY2VpcHRcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwid2FpdEZvclVzZXJPcGVyYXRpb25SZWNlaXB0XCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9idW5kbGVyLWFjdGlvbnMvd2FpdEZvclVzZXJPcGVyYXRpb25SZWNlaXB0XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFVzZXJPcGVyYXRpb25CeUhhc2hcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2J1bmRsZXItYWN0aW9ucy9nZXRVc2VyT3BlcmF0aW9uQnlIYXNoXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInN1cHBvcnRlZEVudHJ5UG9pbnRzXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9idW5kbGVyLWFjdGlvbnMvc3VwcG9ydGVkRW50cnlQb2ludHNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJTbWFydCBBY2NvdW50IEFjdGlvbnNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInByZXBhcmVVc2VyT3BlcmF0aW9uUmVxdWVzdFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3ByZXBhcmVVc2VyT3BlcmF0aW9uUmVxdWVzdFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJzZW5kVHJhbnNhY3Rpb25cIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9zZW5kVHJhbnNhY3Rpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic2VuZFRyYW5zYWN0aW9uc1wiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3NlbmRUcmFuc2FjdGlvbnNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic2VuZFVzZXJPcGVyYXRpb25cIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy9zZW5kVXNlck9wZXJhdGlvblwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJkZXBsb3lDb250cmFjdFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL2RlcGxveUNvbnRyYWN0XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIndyaXRlQ29udHJhY3RcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL3NtYXJ0LWFjY291bnQtYWN0aW9ucy93cml0ZUNvbnRyYWN0XCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNpZ25NZXNzYWdlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9zbWFydC1hY2NvdW50LWFjdGlvbnMvc2lnbk1lc3NhZ2VcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic2lnblR5cGVkRGF0YVwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2Uvc21hcnQtYWNjb3VudC1hY3Rpb25zL3NpZ25UeXBlZERhdGFcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJQaW1saWNvIEJ1bmRsZXIgQWN0aW9uc1wiLFxuXHRcdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic2VuZENvbXByZXNzZWRVc2VyT3BlcmF0aW9uXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9waW1saWNvLWJ1bmRsZXItYWN0aW9ucy9zZW5kQ29tcHJlc3NlZFVzZXJPcGVyYXRpb25cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0VXNlck9wZXJhdGlvbkdhc1ByaWNlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9waW1saWNvLWJ1bmRsZXItYWN0aW9ucy9nZXRVc2VyT3BlcmF0aW9uR2FzUHJpY2VcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0VXNlck9wZXJhdGlvblN0YXR1c1wiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvcGltbGljby1idW5kbGVyLWFjdGlvbnMvZ2V0VXNlck9wZXJhdGlvblN0YXR1c1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlBpbWxpY28gUGF5bWFzdGVyIEFjdGlvbnNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNwb25zb3JVc2VyT3BlcmF0aW9uXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9waW1saWNvLXBheW1hc3Rlci1hY3Rpb25zL3Nwb25zb3JVc2VyT3BlcmF0aW9uXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInZhbGlkYXRlU3BvbnNvcnNoaXBQb2xpY2llc1wiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvcGltbGljby1wYXltYXN0ZXItYWN0aW9ucy92YWxpZGF0ZVNwb25zb3JzaGlwUG9saWNpZXNcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJQdWJsaWMgQWN0aW9uc1wiLFxuXHRcdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0U2VuZGVyQWRkcmVzc1wiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvcHVibGljLWFjdGlvbnMvZ2V0U2VuZGVyQWRkcmVzc1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJnZXRBY2NvdW50Tm9uY2VcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL3B1YmxpYy1hY3Rpb25zL2dldEFjY291bnROb25jZVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIkVSQy03NTc5IEFjdGlvbnNcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImFjY291bnRJZFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvZXJjNzU3OS1hY3Rpb25zL2FjY291bnRJZFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJpbnN0YWxsTW9kdWxlXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS9lcmM3NTc5LWFjdGlvbnMvaW5zdGFsbE1vZHVsZVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJ1bmluc3RhbGxNb2R1bGVcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2VyYzc1NzktYWN0aW9ucy91bmluc3RhbGxNb2R1bGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiaXNNb2R1bGVJbnN0YWxsZWRcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2VyYzc1NzktYWN0aW9ucy9pc01vZHVsZUluc3RhbGxlZFwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJzdXBwb3J0c0V4ZWN1dGlvbk1vZGVcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2VyYzc1NzktYWN0aW9ucy9zdXBwb3J0c0V4ZWN1dGlvbk1vZGVcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwic3VwcG9ydHNNb2R1bGVcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2VyYzc1NzktYWN0aW9ucy9zdXBwb3J0c01vZHVsZVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBcIlV0aWxpdGllc1wiLFxuXHRcdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiZ2V0VXNlck9wZXJhdGlvbkhhc2hcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL3V0aWxzL2dldFVzZXJPcGVyYXRpb25IYXNoXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcInNpZ25Vc2VyT3BlcmF0aW9uSGFzaFdpdGhFQ0RTQVwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvdXRpbHMvc2lnblVzZXJPcGVyYXRpb25IYXNoV2l0aEVDRFNBXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFJlcXVpcmVkUHJlZnVuZFwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9yZWZlcmVuY2UvdXRpbHMvZ2V0UmVxdWlyZWRQcmVmdW5kXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcIndhbGxldENsaWVudFRvU21hcnRBY2NvdW50U2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS91dGlscy93YWxsZXRDbGllbnRUb1NtYXJ0QWNjb3VudFNpZ25lclwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJwcm92aWRlclRvU21hcnRBY2NvdW50U2lnbmVyXCIsXG5cdFx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy92MF8xL3JlZmVyZW5jZS91dGlscy9wcm92aWRlclRvU21hcnRBY2NvdW50U2lnbmVyXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiR2xvc3NhcnlcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFt7IHRleHQ6IFwiRXJyb3JzXCIsIGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvcmVmZXJlbmNlL2dsb3NzYXJ5L2Vycm9yc1wiIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJFeHBlcmltZW50YWxcIixcblx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxuXHRcdGl0ZW1zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IFwiRUlQLTc2NzdcIixcblx0XHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBcImdldFBheW1hc3RlckRhdGFcIixcblx0XHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL3YwXzEvZXhwZXJpbWVudGFsL2VpcDc2NzcvZ2V0UGF5bWFzdGVyRGF0YVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogXCJnZXRQYXltYXN0ZXJTdHViRGF0YVwiLFxuXHRcdFx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3MvdjBfMS9leHBlcmltZW50YWwvZWlwNzY3Ny9nZXRQYXltYXN0ZXJTdHViRGF0YVwiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcInBlcm1pc3Npb25sZXNzIDAuMi54XCIsXG5cdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3NcIixcblx0fSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0dGl0bGU6IFwiUGltbGljb1wiLFxuXHRsb2dvVXJsOiB7IGxpZ2h0OiBcIi9waW1saWNvLXB1cnBsZS5zdmdcIiwgZGFyazogXCIvcGltbGljby13aGl0ZS5zdmdcIiB9LFxuXHRpY29uVXJsOiBcIi9mYXZpY29ucy9mYXZpY29uLnN2Z1wiLFxuXHR0aXRsZVRlbXBsYXRlOiBcIiVzIHwgUGltbGljbyBEb2NzXCIsXG5cdGVkaXRMaW5rOiB7XG5cdFx0cGF0dGVybjogXCJodHRwczovL2dpdGh1Yi5jb20vcGltbGljb2xhYnMvZG9jcy9lZGl0L21haW4vZG9jcy9wYWdlcy86cGF0aFwiLFxuXHRcdHRleHQ6IFwiRWRpdCBvbiBHaXRIdWJcIixcblx0fSxcblx0ZGVzY3JpcHRpb246IFwiUGltbGljbyBpcyB0aGUgd29ybGQncyBtb3N0IHBvcHVsYXIgYWNjb3VudCBhYnN0cmFjdGlvbiBpbmZyYXN0cnVjdHVyZSBwbGF0Zm9ybVwiLFxuXHRoZWFkOiAoKSA9PiAoXG5cdFx0PD5cblx0XHRcdDxzY3JpcHQgc3JjPVwiL3Bvc3Rob2cuanNcIiAvPlxuXHRcdDwvPlxuXHQpLFxuXHRiYW5uZXI6IHtcblx0XHRjb250ZW50OiAoXG5cdFx0XHQ8YVxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9waW1saWNvSFEvc3RhdHVzLzE3MjE4OTA2ODExODUzMjEwMThcIlxuXHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRyZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyXCJcblx0XHRcdD5cblx0XHRcdFx0XHVEODNDXHVERjg5IFdlIHJhaXNlZCAkNC4yIG1pbGxpb24gZnJvbSBhMTZ6IHRvIHBvd2VyIEV0aGVyZXVtJ3MgdHJhbnNpdGlvbiB0byBzbWFydCBhY2NvdW50cyEgUmVhZFxuXHRcdFx0XHRtb3JlIFx1MjE5MlxuXHRcdFx0PC9hPlxuXHRcdCksXG5cdFx0ZGlzbWlzc2FibGU6IHRydWUsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMzYzM5M2ZcIixcblx0XHR0ZXh0Q29sb3I6IFwiI2VlZWVmMFwiLFxuXHR9LFxuXHR2aXRlOiB2aXRlQ29uZmlnLFxuXHRzaWRlYmFyOiB7XG5cdFx0XCIvcGVybWlzc2lvbmxlc3NcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy9jb3JlXCIsXG5cdFx0XHRcdHRleHQ6IFwiQ29yZVwiLFxuXHRcdFx0XHRpdGVtczogcGVybWlzc2lvbmxlc3NTaWRlYmFyLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bGluazogXCIvcGVybWlzc2lvbmxlc3Mvd2FnbWlcIixcblx0XHRcdFx0dGV4dDogXCJXYWdtaVwiLFxuXHRcdFx0XHRpdGVtczogcGVybWlzc2lvbmxlc3NXYWdtaVNpZGViYXIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0XCIvcGVybWlzc2lvbmxlc3MvdjBfMVwiOiBwZXJtaXNzaW9ubGVzc1NpZGViYXIwUG9pbnQxLFxuXHRcdFwiL2luZnJhXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJQbGF0Zm9ybVwiLFxuXHRcdFx0XHRsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybVwiLFxuXHRcdFx0XHRpdGVtczogcGxhdGZvcm1TaWRlYmFyLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJCdW5kbGVyXCIsXG5cdFx0XHRcdGxpbms6IFwiL2luZnJhL2J1bmRsZXJcIixcblx0XHRcdFx0aXRlbXM6IGJ1bmRsZXJTaWRlYmFyLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogXCJQYXltYXN0ZXJcIixcblx0XHRcdFx0bGluazogXCIvaW5mcmEvcGF5bWFzdGVyXCIsXG5cdFx0XHRcdGl0ZW1zOiBwYXltYXN0ZXJTaWRlYmFyLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFwiL2NvbmNlcHR1YWxcIjogY29uY2VwdHVhbFNpZGViYXIsXG5cdH0sXG5cdG9nSW1hZ2VVcmw6IHtcblx0XHRcIi9cIjogXCJodHRwczovL2RvY3Mtb2ctcGltbGljby52ZXJjZWwuYXBwL2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb25cIixcblx0fSxcblx0cm9vdERpcjogXCJkb2NzXCIsXG5cdHRoZW1lOiB7XG5cdFx0YWNjZW50Q29sb3I6IHsgbGlnaHQ6IFwiIzcxMTVBQVwiLCBkYXJrOiBcIiNhNjZjYzlcIiB9LFxuXHR9LFxuXHRzb2NpYWxzOiBbXG5cdFx0e1xuXHRcdFx0aWNvbjogXCJnaXRodWJcIixcblx0XHRcdGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3BpbWxpY29sYWJzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpY29uOiBcInRlbGVncmFtXCIsXG5cdFx0XHRsaW5rOiBcImh0dHBzOi8vdC5tZS9waW1saWNvSFFcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGljb246IFwieFwiLFxuXHRcdFx0bGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL3BpbWxpY29IUVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWNvbjogXCJ3YXJwY2FzdFwiLFxuXHRcdFx0bGluazogXCJodHRwczovL3dhcnBjYXN0LmNvbS9+L2NoYW5uZWwvcGltbGljb1wiLFxuXHRcdH0sXG5cdF0sXG5cdHRvcE5hdjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwicGVybWlzc2lvbmxlc3MuanNcIixcblx0XHRcdG1hdGNoOiBcIi9wZXJtaXNzaW9ubGVzc1wiLFxuXHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiY29yZVwiLFxuXHRcdFx0XHRcdGxpbms6IFwiL3Blcm1pc3Npb25sZXNzL2NvcmVcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwid2FnbWlcIixcblx0XHRcdFx0XHRtYXRjaDogXCIvcGVybWlzc2lvbmxlc3Mvd2FnbWlcIixcblx0XHRcdFx0XHRsaW5rOiBcIi9wZXJtaXNzaW9ubGVzcy93YWdtaVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiSW5mcmFzdHJ1Y3R1cmVcIixcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJQbGF0Zm9ybVwiLCBsaW5rOiBcIi9pbmZyYS9wbGF0Zm9ybVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJCdW5kbGVyXCIsIGxpbms6IFwiL2luZnJhL2J1bmRsZXJcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiUGF5bWFzdGVyXCIsIGxpbms6IFwiL2luZnJhL3BheW1hc3RlclwiIH0sXG5cdFx0XHRdLFxuXHRcdFx0bWF0Y2g6IFwiL2luZnJhXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkNvbmNlcHR1YWxcIixcblx0XHRcdGxpbms6IFwiL2NvbmNlcHR1YWxcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiRGFzaGJvYXJkXCIsXG5cdFx0XHRsaW5rOiBcImh0dHBzOi8vZGFzaGJvYXJkLnBpbWxpY28uaW9cIixcblx0XHR9LFxuXHRdLFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2dhcnZpdGtoYXRyaS9kZXYvZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2dhcnZpdGtoYXRyaS9kZXYvZG9jcy91dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZ2Fydml0a2hhdHJpL2Rldi9kb2NzL3V0aWxzLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHZpdGVDb25maWcgPSB7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzJyksXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aXRlQ29uZmlnOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjs7O0FDQTZOLE9BQU8sVUFBVTtBQUEzUSxJQUFNLG1DQUFtQztBQUV6QyxJQUFNLGFBQWE7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxRQUFRO0FBQUEsSUFDdkM7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLGdCQUFROzs7QURzb0NiLG1CQUNDLFdBREQ7QUE3b0NLLElBQU0sa0JBQWtCO0FBQUEsRUFDOUI7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ047QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNOO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNEO0FBRU8sSUFBTSxpQkFBaUI7QUFBQSxFQUM3QjtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQSxFQUFFLE1BQU0sUUFBUSxNQUFNLHNCQUFzQjtBQUFBLEVBQzVDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLE1BQ047QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxNQUNOO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLE1BQ047QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sd0NBQXdDO0FBQUEsTUFDdkU7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSx3Q0FBd0M7QUFBQSxNQUN2RTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRDtBQUVPLElBQU0sbUJBQW1CO0FBQUEsRUFDL0I7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ047QUFBQSxRQUNDLE1BQU07QUFBQSxR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TUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTjtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNOO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsVUFDTjtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUDtBQUNEO0FBRU8sSUFBTSw2QkFBNkI7QUFBQSxFQUN6QztBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFDRDtBQUVPLElBQU0sK0JBQStCO0FBQUEsRUFDM0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNOO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTjtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsVUFDTjtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNOO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsVUFDTjtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNB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
