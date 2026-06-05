// ============================================================
//  DATA FILE — add all your entries here
//  Preview cards and expanded entries both read from this array.
// ============================================================

export type EventCategory = "WRK" | "PRF" | "JAM" | "VST";

export interface EmbedLink {
  type: "youtube" | "vimeo" | "soundcloud" | "instagram" | "github";
  url: string;
  label?: string;
}

export interface Person {
  name: string;
  role?: string;
}

export interface GalleryImage {
  src: string;
  caption?: string;
}

export interface Event {
  timelineLabel: string;    // "OCT 22" — shown in horizontal timeline
  date: string;             // "2022-10-01" — ISO, used for sorting only
  displayDate: string;      // "Oct 2022 – Jan 2023" — shown in expanded entry
  category: EventCategory;  // WRK | PRF | JAM | VST
  coverImage: string;       // "/images/filename.jpg"
  title: string;
  subtitle?: string;        // e.g. "Alternative Approaches to Composition"
  shortDescription: string;
  people?: Person[];
  keywords?: string[];      // flat list — mix skills & topics freely
  longDescription?: string; // Markdown supported
  embeds?: EmbedLink[];
  gallery?: GalleryImage[]; // Additional images shown in expanded view
}

// ============================================================
//  ENTRIES — newest first
// ============================================================

