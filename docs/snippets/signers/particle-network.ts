// [!region main]
import { useEthereum } from "@particle-network/authkit";

// Inside your component or app function
const { provider } = useEthereum();

// Assign provider to smartAccountOwner
const smartAccountOwner = provider;
// [!endregion main]
