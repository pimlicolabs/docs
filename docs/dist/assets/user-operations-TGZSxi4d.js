import{u as r,j as e}from"./index-CPZcyEe9.js";const l={title:"Debugging User Operations",description:"undefined"};function i(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"debugging-user-operations",children:["Debugging User Operations",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#debugging-user-operations",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"When debugging user operations, Pimlico provides powerful tools to help you identify and resolve issues quickly. This guide covers the essential debugging techniques using request logs and the debugging section."}),`
`,e.jsxs(s.h2,{id:"using-request-logs",children:["Using Request Logs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-request-logs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Request logs provide detailed insights into every API call made to Pimlico's infrastructure, helping you trace and troubleshoot user operations effectively."}),`
`,e.jsxs(s.h3,{id:"accessing-request-logs",children:["Accessing Request Logs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#accessing-request-logs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Navigate to the ",e.jsx(s.strong,{children:"Request Logs"})," section in the left sidebar of your Pimlico dashboard. This displays a comprehensive list of all recent requests made using your API keys."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/request-logs.png",alt:"Request logs interface"})}),`
`,e.jsxs(s.h3,{id:"filtering-requests",children:["Filtering Requests",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#filtering-requests",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The request logs interface provides powerful filtering options to help you quickly find the specific requests you're looking for:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Date Range"}),': Narrow down requests to a specific time period using preset ranges like "Last 7 days" or define a custom date range.']}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"API Key"}),": If you have multiple API keys, select a specific one to view only its associated requests."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Chain"}),": Filter by blockchain network to view only requests made on that chain (e.g., Base Sepolia, Ethereum Mainnet)."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Sender"}),": Enter a sender address to view all requests originating from a specific account. Particularly useful when debugging issues for a specific user."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Method"}),": Filter by RPC method to see specific operation types (e.g., ",e.jsx(s.code,{children:"eth_sendUserOperation"}),", ",e.jsx(s.code,{children:"eth_estimateUserOperationGas"}),")."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Response Type"}),': Choose between "Success" or "Error" to view only successful operations or failed ones.']}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Trace ID"}),": Search by a specific trace ID from an error log or previous debugging session to jump directly to that request."]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"common-debugging-scenarios",children:["Common Debugging Scenarios",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#common-debugging-scenarios",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"Failed User Operations"}),`
`,e.jsx(s.p,{children:"To investigate failed user operations:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:'Set Response Type to "Error"'}),`
`,e.jsxs(s.li,{children:["Filter by Method: ",e.jsx(s.code,{children:"eth_sendUserOperation"})]}),`
`,e.jsx(s.li,{children:"Select the relevant time period"}),`
`]}),`
`,e.jsx(s.p,{children:"This shows all failed user operations with their error messages, helping identify patterns or specific issues."}),`
`,e.jsx(s.strong,{children:"Gas Estimation Issues"}),`
`,e.jsx(s.p,{children:"For gas estimation problems:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Filter by Method: ",e.jsx(s.code,{children:"eth_estimateUserOperationGas"})]}),`
`,e.jsx(s.li,{children:"Look for error responses"}),`
`,e.jsx(s.li,{children:"Check request payloads to ensure correct parameters"}),`
`]}),`
`,e.jsxs(s.h3,{id:"debugging-individual-requests",children:["Debugging Individual Requests",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#debugging-individual-requests",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Once you've located the request you want to investigate, click the ",e.jsx(s.strong,{children:"debug icon"})," (bug symbol) next to any request entry to access detailed debugging information."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/debug-icon.png",alt:"Request logs debug icon"})}),`
`,e.jsxs(s.p,{children:["The debugging page opens with all request details automatically populated, including user operation, entrypoint, chain, timestamp and type of request, e.g ",e.jsx(s.code,{children:"eth_sendUserOperation"}),", ",e.jsx(s.code,{children:"eth_estimateUserOperationGas"}),":"]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/debugging-page.png",alt:"Debugging page"})}),`
`,e.jsxs(s.p,{children:['Click on the "Debug using Tenderly" will then redirect you to ',e.jsx(s.a,{href:"https://tenderly.co/",children:"Tenderly's"})," simulation link."]}),`
`,e.jsxs(s.h2,{id:"using-the-debugging-section",children:["Using the Debugging Section",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-the-debugging-section",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The debugging section can be accessed in two ways:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"From Request Logs"}),": As shown above, clicking the debug icon next to any request automatically populates all details"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Direct Access"}),": Navigate to ",e.jsx(s.strong,{children:"Debugging → Simulate"})," in the left sidebar to manually enter information for custom debugging"]}),`
`]}),`
`,e.jsx(s.p,{children:"When accessing the debugging section directly, you can manually input operation details for custom debugging scenarios:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"User Operation"}),": Paste the complete user operation object or hash"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Entry Point"}),": Specify the entry point contract address (defaults to standard ERC-4337 entry points)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chain"}),": Select the blockchain network where the operation was/will be executed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Timestamp"}),": Optionally provide a specific block timestamp for historical debugging"]}),`
`]}),`
`,e.jsxs(s.p,{children:[`Once your operation details are loaded (either automatically or manually), you can
click on the "Debug using Tenderly" which will then redirect you to `,e.jsx(s.a,{href:"https://tenderly.co/",children:"Tenderly's"})," simulation link."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/debugging-page.png",alt:"Debugging page"})}),`
`,e.jsxs(s.h2,{id:"debugging-with-foundrys-cast",children:["Debugging with Foundry's cast",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#debugging-with-foundrys-cast",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Sometimes the Tenderly simulation is not enough to debug an issue. In these cases, you can use Foundry's ",e.jsx(s.code,{children:"cast"})," tool to create a local trace."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/tenderly_cast_simulation.png",alt:"Tenderly cast simulation"})}),`
`,e.jsx(s.p,{children:"Using the values from the Tenderly simulation, run the following command in your terminal:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $TENDERLY_TO_ADDRESS $TENDERLY_RAW_INPUT "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --block"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $TENDERLY_BLOCK_NUMBER "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --rpc-url"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $YOUR_RPC_URL "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --from"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $TENDERLY_FROM_ADDRESS "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --trace"})})]})}),`
`,e.jsx(s.p,{children:"The trace output looks like:"}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/cast_trace.png",alt:"Cast trace"})})]})}function o(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{o as default,l as frontmatter};
