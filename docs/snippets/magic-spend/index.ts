// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { Address, Hex, createPublicClient, encodeFunctionData, getContract, http, parseEther, toHex } from "viem"
import { sepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import { MagicSpendStakeManagerAbi } from "./abi/MagicSpendStakeManager";
import { MagicSpendLiquidityManagerAbi } from "./abi/MagicSpendLiquidityManager";
import { entryPoint07Address } from "viem/account-abstraction";
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { toSimpleSmartAccount } from "permissionless/accounts";

import "dotenv/config"

const RPC_URL = "https://11155111.rpc.thirdweb.com"
const ETH: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
const amount = 123; // 123 wei


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

// [!region pimlico_getMagicSpendContracts]
const {
    stakeManager,
    liquidityManager,
} = await sendMagicSpendRequest(
    'pimlico_getMagicSpendContracts',
    []
)
const stakeManagerContract = getContract({
    abi: MagicSpendStakeManagerAbi,
    address: stakeManager,
    client: publicClient,
})

// [!endregion pimlico_getMagicSpendContracts]

// [!region pimlico_getMagicSpendStakes]
const stakes = await sendMagicSpendRequest(
    'pimlico_getMagicSpendStakes',
    [signer.address, ETH]
)

if (stakes.length === 0) {
    throw new Error("No stakes found")
}

// [!endregion pimlico_getMagicSpendStakes]

// [!region pimlico_prepareMagicSpendRequest]
const magicSpendRequest = await sendMagicSpendRequest(
    'pimlico_prepareMagicSpendRequest',
    [
        signer.address,
        ETH,
        toHex(amount),
    ]
);

const hash_ = await stakeManagerContract.read.getClaimRequestHash([
    magicSpendRequest,
]) as Hex;

const magicSpendSignature = await signer.signMessage({
    message: {
        raw: hash_,
    }
})
// [!endregion pimlico_prepareMagicSpendRequest]

// [!region pimlico_sponsorMagicSpendRequest]
const [withdrawRequest, withdrawSignature] = await sendMagicSpendRequest(
    "pimlico_sponsorMagicSpendRequest",
    [magicSpendRequest, magicSpendSignature, simpleAccount.address]
);

const magicSpendCallData = await encodeFunctionData({
    abi: MagicSpendLiquidityManagerAbi,
    functionName: 'withdraw',
    args: [
        withdrawRequest,
        withdrawSignature,
    ]
})

// [!endregion pimlico_sponsorMagicSpendRequest]

// [!region sendUserOperation]
const userOpHash = await smartAccountClient.sendUserOperation({
    account: simpleAccount,
    calls: [
        {
            to: liquidityManager,
            value: parseEther("0"),
            data: magicSpendCallData,
        }
    ]
})

console.log(`Userop hash: ${userOpHash}`);

const receipt = await pimlicoClient.waitForUserOperationReceipt({
    hash: userOpHash
})

console.log(`Transaction hash: ${receipt.receipt.transactionHash}`);
// [!endregion sendUserOperation]