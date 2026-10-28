/**
 * First-party marketing attribution for docs.pimlico.io.
 *
 * Plain-JS port of `lib/attribution.ts` on www.pimlico.io: same cookie names,
 * same base64url(JSON) format and same channel rules, so www, docs and the
 * dashboard read and write one shared pair of cookies on .pimlico.io:
 *
 *   pim_ft  first touch, written once (400 days)
 *   pim_lt  last non-direct touch, overwritten by each new source (90 days)
 *
 * It also decorates clicks to the dashboard and cal.com with the visitor's
 * source, and sends a named `cta_click` event for them. Keep it in sync with
 * www's lib/attribution.ts (tracking audit §4.3–4.4).
 *
 * Loaded async next to /posthog.js (see vocs.config.ts). The two can run in
 * either order: whichever runs second registers the attribution properties
 * with PostHog (registering twice is harmless).
 *
 * Docs have no consent banner and load PostHog on every page, which matches
 * www's 'notice' consent mode. If www moves to 'opt-in', this script needs
 * the same gate.
 */
(() => {
	// React can render <head> scripts more than once; run once per page.
	if (window.pimAttribution) return;
	const FT_COOKIE = "pim_ft";
	const LT_COOKIE = "pim_lt";
	const CLICK_IDS = [
		"gclid",
		"gbraid",
		"wbraid",
		"msclkid",
		"li_fat_id",
		"twclid",
	];
	const UTM = ["source", "medium", "campaign", "term", "content"];

	// Hops that are part of our own journey (our hosts, OAuth, checkout, booking), never a source.
	const SELF =
		/(^|\.)pimlico\.io$|^accounts\.google\.[a-z.]+$|(^|\.)clerk\.|^checkout\.stripe\.com$|(^|\.)cal\.com$|^github\.com\/login/;
	const AI = [
		[/^(chatgpt\.com|chat\.openai\.com|chatgpt|openai)$/, "chatgpt"],
		[/^((www\.)?perplexity\.ai|perplexity)$/, "perplexity"],
		[/^(claude\.ai|claude)$/, "claude"],
		[/^(gemini\.google\.com|gemini)$/, "gemini"],
		[/^(copilot\.microsoft\.com|copilot\.com|copilot)$/, "copilot"],
		[
			/^(chat\.deepseek\.com|grok\.com|you\.com|(www\.)?phind\.com)$/,
			"other_ai",
		],
	];
	const ENGINES = [
		[/(^|\.)google\.[a-z.]+$/, "google"],
		[/(^|\.)bing\.com$/, "bing"],
		[/(^|\.)duckduckgo\.com$/, "duckduckgo"],
		[/^search\.brave\.com$/, "brave"],
		[/(^|\.)yahoo\.[a-z.]+$/, "yahoo"],
		[/(^|\.)ecosia\.org$/, "ecosia"],
		[/(^|\.)yandex\.[a-z.]+$/, "yandex"],
		[/(^|\.)baidu\.com$/, "baidu"],
		[/(^|\.)kagi\.com$/, "kagi"],
	];
	const SOCIAL =
		/(^|\.)(x\.com|t\.co|twitter\.com|linkedin\.com|lnkd\.in|reddit\.com|t\.me|warpcast\.com|farcaster\.xyz|youtube\.com|news\.ycombinator\.com)$/;
	const DEV =
		/(^|\.)(github\.com|stackoverflow\.com|ethereum-magicians\.org|ethresear\.ch|npmjs\.com)$/;

	const match = (value, rules) => {
		if (!value) return undefined;
		const rule = rules.find(([re]) => re.test(value));
		return rule ? rule[1] : undefined;
	};

	// Channel grouping, first matching rule wins (tracking audit §4.3).
	function classify(q, refDomain) {
		const src = (q.get("utm_source") || "").toLowerCase() || undefined;
		const med = (q.get("utm_medium") || "").toLowerCase();
		const ai = match(src, AI) || match(refDomain, AI);
		const engine = ai ? undefined : match(refDomain, ENGINES);
		let channel = "direct";
		if (
			q.get("gclid") ||
			q.get("gbraid") ||
			q.get("wbraid") ||
			q.get("msclkid") ||
			/^(cpc|ppc|paid_search|paidsearch)$/.test(med)
		)
			channel = "paid_search";
		else if (
			q.get("li_fat_id") ||
			q.get("twclid") ||
			/^(paid_social|paidsocial|cpm)$/.test(med)
		)
			channel = "paid_social";
		else if (ai) channel = "ai_assistant";
		else if (med === "email") channel = "email";
		else if (med === "partner") channel = "partner";
		else if (engine) channel = "organic_search";
		else if (refDomain && SOCIAL.test(refDomain)) channel = "organic_social";
		else if (refDomain && DEV.test(refDomain)) channel = "developer_community";
		else if (src || refDomain) channel = "referral";
		return { channel, ai, engine };
	}

	function buildTouch(href, referrer) {
		const url = new URL(href);
		const q = url.searchParams;
		let ref;
		try {
			if (referrer) {
				const r = new URL(referrer);
				ref = r.hostname.toLowerCase();
				// Our own host (incl. preview deployments) and auth/booking hops aren't sources.
				if (ref === url.hostname || SELF.test(ref) || SELF.test(ref + r.pathname))
					ref = undefined;
			}
		} catch {
			ref = undefined;
		}
		const { channel, ai, engine } = classify(q, ref);
		const touch = {
			channel,
			landing: (url.host + url.pathname).slice(0, 200),
			ts: new Date().toISOString(),
		};
		if (ai) touch.ai = ai;
		if (engine) touch.engine = engine;
		if (ref) touch.ref = ref.slice(0, 100);
		for (const k of UTM) {
			const v = q.get(`utm_${k}`);
			if (v) touch[k] = v.slice(0, 100);
		}
		for (const k of CLICK_IDS) {
			const v = q.get(k);
			if (v) touch[k] = v.slice(0, 200);
		}
		return touch;
	}

	// base64url(JSON), the same encoding as www and the dashboard.
	function encodeTouch(t) {
		const bytes = new TextEncoder().encode(JSON.stringify(t));
		let bin = "";
		for (const b of bytes) bin += String.fromCharCode(b);
		return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
	}

	function decodeTouch(v) {
		if (!v) return null;
		try {
			const bin = atob(v.replace(/-/g, "+").replace(/_/g, "/"));
			const parsed = JSON.parse(
				new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))),
			);
			return parsed && typeof parsed.channel === "string" ? parsed : null;
		} catch {
			return null;
		}
	}

	function readCookie(name) {
		const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
		return decodeTouch(m ? m[1] : null);
	}

	function writeCookie(name, t, days) {
		const domain = location.hostname.endsWith("pimlico.io")
			? "; Domain=.pimlico.io"
			: "";
		const secure = location.protocol === "https:" ? "; Secure" : "";
		// biome-ignore lint/suspicious/noDocumentCookie: the Cookie Store API is async and not in every browser; this must be set before the first click.
		document.cookie = `${name}=${encodeTouch(t)}; Max-Age=${days * 86400}; Path=/; SameSite=Lax${domain}${secure}`;
	}

	// PostHog properties for a pair of touches. Click IDs are reduced to a flag.
	function attributionProps(ft, lt) {
		const out = {};
		const add = (prefix, t) => {
			if (!t) return;
			const fields = [
				["channel", t.channel],
				["source", t.source],
				["medium", t.medium],
				["campaign", t.campaign],
				["ai_assistant", t.ai],
				["search_engine", t.engine],
				["referrer_domain", t.ref],
				["landing_path", t.landing],
			];
			for (const [k, v] of fields) if (v) out[`${prefix}_${k}`] = v;
		};
		add("ft", ft);
		add("lt", lt);
		const ids = [ft, lt].some((t) => t && CLICK_IDS.some((k) => t[k]));
		if (ft || lt) out.has_click_id = ids;
		return out;
	}

	function ctaDestination(href) {
		let host;
		try {
			host = new URL(href, location.href).hostname;
		} catch {
			return undefined;
		}
		if (host === "dashboard.pimlico.io") return "dashboard";
		if (host === "cal.com" || host.endsWith(".cal.com")) return "booking";
		return undefined;
	}

	// Append source parameters to a dashboard or cal.com link, never overwriting
	// parameters already on it. Same rules as www's decorate().
	function decorate(href, opts) {
		const dest = ctaDestination(href);
		if (!dest) return href;
		let url;
		try {
			url = new URL(href, location.href);
		} catch {
			return href;
		}
		const ft = readCookie(FT_COOKIE);
		const lt = readCookie(LT_COOKIE) || ft;
		const set = (k, v) => {
			if (v && !url.searchParams.has(k)) url.searchParams.set(k, v);
		};
		if (lt && lt.channel !== "direct") {
			set("utm_source", lt.source || lt.ai || lt.engine || lt.ref);
			set("utm_medium", lt.medium || lt.channel);
			set("utm_campaign", lt.campaign);
			set("utm_term", lt.term);
			set("utm_content", lt.content);
		}
		if (dest === "dashboard") {
			set(
				"ref",
				`${location.hostname.split(".")[0]}${location.pathname}`.slice(0, 100),
			);
		} else {
			set("gclid", lt?.gclid || ft?.gclid);
			set("gbraid", lt?.gbraid || ft?.gbraid);
			set("wbraid", lt?.wbraid || ft?.wbraid);
			set("ft_channel", ft?.channel);
			set("lt_channel", lt?.channel);
			set("landing", ft?.landing);
			set("cta_location", opts.location);
			set("ph_id", opts.distinctId);
		}
		return url.toString();
	}

	// Where on a docs page the link sits: the article body or the top nav.
	function ctaLocation(a) {
		if (a.closest("#vocs-content")) return "docs_content";
		if (a.closest("nav, header")) return "docs_nav";
		return "docs_other";
	}

	// Same split as www: every property as a super property, first touch set
	// once on the person, last touch updated.
	function applyToPosthog(ph) {
		const props = window.pimAttribution || {};
		if (!ph || typeof ph.register !== "function" || !Object.keys(props).length)
			return;
		ph.register(props);
		if (typeof ph.setPersonProperties !== "function") return;
		const once = {};
		const latest = {};
		for (const [k, v] of Object.entries(props)) {
			if (k.startsWith("ft_")) once[k] = v;
			else latest[k] = v;
		}
		ph.setPersonProperties(latest, once);
	}

	// posthog.js and this file load async in either order. Whichever runs
	// second applies the properties, through this one function.
	window.pimAttributionApply = applyToPosthog;

	try {
		// Record this page load's touch.
		const touch = buildTouch(location.href, document.referrer);
		if (!readCookie(FT_COOKIE)) writeCookie(FT_COOKIE, touch, 400);
		if (touch.channel !== "direct") writeCookie(LT_COOKIE, touch, 90);
		const props = attributionProps(
			readCookie(FT_COOKIE),
			readCookie(LT_COOKIE),
		);
		window.pimAttribution = props;
		applyToPosthog(window.posthog);
	} catch {
		/* cookies or URL parsing unavailable: links still work undecorated */
	}

	// Capture phase, so the decorated href is the one the browser follows.
	// auxclick covers middle-click "open in new tab"; right-clicks are ignored.
	function onClick(e) {
		if (e.type === "auxclick" && e.button !== 1) return;
		const a = e.target?.closest?.("a[href]");
		if (!a) return;
		// Decorate a copy of the original href on every click, so a second click
		// (after client-side navigation) carries the current page, not the first.
		const raw = a.dataset.pimHref || a.getAttribute("href") || "";
		const destination = ctaDestination(raw);
		if (!destination) return;
		const ph = window.posthog;
		const distinctId =
			ph && typeof ph.get_distinct_id === "function"
				? ph.get_distinct_id()
				: undefined;
		const where = ctaLocation(a);
		try {
			const decorated = decorate(raw, { location: where, distinctId });
			if (decorated !== raw) {
				a.dataset.pimHref = raw;
				a.setAttribute("href", decorated);
			}
			// Our own conversion hosts may see the referring docs page.
			a.rel = "noopener";
		} catch {
			/* leave the link as it was */
		}
		if (ph && typeof ph.capture === "function") {
			let bookingLink;
			if (destination === "booking") {
				try {
					bookingLink = new URL(raw, location.href).pathname.slice(1);
				} catch {
					bookingLink = undefined;
				}
			}
			ph.capture("cta_click", {
				label: (a.textContent || "").trim().slice(0, 80) || undefined,
				href: raw,
				location: where,
				destination,
				booking_link: bookingLink,
				pathname: location.pathname,
			});
		}
	}
	document.addEventListener("click", onClick, true);
	document.addEventListener("auxclick", onClick, true);
})();
