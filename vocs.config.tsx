import { defineConfig } from 'vocs';
import viteConfig from "./utils";

export const bundlerSidebar = [
  {
    text: 'Overview',
    link: '/bundler',
  },
  {
    text: "Pricing",
    link: "/pricing"
  },
  {
    text: 'How-to Guides',
    items: [
      { text: "How to create your own inflator contract and submit compressed user operations", link: "/bundler/how-to/compress-user-operations" },
      { text: "How to Bundle a User Operation", link: "/bundler/how-to/bundle-a-user-operation" },
      { text: "How to Estimate the Gas Limits for a User Operation", link: "/bundler/how-to/estimate-user-operation-gas-limits" },
    ]
  },
  {
    text: "Reference",
    items: [
      { text: "Supported Chains", link: "/bundler/reference/supported-chains" },
      { text: "FAQs", link: "/bundler/reference/faqs" },
      { text: "Compression Contracts", link: "/bundler/reference/compression" },
      {
        text: "Endpoints",
        collapsed: false,
        items: [
          { text: "eth_sendUserOperation", link: "/bundler/reference/endpoints/eth_sendUserOperation" },
          { text: "eth_estimateUserOperationGas", link: "/bundler/reference/endpoints/eth_estimateUserOperationGas" },
          { text: "eth_getUserOperationReceipt", link: "/bundler/reference/endpoints/eth_getUserOperationReceipt" },
          { text: "eth_getUserOperationByHash", link: "/bundler/reference/endpoints/eth_getUserOperationByHash" },
          { text: "eth_supportedEntryPoints", link: "/bundler/reference/endpoints/eth_supportedEntryPoints" },
          { text: "pimlico_sendCompressedUserOperation", link: "/bundler/reference/endpoints/pimlico_sendCompressedUserOperation" },
          { text: "pimlico_getUserOperationGasPrice", link: "/bundler/reference/endpoints/pimlico_getUserOperationGasPrice" },
          { text: "pimlico_getUserOperationStatus", link: "/bundler/reference/endpoints/pimlico_getUserOperationStatus" },
        ]
      },
      {
        text: "Bundler Errors",
        items: [
          { text: "Invalid 'apikey' query parameter", link: "/bundler/reference/bundler-errors/invalid-api-key" },
          { text: "Chain is not supported", link: "/bundler/reference/bundler-errors/chain-not-supported" },
          { text: "Validation Error: Invalid Discriminator Value", link: "/bundler/reference/bundler-errors/invalid-discriminator-value" },
          { text: "Unknown error from alto bundler", link: "/bundler/reference/bundler-errors/unknown-error" },
        ]
      },
      {
        text: "EntryPoint Errors",
        collapsed: false,
        items: [
          { text: "AA10 sender already constructed", link: "/bundler/reference/entrypoint-errors/aa10" },
          { text: "AA13 initCode failed or OOG", link: "/bundler/reference/entrypoint-errors/aa13" },
          { text: "AA14 initCode must return sender", link: "/bundler/reference/entrypoint-errors/aa14" },
          { text: "AA15 initCode must create sender", link: "/bundler/reference/entrypoint-errors/aa15" },
          { text: "AA20 account not deployed", link: "/bundler/reference/entrypoint-errors/aa20" },
          { text: "AA21 didn't pay prefund", link: "/bundler/reference/entrypoint-errors/aa21" },
          { text: "AA22 expired or not due", link: "/bundler/reference/entrypoint-errors/aa22" },
          { text: "AA23 reverted", link: "/bundler/reference/entrypoint-errors/aa23" },
          { text: "AA24 signature error", link: "/bundler/reference/entrypoint-errors/aa24" },
          { text: "AA25 invalid account nonce", link: "/bundler/reference/entrypoint-errors/aa25" },
          { text: "AA30 paymaster not deployed", link: "/bundler/reference/entrypoint-errors/aa30" },
          { text: "AA31 paymaster deposit too low", link: "/bundler/reference/entrypoint-errors/aa31" },
          { text: "AA32 paymaster expired or not due", link: "/bundler/reference/entrypoint-errors/aa32" },
          { text: "AA33 reverted", link: "/bundler/reference/entrypoint-errors/aa33" },
          { text: "AA34 signature error", link: "/bundler/reference/entrypoint-errors/aa34" },
          { text: "AA40 over verificationGasLimit", link: "/bundler/reference/entrypoint-errors/aa40" },
          { text: "AA41 too little verificationGas", link: "/bundler/reference/entrypoint-errors/aa41" },
          { text: "AA50 postOp reverted", link: "/bundler/reference/entrypoint-errors/aa50" },
          { text: "AA51 prefund below actualGasCost", link: "/bundler/reference/entrypoint-errors/aa51" },
          { text: "AA90 invalid beneficiary", link: "/bundler/reference/entrypoint-errors/aa90" },
          { text: "AA91 failed send to beneficiary", link: "/bundler/reference/entrypoint-errors/aa91" },
          { text: "AA92 internal call only", link: "/bundler/reference/entrypoint-errors/aa92" },
          { text: "AA93 invalid paymasterAndData", link: "/bundler/reference/entrypoint-errors/aa93" },
          { text: "AA94 gas values overflow", link: "/bundler/reference/entrypoint-errors/aa94" },
          { text: "AA95 out of gas", link: "/bundler/reference/entrypoint-errors/aa95" },
          { text: "AA96 invalid aggregator", link: "/bundler/reference/entrypoint-errors/aa96" },
        ]
      },
    ]
  }
]

