import{u as i,j as e}from"./index-CPZcyEe9.js";const r={title:"AA15 initCode must create sender",description:"undefined"};function s(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"aa15-initcode-must-create-sender",children:["AA15 initCode must create sender",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aa15-initcode-must-create-sender",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The smart account deployment process with the ",e.jsx(n.code,{children:"initCode"})," does not return any ",e.jsx(n.code,{children:"sender"})," address. There are two possible reasons:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"initCode"})," factory is not creating an account."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"initCode"})," factory is creating an account, but is not implemented correctly as it is not returning the deployed ",e.jsx(n.code,{children:"sender"})," address."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"possible-solutions",children:["Possible solutions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#possible-solutions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify that the factory address in the ",e.jsx(n.code,{children:"initCode"})," is correct (the factory address is the first 20 bytes of the ",e.jsx(n.code,{children:"initCode"}),")."]}),`
`,e.jsxs(n.li,{children:["Verify that the ",e.jsx(n.code,{children:"initCode"})," factory is implemented correctly. The factory must deploy the smart account and return the deployed ",e.jsx(n.code,{children:"sender"})," address."]}),`
`,e.jsxs(n.li,{children:["If all else fails, investigate why the ",e.jsx(n.code,{children:"initCode"})," factory does not return a ",e.jsx(n.code,{children:"sender"})," address using tools like ",e.jsx(n.a,{href:"https://tenderly.co/",children:"Tenderly"}),"."]}),`
`]})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{o as default,r as frontmatter};
