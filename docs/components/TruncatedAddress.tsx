import { useState } from "react";

// Component for displaying a truncated address with a copy button
export default function TruncatedAddress({ address }: { address: string }) {
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