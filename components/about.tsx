"use client"

import { useState } from "react"
import Image from "next/image"
import { asset } from "@/lib/asset"

export function About() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)

  const topicsWithTools = [
    { 
      name: "Sound Synthesis", 
      tools: ["Subtractive / Additive", "Granular", "Modular / Eurorack", "Max/MSP", "Pure Data"]
    },
    { 
      name: "Rhythm & Sequencing", 
      tools: ["Drum Programming", "Step Sequencers", "Elektron Digitakt", "Ableton Live"]
    },
    { 
      name: "Spatial Audio", 
      tools: ["Ambisonics", "Binaural / HRTF", "Wavefield Synthesis", "Reaper", "IEM Plugins"]
    },
    { 
      name: "Live Performance", 
      tools: ["Real-time AV Sets", "TouchDesigner", "Resolume", "MIDI Controllers"]
    },
    { 
      name: "Recording & Production", 
      tools: ["Field Recording", "Mixing / Mastering", "DAW Workflows", "Audio Interfaces"]
    },
    { 
      name: "Generative Systems", 
      tools: ["Algorithmic Composition", "Procedural Audio", "Creative Coding", "Machine Learning"]
    },
  ]

  const team = [
    { name: "Prof. Dr.-Ing. Angela Brennecke", role: "Audio & Interactive Media Technology" },
    { name: "Lisa Passing", role: "Coordination" },
    { name: "Andreea Mircea", role: "Assistance and Documentation" },
  ]

  const guestLecturers = [
    { name: "MediaApes", context: "Spatial Audio Studio", semester: "WS24/25" },
    { name: "Tolga Tolun", context: "Ableton Workflows & Automations", semester: "WS23/24" },
    { name: "Marco Winter", context: "Rhythm & Drum Programming / Subtractive Synthesis", semester: "WS22/23, SS24" },
    { name: "Lara Frank", context: "Granular Synthesis", semester: "WS22/23" },
    { name: "Daniel Nauck", context: "Digital Communication", semester: "WS22/23" },
    { name: "Justin Robinson", context: "Max/MSP / Pärtinator", semester: "WS22/23" },
    { name: "Rita Eperjesi", context: "Resolume / VJing", semester: "WS22/23" },
  ]

  const participants = [
    { name: "Elena Vasilkova", context: "Kontrol Voltaj", events: "WS25/26, xCoAx, Filmuni 70" },
    { name: "Joel Schäfer", context: "Multimodal Recursions", events: "WS25/26, xCoAx, Filmuni 70" },
    { name: "Anna Ferro", context: "Multimodal Recursions", events: "WS25/26, xCoAx, Filmuni 70" },
    { name: "Andreea-Cristina Mircea", context: "NINANIÑA / Documentation", events: "WS25/26, xCoAx, Filmuni 70, WS23/24" },
    { name: "Aydin Thill", context: "Ay Din", events: "WS25/26, xCoAx" },
    { name: "Lisa Passing", context: "Coordination", events: "WS25/26, xCoAx, WS23/24" },
    { name: "Martin Gordon", context: "Bass", events: "CX Studio" },
    { name: "Mauricio Brito", context: "Synth / Sound", events: "CX Studio, Filmuni 70" },
    { name: "Jonathan Ho", context: "Visuals", events: "CX Studio" },
    { name: "Elisabeth Scholz", context: "Performance", events: "Filmuni 70" },
    { name: "Lucas Grey", context: "Performance", events: "Filmuni 70" },
    { name: "Danylo Okulov", context: "Performance", events: "Filmuni 70" },
    { name: "Aljoša Dakić", context: "Light Design", events: "WS25/26, Filmuni 70" },
    { name: "Philipp Gerdes", context: "Participant", events: "WS25/26" },
    { name: "Moritz Huson", context: "Participant", events: "WS25/26" },
    { name: "Imogen Drews", context: "Participant", events: "WS25/26" },
    { name: "Alexandra Lindt", context: "Guest student", events: "WS25/26" },
  ]

  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 lg:py-32 border-t border-border relative z-10 overflow-hidden">
      <div className="px-4 sm:px-5 md:px-8 lg:px-12 relative">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-14 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-2 sm:mb-3 md:mb-4">
            About
          </h2>
          <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-foreground/50 uppercase font-semibold">
            Open Workshop Series
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 mb-8 sm:mb-10 md:mb-14 lg:mb-24">
          {/* Left: Description */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground text-balance">
              An open workshop series organised by the{" "}
              <span className="text-white font-medium">Master Program of Creative Technologies</span>{" "}
              at Filmuniversität Babelsberg KONRAD WOLF.
            </p>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base text-justify">
              <p>
                Making Waves offers a scenario for explorative learning in which students 
                artistically test generative music technologies within the framework of an 
                audiovisual music production process.
              </p>
              <p>
                Students develop their own audiovisual compositions and perform the results 
                in live performances. The course addresses new technologies in the context of 
                music as well as emerging workflows in creative processes.
              </p>
            </div>
            
            {/* Filmuni Logo */}
            <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-6">
              <a 
                href="https://www.filmuniversitaet.de/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block opacity-60 hover:opacity-100 transition-opacity touch-manipulation"
              >
                <Image 
                  src={asset("/filmuni-logo.png")} 
                  alt="Filmuniversität Babelsberg KONRAD WOLF" 
                  width={180} 
                  height={40}
                  className="h-auto w-[140px] sm:w-[160px] md:w-[180px]"
                />
              </a>
            </div>
          </div>

          {/* Right: Topics with Tools */}
          <div>
            <h3 className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-3 sm:mb-4 md:mb-6 uppercase font-semibold">
              Topics & Tools
            </h3>
            <div className="space-y-px bg-border border border-border">
              {topicsWithTools.map((topic, index) => (
                <div key={topic.name} className="bg-background">
                  <button
                    className="w-full p-3 sm:p-4 text-left flex items-center justify-between transition-colors hover:bg-muted/50 touch-manipulation active:bg-muted"
                    onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                  >
                    <span className={`text-xs sm:text-sm md:text-base transition-colors font-medium ${
                      expandedTopic === index ? "text-white" : "text-foreground"
                    }`}>
                      {topic.name}
                    </span>
                    <span className={`text-muted-foreground text-xs transition-transform ${
                      expandedTopic === index ? "rotate-45" : ""
                    }`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    expandedTopic === index ? "max-h-40" : "max-h-0"
                  }`}>
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {topic.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2 py-0.5 bg-muted text-[9px] sm:text-[10px] text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-border pt-8 sm:pt-10 md:pt-12 lg:pt-16">
          <h3 className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-5 sm:mb-6 md:mb-8 lg:mb-10 uppercase font-semibold">
            Team
          </h3>
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 space-y-6 sm:space-y-8">
            {/* Prof on first row - larger and more prominent */}
            <div className="group border-l-2 border-foreground/40 pl-4 sm:pl-5">
              <p className="text-lg sm:text-xl md:text-2xl text-foreground group-hover:text-white transition-colors leading-tight font-semibold">
                {team[0].name}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm tracking-wider text-muted-foreground uppercase mt-1.5">
                {team[0].role}
              </p>
            </div>
            {/* Lisa and Andreea on second row - inline with separator */}
            <div className="flex items-baseline flex-wrap gap-x-2 gap-y-2">
              {team.slice(1).map((member, index) => (
                <div key={member.name} className="flex items-baseline gap-x-2">
                  <div className="group">
                    <span className="text-sm sm:text-base md:text-lg text-foreground group-hover:text-white transition-colors font-medium">
                      {member.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-xs tracking-wider text-muted-foreground uppercase ml-1.5">
                      ({member.role})
                    </span>
                  </div>
                  {index < team.slice(1).length - 1 && (
                    <span className="text-muted-foreground/30 hidden sm:inline">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Guest Lecturers Section */}
          <h3 className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-3 sm:mb-4 uppercase font-semibold">
            Guest Lecturers
          </h3>
          <div className="flex flex-wrap gap-x-1 gap-y-1 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {guestLecturers.map((lecturer, index) => (
              <span key={lecturer.name} className="text-[10px] sm:text-xs text-muted-foreground">
                {lecturer.name}
                <span className="text-muted-foreground/50"> ({lecturer.context})</span>
                {index < guestLecturers.length - 1 && <span className="text-muted-foreground/30">, </span>}
              </span>
            ))}
          </div>

          {/* Participants & Performers Section */}
          <h3 className="text-[9px] sm:text-[10px] tracking-widest text-muted-foreground mb-3 sm:mb-4 uppercase font-semibold">
            Participants & Performers
          </h3>
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {participants.map((person, index) => (
              <span key={person.name} className="text-[10px] sm:text-xs text-muted-foreground">
                {person.name}
                <span className="text-muted-foreground/50"> ({person.events})</span>
                {index < participants.length - 1 && <span className="text-muted-foreground/30">, </span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
