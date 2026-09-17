import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "AUDIOLAB — Audiovisual Technologies, Composition, Performance & Research | Making Waves",
  description:
    "AUDIOLAB is a research group at Filmuniversität Babelsberg KONRAD WOLF working across four pillars: audiovisual technologies, songwriting & composition, interaction & performance, and experiment & research. Home of the Making Waves workshop series.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
