import{u as r,j as e}from"./index-CPZcyEe9.js";import d from"./VersionWarning-BGsF7-e6.js";const t={title:"signerToSafeSmartAccount",description:"undefined"};function i(n){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{version:"0.1"}),`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"signertosafesmartaccount",children:["signerToSafeSmartAccount",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signertosafesmartaccount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["Creates a Safe smart account instance controlled by a ",e.jsx(s.code,{children:"SmartAccountSigner"}),"."]}),`
`,e.jsxs(s.h2,{id:"usage",children:["Usage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.div,{className:"code-group",children:[e.jsx(s.div,{"data-title":"example.ts",children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"example.ts","data-lang":"ts",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { ENTRYPOINT_ADDRESS_V07 } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { signerToSafeSmartAccount } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless/accounts"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { publicClient } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./publicClient"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { signer } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./signer"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" safeAccount"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" signerToSafeSmartAccount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(publicClient, {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    signer,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    safeVersion: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1.4.1"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    entryPoint: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"ENTRYPOINT_ADDRESS_V07"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),e.jsx(s.div,{"data-title":"publicClient.ts",children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"publicClient.ts","data-lang":"ts",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createPublicClient, http } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" publicClient"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createPublicClient"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	transport: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://sepolia.rpc.thirdweb.com"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),e.jsx(s.div,{"data-title":"signer.ts",children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"signer.ts","data-lang":"ts",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { generatePrivateKey, privateKeyToAccount } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem/accounts"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" privateKey"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" generatePrivateKey"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" privateKeyToAccount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(privateKey)"})]})]})})})]}),`
`,e.jsxs(s.h2,{id:"returns",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"SafeSmartAccount"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The smart account instance."}),`
`,e.jsxs(s.h2,{id:"parameters",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"signer",children:["signer",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"SmartAccountSigner"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The signer that will be used to sign messages and user operations."}),`
`,e.jsxs(s.h3,{id:"safeversion",children:["safeVersion",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safeversion",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"1.4.1"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The version of the Safe contract that will be used."}),`
`,e.jsxs(s.h3,{id:"entrypoint",children:["entryPoint",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#entrypoint",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The address of the EntryPoint contract."}),`
`,e.jsxs(s.h3,{id:"saltnonce-optional",children:["saltNonce (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#saltnonce-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"bigint"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The salt nonce that will be used to deploy the smart account. If not provided, ",e.jsx(s.code,{children:"0"})," will be used."]}),`
`,e.jsxs(s.h3,{id:"addmodulelibaddress-optional",children:["addModuleLibAddress (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#addmodulelibaddress-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The address of the ",e.jsx(s.code,{children:"AddModuleLib"})," contract. If not provided, the default address for the Safe version will be used."]}),`
`,e.jsxs(s.h3,{id:"safe4337moduleaddress-optional",children:["safe4337ModuleAddress (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safe4337moduleaddress-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The address of the ",e.jsx(s.code,{children:"Safe4337Module"})," contract. If not provided, the default address for the Safe version will be used."]}),`
`,e.jsxs(s.h3,{id:"safeproxyfactoryaddress-optional",children:["safeProxyFactoryAddress (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safeproxyfactoryaddress-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The address of the ",e.jsx(s.code,{children:"SafeProxyFactory"})," contract. If not provided, the default address for the Safe version will be used."]}),`
`,e.jsxs(s.h3,{id:"safesingletonaddress-optional",children:["safeSingletonAddress (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safesingletonaddress-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The address of the ",e.jsx(s.code,{children:"SafeSingleton"})," contract. If not provided, the default address for the Safe version will be used."]}),`
`,e.jsxs(s.h3,{id:"multisendaddress-optional",children:["multiSendAddress (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multisendaddress-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The address of the ",e.jsx(s.code,{children:"MultiSend"})," contract. If not provided, the default address for the Safe version will be used."]}),`
`,e.jsxs(s.h3,{id:"multisendcallonlyaddress-optional",children:["multiSendCallOnlyAddress (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multisendcallonlyaddress-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The address of the ",e.jsx(s.code,{children:"MultiSendCallOnly"})," contract. If not provided, the default address for the Safe version will be used."]}),`
`,e.jsxs(s.h3,{id:"safemodules-optional",children:["safeModules (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safemodules-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address[]"})]}),`
`]}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsx(s.p,{children:"The ERC-4337 module will always be added and does not need to be provided."})}),`
`,e.jsx(s.p,{children:"The addresses of the Safe modules that will be added during deployment."}),`
`,e.jsxs(s.h3,{id:"setuptransactions-optional",children:["setupTransactions (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setuptransactions-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Call[]"})]}),`
`]}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsx(s.p,{children:"This can be useful, for example, to approve tokens to an ERC-20 paymaster contract so it can pay for the gas of the first user operation."})}),`
`,e.jsxs(s.p,{children:["An array of calls that will be executed during the deployment of the smart account (when the ",e.jsx(s.code,{children:"initCode"})," is executed)."]}),`
`,e.jsxs(s.h3,{id:"address-optional",children:["address (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#address-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsx(s.aside,{"data-callout":"warning",children:e.jsx(s.p,{children:"If you provide an address, the smart account can not be deployed. This should be used if you want to interact with an existing smart account."})}),`
`,e.jsx(s.p,{children:"The address of the smart account. If not provided, the determinstic smart account address will be used."})]})}function o(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{o as default,t as frontmatter};
