import{u as a,j as e}from"./index-CPZcyEe9.js";const r={title:"AA30 paymaster not deployed",description:"undefined"};function s(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"aa30-paymaster-not-deployed",children:["AA30 paymaster not deployed",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aa30-paymaster-not-deployed",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.aside,{"data-callout":"info",children:e.jsxs(t.p,{children:["The first 20 bytes of the ",e.jsx(t.code,{children:"paymasterAndData"})," field specify the address of the paymaster contract you are requesting to use."]})}),`
`,e.jsx(t.p,{children:"The paymaster contract is not deployed."}),`
`,e.jsxs(t.h2,{id:"possible-solutions",children:["Possible solutions",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#possible-solutions",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Verify that the ",e.jsx(t.code,{children:"paymasterAndData"})," field is correct, and that the first 20 bytes are the address of the paymaster contract you intend to use."]}),`
`,e.jsx(t.li,{children:"Verify that the paymaster contract is deployed on the network you are using."}),`
`]})]})}function i(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{i as default,r as frontmatter};
