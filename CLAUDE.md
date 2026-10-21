# Pimlico Documentation Repository Guide

This document serves as a comprehensive guide for working with the Pimlico documentation repository. It contains everything you need to know to maintain consistency and quality when adding or modifying documentation.

## Repository Overview

The Pimlico documentation is built using **Vocs v2**, a React-based documentation framework (built on Vite and Waku). The site is deployed on Vercel and uses MDX format for content, allowing React components within markdown files.

### Technology Stack
- **Framework**: Vocs (v2.x)
- **Package Manager**: pnpm (v11.22.0)
- **Language**: TypeScript/MDX
- **Styling**: Tailwind CSS
- **Code Quality**: Biome for linting
- **Deployment**: Vercel
- **Analytics**: PostHog

## Project Structure

```
docs/
├── docs/
│   ├── pages/              # All documentation content
│   │   ├── guides/         # How-to guides, tutorials, conceptual docs
│   │   ├── references/     # API references for all products
│   │   ├── _root.css       # Global styles (loaded on every page)
│   │   └── index.mdx       # Landing page
│   ├── components/         # React components used in docs
│   └── snippets/          # Reusable code examples
├── public/                # Static assets (images, favicons, scripts)
├── sidebars/              # Navigation configuration
├── data/                  # Markdown data files (chains, tokens)
├── scripts/               # Build and data scripts
├── seo.ts                 # Canonical URLs for duplicate pages
├── vocs.config.ts         # Main configuration
├── package.json           # Dependencies and scripts
├── vercel.json           # Deployment configuration
└── biome.json            # Linting rules
```

## Writing Style Guide

### Tone and Voice
- **Technical Level**: Mid-to-high; assumes familiarity with blockchain, Ethereum, TypeScript
- **Voice**: Professional yet approachable; use "you" to address readers
- **Style**: Clear, concise, practical; focus on getting developers productive quickly

### Document Types and Structure

#### 1. Overview/Getting Started Pages
- High-level introduction
- Core products overview
- Quick start section
- Next steps with links

#### 2. Tutorials
- Brief introduction
- Step-by-step instructions using `::::steps` component
- Combined code example at the end
- Practical, working examples

#### 3. How-to Guides
Every page under `docs/pages/guides/how-to/` must strictly follow the Diátaxis how-to rules. Use the `diataxis-how-to` skill (`.claude/skills/diataxis-how-to/SKILL.md`) whenever you write, rewrite or review one.
- Title: "How to <verb> <result>"
- Opens with "This guide shows you how to …"
- Steps using `::::steps` component, with imperative headings
- Action only: no teaching, explanation or reference lists (link to them instead)

#### 4. API References
- Method description
- Usage example (TypeScript)
- Returns section
- Parameters table
- Related methods

#### 5. Conceptual Guides
- Definition of the concept
- Why it's necessary
- How it works
- Pimlico's role/implementation

### MDX Components and Features

#### Steps Component
```mdx
::::steps

:::step[Step Title]
Step content here...
:::

:::step[Another Step]
More content...
:::

::::
```

#### Callouts
```mdx
:::tip[Optional Title]
Helpful tip content
:::

:::info
Information content
:::

:::warning
Warning content
:::

:::note
Note content
:::
```

#### Code Examples
```mdx
```typescript
// Code here
```

// Or include from snippets:
// [!include ~/snippets/path/to/file.ts:section]
```

### Frontmatter Usage

Minimal frontmatter approach:

```yaml
---
title: Page Title  # Optional, used for SEO and navigation
layout: minimal    # Only for special layouts (landing page)
---
```

Most pages don't use frontmatter and rely on H1 headings.

## Navigation Structure

Navigation is configured in `/sidebars/` with two main sections:

### Guides (`/guides/`)
- Getting Started
- EIP-7702
- Tutorials
- How-to Guides (organized by feature)
- Conceptual documentation

### References (`/references/`)
- Platform API
- Bundler endpoints and errors
- Paymaster documentation
- FlashFund
- permissionless.js SDK (v0.1.x and v0.2.x)

