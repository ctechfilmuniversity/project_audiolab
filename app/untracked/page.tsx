import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { asset } from "@/lib/asset"
import { untracked as project } from "@/lib/projects-data"

export const metadata: Metadata = {
  title: `${project.title} | AUDIOLAB`,
  description: project.shortDescription,
}

/* **bold**, *italic* and [links](url) — same subset as the Making Waves entries */
function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    const link = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-white">
          {link[1]}
        </a>
      )
    }
    return part
  })
}

export default function UntrackedPage() {
  const paragraphs = (project.longDescription ?? "").split(/\n\s*\n/)

  return (
    <main className="min-h-screen px-4 sm:px-5 md:px-8 lg:px-12 pt-6 sm:pt-8 pb-16 sm:pb-24">
      <Link
        href="/#index"
        className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={14} /> AUDIOLAB
      </Link>

      <header className="mt-10 sm:mt-14 max-w-4xl">
        <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-muted-foreground uppercase font-semibold mb-3">
          {project.displayDate}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl leading-snug">
            {project.subtitle}
          </p>
        )}
      </header>

      <div className="relative w-full aspect-[2/1] mt-8 sm:mt-10 bg-card border border-border overflow-hidden">
        <Image src={asset(project.coverImage)} alt={project.title} fill className="object-cover" priority />
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 mt-10 sm:mt-14">
        <aside className="space-y-6">
          {project.people && (
            <ul className="space-y-1.5 text-sm">
              {project.people.map((p) => (
                <li key={p.name}>
                  <span className="text-foreground font-medium">{p.name}</span>
                  {p.role && <span className="text-muted-foreground"> · {p.role}</span>}
                </li>
              ))}
            </ul>
          )}
          {project.keywords && (
            <div className="flex flex-wrap gap-1.5">
              {project.keywords.map((k) => (
                <span key={k} className="text-[10px] sm:text-xs px-2 py-1 border border-border text-muted-foreground">
                  {k}
                </span>
              ))}
            </div>
          )}
        </aside>

        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[68ch]">
          {paragraphs.map((p, i) => (
            <p key={i}>{renderMarkdown(p.trim())}</p>
          ))}
        </div>
      </div>

      {project.gallery && (
        <section className="mt-14 sm:mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.gallery.map((img) => (
              <figure key={img.src}>
                <div className="relative w-full aspect-[16/9] bg-card border border-border overflow-hidden">
                  <Image src={asset(img.src)} alt={img.caption ?? ""} fill className="object-contain" />
                </div>
                {img.caption && (
                  <figcaption className="text-[11px] sm:text-xs text-muted-foreground mt-2 leading-snug">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
