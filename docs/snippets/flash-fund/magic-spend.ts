import "dotenv/config"

import {
	http,
	type Account,
	type Address,
	type Chain,
	type Client,
	type Hex,
	type Transport,
	type HttpTransport,
	type HttpTransportConfig,
	createPublicClient,
	createTransport,
	RpcRequestError,
	UrlRequiredError,
} from "viem"
import { sepolia } from "viem/chains"
import type { Config } from "wagmi"
import { getHttpRpcClient } from "viem/utils"
import { Quote } from "./onebalance/quote"

export const ETH = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

export const getPimlicoUrl = (chainId: number) => {
	const pimlicoUrl = process.env.PIMLICO_URL ?? "https://api.pimlico.io/"

	if (!process.env.PIMLICO_API_KEY) {
		throw new Error("PIMLICO_API_KEY must be set")
	}

	return `${pimlicoUrl}v2/${chainId}/rpc?apikey=${process.env.PIMLICO_API_KEY}`
}

export type FlashFundCall = {
	to: Address
	data: Hex
	value: bigint
}

export type FlashFundWithdrawal = {
	token: Address
	amount: bigint
	chainId: bigint
	recipient: Address
	preCalls: FlashFundCall[]
	postCalls: FlashFundCall[]
	validUntil: bigint
	validAfter: bigint
	salt: bigint
}

export type FlashFundAssetAllowance = {
	token: Address
	amount: bigint
	chainId: bigint
}

export type FlashFundAllowance = {
	account: Address
	assets: FlashFundAssetAllowance[]
	validUntil: bigint
	validAfter: bigint
	salt: bigint
	version: bigint
	metadata: Hex
}

export type PimlicoFlashFundStake = {
	type: "pimlico_lock" | "onebalance"
	chainId: number
	token: Address
	amount: bigint
	withdrawTime?: Date
	usdValue: bigint
	testnet: boolean
	pending?: bigint
}

export type SponsorWithdrawalCreditParams = {
	type: "credits"
	data: {
		token: Address
		recipient: Address
		amount: string
		signature: Hex
	}
}

export type SponsorWithdrawalPimlicoLockParams = {
	type: "pimlico_lock"
	data: {
		allowance: FlashFundAllowance
		signature: Hex
	}
}

export type SponsorWithdrawalOneBalanceParams = {
	type: "onebalance"
	data: {
		quote: Quote
		amount: string
		recipient: Address
	}
}

export type GetStakesParams = {
	account: Address
}

export const MAGIC_SPEND_ETH: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

export type PimlicoFlashFundStakeParams =
	| {
			type: "pimlico_lock"
			data: {
				token: Address
				amount: string
				unstakeDelaySec: string
			}
	  }
	| {
			type: "onebalance"
			data: {
				token: Address
				amount: string
				account: Address
			}
	  }

export type PimlicoFlashFundSchema = [
	{
		Parameters: [
			{
				account: Address
			},
		]
		ReturnType: {
			usdValue: bigint
			stakes: PimlicoFlashFundStake[]
		}
		Method: "flashfund_getLocks"
	},
	{
		Parameters: [PimlicoFlashFundStakeParams]
		ReturnType: [Address, Hex]
		Method: "flashfund_prepareLock"
	},
	{
		Parameters: [PimlicoFlashFundPrepareAllowanceParams]
		ReturnType: PimlicoFlashFundPrepareAllowanceParams["type"] extends "pimlico_lock"
			? FlashFundAllowance
			: Quote
		Method: "flashfund_prepareAllowance"
	},
	{
		Parameters: [
			(
				| SponsorWithdrawalCreditParams
				| SponsorWithdrawalPimlicoLockParams
				| SponsorWithdrawalOneBalanceParams
			),
			null,
		]
		ReturnType: [Address, Hex]
		Method: "flashfund_sponsorWithdrawal"
	},
]

export type PimlicoFlashFundPrepareAllowanceParams = {
	type: "pimlico_lock" | "onebalance"
	data: {
		account: Address
		token: Address
		amount: string
		recipient: Address
	}
}

export type FlashFundBalance = {
	chain: Chain
	balance: bigint
}

export type FlashFundSponsorWithdrawalResponse = [Address, Hex]

export type LogHooks = {
	onRequest?: (method: string, params: any) => void
	onResponse?: (method: string, params: any, result: any) => void
}

function createFlashFundTransport(
	url: string,
	config: HttpTransportConfig & { logHooks?: LogHooks },
): HttpTransport {
	const { fetchOptions, key = "http", name = "HTTP JSON-RPC", retryDelay, logHooks } = config

	return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
		const retryCount = config.retryCount ?? retryCount_
		const timeout = timeout_ ?? config.timeout ?? 10_000

		if (!url) {
			throw new UrlRequiredError()
		}

		return createTransport(
			{
				key,
				name,
				async request({ method, params }) {
					const body = { method, params: params || [] }
					const httpClient = getHttpRpcClient(url)

					if (logHooks?.onRequest) {
						logHooks.onRequest(method, params)
					}

					const { error, result } = await httpClient.request({
						body,
						fetchOptions,
						timeout,
					})

					if (error) {
						throw new RpcRequestError({
							body,
							error,
							url: url,
						})
					}

					if (logHooks?.onResponse) {
						logHooks.onResponse(result, params, result)
					}

					return result
				},
				retryCount,
				retryDelay,
				timeout,
				type: "http",
			},
			{
				fetchOptions,
				url,
			},
		)
	}
}

export class FlashFund {
	chainId: number
	logHooks?: LogHooks

	constructor(logHooks?: LogHooks) {
		this.chainId = sepolia.id
		this.logHooks = logHooks
	}

	setChainId(chainId: number) {
		this.chainId = chainId
	}

	private getClient(): Client<
		Transport,
		Chain | undefined,
		Account | undefined,
		PimlicoFlashFundSchema
	> {
		const transport = createFlashFundTransport(getPimlicoUrl(this.chainId), {
			logHooks: this.logHooks,
		})

		return createPublicClient({
			transport,
		})
	}

	async getStakes({ account }: GetStakesParams) {
		const response = await this.getClient().request({
			method: "flashfund_getLocks",
			params: [
				{
					account,
				},
			],
		})

		const stakes = response.stakes.map((stake) => ({
			...stake,
			withdrawTime: new Date(Number(stake.withdrawTime)),
			amount: BigInt(stake.amount),
			chainId: Number(stake.chainId),
			testnet: stake.testnet,
			usdValue: BigInt(stake.usdValue),
			pending: BigInt(stake.pending || "0"),
		}))

		return {
			usdValue: response.usdValue,
			stakes,
		}
	}

	async prepareAllowance<T extends PimlicoFlashFundPrepareAllowanceParams>(
		params: T,
	): Promise<T["type"] extends "pimlico_lock" ? FlashFundAllowance : Quote> {
		return this.getClient().request({
			method: "flashfund_prepareAllowance",
			params: [params],
		})
	}

	async sponsorWithdrawal(
		params:
			| SponsorWithdrawalCreditParams
			| SponsorWithdrawalPimlicoLockParams
			| SponsorWithdrawalOneBalanceParams,
	): Promise<FlashFundSponsorWithdrawalResponse> {
		return this.getClient().request({
			method: "flashfund_sponsorWithdrawal",
			params: [params, null],
		})
	}

	async prepareStake(params: PimlicoFlashFundStakeParams): Promise<[Address, Hex, Hex]> {
		return this.getClient().request({
			method: "flashfund_prepareLock",
			params: [params],
		})
	}
}
