import{u as s,j as e}from"./index-CPZcyEe9.js";const r={title:"Paymaster FAQs",description:"Frequently Asked Questions about Pimlico's Verifying Paymaster"};function i(a){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.header,{children:[e.jsxs(n.h1,{id:"paymaster-faqs",children:["Paymaster FAQs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymaster-faqs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.div,{role:"doc-subtitle",children:"Frequently Asked Questions about Pimlico's Verifying Paymaster"})]}),`
`,e.jsxs(n.h2,{id:"whats-the-difference-between-pm_getpaymasterdata-and-pm_sponsoruseroperation",children:["What's the difference between ",e.jsx(n.code,{children:"pm_getPaymasterData"})," and ",e.jsx(n.code,{children:"pm_sponsorUserOperation"}),"?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whats-the-difference-between-pm_getpaymasterdata-and-pm_sponsoruseroperation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pm_getPaymasterData"})," is part of the ",e.jsx(n.a,{href:"https://www.erc7677.xyz/introduction",children:"ERC-7677 spec"})," which standardizes the way to request sponsorship for a given userOperation. ",e.jsx(n.code,{children:"pm_getPaymasterData"})," doesn't do any gas estimations and only returns back the relevant userOperation fields for sponsorship."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For v0.6, the endpoint returns",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymasterAndData"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["For v0.7, the endpoint returns",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymaster"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paymasterData"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pm_sponsorUserOperation"})," is a Pimlico specific endpoint that also estimates gas as well as sponsoring the userOperation."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For v0.6, the endpoint returns",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymasterAndData"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"preVerificationGas"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"verificationGasLimit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"callGasLimit"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["For v0.7, the endpoint returns",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymaster"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymasterData"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymasterVerificationGasLimit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paymasterPostOpGasLimit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"preVerificationGas"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"verificationGasLimit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"callGasLimit"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"what-should-i-do-after-setting-up-a-policy-in-the-dashboard",children:["What should I do after setting up a policy in the dashboard?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-should-i-do-after-setting-up-a-policy-in-the-dashboard",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Decide whether to enable or disable the policy based on operational requirements and objectives. Enable it if you wish the policy to be active, or keep it disabled if not needed or under review."}),`
`,e.jsxs(n.h2,{id:"can-i-make-a-transfer-to-load-up-my-balance-in-a-different-currency",children:["Can I make a transfer to load up my balance in a different currency?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#can-i-make-a-transfer-to-load-up-my-balance-in-a-different-currency",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Yes, you can make a transfer to load up your balance in a different currency, such as USDC. We also accept transfers in ETH. Please reach out to ",e.jsx(n.a,{href:"https://t.me/kristofgazso",children:"us"})," and provide the recipient address and specify the currency you wish to transfer."]}),`
`,e.jsxs(n.h2,{id:"are-there-any-api-related-payments",children:["Are there any API-related payments?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#are-there-any-api-related-payments",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"No, there are not. The only payments relate to the onchain payments through the user operation gas price for the bundler fees, and the offchain balance deduction for the paymaster fees."}),`
`,e.jsxs(n.h2,{id:"how-is-payment-made-for-the-verifying-paymaster",children:["How is payment made for the verifying paymaster?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-is-payment-made-for-the-verifying-paymaster",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsx(n.p,{children:"The moment you request sponsorship, we pre-charge your balance with the maximum amount of balance your user operation could possibly spend (gas limits * max gas price). After 15 minutes, we check onchain how much your user operation actually spent and refund the difference to your account."})}),`
`,e.jsx(n.p,{children:"The verifying paymaster payments are charged offchain. We calculate how much gas in USD terms you spend and charge the percentage on top of that to your pre-loaded balance or attached card."}),`
`,e.jsxs(n.h2,{id:"how-do-gas-fees-for-the-bundler-and-paymaster-stack",children:["How do gas fees for the bundler and paymaster stack?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-gas-fees-for-the-bundler-and-paymaster-stack",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you use both the bundler and the paymaster together, the fee payments would stack."}),`
`,e.jsx(n.p,{children:"For instance, if you ended up paying a 5% overhead for the bundler and a 10% overhead for the verifying paymaster on a user operation that costs us $0.01 to include, you would end up paying a total of $0.01 * (1.05) * (1.1) = $0.01155 => a 15.5% overhead."}),`
`,e.jsx(n.p,{children:"Important to note however that the bundler and paymaster are completely independent and you can use one without the other."}),`
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
`,e.jsxs(n.h2,{id:"is-it-possible-to-partially-sponsor-transactions-with-the-verifying-paymaster",children:["Is it possible to partially sponsor transactions with the verifying paymaster?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#is-it-possible-to-partially-sponsor-transactions-with-the-verifying-paymaster",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"It is not natively possible to partially sponsor transactions with the verifying paymaster, however you can achieve a similar setup in a few different ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You could sponsor all the gas fees, but for a more limited set of user operations using our ",e.jsx(n.a,{href:"/guides/how-to/sponsorship-policies",children:"sponsorship policies"}),", for instance setting per user sponsorship limits, global spending limits, and more."]}),`
`,e.jsx(n.li,{children:"You could also consider requiring your users to transfer a certain amount of ETH or ERC-20 tokens to an account you own for every transaction they do, making it so they in effect partially pay for the transaction fees."}),`
`,e.jsx(n.li,{children:"You could develop and maintain your own paymaster contract which allows the user to stake their tokens and make the sponsorship happen partially using the users' tokens."}),`
`]}),`
`,e.jsxs(n.h2,{id:"does-the-verifying-paymaster-require-upfront-funding",children:["Does the verifying paymaster require upfront funding?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#does-the-verifying-paymaster-require-upfront-funding",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You can add balance on your ",e.jsx(n.a,{href:"https://dashboard.pimlico.io",children:"Pimlico dashboard"})," which will be used to sponsor gas fees, however you are also able to add a credit card, which will enable a $1000 overdraft limit which will be charged based on how much you sent at the end of every month."]}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsxs(n.p,{children:["If you would like to add to your balance using crypto, or you would like an overdraft limit higher than $1000, please ",e.jsx(n.a,{href:"https://t.me/pimlicoHQ",children:"contact us"}),"."]})}),`
`,e.jsxs(n.h2,{id:"would-i-get-alerted-if-my-balance-is-running-out",children:["Would I get alerted if my balance is running out?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#would-i-get-alerted-if-my-balance-is-running-out",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you run out of balance or you reach your overdraft limit, the sponsor RPC methods will start erroring."}),`
`,e.jsxs(n.p,{children:["There is currently no alerting for your balance running low, but if this is a feature you would like please ",e.jsx(n.a,{href:"https://t.me/pimlicoHQ",children:"contact us"}),"."]}),`
`,e.jsxs(n.p,{children:["If you would like to restrict how much you spend, consider taking a look at our ",e.jsx(n.a,{href:"/guides/how-to/sponsorship-policies",children:"sponsorship policies"})," that could allow you, for instance, to set a global spend limit of $100,000 no matter what."]})]})}function o(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{o as default,r as frontmatter};
