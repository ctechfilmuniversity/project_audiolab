---
name: web-god
description: >-
  Design and build modern websites and web apps with current taste and sound architecture — advise on the stack, then scaffold it.
  Use this whenever the user wants to make, design, plan, build, redesign, audit, modernize, or improve anything that runs in a browser:
  a portfolio, landing page, marketing site, web app, dashboard, e-commerce, or interactive/immersive piece
  (WebGL/WebGPU/Three.js/R3F/WebXR/shaders/audio-reactive/generative). Trigger it for "what should I build this in?",
  "what's the best stack/library for…", "is there a better X for…", "make this site feel more current", "redesign/rebuild this",
  "here's my existing code, improve it", "scaffold a site that…", or any moment where choosing frameworks, libraries, rendering
  strategy, or visual direction matters — and again when it's time to actually write the code. Use it even when the request is
  casual and never says the words "stack" or "architecture."
---

# Web God

This skill does two jobs in sequence: **advise**, then **build**. First it figures out what a project actually needs and recommends a stack + architecture with real reasoning. Then it scaffolds the code. It spans the full range — a quiet editorial portfolio, a luxury brand site, a browser-based AR sound piece, a dashboard — and adapts the recommendation to the project rather than reaching for the same default every time. It handles both greenfield builds and redesigns of existing code.

