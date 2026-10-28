"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { asset } from "@/lib/asset"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

/* Making Waves category palette */
const CAT_COLORS: Record<string, string> = {
  WRK: "#00ff88", // workshop / neon green
  PRF: "#ff3366", // performance / pink
  MTH: "#00d4ff", // method / cyan
  PUB: "#ff6b00", // publication / orange
}

/* The four research areas (from the Notion Literature Review) — they frame the page and filter the index */
type PillarKey = "RTS" | "SYN" | "LAV" | "GEN"

const PILLARS: { key: PillarKey; n: string; h: string; p: string }[] = [
  {
    key: "RTS",
    n: "01",
    h: "Real-Time Sound Systems",
    p: "Audio engines and signal chains that respond while they are played: low-latency processing, sensor and gesture input, spatial and multichannel setups.",
  },
  {
    key: "SYN",
    n: "02",
    h: "Sound Synthesis",
    p: "Building sound from the ground up: granular, modular and digital synthesis, sound design, and the patches and parameter sets behind each piece.",
  },
  {
    key: "LAV",
    n: "03",
    h: "Live Audiovisual Performance",
    p: "Sound and image made together, live, in front of an audience: generative visuals, real-time visualisation and multichannel concerts.",
  },
  {
    key: "GEN",
    n: "04",
    h: "Generative Music",
    p: "Music written as a system of rules, models and interfaces, so the piece takes a new shape each time it runs, from brush strokes mapped to notes to a concert in three acts.",
  },
]

const FILTERS: { key: "all" | PillarKey; label: string }[] = [
  { key: "all", label: "All" },
  ...PILLARS.map((p) => ({ key: p.key, label: p.h })),
]

type IndexEntry = {
  cat: string
  pillars: PillarKey[]
  title: string
  summary: string
  when: string
  href?: string
}

