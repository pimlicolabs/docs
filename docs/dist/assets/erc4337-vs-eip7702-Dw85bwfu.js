import{u as r,j as e}from"./index-CPZcyEe9.js";const a={title:"ERC-4337 vs EIP-7702",description:"undefined"};function s(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"erc-4337-vs-eip-7702",children:["ERC-4337 vs EIP-7702",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc-4337-vs-eip-7702",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:'This page outlines the key differences and design motivations behind ERC-4337 and EIP-7702 — two distinct approaches to improving smart accounts (also known as "account abstraction") on Ethereum.'}),`
`,e.jsxs(n.h2,{id:"tldr",children:["TL;DR",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tldr",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ERC-4337"}),": Defines a standard interface for smart accounts that allows them to plug into standard relayers (bundlers) and paymasters such as Pimlico. No protocol upgrades required."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"EIP-7702"}),": Allows EOAs to become smart accounts. Requires a protocol upgrade."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Importantly, ",e.jsx(n.strong,{children:"ERC-4337 and EIP-7702 are not competing proposals"}),". You can use both together, allowing EOAs to become smart accounts while also plugging into standard relayers and paymasters."]}),`
`,e.jsx(n.p,{children:"Given that ERC-4337 is already live and has a large ecosystem, it is the de-facto standard for smart account relaying and gas sponsoring today and is expected to be the main way that most smart accounts with EIP-7702 will also be used."}),`
`,e.jsxs(n.h2,{id:"erc-4337-overview",children:["ERC-4337 Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc-4337-overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timeline"}),": Proposal finalized in March 2023, latest EntryPoint contract deployed in April 2025."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Requires a Protocol Upgrade"}),": No"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mechanism"}),": Standardizes the bundler and paymaster interface, introduces an ",e.jsx(n.code,{children:"EntryPoint"})," contract to handle smart account transaction flows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Key Concepts"}),": User Operations, bundlers, paymasters"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"pros",children:["Pros",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pros",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No hard fork needed"}),`
`,e.jsx(n.li,{children:"Modular and extensible design (plug-in paymasters, validation logic, etc.)"}),`
`,e.jsx(n.li,{children:"Ecosystem already building on it (e.g., Pimlico, Safe, Stackup)"}),`
`]}),`
`,e.jsxs(n.h3,{id:"cons",children:["Cons",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cons",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Complex architecture (bundlers, extra calldata)"}),`
`]}),`
`,e.jsxs(n.h2,{id:"eip-7702-overview",children:["EIP-7702 Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eip-7702-overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timeline"}),": Expected to be included in the Pectra hardfork, on May 7, 2025."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Requires a Protocol Upgrade"}),": Yes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mechanism"}),": Turns an EOA into a contract account during via a new transaction type."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Key Concepts"}),": ",e.jsx(n.code,{children:"authorization_list"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"pros-1",children:["Pros",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pros-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clean UX: complexity is in the protocol"}),`
`,e.jsx(n.li,{children:"Reuses existing transaction flow (no separate mempool or entry point)"}),`
`]}),`
`,e.jsxs(n.h3,{id:"cons-1",children:["Cons",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cons-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Requires hard fork and client changes"}),`
`,e.jsx(n.li,{children:"Not all chains will have it live at the same time — backwards compatibility will be required."}),`
`,e.jsx(n.li,{children:"Master EOA retains ability to control and change the code of the smart account, true multisig / social recovery is not possible"}),`
`]})]})}function d(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{d as default,a as frontmatter};
