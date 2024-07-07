// [!region main]
import { Passport, TESTNET_RSA_PUBLIC_KEY } from "@0xpass/passport";
import { WebauthnSigner } from "@0xpass/webauthn-signer";
import { createPassportClient } from "@0xpass/passport-viem";=
import { walletClientToSmartAccountSigner } from "permissionless";
import { http } from "viem";
import { sepolia } from "viem/chains";

const passport = new Passport({
  scope_id: "scope_id",
  signer: new WebauthnSigner({
    rpId: "rpId",
    rpName: "rpName",
  }),
  enclave_public_key: TESTNET_RSA_PUBLIC_KEY,
});

const fallbackProvider = http("https://rpc.ankr.com/eth_sepolia");

await passport.setupEncryption();
await passport.register({
  username: "test",
  userDisplayName: "test",
});

const [authenticatedHeader] = await passport.authenticate({
  username: "test",
  userDisplayName: "test",
});

const client = await createPassportClient(
  authenticatedHeader,
  fallbackProvider,
  sepolia,
  "https://tiramisu.0xpass.io"
);

const smartAccountSigner = walletClientToSmartAccountSigner(client);
// [!endregion main]
