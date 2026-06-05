# Tool Catalogue — Instruments for the Interactive Web

A curated, opinionated menu of libraries and tools for building things that move, react, render, and resonate, organized by the decision you're trying to make. Each entry says *what it is* and *reach for it when* — because the skill's whole job is matching tool to moment, not listing everything that exists.

**Currency note:** specific picks are current as of **mid-2026**. The fast-movers are 3D/WebGPU/shaders and audio-ML. Before locking a recommendation, do a quick search to confirm a library is still maintained and favored, and to catch newcomers. The *categories* and the *reach-for-it-when logic* are durable; the names inside them drift.

**Verified 2026 shifts worth knowing:**
- **WebGPU is production-ready** across all major browsers (Apple shipped it in Safari 26, late 2025) — roughly 95% coverage with automatic WebGL2 fallback. For new ambitious 3D, start on WebGPU via Three's `WebGPURenderer`. Compute shaders unlock 10–100× gains for particles/physics.
- **TSL (Three Shading Language)** is the current way to author shaders in Three: write once in a JS node system, compiles to both WGSL (WebGPU) and GLSL (WebGL). Stop maintaining duplicate shader codebases. Maxime Heckel's "Field Guide to TSL and WebGPU" is the best primer.
- **R3F does not yet fully support the WebGPU renderer** (as of Q2 2026 — Poimandres working on it; workaround is passing the renderer via the `gl` prop). For a hard WebGPU/compute requirement *today*, vanilla Three gives more direct access; for everything else R3F is still the productive choice with WebGL2.
- **GSAP is 100% free, commercial use included**, all former Club plugins (SplitText, MorphSVG, DrawSVG, ScrollTrigger, ScrollSmoother) since April 2025 under Webflow. Recommend it freely; glance at the license's prohibited-uses clause only for unusual redistribution cases.

---

## Physics & Simulation
Make things on a page obey forces — fall, stack, collide, swing.

- **Matter.js** — 2D rigid-body engine (gravity, collisions, constraints). *Reach for it when:* you want page objects to fall, stack, bounce, and collide for real. The friendly default for tactile 2D.
- **Rapier** (Rust/WASM) — fast, deterministic 2D *and* 3D physics; `react-three-rapier` bindings. *Reach for it when:* Matter.js feels slow or you need 3D physics in a heavy scene. The current go-to for serious 3D physics.
- **planck.js** — faithful Box2D port, battle-tested game physics. *Reach for it when:* you want the rock-solid physics behind a thousand mobile games.
- **p2.js** — lean 2D physics with springs and soft constraints. *Reach for it when:* you need springs, ropes, gentle elastic behavior.

## Animation & Motion
Orchestrate movement — from a single eased transition to a directed scene.

- **GSAP** — the industry-standard engine: buttery, sequenced, total timeline control; now fully free. *Reach for it when:* you want award-site motion and precise choreography. Pair with ScrollTrigger and SplitText.
- **Motion** (formerly Framer Motion + its vanilla form) — modern spring-based animation, tiny footprint, excellent in React. *Reach for it when:* you want physics-feeling motion without GSAP's weight, or you're already in React.
- **anime.js** — lightweight, elegant API for CSS/SVG/DOM. *Reach for it when:* you want quick, expressive animation with almost no setup.
- **Theatre.js** — visual sequencer / on-canvas editor for cinematic, directed motion. *Reach for it when:* you're choreographing a scene like a film, not looping an effect.
- **Lottie** — render After Effects animations as tiny vector JSON. *Reach for it when:* a designer hands you AE files and you want them live on the web.
- **Rive** — interactive, state-machine animations that respond to input in real time. *Reach for it when:* you want animations that *react* — buttons, mascots, characters.

## 3D & WebGL / WebGPU
Real depth, light, and material in the browser.

- **Three.js** — the WebGL/WebGPU workhorse; foundation of most web 3D. *Reach for it when:* anything 3D. Start here. Use the `WebGPURenderer` + TSL for new ambitious work.
- **React Three Fiber (R3F)** + **drei** + **react-three-postprocessing** + **leva** — Three as declarative React components with a deep helper ecosystem. *Reach for it when:* you build in React and want 3D to feel like JSX. (WebGPU support still maturing — see currency note.)
- **postprocessing** (pmndrs) — composable bloom, glitch, depth-of-field, SSAO for Three. *Reach for it when:* you want the scene to look cinematic, not flat.
- **troika-three-text** — crisp SDF text inside Three scenes. *Reach for it when:* you want real, sharp typography living in 3D space.
- **Babylon.js** — full engine with editor, physics, PBR. *Reach for it when:* you want a complete game-grade engine, not just a renderer.
- **OGL** — minimal, close-to-the-metal WebGL. *Reach for it when:* Three is overkill and you want raw shader control at tiny size.
- **Spline** — design 3D scenes in-browser, no code, export to web. *Reach for it when:* you want to design 3D the way you design in Figma.
- **PlayCanvas** — collaborative engine with a real-time visual editor. *Reach for it when:* building an interactive product configurator or game.
- **Vanta.js** — drop-in animated WebGL backgrounds (fog, waves, cells). *Reach for it when:* you want an atmospheric hero background in two lines.

