# Technical Context

## Current Technologies

### Core Technologies
- **TypeScript/JavaScript**: Primary development languages for the permissionless.js library
- **Solidity**: Smart contract language for account implementations and paymasters
- **Ethereum**: Primary blockchain ecosystem, with support for multiple EVM-compatible chains
- **ERC-4337**: Account abstraction standard that defines the core architecture
- **ERC-7579**: Modular smart account standard for extensible account implementations

### Frontend Technologies
- **Viem**: Low-level Ethereum interface library that permissionless.js is built on
- **Wagmi**: React hooks for Ethereum that integrate with permissionless.js
- **React**: UI library supported through Wagmi integration
- **Next.js**: React framework used for documentation and examples

### Backend Technologies
- **Node.js**: Runtime environment for bundler and paymaster services
- **RESTful APIs**: Interface for bundler and paymaster services
- **JSON-RPC**: Protocol for blockchain communication

## Development Environment

### Build Tools
- **pnpm**: Package manager used for dependency management
- **TypeScript**: Typed JavaScript for improved developer experience
- **Vocs**: Documentation framework for the Pimlico docs site
- **MDX**: Markdown extension used for documentation

### Testing Tools
- **Vitest**: Testing framework for TypeScript code
- **Hardhat**: Ethereum development environment for smart contract testing
- **Anvil**: Local Ethereum node for testing

### CI/CD
- **GitHub Actions**: Continuous integration and deployment
- **Vercel**: Hosting platform for documentation

## Technical Constraints

### Blockchain Constraints
- **Gas Costs**: Operations must be optimized for gas efficiency
- **Block Space**: Bundlers must optimize for block space usage
- **Chain Compatibility**: Solutions must work across multiple EVM chains
- **Mempool Rules**: Bundlers must adhere to mempool acceptance ruless

### Smart Contract Constraints
- **Immutability**: Deployed contracts cannot be modified
- **Storage Costs**: On-chain storage is expensive and must be minimized
- **Upgrade Patterns**: Smart accounts need upgrade mechanisms for future improvements
- **Security Considerations**: Smart contracts must be secure against exploits

### API Constraints
- **Rate Limits**: API endpoints have rate limiting
- **Response Times**: Operations must complete within reasonable timeframes
- **Availability**: Services must maintain high availability

## Dependencies

### External Libraries
- **viem**: Ethereum interface library
- **ethers.js**: Alternative Ethereum library (for some integrations)
- **wagmi**: React hooks for Ethereum
- **abitype**: TypeScript types for Ethereum ABIs

### Smart Contract Dependencies
- **EntryPoint Contract**: Core contract for ERC-4337 account abstraction
- **Account Implementation Contracts**: Various smart account implementations
- **Paymaster Contracts**: Contracts for gas sponsorship

### Infrastructure Dependencies
- **RPC Providers**: Ethereum node providers for blockchain access
- **Bundler Nodes**: Services that bundle and submit user operations
- **Paymaster Services**: Services that handle gas sponsorship

## Supported Chains

Pimlico supports multiple EVM-compatible chains, including:

- **Ethereum Mainnet**
- **Optimism**
- **Arbitrum**
- **Polygon**
- **Base**
- **Avalanche**
- **Binance Smart Chain**
- **Zora**
- **Linea**
- **Scroll**
- **Celo**
- **Various testnets**

And a lot more.

## Version Compatibility

### permissionless.js Library Versions
- **v0.2.x**: Current stable version
- **v0.1.x**: Previous versions (deprecated)

### EntryPoint Versions
- **v0.7.0**: Current standard EntryPoint version
- **v0.6.0**: Previous EntryPoint version (still supported)

## API Authentication

- **API Keys**: Required for accessing Pimlico's bundler and paymaster services
- **Rate Limiting**: Based on API key tiers

## Security Considerations

- **Private Key Management**: Signers must securely manage private keys
- **Simulation**: Operations are simulated before execution to prevent unexpected behavior
- **Validation**: Multiple validation steps ensure operations are valid
- **Paymaster Security**: Paymasters implement security measures to prevent abuse
- **Sponsorship Policies**: Rules that define when transactions are sponsored
