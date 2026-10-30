import{u as i,j as e}from"./index-CPZcyEe9.js";const d={title:"Difference between various Smart Account types in permissionless.js",description:"undefined"};function t(n){const s={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"difference-between-various-smart-account-types-in-permissionlessjs",children:["Difference between various Smart Account types in permissionless.js",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#difference-between-various-smart-account-types-in-permissionlessjs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"permissionless.js supports 8 types of accounts. Below is an overview of each account type and their key features:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Safe"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Kernel"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Nexus"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Simple Smart Account"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"LightAccount"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"TrustWallet"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Etherspot"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Thirdweb"}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"1-safe",children:["1. ",e.jsx(s.strong,{children:"Safe"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-safe",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://safe.global",children:"Safe"})," is a robust and widely used Ethereum smart account provider. With its ERC-4337 module, Safe accounts can integrate with ERC-4337 bundlers and paymasters."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ERC-7579 Support"}),": Yes, via ",e.jsx(s.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"Rhinestone's safe7579"})," module."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Passkeys Support"}),": Supported through ",e.jsx(s.a,{href:"https://github.com/safe-global/safe-modules/blob/466a9b8ef169003c5df856c6ecd295e6ecb9e99d/modules/passkey/README.md",children:"Safe's passkey module"}),"; not yet supported in permissionless.js."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple Signers"}),": Yes, as Safe is one of the first multi-signature smart accounts."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chain Support"}),": Available on all chains where Safe factories are deployed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Usage Stats"}),": ~34k Safe accounts created in the last 6 months (",e.jsx(s.a,{href:"https://stats.pimlico.io/accounts",children:"source"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Security"}),": Secures over $100B+ in assets, making it highly reliable."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"2-kernel",children:["2. ",e.jsx(s.strong,{children:"Kernel"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-kernel",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/zerodevapp/kernel",children:"Kernel"})," by ",e.jsx(s.a,{href:"https://zerodev.app",children:"ZeroDev"})," is a highly gas-efficient smart account compatible with ERC-4337 and ERC-7579."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ERC-7579 Support"}),": Yes, authored by the ZeroDev team."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Passkeys Support"}),": Yes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple Signers"}),": Supported through flexible permission settings:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Define who can perform actions."}),`
`,e.jsx(s.li,{children:"Specify conditions for actions."}),`
`,e.jsx(s.li,{children:"Configure what actions can be performed."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Usage Stats"}),": ~133k Kernel v3 and 771k Kernel v2 accounts created in the last 6 months (",e.jsx(s.a,{href:"https://stats.pimlico.io/accounts",children:"source"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Audits"}),": Audited by ",e.jsx(s.a,{href:"https://github.com/zerodevapp/kernel/blob/dev/audits/chainlight_v3_0.pdf",children:"ChainLight"})," and ",e.jsx(s.a,{href:"https://github.com/zerodevapp/kernel/tree/dev/audits",children:"Kalos"}),"."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"3-nexus",children:["3. ",e.jsx(s.strong,{children:"Nexus"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-nexus",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Biconomy ",e.jsx(s.a,{href:"https://github.com/bcnmy/nexus",children:"Nexus"})," focuses on modularity, security, and scalability. Support for the older Biconomy Smart Account is being deprecated in favor of Nexus."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ERC-7579 Support"}),": Yes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Passkeys Support"}),": Supported via Rhinestone's Passkeys Validator (not yet in permissionless.js)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple Signers"}),": Enabled using Rhinestone's session keys module."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Usage Stats"}),": ~78 Nexus accounts and 224,758 Biconomy v2 (deprecated) accounts created in the last 6 months (",e.jsx(s.a,{href:"https://stats.pimlico.io/accounts",children:"source"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Audits"}),": Audited by ",e.jsx(s.a,{href:"https://github.com/bcnmy/nexus/blob/dev/audits/CodeHawks-Cyfrin-Competition-170924.pdf",children:"Cyfrin"})," and ",e.jsx(s.a,{href:"https://github.com/bcnmy/nexus/blob/dev/audits/report-cantinacode-biconomy-0708-updated.pdf",children:"Spearbit"}),"."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"4-simple-smart-account",children:["4. ",e.jsx(s.strong,{children:"Simple Smart Account"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-simple-smart-account",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/v0.7.0/contracts/samples/SimpleAccount.sol",children:"Simple Smart Account"}),` is a sample smart account by the Eth-Infinitism team.
This is supposed to be a reference implementation for ERC-4337 and not a production-ready smart account.`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ERC-7579 Support"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Passkeys Support"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple Signers"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Usage Stats"}),": ~1.5M accounts created in the last 6 months (",e.jsx(s.a,{href:"https://stats.pimlico.io/accounts",children:"source"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Audits"}),": Audited by ",e.jsx(s.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/develop/audits/EIP_4337_%E2%80%93_Ethereum_Account_Abstraction_Incremental_Audit_Feb_2023.pdf",children:"OpenZeppelin"}),"."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"5-lightaccount",children:["5. ",e.jsx(s.strong,{children:"LightAccount"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-lightaccount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/alchemyplatform/light-account",children:"LightAccount"})," is a lightweight ERC-4337 smart account based on ",e.jsx(s.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/v0.7.0/contracts/samples/SimpleAccount.sol",children:"SimpleAccount"})," with added functionality for smart account signers."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ERC-7579 Support"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Passkeys Support"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple Signers"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Usage Stats"}),": ~7.3M accounts created in the last 6 months (",e.jsx(s.a,{href:"https://stats.pimlico.io/accounts",children:"source"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Audits"}),": Audited by ",e.jsx(s.a,{href:"https://github.com/alchemyplatform/light-account/blob/develop/audits/2024-01-09_quantstamp_aa8196b.pdf",children:"QuantStamp"}),"."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"6-trustwallet",children:["6. ",e.jsx(s.strong,{children:"TrustWallet"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-trustwallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://trustwallet.com/",children:"TrustWallet"})," is a popular cryptocurrency wallet supporting a wide range of digital assets across multiple blockchains. It provides users with a secure, self-custody solution and has introduced ERC-4337-compatible features."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ERC-7579 Support"}),": No."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Passkeys Support"}),": Yes, through ",e.jsx(s.a,{href:"https://trustwallet.com/blog/introducing-barz-smart-contract-wallet-solution",children:"Barz"}),", Trust Wallet's ERC-4337-compatible smart contract wallet, which supports passkey-based authentication."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple Signers"}),": Yes, Trust Wallet offers multisig functionality to enhance transaction security."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Usage Stats"}),": ~36,838 accounts created in the last 6 months (",e.jsx(s.a,{href:"https://stats.pimlico.io/accounts",children:"source"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Audits"}),": Trust Wallet has undergone independent audits."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"7-etherspot",children:["7. ",e.jsx(s.strong,{children:"Etherspot"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#7-etherspot",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Details on Etherspot integration coming soon."}),`
`,e.jsxs(s.h2,{id:"8-thirdweb",children:["8. ",e.jsx(s.strong,{children:"Thirdweb"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#8-thirdweb",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Details on Thirdweb integration coming soon."}),`
`,e.jsxs(s.h2,{id:"summary-of-key-features",children:["Summary of Key Features",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#summary-of-key-features",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Account Type"}),e.jsx(s.th,{children:"ERC-7579"}),e.jsx(s.th,{children:"Passkeys"}),e.jsx(s.th,{children:"Multiple Signers"}),e.jsx(s.th,{children:"Accounts Created (6 months)"}),e.jsx(s.th,{children:"Audited By"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Safe"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"34k"}),e.jsx(s.td,{children:"Various"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Kernel"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"133k (v3), 771k (v2)"}),e.jsx(s.td,{children:"ChainLight, Kalos"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Nexus"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"78"}),e.jsx(s.td,{children:"Cyfrin, Spearbit"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Biconomy v2 (deprecated)"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"224k"}),e.jsx(s.td,{children:"Cyfrin, Spearbit"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Simple"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"1.5M"}),e.jsx(s.td,{children:"OpenZeppelin"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"LightAccount"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"7.3M"}),e.jsx(s.td,{children:"QuantStamp"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"TrustWallet"}),e.jsx(s.td,{children:"❌"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"✅"}),e.jsx(s.td,{children:"36k"}),e.jsx(s.td,{children:"Independent audits"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Etherspot"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Thirdweb"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"}),e.jsx(s.td,{children:"TBD"})]})]})]}),`
`,e.jsxs(s.h2,{id:"gas-efficiency-of-various-smart-account-types",children:["Gas Efficiency of various Smart Account types",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-efficiency-of-various-smart-account-types",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Results (as of February 24, 2024)"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Disclaimer"})," the numbers are obtained from ",e.jsx(s.a,{href:"https://github.com/zerodevapp/aa-benchmark",children:"aa-benchmark"})," from ZeroDev."]}),`
`,e.jsx(s.p,{children:"Since these are gas numbers, lower is better."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{children:"Creation"}),e.jsx(s.th,{children:"Native transfer"}),e.jsx(s.th,{children:"ERC20 transfer"}),e.jsx(s.th,{children:"Total"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Solady ERC4337"}),e.jsx(s.td,{children:"212262"}),e.jsx(s.td,{children:"100149"}),e.jsx(s.td,{children:"89532"}),e.jsx(s.td,{children:"401943"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Kernel v2.1-lite"}),e.jsx(s.td,{children:"230968"}),e.jsx(s.td,{children:"101002"}),e.jsx(s.td,{children:"90321"}),e.jsx(s.td,{children:"422291"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Kernel v2.1"}),e.jsx(s.td,{children:"265215"}),e.jsx(s.td,{children:"106460"}),e.jsx(s.td,{children:"96038"}),e.jsx(s.td,{children:"467713"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Biconomy (deprecated)"}),e.jsx(s.td,{children:"270013"}),e.jsx(s.td,{children:"104408"}),e.jsx(s.td,{children:"93730"}),e.jsx(s.td,{children:"468151"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"SoulWalletCore"}),e.jsx(s.td,{children:"276529"}),e.jsx(s.td,{children:"101162"}),e.jsx(s.td,{children:"90466"}),e.jsx(s.td,{children:"468157"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"LightAccount"}),e.jsx(s.td,{children:"279820"}),e.jsx(s.td,{children:"100910"}),e.jsx(s.td,{children:"90411"}),e.jsx(s.td,{children:"471141"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Etherspot"}),e.jsx(s.td,{children:"279219"}),e.jsx(s.td,{children:"103719"}),e.jsx(s.td,{children:"93324"}),e.jsx(s.td,{children:"476262"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"ERC7579 reference"}),e.jsx(s.td,{children:"289438"}),e.jsx(s.td,{children:"103811"}),e.jsx(s.td,{children:"93213"}),e.jsx(s.td,{children:"486462"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Kernel v2.0"}),e.jsx(s.td,{children:"339882"}),e.jsx(s.td,{children:"110018"}),e.jsx(s.td,{children:"99622"}),e.jsx(s.td,{children:"549522"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"SimpleAccount"}),e.jsx(s.td,{children:"383218"}),e.jsx(s.td,{children:"101319"}),e.jsx(s.td,{children:"90907"}),e.jsx(s.td,{children:"575444"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Safe 4337"}),e.jsx(s.td,{children:"401848"}),e.jsx(s.td,{children:"115469"}),e.jsx(s.td,{children:"105089"}),e.jsx(s.td,{children:"622406"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Alchemy ModularAccount"}),e.jsx(s.td,{children:"827723"}),e.jsx(s.td,{children:"106630"}),e.jsx(s.td,{children:"96438"}),e.jsx(s.td,{children:"1030791"})]})]})]})]})}function c(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default,d as frontmatter};
