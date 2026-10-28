/**
 * Adds a short "Key facts" block under the summary line of `llms.txt` and
 * `llms-full.txt`, so AI agents that read only the top of the file get the
 * current product, chain and pricing facts. Runs after `vocs build`.
 *
 * Keep these in sync with the marketing site's source of truth:
 * `content/stats.ts`, `content/pricing.ts` and `PRODUCT.md` in
 * pimlicolabs/pimlico.io, and /guides/pricing in these docs. Don't add
 * numbers that aren't published there.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** Same output location rule as scripts/llms-includes.ts. */
const outDir = process.env.VERCEL
	? join(process.cwd(), ".vercel", "output", "static")
	: join(process.cwd(), "dist", "public");

const facts = `## Key facts

- Pimlico is the gas sponsorship engine for onchain apps. Apps sponsor their users' transaction fees, or let users pay fees in the stablecoins they already hold, and set policy rules over what gets sponsored.
- EVM: Gas Sponsorship (verifying paymaster), ERC-20 gas (users pay fees in USDC, USDT or 300+ other tokens on Enterprise; pay-as-you-go covers USDC on Ethereum, Polygon, Base, Optimism and Arbitrum), Sponsorship Policies, ERC-4337 bundlers (EntryPoint v0.6, v0.7 and v0.8, and EIP-7702), Boosted Sponsorships and Ecosystem Gas Programs, on 100+ EVM chains.
- Solana: a Kora-compatible fee payer at \`https://solana.pimlico.io/v1/<mainnet|devnet>/rpc?apikey=…\`, using the same API keys. Pimlico pays the fee, or the user pays it in USDC or USDT. Sponsorship policies don't cover Solana yet.
- Pricing: free on testnets. Pay-as-you-go is $0/month with a card: 10M API credits included each month, then $1 per 100k credits, plus a 10% surcharge on gas sponsored on mainnets. Pimlico fronts sponsored gas and bills it monthly, so there is no gas tank to prefund. Enterprise plans have custom rates and SLAs. Details: https://docs.pimlico.io/guides/pricing and https://www.pimlico.io/pricing
- Open source: the Alto bundler (https://github.com/pimlicolabs/alto) and the permissionless.js SDK (https://github.com/pimlicolabs/permissionless.js). Pimlico co-authored ERC-4337, ERC-7677 and ERC-7679.
`;

for (const name of ["llms.txt", "llms-full.txt"]) {
	const file = join(outDir, name);
	if (!existsSync(file)) throw new Error(`llms: ${file} not found`);
	const text = readFileSync(file, "utf8");
	if (text.includes("\n## Key facts\n")) continue;
	// Vocs writes `# <title>`, a blank line, the description, a blank line.
	const lines = text.split("\n");
	if (!lines[0].startsWith("# ") || lines[1] !== "" || lines[3] !== "")
		throw new Error(`llms: unexpected header in ${name}`);
	lines.splice(4, 0, facts);
	writeFileSync(file, lines.join("\n"));
}

console.log("llms: added key facts to llms.txt and llms-full.txt");
