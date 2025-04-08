// [!region clients]
import { createPimlicoClient } from "permissionless/clients/pimlico";
import { defineChain, createPublicClient, http } from "viem";
import { entryPoint07Address } from "viem/account-abstraction";

const buildbearSandboxUrl = "https://rpc.buildbear.io/<YOUR-SANDBOX-ID>";

const BBSandboxNetwork = defineChain({
  id: 23177, // IMPORTANT : replace this with your sandbox's chain id
  name: "BuildBear x Base Sandbox", // name your network
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }, // native currency of forked network
  rpcUrls: {
    default: {
      http: [buildbearSandboxUrl],
    },
  },
  blockExplorers: {
    default: {
      name: "BuildBear x Base Scan", // block explorer for network
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

// [!region smartAccountClient]
import { createSmartAccountClient } from "permissionless";
import { privateKeyToAccount } from "viem/accounts";
import { toSafeSmartAccount } from "permissionless/accounts";

// Get signer for private key
const signer = privateKeyToAccount(privateKey);

// Create a Safe Smart Account from our signer
const account = await toSafeSmartAccount({
  client: publicClient,
  owners: [signer],
  entryPoint: {
    address: entryPoint07Address,
    version: "0.7",
  }, // global entrypoint
  version: "1.4.1",
});

// Create a client for smart account
const smartAccountClient = createSmartAccountClient({
  account,
  chain: BBSandboxNetwork,
  paymaster: pimlicoClient, // optional, can be removed if paymaster isn't used
  bundlerTransport: http(buildbearSandboxUrl), //sending the tx to BuildBear Sandbox
  userOperation: {
    estimateFeesPerGas: async () => {
      return (await pimlicoClient.getUserOperationGasPrice()).fast;
    },
  },
});
// [!endregion smartAccountClient]

// [!region verifyingPaymaster]
import { parseAbi, parseEther } from "viem";

let txHash = await smartAccountClient.sendUserOperation({
    account,
    calls: [
      {
        to: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063" as `0x${string}`, //Payment token for gas
        abi: parseAbi(["function approve(address,uint)"]),
        functionName: "approve",
        args: ["0x0000000000000039cd5e8ae05257ce51c473ddd1", parseEther("1")], // approve spend of 1 DAI to Paymaster's address
      },
      {
        to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
        value: parseEther("1"),
      },
    ],
  });

let result = await smartAccountClient.waitForUserOperationReceipt({
  hash: txHash,
});

console.log(
  `User operation included: https://explorer.buildbear.io/uzair/tx/${result.receipt.transactionHash}`
);
// [!endregion verifyingPaymaster]

// [!region erc20Paymaster]
txHash = await smartAccountClient.sendUserOperation({
    account,
    calls: [
      {
        to: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063" as `0x${string}`, //Payment token for gas
        abi: parseAbi(["function approve(address,uint)"]),
        functionName: "approve",
        args: ["0x0000000000000039cd5e8ae05257ce51c473ddd1", parseEther("1")], // approve spend of 1 DAI to Paymaster's address
      },
      {
        to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
        value: parseEther("1"),
      },
    ],
      paymasterContext: {
        token: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // DAI
      },
  });

result = await smartAccountClient.waitForUserOperationReceipt({
  hash: txHash,
});

console.log(
  `User operation included: https://explorer.buildbear.io/<YOUR-SANDBOX-ID>/tx/${result.receipt.transactionHash}`
);
// [!endregion erc20Paymaster]
