export default function VersionWarning({ version }: { version?: string }) {
	switch (version) {
		case "0.1":
			return (
				<aside className="vocs_Callout vocs_Callout_danger">
					<p className="vocs_Paragraph">
						You are viewing permissionless.js v0.1 documentation.{" "}
						<a
							style={{
								color: "var(--vocs-color_textAccent)",
							}}
							href="/references/permissionless"
						>
							Click here
						</a>{" "}
						to view the latest documentation.
					</p>
				</aside>
			);
		default:
			return <></>;
	}
}
