"use client"

import Link from "next/link"
import Image from "next/image"
import { asset } from "@/lib/asset"
import { Github, ArrowUpRight, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border overflow-hidden">
      {/* CTA Section */}
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
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Links Bar */}
      <div className="border-t border-border">
        <div className="px-4 sm:px-5 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo and tagline */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <Link 
                href="/" 
                className="text-2xl sm:text-3xl md:text-4xl tracking-tighter text-foreground hover:text-foreground/70 transition-colors touch-manipulation font-bold"
              >
                MW_
              </Link>
              <div className="h-6 sm:h-8 w-px bg-border" />
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                Generative Audiovisual Workshop
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <Link
                href="https://www.filmuniversitaet.de/en/studies/study-programs/master-programs/creative-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:gap-1.5 touch-manipulation font-medium"
              >
                CTech MA
                <ArrowUpRight size={10} className="sm:w-3 sm:h-3" />
              </Link>
              <span className="text-border">/</span>
              <Link
                href="https://github.com/ctechfilmuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:gap-1.5 touch-manipulation font-medium"
              >
                GitHub
                <Github size={10} className="sm:w-3 sm:h-3" />
              </Link>
              <span className="text-border">/</span>
              <a
                href="https://www.instagram.com/ctech.filmuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:gap-1.5 touch-manipulation font-medium"
              >
                Instagram
                <Instagram size={10} className="sm:w-3 sm:h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-card/50">
        <div className="px-4 sm:px-5 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground tracking-wider font-medium">
                {currentYear} Making Waves
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