## Shaders & GPU
Where a lot of the "wow" actually lives.

- **TSL (Three Shading Language)** — node-based shaders that compile to WGSL + GLSL. *Reach for it when:* you're writing custom shaders in Three and don't want to maintain two codebases. The current best practice.
- **The Book of Shaders** — the definitive gentle GLSL intro. *Reach for it when:* you finally want to actually understand shaders.
- **Shadertoy** — the shader playground; endless GLSL to learn from and fork. *Reach for it when:* you want to study, remix, or steal-the-vibe of fragment shaders.
- **curtains.js** — wrap HTML images/video in WebGL planes and warp them. *Reach for it when:* you want liquid hover distortions on real page images.
- **regl** — functional, stateless WebGL via declarative draw commands. *Reach for it when:* you want WebGL without imperative state spaghetti.

## Scroll & Interaction
Turn the scrollbar into a director.

- **Lenis** — impossibly smooth scroll (Darkroom/Studio Freight). *Reach for it when:* you want that weighty, premium scroll feel on a long page.
- **ScrollTrigger** (GSAP) — pin, scrub, and trigger animation by scroll. *Reach for it when:* elements should choreograph as the reader scrolls.
- **Locomotive Scroll** — smooth scroll with built-in parallax and scroll classes. *Reach for it when:* you want parallax storytelling without wiring it by hand.
- **tsParticles** — configurable particle systems for backgrounds/interaction. *Reach for it when:* you want a reactive particle field behind a hero.
- **Vivus** — animates SVG as if drawn live, stroke by stroke. *Reach for it when:* you want a logo or line illustration to draw itself in.

## Creative Coding
Think with code; make generative, procedural, hand-feeling work.

- **p5.js** — creative coding made approachable (the Processing spirit in JS). *Reach for it when:* you're sketching generative ideas and want to think *in* code.
- **Hydra** — live-coded, chainable video synthesis in the browser. *Reach for it when:* you want generative visuals for a live audio piece (ENODIA).
- **ml5.js** — friendly ML: pose, pitch, image, in-browser. *Reach for it when:* you want body, voice, or pitch to drive an interactive piece.
- **Paper.js** — scriptable vector graphics with a clean scene graph. *Reach for it when:* you want precise, mathematical vector drawing and animation.
- **Two.js** — one 2D drawing API across SVG/Canvas/WebGL. *Reach for it when:* you want to draw once and render anywhere.
- **Pts.js** — compose points, lines, geometry into expressive visualization. *Reach for it when:* you're making data-driven or typographic art that breathes.
- **Rough.js** — shapes with a hand-drawn, sketchy quality. *Reach for it when:* you want the warmth of pencil over clean vector edges.
- **Zdog** — round, charming pseudo-3D vector illustration. *Reach for it when:* you want soft, toy-like 3D without a full WebGL stack.
- **Mo.js** — motion graphics: bursts, shape morphs, timelines. *Reach for it when:* you want playful, explosive micro-animation moments.

## Sound & Spatial Audio
Sound as first-class material — animating, giving soul. The deepest category for this practice.

- **Tone.js** — full framework over Web Audio: synths, effects, scheduling. *Reach for it when:* you're building an instrument that lives in the browser (sonARe).
- **Web Audio API** (native) — the foundation; route audio through an `AnalyserNode` to get frequency/time-domain data each frame. *Reach for it when:* you want full control of the audio-reactive pipeline.
- **Meyda** — real-time audio feature extraction (loudness, pitch, spectral shape). *Reach for it when:* you want visuals that react to *what the sound is actually doing*, not just amplitude.
- **Strudel** — live-code music as patterns (TidalCycles in JS). *Reach for it when:* you want to perform or sketch generative sound.
- **Elementary Audio** — functional DSP; build synths/effects by composing pure functions. *Reach for it when:* you're designing real audio engines, not just playing files.
- **Resonance Audio** — ambisonic, room-aware spatial audio. *Reach for it when:* sound needs to genuinely sit in 3D space (immersive/XR).
- **Wavesurfer.js** — interactive waveform rendering and scrubbing. *Reach for it when:* you want to visualize and navigate a track on screen.
- **Howler.js** — robust, simple cross-browser playback with sprites. *Reach for it when:* you just need sound to play reliably everywhere.
- **Pizzicato** — friendly wrapper that makes Web Audio effects easy. *Reach for it when:* you want reverb/delay without reading the spec.
- **audioMotion** — high-resolution, beautiful spectrum analyzer. *Reach for it when:* you need a gorgeous frequency display, not a crude bar chart.
- **Butterchurn** — WebGL Milkdrop visualizer, fully audio-reactive. *Reach for it when:* you want instant psychedelic visuals from a live track.
- **Magenta.js** — Google's in-browser ML for melody/rhythm generation. *Reach for it when:* you want the machine to improvise musical material with you.
- **Gibber** — live audiovisual coding where sound and image are one. *Reach for it when:* you want a single canvas where music and visuals are the same code.

