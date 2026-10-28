"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { asset } from "@/lib/asset"
import { ChevronLeft, ChevronRight, Github, ExternalLink, Youtube, Music, ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { 
  sortedEvents, 
  CATEGORY_LABELS, 
  CATEGORY_COLORS,
  type Event,
  type EventCategory,
  type EmbedLink,
} from "@/lib/events-data"

// Reverse for timeline (oldest first, left to right)
const timelineEvents = [...sortedEvents].reverse()

const categories: EventCategory[] = ["WRK", "PRF", "JAM", "VST"]

// Simple markdown renderer for bold, italic, and links
function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)
  
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-white">
          {linkMatch[1]}
        </a>
      )
    }
    return part
  })
}

function EmbedIcon({ type }: { type: EmbedLink["type"] }) {
  switch (type) {
    case "youtube": return <Youtube size={14} />
    case "vimeo": return <span className="text-[10px] font-bold">V</span>
    case "soundcloud": return <Music size={14} />
    case "github": return <Github size={14} />
    default: return <ExternalLink size={14} />
  }
}

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [filter, setFilter] = useState<EventCategory | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  const filteredEvents = filter 
    ? timelineEvents.filter(e => e.category === filter)
    : timelineEvents

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollPosition()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener("scroll", checkScrollPosition)
      window.addEventListener("resize", checkScrollPosition)
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", checkScrollPosition)
      window.removeEventListener("resize", checkScrollPosition)
    }
  }, [filteredEvents])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 160 : window.innerWidth < 768 ? 200 : 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="timeline" className="py-8 sm:py-10 md:py-16 border-t border-border relative z-10">
      {/* Filter row */}
      <div className="px-4 sm:px-5 md:px-8 lg:px-12 mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2">
          <span className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mr-1 flex-shrink-0 font-semibold uppercase">Filter</span>
          <button
            onClick={() => setFilter(null)}
            className={`text-[9px] sm:text-[10px] tracking-widest px-2 sm:px-3 py-1.5 sm:py-2 border transition-all flex-shrink-0 touch-manipulation active:scale-95 font-semibold uppercase ${
              filter === null 
                ? "border-foreground text-foreground bg-foreground/5" 
                : "border-border text-muted-foreground active:border-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(filter === cat ? null : cat)}
              className={`text-[9px] sm:text-[10px] tracking-widest px-2 sm:px-3 py-1.5 sm:py-2 border transition-all flex items-center gap-1.5 sm:gap-2 flex-shrink-0 touch-manipulation active:scale-95 font-semibold uppercase ${
                filter === cat
                  ? "border-foreground text-foreground bg-foreground/5"
                  : "border-border text-muted-foreground active:border-foreground"
              }`}
            >
              <span 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: CATEGORY_COLORS[cat] }}
              />
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal timeline */}
      <div className="relative">
        {/* Scroll buttons - hidden on small mobile */}
        <button 
          onClick={() => scroll("left")}
          className={`hidden sm:flex absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-background/90 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all touch-manipulation active:scale-95 ${
            !canScrollLeft && "opacity-30 pointer-events-none"
          }`}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={16} className="md:w-5 md:h-5" />
        </button>
        <button 
          onClick={() => scroll("right")}
          className={`hidden sm:flex absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-background/90 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all touch-manipulation active:scale-95 ${
            !canScrollRight && "opacity-30 pointer-events-none"
          }`}
          aria-label="Scroll right"
          disabled={!canScrollRight}
        >
          <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>

        {/* Timeline track */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide px-4 sm:px-8 md:px-16 lg:px-24 touch-pan-x"
        >
          <div className="relative min-w-max py-16 sm:py-20 md:py-24">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />

            {/* Events */}
            <div className="flex items-center">
              {filteredEvents.map((event, index) => {
                const color = CATEGORY_COLORS[event.category]
                const isAbove = index % 2 === 0

                return (
                  <div 
                    key={`${event.title}-${index}`}
                    className="relative flex flex-col items-center"
                    style={{ minWidth: "100px", maxWidth: "120px" }}
                  >
                    {/* Content above or below */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className={`group flex flex-col items-center text-center transition-all px-1.5 sm:px-2 touch-manipulation active:scale-95 ${
                        isAbove ? "order-1 mb-3 sm:mb-4 md:mb-5" : "order-3 mt-3 sm:mt-4 md:mt-5"
                      }`}
                    >
                      {/* Date */}
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-muted-foreground mb-0.5 sm:mb-1 font-semibold">
                        {event.timelineLabel}
                      </span>
                      
                      {/* Title */}
                      <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground group-hover:text-white transition-colors leading-tight">
                        {event.title}
                      </span>
                    </button>

                    {/* Dot on the line */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="order-2 relative z-10 group touch-manipulation p-2 sm:p-2.5 -m-2 sm:-m-2.5"
                    >
                      <div 
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-background transition-transform group-hover:scale-150 group-active:scale-125"
                        style={{ backgroundColor: color }}
                      />
                    </button>

                    {/* Connector line */}
                    <div 
                      className={`w-px ${isAbove ? "order-2 h-3 sm:h-4 md:h-5" : "order-2 h-3 sm:h-4 md:h-5"}`}
                      style={{ backgroundColor: `${color}40` }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Fade edges */}
        <div className={`absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-16 lg:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 transition-opacity ${!canScrollLeft && "opacity-0"}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-16 lg:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 transition-opacity ${!canScrollRight && "opacity-0"}`} />
      </div>

      {/* Scroll hint on mobile */}
      <p className="sm:hidden text-center text-[10px] text-muted-foreground/60 mt-3 font-medium">
        Swipe to explore
      </p>

      {/* Event Dialog - Expandable */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => { if (!open) { setSelectedEvent(null); setIsExpanded(false) } }}>
        <DialogContent className={`w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] bg-background border-border p-0 mx-auto transition-all duration-300 my-4 ${isExpanded ? "max-w-lg md:max-w-2xl max-h-[80vh] overflow-y-auto" : "max-w-sm sm:max-w-md"}`}>
          {selectedEvent?.coverImage && (
            <div className="relative aspect-video w-full">
              <Image
                src={asset(selectedEvent.coverImage)}
                alt={selectedEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <span 
                className="absolute bottom-3 left-3 text-[9px] sm:text-[10px] tracking-widest px-2 py-0.5 sm:py-1 font-semibold uppercase"
                style={{ backgroundColor: CATEGORY_COLORS[selectedEvent.category], color: "#000" }}
              >
                {CATEGORY_LABELS[selectedEvent.category]}
              </span>
            </div>
          )}
          
          {selectedEvent && (
            <div className="p-4 sm:p-5 md:p-6">
              <DialogHeader className="mb-3">
                <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
                  {selectedEvent.displayDate}
                </div>
                <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  {selectedEvent.title}
                </DialogTitle>
                {selectedEvent.subtitle && (
                  <p className="text-sm text-muted-foreground">{selectedEvent.subtitle}</p>
                )}
                <DialogDescription className="text-sm text-muted-foreground mt-2">
                  {selectedEvent.shortDescription}
                </DialogDescription>
              </DialogHeader>

              {!isExpanded ? (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="block w-full text-center py-2.5 bg-white text-black text-sm font-semibold hover:bg-foreground/80 transition-colors"
                >
                  View full details
                </button>
              ) : (
                <div className="space-y-4 sm:space-y-5 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {/* People list */}
                  {selectedEvent.people && selectedEvent.people.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {selectedEvent.people.map((person, i) => (
                        <span key={i} className="text-sm text-foreground">
                          {person.name}
                          {person.role && <span className="text-muted-foreground ml-1">({person.role})</span>}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Keywords */}
                  {selectedEvent.keywords && selectedEvent.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedEvent.keywords.map((keyword, i) => (
                        <span key={i} className="px-2 py-0.5 bg-muted text-[10px] sm:text-xs text-muted-foreground">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}

                  <hr className="border-border" />

                  {/* Long description */}
                  {selectedEvent.longDescription && (
                    <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
                      {selectedEvent.longDescription.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{renderMarkdown(paragraph)}</p>
                      ))}
                    </div>
                  )}

                  {/* Embeds section */}
                  {selectedEvent.embeds && selectedEvent.embeds.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {selectedEvent.embeds.map((embed, i) => (
                        <a
                          key={i}
                          href={embed.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 py-2 px-3 bg-muted/50 hover:bg-muted transition-colors group/embed"
                        >
                          <EmbedIcon type={embed.type} />
                          <span className="text-sm text-foreground flex-1">
                            {embed.label || embed.type.charAt(0).toUpperCase() + embed.type.slice(1)}
                          </span>
                          <ArrowUpRight size={14} className="text-muted-foreground group-hover/embed:text-foreground transition-colors" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Gallery section */}
                  {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                    <div className="space-y-3 pt-4">
                      <h4 className="text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase font-semibold">Gallery</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {selectedEvent.gallery.map((img, i) => (
                          <div key={i} className="group/img relative aspect-video overflow-hidden bg-muted">
                            <Image
                              src={asset(img.src)}
                              alt={img.caption || `Gallery image ${i + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                            />
                            {img.caption && (
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2">
                                <span className="text-[10px] sm:text-xs text-white leading-tight">{img.caption}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
