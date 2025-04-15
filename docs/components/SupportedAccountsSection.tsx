import supportedAccounts from '../../data/supported-accounts.json';

type AccountData = {
  chain_id: number;
  name: string;
  accounts: Record<string, boolean>;
};

interface SupportedAccountsSectionProps {
  chainId?: number;
}

export default function SupportedAccountsSection({ chainId }: SupportedAccountsSectionProps) {
  // Filter chains by chainId if provided
  const filteredChains = chainId
    ? (supportedAccounts as AccountData[]).filter(chain => chain.chain_id === chainId)
    : (supportedAccounts as AccountData[]);

  if (filteredChains.length === 0) {
    return <p>No account data available for this chain.</p>;
  }

  // Get all unique account names across all chains or the specific chain
  const allAccountNames = new Set<string>();
  filteredChains.forEach((chainData) => {
    Object.keys(chainData.accounts).forEach((accountName) => {
      allAccountNames.add(accountName);
    });
  });
  
  // Convert to sorted array
  const accountNamesList = Array.from(allAccountNames).sort();

  return (
    <div>
      <table className="vocs_Table">
        <thead>
          <tr>
            {!chainId && <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Chain</th>}
            {accountNamesList.map((accountName) => (
              <th key={accountName} className="vocs_TableHeader" style={{textAlign: 'center'}}>
                {accountName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredChains.map((chainData, index) => (
            <tr key={index} className="vocs_TableRow">
              {!chainId && <td className="vocs_TableCell" style={{fontWeight: 'bold'}}>{chainData.name}</td>}
              {accountNamesList.map((accountName) => {
                const isSupported = chainData.accounts[accountName] === true;
                return (
                  <td key={accountName} className="vocs_TableCell" style={{textAlign: 'center'}}>
                    {isSupported ? '✅' : '❌'}
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
