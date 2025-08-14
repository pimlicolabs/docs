import { arbitrum } from "viem/chains";

import { base } from "viem/chains";

import { optimism } from "viem/chains";

export type AssetId = `${string}:${string}`;

export interface Asset {
  aggregatedAssetId: AssetId;
  symbol: string;
  name: string;
  decimals: number;
  aggregatedEntities: {
    assetType: string;
    decimals: number;
    name: string;
    symbol: string;
  }[];
}

export const ONEBALANCE_SUPPORTED_CHAINS = [optimism.id, base.id, arbitrum.id] as const;
export type OneBalanceChainId = typeof ONEBALANCE_SUPPORTED_CHAINS[number];
