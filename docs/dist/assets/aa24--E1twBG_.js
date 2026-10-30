import{u as s,j as e}from"./index-CPZcyEe9.js";const o={title:"AA24 signature error",description:"undefined"};function t(r){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"aa24-signature-error",children:["AA24 signature error",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aa24-signature-error",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"validateUserOp"})," function of the smart account rejected the signature of the user operation."]}),`
`,e.jsxs(n.h2,{id:"possible-solutions",children:["Possible solutions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#possible-solutions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify that the user operation was correctly signed, and that the signature was correctly encoded in the ",e.jsx(n.code,{children:"signature"})," field of the user operation.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Most smart account implementations sign over the ",e.jsx(n.code,{children:"userOpHash"}),". Make sure that the ",e.jsx(n.code,{children:"userOpHash"})," is correctly computed. Consider leveraging functions like ",e.jsx(n.code,{children:"getUserOperationHash"})," from ",e.jsx(n.code,{children:"viem/account-abstraction"}),"."]}),`
`,e.jsxs(n.li,{children:["Make sure you have selected the correct ",e.jsx(n.code,{children:"chainId"})," and ",e.jsx(n.code,{children:"entryPointAddress"})," when computing the ",e.jsx(n.code,{children:"userOpHash"}),"."]}),`
`,e.jsx(n.li,{children:"Make sure the smart account signature verification function is correctly implemented."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If all else fails, investigate why the ",e.jsx(n.code,{children:"validateUserOp"})," function rejected the user operation signature using tools like ",e.jsx(n.a,{href:"https://tenderly.co/",children:"Tenderly"}),"."]}),`
`]})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default,o as frontmatter};