const ENTRIES: IndexEntry[] = [
  {
    cat: "PRF",
    pillars: ["LAV", "RTS"],
    title: "Untracked",
    summary:
      "Anna Ferro. A live data-driven audiovisual performance on sexual harassment in urban spaces, built in TouchDesigner. Work-in-progress talk at xCoAx 2026, Turin.",
    when: "2026",
    href: "/making-waves",
  },
  {
    cat: "WRK",
    pillars: ["SYN", "GEN"],
    title: "Making Waves",
    summary:
      "Generative audiovisual workshop series — synthesis, creative coding, spatial audio. Since 2022. Enter the documentation →",
    when: "Ongoing",
    href: "/making-waves",
  },
  {
    cat: "PUB",
    pillars: ["GEN", "LAV"],
    title: "Currents & Tides: An Exploration of Generative Music in Three Acts",
    summary:
      "Paper — xCoAx 2025, Dundee. An electronic music performance integrating digital & analog music, generative audiovisuals and vocals, expanding from stereo to multi-channel. Schäfer, Ferro, Vasilkova, Mircea, Thill, Passing, Brennecke.",
    when: "2025",
  },
  {
    cat: "PRF",
    pillars: ["SYN", "LAV"],
    title: "Tidal Drift",
    summary: "Elena Vasilkova. Act I of Currents & Tides. xCoAx, Dundee.",
    when: "2025",
  },
  {
    cat: "PRF",
    pillars: ["RTS", "LAV"],
    title: "Multimodal Recursions",
    summary: "Joel Schäfer & Anna Ferro. Act II of Currents & Tides. xCoAx, Dundee.",
    when: "2025",
  },
  {
    cat: "PRF",
    pillars: ["LAV", "RTS"],
    title: "Hybrid Realms",
    summary: "Aydin Thill & Andreea-Cristina Mircea. Act III of Currents & Tides. xCoAx, Dundee.",
    when: "2025",
  },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [audioSupported, setAudioSupported] = useState(true)
  const [activeFilter, setActiveFilter] = useState<"all" | PillarKey>("all")

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const engineRef = useRef<{ play: () => void; pause: () => void } | null>(null)

  /* header scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* generative audio engine + oscilloscope (vanilla Web Audio, no deps) */
  useEffect(() => {
    type AudioCtor = typeof AudioContext
    const AC: AudioCtor | undefined =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext
    if (!AC) {
      setAudioSupported(false)
      return
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const canvas = canvasRef.current!
    const cc = canvas.getContext("2d")!

    let ctx: AudioContext | null = null
    let master: GainNode
    let analyser: AnalyserNode
    const voices: OscillatorNode[] = [] // the chord oscillators (mouse Y transposes these)
    const lfos: OscillatorNode[] = [] // the slow amplitude LFOs (mouse X sets their rate)
    const baseDetune: number[] = [] // each voice's original detune, so transpose adds on top
    let started = false
    let playing = false
    let raf: number | null = null

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
      cc.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    window.addEventListener("resize", size)
    size()

    const build = () => {
      ctx = new AC()
      master = ctx.createGain()
      master.gain.value = 0.0001
      master.connect(ctx.destination)
      analyser = ctx.createAnalyser()
      analyser.fftSize = 2048
      analyser.smoothingTimeConstant = 0.85
      master.connect(analyser)
      const tone = ctx.createBiquadFilter()
      tone.type = "lowpass"
      tone.frequency.value = 2600 // open enough that higher transpositions stay audible
      tone.Q.value = 0.7
      tone.connect(master)
      ;[110.0, 164.81, 220.0, 329.63].forEach((f, i) => {
        const osc = ctx!.createOscillator()
        osc.type = i < 2 ? "sine" : "triangle"
        osc.frequency.value = f
        osc.detune.value = (i - 1.5) * 4
        const g = ctx!.createGain()
        g.gain.value = i < 2 ? 0.5 : 0.18
        const lfo = ctx!.createOscillator()
        lfo.frequency.value = 0.03 + i * 0.017
        const lg = ctx!.createGain()
        lg.gain.value = i < 2 ? 0.16 : 0.08
        lfo.connect(lg)
        lg.connect(g.gain)
        osc.connect(g)
        g.connect(tone)
        osc.start()
        lfo.start()
        voices.push(osc)
        lfos.push(lfo)
        baseDetune.push((i - 1.5) * 4)
      })
      const bs = 2 * ctx.sampleRate
      const buf = ctx.createBuffer(1, bs, ctx.sampleRate)
      const d = buf.getChannelData(0)
      for (let j = 0; j < bs; j++) d[j] = (Math.random() * 2 - 1) * 0.5
      const n = ctx.createBufferSource()
      n.buffer = buf
      n.loop = true
      const nf = ctx.createBiquadFilter()
      nf.type = "bandpass"
      nf.frequency.value = 480
      nf.Q.value = 0.5
      const ng = ctx.createGain()
      ng.gain.value = 0.035
      n.connect(nf)
      nf.connect(ng)
      ng.connect(tone)
      n.start()
      started = true
    }

    const fade = (t: number, s: number) => {
      if (!ctx) return
      const now = ctx.currentTime
      master.gain.cancelScheduledValues(now)
      master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now)
      master.gain.exponentialRampToValueAtTime(Math.max(t, 0.0001), now + s)
    }

    const draw = () => {
      raf = requestAnimationFrame(draw)
      const r = canvas.getBoundingClientRect()
      cc.clearRect(0, 0, r.width, r.height)
      const b = new Uint8Array(analyser.fftSize)
      analyser.getByteTimeDomainData(b)
      const mid = r.height / 2
      const step = r.width / b.length
      const amp = reduceMotion ? 0.4 : 1
      cc.lineWidth = 1.5
      cc.strokeStyle = "#00ff88"
      cc.shadowBlur = 12
      cc.shadowColor = "rgba(0,255,136,.5)"
      cc.beginPath()
      for (let i = 0; i < b.length; i++) {
        const v = (b[i] - 128) / 128
        const y = mid + v * mid * 0.82 * amp
        const x = i * step
        i ? cc.lineTo(x, y) : cc.moveTo(x, y)
      }
      cc.stroke()
    }

    // Map a normalized pointer position (0..1, 0..1) onto two clearly audible controls:
    //   y → pitch: transpose the whole chord (top = +1 octave, bottom = -1 octave) via detune (cents)
    //   x → oscillation: how fast the amplitude LFOs run (left = slow swell, right = fast tremolo)
    // setTargetAtTime glides toward each new value (~100ms) so nothing clicks ("zipper noise").
    const aim = (x: number, y: number) => {
      if (!ctx) return
      const cx = Math.min(Math.max(x, 0), 1)
      const cy = Math.min(Math.max(y, 0), 1)
      const now = ctx.currentTime
      const transpose = (0.5 - cy) * 2400 // cents: +1200 (top) … −1200 (bottom); 1200 = one octave
      voices.forEach((o, i) => o.detune.setTargetAtTime(baseDetune[i] + transpose, now, 0.1))
      const minRate = 0.05
      const maxRate = 6
      const rate = minRate * Math.pow(maxRate / minRate, cx)
      lfos.forEach((l) => l.frequency.setTargetAtTime(rate, now, 0.1))
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!playing) return
      aim(e.clientX / window.innerWidth, e.clientY / window.innerHeight)
    }
    window.addEventListener("pointermove", onPointerMove)

    engineRef.current = {
      play() {
        if (!started) build()
        if (ctx!.state === "suspended") ctx!.resume()
        fade(0.14, 3.0)
        playing = true
        if (!raf) draw()
      },
      pause() {
        if (!ctx) return
        fade(0.0001, 1.2)
        playing = false
        setTimeout(() => {
          if (!playing) {
            if (raf) cancelAnimationFrame(raf)
            raf = null
            cc.clearRect(0, 0, canvas.width, canvas.height)
          }
        }, 1300)
      },
    }

    return () => {
      window.removeEventListener("resize", size)
      window.removeEventListener("pointermove", onPointerMove)
      if (raf) cancelAnimationFrame(raf)
      if (ctx) ctx.close()
    }
  }, [])

  const toggleSound = useCallback(() => {
    setSoundOn((on) => {
      if (on) engineRef.current?.pause()
      else engineRef.current?.play()
      return !on
    })
  }, [])

  const visibleEntries =
    activeFilter === "all" ? ENTRIES : ENTRIES.filter((e) => e.pillars.includes(activeFilter))

  const navItems = [
    { label: "Research", href: "#research" },
    { label: "Index", href: "#index" },
    { label: "About", href: "#about" },
  ]

  return (
    <main className="min-h-screen relative" id="top">
      {/* ---------- HEADER ---------- */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="px-4 sm:px-5 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 flex items-center justify-between gap-2 sm:gap-3">
          <a
            href="#top"
            className="text-base sm:text-lg tracking-tight text-foreground hover:text-foreground/70 transition-colors font-bold"
          >
            AUDIOLAB<span className="text-primary">_</span>
          </a>

          <nav className="flex items-center gap-2.5 sm:gap-5 lg:gap-8" aria-label="Primary">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-[11px] tracking-widest text-muted-foreground hover:text-foreground transition-colors group uppercase font-semibold"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <Link
              href="/making-waves"
              className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest uppercase font-semibold text-primary border border-primary/40 px-2 sm:px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              Making Waves →
            </Link>

            {audioSupported && (
              <button
                onClick={toggleSound}
                aria-pressed={soundOn}
                aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
                className={cn(
                  "inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold border px-2.5 sm:px-3 py-1.5 transition-colors",
                  soundOn
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-border hover:text-foreground hover:border-foreground"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    soundOn ? "bg-primary shadow-[0_0_9px_#00ff88]" : "bg-muted-foreground"
                  )}
                />
                <span className="hidden sm:inline">{soundOn ? "Sound on" : "Sound off"}</span>
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="min-h-[90svh] flex flex-col justify-end relative z-10 pt-24 pb-8 sm:pb-10 px-4 sm:px-5 md:px-8 lg:px-12">
        <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-6 sm:mb-8">
          Creative Technologies MA — Filmuniversität Babelsberg KONRAD WOLF
        </p>

        <h1 className="text-[17vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-[-0.03em] uppercase">
          <span className="block text-foreground">Audio</span>
          <span className="block text-foreground/70">Lab</span>
        </h1>

        <div className="max-w-xl border-l-2 border-foreground/30 pl-3 sm:pl-4 md:pl-5 mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            A research group working across four research areas:{" "}
            <span className="text-foreground">real-time sound systems</span>,{" "}
            <span className="text-foreground">sound synthesis</span>,{" "}
            <span className="text-foreground">live audiovisual performance</span>, and{" "}
            <span className="text-foreground">generative music</span>. Home of the{" "}
            <Link
              href="/making-waves"
              className="text-primary underline underline-offset-2 hover:text-white transition-colors"
            >
              Making Waves
            </Link>{" "}
            workshop series.
          </p>
        </div>

        {/* signal / oscilloscope — the waveform itself is the play button */}
        {audioSupported && (
          <div className="mt-8 sm:mt-10 max-w-3xl">
            <button
              type="button"
              onClick={toggleSound}
              aria-label={soundOn ? "Pause sound" : "Play sound"}
              className="group relative block w-full h-[104px] border border-border bg-card overflow-hidden cursor-pointer hover:border-primary/60 transition-colors touch-manipulation"
            >
              <div
                className={cn(
                  "absolute inset-0 flex items-center pointer-events-none transition-opacity duration-500",
                  soundOn ? "opacity-0" : "opacity-100"
                )}
              >
                <span className="flex-1 h-px bg-border" />
              </div>
              <canvas ref={canvasRef} className="block w-full h-[104px]" aria-hidden="true" />
              {!soundOn && (
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-widest font-semibold uppercase text-primary border border-primary px-3 sm:px-4 py-2 bg-background/70 backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    ▶ Enter the signal
                  </span>
                </span>
              )}
            </button>
            {soundOn && (
              <small className="block text-[10px] sm:text-xs text-muted-foreground max-w-[48ch] leading-relaxed mt-4">
                Drag across the screen to play it — up/down raises and lowers the pitch, left/right speeds up the oscillation.
              </small>
            )}
          </div>
        )}
      </section>

      {/* ---------- RESEARCH AREAS ---------- */}
      <section
        id="research"
        className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-14 md:pb-20 lg:pb-28 border-t border-border relative z-10 px-4 sm:px-5 md:px-8 lg:px-12"
      >
        <SectionHead n="01" label="Research areas" title="Research" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-border border border-border">
          {PILLARS.map((c) => (
            <div key={c.key} className="bg-background p-5 sm:p-6 md:p-8">
              <span className="text-[9px] sm:text-[10px] tracking-widest text-primary uppercase font-semibold">
                {c.n}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight mt-3 mb-2.5 text-balance">
                {c.h}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- INDEX ---------- */}
      <section
        id="index"
        className="py-10 sm:py-14 md:py-20 lg:py-32 border-t border-border relative z-10 px-4 sm:px-5 md:px-8 lg:px-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-2 sm:mb-3">
              02 / Index
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-1 sm:mb-2">
              Index
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              Works, performances &amp; publications — filter by research area
            </p>
          </div>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            {visibleEntries.length} {visibleEntries.length === 1 ? "entry" : "entries"}
          </p>
        </div>

        {/* filters */}
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2 mb-6 sm:mb-8">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={cn(
                  "px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-200 touch-manipulation flex-shrink-0 active:scale-95 flex items-center gap-1.5 sm:gap-2",
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground border border-border hover:border-foreground hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* rows */}
        <div className="border-t border-border">
          {visibleEntries.length === 0 && (
            <p className="py-8 text-xs sm:text-sm text-muted-foreground">
              No entries in this category yet — check back soon.
            </p>
          )}
          {visibleEntries.map((e) => {
            const Row = (
              <div
                className={cn(
                  "grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-5 md:gap-6 items-baseline py-4 sm:py-5 border-b border-border transition-colors",
                  e.href ? "hover:bg-muted/50 group" : ""
                )}
              >
                <span
                  className="text-[9px] sm:text-[10px] tracking-wider px-2 py-0.5 uppercase font-semibold self-center"
                  style={{ backgroundColor: CAT_COLORS[e.cat], color: "#000" }}
                >
                  {e.cat}
                </span>
                <div>
                  <h3
                    className={cn(
                      "text-base sm:text-lg md:text-xl font-bold tracking-tight leading-tight transition-colors",
                      e.href ? "text-foreground group-hover:text-white" : "text-foreground"
                    )}
                  >
                    {e.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
                    {e.summary}
                  </p>
                  <p className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-muted-foreground/70 mt-2">
                    {e.pillars.map((k) => PILLARS.find((p) => p.key === k)!.h).join(" · ")}
                  </p>
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs tracking-wider text-muted-foreground uppercase whitespace-nowrap text-right flex items-center gap-1.5 self-center">
                  {e.when}
                  {e.href && (
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  )}
                </span>
              </div>
            )
            return e.href ? (
              <Link key={e.title} href={e.href} className="block">
                {Row}
              </Link>
            ) : (
              <div key={e.title}>{Row}</div>
            )
          })}
        </div>

      </section>

      {/* ---------- ABOUT ---------- */}
      <section
        id="about"
        className="py-10 sm:py-14 md:py-20 lg:py-32 border-t border-border relative z-10 px-4 sm:px-5 md:px-8 lg:px-12"
      >
        <SectionHead n="03" label="Research & production space" title="About" />
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-snug text-foreground text-balance">
              <span className="text-white font-medium">AUDIOLAB</span> is a research group within the
              Master of <span className="text-white font-medium">Creative Technologies</span> at
              Filmuniversität Babelsberg KONRAD WOLF, led by{" "}
              <span className="text-white font-medium">Prof. Dr.-Ing. Angela Brennecke</span> and built
              around its students.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              It brings together students and researchers from diverse disciplines — with and without a
              musical background — to develop audiovisual technologies, write and compose with them,
              put them on stage, and document what they find. Its workshops and
              performances run under the{" "}
              <Link href="/making-waves" className="text-primary hover:text-white transition-colors">
                Making Waves
              </Link>{" "}
              series.
            </p>
            <div>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground uppercase font-semibold block mb-2">
                Affiliation
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <a
                  href="https://www.filmuniversitaet.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-white transition-colors"
                >
                  Filmuniversität Babelsberg KONRAD WOLF
                </a>{" "}
                — Creative Technologies MA
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-4 sm:mb-5 uppercase font-semibold">
              Team
            </h3>
            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              {/* Lead */}
              <div className="border-l-2 border-foreground/40 pl-4 sm:pl-5">
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-tight font-semibold">
                  Prof. Dr.-Ing. Angela Brennecke
                </p>
                <p className="text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase mt-1.5">
                  Audio &amp; Interactive Media Technology
                </p>
              </div>
              {/* Students */}
              <div>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground uppercase font-semibold block mb-2.5">
                  Students
                </span>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
                  {["Andreea-Cristina Mircea", "Anna Ferro", "Elena Vasilkova", "Joel Schäfer"].map(
                    (name, i, arr) => (
                      <span key={name} className="flex items-baseline gap-x-2">
                        <span className="text-sm sm:text-base text-foreground font-medium">{name}</span>
                        {i < arr.length - 1 && (
                          <span className="text-muted-foreground/30">/</span>
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <h3 className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-3 sm:mb-4 uppercase font-semibold">
              Topics &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Sound synthesis",
                "Spatial audio / Ambisonics",
                "Creative coding",
                "Generative systems",
                "Live AV performance",
                "Field recording & production",
              ].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-muted text-[10px] sm:text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AudiolabFooter />
    </main>
  )
}

function AudiolabFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 border-t border-border overflow-hidden">
      {/* CTA */}
      <div className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between md:gap-12 max-w-5xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 leading-relaxed text-balance">
            Want to know more about the
            <span className="text-white font-semibold"> Master of Creative Technologies</span>?
          </p>
          <a
            href="https://www.filmuniversitaet.de/en/studies/study-programs/master-programs/creative-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-5 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold hover:bg-foreground/80 transition-colors touch-manipulation active:scale-[0.98] whitespace-nowrap w-full sm:w-auto"
          >
            Visit Site
            <ArrowRight
              size={16}
              className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Links bar */}
      <div className="border-t border-border">
        <div className="px-4 sm:px-5 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <a
                href="#top"
                className="text-2xl sm:text-3xl md:text-4xl tracking-tighter text-foreground hover:text-foreground/70 transition-colors touch-manipulation font-bold"
              >
                AUDIOLAB<span className="text-primary">_</span>
              </a>
              <div className="h-6 sm:h-8 w-px bg-border" />
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                Audiovisual · Composition · Performance · Research
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <Link
                href="/making-waves"
                className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:gap-1.5 touch-manipulation font-medium"
              >
                Making Waves
                <ArrowUpRight size={10} className="sm:w-3 sm:h-3" />
              </Link>
              <span className="text-border">/</span>
              <a
                href="https://www.filmuniversitaet.de/en/studies/study-programs/master-programs/creative-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:gap-1.5 touch-manipulation font-medium"
              >
                CTech MA
                <ArrowUpRight size={10} className="sm:w-3 sm:h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-card/50">
        <div className="px-4 sm:px-5 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground tracking-wider font-medium">
                © {year} AUDIOLAB
              </p>
              <span className="hidden sm:block text-border">/</span>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground">
                Creative Technologies MA, Filmuniversität Babelsberg
              </p>
            </div>
            <a
              href="https://www.filmuniversitaet.de/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity self-start sm:self-auto"
            >
              <Image
                src={asset("/filmuni-logo.png")}
                alt="Filmuniversität Babelsberg KONRAD WOLF"
                width={180}
                height={40}
                className="h-auto w-[140px] sm:w-[180px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div className="mb-8 sm:mb-10 md:mb-14">
      <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-2 sm:mb-3">
        {n} / {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
        {title}
      </h2>
    </div>
  )
}
