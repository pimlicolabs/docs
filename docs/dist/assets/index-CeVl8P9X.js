import{u as a,j as e}from"./index-CPZcyEe9.js";const o={title:"EIP-7702",description:"undefined"};function i(n){const t={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"eip-7702",children:["EIP-7702",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eip-7702",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:`EIP-7702 is a proposal set for inclusion in the upcoming 2025 Pectra hardfork. The proposal introduces a new transaction type that allows EOA's to assign a "delegation designator" to their account. The delegation designator points to a smart contract and when a transaction is sent to the EOA, it executes the code at the designated address.`}),`
`,e.jsx(t.p,{children:"This unlocks huge benefits for EOAs, as they can now access smart account features such as batching transactions, gas sponsorships, passkeys as signers, and more."}),`
`,e.jsxs(t.p,{children:["A full demo showing how to use ERC-4337 with EIP-7702 can be found ",e.jsx(t.a,{href:"/guides/eip7702/demo",children:"here"}),"."]}),`
`,e.jsxs(t.h2,{id:"faq",children:["FAQ",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.h3,{id:"will-i-be-able-to-upgrade-my-wallet-to-any-smart-account-implementation",children:["Will I be able to upgrade my wallet to any smart account implementation?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#will-i-be-able-to-upgrade-my-wallet-to-any-smart-account-implementation",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"While technically possible, most wallet developers are expected to heavily restrict which smart account implementations you can upgrade to, typically limiting options to:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Their own implementation"}),`
`,e.jsx(t.li,{children:"A very limited set of approved smart account implementations"}),`
`]}),`
`,e.jsx(t.p,{children:"This restriction exists because upgrading your account with EIP-7702 effectively requires the same level of trust as handling over your private key. As a result, when implementing EIP-7702 support, you will likely need to:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Prompt users to upgrade their EOA wallet (e.g., Metamask) to the specific 7702 implementation that their wallet allows"}),`
`,e.jsx(t.li,{children:"Work within the features available through that implementation"}),`
`]}),`
`,e.jsx(t.p,{children:"Note: Having users provide their private key would technically allow upgrading to any implementation but is a significant security risk and is not recommended."}),`
`,e.jsxs(t.h2,{id:"how-can-i-test-it-out",children:["How can I test it out?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-can-i-test-it-out",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"You can test out EIP-7702 with Pimlico's infrastructure on the Odyssey Testnet:"}),`
`,e.jsxs(t.p,{children:["For a complete guide on how to test EIP-7702, check out our ",e.jsx(t.a,{href:"/guides/eip7702/demo",children:"step-by-step tutorial"})," which walks through the process of sending a sponsored userOperation from an EOA."]})]})}function r(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{r as default,o as frontmatter};