export const paymasterSidebar = [
  {
    text: 'Overview',
    link: '/paymaster',
  },
  {
    text: "Pricing",
    link: "/pricing"
  },
  {
    text: "Verifying Paymaster",
    link: "/paymaster/verifying-paymaster",
    items: [
      {
        text: "How-to Guides",
        items: [
          { text: "How to sponsor a User Operation", link: "/paymaster/verifying-paymaster/how-to/sponsor-a-user-operation" },
          { text: "How to use sponsorship policies", link: "/paymaster/verifying-paymaster/how-to/use-sponsorship-policies" },
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "Supported Chains", link: "/paymaster/verifying-paymaster/reference/supported-chains" },
          { text: "Endpoints", link: "/paymaster/verifying-paymaster/reference/endpoints" },
          { text: "FAQs", link: "/paymaster/verifying-paymaster/reference/faqs" },
          { text: "Common Errors", link: "/paymaster/verifying-paymaster/reference/common-errors" },
        ]
      }
    ]
  },
  {
    text: "ERC-20 Paymaster",
    link: "/paymaster/erc20-paymaster",
    items: [
      { text: "Overview", link: "/paymaster/erc20-paymaster" },
      { text: "Contract Addresses", link: "/paymaster/erc20-paymaster/contract-addresses" },
      { text: "Architecture", link: "/paymaster/erc20-paymaster/architecture" },
      { text: "FAQs", link: "/paymaster/erc20-paymaster/faqs" },
    ]
  },
  {
    text: "ERC-20 Paymaster (legacy)",
    collapsed: true,
    link: "/paymaster/erc20-paymaster-legacy",
    items: [
      { text: "Overview", link: "/paymaster/erc20-paymaster-legacy" },
      { text: "Contract Addresses", link: "/paymaster/erc20-paymaster-legacy/contract-addresses" },
      { text: "Architecture", link: "/paymaster/erc20-paymaster-legacy/architecture" },
      { text: "FAQs", link: "/paymaster/erc20-paymaster-legacy/faqs" },
    ]
  }
]

/*
          { text: "deployContract", link: "/permissionless/reference/smart-account-actions/deployContract" },
          { text: "sendTransaction", link: "/permissionless/reference/smart-account-actions/sendTransaction" },
          { text: "sendTransactions", link: "/permissionless/reference/smart-account-actions/sendTransactions" },
          { text: "signMessage", link: "/permissionless/reference/smart-account-actions/signMessage" },
          { text: "signTypedData", link: "/permissionless/reference/smart-account-actions/signTypedData" },
          { text: "writeContract", link: "/permissionless/reference/smart-account-actions/writeContract" },

*/

// export const conceptualSidebar = [
//   {
//     text: "Overview",
//     link: "/conceptual"
//   },
//   {
//     text: "Account Abstraction",
//     link: "/conceptual/account-abstraction"
//   },
//   {
//     text: "ERC-4337",
//     link: "/conceptual/erc4337"
//   },
//   {
//     text: "ERC-7579",
//     link: "/conceptual/erc7579"
//   },
// ]

