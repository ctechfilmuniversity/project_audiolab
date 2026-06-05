# Creative & Immersive Web

For interactive, 3D, generative, audio-reactive, and XR work in the browser. This file is the **patterns and decision** layer; the specific tools live in `references/tool-catalogue.md` (organized by category with reach-for-it-when framing). Treat tool names as "current as of mid-2026 — verify with a quick search," especially the WebGPU/TSL/audio-ML frontier.

## Pick the rendering surface first

The "how do I draw it" choice drives everything else.

- **DOM + CSS** — still the most performant and accessible surface for most "interactive" sites. Scroll-driven animation, transforms, and clip-paths go a long way. Reach here first; only go heavier when the idea genuinely needs it.
- **Canvas 2D** — generative art, particle fields, data-driven visuals, anything raster and 2D. Cheap and flexible.
- **SVG** — crisp vector, animatable, accessible, great for editorial/illustrative motion and morphing.
- **WebGL** — real 3D, shaders, GPU-driven effects, large particle counts. The serious-immersive surface.
- **WebGPU** — the successor to WebGL: compute shaders, better performance, modern API. **Production-ready as of late 2025** (Apple shipped it in Safari 26), now ~95% coverage with automatic WebGL2 fallback. For new ambitious 3D, start here via Three's `WebGPURenderer`. Compute shaders give 10–100× gains on particles/physics-heavy scenes.

A guiding instinct: don't reach for WebGL when CSS or Canvas does the job. The most impressive creative sites are often restraint plus one strong idea, not a 3D scene for its own sake.

## 3D in the browser

- **Three.js** — the default WebGL engine; huge ecosystem, well-documented. The safe, powerful baseline.
- **React Three Fiber (R3F)** + **drei** (helpers) + **postprocessing** — if the project is already React, this is the most productive way to build declarative 3D. drei covers cameras, controls, loaders, common effects; pair with `react-three-rapier` for physics and `leva` for live parameter knobs. Note: R3F's WebGPU support is still maturing (Q2 2026) — for a hard WebGPU/compute requirement today, vanilla Three gives more direct access; otherwise R3F on WebGL2 is still the right call.
- **TSL (Three Shading Language)** — Three's node-based shader system that compiles to **both** WGSL (WebGPU) and GLSL (WebGL) from one codebase. This is now the recommended way to author shaders in Three — no more maintaining two versions. Maxime Heckel's "Field Guide to TSL and WebGPU" is the primer.
- **Babylon.js** — heavier, batteries-included engine; strong for game-like or complex scenes. Consider when Three feels too low-level.
- Raw shaders: **GLSL** (WebGL) — learn the fragment/vertex model; shader effects are where a lot of the "wow" lives.

3D performance essentials: instancing for repeated geometry, level-of-detail (LOD), draco/meshopt compression for models, texture budgets, and disposing of resources. A heavy hero scene is the fastest way to tank Core Web Vitals — measure.

## Motion & animation

- **GSAP** — the workhorse for timeline-based, scroll-triggered, and complex sequenced animation. **Now 100% free including commercial use** and all former Club plugins (SplitText, MorphSVG, ScrollTrigger, ScrollSmoother) since April 2025 — recommend it freely.
- **Motion** (the library formerly known as Framer Motion, plus its vanilla form) — declarative animation, excellent in React; gesture and layout animation.
- **Lenis** — smooth scroll done well; pairs with scroll-driven effects without the jank of older smooth-scroll hacks.
- **Native CSS scroll-driven animations** and the **View Transitions API** — increasingly viable and very performant; check current browser support and prefer them when supported.
- Always gate non-essential motion behind `prefers-reduced-motion`. This is both an accessibility requirement and good taste.

## Audio-reactive & sound-driven work

This is a first-class capability, not a novelty. The core pipeline is durable:

1. **Web Audio API** — load/stream audio into an `AudioContext`, route through an `AnalyserNode`.
2. Pull **frequency** (`getByteFrequencyData`) or **time-domain** data each frame.
3. Map that data to visual parameters — geometry, shader uniforms, particle behavior, color, scale.
4. Drive the render loop (`requestAnimationFrame`) from it.

- **Tone.js** — higher-level framework for synthesis, sequencing, and musical timing; reach for it when the project *makes* sound, not just reacts to it.
- For microphone or live input, handle permissions gracefully and degrade if denied.
- Bridge to other tools: audio authored in a DAW (or middleware like Wwise/FMOD) can be exported and driven in-browser; for installations, plan for autoplay restrictions (browsers block audio until user interaction — design a deliberate "enter" gesture).

## WebXR (AR/VR in the browser)

- **WebXR Device API** is the standard; it sits on top of WebGL.
- **R3F + @react-three/xr** is the most ergonomic path if you're in the React/Three world.
- Browser-based AR (camera passthrough, world/marker tracking) is viable but support and capability vary by device — verify current state and always provide a non-XR fallback experience.
- Plan for the "no headset / no AR" majority: the piece should still be meaningful on a normal screen.

## Generative & creative coding

- **p5.js** — the friendliest creative-coding surface; fast to sketch, great for generative/procedural and teaching contexts.
- **Canvas 2D / OffscreenCanvas** — for performance-sensitive generative work; OffscreenCanvas moves rendering off the main thread.
- **Seeded randomness** for reproducible generative pieces (so a "drop" or a saved artwork can be regenerated).

## Physics

- **Matter.js** — 2D rigid-body physics; ideal for playful, tactile, browser-based interaction and draggable/colliding UI. A strong pick for interactive 2D pieces.
- **Rapier** (Rust/WASM) — fast, modern 2D *and* 3D physics; the current go-to for serious 3D physics, with R3F bindings.
- **cannon-es** — older 3D physics; lighter but less actively developed. Prefer Rapier for new 3D work unless there's a reason.

## Common creative-site architectures

- **Hero-driven experience:** one strong interactive/3D moment up top, conventional content below. Lazy-load the heavy part; don't block first paint on it.
- **Scroll-as-narrative:** sections reveal/transform on scroll (Lenis + GSAP ScrollTrigger or native scroll-driven). Keep it legible; motion serves the story.
- **Islands of interactivity:** a fast static/editorial base (Astro shines here) with isolated interactive components hydrated only where needed — best of both worlds for "editorial site with moments."
- **Full canvas app:** the whole experience is one WebGL/Canvas surface (installations, toys, instruments). Accept the SEO/accessibility tradeoffs deliberately and provide a text alternative.

## Anti-patterns to flag

- 3D where CSS/Canvas would do — pure weight for little gain.
- Autoplaying audio without a user gesture (it will be blocked).
- No reduced-motion path on a motion-heavy site.
- Shipping a huge model/texture to mobile with no LOD or compression.
- A "wow" intro that delays usable content and wrecks performance metrics.
