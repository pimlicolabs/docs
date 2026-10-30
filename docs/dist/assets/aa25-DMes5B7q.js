import{u as s,j as e}from"./index-CPZcyEe9.js";const c={title:"AA25 invalid account nonce",description:"undefined"};function t(i){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"aa25-invalid-account-nonce",children:["AA25 invalid account nonce",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aa25-invalid-account-nonce",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"nonce"})," of the user operation is invalid."]}),`
`,e.jsxs(n.h2,{id:"possible-solutions",children:["Possible solutions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#possible-solutions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify that you are using the correct ",e.jsx(n.code,{children:"nonce"})," for the user operation. The ",e.jsx(n.code,{children:"nonce"})," should be the current nonce of the smart account for the selected ",e.jsx(n.code,{children:"key"}),". Consider leveraging functions like ",e.jsx(n.a,{href:"/references/permissionless/reference/public-actions/getAccountNonce",children:e.jsx(n.code,{children:"getAccountNonce"})}),".",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Make sure that you are not reusing a nonce that has already been used."}),`
`,e.jsx(n.li,{children:"Make sure that you are not using a nonce that is too far in the future (more than 10 higher than the current nonce)."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Verify that the nonce is formatted correctly."}),`
`,e.jsxs(n.li,{children:["Use custom nonce ",e.jsx(n.code,{children:"key"})," to send parallel transactions. See ",e.jsx(n.a,{href:"/references/permissionless/how-to/parallel-transactions",children:"How to Send Multiple Transactions"}),"."]}),`
`]}),`
`,e.jsxs(n.aside,{"data-callout":"info",children:[e.jsxs(n.p,{children:["Instead of sequential nonce the EntryPoint implements a nonce mechanism that uses a single ",e.jsx(n.code,{children:"uint256"})," nonce value in the user operation, but treats it as two values:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["192-bit ",e.jsx(n.code,{children:"key"})]}),`
`,e.jsxs(n.li,{children:["64-bit ",e.jsx(n.code,{children:"sequence"})]}),`
`]}),e.jsxs(n.p,{children:["For each ",e.jsx(n.code,{children:"key"})," the ",e.jsx(n.code,{children:"sequence"})," is validated and incremented sequentially and monotonically by the EntryPoint for each user operation, however a new ",e.jsx(n.code,{children:"key"})," can be introduced with an arbitrary value at any point."]})]})]})}function r(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{r as default,c as frontmatter};
