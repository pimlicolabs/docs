import { defineConfig } from "vocs";
import viteConfig from "./utils";
import { guidesSidebar } from "./sidebars/guides";
import {
	platformSidebar,
	bundlerSidebar,
	paymasterSidebar,
	// flashFundSidebar,
	permissionlessSidebar,
	permissionlessWagmiSidebar,
	permissionlessSidebar0Point1,
} from "./sidebars/references";

export default defineConfig({
	title: "Pimlico",
	logoUrl: { light: "/pimlico-purple.svg", dark: "/pimlico-white.svg" },
	iconUrl: "/favicons/favicon.svg",
	titleTemplate: "%s | Pimlico Docs",
	editLink: {
		pattern: "https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path",
		text: "Edit on GitHub",
	},
	description:
		"Pimlico is the world's most popular account abstraction infrastructure platform",
	head: () => (
		<>
			<script src="/posthog.js" />
			<link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
			<link rel="icon" type="image/png" href="/favicons/favicon.png" />
			<link rel="shortcut icon" href="/favicons/favicon.ico" />
			<link rel="apple-touch-icon" href="/favicons/favicon.png" />
		</>
	),
	banner: {
		content: (
			<a
				href="https://twitter.com/pimlicoHQ/status/1721890681185321018"
				target="_blank"
				rel="nofollow noreferrer"
			>
				🎉 We raised $4.2 million from a16z to power Ethereum's transition to
				smart accounts! Read more →
			</a>
		),
		dismissable: true,
		backgroundColor: "#3c393f",
		textColor: "#eeeef0",
	},
	vite: viteConfig,
	sidebar: {
		"/guides": guidesSidebar,
		"/references": [
			{
				text: "Platform",
				link: "/references/platform",
				items: platformSidebar,
			},
			{
				text: "Bundler",
				link: "/references/bundler",
				items: bundlerSidebar,
			},
			{
				text: "Paymaster",
				link: "/references/paymaster",
				items: paymasterSidebar,
			},
			// {
			// 	text: "FlashFund",
			// 	link: "/references/flash-fund",
			// 	items: flashFundSidebar,
			// },
		],
		"/references/permissionless": [
			{
				link: "/references/permissionless",
				text: "permissionless.js Core",
				items: permissionlessSidebar,
			},
			{
				link: "/references/permissionless/wagmi",
				text: "permissionless.js Wagmi",
				items: permissionlessWagmiSidebar,
			},
		],
		"/references/permissionless/v0_1": permissionlessSidebar0Point1,
	},
	ogImageUrl: {
		"/": "https://docs-og-pimlico.vercel.app/api/og?logo=%logo&title=%title&description=%description",
	},
	rootDir: "docs",
	theme: {
		accentColor: { light: "#7115AA", dark: "#a66cc9" },
	},
	socials: [
		{
			icon: "github",
			link: "https://github.com/pimlicolabs",
		},
		{
			icon: "telegram",
			link: "https://t.me/pimlicoHQ",
		},
		{
			icon: "x",
			link: "https://twitter.com/pimlicoHQ",
		},
		{
			icon: "warpcast",
			link: "https://warpcast.com/~/channel/pimlico",
		},
	],
	topNav: [
		{
			text: "Guides",
			link: "/guides/getting-started",
			match: "/guides",
		},
		{
			text: "References",
			items: [
				{ text: "permissionless.js", link: "/references/permissionless" },
				{ text: "Platform", link: "/references/platform" },
				{ text: "Bundler", link: "/references/bundler" },
				{ text: "Paymaster", link: "/references/paymaster" },
				// { text: "FlashFund", link: "/references/flash-fund" },
			],
			match: "/references",
		},
		{
			text: "Dashboard",
			link: "https://dashboard.pimlico.io",
		},
	],
});
