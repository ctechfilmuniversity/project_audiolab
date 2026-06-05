# Commercial & Content Web

For marketing sites, portfolios, content/editorial sites, e-commerce, and app-like products. Tool picks are **current as of early 2026 — verify with a search before recommending**, since the framework and CMS landscape shifts. The decision *logic* below is durable.

## First fork: code or no-code?

Not every site is worth building from scratch. Recommend honestly:

- **No-code / platform** — Cargo, Framer, Readymag, Webflow, and similar. The right answer when: the client maintains it themselves, the timeline is tight, the budget doesn't justify custom code, or it's a portfolio/brochure site where a platform's polish is enough. Cargo and Readymag in particular suit artist/editorial portfolios; Framer is strong for marketing sites with real design control.
- **Custom code** — when the site needs bespoke interaction, unusual layout/motion, real performance tuning, integrations, scale, or a distinctive identity that platforms flatten. Also when it's a stepping stone to a web app.

Say which one the project actually warrants. A creative technologist's flagship portfolio is often worth custom; a quick client brochure often isn't.

## Frameworks — what to use when

- **Astro** — content-first sites, portfolios, marketing, blogs. Ships zero JS by default and hydrates "islands" only where needed → excellent performance and SEO. The strong default for editorial/content sites, including ones with interactive moments. Pairs beautifully with the islands pattern.
- **Next.js** — the broad default for app-like React sites: dynamic data, auth, dashboards, e-commerce, anything that needs server rendering and a large ecosystem. Verify current routing/rendering conventions (the App Router and React Server Components story keeps evolving).
- **SvelteKit** — lean, fast, less boilerplate; great DX. A strong pick when not tied to React and wanting performance + simplicity.
- **Nuxt** — the Vue-world equivalent of Next; choose when the team/ecosystem is Vue.
- **Remix / React Router** — web-fundamentals-first React framework; strong for data-heavy app UIs. Note its merge/evolution with React Router — verify current naming and status.
- **Plain Vite + a UI library** — when a full meta-framework is overkill (a single-page tool, a toy, an embedded widget).

Heuristic: **content site → Astro; app → Next (or SvelteKit); tiny thing → Vite.** Then verify nothing has shifted.

## Styling

- **Tailwind CSS** — the dominant utility-first approach; fast, consistent, great with component systems. Verify current major version conventions.
- **shadcn/ui** — copy-in component primitives (Radix + Tailwind) you own and restyle; excellent base for product UIs without inheriting a heavy design system. Note it's not a dependency you install-and-forget — components live in your codebase.
- **CSS Modules / vanilla-extract** — scoped, type-safe styling without utilities; good when a team prefers semantic CSS.
- **Modern native CSS** — container queries, `:has()`, nesting, cascade layers, color functions are widely supported now; lean on the platform before adding tooling.

For the actual in-artifact styling work, hand off to the `frontend-design` skill — this reference is about *choosing* the approach, not the token-level execution.

## Content & CMS

Decide based on who edits and how often:

- **No CMS — MDX / Markdown in the repo** — when the developer/artist is the only editor. Simplest, version-controlled, free.
- **Git-based CMS** (e.g. Keystatic, TinaCMS) — editing UI on top of repo content; good middle ground.
- **Headless CMS** — Sanity (flexible, structured content, strong for custom editorial), Payload (TypeScript, self-hostable, increasingly popular), Storyblok/Contentful/Strapi (verify current standing). Reach here when non-technical people edit regularly or content is structured and reused across pages.

Match the CMS weight to the team. Don't put a client on raw MDX; don't burden a solo artist with a headless CMS they have to host.

## E-commerce

- **Shopify** (with Hydrogen for custom React storefronts, or a theme for speed) — the default for real product catalogs and payments without building commerce infrastructure.
- **Snipcart / commerce-in-a-script** — bolt cart/checkout onto an otherwise static site; good for a handful of products.
- **Medusa** — open-source, self-hostable commerce backend for custom builds.
- Heuristic: very few products → snipcart-style add-on; real catalog → Shopify; bespoke needs/scale → Medusa or Shopify Hydrogen. Defer heavy commerce infrastructure until the product count justifies it.

## Deployment & hosting

- **Vercel** — frictionless for Next; great DX, previews, edge. Watch cost at scale.
- **Netlify** — similar, strong for static/Astro/JAMstack.
- **Cloudflare Pages / Workers** — excellent performance and pricing, edge-first; verify framework support for the chosen stack.
- **Static export + any host/CDN** — for purely static sites, cheapest and most durable.

## SEO & discoverability (when it matters)

- Server-render or statically generate anything that needs to rank — client-only SPAs handicap SEO.
- Semantic HTML, proper heading order, meta + Open Graph, structured data (schema.org), a sitemap and robots.txt.
- Performance is an SEO factor: Core Web Vitals feed ranking. See `references/architecture.md`.

## Forms, analytics, the boring essentials

- Forms: a form backend (Formspree-style) for static sites, or framework server actions/API routes for dynamic ones; always validate and protect against spam.
- Analytics: privacy-respecting options (Plausible, Fathom, Umami) over heavyweight trackers when the project allows — better for performance and for EU/GDPR contexts.
- Cookie/consent: only when actually setting non-essential cookies; default to privacy-preserving.

## Quick decision summary

- Artist/brand portfolio, low maintenance → Cargo/Framer, or Astro if custom.
- Marketing site with strong design → Framer (no-code) or Astro + Tailwind (custom).
- Content/editorial with interactive moments → Astro + islands.
- Web app / dashboard / dynamic data → Next or SvelteKit.
- Store → Shopify (real catalog) or snipcart add-on (a few items).

Then **verify current versions and standings with a search** before locking it in.
