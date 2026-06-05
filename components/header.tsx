"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Timeline", href: "#timeline" },
  { label: "About", href: "#about" },
  { label: "Index", href: "#index" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="px-4 sm:px-5 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-base sm:text-lg tracking-tight text-foreground hover:text-foreground/70 transition-colors touch-manipulation font-bold"
        >
          MW_
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[11px] tracking-widest text-muted-foreground hover:text-foreground transition-colors group uppercase font-semibold"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-foreground touch-manipulation active:scale-95 transition-transform"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-5 h-5">
            <span className={cn(
              "absolute left-0 w-5 h-0.5 bg-current transition-all duration-300",
              isOpen ? "top-2 rotate-45" : "top-1"
            )} />
            <span className={cn(
              "absolute left-0 top-2 w-5 h-0.5 bg-current transition-all duration-300",
              isOpen ? "opacity-0 translate-x-2" : "opacity-100"
            )} />
            <span className={cn(
              "absolute left-0 w-5 h-0.5 bg-current transition-all duration-300",
              isOpen ? "top-2 -rotate-45" : "top-3"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[44px] sm:top-[52px] bg-background/80 backdrop-blur-md transition-all duration-300 ease-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-center px-6 -mt-16">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group py-5 text-4xl sm:text-5xl text-foreground active:text-primary transition-all touch-manipulation font-bold tracking-tight",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${index * 100 + 50}ms` : "0ms" }}
              >
                <span className="inline-flex items-center gap-4">
                  <span className="text-foreground/30 text-lg font-normal">0{index + 1}</span>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile footer info */}
          <div 
            className={cn(
              "px-6 pb-8 pt-4 border-t border-border/50 transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "350ms" : "0ms" }}
          >
            <p className="text-xs text-muted-foreground font-medium">
              Creative Technologies MA
            </p>
            <p className="text-xs text-muted-foreground/60 mt-0.5">
              Filmuniversität Babelsberg KONRAD WOLF
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}
