import chainsData from '../../data/chains.json';

type ChainData = {
  chain_id: number;
  display_name: string;
  slug: string;
  priority: boolean;
  mainnet: boolean;
  entrypoints: Record<string, string>;
  accounts: Record<string, {
    supported: boolean;
    entrypoints: string[];
  }>;
};

interface ChainPair {
  mainnet?: ChainData;
  testnet?: ChainData;
}

export default function SupportedChainsTable() {
  // Sort chains by priority first, then by display name
  const sortedChains = [...(chainsData as ChainData[])].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority ? -1 : 1; // Priority chains first
    }
    return a.display_name.localeCompare(b.display_name);
  });

  // Group chains by display name to pair mainnet and testnet versions
  const chainsByName: Record<string, ChainPair> = {};
  
  sortedChains.forEach(chain => {
    const name = chain.display_name;
    if (!chainsByName[name]) {
      chainsByName[name] = {};
    }
    
    if (chain.mainnet) {
      chainsByName[name].mainnet = chain;
    } else {
      chainsByName[name].testnet = chain;
    }
  });

  // Create a list of unique chains to display
  const uniqueChains: Array<{name: string, pair: ChainPair}> = [];
  Object.entries(chainsByName).forEach(([name, pair]) => {
    uniqueChains.push({name, pair});
  });

  // Sort the unique chains by priority and name
  uniqueChains.sort((a, b) => {
    const aHasPriority = (a.pair.mainnet?.priority || a.pair.testnet?.priority) === true;
    const bHasPriority = (b.pair.mainnet?.priority || b.pair.testnet?.priority) === true;
    
    if (aHasPriority !== bHasPriority) {
      return aHasPriority ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <table className="vocs_Table">
      <thead>
        <tr>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Chain</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Mainnet</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Testnet</th>
        </tr>
      </thead>
      <tbody>
        {uniqueChains.map(({name, pair}, index) => {
          return (
            <tr key={index} className="vocs_TableRow">
              <td className="vocs_TableCell">{name}</td>
              <td className="vocs_TableCell">
                {pair.mainnet && (
                  <span>✅ {pair.mainnet.chain_id} ({pair.mainnet.slug})</span>
                )}
              </td>
              <td className="vocs_TableCell">
                {pair.testnet && (
                  <span>✅ {pair.testnet.chain_id} ({pair.testnet.slug})</span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
