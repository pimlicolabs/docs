// [!region clients]
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { defineChain, createPublicClient, http } from "viem";
import { entryPoint07Address } from "viem/account-abstraction";

const buildbearSandboxUrl = "https://rpc.buildbear.io/<YOUR-SANDBOX-ID>";

const BBSandboxNetwork = defineChain({
  id: 23177, // IMPORTANT : replace this with your sandbox's chain id
  name: "BuildBear x Polygon Mainnet Sandbox", // name your network
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 }, // native currency of forked network
  rpcUrls: {
    default: {
      http: [buildbearSandboxUrl],
    },
  },
  blockExplorers: {
    default: {
      name: "BuildBear x Polygon Mainnet Scan", // block explorer for network
      url: "https://explorer.buildbear.io/<YOUR-SANDBOX-ID>",
      apiUrl: "https://api.buildbear.io/<YOUR-SANDBOX-ID>/api",
    },
  },
});

// Create a new Public Client with Sandbox URL
export const publicClient = createPublicClient({
  chain: BBSandboxNetwork,
  transport: http(buildbearSandboxUrl), //@>>> Put in BuildBear rpc
});

// Create a pimlico client in the context of Sandbox
const pimlicoClient = createPimlicoClient({
  transport: http(buildbearSandboxUrl),
  entryPoint: {
    address: entryPoint07Address,
    version: "0.7",
  },
});
// [!endregion clients]
