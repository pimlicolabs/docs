// [!region main]
import { Passport, TESTNET_RSA_PUBLIC_KEY } from "@0xpass/passport";
import { KeySigner } from "@0xpass/key-signer";
import { createPassportClient } from "@0xpass/passport-viem";
import { walletClientToSmartAccountSigner } from "permissionless";
import { http } from "viem";
import { sepolia } from "viem/chains";

const passport = new Passport({
  scope_id: "scope_id",
  signer: new KeySigner(process.env.PRIVATE_KEY!, true),
  enclave_public_key: TESTNET_RSA_PUBLIC_KEY,
});

const fallbackProvider = http("https://rpc.ankr.com/eth_sepolia");

await passport.setupEncryption();
await passport.delegatedRegisterAccount({ username: "test" });

passport.setUserData({ username: "test" });

const client = await createPassportClient(
  await passport.getDelegatedAuthenticatedHeaders(),
  fallbackProvider,
  sepolia,
  "https://tiramisu.0xpass.io"
);

const smartAccountSigner = walletClientToSmartAccountSigner(client);
// [!endregion main]
