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

export default function SupportedChainsTable() {
  // Sort chains by priority first, then by display name
  const sortedChains = [...(chainsData as ChainData[])].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority ? -1 : 1; // Priority chains first
    }
    return a.display_name.localeCompare(b.display_name);
  });

  return (
    <table className="vocs_Table">
      <thead>
        <tr>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Chain</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Chain ID</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Slug</th>
        </tr>
      </thead>
      <tbody>
        {sortedChains.map((chain, index) => (
          <tr key={index} className="vocs_TableRow">
            <td className="vocs_TableCell">{chain.display_name}</td>
            <td className="vocs_TableCell">{chain.chain_id}</td>
            <td className="vocs_TableCell">{chain.slug}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
