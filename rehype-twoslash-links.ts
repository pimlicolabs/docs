/**
 * Points root-relative links in twoslash hover popups at the library's own
 * docs site.
 *
 * Twoslash renders a library's JSDoc in the popup, and viem's JSDoc links to
 * its docs with root-relative paths like `/docs/actions/public/introduction`.
 * On docs.pimlico.io those paths 404, and Vocs fails the build on them as
 * dead links. Our own pages never live under `/docs/`, so only those links are
 * rewritten.
 */

type Node = {
	type: string;
	tagName?: string;
	properties?: Record<string, unknown>;
	children?: Node[];
};

const libraryDocs: readonly (readonly [prefix: string, origin: string])[] = [
	["/docs/", "https://viem.sh"],
];

function isPopup(node: Node): boolean {
	const className = node.properties?.className ?? node.properties?.class;
	const classes = Array.isArray(className)
		? className
		: String(className ?? "").split(" ");
	return classes.some(
		(name) => typeof name === "string" && name.startsWith("twoslash-popup"),
	);
}

function rewrite(node: Node, inPopup: boolean): void {
	const popup = inPopup || isPopup(node);
	if (popup && node.tagName === "a" && node.properties) {
		const href = node.properties.href;
		if (typeof href === "string") {
			const match = libraryDocs.find(([prefix]) => href.startsWith(prefix));
			if (match) node.properties.href = `${match[1]}${href}`;
		}
	}
	for (const child of node.children ?? []) rewrite(child, popup);
}

export function rehypeTwoslashLinks() {
	return (tree: Node) => rewrite(tree, false);
}
