// [!region setup]
import type { BridgeStatus } from "./types"

const apiKey = "YOUR_PIMLICO_API_KEY"

// Throws the bridge's { code, message } if it rejected the request
const readResponse = async (response: Response) => {
	const body = await response.json()
	if (!response.ok) {
		throw new Error(`${body.code}: ${body.message}`)
	}
	return body
}

const getBridgeStatus = async (requestId: string): Promise<BridgeStatus> => {
	const response = await fetch(
		`https://api.pimlico.io/v1/bridge/status/${requestId}?apikey=${apiKey}`,
	)
	return readResponse(response)
}
// [!endregion setup]

// The response of your bridge request, and the body you sent
declare const result: BridgeStatus
declare const request: object

// [!region poll]
// Polls until the request is no longer pending, or its delivery has failed
const waitForBridge = async (pending: BridgeStatus): Promise<BridgeStatus> => {
	let status = pending
	while (status.status === "pending" && !status.destination.error) {
		await new Promise((resolve) => setTimeout(resolve, 1_000))
		status = await getBridgeStatus(status.requestId)
	}
	return status
}

const final = await waitForBridge(result)
// [!endregion poll]

// [!region outcome]
if (final.status === "success") {
	console.log("Delivered:", final.destination.transactionHash)
} else if (final.status === "failed") {
	console.log("Nothing was bridged")
} else {
	console.log("Delivery failed:", final.destination.error)
}
// [!endregion outcome]

// [!region start]
// Starts the request and returns as soon as the bridge has accepted it
const startBridge = async (body: object): Promise<BridgeStatus> => {
	const response = await fetch(
		`https://api.pimlico.io/v1/bridge/execute?apikey=${apiKey}`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		},
	)
	return readResponse(response)
}

const started = await startBridge(request)
const outcome = await waitForBridge(started)
// [!endregion start]

console.log(outcome)
