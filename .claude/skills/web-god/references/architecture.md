# Web Architecture

The durable layer: rendering strategies, performance, accessibility, state, and data. These principles change slowly — assert them with confidence. Where a specific tool is named, verify current status.

## Rendering strategies — the central decision

How and where HTML gets generated shapes performance, SEO, cost, and complexity.

- **Static Site Generation (SSG)** — pages built at deploy time, served as static files. Fastest, cheapest, most durable, great SEO. Best for content that doesn't change per-request: marketing, portfolios, docs, blogs.
- **Server-Side Rendering (SSR)** — HTML generated per request on the server. Needed for personalized, auth-gated, or frequently changing content. Costs a server and adds latency vs static.
- **Incremental Static Regeneration (ISR)** — static pages that rebuild on a schedule or on-demand. The middle path: mostly-static performance with periodic freshness. Great for content sites with a CMS.
- **Client-Side Rendering (CSR / SPA)** — the browser renders everything after loading JS. Fine for app-like tools behind a login; bad for SEO and slow first paint on heavy apps. Avoid as the default for public content.
- **Streaming / React Server Components** — server renders and streams UI progressively, shipping less JS. The current direction for app frameworks; verify the specific framework's conventions, which are still settling.
- **Islands / partial hydration** — a static HTML base with small interactive components hydrated independently. Astro's model. Ideal for content sites that need a few interactive or creative moments without paying for a full SPA.

**Decision tree:**
1. Is it mostly content to read? → SSG (+ ISR if it updates via CMS).
2. Does it need a few interactive moments on a content base? → islands.
3. Is it personalized / auth-gated / highly dynamic? → SSR or streaming/RSC.
4. Is it a tool behind a login where SEO is irrelevant? → CSR is acceptable.

Most real sites are a *mix* — and modern frameworks let you choose per route. Pick per page, not per project.

## Performance

Treat performance as a budget set *before* building, not a cleanup task after.

- **Core Web Vitals** are the shared language: largest contentful paint (loading), interaction-to-next-paint (responsiveness), cumulative layout shift (visual stability). They also feed SEO. Measure with Lighthouse / WebPageVitals.
- **Ship less JavaScript.** The biggest lever. Prefer static/islands; lazy-load and code-split the heavy parts; don't hydrate what doesn't need to be interactive.
- **Images** are usually the heaviest payload: modern formats (AVIF/WebP), responsive `srcset`/sizes, lazy-loading below the fold, and explicit dimensions to prevent layout shift. Use the framework's image component when it has one.
- **Fonts:** subset, `font-display: swap`, preload the critical face, self-host or use a fast provider. Webfonts are a common silent performance and layout-shift cost.
- **Creative/3D work** needs its own budget — see model/texture/instancing notes in `creative-web.md`. A WebGL hero can erase every other optimization.

## Accessibility

Structural, not optional. It also overlaps heavily with good SEO and good UX.

- **Semantic HTML first** — real headings in order, landmarks, buttons that are buttons and links that are links. Most accessibility comes free from correct markup.
- **Keyboard:** everything operable without a mouse; visible focus states; logical tab order; no traps.
- **Color contrast** meeting WCAG AA; don't rely on color alone to convey meaning.
- **Motion:** honor `prefers-reduced-motion` — critical for animation-heavy and immersive work, where motion can cause real harm (vestibular issues). Provide a calm path.
- **Media:** alt text, captions/transcripts for audio and video. For canvas/WebGL experiences, provide a meaningful text alternative.
- Target **WCAG 2.x AA** as the baseline; it's also a legal requirement in many commercial contexts.

## State management (when you actually need it)

Most sites need far less than people reach for.

- **No library** — for content sites and simple apps, component state + URL params + the platform are plenty.
- **Server state** (TanStack Query and similar) — when the hard problem is fetching, caching, and syncing server data. This, not global client state, is what most "state" problems actually are.
- **Lightweight global client state** (Zustand, Jotai, nanostores, or framework-native stores) — when several distant components share genuinely client-side state. Prefer light over heavy.
- Reach for a big state framework only when complexity truly demands it. Verify current favorites with a search.

## Data fetching

- Fetch on the **server** where you can (SSR/SSG/RSC) — faster, more secure, better SEO than fetching on the client after load.
- Cache deliberately: static where possible, revalidate on a schedule (ISR) or on-demand.
- Never expose secrets or API keys client-side; proxy through the server/edge.
- Keep personal/sensitive data out of URLs and query strings.

## Progressive enhancement

Build a working baseline, then layer enhancement on top. The content and core actions should work even if the fancy JS fails to load or the device can't run it. Especially important for creative/immersive sites: the experience should degrade to something meaningful, never a blank screen.

## Security basics

- Validate and sanitize all input; escape output to prevent XSS.
- Use HTTPS everywhere; set sensible security headers and a content-security-policy.
- Keep secrets server-side; never enter credentials or keys into client code.
- Keep dependencies current and watch for known vulnerabilities.

## Project structure

- Match structure to who maintains it and how it'll grow — don't over-engineer a brochure site or under-structure a real app.
- Co-locate related code; keep a clear separation between content, presentation, and logic.
- Ship something **runnable**: a clear file tree, dependencies declared, and the exact commands to install and start it.
