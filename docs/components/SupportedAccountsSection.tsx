import chainsData from '../../data/chains.json';

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

interface SupportedAccountsSectionProps {
  chainId?: number;
}

export default function SupportedAccountsSection({ chainId }: SupportedAccountsSectionProps) {
  // Filter chains by chainId if provided
  const filteredChains = chainId
    ? (chainsData as ChainData[]).filter(chain => chain.chain_id === chainId)
    : (chainsData as ChainData[]);

  if (filteredChains.length === 0) {
    return <p>No account data available for this chain.</p>;
  }

  // Get the chain data
  const chainData = filteredChains[0];
  
  // Get all entrypoint versions for this chain
  const entrypointVersions = Object.keys(chainData.entrypoints).sort();
  
  // Get all account names for this chain
  const accountNames = Object.keys(chainData.accounts)
    .filter(accountName => chainData.accounts[accountName].supported)
    .sort();

  return (
    <div>
      <table className="vocs_Table">
        <thead>
          <tr>
            <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Entrypoint / Account</th>
            {accountNames.map((accountName) => (
              <th key={accountName} className="vocs_TableHeader" style={{textAlign: 'center'}}>
                {accountName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entrypointVersions.map((entrypointVersion) => (
            <tr key={entrypointVersion} className="vocs_TableRow">
              <td className="vocs_TableCell" style={{fontWeight: 'bold'}}>{entrypointVersion}</td>
              {accountNames.map((accountName) => {
                const accountData = chainData.accounts[accountName];
                const supportsEntrypoint = accountData.entrypoints.includes(entrypointVersion);
                return (
                  <td key={accountName} className="vocs_TableCell" style={{textAlign: 'center'}}>
                    {supportsEntrypoint ? '✅' : '❌'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
