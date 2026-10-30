## How to use the bundler

:::tip[Tip]
We recommend using [permissionless.js](/references/permissionless/reference/smart-account-actions/sendUserOperation) as the SDK to interact with the bundler as it provides type-safe wrappers for all bundler methods.
:::

ERC-4337 bundlers are relayers that bundle user operations into transactions and submit them to the blockchain. You can interact with bundlers using standard JSON-RPC requests.

To get access to the bundler, you need to use your Pimlico API key. [Create one here](/guides/create-api-key) if you don't have one. Using the API key, you can make the following JSON-RPC requests to the bundler:

* [eth\_sendUserOperation](/references/bundler/endpoints/eth_sendUserOperation)
* [eth\_estimateUserOperationGas](/references/bundler/endpoints/eth_estimateUserOperationGas)
* [eth\_getUserOperationReceipt](/references/bundler/endpoints/eth_getUserOperationReceipt)
* [eth\_getUserOperationByHash](/references/bundler/endpoints/eth_getUserOperationByHash)
* [eth\_supportedEntryPoints](/references/bundler/endpoints/eth_supportedEntryPoints)
* [pimlico\_getUserOperationGasPrice](/references/bundler/endpoints/pimlico_getUserOperationGasPrice)
* [pimlico\_getUserOperationStatus](/references/bundler/endpoints/pimlico_getUserOperationStatus)

If you would like an end-to-end example of how to use the bundler, please refer to [tutorial 1](/references/permissionless/tutorial/tutorial-1) of the permissionless.js documentation.
