import{u as a,j as e}from"./index-CPZcyEe9.js";import r from"./VersionWarning-BGsF7-e6.js";const t={title:"signUserOperationHashWithECDSA",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{version:"0.1"}),`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"signuseroperationhashwithecdsa",children:["signUserOperationHashWithECDSA",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signuseroperationhashwithecdsa",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Signs the hash of the User Operation with the standard ECDSA signature scheme (used by all EOAs and most smart wallets)."}),`
`,e.jsx(s.p,{children:"Can take in either the hash of the User Operation or a combination of the User Operation, chain ID and entry point address (calculating the hash internally)."}),`
`,e.jsx(s.p,{children:"Requires either a walletClient or a localAccount to be passed in that will be used to sign the hash."}),`
`,e.jsxs(s.h2,{id:"import",children:["Import",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#import",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { signUserOperationHashWithECDSA } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless"'})]})})}),`
`,e.jsxs(s.h2,{id:"usage",children:["Usage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The function can take in either a combination of ",e.jsx(s.code,{children:"userOperation"})," and ",e.jsx(s.code,{children:"chainId"})," or a ",e.jsx(s.code,{children:"userOperationHash"}),", or alternatively a ",e.jsx(s.code,{children:"hash"})," can be passed in directly."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { signUserOperationHashWithECDSA, ENTRYPOINT_ADDRESS_V07 } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signature"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" signUserOperationHashWithECDSA"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    account: localAccount, "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// or client: walletClient"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    userOperation: "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    entryPoint: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"ENTRYPOINT_ADDRESS_V07"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// "0x2d9420e06e41603c60ce395cfab6821f09c3c2461734dd785f24084a8ee138774f5d1910fb6d2d560934b21946a9667ada6077b5ac143c0d6a5d93e903c172101b"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// or"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signature"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" signUserOperationHashWithECDSA"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    account: localAccount, "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// or client: walletClient"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    hash: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xf0d56baa398828898360589d5ef75b24b12be0829ef1e1037013d1b6d9dda1f2"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// "0x2d9420e06e41603c60ce395cfab6821f09c3c2461734dd785f24084a8ee138774f5d1910fb6d2d560934b21946a9667ada6077b5ac143c0d6a5d93e903c172101b"'})})]})}),`
`,e.jsxs(s.h2,{id:"returns",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"Hex"})}),`
`,e.jsx(s.p,{children:"The 65-byte ECDSA signature of the hash of the User Operation."}),`
`,e.jsxs(s.h2,{id:"parameters",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"account-mutually-exclusive-with-client",children:["account (mutually exclusive with client)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#account-mutually-exclusive-with-client",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"LocalAccount"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The account to sign the hash with."}),`
`,e.jsxs(s.h3,{id:"client-mutually-exclusive-with-account",children:["client (mutually exclusive with account)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#client-mutually-exclusive-with-account",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"WalletClient"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The client to sign the hash with."}),`
`,e.jsxs(s.h3,{id:"hash-mutually-exclusive-with-useroperation-entrypoint-and-chainid",children:["hash (mutually exclusive with userOperation, entryPoint and chainId)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hash-mutually-exclusive-with-useroperation-entrypoint-and-chainid",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Hex"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The hash of the User Operation to sign."}),`
`,e.jsxs(s.h3,{id:"useroperation-mutually-exclusive-with-hash",children:["userOperation (mutually exclusive with hash)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#useroperation-mutually-exclusive-with-hash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"UserOperation"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The User Operation to hash."}),`
`,e.jsxs(s.h3,{id:"chainid-mutually-exclusive-with-hash",children:["chainId (mutually exclusive with hash)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid-mutually-exclusive-with-hash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The chain ID of the chain on which the User Operation is being executed."}),`
`,e.jsxs(s.h3,{id:"entrypoint-mutually-exclusive-with-hash",children:["entryPoint (mutually exclusive with hash)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#entrypoint-mutually-exclusive-with-hash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The entry point address."})]})}function d(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{d as default,t as frontmatter};
