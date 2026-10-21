import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

/**
 * Canonical URLs for docs.pimlico.io.
 *
 * Several pages exist in more than one tree with the same content (older
 * copies kept so existing links and search results keep working). Each copy
 * points its canonical at the current page so search engines index one URL
 * per page. Every other page is self-canonical.
 */

export const siteUrl = "https://docs.pimlico.io";

const pagesDir = fileURLToPath(new URL("./docs/pages", import.meta.url));

/**
 * `[duplicate tree, primary tree]`. A page under the duplicate tree points at
 * the page with the same relative path under the primary tree, if that page
 * exists. First match wins, so more specific trees come first.
 *
 * Not listed on purpose: `/references/permissionless/wagmi/tutorial`, the
 * wagmi tutorials, which share titles with `/guides/tutorials` but are a
 * different tutorial.
 */
const duplicateTrees: readonly (readonly [string, string])[] = [
	// permissionless.js 0.1 docs: same pages, written against the 0.1 API.
	["/references/permissionless/v0_1/how-to", "/guides/how-to"],
	["/references/permissionless/v0_1/tutorial", "/guides/tutorials"],
	[
		"/references/permissionless/v0_1/reference",
		"/references/permissionless/reference",
	],
	["/references/permissionless/v0_1", "/references/permissionless"],
	// Copies left behind when the how-to guides and tutorials moved to /guides.
	["/references/permissionless/how-to", "/guides/how-to"],
	["/references/permissionless/tutorial", "/guides/tutorials"],
	// The ERC-20 paymaster reference lives under /references/paymaster.
	["/guides/how-to/erc20-paymaster", "/references/paymaster/erc20-paymaster"],
];

/**
 * Pages whose counterpart in the primary tree has the same path but different
 * content (a rewritten guide, or a reference whose API changed). They stay
 * self-canonical.
 */
const differentContent = new Set<string>([
	"/references/permissionless/v0_1/faqs",
	"/references/permissionless/v0_1/how-to/migration-guide",
	"/references/permissionless/v0_1/how-to/signers/web3auth",
	"/references/permissionless/v0_1/reference/smart-account-actions/sendTransaction",
	"/references/permissionless/v0_1/reference/smart-account-actions/sendUserOperation",
	"/references/permissionless/v0_1/tutorial/tutorial-2",
	"/references/permissionless/how-to/signers/web3auth",
]);

/**
 * Pairs where the sidebar links the copy rather than the page in the primary
 * tree, so the copy is the one to index.
 */
const primaryOverrides: Readonly<Record<string, string>> = {
	"/guides/how-to/migration-guide":
		"/references/permissionless/how-to/migration-guide",
	"/references/permissionless/how-to/migration-guide":
		"/references/permissionless/how-to/migration-guide",
};

/** `/foo/bar/` → `/foo/bar`; `` → `/`. */
export function normalizePath(path: string): string {
	const trimmed = path.replace(/\.html$/, "").replace(/\/+$/, "");
	return trimmed === "" ? "/" : trimmed;
}

/** Whether `path` is an MDX/Markdown page under docs/pages. */
export function pageExists(path: string): boolean {
	const base = path === "/" ? "/index" : path;
	return [".mdx", ".md", "/index.mdx", "/index.md"].some((ext) =>
		existsSync(`${pagesDir}${base}${ext}`),
	);
}

/** Path of the page that `path` should declare as its canonical. */
export function canonicalPath(rawPath: string): string {
	const path = normalizePath(rawPath);
	if (path in primaryOverrides) return primaryOverrides[path];
	if (differentContent.has(path)) return path;
	for (const [duplicate, primary] of duplicateTrees) {
		if (path !== duplicate && !path.startsWith(`${duplicate}/`)) continue;
		const target = primary + path.slice(duplicate.length);
		return pageExists(target) ? canonicalPath(target) : path;
	}
	return path;
}

export function canonicalUrl(path: string): string {
	const canonical = canonicalPath(path);
	return canonical === "/" ? `${siteUrl}/` : `${siteUrl}${canonical}`;
}

/**
 * Every page whose canonical is another page, as `{ path: canonical URL }`.
 * Vocs stringifies config functions for the browser, so `head` can't call
 * `canonicalUrl`; it looks pages up in this precomputed map instead. Pages
 * not in the map get Vocs' default self-canonical from `baseUrl`.
 */
export function canonicalOverrides(): Record<string, string> {
	const overrides: Record<string, string> = {};
	const files = readdirSync(pagesDir, { recursive: true }) as string[];
	for (const file of files) {
		if (!/\.mdx?$/.test(file)) continue;
		const route = file.replace(/\.mdx?$/, "").replace(/(^|\/)index$/, "");
		const path = normalizePath(`/${route}`);
		if (canonicalPath(path) !== path) overrides[path] = canonicalUrl(path);
	}
	return overrides;
}
