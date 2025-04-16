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

export default function SupportedEntrypointsSection({ chainId }: { chainId: number }) {
  // Find the chain data for the specified chainId
  const chainData = (chainsData as ChainData[]).find(
    (chain) => chain.chain_id === chainId
  );

  if (!chainData) {
    return <p>No entrypoint data available for this chain.</p>;
  }

  // Get all entrypoint versions
  const entrypointVersions = Object.keys(chainData.entrypoints).sort();

  return (
    <div>
      <table className="vocs_Table">
        <thead>
          <tr>
            <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Version</th>
            <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Address</th>
          </tr>
        </thead>
        <tbody>
          {entrypointVersions.map((version) => {
            const address = chainData.entrypoints[version];
            return (
              <tr key={version} className="vocs_TableRow">
                <td className="vocs_TableCell">{version}</td>
                <td className="vocs_TableCell">
                  <code>{address}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
