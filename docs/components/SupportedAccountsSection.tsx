import supportedAccounts from '../../data/supported-accounts.json';

type AccountData = {
  chain_id: number;
  name: string;
  accounts: Record<string, boolean>;
};

export default function SupportedAccountsSection() {
  // Get all unique account names across all chains
  const allAccountNames = new Set<string>();
  (supportedAccounts as AccountData[]).forEach((chainData) => {
    Object.keys(chainData.accounts).forEach((accountName) => {
      allAccountNames.add(accountName);
    });
  });
  
  // Convert to sorted array
  const accountNamesList = Array.from(allAccountNames).sort();

  return (
    <div>
      {(supportedAccounts as AccountData[]).map((chainData, index) => (
        <div key={index}>
          <h2 id={`chain-${chainData.name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H2 vocs_Heading">
            {chainData.name}
          </h2>
          <h3 id={`chain-${chainData.name.toLowerCase().replace(/\s+/g, '-')}`} className="vocs_H3 vocs_Heading">
            Accounts
          </h3>
          <table className="vocs_Table">
            <thead>
              <tr>
                <th className="vocs_TableHeader" style={{textAlign: 'left'}}>Account</th>
                <th className="vocs_TableHeader" style={{textAlign: 'center'}}>Supported</th>
              </tr>
            </thead>
            <tbody>
              {accountNamesList.map((accountName) => {
                const isSupported = chainData.accounts[accountName] === true;
                return (
                  <tr key={accountName} className="vocs_TableRow">
                    <td className="vocs_TableCell">{accountName}</td>
                    <td className="vocs_TableCell" style={{textAlign: 'center'}}>
                      {isSupported ? '✅' : '❌'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
