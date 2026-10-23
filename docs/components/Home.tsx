import type { ReactNode } from "react";
import { HomePage, Link } from "vocs";
import "./Home.css";

// The docs landing page: a short intro with the user operation flow drawn in
// the wordmark's blocky style, cards for the most common jobs (each with its
// top guides), then the references. Every `to` must be a real page; the
// link-check workflow crawls them.

type Entry = { text: string; to: string };

// Glyphs share the wordmark's construction: thick strokes with rounded outer
// corners on a 32px grid, plus one filled "pixel".
const glyphs = {
	payments: (
		<>
			<path d="M10 4h18v14" />
			<path d="M4 10h18v16H4z" />
			<rect className="Home-fill" height="5" width="5" x="8.5" y="15" />
		</>
	),
	sponsor: (
		<>
			<path d="M5 28V4h14v24" />
			<path d="M19 12h7v12h3V8" />
			<rect className="Home-fill" height="5" width="6" x="9" y="8.5" />
		</>
	),
	token: (
		<>
			<path d="M4 4h24v24H4z" />
			<path d="M11 11h10v10H11z" />
		</>
	),
	batch: (
		<>
			<path d="M4 4h9v9H4zM19 4h9v9h-9zM4 19h9v9H4z" />
			<rect
				className="Home-fill"
				height="10.5"
				width="10.5"
				x="18.25"
				y="18.25"
			/>
		</>
	),
	signers: (
		<>
			<path d="M4 8h12v12H4z" />
			<path d="M16 14h12M24 14v6M20 14v4" />
		</>
	),
	agents: (
		<>
			<path d="M5 11h22v16H5zM16 11V6" />
			<rect className="Home-fill" height="5" width="5" x="13.5" y="1.5" />
			<rect className="Home-fill" height="4" width="4" x="10" y="17" />
			<rect className="Home-fill" height="4" width="4" x="18" y="17" />
		</>
	),
} satisfies Record<string, ReactNode>;

const jobs: { title: string; glyph: keyof typeof glyphs; links: Entry[] }[] = [
	{
		title: "Accept and send payments",
		glyph: "payments",
		links: [
			{
				text: "Send USDC without ETH",
				to: "/guides/how-to/payments/send-usdc-without-eth",
			},
			{ text: "Send payouts at scale", to: "/guides/how-to/payments/payouts" },
			{
				text: "Swap without ETH",
				to: "/guides/how-to/payments/swap-without-eth",
			},
		],
	},
	{
		title: "Sponsor gas",
		glyph: "sponsor",
		links: [
			{
				text: "Sponsor transaction fees",
				to: "/guides/how-to/paymasters/sponsor-transaction-fees",
			},
			{
				text: "Use sponsorship policies",
				to: "/guides/how-to/sponsorship-policies",
			},
			{ text: "Sponsor transactions on Solana", to: "/guides/how-to/solana" },
		],
	},
	{
		title: "Pay gas in ERC-20 tokens",
		glyph: "token",
		links: [
			{
				text: "Use the ERC-20 Paymaster",
				to: "/guides/how-to/erc20-paymaster/how-to/use-paymaster",
			},
			{
				text: "Estimate the token cost",
				to: "/guides/how-to/erc20-paymaster/how-to/calculate-costs",
			},
			{
				text: "Supported tokens",
				to: "/guides/how-to/erc20-paymaster/supported-tokens",
			},
		],
	},
	{
		title: "Batch with smart accounts",
		glyph: "batch",
		links: [
			{
				text: "Batch multiple transactions",
				to: "/guides/tutorials/send-transaction",
			},
			{ text: "Send from an EOA with EIP-7702", to: "/guides/eip7702/demo" },
			{
				text: "Compare smart account types",
				to: "/guides/how-to/accounts/comparison",
			},
		],
	},
	{
		title: "Add logins and signers",
		glyph: "signers",
		links: [
			{ text: "Add social login", to: "/guides/how-to/signers/social-logins" },
			{ text: "Use a passkey signer", to: "/guides/how-to/signers/passkey" },
			{ text: "All signers", to: "/guides/how-to/signers" },
		],
	},
	{
		title: "Build with AI agents",
		glyph: "agents",
		links: [
			{
				text: "Pay gas for an AI agent's wallet",
				to: "/guides/how-to/agents/pay-gas-for-ai-agents",
			},
			{
				text: "Use the Pimlico CLI and MCP server",
				to: "/references/platform/cli",
			},
		],
	},
];

const references: Entry[] = [
	{ text: "permissionless.js", to: "/references/permissionless" },
	{ text: "Bundler", to: "/references/bundler" },
	{ text: "Paymasters", to: "/references/paymaster" },
	{ text: "Platform API", to: "/references/platform" },
];

// A user operation leaves the account, waits in the bundler with others, and
// lands in a block. The packet travels that path once every few seconds.
const packetPath = "M54 138H126V88H206M262 88H300V60H348";

