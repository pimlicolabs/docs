import {
	ArrowRight,
	ArrowUpRight,
	Bot,
	Fuel,
	type LucideIcon,
	Rocket,
	ShieldCheck,
	Wallet,
	WalletCards,
} from "lucide-react";
import type { ReactNode } from "react";
import { HomePage, Link } from "vocs";
import "./Home.css";

// The docs landing page: a short intro, then an index of the guides grouped by
// task, then the product references. Every `to` must be a real page; the
// link-check workflow crawls them.

type Entry = { text: string; to: string };

const guideGroups: { title: string; icon: LucideIcon; links: Entry[] }[] = [
	{
		title: "Get started",
		icon: Rocket,
		links: [
			{ text: "Overview", to: "/guides/getting-started" },
			{ text: "Create an API key", to: "/guides/create-api-key" },
			{
				text: "Send your first gasless transaction",
				to: "/guides/tutorials/tutorial-1",
			},
			{ text: "Supported chains", to: "/guides/supported-chains" },
		],
	},
	{
		title: "Payments",
		icon: WalletCards,
		links: [
			{
				text: "Send USDC without ETH",
				to: "/guides/how-to/payments/send-usdc-without-eth",
			},
			{
				text: "Accept USDC from an EOA",
				to: "/guides/how-to/payments/accept-usdc-from-eoa",
			},
			{ text: "Send payouts at scale", to: "/guides/how-to/payments/payouts" },
			{
				text: "Send gasless remittances",
				to: "/guides/how-to/payments/remittances",
			},
			{
				text: "Swap without ETH",
				to: "/guides/how-to/payments/swap-without-eth",
			},
			{
				text: "Pay gas from the swapped token",
				to: "/guides/how-to/payments/pay-gas-from-swapped-token",
			},
		],
	},
	{
		title: "Gas sponsorship",
		icon: Fuel,
		links: [
			{
				text: "Sponsor transaction fees",
				to: "/guides/how-to/paymasters/sponsor-transaction-fees",
			},
			{
				text: "Sponsor conditionally",
				to: "/guides/how-to/paymasters/conditional-sponsoring",
			},
			{
				text: "Use sponsorship policies",
				to: "/guides/how-to/sponsorship-policies",
			},
			{
				text: "Let users pay gas in ERC-20 tokens",
				to: "/guides/how-to/erc20-paymaster/how-to/use-paymaster",
			},
			{ text: "Sponsor transactions on Solana", to: "/guides/how-to/solana" },
		],
	},
	{
		title: "Smart accounts",
		icon: Wallet,
		links: [
			{
				text: "Batch multiple transactions",
				to: "/guides/tutorials/send-transaction",
			},
			{
				text: "Send user operations in parallel",
				to: "/guides/how-to/parallel-transactions",
			},
			{ text: "Send from an EOA with EIP-7702", to: "/guides/eip7702/demo" },
			{ text: "Add social login", to: "/guides/how-to/signers/social-logins" },
			{ text: "Use a passkey signer", to: "/guides/how-to/signers/passkey" },
			{
				text: "Compare smart account types",
				to: "/guides/how-to/accounts/comparison",
			},
		],
	},
	{
		title: "Production",
		icon: ShieldCheck,
		links: [
			{
				text: "Protect your API keys",
				to: "/guides/how-to/security/protect-api-keys",
			},
			{
				text: "Debug user operations",
				to: "/guides/how-to/debugging/user-operations",
			},
			{
				text: "Debug dropped user operations",
				to: "/guides/how-to/debugging/dropped-user-operations",
			},
			{ text: "Test locally with Prool", to: "/guides/how-to/testing/prool" },
		],
	},
	{
		title: "AI agents",
		icon: Bot,
		links: [
			{
				text: "Pay gas for an AI agent's wallet",
				to: "/guides/how-to/agents/pay-gas-for-ai-agents",
			},
			{
				text: "Use the CLI from AI agents",
				to: "/references/platform/cli",
			},
		],
	},
];

