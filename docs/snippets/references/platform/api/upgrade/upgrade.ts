import { parseEther, zeroAddress } from "viem"
import { smartAccountClient } from "./createSmartAccountClient"

const userOperation = await smartAccountClient.prepareUserOperation({
	calls: [
		{
			to: zeroAddress,
			value: 0n,
			data: "0x",
		},
	],
	stateOverride: [
		{
			// Adding 100 ETH to the smart account during estimation to prevent AA21 errors while estimating
			balance: parseEther("100"),
			address: smartAccountClient.account.address,
		},
	],
})

const userOperationHash = await smartAccountClient.sendUserOperation(userOperation)

const receipt = await smartAccountClient.waitForUserOperationReceipt({
	hash: userOperationHash,
})

console.log(receipt)
