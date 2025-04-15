import supportedEntrypoints from '../../data/supported-entrypoints.json';

type EntrypointData = {
  chain_id: number;
  name: string;
  entrypoints: Record<string, string | null>;
};

export default function SupportedEntrypointsSection({ chainId }: { chainId: number }) {
  // Find the chain data for the specified chainId
  const chainData = (supportedEntrypoints as EntrypointData[]).find(
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
                  {address ? (
                    <code>{address}</code>
                  ) : (
                    <span style={{color: 'var(--vocs-colors-text-secondary)'}}>Not deployed</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
