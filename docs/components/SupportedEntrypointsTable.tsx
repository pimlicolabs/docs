import supportedEntrypoints from '../../data/supported-entrypoints.json';
import { useState } from 'react';

type Entrypoint = string | null;

type EntrypointData = {
  chain_id: number;
  name: string;
  V06: Entrypoint;
  V07: Entrypoint;
  V08: Entrypoint;
};

// Component for displaying a truncated address with a copy button
function TruncatedAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  const truncatedAddress = `${address.substring(0, 14)}...`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{truncatedAddress}</span>
      <button 
        onClick={copyToClipboard}
        style={{ 
          marginLeft: '8px', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          padding: '2px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Copy full address"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function SupportedEntrypointsTable() {
  return (
    <table className="vocs_Table">
      <thead>
        <tr>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Chain</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>v0.6</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>v0.7</th>
          <th className="vocs_TableHeader" style={{textAlign: 'left'}}>v0.8</th>
        </tr>
      </thead>
      <tbody>
        {(supportedEntrypoints as EntrypointData[]).map((entrypoint, index) => (
          <tr key={index} className="vocs_TableRow">
            <td className="vocs_TableCell">{entrypoint.name} ({entrypoint.chain_id})</td>
            <td className="vocs_TableCell">
              {entrypoint.V06 ? (
                <TruncatedAddress address={entrypoint.V06} />
              ) : (
                '❌'
              )}
            </td>
            <td className="vocs_TableCell">
              {entrypoint.V07 ? (
                <TruncatedAddress address={entrypoint.V07} />
              ) : (
                '❌'
              )}
            </td>
            <td className="vocs_TableCell">
              {entrypoint.V08 ? (
                <TruncatedAddress address={entrypoint.V08} />
              ) : (
                '❌'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