export const permissionlessSidebar = [
  {
    text: 'Overview',
    link: '/permissionless',
  },
  {
    text: "Why permissionless.js",
    link: "/permissionless/why"
  },
  {
    text: "Tutorials",
    link: "/permissionless/tutorial",
    items: [
      { text: "1. Send your first gasless transaction", link: "/permissionless/tutorial/tutorial-1" },
      { text: "2. Submit a user operation with a Verifying Paymaster", link: "/permissionless/tutorial/tutorial-2" },
      { text: "3. Submit a user operation with an ERC-20 Paymaster", link: "/permissionless/tutorial/tutorial-3" },
    ]
  },
  {
    text: "How-to Guides",
    items: [
      {
        text: "Error Handling",
        link: "/permissionless/how-to/error-handling"
      },
      {
        text: "Migration Guide",
        link: "/permissionless/how-to/migration-guide"
      },
      {
        text: "Local Testing",
        link: "/permissionless/how-to/local-testing"
      },
      {
        text: "Accounts",
        items: [
          {
            text: "EntryPoint support",
            link: "/permissionless/how-to/accounts/support"
          },
          { text: "How to use a Safe account", link: "/permissionless/how-to/accounts/use-safe-account" },
          { text: "How to use a Kernel account", link: "/permissionless/how-to/accounts/use-kernel-account" },
          { text: "How to use a SimpleAccount", link: "/permissionless/how-to/accounts/use-simple-account" },
          { text: "How to use a Biconomy account", link: "/permissionless/how-to/accounts/use-biconomy-account" },
          { text: "How to use a LightAccount", link: "/permissionless/how-to/accounts/use-light-account" },
        ]
      },
      {
        text: "Paymasters",
        items: [
          { text: "How to use a custom Paymaster", link: "/permissionless/how-to/paymasters/use-custom-paymaster" },
        ]
      },
      {
        text: "Signers",
        link: "/permissionless/how-to/signers",
        items: [
          { text: "How to use a Dynamic signer", link: "/permissionless/how-to/signers/dynamic" },
          { text: "How to use a Privy signer", link: "/permissionless/how-to/signers/privy" },
          { text: "How to use a Passport signer", link: "/permissionless/how-to/signers/passport" },
          { text: "How to use a Lit Protocol signer", link: "/permissionless/how-to/signers/lit-protocol" },
          { text: "How to use a Magic signer", link: "/permissionless/how-to/signers/magic" },
          { text: "How to use a Web3Auth signer", link: "/permissionless/how-to/signers/web3auth" },
          { text: "How to use a Turnkey signer", link: "/permissionless/how-to/signers/turnkey" },
          { text: "How to use a Fireblocks signer", link: "/permissionless/how-to/signers/fireblocks" },
          { text: "How to use a Capsule signer", link: "/permissionless/how-to/signers/capsule" },
          { text: "How to use a DFNS signer", link: "/permissionless/how-to/signers/dfns" },
          { text: "How to use an Arcana Auth signer", link: "/permissionless/how-to/signers/arcana" },
          { text: "How to use a Particle Network signer", link: "/permissionless/how-to/signers/particle-network" },
        ]
      }
    ]
  },
  {
    text: "Reference",
    link: "/permissionless/reference",
    items: [
      {
        text: "Clients",
        collapsed: false,
        items: [
          { text: "Bundler Client", link: "/permissionless/reference/clients/bundlerClient" },
          { text: "Pimlico Bundler Client", link: "/permissionless/reference/clients/pimlicoBundlerClient" },
          { text: "Pimlico Paymaster Client", link: "/permissionless/reference/clients/pimlicoPaymasterClient" },
          { text: "Smart Account Client", link: "/permissionless/reference/clients/smartAccountClient" },
        ]
      },
      {
        text: "Accounts",
        collapsed: false,
        items: [
          { text: "signerToSimpleSmartAccount", link: "/permissionless/reference/accounts/signerToSimpleSmartAccount" },
          { text: "signerToSafeSmartAccount", link: "/permissionless/reference/accounts/signerToSafeSmartAccount" },
          { text: "signerToKernelSmartAccount", link: "/permissionless/reference/accounts/signerToKernelSmartAccount" },
          { text: "signerToLightSmartAccount", link: "/permissionless/reference/accounts/signerToLightSmartAccount" },
        ]
      },
      {
        text: "Bundler Actions",
        collapsed: false,
        items: [
          { text: "sendUserOperation", link: "/permissionless/reference/bundler-actions/sendUserOperation" },
          { text: "estimateUserOperationGas", link: "/permissionless/reference/bundler-actions/estimateUserOperationGas" },
          { text: "getUserOperationReceipt", link: "/permissionless/reference/bundler-actions/getUserOperationReceipt" },
          { text: "waitForUserOperationReceipt", link: "/permissionless/reference/bundler-actions/waitForUserOperationReceipt" },
          { text: "getUserOperationByHash", link: "/permissionless/reference/bundler-actions/getUserOperationByHash" },
          { text: "supportedEntryPoints", link: "/permissionless/reference/bundler-actions/supportedEntryPoints" },
        ]
      },
      {
        text: "Smart Account Actions",
        collapsed: false,
        items: [
          { text: "prepareUserOperationRequest", link: "/permissionless/reference/smart-account-actions/prepareUserOperationRequest" },
        ]
      },
      {
        text: "Pimlico Bundler Actions",
        collapsed: false,
        items: [
          { text: "sendCompressedUserOperation", link: "/permissionless/reference/pimlico-bundler-actions/sendCompressedUserOperation" },
          { text: "getUserOperationGasPrice", link: "/permissionless/reference/pimlico-bundler-actions/getUserOperationGasPrice" },
          { text: "getUserOperationStatus", link: "/permissionless/reference/pimlico-bundler-actions/getUserOperationStatus" },
        ]
      },
      {
        text: "Pimlico Paymaster Actions",
        collapsed: false,
        items: [
          { text: "sponsorUserOperation", link: "/permissionless/reference/pimlico-paymaster-actions/sponsorUserOperation" },
          { text: "validateSponsorshipPolicies", link: "/permissionless/reference/pimlico-paymaster-actions/validateSponsorshipPolicies" },
        ]
      },
      {
        text: "Public Actions",
        collapsed: false,
        items: [
          { text: "getSenderAddress", link: "/permissionless/reference/public-actions/getSenderAddress" },
          { text: "getAccountNonce", link: "/permissionless/reference/public-actions/getAccountNonce" },
        ]
      },
      {
        text: "Utilities",
        collapsed: false,
        items: [
          { text: "getUserOperationHash", link: "/permissionless/reference/utils/getUserOperationHash" },
          { text: "signUserOperationHashWithECDSA", link: "/permissionless/reference/utils/signUserOperationHashWithECDSA" },
          { text: "getRequiredPrefund", link: "/permissionless/reference/utils/getRequiredPrefund" },
          { text: "walletClientToSmartAccountSigner", link: "/permissionless/reference/utils/walletClientToSmartAccountSigner" },
          { text: "providerToSmartAccountSigner", link: "/permissionless/reference/utils/providerToSmartAccountSigner" },
        ]
      },
      {
        text: "Glossary",
        collapsed: false,
        items: [
          { text: "Errors", link: "/permissionless/reference/glossary/errors" },
        ]
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
          { text: "getPaymasterData", link: "/permissionless/experimental/eip7677/getPaymasterData" },
          { text: "getPaymasterStubData", link: "/permissionless/experimental/eip7677/getPaymasterStubData" }
        ]
      },
    ]
  },
]

