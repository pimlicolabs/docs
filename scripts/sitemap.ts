/**
 * Writes `sitemap.xml` into the build output. Runs after `vocs build`.
 *
 * Walks every prerendered page and lists the ones that are their own
 * canonical: a page whose canonical points at another page is a duplicate
 * and stays out of the sitemap. Fails if a page has no canonical link, so a
 * config change that drops it is caught at build time.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { normalizePath, pageExists, siteUrl } from "../seo";

const outDir = join(process.cwd(), "docs", "dist");

/**
 * Hidden pages: a folder starting with "." is kept out of the navigation, and
 * a route without an MDX/Markdown source (e.g. a component file sitting in
 * docs/pages) is not a documentation page.
 */
function isListed(path: string): boolean {
	if (path === "/404") return false;
	if (path.split("/").some((segment) => segment.startsWith("."))) return false;
	return pageExists(path);
}

function htmlFiles(dir: string): string[] {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) return htmlFiles(path);
		return name.endsWith(".html") ? [path] : [];
	});
}

function pagePath(file: string): string {
	const rel = relative(outDir, file).split(sep).join("/");
	return normalizePath(`/${rel.replace(/(^|\/)index\.html$/, "")}`);
}

const urls: string[] = [];
const missingCanonical: string[] = [];
let duplicates = 0;

for (const file of htmlFiles(outDir)) {
	const path = pagePath(file);
	const html = readFileSync(file, "utf8");
	const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
	if (!canonical) {
		missingCanonical.push(path);
		continue;
	}
	if (!isListed(path)) continue;
	if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) continue;
	const self = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
	if (canonical === self) urls.push(self);
	else duplicates++;
}

if (missingCanonical.length > 0) {
	console.error(
		`sitemap: ${missingCanonical.length} page(s) without a canonical link:\n${missingCanonical.join("\n")}`,
	);
	process.exit(1);
}

urls.sort();
const xml = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...urls.map((url) => `  <url><loc>${url}</loc></url>`),
	"</urlset>",
	"",
].join("\n");
writeFileSync(join(outDir, "sitemap.xml"), xml);

console.log(
	`sitemap: wrote ${urls.length} URLs to sitemap.xml (${duplicates} duplicate page(s) left out)`,
);
