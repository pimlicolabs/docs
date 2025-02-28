import { Address, Hex, TypedData } from "viem";
import { AssetId } from "./assets";

interface SerializedUserOperation {
  signature: Hex;
}

export interface ChainOperation {
  userOp: SerializedUserOperation;
  typedDataToSign: TypedData;
  assetType: string;
  amount: string;
}

export interface QuoteToken {
  aggregatedAssetId: AssetId;
  assetType: string[];
  amount: string;
  minimumAmount: string;
}

export interface Quote {
  id: string;
  account: {
    accountAddress: Address;
    sessionAddress: Address;
    adminAddress: Address;
  };
  originChainsOperations: ChainOperation[];
  destinationChainOperation?: ChainOperation;
  originToken: QuoteToken;
  destinationToken: QuoteToken;
  expirationTimestamp: string;
  tamperProofSignature: string;
}