export default defineConfig({
  title: 'Pimlico',
  logoUrl: { light: '/pimlico-purple.svg', dark: '/pimlico-white.svg' },
  iconUrl: '/favicons/favicon.svg',
  titleTemplate: '%s | Pimlico Docs',
  editLink: {
    pattern: 'https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path',
    text: 'Edit on GitHub',
  },
  description: "Pimlico is the world's most popular account abstraction infrastructure platform",
  head: (
    <>
      <script src="/posthog.js"></script>
    </>
  ),
  banner: {
    content: (
      <a href="https://twitter.com/pimlicoHQ/status/1721890681185321018" target="_blank" rel="nofollow noreferrer">
        🎉 We raised $4.2 million from a16z to power Ethereum's transition to smart accounts! Read more →
      </a>
    ),
    dismissable: true,
    backgroundColor: "#3c393f",
    textColor: "#eeeef0"
  },
  vite: viteConfig,
  sidebar: {
    '/permissionless': permissionlessSidebar,
    '/bundler': bundlerSidebar,
    '/paymaster': paymasterSidebar,
    // '/conceptual': conceptualSidebar,
  },
  ogImageUrl: {
    "/": "https://docs-og-pimlico.vercel.app/api/og?logo=%logo&title=%title&description=%description"
  },
  rootDir: "docs",
  theme: {
    accentColor: { light: "#7115AA", dark: "#a66cc9" },
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/pimlicolabs',
    },
    {
      icon: "telegram",
      link: "https://t.me/pimlicoHQ"
    },
    {
      icon: 'x',
      link: 'https://twitter.com/pimlicoHQ',
    },
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/pimlico"
    }
  ],
  topNav: [
    {
      text: 'permissionless.js',
      link: '/permissionless',
    },
    {
      text: 'Bundler',
      link: '/bundler',
    },
    {
      text: 'Paymasters',
      link: '/paymaster',
    },
    // {
    //   text: "Conceptual",
    //   link: "/conceptual"
    // },
    {
      text: "Dashboard",
      link: "https://dashboard.pimlico.io"
    }
  ]
})
