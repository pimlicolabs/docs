// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { Address, Hex, createPublicClient, encodeFunctionData, getContract, http, parseEther, toHex } from "viem"
import { sepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import { MagicSpendStakeManagerAbi } from "./abi/MagicSpendStakeManager";
import { MagicSpendWithdrawalManagerAbi } from "./abi/MagicSpendWithdrawalManager";
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

// [!region pimlico_getMagicSpendContracts]
const {
    stakeManagerAddress,
    withdrawalManagerAddress,
} = await sendMagicSpendRequest(
    'pimlico_getMagicSpendContracts',
    []
)
const stakeManagerContract = getContract({
    abi: MagicSpendStakeManagerAbi,
    address: stakeManagerAddress,
    client: publicClient,
})

// [!endregion pimlico_getMagicSpendContracts]

// [!region pimlico_getMagicSpendStakes]
const stakes = await sendMagicSpendRequest(
    'pimlico_getMagicSpendStakes',
    [{
        account: signer.address,
        asset: ETH
    }]
)

if (stakes.length === 0) {
    throw new Error("No stakes found")
}

// [!endregion pimlico_getMagicSpendStakes]

// [!region pimlico_prepareMagicSpendAllowance]
const allowance = await sendMagicSpendRequest(
    'pimlico_prepareMagicSpendAllowance',
    [{
        account: signer.address,
        asset: ETH,
        amount: toHex(amount),
    }]
);

const hash_ = await stakeManagerContract.read.getAllowanceHash([
    allowance,
]) as Hex;

const allowanceSignature = await signer.signMessage({
    message: {
        raw: hash_,
    }
})
// [!endregion pimlico_prepareMagicSpendAllowance]

// [!region pimlico_grantMagicSpendAllowance]
await sendMagicSpendRequest(
    "pimlico_grantMagicSpendAllowance",
    [{
        allowance,
        signature: allowanceSignature
    }]
);
// [!endregion pimlico_grantMagicSpendAllowance]

// [!region pimlico_sponsorMagicSpendWithdrawal]
const withdrawalManagerContract = getContract({
    abi: MagicSpendWithdrawalManagerAbi,
    address: withdrawalManagerAddress,
    client: publicClient,
})

const operatorRequestHash = await withdrawalManagerContract.read.getWithdrawalHash([
    {
        asset: ETH,
        amount,
        chainId: sepolia.id,
        recipient: simpleAccount.address,
        preCalls: [],
        postCalls: [],
        validUntil: BigInt(0),
        validAfter: BigInt(0),
        salt: 0
    }
]) as Hex;

const operatorRequestSignature = await signer.signMessage({
    message: {
        raw: operatorRequestHash
    }
})

const [wiithdrawal, withdrawalSignature] = await sendMagicSpendRequest(
    "pimlico_sponsorMagicSpendWithdrawal",
    [{
        recipient: simpleAccount.address,
        asset: ETH,
        amount,
        salt: 0,
        signature: operatorRequestSignature
    }]
)
// [!endregion pimlico_sponsorMagicSpendWithdrawal]

// [!region execute]
const magicSpendCallData = encodeFunctionData({
    abi: MagicSpendWithdrawalManagerAbi,
    functionName: 'withdraw',
    args: [
        wiithdrawal,
        withdrawalSignature,
    ]
})

// Send user operation and withdraw funds
// You can add subsequent calls after the withdrawal, like "buy NFT on OpenSea for ETH"
const userOpHash = await smartAccountClient.sendUserOperation({
    account: simpleAccount,
    calls: [
        {
            to: withdrawalManagerAddress,
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
// [!endregion execute]