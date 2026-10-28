import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "AUDIOLAB — Real-Time Sound, Synthesis, Live Audiovisual Performance & Generative Music | Making Waves",
  description:
    "AUDIOLAB is a research group at Filmuniversität Babelsberg KONRAD WOLF working across four research areas: real-time sound systems, sound synthesis, live audiovisual performance and generative music. Home of the Making Waves workshop series.",
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
