import "dotenv/config";

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
} from "viem";
import { sepolia } from "viem/chains";
import type { Config } from "wagmi";
import { getHttpRpcClient } from "viem/utils";
import { Quote } from "./onebalance/quote";

export const ETH = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const getPimlicoUrl = (chainId: number) => {
	const pimlicoUrl = process.env.PIMLICO_URL ?? "https://api.pimlico.io/";

	if (!process.env.PIMLICO_API_KEY) {
		throw new Error("PIMLICO_API_KEY must be set");
	}

    return `${pimlicoUrl}v2/${chainId}/rpc?apikey=${process.env.PIMLICO_API_KEY}`;
};

export type MagicSpendCall = {
	to: Address;
	data: Hex;
	value: bigint;
};

export type MagicSpendWithdrawal = {
	token: Address;
	amount: bigint;
	chainId: bigint;
	recipient: Address;
	preCalls: MagicSpendCall[];
	postCalls: MagicSpendCall[];
	validUntil: bigint;
	validAfter: bigint;
	salt: bigint;
};

export type MagicSpendAssetAllowance = {
	token: Address;
	amount: bigint;
	chainId: bigint;
};

export type MagicSpendAllowance = {
	account: Address;
	assets: MagicSpendAssetAllowance[];
	validUntil: bigint;
	validAfter: bigint;
	salt: bigint;
	version: bigint;
	metadata: Hex;
};

export type PimlicoMagicSpendStake = {
	type: "pimlico_lock" | "onebalance";
	chainId: number;
	token: Address;
	amount: bigint;
	withdrawTime?: Date;
	usdValue: bigint;
	testnet: boolean;
	pending?: bigint;
};

export type SponsorWithdrawalCreditParams = {
	type: "credits";
	data: {
		token: Address;
		recipient: Address;
		amount: string;
		signature: Hex;
	};
};

export type SponsorWithdrawalPimlicoLockParams = {
	type: "pimlico_lock";
	data: {
		allowance: MagicSpendAllowance;
		signature: Hex;
	};
};

export type SponsorWithdrawalOneBalanceParams = {
	type: "onebalance";
	data: {
		quote: Quote;
		amount: string;
		recipient: Address;
	};
};

export type GetStakesParams = {
	account: Address;
};

export const MAGIC_SPEND_ETH: Address =
	"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export type PimlicoMagicSpendStakeParams =
	| {
			type: "pimlico_lock";
			data: {
				token: Address;
				amount: string;
				unstakeDelaySec: string;
			};
	  }
	| {
			type: "onebalance";
			data: {
				token: Address;
				amount: string;
				account: Address;
			};
	  };

export type PimlicoMagicSpendSchema = [
	{
		Parameters: [
			{
				account: Address;
			},
		];
		ReturnType: {
			usdValue: bigint;
			stakes: PimlicoMagicSpendStake[];
		};
		Method: "pimlico_getMagicSpendStakes";
	},
	{
		Parameters: [PimlicoMagicSpendStakeParams];
		ReturnType: [Address, Hex];
		Method: "pimlico_prepareMagicSpendStake";
	},
	{
		Parameters: [
			PimlicoMagicSpendPrepareAllowanceParams,
		];
		ReturnType: PimlicoMagicSpendPrepareAllowanceParams["type"] extends "pimlico_lock" ? MagicSpendAllowance : Quote;
		Method: "pimlico_prepareMagicSpendAllowance";
	},
	{
		Parameters: [
			SponsorWithdrawalCreditParams | SponsorWithdrawalPimlicoLockParams | SponsorWithdrawalOneBalanceParams,
			null,
		];
		ReturnType: [Address, Hex];
		Method: "pimlico_sponsorMagicSpendWithdrawal";
	},
];

export type PimlicoMagicSpendPrepareAllowanceParams = {
	type: "pimlico_lock" | "onebalance";
	data: {
		account: Address;
		token: Address;
		amount: string;
		recipient: Address;
	};
};

