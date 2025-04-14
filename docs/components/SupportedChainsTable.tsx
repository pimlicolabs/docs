import supportedChains from '../../data/supported-chains.json';

type Chain = {
  chain_id: number;
  slug: string;
} | null;

type ChainData = {
  name: string;
  mainnet: Chain;
  testnet: Chain;
};

export default function SupportedChainsTable() {
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
        {(supportedChains as ChainData[]).map((chain, index) => (
          <tr key={index} className="vocs_TableRow">
            <td className="vocs_TableCell">{chain.name}</td>
            <td className="vocs_TableCell">
              {chain.mainnet ? (
                <>✅ {chain.mainnet.chain_id} ({chain.mainnet.slug})</>
              ) : (
                ''
              )}
            </td>
            <td className="vocs_TableCell">
              {chain.testnet ? (
                <>✅ {chain.testnet.chain_id} ({chain.testnet.slug})</>
              ) : (
                ''
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
