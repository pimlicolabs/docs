import{u as i,j as e}from"./index-CPZcyEe9.js";const r={title:"Bundler FAQs",description:"undefined"};function a(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"bundler-faqs",children:["Bundler FAQs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bundler-faqs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"i-successfully-submitted-a-user-operation-to-the-bundler-but-it-never-got-included-in-a-block-what-happened",children:["I successfully submitted a user operation to the bundler, but it never got included in a block. What happened?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#i-successfully-submitted-a-user-operation-to-the-bundler-but-it-never-got-included-in-a-block-what-happened",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"There can be many reasons for this. The most common are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The user operation succeeds as it is being validated, but fails during the second round of simulations when it is being bundled by the bundler into a transaction to be submitted on-chain and is therefore dropped."}),`
`,e.jsx(n.li,{children:"The bundle transaction bundling the user operation fails on-chain so no logs are emitted."}),`
`,e.jsx(n.li,{children:"You submitted a user operation which has a nonce that is higher than the current account nonce, which means it is likely queued by the bundler until that nonce is reached."}),`
`]}),`
`,e.jsxs(n.p,{children:["It is recommended to use the ",e.jsx(n.a,{href:"/references/bundler/endpoints/pimlico_getUserOperationStatus",children:e.jsx(n.code,{children:"pimlico_getUserOperationStatus"})})," endpoint to check the status of your user operation."]}),`
`,e.jsxs(n.h2,{id:"what-are-fees-to-deploy-to-app-chains",children:["What are fees to deploy to app-chains?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-fees-to-deploy-to-app-chains",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Fees vary by network. Please reach out to ",e.jsx(n.a,{href:"https://t.me/kristofgazso",children:"us"})," for more information."]}),`
`,e.jsxs(n.h2,{id:"are-pimlico-bundlers-block-builders",children:["Are Pimlico bundlers block builders?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#are-pimlico-bundlers-block-builders",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Not by default, however we aim to get direct RPC access to sequencers whenever possible."}),`
`,e.jsxs(n.h2,{id:"are-there-any-api-related-payments",children:["Are there any API-related payments?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#are-there-any-api-related-payments",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"No, there are not. The only payments relate to the onchain payments through the user operation gas price for the bundler fees, and the offchain balance deduction for the paymaster fees."}),`
`,e.jsxs(n.h2,{id:"how-is-payment-made-for-the-bundler",children:["How is payment made for the bundler?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-is-payment-made-for-the-bundler",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The bundler fees are paid for completely onchain, by setting a gas price for the user operation that is slightly higher than the gas price we use to bundle said user operation in our transaction."}),`
`,e.jsxs(n.h2,{id:"how-does-the-onchain-bundler-payment-take-place",children:["How does the onchain bundler payment take place?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-does-the-onchain-bundler-payment-take-place",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["When constructing your user operation, you'd use the ",e.jsx(n.a,{href:"/references/bundler/endpoints/pimlico_getUserOperationGasPrice",children:"pimlico_getUserOperationGasPrice"})," method to select the gas prices for your user operation. When submitting to the bundler, the bundler would bundle the user operation into a transaction with a slightly lower gas price. The bundler makes as profit the small difference between the two gas prices."]}),`
`,e.jsxs(n.h2,{id:"how-is-pimlico_getuseroperationgasprice-different-from-eth_estimateuseroperationgas",children:["How is pimlico_getUserOperationGasPrice different from eth_estimateUserOperationGas?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-is-pimlico_getuseroperationgasprice-different-from-eth_estimateuseroperationgas",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/references/bundler/endpoints/eth_estimateUserOperationGas",children:"eth_estimateUserOperationGas"})," estimates the gas limits for the user operation (i.e. how much total gas can be spent for the difference stages of the user operation). In contrast, ",e.jsx(n.a,{href:"/references/bundler/endpoints/pimlico_getUserOperationGasPrice",children:"pimlico_getUserOperationGasPrice"})," responds with the gas prices (i.e. for each unit of gas, what is the amount of ETH you're willing to pay to the bundler)."]}),`
`,e.jsxs(n.h2,{id:"is-there-be-a-way-of-tracking-gas-fee-payments",children:["Is there be a way of tracking gas fee payments?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#is-there-be-a-way-of-tracking-gas-fee-payments",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Our dashboards provide a way for you to view data about how much you spent on sponsorship for user operations on different chains, however there is currently no specific information on the gas price overhead paid to the bundler. However, all this information is available and can be compiled onchain through block explorers like Etherscan."}),`
`,e.jsxs(n.p,{children:["If you would like more information about gas fee payments on the Pimlico dashboard, ",e.jsx(n.a,{href:"https://t.me/pimlicoHQ",children:"reach out to us!"})]}),`
`,e.jsxs(n.h2,{id:"how-do-gas-fees-for-the-bundler-and-paymaster-stack",children:["How do gas fees for the bundler and paymaster stack?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-gas-fees-for-the-bundler-and-paymaster-stack",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you use both the bundler and the paymaster together, the fee payments would stack."}),`
`,e.jsx(n.p,{children:"For instance, if you ended up paying a 5% overhead for the bundler and a 10% overhead for the verifying paymaster on a user operation that costs us $0.01 to include, you would end up paying a total of $0.01 * (1.05) * (1.1) = $0.01155 => a 15.5% overhead."}),`
`,e.jsx(n.p,{children:"Important to note however that the bundler and paymaster are completely independent and you can use one without the other."}),`
`,e.jsxs(n.h2,{id:"callgaslimit-oog-out-of-gas",children:["callGasLimit OOG (Out of Gas)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#callgaslimit-oog-out-of-gas",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"When a userOp fails onchain due to running out of gas, this indicates that the chain's state changed between when the gas estimation was made and when the userOp landed onchain."}),`
`,e.jsx(n.p,{children:"This can happen when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"There is significant duration from when the estimation was made to when the userOp landed onchain"}),`
`,e.jsx(n.li,{children:"Another transaction changed the chain's state between the estimation and the userOp landing onchain"}),`
`,e.jsx(n.li,{children:"The estimation was made with stateOverrides that are not present onchain"}),`
`]}),`
`,e.jsxs(n.p,{children:["The bundler finds the callGasLimit estimate by performing a onchain binary search to find the lowest callGasLimit that returns a successful response. If you are still unsure about this, please ",e.jsx(n.a,{href:"https://t.me/pimlicoHQ",children:"reach out to us"}),"."]}),`
`,e.jsxs(n.h2,{id:"what-is-the-use-case-for-smart-accounts",children:["What is the use case for smart accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-the-use-case-for-smart-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Smart accounts enable user experience improvements that were not previously possible with EOA accounts."}),`
`,e.jsx(n.p,{children:"Examples include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gasless transactions"}),`
`,e.jsx(n.li,{children:"Use of USDC and other ERC-20 tokens for gas fee payments"}),`
`,e.jsx(n.li,{children:"Trustless Passkey and FaceID signatures and login"}),`
`,e.jsx(n.li,{children:"Account recovery"}),`
`,e.jsx(n.li,{children:"Signer rotation"}),`
`,e.jsx(n.li,{children:"Multisig and social recovery schemes"}),`
`,e.jsx(n.li,{children:"Automated transactions (e.g. for limit orders, deadman switch, auto token revocations, automated DCA investing)"}),`
`,e.jsx(n.li,{children:"Transactions with session keys with limited account access"}),`
`,e.jsx(n.li,{children:"Batched transactions (e.g. being able to approve and swap in the same transaction)"}),`
`]}),`
`,e.jsxs(n.h2,{id:"when-using-a-bundler-without-a-verifying-paymaster-who-ends-up-paying-the-added-fees",children:["When using a bundler without a verifying paymaster, who ends up paying the added fees?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#when-using-a-bundler-without-a-verifying-paymaster-who-ends-up-paying-the-added-fees",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"When using the bundler without you sponsoring the gas fees for your users, the users themselves will be the ones covering the gas fees as well as the small bundler overhead for the user operations."}),`
`,e.jsxs(n.h2,{id:"if-the-bundler-gets-exploited-are-my-erc-4337-accounts-at-risk",children:["If the bundler gets exploited, are my ERC-4337 accounts at risk?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#if-the-bundler-gets-exploited-are-my-erc-4337-accounts-at-risk",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["No. If the private keys Pimlico uses were to get compromised, that would have no effect on the security of your ERC-4337 accounts. ERC-4337 was designed to make bundlers a completely permissionless entity, meaning in fact that any address could technically be a bundler by calling the ",e.jsx(n.code,{children:"handleOps"})," function on the EntryPoint contract. Bundler services like Pimlico merely provide a convenient, fast, and reliable way to bundle user operations for you."]}),`
`,e.jsx(n.p,{children:"The EOA address (if there is one) that controls your ERC-4337 would be controlled by you or a separate service you trust, completely independent of the bundler and Pimlico."})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{o as default,r as frontmatter};
