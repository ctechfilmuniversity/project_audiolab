import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { Events } from "@/components/events"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Making Waves | Generative Audiovisual Workshop",
  description:
    "A generative audiovisual music technology workshop series at Filmuniversität Babelsberg KONRAD WOLF",
}

export default function MakingWaves() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Events />
      <Footer />
    </main>
  )
}
