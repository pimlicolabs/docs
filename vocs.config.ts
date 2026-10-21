import { defineConfig } from "vocs/config";
import { rehypeTwoslashLinks } from "./rehype-twoslash-links";
import {
	canonicalOverrides,
	canonicalPath,
	normalizePath,
	siteUrl,
} from "./seo";
import { guidesSidebar } from "./sidebars/guides";
import {
	bundlerSidebar,
	paymasterSidebar,
	// flashFundSidebar,
	permissionlessSidebar,
	permissionlessSidebar0Point1,
	permissionlessWagmiSidebar,
	platformSidebar,
} from "./sidebars/references";

export default defineConfig({
	title: "Pimlico",
	logoUrl: { light: "/pimlico-purple.svg", dark: "/pimlico-white.svg" },
	iconUrl: "/favicons/favicon.svg",
	titleTemplate: "%s | Pimlico Docs",
	editLink: {
		link: "https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path",
		text: "Edit on GitHub",
	},
	description:
		"Pimlico is the world's most popular account abstraction infrastructure platform",
	// Vocs stringifies config functions for the browser, so this can't call
	// `canonicalUrl` from ./seo. It looks duplicate pages up in a precomputed
	// map instead; every other page keeps the self-canonical Vocs builds from
	// `baseUrl`. `base: false` drops the `<base href>` that `baseUrl` would add,
	// which makes preview deployments load their scripts from production.
	head: new Function(
		"path",
		`const overrides = ${JSON.stringify(canonicalOverrides())};
		const canonical = overrides[path.replace(/\\/+$/, "") || "/"];
		return {
			base: false,
			...(canonical ? { canonical } : {}),
			script: [{ src: "/posthog.js", async: true }],
		};`,
	) as (path: string) => { base: false },
	banner: {
		content:
			"🎉 We raised $4.2 million from a16z to power Ethereum's transition to smart accounts! Read more",
		href: "https://twitter.com/pimlicoHQ/status/1721890681185321018",
		dismissable: true,
		backgroundColor: "#3c393f",
		textColor: "#eeeef0",
	},
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
	ogImageUrl:
		"https://docs-og-pimlico.vercel.app/api/og?logo=%logo&title=%title&description=%description",
	baseUrl: siteUrl,
	srcDir: "docs",
	renderStrategy: "full-static",
	// Duplicate pages point their canonical at another page; list only the
	// pages that are their own canonical.
	sitemap: {
		include: (path) => canonicalPath(path) === normalizePath(path),
	},
	markdown: {
		rehypePlugins: [rehypeTwoslashLinks],
	},
	accentColor: "light-dark(#7115AA, #a66cc9)",
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
			icon: "farcaster",
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
			external: true,
		},
	],
});
