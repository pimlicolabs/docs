import { type ReactNode, useSyncExternalStore } from "react"
import "./FeePayer.css"

// Lets a page switch its content between "the user pays the network fee" and
// "your app pays it". The choice is kept in the `?fee=` query parameter so a
// variant can be linked to directly.

export type FeePayer = "user" | "app"

const PARAM = "fee"
const DEFAULT: FeePayer = "user"

const options: { value: FeePayer; title: string; description: string }[] = [
	{
		value: "user",
		title: "The user pays in USDC",
		description: "The ERC-20 Paymaster pays the gas and takes the fee from the user's USDC.",
	},
	{
		value: "app",
		title: "Your app pays",
		description: "The verifying paymaster pays the gas and charges your Pimlico balance.",
	},
]

let current: FeePayer | undefined
const listeners = new Set<() => void>()

function readFromUrl(): FeePayer {
	const value = new URLSearchParams(window.location.search).get(PARAM)
	return value === "app" ? "app" : DEFAULT
}

function subscribe(listener: () => void) {
	listeners.add(listener)
	return () => listeners.delete(listener)
}

function getSnapshot(): FeePayer {
	if (current === undefined) current = readFromUrl()
	return current
}

function getServerSnapshot(): FeePayer {
	return DEFAULT
}

function setFeePayer(value: FeePayer) {
	current = value
	const url = new URL(window.location.href)
	if (value === DEFAULT) url.searchParams.delete(PARAM)
	else url.searchParams.set(PARAM, value)
	window.history.replaceState(window.history.state, "", url)
	for (const listener of listeners) listener()
}

function useFeePayer() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function FeePayerSelector() {
	const selected = useFeePayer()

	return (
		<div className="FeePayerSelector">
			<div className="FeePayerSelector-label">Who pays the network fee?</div>
			<div role="radiogroup" aria-label="Who pays the network fee?" className="FeePayerSelector-options">
				{options.map((option) => (
					<button
						key={option.value}
						type="button"
						role="radio"
						aria-checked={option.value === selected}
						onClick={() => setFeePayer(option.value)}
						className="FeePayerSelector-option"
					>
						<div className="FeePayerSelector-title">{option.title}</div>
						<div className="FeePayerSelector-description">{option.description}</div>
					</button>
				))}
			</div>
		</div>
	)
}

export function WhenFeePayer({ is, children }: { is: FeePayer; children: ReactNode }) {
	return useFeePayer() === is ? <>{children}</> : null
}
