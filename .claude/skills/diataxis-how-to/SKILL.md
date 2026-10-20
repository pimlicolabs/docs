---
name: diataxis-how-to
description: Write, rewrite or review a how-to guide in the Pimlico docs so it strictly follows the Diátaxis how-to guide rules (goal-oriented, action only, no teaching or reference dumps, "How to …" titles, conditional imperatives). Use whenever creating or editing a page under docs/pages/guides/how-to/, when asked to write a "guide" for a task, or when asked to check or audit a page against Diátaxis.
---

# Diátaxis how-to guides for the Pimlico docs

Every page under `docs/pages/guides/how-to/` is a Diátaxis **how-to guide**. Apply every rule below strictly. The rules come from [diataxis.fr/how-to-guides](https://diataxis.fr/how-to-guides/); the full source text is in `references/diataxis-how-to-guides.md`. Read it when a case isn't covered here.

The one-line test: **a how-to guide is a recipe for an already-competent developer who knows what they want to do. It contains action and only action.**

## 1. Confirm the page is a how-to guide

Before writing, check the page passes all of these. If it fails, stop and tell the user which Diátaxis type it actually is and where it belongs instead of forcing it into how-to form.

| Check | If it fails, it's… | Belongs in |
| --- | --- | --- |
| It answers one real goal a developer has ("I need to sponsor only a user's first 10 transactions"), not an operation of the tool ("call `sponsorUserOperation`") | a tool walkthrough, so reframe it around the goal | `guides/how-to/` once reframed |
| The goal is specific, not an open-ended skill ("build a wallet") | too broad, so split it into several how-tos | `guides/how-to/` |
| The reader already knows what they want and has basic competence | a **tutorial** (learning-oriented, fixed path, beginner) | `guides/tutorials/` |
| It's mostly about why or how something works | an **explanation** | `guides/conceptual/` |
| It's mostly lists of options, parameters, addresses, chains, tokens or errors | **reference** | `references/` |

Existing pages under `how-to/` that are really reference or explanation (for example `contract-addresses`, `supported-tokens`, `architecture`, `comparison`, `faqs`) are out of scope. Flag them if relevant, but don't move or rename files without asking: a move changes the URL and needs a redirect in `vercel.json`.

## 2. Rules

Rule IDs are used when reviewing (section 4).

### Title and metadata

- **T1. The H1 starts with "How to" followed by a verb and states exactly the result.** `# How to sponsor gas only for a user's first transactions`, not `# Conditional sponsoring` (noun phrase: could be an explanation) or `# Sponsoring user operations conditionally` (gerund: could be about *whether* to).
- **T2. If the frontmatter has a `title`, it matches the H1** (without `#`). Most pages have no `title`; that's fine.
- **T3. Frontmatter `description` states the result the reader gets**, in one sentence, starting with a verb. It's used for SEO, so name the products involved.
- **T4. The sidebar label** in `sidebars/guides.ts` may drop "How to" for brevity, but must still be an imperative ("Sponsor the first N transactions"), never a gerund or noun phrase.

### Opening

- **O1. The first sentence says what the guide shows**: "This guide shows you how to …". Name the problem or task, from the developer's point of view.
- **O2. The opening is at most three sentences**: the goal, the situation it applies to ("If your app …"), and where to go if that isn't the reader's situation. No product pitch, history, or concept explainer. Link to `guides/conceptual/` for background.
- **O3. State prerequisites as things to have, not things to learn**: a Pimlico API key, an existing smart account client, installed packages. Use the install `::::code-group` pattern for packages. Link to a tutorial for readers who don't have them; don't teach them inline.

### Steps

- **S1. The main path is a `::::steps` block** with each step as a `###` heading.
- **S2. Every step heading is an imperative action**: "Create the clients", "Check the balance covers the fee". Not "Clients", "Creating the clients" or "Step 2".
- **S3. Step prose is action, written as imperatives or conditional imperatives**: "To X, do Y." "If you want X, do Y." Describe what to pass, what to check and what to decide, not how the machinery works.
- **S4. Explanation is limited to one sentence per step, and only when it changes what the reader does** (for example "the paymaster collects USDC after the transfer runs, so leave room for the fee"). Anything longer goes in a conceptual page and is linked: "For how the ERC-20 Paymaster prices gas, see [ERC-20 Paymaster architecture](/…)."
- **S5. Address thinking as well as doing.** Where the reader must make a judgement (which paymaster, which EntryPoint version, sponsor or charge), tell them how to decide in conditional form, then continue.
- **S6. Order steps by real dependency first, then by flow**: put a step first when it sets up the environment or the reader's thinking for the next one. Group dashboard actions together and code actions together, so the reader doesn't keep switching between contexts. Don't make the reader hold a question open across several steps or jump back to an earlier one.
- **S7. Don't state the obvious.** Skip steps any competent developer already knows ("open your terminal", "save the file", "import the function you just used").
- **S8. Code comes from snippets** with `// [!include ~/snippets/…:region]`, is TypeScript, and contains only what the step needs. Don't add commented-out alternatives "for completeness".
- **S9. The main path ends when the goal is reached**, ideally with a step the reader can check: a receipt, a transaction hash, a dashboard state. Don't add "Conclusion", "Summary", "Congratulations" or "What you learned" sections.

### Real-world variation

- **V1. Cover the common variations of the goal**, not only the single happy path, so readers can adapt the guide to their own work. Put each variation in its own `##` section after the steps, titled as an imperative goal ("Send from an existing EOA with EIP-7702") or a condition ("If the user has no USDC").
- **V2. Don't try to cover every case.** Cover the ones that change what the reader does, then point to reference for the rest.
- **V3. Don't make the guide end-to-end.** Start and end at a meaningful point and let the reader connect it to their own app. Don't rebuild an entire app around the task.

### What to leave out

- **X1. No teaching**: no "Let's learn", "In this guide we'll explore", "we", "First, let's understand". Address the reader as "you".
- **X2. No reference dumps**: don't list every parameter, option, chain, token or error code. Link instead: "See the [`sponsorUserOperation` reference](/…) for all options."
- **X3. No digressions**: no history, comparisons with other providers, or marketing claims.
- **X4. Callouts carry actions.** `:::warning` is for actions that can lose funds or break production. `:::tip` is for a better way to do a step. Don't put concept explanations in `:::info` or `:::note`.
- **X5. A closing "Notes" list is allowed only if every bullet is a conditional imperative or a link** ("If you prefer a one-time unlimited approval, see …"). Move anything that applies to a single step into that step.
- **X6. End with `## Related`**, linking to the reference pages, conceptual pages and neighbouring how-tos the guide pointed at.

## 3. Page skeleton

~~~~mdx
---
title: How to <verb> <result>
description: <Verb> <result> with <Pimlico product(s)>, <key condition>.
---

# How to <verb> <result>

This guide shows you how to <goal> when <situation>. If <other situation>, see [<other guide>](/guides/how-to/…) instead.

## Prerequisites

- A Pimlico API key. [Create one](/guides/create-api-key).
- <Other thing the reader must already have>.

::::code-group

```bash [npm]
npm install permissionless viem
```

```bash [pnpm]
pnpm install permissionless viem
```

```bash [bun]
bun install permissionless viem
```

::::

## Steps

::::steps

### <Imperative action>

<One or two sentences: what to do, and what to pass or decide.>

```ts
// [!include ~/snippets/<area>/<file>.ts:<region>]
```

### <Imperative action that confirms the goal is reached>

<What the reader should see when it worked.>

::::

## <Variation as an imperative goal or "If …" condition>

<Conditional imperative, then code.>

## Related

- [<Reference page>](/references/…)
- [<Conceptual page>](/guides/conceptual/…)
~~~~

Omit sections that don't apply. Don't add empty ones.

## 4. Reviewing an existing guide

When asked to check, audit or review a how-to page:

1. Run the section 1 check. If the page isn't a how-to, say so and stop.
2. Read the whole page, plus the snippet regions it includes, before judging.
3. Report each violation as `file:line, rule ID, the problem, the suggested rewrite`. Order the report by impact: T and O rules first, then S, V, X.
4. Only edit the page if the user asked for fixes. When rewriting, keep the code and the technical facts unchanged, and keep any sentence you cut that carries real information by moving it to a conceptual or reference page, or by linking to an existing one that covers it. Never delete facts silently.
5. If a fix changes the H1 or title, check `sidebars/guides.ts` for the matching label (rule T4). The URL stays the same unless the user asks to rename the file.

## 5. Language patterns

| Instead of | Write |
| --- | --- |
| "With permissionless.js and viem, you can conditionally sponsor a user operation. This can be useful in situations like …" | "This guide shows you how to sponsor a user's gas only when your own conditions are met, such as their first 10 transactions." |
| "Let's take an example where you want to …" | "To sponsor only the first 10 transactions, …" |
| "First we must create the public and Pimlico clients that will be used to interact with the account." | "Create a public client and a Pimlico client." |
| "The paymaster is a smart contract that pays gas on behalf of users. It works by …" (three sentences) | "For how paymasters pay gas, see [paymasters](/guides/conceptual/…)." |
| "The `paymasterContext` accepts the following fields: `token`, `sponsorshipPolicyId`, …" | "To pay in USDC, pass `paymasterContext: { token: USDC }`. See the [reference](/…) for all fields." |
| "Note: on some chains you might need EntryPoint 0.6." | "If you're on a chain that only supports EntryPoint 0.6, set `entryPoint.version` to `"0.6"`." |
| "## Conclusion: You've now learned how to …" | (delete) |

## 6. Final checklist

Before finishing, confirm every item:

- [ ] Passes the section 1 type check
- [ ] H1 (and `title`, if present) is "How to <verb> <result>" (T1, T2)
- [ ] `description` states the result (T3); sidebar label is imperative (T4)
- [ ] Opens with "This guide shows you how to …" in three sentences or fewer (O1, O2)
- [ ] Prerequisites are things to have, with links for anything not taught (O3)
- [ ] Steps in `::::steps`, every heading imperative (S1, S2)
- [ ] Every paragraph tells the reader what to do or decide; explanation is one sentence per step at most (S3 to S5)
- [ ] No obvious steps, no "we", no teaching, no reference lists, no conclusion (S7, S9, X1 to X3)
- [ ] Common variations sit in their own sections after the steps (V1)
- [ ] Ends with `## Related` (X6)
- [ ] `pnpm build` passes and the page appears in the sidebar
