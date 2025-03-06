# Product Context

## Problem Space
Account abstraction in Ethereum aims to solve several key challenges:
- Complex user experience with traditional EOA wallets
- Limited programmability of standard accounts
- High friction for onboarding new users to web3
- Difficulty implementing advanced security features
- Gas payment limitations requiring users to hold native tokens

## Pimlico's Solution
Pimlico provides infrastructure and tools to enable seamless account abstraction implementation:

### Core Components
1. **Permissionless Library**: A TypeScript/JavaScript library for implementing ERC-4337 account abstraction
2. **Bundler Infrastructure**: A service that bundles and submits user operations to the blockchain
3. **Paymaster Services**: Solutions for gas abstraction, including verifying paymasters and ERC-20 paymasters
4. **Platform Tools**: APIs, sponsorship policies, and monitoring tools for developers

### Value Proposition
- **For Developers**: Simplified implementation of account abstraction with robust tools and infrastructure
- **For End Users**: Enhanced wallet experiences with features like social recovery, batched transactions, and gasless transactions
- **For dApps**: Improved user onboarding and retention through better UX

## User Experience Goals
Pimlico's infrastructure enables the following user experiences:
- **Gasless Transactions**: Users can transact without holding native tokens
- **Batched Transactions**: Multiple operations can be executed in a single transaction
- **Session Keys**: Temporary permissions for applications without full wallet access
- **Social Recovery**: Account recovery through trusted contacts
- **Custom Authorization Logic**: Programmable security rules for transactions
- **Sponsored Transactions**: dApps can pay for user transactions

## Market Context
- **Competing Solutions**: Other account abstraction infrastructure providers and alternative approaches
- **Ecosystem Integration**: Compatibility with various wallet providers, dApps, and blockchain networks
- **Standards Compliance**: Adherence to ERC-4337, ERC-7579, and other relevant standards

## Success Metrics
- Developer adoption of Pimlico's infrastructure
- Number of user operations processed
- Variety of smart account implementations supported
- Transaction success rates
- API reliability and performance
- Developer satisfaction and feedback
