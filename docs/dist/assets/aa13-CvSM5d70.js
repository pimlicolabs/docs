import{u as s,j as e}from"./index-CPZcyEe9.js";const d={title:"AA13 initCode failed or OOG",description:"undefined"};function t(n){const i={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"aa13-initcode-failed-or-oog",children:["AA13 initCode failed or OOG",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aa13-initcode-failed-or-oog",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.aside,{"data-callout":"info",children:e.jsx(i.p,{children:"OOG = Out Of Gas"})}),`
`,e.jsxs(i.p,{children:["The EntryPoint failed to create the smart account with the ",e.jsx(i.code,{children:"initCode"})," provided. There are two possible reasons:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"initCode"})," ran out of gas"]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"initCode"})," reverted during the account deployment process"]}),`
`]}),`
`,e.jsxs(i.h2,{id:"possible-solutions",children:["Possible solutions",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#possible-solutions",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Verify that the factory address in the ",e.jsx(i.code,{children:"initCode"})," is correct (the factory address is the first 20 bytes of the ",e.jsx(i.code,{children:"initCode"}),")."]}),`
`,e.jsxs(i.li,{children:["Verify that the ",e.jsx(i.code,{children:"initCode"})," is correct."]}),`
`,e.jsxs(i.li,{children:["Check whether the ",e.jsx(i.code,{children:"verificationGasLimit"})," is sufficient for the ",e.jsx(i.code,{children:"initCode"})," to complete without running out of gas."]}),`
`,e.jsxs(i.li,{children:["If the root cause is a revert, investigate why the ",e.jsx(i.code,{children:"initCode"})," reverts during the account deployment process using tools like ",e.jsx(i.a,{href:"https://tenderly.co/",children:"Tenderly"}),"."]}),`
`]})]})}function r(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{r as default,d as frontmatter};