const products: (Entry & { description: string })[] = [
	{
		text: "permissionless.js",
		to: "/references/permissionless",
		description:
			"TypeScript library built on viem for smart accounts, bundlers and paymasters.",
	},
	{
		text: "Bundler",
		to: "/references/bundler",
		description:
			"Alto, the open-source ERC-4337 bundler, and its JSON-RPC methods.",
	},
	{
		text: "Paymasters",
		to: "/references/paymaster",
		description: "Sponsor gas for users, or let them pay it in ERC-20 tokens.",
	},
	{
		text: "Platform",
		to: "/references/platform",
		description: "The REST API for sponsorship policies and the pimlico CLI.",
	},
];

// `children` is the CLI install snippet, written as a code block in
// index.mdx so it gets the Vocs code block styling and copy button.
export function Home({ children }: { children?: ReactNode }) {
	return (
		<div className="Home">
			<header className="Home-intro">
				<div>
					<h1 className="Home-title">Documentation</h1>
					<p className="Home-lede">
						Guides and API references for building with{" "}
						<span className="Home-nowrap">ERC-4337</span> smart accounts: the
						bundler, paymasters and permissionless.js.
					</p>
					<div className="Home-actions">
						<HomePage.Button
							className="Home-button"
							href="/guides/getting-started"
							variant="accent"
						>
							Get started
							<ArrowRight aria-hidden size={16} />
						</HomePage.Button>
						<HomePage.Button
							className="Home-button"
							href="https://dashboard.pimlico.io"
						>
							Open dashboard
							<ArrowUpRight aria-hidden size={16} />
						</HomePage.Button>
						<p className="Home-actionsNote">
							API keys, sponsorship policies, balance and usage.
						</p>
					</div>
				</div>
				{children ? (
					<div className="Home-cli">
						{children}
						<Link className="Home-cliLink" to="/references/platform/cli">
							Other install options and MCP setup
							<ArrowRight aria-hidden size={14} />
						</Link>
					</div>
				) : null}
			</header>

			<section aria-labelledby="home-guides" className="Home-section">
				<h2 className="Home-heading" id="home-guides">
					Guides
				</h2>
				<div className="Home-guides">
					{guideGroups.map(({ title, icon: Icon, links }) => (
						<nav aria-label={title} key={title}>
							<h3 className="Home-groupTitle">
								<Icon
									aria-hidden
									className="Home-groupIcon"
									size={16}
									strokeWidth={1.75}
								/>
								{title}
							</h3>
							<ul className="Home-links">
								{links.map(({ text, to }) => (
									<li key={to}>
										<Link className="Home-link" to={to}>
											{text}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
			</section>

			<section aria-labelledby="home-products" className="Home-section">
				<h2 className="Home-heading" id="home-products">
					References
				</h2>
				<ul className="Home-products">
					{products.map(({ text, to, description }) => (
						<li key={to}>
							<Link className="Home-product" to={to}>
								<span className="Home-productName">
									{text}
									<ArrowRight
										aria-hidden
										className="Home-productArrow"
										size={14}
									/>
								</span>
								<span className="Home-productText">{description}</span>
							</Link>
						</li>
					))}
				</ul>
			</section>

			<footer className="Home-footer">
				<p>
					Need help? Email{" "}
					<a href="mailto:support@pimlico.io">support@pimlico.io</a> for bug
					reports, incidents and questions about the services.
				</p>
				<p>
					Follow <a href="https://twitter.com/pimlicoHQ">@pimlicoHQ</a> and the
					team (<a href="https://twitter.com/kristofgazso">@kristofgazso</a>,{" "}
					<a href="https://twitter.com/plusminushalf">@plusminushalf</a>,{" "}
					<a href="https://twitter.com/nikmel2803">@nikmel2803</a>,{" "}
					<a href="https://twitter.com/0xmouseless">@0xmouseless</a>,{" "}
					<a href="https://twitter.com/fastfourier_eth">@fastfourier_eth</a>),
					join the{" "}
					<a href="https://t.me/+emlONDb-lXI4ZTFh">4337 Mafia discussions</a>,
					star{" "}
					<a href="https://github.com/pimlicolabs/permissionless.js">
						permissionless.js
					</a>{" "}
					and <a href="https://github.com/pimlicolabs/alto">Alto</a> on GitHub,
					or browse{" "}
					<a href="https://github.com/4337Mafia/awesome-account-abstraction">
						awesome-account-abstraction
					</a>
					.
				</p>
			</footer>
		</div>
	);
}
