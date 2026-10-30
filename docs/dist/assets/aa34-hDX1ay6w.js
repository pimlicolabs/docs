import{u as i,j as e}from"./index-CPZcyEe9.js";const a={title:"AA34 signature error",description:"undefined"};function s(r){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"aa34-signature-error",children:["AA34 signature error",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aa34-signature-error",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.aside,{"data-callout":"info",children:e.jsxs(t.p,{children:["The first 20 bytes of the ",e.jsx(t.code,{children:"paymasterAndData"})," field specify the address of the paymaster contract you are requesting to use."]})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"validatePaymasterUserOp"})," function of the paymaster contract rejected the signature of the user operation."]}),`
`,e.jsxs(t.h2,{id:"possible-solutions",children:["Possible solutions",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#possible-solutions",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If you are using your own paymaster contract, verify that the user operation was correctly signed according to your implementation, and that the paymaster signature was correctly encoded in the ",e.jsx(t.code,{children:"paymasterAndData"})," field of the user operation.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Most paymaster implementations sign over a custom hash of the user operation. Make sure that the hash is correctly computed."}),`
`,e.jsx(t.li,{children:"Make sure the paymaster signature verification function is correctly implemented."}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["If you are using a paymaster service like Pimlico, make sure you do not modify any of the fields of the user operation after the paymaster signs over it (except the ",e.jsx(t.code,{children:"signature"})," field)."]}),`
`,e.jsxs(t.li,{children:["If you are using a paymaster service like Pimlico and you have not modified any of the fields except the ",e.jsx(t.code,{children:"signature"})," but you are still getting this error, ",e.jsx(t.a,{href:"https://t.me/pimlicoHQ",children:"reach out to them"}),"."]}),`
`,e.jsxs(t.li,{children:["If all else fails, investigate why the ",e.jsx(t.code,{children:"validatePaymasterUserOp"})," function rejected the paymaster signature using tools like ",e.jsx(t.a,{href:"https://tenderly.co/",children:"Tenderly"}),"."]}),`
`]})]})}function o(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{o as default,a as frontmatter};
