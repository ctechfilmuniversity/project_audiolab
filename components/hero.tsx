"use client"

import { Github } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-[70vh] sm:min-h-[65vh] md:min-h-[70vh] flex flex-col justify-end relative z-10 pt-20 pb-6 sm:pb-8 md:pb-12">
      <div className="px-4 sm:px-5 md:px-8 lg:px-12">
        {/* Main typography */}
        <div className="mb-5 sm:mb-6 md:mb-8">
          <h1 className="text-[17vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-[-0.03em] uppercase">
            <span className="block text-foreground">Making</span>
            <span className="block text-foreground/70">Waves</span>
          </h1>
        </div>

        {/* Description with accent bar */}
        <div className="max-w-md sm:max-w-lg border-l-2 border-foreground/30 pl-3 sm:pl-4 md:pl-5 mb-6 sm:mb-8 md:mb-10">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Generative audiovisual workshop series at Filmuniversität Babelsberg KONRAD WOLF. 
            Sound synthesis, creative coding, spatial audio.
          </p>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
          <Link
            href="https://github.com/ctechfilmuniversity/making-waves"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-foreground text-background text-[10px] sm:text-xs tracking-wider font-semibold uppercase hover:bg-white hover:text-black transition-colors touch-manipulation active:scale-[0.97]"
          >
            <Github size={12} className="sm:w-3.5 sm:h-3.5" />
            GitHub
          </Link>
          <span className="hidden sm:block w-px h-4 sm:h-5 bg-border" />
          <span className="text-[10px] sm:text-xs tracking-wider text-muted-foreground font-medium uppercase">
            Since 2022
          </span>
        </div>
      </div>
    </section>
  )
}
