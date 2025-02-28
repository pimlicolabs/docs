// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { Address, Hex, createPublicClient, encodeFunctionData, http, parseEther, toHex } from "viem"
import { sepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import { entryPoint07Address } from "viem/account-abstraction";
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { toSimpleSmartAccount } from "permissionless/accounts";

import "dotenv/config"

const RPC_URL = "https://11155111.rpc.thirdweb.com"
const ETH: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
const amount = "0.001"; // 0.001 ETH


const PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

if (PRIVATE_KEY === undefined) {
    throw new Error("ACCOUNT_PRIVATE_KEY env var is required")
}

const PIMLICO_URL = process.env.PIMLICO_URL;

if (PIMLICO_URL === undefined) {
    throw new Error("PIMLICO_URL env var is required")
}

export const publicClient = createPublicClient({
	transport: http(RPC_URL),
	chain: sepolia,
})
  
const pimlicoClient = createPimlicoClient({
	transport: http(PIMLICO_URL),
    chain: sepolia,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})


const sendMagicSpendRequest = async (method: string, params: any[]) => {
    const body = {
        jsonrpc: "2.0",
        method,
        params,
        id: 1,
    };

    const response = await fetch(PIMLICO_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const j = await response.json();

    // @ts-ignore
    return j.result;
}

// This is the address of the account that owns the stake
const signer = privateKeyToAccount(PRIVATE_KEY as Hex)
console.log(`Signer address: ${signer.address}`)

const simpleAccount = await toSimpleSmartAccount({
    client: publicClient,
    owner: signer,
    entryPoint: {
        address: entryPoint07Address,
        version: "0.7",
    },
});

const smartAccountClient = createSmartAccountClient({
    account: simpleAccount,
    chain: sepolia,
    bundlerTransport: http(PIMLICO_URL, {
        timeout: 60_000,
    }),
    userOperation: {
        estimateFeesPerGas: async () => {
            return (await pimlicoClient.getUserOperationGasPrice()).fast
        },
    },
    paymaster: pimlicoClient,
})

// [!endregion clients]

// [!region pimlico_sponsorMagicSpendWithdrawal]

const [contract, calldata] = await sendMagicSpendRequest(
    "pimlico_sponsorMagicSpendWithdrawal",
    [{
        recipient: simpleAccount.address,
        token: ETH,
        amount: toHex(parseEther(amount)),
        signature: "0x0",
    }, null]
)
// [!endregion pimlico_sponsorMagicSpendWithdrawal]

// [!region execute]
// Send user operation and withdraw funds
// You can add subsequent calls after the withdrawal, like "buy NFT on OpenSea for ETH"
const userOpHash = await smartAccountClient.sendUserOperation({
    account: simpleAccount,
    calls: [
        {
            to: contract,
            value: parseEther("0"),
            data: calldata,
        }
    ]
})

console.log(`Userop hash: ${userOpHash}`);

const receipt = await pimlicoClient.waitForUserOperationReceipt({
    hash: userOpHash
})

console.log(`Transaction hash: ${receipt.receipt.transactionHash}`);
// [!endregion execute]