export type MagicSpendBalance = {
	chain: Chain;
	balance: bigint;
};

export type MagicSpendSponsorWithdrawalResponse = [Address, Hex];

export type LogHooks = {
	onRequest?: (method: string, params: any) => void;
	onResponse?: (method: string, params: any, result: any) => void;
};

function createMagicSpendTransport(
	url: string,
	config: HttpTransportConfig & { logHooks?: LogHooks },
): HttpTransport {
	const {
		fetchOptions,
		key = "http",
		name = "HTTP JSON-RPC",
		retryDelay,
		logHooks,
	} = config;

	return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
		const retryCount = config.retryCount ?? retryCount_;
		const timeout = timeout_ ?? config.timeout ?? 10_000;

		if (!url) {
			throw new UrlRequiredError();
		}

		return createTransport(
			{
				key,
				name,
				async request({ method, params }) {
					const body = { method, params: params || [] };
					const httpClient = getHttpRpcClient(url);

					if (logHooks?.onRequest) {
						logHooks.onRequest(method, params);
					}

					const { error, result } = await httpClient.request({
						body,
						fetchOptions,
						timeout,
					});

					if (error) {
						throw new RpcRequestError({
							body,
							error,
							url: url,
						});
					}

					if (logHooks?.onResponse) {
						logHooks.onResponse(result, params, result);
					}

					return result;
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
		);
	};
}

export class MagicSpend {
	chainId: number;
	pimlicoApiUrl: string;
	logHooks?: LogHooks;

	constructor(logHooks?: LogHooks) {
		this.chainId = sepolia.id;
		this.logHooks = logHooks;
		const pimlicoApiUrl = process.env.NEXT_PUBLIC_PIMLICO_API_URL;

		if (!pimlicoApiUrl) {
			throw new Error("NEXT_PUBLIC_PIMLICO_API_URL is not set");
		}

		this.pimlicoApiUrl = pimlicoApiUrl;
	}

	setChainId(chainId: number) {
		this.chainId = chainId;
	}

	private getClient(): Client<
		Transport,
		Chain | undefined,
		Account | undefined,
		PimlicoMagicSpendSchema
	> {
		const transport = createMagicSpendTransport(getPimlicoUrl(this.chainId), {
			logHooks: this.logHooks,
		});

		return createPublicClient({
			transport,
		});
	}

	async getStakes({ account }: GetStakesParams) {
		const response = await this.getClient().request({
			method: "pimlico_getMagicSpendStakes",
			params: [
				{
					account,
				},
			],
		});

		const stakes = response.stakes.map((stake) => ({
			...stake,
			withdrawTime: new Date(Number(stake.withdrawTime)),
			amount: BigInt(stake.amount),
			chainId: Number(stake.chainId),
			testnet: stake.testnet,
			usdValue: BigInt(stake.usdValue),
			pending: BigInt(stake.pending || "0"),
		}));

		return {
			usdValue: response.usdValue,
			stakes,
		};
	}

	async prepareAllowance<T extends PimlicoMagicSpendPrepareAllowanceParams>(
		params: T
	): Promise<T["type"] extends "pimlico_lock" ? MagicSpendAllowance : Quote> {
		return this.getClient().request({
			method: "pimlico_prepareMagicSpendAllowance",
			params: [params],
		});
	}

	async sponsorWithdrawal(
		params: SponsorWithdrawalCreditParams | SponsorWithdrawalPimlicoLockParams | SponsorWithdrawalOneBalanceParams,
	): Promise<MagicSpendSponsorWithdrawalResponse> {
		return this.getClient().request({
			method: "pimlico_sponsorMagicSpendWithdrawal",
			params: [params, null],
		});
	}

	async prepareStake(
		params: PimlicoMagicSpendStakeParams,
	): Promise<[Address, Hex, Hex]> {
		return this.getClient().request({
			method: "pimlico_prepareMagicSpendStake",
			params: [params],
		});
	}
}