export const events: Event[] = [

  // ── 7. xCoAx Dundee ──────────────────────────────────────
  {
    timelineLabel: "JAN–JUL 25",
    date: "2025-07-01",
    displayDate: "Jan – Jul 2025",
    category: "PRF",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-qQHcTa4zG4EgY6yC7EvvMgT6SXwuTF.jpg",
    title: "Currents & Tides",
    subtitle: "An Exploration of Generative Music in Three Acts",
    shortDescription: "An electronic live music performance in three acts — developed throughout the semester and presented at xCoAx 2025 in Dundee.",
    people: [
      { name: "Elena Vasilkova", role: "Act I — Tidal Drift (Kontrol Voltaj)" },
      { name: "Joel Schäfer", role: "Act II — Multimodal Recursions" },
      { name: "Anna Ferro", role: "Act II — Multimodal Recursions" },
      { name: "Andreea-Cristina Mircea", role: "Act III — Hybrid Rituals (NINANIÑA)" },
      { name: "Aydin Thill", role: "Act III — Hybrid Rituals (Ay Din)" },
      { name: "Lisa Passing", role: "Coordination" },
      { name: "Angela Brennecke", role: "Artistic Direction" },
    ],
    keywords: [
      "Live performance",
      "Generative music",
      "Audiovisual",
      "Spatial audio",
      "Ambisonics",
      "Modular synthesis",
      "Unreal Engine",
      "TouchDesigner",
      "Ableton Live",
      "Live vocals",
    ],
    longDescription: `
*Currents & Tides* is an electronic live music performance in three acts, integrating digital and analog music, generative audiovisuals, and live vocals into a single evolving arc — expanding from stereo to multichannel audio across the performance. Developed throughout the Making Waves workshop series during the 2024/25 semester, the piece was presented as a conference paper and performance at [xCoAx 2025](https://xcoax.org) in Dundee.

The three acts are independent in character but build on each other — each subsequent act incorporating elements from the previous, creating what the authors describe as an interplay between currents and tides.

**Act I — Tidal Drift** (Elena Vasilkova / Kontrol Voltaj)
A generative rhythmic and textural foundation built around a self-modulating feedback system. The Torso T-1 sequencer drives evolving patterns with inherent randomness; software synthesizers on PC and iPad — including Opal by Fors, Arturia Pigments, and Tera Pro — provide the sonic palette. Draws from ambient, drone, noise, techno, and electro.

**Act II — Multimodal Recursions** (Joel Schäfer & Anna Ferro)
An audiovisual piece in three chapters — from atmospheric and harmonic beginnings through glitches and digital errors into abstract noise-inspired soundscapes. Sound and visuals are entangled through a bidirectional modulation system: visual parameters control sound, sound parameters control visuals. Built with a custom modular synthesizer, Ableton Live, TouchDesigner, and OSC over UDP.

**Act III — Hybrid Rituals** (Andreea-Cristina Mircea / NINANIÑA & Aydin Thill / Ay Din)
Live vocal improvisation transmitted from Ableton Live into Unreal Engine, where vocals trigger and shape a generative virtual world. The act shifts the performance from stereo to four-channel audio, drawing on traditional vocal practices from around the world and weaving back material from the preceding acts. Spatial audio, microtonal scales, and live sampling form the sonic environment.

All audiovisual documentation is available [here](https://owncloud.gwdg.de/index.php/s/noT0kvbeVzPMLRB).
    `.trim(),
    embeds: [
      {
        type: "vimeo",
        url: "https://owncloud.gwdg.de/index.php/s/noT0kvbeVzPMLRB",
        label: "Full documentation — audio & video",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research%20paper%20presentation%20angela%20-1rlwVIWWQgfhzHf90IMpJFwPuOy5NE.jpg", caption: "Angela presenting Currents & Tides at xCoAx 2025" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research%20paper%20presentation-Ghnjeza0KSZuF6V0PjqaE0y8o6J937.jpg", caption: "The three acts — Tidal Drift, Multimodal Recursions, Hybrid Rituals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Practice%202-1uej3rtGKM55cvTy4xhyIPiX3jfnvv.jpg", caption: "Group rehearsal session" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Practice%200-KpzQTIILZpA7EmCr5jMVMsXU9bDmBb.jpg", caption: "Workshop practice with controllers" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Practice%203-zd6mmMUH7cP8VxhxG78tTnFvT1a72R.jpg", caption: "Duo practice with keyboard and vocals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Practice%201-RiRvBBgAl0Oz5JolyRbw7SVl6WbqjG.jpg", caption: "Setup with projection and modular gear" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2382-gPsxWhlTHm9hGeK42iBmC7qtUiTjHX.jpg", caption: "Elektron Digitakt and modular synth setup" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2433-Q8DmUaL8u6lcAjmC3TyM8GWiF5vgku.jpg", caption: "Performing with modular synthesizer" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lena%2002-ivTTctWgMpeP5QYWU4QARyLR8E9y7k.jpg", caption: "Act I — Tidal Drift performance" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lena-5hta2UmiOPvR36QQyeXAIQzUK5NKX2.jpg", caption: "Abstract visuals during Act I" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20act-AwSIbTzWR9wk39IScQcE03ycH3sEcg.jpg", caption: "Act II — Multimodal Recursions visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20act%202-FBMjCYThfdQdYQdiaG58zOv9mxthJH.jpg", caption: "Act II — Golden dome projection" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20act%203-5LbRXmjPrTjGo9eB5DBGqCsqmLmThu.jpg", caption: "Act II — Wide shot with audience" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hybrid%20realms-5YlovSYtu6gTbqWeOo6n05dgiY7ldY.jpg", caption: "Act III — Hybrid Rituals visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hybrid%202-Rt7TLElHYgX8V2adJwW2vYuSUlzXaB.jpg", caption: "Act III — Earth landscape projection" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group%20after%20performance-HlhTL2RaS0tCpEbJOYT1s3QscdQMEg.jpg", caption: "Group photo after the performance" },
    ],
  },

  // ── 6. Spatial Audio WS24/25 ─────────────────────────────
  {
    timelineLabel: "JAN 25",
    date: "2025-01-01",
    displayDate: "Jan 2025",
    category: "WRK",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagekGomun-iBV0AGePjZqIZbdq9iTIxUD1fsV7O4.jpg",
    title: "Making Ambisonics",
    subtitle: "Spatial Audio & Immersive Sound",
    shortDescription: "A workshop on spatial and 3D audio — from the history of immersive sound to hands-on experiments in the AudioLab.",
    people: [
      { name: "MediaApes", role: "Guest — Spatial Audio Studio, Mannheim" },
      { name: "Angela Brennecke", role: "Lecturer" },
      { name: "Stefan Püst", role: "Lecturer" },
    ],
    keywords: [
      "Spatial audio",
      "3D audio",
      "Ambisonics",
      "Binaural",
      "HRTF",
      "Immersive audio",
      "AudioLab",
      "Wavefield synthesis",
    ],
    longDescription: `
The session opened with a guest presentation by [MediaApes](https://www.mediaapes.com), a spatial audio studio based near Mannheim working across consulting, concept, content, and implementation. Their framing set the tone: sound was always immersive — it's technology that made it mono.

A short history grounded the technical content. Surround experiments began around 1930; Fantasia introduced Fantasound in the 1940s; Dolby Stereo and quadraphonics arrived in the 70s; THX and Dolby SR in the 80s. The arc from cinema to home — and now to VR and spatial computing — runs through more than 150 years of recording and reproduction.

The workshop then worked through the core concepts of 3D audio: how a room's direct signal and reflections tell us where things are; the difference between surround (horizontal plane), 3D sound (full sphere), and immersive as a broader experience category; and why low frequencies are hard to localise while high frequencies have to bend around the head.

Key technical topics included the HAAS effect, interaural time and level differences, Head-Related Transfer Functions (HRTF), and Ambisonics — where encoded channels work like pixels, resolution increasing with channel count. Students also explored wavefield synthesis and the role of ear shape in spatial perception.

The afternoon moved into the AudioLab, where students placed their own compositions and experiments into the room's 3D speaker wall, working with ambisonics microphones and spatialisation tools in Ableton.
    `.trim(),
    embeds: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ptkluJ_1ElQ",
        label: "Sound beaming demo",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageTLMnW5-ODv1pfJnMcdzotVqrD4roFrkBnBLVD.jpg", caption: "What is Ambisonics? — spherical harmonics and microphone patterns" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImage4p5jzp-ZtwiTrek1bsUhQtck7MXacMElFPZDg.jpg", caption: "Wavefield synthesis — speaker array and wave propagation" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageeGHrTn-k3xbK629Ov4zJjc6Ih9bs8SBmQFOdm.jpg", caption: "EBU Norm R128 — loudness normalization and LUFS" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageyPzRpe-xZJQkWQK3GKngfweRbfe7q6FbNQKn8.jpg", caption: "Whiteboard — signal flow and spherical harmonics notation" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImage43ko88-0CbRJKEtxGT8OaKEzhHSLoJnzd8xM0.jpg", caption: "Explaining signal flow concepts" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageHC7C4t-WZV34gfFFGSL4SulHRCvaConBmmsS1.jpg", caption: "Hands-on with microphone and Zoom F4 recorder" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagexqJrHS-VJhOZUqP9HSqGDjpUPWe6FWVPpWaKF.jpg", caption: "Zoom F4 field recorder with Zylia microphone" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageMBmGct-ynhWcgTPIybcuorsfHGH4i3vhkDJLp.jpg", caption: "Zoom F4 MultiTrack Field Recorder display" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImage3jREJi-75l42Mp9coNbFYz8n7xjAV2Es9ODeT.jpg", caption: "Portable recording equipment setup" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageBN2ezf-3nNUzsmesXaNSZAZdIRNAdGiQ7Kxng.jpg", caption: "Sennheiser AMBEO A-B Format Converter in Reaper" },
    ],
  },

  // ── 5. 70-Year Anniversary Performances ──────────────────
  {
    timelineLabel: "NOV 24",
    date: "2024-11-05",
    displayDate: "Nov 2024",
    category: "PRF",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0460.JPG-eUNmbNGAnxRkIEzZIFJBSVNkWanrPN.jpeg",
    title: "Making Waves @Filmuni 70",
    shortDescription: "A special series of live performances for Filmuniversität Babelsberg's 70th anniversary — rhythm, visuals, and experimentation.",
    people: [
      { name: "Elena Vasilkova", role: "Performance" },
      { name: "Joel Schäfer", role: "Performance" },
      { name: "Anna Ferro", role: "Performance" },
      { name: "Elisabeth Scholz", role: "Performance" },
      { name: "Lucas Grey", role: "Performance" },
      { name: "Danylo Okulov", role: "Performance" },
      { name: "Lisa Passing", role: "Coordination & Logistics" },
      { name: "Aljoša Dakić", role: "Light Design" },
      { name: "Mauricio Brito", role: "Sound" },
      { name: "Andreea Mircea", role: "Documentation" },
      { name: "Angela Brennecke", role: "Artistic Direction" },
    ],
    keywords: [
      "Live performance",
      "Audiovisual",
      "Generative art",
      "Light design",
      "Interdisciplinary",
    ],
    longDescription: `
On the occasion of Filmuniversität Babelsberg's 70th anniversary, Making Waves presented a special series of live performances — born from the Making/Breaking Waves workshop series and brought to one of the university's most significant public moments.

Five performers took the stage, each bringing their own approach to generative and live electronic music, unified by a shared interest in blending rhythm, visuals, and real-time experimentation. The event was supported by a production team handling coordination, light design, sound, and documentation.
    `.trim(),
    embeds: [
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DB9Cd7NsY_B/",
        label: "Performance preparation",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0355.JPG-uCzChbd4KEWdylxsEoDPWx4J9u5IP3.jpeg", caption: "Control booth — TouchDesigner and mixing desk" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0385.JPG-nXLgAsH5TK33CaqPdWTQCeOxnxDLEs.jpeg", caption: "Trio performing with sunflower visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0389.JPG-BvYMfXpFsbwd9pdUm24oQr4x2ocYZ6.jpeg", caption: "Live set with dual laptops" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0410.JPG-usKle2k5VQmaS88AhxlSuBvBSDYY7r.jpeg", caption: "Solo performance with blue/pink lighting" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0423.JPG-44OSjFJcoojsCXBJ5bRzUFAu54tCrx.jpeg", caption: "Trio concentrated at the decks" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0431.JPG-HWc3sssPGItJCVB3w20m7l31EeR4DK.jpeg", caption: "Modular synth and patch cables" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0434.JPG-2nD6MyWwk5z3jqWHHcL5Iy2Mky01ro.jpeg", caption: "Abstract blue visuals projection" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0442.JPG-H9VX9mUfUTI1S52tfLatZJoV5D8M9L.jpeg", caption: "Wide shot with geometric visuals and crowd" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0444.JPG-f8ZqcymKAAKgxmir146Es8wior6hNI.jpeg", caption: "Outdoor stage with colorful block visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0454.JPG-dkTw0AMZL8GLqksd0GlaCtfUUnDmkQ.jpeg", caption: "Balcony view — library and photo exhibition" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0458.JPG-ReZhSC65wBdfGc1XZfmH4tK5Rzjm5u.jpeg", caption: "Aerial view with cloud visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0479.JPG-To18ZrZUn8ddsIdTkxQzwTngtBpUw6.jpeg", caption: "Psychedelic visuals and packed crowd" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0493.JPG-fNMIQlDEiRiQHWBspvhg9LaUQMsiE5.jpeg", caption: "Stage setup with purple lighting" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0504.JPG-lvb4YqMwIm06rhhI6kU8UMD7F0nVzd.jpeg", caption: "City of Film Potsdam banner and stage" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0519.JPG-6mErWNxk9jlBn1aODw2NnTWEdIioJg.jpeg", caption: "Performer with flight case and red lighting" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0528.JPG-w14vdUtHNfuulH694XMPXLdc44fFIj.jpeg", caption: "Solo set with magenta lighting" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0539.JPG-FJV532B48C2AkjbvYuNTDHQSsutJKZ.jpeg", caption: "Performance with green geometric visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0559.JPG-hsWikIexV3vk2spPY7c6kJrwJ8PJxn.jpeg", caption: "Performer with palm tree projection" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF0572.JPG-L9yUvJpCEqndV4OtAceDWweDy3BKtV.jpeg", caption: "Purple geometric visuals and performance" },
    ],
  },

  // ── 4. Superbooth ────────────────────────────────────────
  {
    timelineLabel: "MAY 24",
    date: "2024-05-01",
    displayDate: "May 2024",
    category: "VST",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageT6JH10-dP7LAiKEcVKMCF0d9c0O6GlfIP3B0n.jpg",
    title: "Making Waves @Superbooth",
    shortDescription: "A visit to Superbooth 24 in Berlin — synthesizers, modular systems, and the people who build them.",
    keywords: [
      "Modular synthesis",
      "Hardware",
      "Synthesizers",
      "Berlin",
      "Music technology",
    ],
    longDescription: `
Superbooth is the world's leading trade show for synthesizers and electronic music instruments, held annually in Berlin. Founded in 2016, it brings together manufacturers, artists, and enthusiasts from across the world to showcase new hardware, modular systems, and experimental sound tools — from major brands to one-person boutique operations.

Courtesy of the MA in Creative Technologies at Filmuniversität Babelsberg, Making Waves had the chance to attend Superbooth 2024 — an opportunity to encounter the instruments and workflows discussed in the workshop in their full breadth, and to see the broader ecosystem of tools and makers driving the field forward.
    `.trim(),
    embeds: [
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/C7TxMl3sNj0/",
        label: "Superbooth 2024 — reel by Andreea Mircea",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagefnY9sy-zUQbCW8YIn5TCkkUkzWcBDUyS7wuMe.jpg", caption: "Modular synthesis up close" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImage3tPERt-MzR06t8zUkUWc2QBQL02rMbLoqMDkG.jpg", caption: "Live modular performance" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageRyk6ts-KG937epSkqkfyj9fssH69Ydv2VumYr.jpg", caption: "Workshop space at Superbooth" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2697-e3HT5SXEmG7zVXzZ1XWLT2f2NZ7yJQ.jpg", caption: "Moog booth" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageGzPthc-yRrsVGbmgR1YywyBIUDnoOnPSeM0WW.jpg", caption: "Hand-shaped PCB controller" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImage50bTGP-RUlizgWZ56yPYWMgqEjxWn5gb5Qucg.jpg", caption: "Superbooth outdoor area" },
    ],
  },

  // ── 3. One Day Jam SS24 ──────────���───────────────────────
  {
    timelineLabel: "MAY 24",
    date: "2024-05-31",
    displayDate: "31 May 2024",
    category: "JAM",
    coverImage: "/images/ss24.jpeg",
    title: "Making Rhythm, Drums & Jam",
    shortDescription: "A one-day session combining a workshop on rhythm and drum programming with an open jam in the afternoon.",
    people: [
      { name: "Marco Winter", role: "Guest — Rhythm & Drum Programming" },
    ],
    keywords: [
      "Rhythm",
      "Drum programming",
      "Sequencing",
      "Time signatures",
      "Ableton Live",
      "Jam session",
    ],
    longDescription: `
The day split into two halves. In the morning, Marco Winter led a session on rhythm as a compositional tool — covering tempo and its emotional weight, note duration and quantization, time signatures, and drum sequencing techniques in a DAW. The session worked through kick, snare, hi-hats and ride in detail, with practical exercises in different time signatures and song sections.

The afternoon opened into a free jam session, applying the morning's material in a live group context.

*"The theoretical part about drum programming, I learnt a couple of new things... the jam part I really enjoyed. It was hard to overcome self doubt but the atmosphere was so chill and friendly that I relaxed, and I was pleasantly surprised with the result."* — Lena, CTech
    `.trim(),
    embeds: [
      {
        type: "soundcloud",
        url: "https://owncloud.gwdg.de/index.php/s/mRhqdVSM0kgD4JN?path=%2Fjamsession%2Fmaking_waves_mai24_jam01",
        label: "Jam session recording",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-F2lwG1Ukk76KTfsjLJ3NCjhkoLBiRT.jpg", caption: "Drumkit overview presentation" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-fS42sVX487esaefO1lM0cKn7Cr0bLw.jpg", caption: "Historical context — the cat piano" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Vxr5B6v0gqoEXSiysMzBxEPZQp9vSY.jpg", caption: "Synthstrom Deluge in action" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-8NsPqBcldGacn4mqr7C12L3FjYUQXf.jpg", caption: "Guitar practice with audio interface" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-B2VRxH3zp6SGjMlg2UyKNSrD9ODXmy.jpg", caption: "Workshop space — guitars and controllers" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-zctubhWxS6bmkB6BoOnXGuMjuPopQ8.jpg", caption: "Working with Elektron Digitakt II" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-ifTOf66SKMNC0GADVdm9V365QwWLJw.jpg", caption: "Group collaboration session" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-pmEQSoln5Qs7FtITEOZ5PKyr8gkoRI.jpg", caption: "Bass and guitar duo" },
    ],
  },

  // ── WS23/24 Workshop ─────────────────────────────────────
  {
    timelineLabel: "JAN 24",
    date: "2024-01-29",
    displayDate: "29 Jan – 2 Feb 2024",
    category: "WRK",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_8-pMw1F9lJ1xNxSbIIFAGlgeNg0Wv60P.jpg",
    title: "Making Tracks",
    subtitle: "Alternative Approaches to Composition",
    shortDescription: "A one-week intensive workshop — three student groups produced and presented original tracks in Ableton Live.",
    people: [
      { name: "Angela Brennecke", role: "Lecturer" },
      { name: "Martin Gordon", role: "Lecturer" },
      { name: "Tolga Tolun", role: "Guest — Ableton Workflows & Automations" },
      { name: "Andreea-Cristina Mircea", role: "Documentation & Support" },
    ],
    keywords: [
      "Ableton Live",
      "Music production",
      "Mixing & mastering",
      "Song structure",
      "Modular synthesis",
      "Collaboration",
      "Live performance",
    ],
    longDescription: `
A five-day format new to the series — rather than recurring block sessions, students arrived on Monday and left on Friday with a finished track. Groups ranged from complete beginners to experienced musicians, and the week moved from brainstorming and theory on the first two days through intensive studio work, mixing and mastering sessions with Tolga on Thursday, and final presentations on Friday.

Three groups completed original works:

3Eva (Vi, Elena, Andreea) — Winter's Embrace — an indie-modular fusion built around a bilingual poem by Vi, processed through Ableton's Simpler and layered with modular synthesis textures.

Big Riots in Switzerland (Lisa, Codrin, Aljosa) — Winter's Embrace — surf rock with a winter twist, combining live guitar, bass and vocals with synthetic drums and AI-generated lyrics.

Vegan Cheesecake (Tim, Anna B.) — Did You Know the World Ended in 2012? — an instrumental combining pop, alternative and punk sensibilities, mixing electronic and acoustic sounds with noise elements.
    `.trim(),
    embeds: [
      {
        type: "github",
        url: "https://github.com/ctechfilmuniversity/workshop_ws2324_making_waves/blob/main/workshop_ws2324_making_waves.md",
        label: "Workshop repository",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_2-10TxkeJhIDKTfwXIIk0kwe2Mn0wPSB.jpg", caption: "Workshop overview — Nirvana album discussion" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_3-4OXafrpnbPcUwUjKvPTz7QKIsQcc2e.jpg", caption: "Martin Gordon on rhythm grids" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_4-AbaYo1iop5z3VoWjYVbVB2x0gEbdJF.jpg", caption: "Angela Brennecke on scales" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_5-KpL0tqQX6Ni0x6EF1xlFMNs5jQgojC.jpg", caption: "Overtones and harmonics" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_6-B1N9EUg5VhHpWmLrTzHdf66oif1YqQ.jpg", caption: "Musical modes theory" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_1_2-CvzIgRyYBxyTMJ7eMzfRJPPsaks5nU.jpg", caption: "Martin Gordon on time signatures" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process_9-cXLSVVqqgULgjddYJ0jxwDFPyB4Eeq.jpg", caption: "Novation Launch Control setup" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-uUH3WlfKrqiZKCTYZA2khm1DTA8TrH.jpg", caption: "Tolga Tolun on Deluge" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ski_1-CSW6On6XNOZreg40GK9RRR0ilfSpY5.jpg", caption: "Group collaboration" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ski_2-DvkSG2y29gzfCBfYCpmfkh8rqc1y3z.jpg", caption: "Recording session" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3eva_1-veeOvRcZ2FZXvaPCIiB4CZDX9LUgbH.jpg", caption: "3Eva — production session" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3eva_2-VgLx9PfbG1B1uCGUjaQ59tL391iHzf.jpg", caption: "Working in Ableton Live" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vegan_1-sm0Q3kQ7zhBhWB8DsEAQH9kgJunQfm.jpg", caption: "Vegan Cheesecake — Arturia MiniLab" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vegan_2-J5UQRh2VvupWUmIfVsfLaXiW7vonCb.jpg", caption: "Vegan Cheesecake — Arturia KeyStep" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vegan-slPXhCcU74keLTFSXMS6BCH5QobSfa.png", caption: "Track artwork — The Vegan Cheesecakes" },
    ],
  },

  // ── 2. CX-Studio Opening ─────────────────────────────────
  {
    timelineLabel: "FEB 23",
    date: "2023-02-15",
    displayDate: "15 Feb 2023",
    category: "PRF",
    coverImage: "/images/cx-studio-cover.jpg",
    title: "Opening Performance @CX Studio",
    shortDescription: "Live performance at the opening of the AudioLab — bass, voice, synth and visuals.",
    people: [
      { name: "Martin Gordon", role: "Bass" },
      { name: "Andreea Mircea", role: "Voice" },
      { name: "Mauricio Brito", role: "Synth" },
      { name: "Jonathan Ho", role: "Visuals" },
    ],
    keywords: ["Live performance", "Audiovisual", "Bass", "Synth", "Generative visuals"],
    longDescription: `
The CX-Studio opening gave Making Waves its first public stage outside the workshop room. The performance brought together four students in a configuration built specifically for the AudioLab — a more intimate setup than the final workshop performances, with bass and live voice as the acoustic anchors and synth and generative visuals responding in real time.

The piece drew on material and methods from the Making/Breaking Waves semester, reworked for a quartet format.
    `.trim(),
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6695-0PxSsIMOsXK8I9sMC5KTOHjDQfxncR.jpg", caption: "Performance setup in CX Studio" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6690-lCKr1TeSWYU1LfMPfsBMcxXY4sv6a8.jpg", caption: "Projected visuals — wave particles" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6691-vdWgoFdddj3KzRvPZQI03lAF6FRGXr.jpg", caption: "Performance in progress" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6692-k9MsaKoozjmfYIg4pLf2pXUQc7iN1C.jpg", caption: "Live set with colorful visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6693-6D9kRP0OG5G0KNz5mUwudZNg0g8hoa.jpg", caption: "Abstract light visuals" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6694-2tF6Qq0Rm1dxu8CZRMhciyQxXPyUB6.jpg", caption: "Quartet performing together" },
    ],
  },

  // ── 1. Making / Breaking Waves WS22/23 ───────────────────
  {
    timelineLabel: "OCT 22 – JAN 23",
    date: "2022-10-01",
    displayDate: "Oct 2022 – Jan 2023",
    category: "WRK",
    coverImage: "/images/ws2223-cover.jpg",
    title: "Making / Breaking Waves",
    shortDescription: "The inaugural workshop series — students explored generative music technologies and performed live audiovisual compositions.",
    people: [
      { name: "Angela Brennecke", role: "Lecturer, Prof. Audio & Interactive Media Technology" },
      { name: "Stefan Püst", role: "Lecturer, Digital Media" },
      { name: "Lara Frank", role: "Guest — Granular Synthesis" },
      { name: "Daniel Nauck", role: "Guest — Digital Communication" },
      { name: "Marco Winter", role: "Guest — Subtractive Synthesis" },
      { name: "Justin Robinson", role: "Guest — Max/MSP / Pärtinator" },
      { name: "Rita Eperjesi", role: "Guest �� Resolume / VJing" },
    ],
    keywords: [
      "Ableton Live",
      "Max/MSP",
      "Resolume",
      "Granular synthesis",
      "Subtractive synthesis",
      "Generative algorithms",
      "VJing",
      "Dawless",
      "Live performance",
      "Stable Diffusion",
    ],
    longDescription: `
Six block sessions running from October 2022 to January 2023, each built around a different layer of the generative audiovisual stack — from synthesis fundamentals and visual performance to Max/MSP and dawless setups. Guest lecturers brought their own practice into the room: Lara Frank on granular synthesis, Marco Winter on subtractive, Rita Eperjesi on Resolume, and Justin Robinson on his generative instrument *Pärtinator*.

The semester closed with three live performances. Andreea, Jonathan and Enrique combined self-recorded piano samples, live vocals, Synthstrom Deluge, and Resolume visuals into a hybrid set with ChatGPT-generated lyrics. Marco Winter performed entirely dawless with an Elektron Syntakt and Digitone, designing every sound from scratch. Stefan Püst routed a Roland MC-707 into an Octatrack, using the fader as a dry/wet control between arranged loops and processed transitions.
    `.trim(),
    embeds: [
      {
        type: "github",
        url: "https://github.com/ctechfilmuniversity/workshop_ws2223_making_waves_retrospective",
        label: "Workshop repository",
      },
    ],
    gallery: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/224565359-320e0252-161d-4058-bc26-e747a61eb141-HGUHAzjPekDnVuW1ypi87ddEivi5AS.jpg", caption: "Lara Frank on granular synthesis plugins" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImageTdB2jm-gGLvHo8ULHxm6cKtakrfelyddsskhs.jpg", caption: "Six Thinking Hats — creative process framework" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagen62S1A-1pxzLq0DFejkNE4MvvMb5yNaTKa4Yh.jpg", caption: "Ableton Live with Arturia MiniLab" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagegCpZcp-UDFhRncm7clHiSbxFJ5kubJH2BRjUg.jpg", caption: "Akai MPC Live II — dawless workflow" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagelCdAC7-iXQ0xRCltjAY7ZJWUxRRkOInx2DGzt.jpg", caption: "Cable setup and audio interface" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tempImagemBPb0T-Tp8emHnPLKYvrkq4kEEEhAxaa7r10s.jpg", caption: "Rita Eperjesi — Resolume Arena workshop" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/224735932-975650eb-c54f-4ad8-b3ba-7dee26a00295-Mi45wVW5fEZAtShs7nnBfbfI4WO2Vd.png", caption: "Performance setup — Elektron Syntakt + Digitone" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/224736378-0a3fbd59-9149-4963-9200-3c2ee2709d29-6flzzUHQ43JjGaOw6jXZJlZ0EyCfk2.png", caption: "Performance setup — Octatrack + Roland MC-707" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/225284679-77fa05ce-b10b-44f8-9349-a30f9e23ef38-pkDsfLI20RSQugibxSSiJKrSJvQpib.jpg", caption: "Performance setup — Deluge, Launchpad, Resolume" },
    ],
  },

];

// ============================================================
//  HELPERS
// ============================================================

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  WRK: "Workshop",
  PRF: "Performance",
  JAM: "Jam",
  VST: "Visit",
};

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  WRK: "#00ff88",
  PRF: "#ff3366",
  JAM: "#00d4ff",
  VST: "#ff6b00",
};

export const sortedEvents = [...events].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
