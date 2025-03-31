import {
  Address,
  createWalletClient,
  custom,
  Hash,
  Hex,
  TypedData,
  WalletClient,
} from "viem";
import { ChainOperation, Quote } from "./quote";

export const sequentialPromises = async <T>(
    promises: (() => Promise<T>)[]
  ): Promise<T[]> => {
    const results: T[] = [];
    for (const promise of promises) {
      const result = await promise();
      results.push(result);
    }
    return results;
  };
  
export const signQuoteWithSigner = (
  signTypedData: (_: { typedData: TypedData }) => Promise<Hex>
) => {
  const signOperation =
    (operation: ChainOperation): (() => Promise<ChainOperation>) =>
    async () => {
      const signature = await signTypedData({
        typedData: operation.typedDataToSign,
      });

      return {
        ...operation,
        userOp: { ...operation.userOp, signature },
      };
    };

  return async (quote: Quote): Promise<Quote> => {
    const signedQuote = {
      ...quote,
    };
    signedQuote.originChainsOperations = await sequentialPromises(
      quote.originChainsOperations.map(signOperation)
    );
    if (quote.destinationChainOperation) {
      signedQuote.destinationChainOperation = await signOperation(
        quote.destinationChainOperation
      )();
    }
    return signedQuote;
  };
};

const signTypedData =
  (walletClient: WalletClient) =>
  async (typedData: any): Promise<Hash> => {
    // const provider = await walletClient.getEthereumProvider();

    // const walletClient = createWalletClient({
    //   transport: custom(provider),
    //   account: embeddedWallet.address as Address,
    // });

    return walletClient.signTypedData(typedData);
  };

export const signQuote = (
  walletClient: WalletClient
) =>
  signQuoteWithSigner(({ typedData }) =>
    signTypedData(walletClient)(typedData)
  );
