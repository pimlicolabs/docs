import { defineConfig } from "vocs/config";
import { rehypeTwoslashLinks } from "./rehype-twoslash-links";
import {
	canonicalOverrides,
	canonicalPath,
	isLegacyPermissionlessPath,
	legacyPermissionlessPath,
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
	// Default meta description, and the summary line under the title in llms.txt.
	description:
		"Pimlico is the gas sponsorship engine for onchain apps: sponsor your users' gas or let them pay in stablecoins, on 100+ EVM chains and Solana.",
	// Vocs stringifies config functions for the browser, so this can't call
	// `canonicalUrl` from ./seo. It looks duplicate pages up in a precomputed
	// map instead; every other page keeps the self-canonical Vocs builds from
	// `baseUrl`. `base: false` drops the `<base href>` that `baseUrl` would add,
	// which makes preview deployments load their scripts from production.
	//
	// Every page also advertises its Markdown twin (served at `<path>.md`, see
	// the rewrite in vercel.json). The permissionless.js 0.1 pages that are
	// their own canonical are `noindex, follow`: they document a superseded API
	// and compete with the current reference pages. 0.1 pages that already
	// point their canonical at a current page keep only the canonical, so the
	// two signals never conflict.
	head: new Function(
		"path",
		`const overrides = ${JSON.stringify(canonicalOverrides())};
		const route = path.replace(/\\/+$/, "") || "/";
		const canonical = overrides[route];
		const legacy =
			route === "${legacyPermissionlessPath}" ||
			route.startsWith("${legacyPermissionlessPath}/");
		return {
			base: false,
			...(canonical ? { canonical } : {}),
			...(legacy && !canonical ? { meta: { robots: "noindex, follow" } } : {}),
			link: [
				{
					rel: "alternate",
					type: "text/markdown",
					href: (route === "/" ? "/index" : route) + ".md",
				},
			],
			script: [{ src: "/posthog.js", async: true }],
		};`,
	) as (path: string) => { base: false },
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
	// pages that are their own canonical, and leave out the noindexed
	// permissionless.js 0.1 tree.
	sitemap: {
		include: (path) =>
			canonicalPath(path) === normalizePath(path) &&
			!isLegacyPermissionlessPath(path),
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
			text: "Pricing",
			link: "https://www.pimlico.io/pricing",
			external: true,
		},
		{
			text: "Dashboard",
			link: "https://dashboard.pimlico.io",
			external: true,
		},
	],
});
