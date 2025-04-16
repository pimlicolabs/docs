import chainsData from '../../data/chains.json';
import SupportedAccountsSection from './SupportedAccountsSection';
import SupportedEntrypointsSection from './SupportedEntrypointsSection';

type ChainData = {
  chain_id: number;
  display_name: string;
  slug: string;
  priority: boolean;
  entrypoints: Record<string, string>;
  accounts: Record<string, {
    supported: boolean;
    entrypoints: string[];
  }>;
};

export default function ChainDetailsSection() {
  // Sort chains by priority first, then by display name
  const sortedChains = [...(chainsData as ChainData[])].sort((a, b) => {
    // First sort by priority (true values come first)
    if (a.priority !== b.priority) {
      return a.priority ? -1 : 1; // Priority chains first
    }
    // Then sort alphabetically by display name
    return a.display_name.localeCompare(b.display_name);
  });

  // Check if account data exists for a chain
  const hasAccountData = (chainData: ChainData) => {
    return Object.keys(chainData.accounts).some(accountName => 
      chainData.accounts[accountName].supported
    );
  };

  // Check if entrypoint data exists for a chain
  const hasEntrypointData = (chainData: ChainData) => {
    return Object.keys(chainData.entrypoints).length > 0;
  };

  return (
    <div>
      {sortedChains.map((chain) => (
        <div key={chain.chain_id} className="vocs_Section">
          <h2 id={`chain-${chain.display_name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H2 vocs_Heading">
            {chain.display_name}
          </h2>
          
          {hasEntrypointData(chain) && (
            <>
              <h3 id={`entrypoints-${chain.display_name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H3 vocs_Heading">
                Supported Entrypoints
              </h3>
              <div className="vocs_TableContainer">
                <SupportedEntrypointsSection chainId={chain.chain_id} />
              </div>
            </>
          )}
          
          {hasAccountData(chain) && (
            <>
              <h3 id={`accounts-${chain.display_name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H3 vocs_Heading">
                Supported Accounts
              </h3>
              <div className="vocs_TableContainer" style={{ overflowX: 'auto' }}>
                <SupportedAccountsSection chainId={chain.chain_id} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
