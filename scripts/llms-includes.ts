/**
 * Inlines snippet code into the Markdown that `vocs build` writes for AI
 * agents: `llms-full.txt` and the per-page `.md` files. Runs after `vocs build`.
 *
 * Vocs resolves `// [!include ~/snippets/file.ts:region]` for the HTML pages
 * but copies the directive verbatim into the Markdown output, so agents
 * reading it get no code. This replaces each directive with the same code the
 * HTML page shows. Fails if a directive can't be resolved, so a broken
 * snippet path or region is caught at build time.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Static output of `vocs build`. On Vercel, Vocs copies it into the Build
 * Output API layout before this script runs, so edit that copy.
 */
const outDir = process.env.VERCEL
	? join(process.cwd(), ".vercel", "output", "static")
	: join(process.cwd(), "dist", "public");

/** `~` in an include path is the Vocs source directory (`srcDir`). */
const rootDir = join(process.cwd(), "docs");

const includePattern = /^(\s*)\/\/ \[!include ~\/([^\s:\]]+)(?::([\w-]+))?\]\s*$/;
const regionStart = /\/\/ \[!region (.*)\]/;
const regionEnd = /\/\/ \[!endregion (.*)\]/;
const codeAnnotation = /\s*\/\/ \[!code [^\]]+\]/;

/**
 * Same region rules as Vocs' include transformer: a region runs from its
 * `[!region name]` marker to the matching `[!endregion name]`, or to the end
 * of the file, and other region markers inside it are dropped.
 */
function snippet(path: string, region: string | undefined): string[] {
	const code: string[] = [];
	let inRegion = !region;
	for (const line of readFileSync(join(rootDir, path), "utf8").split("\n")) {
		const start = regionStart.exec(line);
		const end = regionEnd.exec(line);
		if (start) {
			if (start[1] === region) inRegion = true;
		} else if (end) {
			if (end[1] === region) inRegion = false;
		} else if (inRegion) {
			code.push(line.replaceAll(/_\$\d*/g, "").replace(codeAnnotation, ""));
		}
	}
	while (code.length > 0 && code[code.length - 1].trim() === "") code.pop();
	if (code.length === 0) throw new Error(`Region "${region}" is empty or missing in ${path}`);
	return code;
}

function inline(markdown: string): { text: string; count: number } {
	let count = 0;
	const text = markdown
		.split("\n")
		.flatMap((line) => {
			const match = includePattern.exec(line);
			if (!match) return [line];
			const [, indent, path, region] = match;
			count++;
			return snippet(path, region).map((code) => (code ? indent + code : code));
		})
		.join("\n");
	return { text, count };
}

function markdownFiles(dir: string): string[] {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) return markdownFiles(path);
		return name.endsWith(".md") || name === "llms-full.txt" ? [path] : [];
	});
}

let total = 0;
for (const file of markdownFiles(outDir)) {
	const { text, count } = inline(readFileSync(file, "utf8"));
	if (count === 0) continue;
	writeFileSync(file, text);
	total += count;
}

console.log(`llms: inlined ${total} snippet includes into the Markdown output`);