The goal isn't to know every tool. It's to make *good decisions*: separating what's durable (how rendering works, what a project type needs, what makes a site fast and accessible) from what's dated (which library is winning this quarter, current major versions, what's trending in design) — and to verify the dated parts instead of guessing. And then to build something that actually runs, looks intentional, and isn't generic.

## Core principle: currency is searched, not remembered

The web moves fast and any model's training is a snapshot. The single most common way web advice goes wrong is confidently recommending last year's answer. So before recommending specific tools, versions, or "what's trendy," **search to verify the volatile layer.** Two or three quick searches is enough.

What's safe to assert from knowledge (durable):
- Rendering strategies and when each fits (static, server-rendered, client-rendered, hybrid, islands)
- The categories of decision every web project faces (framework, styling, animation, 3D, data/CMS, build, deploy)
- Performance, accessibility, and architecture principles
- Creative-web patterns (how an audio-reactive pipeline works, how WebXR sits on WebGL)

What to verify by searching (dated):
- Which framework / library is currently favored for a given job, and its current major version
- New entrants that have appeared or tools that have fallen out of favor
- What's actually current in design discourse right now (not "what looked fresh in training data")

Example searches: `best react framework 2026`, `three.js vs <alternative> current`, `web design trends 2026`, `<library name> latest version`, `<library> alternatives 2026`. Lead with the most recent sources; treat marketing copy skeptically; favor what practitioners actually ship.

## The workflow

1. **Triage the project.** Infer as much as possible from what the user already said; confirm only the load-bearing unknowns. Don't interrogate — one tight round of clarification at most.
2. **Check current state** for the volatile choices (search).
3. **Recommend** a stack + architecture as a clear decision: a primary pick with the *why* and its tradeoffs, plus one lighter or heavier alternative. Not a menu of ten — an opinion with reasoning.
4. **Confirm or adjust** with the user before building.
5. **Build.** Scaffold runnable, well-structured code. Hand the in-artifact styling specifics (design tokens, layout constraints for the artifact environment) to the `frontend-design` skill — this skill owns *what to build and why*; `frontend-design` owns *how it's styled in artifacts*. Use both together.

## Triage — the questions that actually change the answer

These are the dimensions that flip the recommendation. Read them off the user's description first; ask only what's genuinely missing.

- **Purpose & content vs interaction:** Is it mostly content to read (leans static/SEO) or an experience to interact with (leans app/creative)?
- **Creative or commercial:** An immersive/3D/generative piece pulls toward `references/creative-web.md`; a marketing/e-commerce/content site pulls toward `references/commercial-web.md`. Many real projects are an editorial site *with* interactive moments — combine, using islands so the heavy stuff loads only where it's needed.
- **Who maintains it:** A non-technical client editing copy needs a CMS or a no-code platform; a solo dev/artist may prefer code + MDX.
- **SEO / discoverability:** Matters for commercial and portfolio reach; near-irrelevant for a one-off installation.
- **Performance & device constraints:** Mobile-heavy audience, slow networks, or a gallery kiosk all change the answer — especially for 3D/audio work.
- **Scope, deadline, hosting constraints:** A weekend build and a flagship launch deserve different stacks. Cargo/Framer/Readymag can be the right answer when custom code isn't worth it.
- **Brand & aesthetic direction:** Feeds the design decisions below.

## What to use when — the decision spine

Map the project to an architecture family, then open the matching reference for specifics:

- **Content / marketing / portfolio**, SEO matters, mostly static → static-generation or hybrid route → `references/commercial-web.md`
- **App-like**: auth, dashboards, real-time, lots of dynamic data → server-rendered / hybrid framework → `references/commercial-web.md` + `references/architecture.md`
- **Immersive / interactive / generative / 3D / audio-reactive / WebXR** → `references/creative-web.md`
- **Editorial site with interactive moments** (the common hybrid) → static/island base + creative islands → combine refs; see islands architecture in `references/architecture.md`

Every project picks one option from each of these layers — framework, styling, animation, 3D (if any), data/CMS, build tooling, deployment. The references carry current per-category recommendations (dated, with a search reminder); `references/tool-catalogue.md` is the full menu of specific libraries organized by category with a *reach-for-it-when* for each. Don't recite the whole matrix at the user; recommend the specific picks for *their* project.

### Quick stack reference (a starting instinct — verify before quoting)

A fast lookup for the common cases, current as of mid-2026. These are *defaults to reason from*, not answers to recite — always confirm currency for the specific project.

| Project | Likely answer | Why |
|---|---|---|
| Artist/brand portfolio, low upkeep | Cargo / Framer, or Astro if custom | Platform polish, or zero-JS performance |
| Marketing site, strong design | Astro + Tailwind (custom) or Framer (no-code) | Fast, SEO-friendly, design control |
| Editorial/content with interactive moments | Astro + islands | Static base, hydrate only the lively bits |
| Web app / dashboard / dynamic data | Next.js, or SvelteKit if not tied to React | SSR/streaming, big ecosystem |
| Store | Shopify (real catalog) / Snipcart (a few items) | Don't build commerce infra you don't need |
| Immersive / 3D / generative | Three.js (+ R3F if React); WebGPU for new ambitious work | The web-3D standard; WebGPU is production-ready now |
| Audio-reactive / instrument | Web Audio API + Tone.js (+ Meyda for features) | Native pipeline, framework for synthesis |
| Premium scroll/motion site | Astro/Next base + GSAP + Lenis | GSAP is free now; Lenis for weight |

## Redesign & audit mode

When the user brings **existing code** ("redesign this", "here's my site, improve it"), don't jump to a rewrite. Diagnose first, then recommend the *smallest intervention that achieves the goal*.

1. **Read the actual code.** Identify the current stack (framework, styling, build, dependencies — check `package.json` if present), the structure, and how it's deployed. Don't assume from a screenshot.
2. **Diagnose honestly:** what's good and worth keeping, what's fighting the project (performance drags, dated patterns, accessibility gaps, generic styling, fragile structure), and what the *real* goal of the redesign is.
3. **Recommend the level of change**, smallest-first:
   - **Reskin** — same structure/stack, new visual language (type, color, spacing, motion). Fastest; right when the bones are fine and only the look is dated.
   - **Rebuild the feel** — keep content and stack, rethink layout/hierarchy/interaction. Right when the structure undersells the work.
   - **Re-architect** — move to a better stack because the current one genuinely limits it (e.g. a heavy SPA that should be static, jQuery soup, no build pipeline). Reserve for when the stack is the actual problem — re-architecting "for cleanliness" is rarely worth the cost to the user.
4. **Preserve what works.** Carry over content, good copy, working integrations, and any distinctive details. A redesign should feel like the same thing made better, not a generic replacement.
5. **Then execute** the agreed level, following the build quality gate below.

## Design currency — current without generic

Looking current and looking generic are different things, and the gap is where good taste lives. Chasing trends produces the same site everyone else shipped this year; ignoring them produces something that reads as dated. The move is *informed intentionality*: know what's current, then choose deliberately.

- Search current design discourse for the year before claiming what's "in." Reference galleries practitioners actually watch (Awwwards, FWA, Godly, Httpster, and similar — verify which are active and relevant).
- Actively avoid the generic-AI-site signature: the centered hero with a gradient blob, the same three SaaS fonts, purple-to-blue everywhere, motion for motion's sake. Name a point of view instead.
- Lead with **typography and rhythm** — they carry more identity than effects. An editorial type system on a restrained grid beats a busy site with a trendy library bolted on.
- Match the aesthetic to the brand's actual world. Premium and editorial means restraint, intention, and craft, not more decoration.

## Build principles

- **Accessibility and performance are structural, not polish.** Semantic HTML, keyboard paths, color contrast, and `prefers-reduced-motion` (essential for motion-heavy and immersive work) get built in from the start. Set a performance budget before adding the fun stuff.
- **Progressively enhance the heavy parts.** A WebGL or audio experience should degrade gracefully where the device or permissions don't cooperate — never a blank screen.
- **Structure for whoever maintains it.** Match the project's complexity; don't hand a client a codebase they can't touch, and don't bury a solo artist in framework ceremony they don't need.
- **Make it runnable.** Scaffold something that actually starts, with a clear file structure and the commands to run it.

## Build quality gate

Before handing over a build, run it past this checklist — these are the things that separate a real deliverable from a demo. Fix what fails; if something can't be met, say so explicitly rather than letting it slide.

- **It runs.** Clear file tree, declared dependencies, exact install/start commands. No missing imports or dead references.
- **It's accessible.** Semantic HTML, logical heading order, keyboard-operable, visible focus, AA contrast, alt text, and `prefers-reduced-motion` honored on anything that moves.
- **It performs.** No needless JS shipped; images in modern formats with dimensions set; fonts subset and `swap`; heavy/3D/audio assets lazy-loaded. A WebGL hero hasn't tanked the metrics.
- **It degrades.** The core content and actions survive if the fancy layer fails or the device can't run it — never a blank screen.
- **It's responsive.** Works from small phone to wide desktop, not just the design width.
- **It doesn't smell generic.** No default-AI signature (centered gradient-blob hero, three SaaS fonts, purple-to-blue, motion for its own sake). There's a point of view, led by typography and rhythm.
- **It matches the brief.** The aesthetic fits the brand's actual world, and the build is the agreed level of change — no silent scope creep into a full rewrite.

## Working with this user (Nina)

Nina is a creative technologist with serious design taste and a technical practice in immersive sound, WebGL/WebXR, and audio-reactive work; she builds via Claude Code and collaborates on real client sites (luxury/cultural brands, artist portfolios). Tune to that:

- **Be opinionated.** Give a clear primary recommendation with reasoning and one alternative — not a long neutral list. Decisiveness reduces overload; a wall of options creates it.
- **Default to taste-forward, premium, editorial.** Anti-generic, anti-New-Age-cliché. Typography-led, intentional, crafted.
- **Sound is first-class.** Web Audio, audio-reactive visuals, and sound-driven interaction are core to her work, not edge cases — reach for them naturally.
- **Stay current proactively.** Surface genuinely new and relevant tools/techniques even when she didn't ask, with a one-line why-it-matters.

## References

- `references/tool-catalogue.md` — the curated menu of libraries/tools by category (physics, motion, 3D, shaders, scroll, creative coding, sound, type, XR, maps, transitions, inspiration), each with a *reach-for-it-when*. Draw recommendations from here.
- `references/creative-web.md` — immersive, 3D, WebGL/WebGPU, WebXR, audio-reactive, generative, motion, physics: the patterns and decisions.
- `references/commercial-web.md` — frameworks, styling, CMS, e-commerce, no-code platforms, deployment, SEO.
- `references/architecture.md` — rendering strategies, performance, accessibility, state, data, decision trees.
