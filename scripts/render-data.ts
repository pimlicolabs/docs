/**
 * render-data
 *
 * Injects generated markdown artifacts (from `docs-data-updater`, written to
 * `data/*.md`) directly into doc pages, between marker comments. Inlining the
 * tables as literal markdown — rather than importing the data files as MDX
 * components — is what makes their content (chain names, slugs, tokens)
 * discoverable by Vocs' search index, which reads page source and strips
 * imports/components before indexing.
 *
 * Marker convention, inside any `.md`/`.mdx` page under `docs/pages` (the
 * markers are MDX expression comments — opening `{`+slash-star, closing
 * star-slash+`}`):
 *
 *   @data-start: supported-chains   ...content from data/supported-chains.md...   @data-end: supported-chains
 *
 * The marker key maps to `data/<key>.md` by convention. The MDX comment markers
 * are themselves stripped by the indexer, so they stay invisible to readers and
 * to search.
 *
 * Usage:
 *   tsx scripts/render-data.ts           # write injected content into pages
 *   tsx scripts/render-data.ts --check   # exit non-zero if any page is stale
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PAGES_DIR = path.join(ROOT, 'docs', 'pages')
const DATA_DIR = path.join(ROOT, 'data')

const check = process.argv.includes('--check')

const START_RE = /\{\/\* *@data-start: *([\w-]+) *\*\/\}/g

type Replacement = { key: string; full: string; inner: string }

function listPages(dir: string): string[] {
  const out: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...listPages(full))
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) out.push(full)
  }
  return out
}

function readData(key: string): string {
  const dataPath = path.join(DATA_DIR, `${key}.md`)
  if (!fs.existsSync(dataPath))
    throw new Error(`No data file for marker "@data-start: ${key}" (expected ${path.relative(ROOT, dataPath)})`)
  return fs.readFileSync(dataPath, 'utf-8').trim()
}

/** Find every marker block in `content`; throws on an unterminated marker. */
function findBlocks(content: string, file: string): Replacement[] {
  const blocks: Replacement[] = []
  for (const startMatch of content.matchAll(START_RE)) {
    const key = startMatch[1]!
    const startIdx = startMatch.index!
    const endRe = new RegExp(`\\{/\\* *@data-end: *${key} *\\*/\\}`)
    const rest = content.slice(startIdx + startMatch[0].length)
    const endMatch = rest.match(endRe)
    if (!endMatch)
      throw new Error(`Unterminated marker "@data-start: ${key}" in ${path.relative(ROOT, file)} (missing @data-end)`)
    const full = startMatch[0] + rest.slice(0, endMatch.index! + endMatch[0].length)
    const inner = rest.slice(0, endMatch.index!)
    blocks.push({ key, full, inner })
  }
  return blocks
}

function render(content: string, file: string): string {
  let next = content
  for (const block of findBlocks(content, file)) {
    const data = readData(block.key)
    const startTag = `{/* @data-start: ${block.key} */}`
    const endTag = `{/* @data-end: ${block.key} */}`
    next = next.replace(block.full, `${startTag}\n\n${data}\n\n${endTag}`)
  }
  return next
}

let touched = 0
const stale: string[] = []

for (const file of listPages(PAGES_DIR)) {
  const content = fs.readFileSync(file, 'utf-8')
  if (!content.includes('@data-start:')) continue
  const rendered = render(content, file)
  if (rendered === content) continue
  if (check) {
    stale.push(path.relative(ROOT, file))
  } else {
    fs.writeFileSync(file, rendered)
    console.log(`rendered ${path.relative(ROOT, file)}`)
    touched++
  }
}

if (check) {
  if (stale.length) {
    console.error('Data injection out of date. Run `pnpm render-data`. Stale pages:')
    for (const f of stale) console.error(`  - ${f}`)
    process.exit(1)
  }
  console.log('render-data: all pages up to date')
} else {
  console.log(`render-data: ${touched} page(s) updated`)
}
