import supportedChains from '../../data/supported-chains.json';
import supportedAccounts from '../../data/supported-accounts.json';
import supportedEntrypoints from '../../data/supported-entrypoints.json';
import SupportedAccountsSection from './SupportedAccountsSection';
import SupportedEntrypointsSection from './SupportedEntrypointsSection';

type Chain = {
  chain_id: number;
  slug: string;
} | null;

type ChainData = {
  name: string;
  mainnet: Chain;
  testnet: Chain;
};

type AccountData = {
  chain_id: number;
  name: string;
  accounts: Record<string, boolean>;
};

type EntrypointData = {
  chain_id: number;
  name: string;
  entrypoints: Record<string, string | null>;
};

export default function ChainDetailsSection() {
  // Get all chain IDs from the supported chains data
  const allChainIds = new Set<number>();
  
  (supportedChains as ChainData[]).forEach((chainData) => {
    if (chainData.mainnet) {
      allChainIds.add(chainData.mainnet.chain_id);
    }
    if (chainData.testnet) {
      allChainIds.add(chainData.testnet.chain_id);
    }
  });

  // Convert to array and sort by chain name
  const chainDetails: {chainId: number, name: string}[] = [];
  
  // Collect all chain names and IDs from all data sources
  const chainIdToName = new Map<number, string>();
  
  // From supported chains
  (supportedChains as ChainData[]).forEach((chainData) => {
    if (chainData.mainnet) {
      chainIdToName.set(chainData.mainnet.chain_id, chainData.name + (chainData.mainnet.slug ? ` (${chainData.mainnet.slug})` : ''));
    }
    if (chainData.testnet) {
      chainIdToName.set(chainData.testnet.chain_id, chainData.name + (chainData.testnet.slug ? ` (${chainData.testnet.slug})` : ''));
    }
  });
  
  // From supported accounts
  (supportedAccounts as AccountData[]).forEach((data) => {
    if (!chainIdToName.has(data.chain_id)) {
      chainIdToName.set(data.chain_id, data.name);
    }
  });
  
  // From supported entrypoints
  (supportedEntrypoints as EntrypointData[]).forEach((data) => {
    if (!chainIdToName.has(data.chain_id)) {
      chainIdToName.set(data.chain_id, data.name);
    }
  });
  
  // Create the final array of chain details
  chainIdToName.forEach((name, chainId) => {
    chainDetails.push({ chainId, name });
  });
  
  // Sort by name
  chainDetails.sort((a, b) => a.name.localeCompare(b.name));

  // Check if account data exists for a chain
  const hasAccountData = (chainId: number) => {
    return (supportedAccounts as AccountData[]).some(data => data.chain_id === chainId);
  };

  // Check if entrypoint data exists for a chain
  const hasEntrypointData = (chainId: number) => {
    return (supportedEntrypoints as EntrypointData[]).some(data => data.chain_id === chainId);
  };

  return (
    <div>
      {chainDetails.map((chain) => (
        <div key={chain.chainId} className="vocs_Section">
          <h2 id={`chain-${chain.name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H2 vocs_Heading">
            {chain.name}
          </h2>
          
          {hasAccountData(chain.chainId) && (
            <>
              <h3 id={`accounts-${chain.name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H3 vocs_Heading">
                Supported Accounts
              </h3>
              <div className="vocs_TableContainer" style={{ overflowX: 'auto' }}>
                <SupportedAccountsSection chainId={chain.chainId} />
              </div>
            </>
          )}
          
          {hasEntrypointData(chain.chainId) && (
            <>
              <h3 id={`entrypoints-${chain.name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H3 vocs_Heading">
                Supported Entrypoints
              </h3>
              <div className="vocs_TableContainer">
                <SupportedEntrypointsSection chainId={chain.chainId} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
