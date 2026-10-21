import { Callout } from "vocs";

export default function VersionWarning({ version }: { version?: string }) {
	if (version !== "0.1") return null;
	return (
		<Callout variant="danger">
			{/* Callout only wraps plain-text children in its content container. */}
			<div data-v-callout-content data-v-content>
				You are viewing permissionless.js v0.1 documentation.{" "}
				<a href="/references/permissionless">Click here</a> to view the latest
				documentation.
			</div>
		</Callout>
	);
}