function HeroArt() {
	return (
		<svg
			aria-hidden="true"
			className="Home-art"
			fill="none"
			strokeLinejoin="round"
			viewBox="0 0 400 280"
		>
			<defs>
				<pattern
					height="20"
					id="home-art-grid"
					patternUnits="userSpaceOnUse"
					width="20"
				>
					<rect className="Home-artDot" height="2" width="2" x="9" y="9" />
				</pattern>
			</defs>
			<rect fill="url(#home-art-grid)" height="280" width="400" />

			{/* Account */}
			<path className="Home-accent" d="M22 106h64v64H22z" />
			<path className="Home-accent" d="M40 124h28v28H40z" />

			{/* Bundler with queued user operations */}
			<path className="Home-line" d="M86 138h40V88h24" />
			<path className="Home-strong" d="M150 40h112v196H150z" />
			<path className="Home-faint" d="M170 74h72v28h-72z" />
			<path className="Home-faint" d="M170 122h72v28h-72z" />
			<path className="Home-faint" d="M170 170h72v28h-72z" />
			<rect className="Home-fill" height="12" width="32" x="190" y="212" />

			{/* Blocks on chain */}
			<path className="Home-line" d="M262 88h38V60h20" />
			<path className="Home-strong" d="M320 36h56v48h-56z" />
			<path className="Home-strong" d="M320 116h56v48h-56z" />
			<path className="Home-strong" d="M320 196h56v48h-56z" />
			<path className="Home-line" d="M348 84v32M348 164v32" />
			<rect className="Home-fill" height="16" width="16" x="340" y="52" />

			<rect
				className="Home-fill Home-packet"
				height="12"
				width="12"
				x="-6"
				y="-6"
			>
				<animateMotion
					dur="5s"
					keyPoints="0;0;1;1"
					keyTimes="0;0.15;0.75;1"
					path={packetPath}
					repeatCount="indefinite"
				/>
			</rect>
		</svg>
	);
}

export function Home() {
	return (
		<div className="Home">
			<header className="Home-intro">
				<div>
					<h1 className="Home-title">What are you building?</h1>
					<p className="Home-lede">
						Step-by-step guides for smart accounts, gas sponsorship and
						payments.
					</p>
					<div className="Home-actions">
						<HomePage.Button
							className="Home-button"
							href="/guides/getting-started"
							variant="accent"
						>
							Get started
							<Arrow />
						</HomePage.Button>
						<HomePage.Button
							className="Home-button"
							href="https://dashboard.pimlico.io"
						>
							Open dashboard
							<Arrow external />
						</HomePage.Button>
					</div>
					<p className="Home-actionsNote">
						Create API keys and sponsorship policies in the dashboard.
					</p>
				</div>
				<HeroArt />
			</header>

			<section aria-labelledby="home-guides" className="Home-section">
				<div className="Home-sectionHead">
					<h2 className="Home-heading" id="home-guides">
						Guides
					</h2>
					<Link className="Home-more" to="/guides/getting-started">
						Browse all guides
						<Arrow />
					</Link>
				</div>
				<ul className="Home-jobs">
					{jobs.map(({ title, glyph, links }) => (
						<li className="Home-job" key={title}>
							<svg
								aria-hidden="true"
								className="Home-glyph"
								fill="none"
								strokeLinejoin="round"
								viewBox="0 0 32 32"
							>
								{glyphs[glyph]}
							</svg>
							<h3 className="Home-jobTitle">{title}</h3>
							<ul className="Home-links">
								{links.map(({ text, to }) => (
									<li key={to}>
										<Link className="Home-link" to={to}>
											{text}
										</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>

			<nav aria-label="References" className="Home-references">
				<h2 className="Home-referencesTitle">References</h2>
				<ul>
					{references.map(({ text, to }) => (
						<li key={to}>
							<Link to={to}>{text}</Link>
						</li>
					))}
				</ul>
			</nav>

			<footer className="Home-footer">
				Help: <a href="mailto:support@pimlico.io">support@pimlico.io</a> ·{" "}
				<a href="https://twitter.com/pimlicoHQ">@pimlicoHQ</a> ·{" "}
				<a href="https://t.me/+emlONDb-lXI4ZTFh">4337 Mafia on Telegram</a> ·{" "}
				<a href="https://github.com/pimlicolabs">GitHub</a> ·{" "}
				<a href="https://github.com/4337Mafia/awesome-account-abstraction">
					awesome-account-abstraction
				</a>
			</footer>
		</div>
	);
}

function Arrow({ external = false }: { external?: boolean }) {
	return (
		<svg
			aria-hidden="true"
			className="Home-arrow"
			fill="none"
			stroke="currentColor"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 16 16"
		>
			<path d={external ? "M5 3h8v8M13 3 4 12" : "M2 8h11M9 4l4 4-4 4"} />
		</svg>
	);
}
