"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github, ExternalLink, Youtube, Music } from "lucide-react"
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

const categories: { key: EventCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "WRK", label: "Workshops" },
  { key: "PRF", label: "Performances" },
  { key: "JAM", label: "Jams" },
  { key: "VST", label: "Visits" },
]

// Simple markdown renderer for bold, italic, and links
function renderMarkdown(text: string) {
  // Split by markdown patterns and render accordingly
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)
  
  return parts.map((part, i) => {
    // Bold **text**
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    }
    // Italic *text*
    if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    // Links [text](url)
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) {
      return (
        <a 
          key={i} 
          href={linkMatch[2]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground underline hover:text-white"
        >
          {linkMatch[1]}
        </a>
      )
    }
    return part
  })
}

function EmbedIcon({ type }: { type: EmbedLink["type"] }) {
  switch (type) {
    case "youtube":
      return <Youtube size={14} />
    case "vimeo":
      return <span className="text-[10px] font-bold">V</span>
    case "soundcloud":
      return <Music size={14} />
    case "github":
      return <Github size={14} />
    default:
      return <ExternalLink size={14} />
  }
}

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [activeFilter, setActiveFilter] = useState<EventCategory | "all">("all")

  const filteredEvents = activeFilter === "all" 
    ? sortedEvents 
    : sortedEvents.filter((e) => e.category === activeFilter)

  return (
    <section id="index" className="py-10 sm:py-14 md:py-20 lg:py-32 border-t border-border">
      <div className="px-4 sm:px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-1 sm:mb-2">
                Index
              </h2>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Workshops, performances, jams and visits</p>
            </div>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              {filteredEvents.length} {filteredEvents.length === 1 ? "entry" : "entries"}
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.key
              const catColor = cat.key !== "all" ? CATEGORY_COLORS[cat.key] : null
              
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`
                    px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider
                    transition-all duration-200 touch-manipulation flex-shrink-0 active:scale-95
                    flex items-center gap-1.5 sm:gap-2
                    ${isActive 
                      ? "bg-foreground text-background" 
                      : "bg-transparent text-muted-foreground border border-border hover:border-foreground hover:text-foreground"
                    }
                  `}
                >
                  {catColor && (
                    <span 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                      style={{ backgroundColor: catColor }}
                    />
                  )}
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid - 1 col mobile, 2 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} onSelect={setSelectedEvent} />
          ))}
        </div>
      </div>

      <EventDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  )
}

function EventCard({ event, onSelect }: { event: Event; onSelect: (event: Event) => void }) {
  const color = CATEGORY_COLORS[event.category]
  const label = event.category
  
  return (
    <article 
      className="group cursor-pointer touch-manipulation"
      onClick={() => onSelect(event)}
    >
      {/* Cover Image - 16:9 */}
      <div className="aspect-video relative overflow-hidden bg-muted mb-3">
        {event.coverImage ? (
          <>
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-6xl sm:text-7xl md:text-8xl font-bold opacity-10"
              style={{ color }}
            >
              {label}
            </span>
          </div>
        )}
        
        {/* Hover arrow */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        {/* Category badge */}
        <span 
          className="inline-block text-[9px] sm:text-[10px] tracking-wider px-2 py-0.5 uppercase font-semibold"
          style={{ backgroundColor: color, color: "#000" }}
        >
          {label}
        </span>
        
        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-white transition-colors leading-tight">
          {event.title}
        </h3>
        
        {/* Short description */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {event.shortDescription}
        </p>
      </div>
    </article>
  )
}

function EventDialog({ event, onClose }: { event: Event | null; onClose: () => void }) {
  if (!event) return null
  
  const color = CATEGORY_COLORS[event.category]
  const fullLabel = CATEGORY_LABELS[event.category]

  return (
    <Dialog open={!!event} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg md:max-w-2xl lg:max-w-3xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto bg-background border-border p-0 my-4">
        {/* Cover Image */}
        {event.coverImage && (
          <div className="relative aspect-video w-full">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-4 sm:p-5 md:p-8">
          <DialogHeader className="mb-4 sm:mb-5 md:mb-6">
            {/* Category + Date */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span 
                className="text-[9px] sm:text-[10px] md:text-xs tracking-wider px-2 md:px-3 py-0.5 sm:py-1 uppercase font-semibold"
                style={{ backgroundColor: color, color: "#000" }}
              >
                {fullLabel}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{event.displayDate}</span>
            </div>
            
            {/* Title + Subtitle */}
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              {event.title}
            </DialogTitle>
            {event.subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-1">
                {event.subtitle}
              </p>
            )}
            <DialogDescription className="sr-only">
              {event.shortDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* People list */}
            {event.people && event.people.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {event.people.map((person, i) => (
                  <span key={i} className="text-sm text-foreground">
                    {person.name}
                    {person.role && <span className="text-muted-foreground ml-1">({person.role})</span>}
                  </span>
                ))}
              </div>
            )}

            {/* Keywords as flat tags */}
            {event.keywords && event.keywords.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {event.keywords.map((keyword, i) => (
                  <span 
                    key={i}
                    className="px-2 py-0.5 bg-muted text-[10px] sm:text-xs text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            <hr className="border-border" />

            {/* Short description */}
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              {event.shortDescription}
            </p>

            {/* Long description */}
            {event.longDescription && (
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
                {event.longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{renderMarkdown(paragraph)}</p>
                ))}
              </div>
            )}

            {/* Embeds section */}
            {event.embeds && event.embeds.length > 0 && (
              <div className="space-y-2 pt-2">
                {event.embeds.map((embed, i) => (
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
            {event.gallery && event.gallery.length > 0 && (
              <div className="space-y-3 pt-4">
                <h4 className="text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase font-semibold">Gallery</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {event.gallery.map((img, i) => (
                    <div key={i} className="group/img relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={img.src}
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
        </div>
      </DialogContent>
    </Dialog>
  )
}
