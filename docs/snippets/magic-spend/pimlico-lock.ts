// [!region clients]
import { createSmartAccountClient } from "permissionless"
import { Address, Hex, createPublicClient, http, parseEther, toHex } from "viem"
import { sepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import { entryPoint07Address } from "viem/account-abstraction"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { toSimpleSmartAccount } from "permissionless/accounts"

import "dotenv/config"
import { getPimlicoUrl, FlashFund } from "./magic-spend"

const RPC_URL = "https://11155111.rpc.thirdweb.com"
const ETH: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
const amount = "0.001" // 0.001 ETH

const PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY

if (PRIVATE_KEY === undefined) {
	throw new Error("ACCOUNT_PRIVATE_KEY env var is required")
}

const pimlicoUrl = getPimlicoUrl(sepolia.id)

export const publicClient = createPublicClient({
	transport: http(RPC_URL),
	chain: sepolia,
})

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	chain: sepolia,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})

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
})

const smartAccountClient = createSmartAccountClient({
	account: simpleAccount,
	chain: sepolia,
	bundlerTransport: http(pimlicoUrl, {
		timeout: 60_000,
	}),
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
	paymaster: pimlicoClient,
})

const magicSpend = new FlashFund()
magicSpend.setChainId(sepolia.id)

// [!endregion clients]

// [!region flashfund_prepareLock]
const [stakeAddress, stakeCalldata, stakeValue] = await magicSpend.prepareStake({
	type: "pimlico_lock",
	data: {
		token: ETH,
		amount: toHex(parseEther(amount)),
		unstakeDelaySec: "86400",
	},
})

await smartAccountClient.sendUserOperation({
	account: simpleAccount,
	calls: [
		{
			to: stakeAddress,
			data: stakeCalldata,
			value: parseEther(stakeValue),
		},
	],
})

// [!endregion flashfund_prepareLock]

// [!region flashfund_getLocks]
const stakes = await magicSpend.getStakes({
	account: simpleAccount.address,
})
console.log(`Stakes: ${JSON.stringify(stakes, null, 2)}`)
// [!endregion flashfund_getLocks]

// [!region flashfund_prepareAllowance]
const allowance = await magicSpend.prepareAllowance({
	type: "pimlico_lock",
	data: {
		account: simpleAccount.address,
		token: ETH,
		amount: toHex(parseEther(amount)),
		recipient: simpleAccount.address,
	},
})

const signature = await signer.signTypedData({
	domain: {
		name: "Pimlico Lock",
		chainId: sepolia.id,
		verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
		version: "1",
	},
	types: {
		AssetAllowance: [
			{ name: "token", type: "address" },
			{ name: "amount", type: "uint128" },
			{ name: "chainId", type: "uint128" },
		],
		Allowance: [
			{ name: "account", type: "address" },
			{ name: "assets", type: "AssetAllowance[]" },
			{ name: "validUntil", type: "uint48" },
			{ name: "validAfter", type: "uint48" },
			{ name: "salt", type: "uint48" },
			{ name: "version", type: "uint32" },
			{ name: "metadata", type: "bytes" },
		],
	},
	primaryType: "Allowance",
	message: {
		account: allowance.account,
		assets: allowance.assets,
		validUntil: Number(allowance.validUntil),
		validAfter: Number(allowance.validAfter),
		salt: Number(allowance.salt),
		version: Number(allowance.version),
		metadata: allowance.metadata,
	},
})
// [!endregion flashfund_prepareAllowance]

// [!region flashfund_sponsorWithdrawal]
const [contract, calldata] = await magicSpend.sponsorWithdrawal({
	type: "pimlico_lock",
	data: {
		allowance,
		signature,
	},
})
// [!endregion flashfund_sponsorWithdrawal]

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
		},
	],
})

console.log(`Userop hash: ${userOpHash}`)

const receipt = await pimlicoClient.waitForUserOperationReceipt({
	hash: userOpHash,
})

console.log(`Transaction hash: ${receipt.receipt.transactionHash}`)
// [!endregion execute]
