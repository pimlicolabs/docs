import{u as l,j as s}from"./index-CPZcyEe9.js";const a={title:"writeContract",description:"undefined"};function e(n){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.header,{children:s.jsxs(i.h1,{id:"writecontract",children:["writeContract",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#writecontract",children:s.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(i.p,{children:"Uses a smart account to executes a write function on a contract."}),`
`,s.jsx(i.p,{children:'A "write" function on a Solidity contract modifies the state of the blockchain.'}),`
`,s.jsxs(i.h2,{id:"usage",children:["Usage",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.div,{className:"code-group",children:[s.jsx(i.div,{"data-title":"example.ts",children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"example.ts","data-lang":"ts",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { smartAccountClient } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./smartAccountClient"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { simpleAbi } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" './abi'"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" hash"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccountClient."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"writeContract"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    address: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2'"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    abi: simpleAbi,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    functionName: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'mint'"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),s.jsx(i.div,{"data-title":"smartAccountClient.ts",children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"smartAccountClient.ts","data-lang":"ts",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createSmartAccountClient } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { toSimpleSmartAccount } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless/accounts"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createPimlicoClient } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "permissionless/clients/pimlico"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createPublicClient, http } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { entryPoint07Address } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem/account-abstraction"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { privateKeyToAccount } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem/accounts"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sepolia } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "viem/chains"'})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" publicClient"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createPublicClient"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	chain: sepolia,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	transport: "}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://sepolia.rpc.thirdweb.com"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// if using a paymaster"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" apiKey"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "YOUR_PIMLICO_API_KEY"'})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" pimlicoUrl"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" `https://api.pimlico.io/v2/sepolia/rpc?apikey=${"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"apiKey"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}`"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" pimlicoClient"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createPimlicoClient"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	transport: "}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(pimlicoUrl),"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	entryPoint: {"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		address: entryPoint07Address,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		version: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0.7"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	},"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" simpleSmartAccount"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" toSimpleSmartAccount"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	client: publicClient,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	owner: "}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"privateKeyToAccount"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xPRIVATE_KEY"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	entryPoint: {"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		address: entryPoint07Address,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		version: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0.7"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	}, "}),s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// global entrypoint"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" smartAccountClient"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createSmartAccountClient"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	account: simpleSmartAccount,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	chain: sepolia,"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	bundlerTransport: "}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"http"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(pimlicoUrl),"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	paymaster: pimlicoClient,"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	userOperation: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"		estimateFeesPerGas"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"			return"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" pimlicoClient."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getUserOperationGasPrice"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()).fast"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		},"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	},"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})}),s.jsx(i.div,{"data-title":"abi.ts",children:s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"abi.ts","data-lang":"ts",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" simpleAbi"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  ..."})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    inputs: [],"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    name: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"mint"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    outputs: [],"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    stateMutability: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nonpayable"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    type: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"function"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  ..."})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"as"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})]})})})]}),`
`,s.jsxs(i.h2,{id:"return-value",children:["Return Value",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#return-value",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"Hash"})]}),`
`]}),`
`,s.jsx(i.p,{children:"The transaction hash of the associated write operation"}),`
`,s.jsxs(i.h2,{id:"parameters",children:["Parameters",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.h3,{id:"address",children:["address",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#address",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"Address"})]}),`
`]}),`
`,s.jsx(i.p,{children:"The contract address."}),`
`,s.jsxs(i.h3,{id:"abi",children:["abi",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#abi",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"Abi"})]}),`
`]}),`
`,s.jsx(i.p,{children:"The contract's ABI."}),`
`,s.jsxs(i.h3,{id:"functionname",children:["functionName",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functionname",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"string"})]}),`
`]}),`
`,s.jsx(i.p,{children:"A function to extract from the ABI."}),`
`,s.jsxs(i.h3,{id:"args-optional",children:["args (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#args-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," Inferred from ABI."]}),`
`]}),`
`,s.jsx(i.p,{children:"Arguments to pass to function call."}),`
`,s.jsxs(i.h3,{id:"gas-optional",children:["gas (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"bigint"})]}),`
`]}),`
`,s.jsx(i.p,{children:"The gas limit for the transaction. Note that passing a gas limit also skips the gas estimation step."}),`
`,s.jsxs(i.h3,{id:"nonce-optional",children:["nonce (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nonce-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"number"})]}),`
`]}),`
`,s.jsx(i.p,{children:"Unique number identifying this transaction."}),`
`,s.jsxs(i.h3,{id:"value-optional",children:["value (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#value-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"number"})]}),`
`]}),`
`,s.jsx(i.p,{children:"Value in wei sent with this transaction."}),`
`,s.jsxs(i.h3,{id:"gasprice-optional",children:["gasPrice (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gasprice-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"bigint"})]}),`
`]}),`
`,s.jsx(i.p,{children:"The price (in wei) to pay per gas. Only applies to Legacy Transactions"}),`
`,s.jsxs(i.h3,{id:"maxfeepergas-optional",children:["maxFeePerGas (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#maxfeepergas-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"bigint"})]}),`
`]}),`
`,s.jsxs(i.p,{children:["Total fee per gas (in wei), inclusive of ",s.jsx(i.code,{children:"maxPriorityFeePerGas"}),". Only applies to EIP-1559 Transactions"]}),`
`,s.jsxs(i.h3,{id:"maxpriorityfeepergas-optional",children:["maxPriorityFeePerGas (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#maxpriorityfeepergas-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"bigint"})]}),`
`]}),`
`,s.jsx(i.p,{children:"Max priority fee per gas (in wei). Only applies to EIP-1559 Transactions"}),`
`,s.jsxs(i.h3,{id:"datasuffix-optional",children:["dataSuffix (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#datasuffix-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"Hex"})]}),`
`]}),`
`,s.jsx(i.p,{children:"Data to append to the end of the calldata."}),`
`,s.jsxs(i.h3,{id:"account-optional",children:["account (optional)",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#account-optional",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Type:"})," ",s.jsx(i.code,{children:"SmartAccount"})]}),`
`]}),`
`,s.jsx(i.p,{children:"The Account to write to the contract from."})]})}function c(n={}){const{wrapper:i}={...l(),...n.components};return i?s.jsx(i,{...n,children:s.jsx(e,{...n})}):e(n)}export{c as default,a as frontmatter};