*Always plan for autoplay restrictions: browsers block audio until a user gesture — design a deliberate "enter" moment.*

## Typography & Text
Type as motion and identity.

- **Splitting.js** — split text into chars/words/lines for granular animation. *Reach for it when:* you want letters to stagger, scatter, reassemble.
- **SplitText** (GSAP) — now free; the most robust splitting, accessible, masking built in. *Reach for it when:* you're animating headlines and already using GSAP.
- **SplitType** — lightweight splitting designed to pair with GSAP. *Reach for it when:* you want a tiny dependency for line-by-line reveals.
- **V-Fonts** — catalogue and playground for variable fonts. *Reach for it when:* you want type that morphs weight/width as it moves.

## WebXR & AR
Experiences that step off the screen.

- **A-Frame** — declarative VR/AR with HTML-like entities. *Reach for it when:* you want a fast on-ramp to XR.
- **React Three Fiber + @react-three/xr** — XR in the R3F world. *Reach for it when:* you're already building 3D in React.
- **model-viewer** — drop-in web component for 3D models with AR view. *Reach for it when:* you want "view in your space" on a product, in one tag.
- **Wonderland Engine** — performance-focused engine built for WebXR. *Reach for it when:* your XR piece must hold framerate on a headset.
- **Needle Engine** — pipeline from Blender/Unity straight to web 3D/XR. *Reach for it when:* you want a pro pipeline from your 3D tools onto a page.
- **8th Wall** — markerless WebAR in the browser, no install. *Reach for it when:* you want world-tracked AR a client opens from a link.

*Always provide a meaningful non-XR fallback — most visitors have no headset.*

## Maps & Geo
Place and movement across space.

- **MapLibre GL** — open-source fork of Mapbox GL, no token, full control. *Reach for it when:* you want Mapbox power without pricing or lock-in.
- **Mapbox GL JS** — vector, fully stylable maps with 3D terrain. *Reach for it when:* you need a beautiful, custom-styled live map and don't mind the token/pricing.
- **deck.gl** — GPU-powered visualization of very large geospatial datasets. *Reach for it when:* you're plotting thousands of GPS points or paths.
- **Leaflet** — light, dependable maps for the simple case. *Reach for it when:* you want a fast map and don't need vector tiles.

## Transitions & Page FX
Kill the white flash; make navigation feel composed.

- **View Transitions API** (native) — browser morphing of elements and whole pages, no library. *Reach for it when:* you want shared-element transitions built into the platform. Check support and prefer it when available.
- **Swup** — framework-agnostic animated page transitions, tiny. *Reach for it when:* you want a multi-page site that feels like one fluid app.
- **Barba.js** — fluid page transitions that kill the white flash. *Reach for it when:* you want seamless designed moves between portfolio pages.
- **gl-transitions** — open library of WebGL shader transitions. *Reach for it when:* you want a striking shader wipe between images or slides.

## Inspiration & Resources
Where to calibrate taste and learn the techniques.

- **Codrops** — tutorials/demos behind half the web's best effects. *Reach for it when:* you want to see how a technique is actually built.
- **Awwwards / Godly / FWA** — benchmarks for "premium done right." *Reach for it when:* you need a reference for the current bar (verify which galleries are most active before citing).
- **Maxime Heckel's blog** — deep, beautiful write-ups on shaders, R3F, WebGPU/TSL. *Reach for it when:* you want to actually understand bleeding-edge effects.
- **Three.js Journey** — the definitive course for learning Three properly. *Reach for it when:* you're serious about mastering web 3D.
- **CodePen** — the front-end playground. *Reach for it when:* you want to test an idea in sixty seconds.

---

## How to use this catalogue when recommending

Don't recite a category at the user. Identify the *moment* (physics? scroll narrative? audio-reactive? page transitions?), name the one or two instruments that fit, say why, and note the lighter alternative. The point is a confident pick with reasoning — the catalogue is the range you draw from, not the answer you hand over whole.
