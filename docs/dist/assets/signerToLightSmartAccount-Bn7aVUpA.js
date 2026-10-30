import{u as r,j as s}from"./index-CPZcyEe9.js";import a from"./VersionWarning-BGsF7-e6.js";const t={title:"signerToLightSmartAccount",description:"undefined"};function n(i){const e={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{version:"0.1"}),`
`,s.jsx(e.header,{children:s.jsxs(e.h1,{id:"signertolightsmartaccount",children:["signerToLightSmartAccount",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signertolightsmartaccount",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["Creates a LightAccount instance controlled by a ",s.jsx(e.code,{children:"SmartAccountSigner"}),"."]}),`
`,s.jsxs(e.h2,{id:"usage",children:["Usage",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.div,{className:"code-group",children:[s.jsx(e.div,{"data-title":"example.ts",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"example.ts","data-lang":"ts",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { signerToLightSmartAccount } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless/accounts"'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { publicClient } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./publicClient"'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { signer } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./signer"'})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" lightAccount"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" signerToLightSmartAccount"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(publicClient, {"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    signer,"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    lightAccountVersion: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'v1.1.0'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    entryPoint: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),s.jsx(e.div,{"data-title":"publicClient.ts",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"publicClient.ts","data-lang":"ts",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createPublicClient, http } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem"'})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" publicClient"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createPublicClient"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	transport: "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://sepolia.rpc.thirdweb.com"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),s.jsx(e.div,{"data-title":"signer.ts",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"signer.ts","data-lang":"ts",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { generatePrivateKey, privateKeyToAccount } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem/accounts"'})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" privateKey"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" generatePrivateKey"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" privateKeyToAccount"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(privateKey)"})]})]})})})]}),`
`,s.jsxs(e.h2,{id:"returns",children:["Returns",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"LightSmartAccount"})]}),`
`]}),`
`,s.jsx(e.p,{children:"The smart account instance."}),`
`,s.jsxs(e.h2,{id:"parameters",children:["Parameters",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"signer",children:["signer",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"SmartAccountSigner"})]}),`
`]}),`
`,s.jsx(e.p,{children:"The signer that will be used to sign messages and user operations."}),`
`,s.jsxs(e.h3,{id:"lightaccountversion",children:["lightAccountVersion",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lightaccountversion",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"LightAccountVersion"})]}),`
`]}),`
`,s.jsxs(e.p,{children:["The light account version. Currently only ",s.jsx(e.code,{children:"v1.1.0"})," is supported."]}),`
`,s.jsxs(e.h3,{id:"factoryaddress",children:["factoryAddress",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#factoryaddress",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"Address"})]}),`
`]}),`
`,s.jsx(e.p,{children:"The address of the light account factory that will be used to deploy the smart account."}),`
`,s.jsx(e.aside,{"data-callout":"info",children:s.jsxs(e.p,{children:["The canonical light account factory for v1.1.0 is ",s.jsx(e.code,{children:"0x00004EC70002a32400f8ae005A26081065620D20"})]})}),`
`,s.jsxs(e.h3,{id:"entrypoint",children:["entryPoint",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#entrypoint",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"Address"})]}),`
`]}),`
`,s.jsx(e.p,{children:"The address of the EntryPoint contract."}),`
`,s.jsxs(e.h3,{id:"index-optional",children:["index (optional)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#index-optional",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"bigint"})]}),`
`]}),`
`,s.jsxs(e.p,{children:["It represents salt nonce that will be used to deploy the smart account. If not provided, ",s.jsx(e.code,{children:"0"})," will be used."]}),`
`,s.jsxs(e.h3,{id:"address-optional",children:["address (optional)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#address-optional",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type:"})," ",s.jsx(e.code,{children:"Address"})]}),`
`]}),`
`,s.jsx(e.aside,{"data-callout":"warning",children:s.jsx(e.p,{children:"If you provide an address, the smart account can not be deployed. This should be used if you want to interact with an existing smart account."})}),`
`,s.jsx(e.p,{children:"The address of the smart account. If not provided, the determinstic smart account address will be used."})]})}function c(i={}){const{wrapper:e}={...r(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{c as default,t as frontmatter};
