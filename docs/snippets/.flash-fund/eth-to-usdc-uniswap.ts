import "dotenv/config"
import { writeFileSync } from "fs"
import { toSafeSmartAccount } from "permissionless/accounts"
import { Address, Hex, createPublicClient, encodeAbiParameters, encodeFunctionData, formatUnits, http, parseAbi, parseAbiParameters, parseEther, toHex } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { sepolia } from "viem/chains"
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"
import { createSmartAccountClient } from "permissionless"
import { UniswapQuoterAbi } from "./abi/UniswapQuoterAbi"
import { ETH } from "./magic-spend"
import { FlashFund } from "./magic-spend"
import { UniswapSwapRouterAbi } from "./abi/UniswapSwapRouterAbi"

// [!region clients]
const apiKey = process.env.PIMLICO_API_KEY
if (!apiKey) throw new Error("Missing PIMLICO_API_KEY")

const privateKey =
	(process.env.PRIVATE_KEY as Hex) ??
	(() => {
		const pk = generatePrivateKey()
		writeFileSync(".env", `PRIVATE_KEY=${pk}`)
		return pk
	})()

export const publicClient = createPublicClient({
	chain: sepolia,
	transport: http(),
})

const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`

const pimlicoClient = createPimlicoClient({
	transport: http(pimlicoUrl),
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})
// [!endregion clients]

// [!region smartAccount]
const account = await toSafeSmartAccount({
	client: publicClient,
	owners: [privateKeyToAccount(privateKey)],
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	}, // global entrypoint
	version: "1.4.1",
})

console.log(`Smart account address: https://sepolia.etherscan.io/address/${account.address}`)
// [!endregion smartAccount]

// [!region smartAccountClient]
const smartAccountClient = createSmartAccountClient({
	account,
	chain: sepolia,
	bundlerTransport: http(pimlicoUrl),
	paymaster: pimlicoClient,
	userOperation: {
		estimateFeesPerGas: async () => {
			return (await pimlicoClient.getUserOperationGasPrice()).fast
		},
	},
})
// [!endregion smartAccountClient]

// [!region uniswapInterfaces]
// Addresses for Sepolia testnet
// Note: These are example addresses and should be replaced with actual addresses for the network you're using
const SWAP_ROUTER_CONTRACT = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E" // Sepolia  SwapRouter
const QUOTER_CONTRACT = "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3" // Sepolia Quoter
const FACTORY_CONTRACT = "0x0227628f3F023bb0B980b67D528571c95c6DaC1c" // Sepolia Factory
const WETH_ADDRESS = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14" // Sepolia WETH
const USDC_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" // Sepolia USDC
// [!endregion uniswapInterfaces]

// [!region swapFunctions]
// Add Quoter ABI

/**
 * Get a quote for swapping ETH to USDC
 * @param amountIn Amount of ETH to swap (in wei)
 * @returns Expected amount of USDC out
 */
async function getEthToUsdcQuote(amountIn: bigint): Promise<bigint> {
  try {
    // First get the pool address from the factory
    const poolAddress = await publicClient.readContract({
      address: FACTORY_CONTRACT,
      abi: parseAbi(['function getPool(address,address,uint24) external view returns (address)']),
      functionName: 'getPool',
      args: [WETH_ADDRESS, USDC_ADDRESS, 3000]
    })

    if (!poolAddress || poolAddress === '0x0000000000000000000000000000000000000000') {
      throw new Error('Pool does not exist')
    }

    console.log(`Using pool: ${poolAddress}`)

    // Get quote from Quoter contract
    const result = await publicClient.simulateContract({
      address: QUOTER_CONTRACT,
      abi: UniswapQuoterAbi,
      functionName: 'quoteExactInputSingle',
      args: [
        {
          tokenIn: WETH_ADDRESS,
          tokenOut: USDC_ADDRESS,
          fee: 3000,
          recipient: account.address,
          deadline: Math.floor(new Date().getTime() / 1000 + 60 * 10),
          amountIn: amountIn,
          sqrtPriceLimitX96: 0n,
      }
      ]
    })
    const amountOut = result.result[0]

    return amountOut
  } catch (error) {
    console.error("Error getting quote:", error)
    if (error instanceof Error) {
      console.error("Error details:", error.message)
    }
    throw error
  }
}

/**
 * Create calldata for swapping ETH to USDC
 * @param amountIn Amount of ETH to swap (in wei)
 * @param slippagePercentage Slippage tolerance (e.g., 0.5 for 0.5%)
 * @returns Encoded function data for the swap
 */
async function createEthToUsdcSwapCalldata(
  amountIn: bigint,
  slippagePercentage: number = 0.5
): Promise<Hex> {
  // Get expected amount out
  const expectedAmountOut = await getEthToUsdcQuote(amountIn)
  
  // Calculate minimum amount out based on slippage
  const slippageBps = BigInt(Math.floor(slippagePercentage * 100))
  const minAmountOut = expectedAmountOut - (expectedAmountOut * slippageBps / 10000n)

  // Encode the function call
  const calldata = encodeFunctionData({
    abi: UniswapSwapRouterAbi,
    functionName: "exactInputSingle",
    args: [{
      tokenIn: WETH_ADDRESS,
      tokenOut: USDC_ADDRESS,
      fee: 3000, // 0.3% fee tier
      recipient: account.address,
      amountIn,
      amountOutMinimum: minAmountOut,
      sqrtPriceLimitX96: 0n // No price limit
    }]
  })
  
  return calldata
}
// [!endregion swapFunctions]

// [!region executeSwap]
/**
 * Execute a swap from ETH to USDC
 * @param ethAmount Amount of ETH to swap (in ETH, not wei)
 */
async function swapEthToUsdc(ethAmount: string) {
  const amountIn = parseEther(ethAmount)
  
  // Get expected amount out for logging
  const expectedAmountOut = await getEthToUsdcQuote(amountIn)
  console.log(`Expected to receive approximately ${formatUnits(expectedAmountOut, 6)} USDC for ${ethAmount} ETH`)
  
  // Create the swap calldata
  const swapCalldata = await createEthToUsdcSwapCalldata(amountIn)

  // Create a flash fund ETH withdrawal
  const flashFund = new FlashFund()

  const [contract, calldata] = await flashFund.sponsorWithdrawal({
    type: "credits",
    data: {
      token: ETH,
      amount: toHex(parseEther(ethAmount)),
      recipient: account.address,
      signature: "0x",
    },
  })

  // // Execute the swap
  const txHash = await smartAccountClient.sendTransaction({
    calls: [
      {
        to: contract,
        data: calldata,
        value: 0n
      },
      {
        to: SWAP_ROUTER_CONTRACT,
        data: swapCalldata,
        value: amountIn
      }
    ]
  })
  
  console.log(`Swap transaction submitted: https://sepolia.etherscan.io/tx/${txHash}`)
  return txHash
}
// [!endregion executeSwap]

// [!region main]
// Execute the swap with 0.01 ETH
const ethAmount = "0.00001"
console.log(`Swapping ${ethAmount} ETH for USDC...`)
await swapEthToUsdc(ethAmount)
// [!endregion main]