Navigation is hierarchical with collapsible sections defined in TypeScript configuration files.

## Code Organization

### Snippets
Reusable code examples are stored in `/snippets/` and included using:
```
// [!include ~/snippets/path/to/file.ts:section]
```

### Components
Custom React components in `/docs/components/` can be imported and used in MDX files. Vocs v2 renders MDX as React Server Components, so a component that uses hooks or browser APIs needs `"use client"` at the top of its file.

## Development Workflow

### Commands
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Adding New Pages

1. **Choose the right location**:
   - `/guides/` for how-to content
   - `/references/` for API documentation
   - Use existing subdirectory structure

2. **Create MDX file** with appropriate name (kebab-case)

3. **Add to sidebar configuration** in `/sidebars/guides.ts` or `/sidebars/references.ts`

4. **Follow the writing style** for your document type

5. **Use consistent patterns**:
   - Code examples with TypeScript
   - Include working examples from `/snippets/`
   - Add appropriate callouts for tips/warnings

### Best Practices

1. **File Naming**: Use kebab-case for all MDX files
2. **URLs**: Will match file structure (no `.mdx` extension in URLs)
3. **Links**: Use absolute paths from docs root: `/guides/conceptual/account-abstraction`
4. **Images**: Store in `/public/` and reference with absolute paths
5. **Code**: Always specify language in code blocks
6. **Ethereum Addresses**: Format as inline code: `0x1234...`

## Common Patterns

### Linking
- Internal: `[Link text](/guides/path/to/page)`
- External: `[Link text](https://example.com)`
- With arrow: `[Learn more →](/path)`

### Lists
- Use bullet points for features, benefits
- Avoid numbered lists except in step-by-step instructions
- Nest lists for detailed explanations

### Technical Values
- Addresses: `0x0000000071727De22E5E9d8BAf0edAc6f37da032`
- Hex values: `0x1234`
- Chain names: Ethereum, Base, Polygon (capitalized)

## Deployment

The site is deployed automatically on Vercel:
- Production deployments on merge to `main`
- Preview deployments for pull requests
- Extensive redirects configured in `vercel.json` for backward compatibility

## Quality Checks

Before committing:
1. Run `pnpm build` to ensure no build errors
2. Check that new pages appear in navigation
3. Verify all links work correctly
4. Ensure code examples are complete and functional
5. Follow the established writing style

## Important URLs and Resources

- **Production Site**: Deployed via Vercel
- **GitHub Edit Links**: Automatically generated for each page
- **Analytics**: PostHog tracking via `/public/posthog.js`

## Configuration Details

### Vocs Configuration (`vocs.config.ts`)
- **Theme**: Purple accent color (#7115AA light, #a66cc9 dark)
- **Logo**: Different logos for light/dark themes
- **Social Links**: GitHub, Telegram, X (Twitter), Farcaster
- **Top Navigation**: Guides, References dropdown, Dashboard link
- **Edit Link Pattern**: Points to GitHub repository
- **Functions are stringified**: Vocs sends config functions such as `head` to the browser as source text, so they can't use imports or outer variables

### Biome Linting Rules
The project uses Biome with specific style rules enforced:
- No parameter reassignment
- Use const assertions
- Default parameters last
- Use enum initializers
- Self-closing elements
- Single var declarator
- No unused template literals

## Content Management Tips

1. **Page Discovery**: Users find content through:
   - Sidebar navigation
   - Search functionality
   - Direct links from other pages
   - Top navigation menu

2. **Information Architecture**:
   - Conceptual → Guides → References (learning path)
   - Group related content in subdirectories
   - Use clear, descriptive titles

3. **Maintenance**:
   - Regular reviews for accuracy
   - Update code examples with SDK changes
   - Maintain consistency across similar pages
   - Keep navigation organized and logical

## Markdown References

- Follow the markdown guide at https://vocs.dev/writing/markdown-extensions for documentation changes

This guide should help you maintain the high quality and consistency of the Pimlico documentation. When in doubt, refer to existing pages of the same type for patterns and conventions.