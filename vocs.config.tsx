import { defineConfig } from "vocs";
import viteConfig from "./utils";

export const platformSidebar = [
  {
    text: "Overview",
    link: "/infra/platform",
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
    ],
  },
];

export const bundlerSidebar = [
  {
    text: "Overview",
    link: "/infra/bundler",
  },
  {
    text: "How to use the bundler",
    link: "/infra/bundler/usage",
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
];

export const paymasterSidebar = [
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
      {
        text: "Contract Addresses",
        link: "/infra/paymaster/erc20-paymaster/contract-addresses",
      },
      {
        text: "Architecture",
        link: "/infra/paymaster/erc20-paymaster/architecture",
      },
      { text: "FAQs", link: "/infra/paymaster/erc20-paymaster/faqs" },
    ],
  },
  {
    text: "ERC-20 Paymaster (legacy)",
    collapsed: true,
    link: "/infra/paymaster/erc20-paymaster-legacy",
    items: [
      { text: "Overview", link: "/infra/paymaster/erc20-paymaster-legacy" },
      {
        text: "Contract Addresses",
        link: "/infra/paymaster/erc20-paymaster-legacy/contract-addresses",
      },
      {
        text: "Architecture",
        link: "/infra/paymaster/erc20-paymaster-legacy/architecture",
      },
      { text: "FAQs", link: "/infra/paymaster/erc20-paymaster-legacy/faqs" },
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
    text: "Tutorials",
    link: "/permissionless/tutorial",
    items: [
      {
        text: "1. Send your first gasless transaction",
        link: "/permissionless/tutorial/tutorial-1",
      },
      {
        text: "2. Submit a user operation with a Verifying Paymaster",
        link: "/permissionless/tutorial/tutorial-2",
      },
      {
        text: "3. Submit a user operation with an ERC-20 Paymaster",
        link: "/permissionless/tutorial/tutorial-3",
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
        text: "Error Handling",
        link: "/permissionless/how-to/error-handling",
      },
      {
        text: "Migration Guide",
        link: "/permissionless/how-to/migration-guide",
      },
      {
        text: "Local Testing",
        link: "/permissionless/how-to/local-testing",
      },
      {
        text: "Accounts",
        items: [
          {
            text: "EntryPoint support",
            link: "/permissionless/how-to/accounts/support",
          },
          {
            text: "How to use a Safe account",
            link: "/permissionless/how-to/accounts/use-safe-account",
          },
          {
            text: "How to use a Kernel account",
            link: "/permissionless/how-to/accounts/use-kernel-account",
          },
          {
            text: "How to use a SimpleAccount",
            link: "/permissionless/how-to/accounts/use-simple-account",
          },
          {
            text: "How to use a Biconomy account",
            link: "/permissionless/how-to/accounts/use-biconomy-account",
          },
          {
            text: "How to use a LightAccount",
            link: "/permissionless/how-to/accounts/use-light-account",
          },
          {
            text: "How to use a Trust Wallet account",
            link: "/permissionless/how-to/accounts/use-trustwallet-account",
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
        ],
      },
      {
        text: "Signers",
        link: "/permissionless/how-to/signers",
        items: [
          {
            text: "How to use a Dynamic signer",
            link: "/permissionless/how-to/signers/dynamic",
          },
          {
            text: "How to use a Privy signer",
            link: "/permissionless/how-to/signers/privy",
          },
          {
            text: "How to use a Magic signer",
            link: "/permissionless/how-to/signers/magic",
          },
          {
            text: "How to use a Passport signer",
            link: "/permissionless/how-to/signers/passport",
          },
          {
            text: "How to use a Lit Protocol signer",
            link: "/permissionless/how-to/signers/lit-protocol",
          },
          {
            text: "How to use a Web3Auth signer",
            link: "/permissionless/how-to/signers/web3auth",
          },
          {
            text: "How to use a Turnkey signer",
            link: "/permissionless/how-to/signers/turnkey",
          },
          {
            text: "How to use a Fireblocks signer",
            link: "/permissionless/how-to/signers/fireblocks",
          },
          {
            text: "How to use a Capsule signer",
            link: "/permissionless/how-to/signers/capsule",
          },
          {
            text: "How to use a DFNS signer",
            link: "/permissionless/how-to/signers/dfns",
          },
          {
            text: "How to use an Arcana Auth signer",
            link: "/permissionless/how-to/signers/arcana",
          },
          {
            text: "How to use a Particle Network signer",
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
        collapsed: false,
        items: [
          {
            text: "Bundler Client",
            link: "/permissionless/reference/clients/bundlerClient",
          },
          {
            text: "Pimlico Bundler Client",
            link: "/permissionless/reference/clients/pimlicoBundlerClient",
          },
          {
            text: "Pimlico Paymaster Client",
            link: "/permissionless/reference/clients/pimlicoPaymasterClient",
          },
          {
            text: "Smart Account Client",
            link: "/permissionless/reference/clients/smartAccountClient",
          },
        ],
      },
      {
        text: "Accounts",
        collapsed: false,
        items: [
          {
            text: "signerToSimpleSmartAccount",
            link: "/permissionless/reference/accounts/signerToSimpleSmartAccount",
          },
          {
            text: "signerToSafeSmartAccount",
            link: "/permissionless/reference/accounts/signerToSafeSmartAccount",
          },
          {
            text: "signerToKernelSmartAccount",
            link: "/permissionless/reference/accounts/signerToKernelSmartAccount",
          },
          {
            text: "signerToLightSmartAccount",
            link: "/permissionless/reference/accounts/signerToLightSmartAccount",
          },
          {
            text: "signerToTrustSmartAccount",
            link: "/permissionless/reference/accounts/signerToTrustSmartAccount",
          },
        ],
      },
      {
        text: "Bundler Actions",
        collapsed: false,
        items: [
          {
            text: "sendUserOperation",
            link: "/permissionless/reference/bundler-actions/sendUserOperation",
          },
          {
            text: "estimateUserOperationGas",
            link: "/permissionless/reference/bundler-actions/estimateUserOperationGas",
          },
          {
            text: "getUserOperationReceipt",
            link: "/permissionless/reference/bundler-actions/getUserOperationReceipt",
          },
          {
            text: "waitForUserOperationReceipt",
            link: "/permissionless/reference/bundler-actions/waitForUserOperationReceipt",
          },
          {
            text: "getUserOperationByHash",
            link: "/permissionless/reference/bundler-actions/getUserOperationByHash",
          },
          {
            text: "supportedEntryPoints",
            link: "/permissionless/reference/bundler-actions/supportedEntryPoints",
          },
        ],
      },
      {
        text: "Smart Account Actions",
        collapsed: false,
        items: [
          {
            text: "prepareUserOperationRequest",
            link: "/permissionless/reference/smart-account-actions/prepareUserOperationRequest",
          },
          {
            text: "sendTransaction",
            link: "/permissionless/reference/smart-account-actions/sendTransaction",
          },
          {
            text: "sendTransactions",
            link: "/permissionless/reference/smart-account-actions/sendTransactions",
          },
          {
            text: "sendUserOperation",
            link: "/permissionless/reference/smart-account-actions/sendUserOperation",
          },
          {
            text: "deployContract",
            link: "/permissionless/reference/smart-account-actions/deployContract",
          },
          {
            text: "writeContract",
            link: "/permissionless/reference/smart-account-actions/writeContract",
          },
          {
            text: "signMessage",
            link: "/permissionless/reference/smart-account-actions/signMessage",
          },
          {
            text: "signTypedData",
            link: "/permissionless/reference/smart-account-actions/signTypedData",
          },
        ],
      },
      {
        text: "Pimlico Bundler Actions",
        collapsed: false,
        items: [
          {
            text: "sendCompressedUserOperation",
            link: "/permissionless/reference/pimlico-bundler-actions/sendCompressedUserOperation",
          },
          {
            text: "getUserOperationGasPrice",
            link: "/permissionless/reference/pimlico-bundler-actions/getUserOperationGasPrice",
          },
          {
            text: "getUserOperationStatus",
            link: "/permissionless/reference/pimlico-bundler-actions/getUserOperationStatus",
          },
        ],
      },
      {
        text: "Pimlico Paymaster Actions",
        collapsed: false,
        items: [
          {
            text: "sponsorUserOperation",
            link: "/permissionless/reference/pimlico-paymaster-actions/sponsorUserOperation",
          },
          {
            text: "validateSponsorshipPolicies",
            link: "/permissionless/reference/pimlico-paymaster-actions/validateSponsorshipPolicies",
          },
        ],
      },
      {
        text: "Public Actions",
        collapsed: false,
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
        collapsed: false,
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
        collapsed: false,
        items: [
          {
            text: "getUserOperationHash",
            link: "/permissionless/reference/utils/getUserOperationHash",
          },
          {
            text: "signUserOperationHashWithECDSA",
            link: "/permissionless/reference/utils/signUserOperationHashWithECDSA",
          },
          {
            text: "getRequiredPrefund",
            link: "/permissionless/reference/utils/getRequiredPrefund",
          },
          {
            text: "walletClientToSmartAccountSigner",
            link: "/permissionless/reference/utils/walletClientToSmartAccountSigner",
          },
          {
            text: "providerToSmartAccountSigner",
            link: "/permissionless/reference/utils/providerToSmartAccountSigner",
          },
        ],
      },
      {
        text: "Glossary",
        collapsed: false,
        items: [
          { text: "Errors", link: "/permissionless/reference/glossary/errors" },
        ],
      },
    ],
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
            link: "/permissionless/experimental/eip7677/getPaymasterData",
          },
          {
            text: "getPaymasterStubData",
            link: "/permissionless/experimental/eip7677/getPaymasterStubData",
          },
        ],
      },
    ],
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
    "/permissionless": permissionlessSidebar,
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
      link: "/permissionless",
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
});
