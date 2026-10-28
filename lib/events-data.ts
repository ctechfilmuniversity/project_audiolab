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

  // ── 9. Untracked · xCoAx 2026 ────────────────────────────
  {
    timelineLabel: "JUL 26",
    date: "2026-07-11",
    displayDate: "11 Jul 2026 · xCoAx, Turin",
    category: "PRF",
    coverImage: "/images/untracked/cover.jpg",
    title: "Untracked",
    subtitle: "A live data-driven audiovisual performance on sexual harassment in urban spaces",
    shortDescription: "Anna Ferro's master thesis project: a live audiovisual performance built on data about sexual harassment in Milan, and on the data that is missing. Presented at xCoAx 2026 in Turin.",
    people: [
      { name: "Anna Ferro", role: "Concept, visuals and data systems" },
      { name: "Elena Vasilkova", role: "Sound design (development)" },
      { name: "Angela Brennecke", role: "Introduction at xCoAx" },
    ],
    keywords: [
      "Data-driven art",
      "Live audiovisual performance",
      "TouchDesigner",
      "Data visualisation",
      "Missing data",
      "Survey",
      "Master thesis",
    ],
    longDescription: `
*Untracked* is Anna Ferro's ongoing master thesis project: a data-driven live audiovisual performance and a piece of academic research. It uses live audiovisual performance as a shared space where people can start to talk about a difficult, often stigmatised subject: sexual harassment in public space. The city of Milan is the case study.

Anna grew up in Milan and moved to Berlin three years ago, and soon noticed that she felt much safer walking home alone at night in Berlin than she ever had in Milan. The project began with the question of where that fear comes from, and why so many women share it.

Sexual harassment is heavily underreported, so official data tells only part of the story. *Untracked* treats that gap as material. Its dataset combines official statistics, testimonies, qualitative information and missing data, and supports an artistic reading of patterns, intensities and absences. It does not claim to be objective or complete.

The piece is built and performed in TouchDesigner and currently unfolds in three movements.

**I · Institutional data.** Two ISTAT surveys, one on gender-based violence and one on harassment, brought into TouchDesigner by hand, the same patchwork way the data exists. Column titles and indicator labels are laid out on a grid as they appear online, with their inconsistencies, then progressively glitched, displaced and fragmented, with moments of silence in between.

**II · Silence.** A blurred pulse stands for the data that cannot exist: harassment that goes unreported because of stigma, self-doubt or normalisation.

**III · Lived experience.** Data from the project's own anonymous survey (266 responses so far). A point cloud stands for Milan's population, and the people who answered are coloured and linked as a network of women who don't know each other but share the same condition. Each type of harassment activates part of the network and shows when and where in the city it happened most.

Together the three movements lead from institutional representation, to absence, to lived experience, and ask what these datasets can and cannot represent.

**At xCoAx 2026.** *Untracked* was developed with Elena Vasilkova on sound design. A week before the conference, technical problems on the audio side made the full performance impossible, so the live piece was withdrawn. On 11 July Anna gave a five-minute work-in-progress talk on the concept, method and development, with the visuals so far on screen. In its final form the piece will run fully live, generated in real time; the audio is still in progress.
    `.trim(),
    gallery: [
      { src: "/images/untracked/istat-titles.jpg", caption: "Movement I: ISTAT data titles, shown without processing" },
      { src: "/images/untracked/istat-labels.jpg", caption: "Movement I: ISTAT indicator labels and values" },
      { src: "/images/untracked/glitch.jpg", caption: "Movement I: harassment data under glitch treatment" },
      { src: "/images/untracked/banded.jpg", caption: "Movement I: institutional data fragmented into bands" },
      { src: "/images/untracked/silence.jpg", caption: "Movement II: a blurred pulse for the data that does not exist" },
      { src: "/images/untracked/network.jpg", caption: "Movement III: the point cloud for Milan's population, survey participants coloured" },
      { src: "/images/untracked/network-highlight.jpg", caption: "Movement III: respondents to one type of harassment, highlighted" },
      { src: "/images/untracked/not-experienced.jpg", caption: "Movement III: answers to \"I have not experienced harassment\"" },
      { src: "/images/untracked/presentation.jpg", caption: "The talk at xCoAx 2026, with the video on screen" },
      { src: "/images/untracked/discussion.jpg", caption: "xCoAx 2026, Turin" },
      { src: "/images/untracked/angela-intro.jpg", caption: "During the discussion" },
    ],
  },

  // ── 8. From Sound to Jam WS25/26 ─────────────────────────
  {
    timelineLabel: "OCT 25 – FEB 26",
    date: "2025-10-23",
    displayDate: "Oct 2025 – Feb 2026",
    category: "WRK",
    coverImage: "/images/ws2526/audiolab-session.jpg",
    title: "From Sound to Jam",
    shortDescription: "Seven sessions from October 2025 to February 2026 — sound, visuals, connecting the two, and live coding, ending in project presentations and a big group jam.",
    people: [
      { name: "Angela Brennecke", role: "Workshop — Blues & Improvisation" },
      { name: "Elena Vasilkova", role: "Session lead — Audio for Total Beginners" },
      { name: "Anna Ferro", role: "Session lead — Audio for Total Beginners, Visuals" },
      { name: "Joel Schäfer", role: "Session lead — Connections" },
      { name: "Lisa Passing", role: "Session lead — Strudel" },
      { name: "Andreea-Cristina Mircea", role: "Participant" },
      { name: "Aydin Thill", role: "Participant" },
      { name: "Aljoša Dakić", role: "Participant" },
      { name: "Philipp Gerdes", role: "Participant" },
      { name: "Moritz Huson", role: "Participant" },
      { name: "Imogen Drews", role: "Participant" },
      { name: "Alexandra Lindt", role: "Guest student" },
    ],
    keywords: [
      "Jam session",
      "Blues",
      "Improvisation",
      "Layering",
      "Ableton Live",
      "TouchDesigner",
      "Audio reactivity",
      "MIDI",
      "OSC",
      "Live coding",
      "Strudel",
      "Collaboration",
      "Live performance",
    ],
    longDescription: `
Seven sessions running from October 2025 to February 2026, built so that participants with and without a musical background could find their own way of making sound and image — and then play together. The series moved from getting to know each other, through audio, visuals and the connections between them, to live coding and open project time, and closed with presentations and a big group jam.

**Session 1 — Making Waves: Introduction & Shared Inspirations** (23 Oct 2025)
Setting the tone. After an overview of the series, *Currents & Tides* was presented as an example of sound, experiment and collaboration, with a short demo. Everyone shared a piece of music or art they made or that inspires them, their perspective on creative practice, and what they hoped to explore and bring to the group. A tech test followed — connecting different instruments to the main audio interface so jam sessions could happen — along with first small-group experiments, and a reflection circle on how we listen, analyse and reimagine sound.

**Session 2 — A/V Performances: Audio for Total Beginners** (6 Nov 2025)
Led by Elena Vasilkova and Anna Ferro, with a workshop on blues & improvisation by Angela Brennecke. Sound creation, rhythm, layering and collaborative play. Blues served as a shared basis for jamming — a short history, the typical patterns, and how to transform them into a starting point for artistic expression and improvisation. Each participant chose a sound-making tool — a DAW, a hardware instrument, a programming environment, their voice or any object — learned its basics, and explored layering textures and rhythms. In a layering jam, participants entered one by one to build an evolving shared piece, listening for when to come in and when to leave space, before reflecting together on what emerged.

**Session 3 — A/V Performances: Visuals** (20 Nov 2025)
Led by Anna Ferro. Visual ideation, generative art, audio reactivity and live performance. A warm-up turned a song into a moodboard. After a showcase of TouchDesigner projects, a beginner workshop covered the node families with a focus on TOPs and SOPs — noise, feedback, displace, geometries and particles — building several visuals with different techniques. Participants then connected a MIDI controller to manipulate visuals live, and the session closed with tips for continuing and a first look at audio reactivity.

**Session 4 — Connections** (11 Dec 2025)
Led by Joel Schäfer. Connecting audio and visuals. A short presentation covered audio and video reactivity, direct modulation, audio vs. MIDI vs. OSC, and the difference between live instruments and interactive installations. The group applied these ideas to each participant's own audio tools on a shared Miro board, then put them into practice in an Ableton Live and TouchDesigner workshop, followed by open time for individual support, experiments and jamming.

**Session 5 — Strudel** (15 Jan 2026)
Led by Lisa Passing. An introduction to live coding as a practice and to Strudel for live coding audio — followed by jamming.

**Session 6 — Open Project Work / Jamming** (29 Jan 2026)
Project continuation, rehearsals and experiments in the AudioLab — open project time, jam labs, help, and informal sharing and feedback.

**Session 7 — Project Presentations & Big Group Jam** (5 Feb 2026)
Participants presented their projects, played a big group jam, and discussed feedback and ideas for the future — with beer.
    `.trim(),
    gallery: [
      { src: "/images/ws2526/workshop-table.jpg", caption: "At the workshop table" },
      { src: "/images/ws2526/braindance-presentation.jpg", caption: "Braindance — a presentation on the history of IDM" },
      { src: "/images/ws2526/idm-influence.jpg", caption: "IDM influence now — Persona by Rival Consoles" },
      { src: "/images/ws2526/untangling-cables.jpg", caption: "Untangling cables, keys at the ready" },
      { src: "/images/ws2526/workshop-room.jpg", caption: "Workshop room — bass, keys and laptops around the table" },
      { src: "/images/ws2526/audiolab-session.jpg", caption: "Jamming in the AudioLab" },
    ],
  },

  // ── 7. xCoAx Dundee ──────────────────────────────────────
  {
    timelineLabel: "JAN–JUL 25",
    date: "2025-07-01",
    displayDate: "Jan – Jul 2025",
    category: "PRF",
    coverImage: "/images/archive/group.jpg",
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
      { src: "/images/archive/research-paper-presentation-angela.jpg", caption: "Angela presenting Currents & Tides at xCoAx 2025" },
      { src: "/images/archive/research-paper-presentation.jpg", caption: "The three acts — Tidal Drift, Multimodal Recursions, Hybrid Rituals" },
      { src: "/images/archive/practice-2.jpg", caption: "Group rehearsal session" },
      { src: "/images/archive/practice-0.jpg", caption: "Workshop practice with controllers" },
      { src: "/images/archive/practice-3.jpg", caption: "Duo practice with keyboard and vocals" },
      { src: "/images/archive/practice-1.jpg", caption: "Setup with projection and modular gear" },
      { src: "/images/archive/img-2382.jpg", caption: "Elektron Digitakt and modular synth setup" },
      { src: "/images/archive/img-2433.jpg", caption: "Performing with modular synthesizer" },
      { src: "/images/archive/lena-02.jpg", caption: "Act I — Tidal Drift performance" },
      { src: "/images/archive/lena.jpg", caption: "Abstract visuals during Act I" },
      { src: "/images/archive/2-act.jpg", caption: "Act II — Multimodal Recursions visuals" },
      { src: "/images/archive/2-act-2.jpg", caption: "Act II — Golden dome projection" },
      { src: "/images/archive/2-act-3.jpg", caption: "Act II — Wide shot with audience" },
      { src: "/images/archive/hybrid-realms.jpg", caption: "Act III — Hybrid Rituals visuals" },
      { src: "/images/archive/hybrid-2.jpg", caption: "Act III — Earth landscape projection" },
      { src: "/images/archive/group-after-performance.jpg", caption: "Group photo after the performance" },
    ],
  },

  // ── 6. Spatial Audio WS24/25 ─────────────────────────────
  {
    timelineLabel: "JAN 25",
    date: "2025-01-01",
    displayDate: "Jan 2025",
    category: "WRK",
    coverImage: "/images/archive/tempimagekgomun.jpg",
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
      { src: "/images/archive/tempimagetlmnw5.jpg", caption: "What is Ambisonics? — spherical harmonics and microphone patterns" },
      { src: "/images/archive/tempimage4p5jzp.jpg", caption: "Wavefield synthesis — speaker array and wave propagation" },
      { src: "/images/archive/tempimageeghrtn.jpg", caption: "EBU Norm R128 — loudness normalization and LUFS" },
      { src: "/images/archive/tempimageypzrpe.jpg", caption: "Whiteboard — signal flow and spherical harmonics notation" },
      { src: "/images/archive/tempimage43ko88.jpg", caption: "Explaining signal flow concepts" },
      { src: "/images/archive/tempimagehc7c4t.jpg", caption: "Hands-on with microphone and Zoom F4 recorder" },
      { src: "/images/archive/tempimagexqjrhs.jpg", caption: "Zoom F4 field recorder with Zylia microphone" },
      { src: "/images/archive/tempimagembmgct.jpg", caption: "Zoom F4 MultiTrack Field Recorder display" },
      { src: "/images/archive/tempimage3jreji.jpg", caption: "Portable recording equipment setup" },
      { src: "/images/archive/tempimagebn2ezf.jpg", caption: "Sennheiser AMBEO A-B Format Converter in Reaper" },
    ],
  },

  // ── 5. 70-Year Anniversary Performances ──────────────────
  {
    timelineLabel: "NOV 24",
    date: "2024-11-05",
    displayDate: "Nov 2024",
    category: "PRF",
    coverImage: "/images/archive/dscf0460-jpg.jpeg",
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
      { src: "/images/archive/dscf0355-jpg.jpeg", caption: "Control booth — TouchDesigner and mixing desk" },
      { src: "/images/archive/dscf0385-jpg.jpeg", caption: "Trio performing with sunflower visuals" },
      { src: "/images/archive/dscf0389-jpg.jpeg", caption: "Live set with dual laptops" },
      { src: "/images/archive/dscf0410-jpg.jpeg", caption: "Solo performance with blue/pink lighting" },
      { src: "/images/archive/dscf0423-jpg.jpeg", caption: "Trio concentrated at the decks" },
      { src: "/images/archive/dscf0431-jpg.jpeg", caption: "Modular synth and patch cables" },
      { src: "/images/archive/dscf0434-jpg.jpeg", caption: "Abstract blue visuals projection" },
      { src: "/images/archive/dscf0442-jpg.jpeg", caption: "Wide shot with geometric visuals and crowd" },
      { src: "/images/archive/dscf0444-jpg.jpeg", caption: "Outdoor stage with colorful block visuals" },
      { src: "/images/archive/dscf0454-jpg.jpeg", caption: "Balcony view — library and photo exhibition" },
      { src: "/images/archive/dscf0458-jpg.jpeg", caption: "Aerial view with cloud visuals" },
      { src: "/images/archive/dscf0479-jpg.jpeg", caption: "Psychedelic visuals and packed crowd" },
      { src: "/images/archive/dscf0493-jpg.jpeg", caption: "Stage setup with purple lighting" },
      { src: "/images/archive/dscf0504-jpg.jpeg", caption: "City of Film Potsdam banner and stage" },
      { src: "/images/archive/dscf0519-jpg.jpeg", caption: "Performer with flight case and red lighting" },
      { src: "/images/archive/dscf0528-jpg.jpeg", caption: "Solo set with magenta lighting" },
      { src: "/images/archive/dscf0539-jpg.jpeg", caption: "Performance with green geometric visuals" },
      { src: "/images/archive/dscf0559-jpg.jpeg", caption: "Performer with palm tree projection" },
      { src: "/images/archive/dscf0572-jpg.jpeg", caption: "Purple geometric visuals and performance" },
    ],
  },

  // ── 4. Superbooth ────────────────────────────────────────
  {
    timelineLabel: "MAY 24",
    date: "2024-05-01",
    displayDate: "May 2024",
    category: "VST",
    coverImage: "/images/archive/tempimaget6jh10.jpg",
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
      { src: "/images/archive/tempimagefny9sy.jpg", caption: "Modular synthesis up close" },
      { src: "/images/archive/tempimage3tpert.jpg", caption: "Live modular performance" },
      { src: "/images/archive/tempimageryk6ts.jpg", caption: "Workshop space at Superbooth" },
      { src: "/images/archive/img-2697.jpg", caption: "Moog booth" },
      { src: "/images/archive/tempimagegzpthc.jpg", caption: "Hand-shaped PCB controller" },
      { src: "/images/archive/tempimage50btgp.jpg", caption: "Superbooth outdoor area" },
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
      { src: "/images/archive/1.jpg", caption: "Drumkit overview presentation" },
      { src: "/images/archive/2.jpg", caption: "Historical context — the cat piano" },
      { src: "/images/archive/3.jpg", caption: "Synthstrom Deluge in action" },
      { src: "/images/archive/4.jpg", caption: "Guitar practice with audio interface" },
      { src: "/images/archive/6.jpg", caption: "Workshop space — guitars and controllers" },
      { src: "/images/archive/7.jpg", caption: "Working with Elektron Digitakt II" },
      { src: "/images/archive/8.jpg", caption: "Group collaboration session" },
      { src: "/images/archive/9.jpg", caption: "Bass and guitar duo" },
    ],
  },

  // ── WS23/24 Workshop ─────────────────────────────────────
  {
    timelineLabel: "JAN 24",
    date: "2024-01-29",
    displayDate: "29 Jan – 2 Feb 2024",
    category: "WRK",
    coverImage: "/images/archive/process-8.jpg",
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
      { src: "/images/archive/process-2.jpg", caption: "Workshop overview — Nirvana album discussion" },
      { src: "/images/archive/process-3.jpg", caption: "Martin Gordon on rhythm grids" },
      { src: "/images/archive/process-4.jpg", caption: "Angela Brennecke on scales" },
      { src: "/images/archive/process-5.jpg", caption: "Overtones and harmonics" },
      { src: "/images/archive/process-6.jpg", caption: "Musical modes theory" },
      { src: "/images/archive/process-1-2.jpg", caption: "Martin Gordon on time signatures" },
      { src: "/images/archive/process-9.jpg", caption: "Novation Launch Control setup" },
      { src: "/images/archive/3-2.jpg", caption: "Tolga Tolun on Deluge" },
      { src: "/images/archive/ski-1.jpg", caption: "Group collaboration" },
      { src: "/images/archive/ski-2.jpg", caption: "Recording session" },
      { src: "/images/archive/3eva-1.jpg", caption: "3Eva — production session" },
      { src: "/images/archive/3eva-2.jpg", caption: "Working in Ableton Live" },
      { src: "/images/archive/vegan-1.jpg", caption: "Vegan Cheesecake — Arturia MiniLab" },
      { src: "/images/archive/vegan-2.jpg", caption: "Vegan Cheesecake — Arturia KeyStep" },
      { src: "/images/archive/vegan.png", caption: "Track artwork — The Vegan Cheesecakes" },
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
      { src: "/images/archive/img-6695.jpg", caption: "Performance setup in CX Studio" },
      { src: "/images/archive/img-6690.jpg", caption: "Projected visuals — wave particles" },
      { src: "/images/archive/img-6691.jpg", caption: "Performance in progress" },
      { src: "/images/archive/img-6692.jpg", caption: "Live set with colorful visuals" },
      { src: "/images/archive/img-6693.jpg", caption: "Abstract light visuals" },
      { src: "/images/archive/img-6694.jpg", caption: "Quartet performing together" },
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
      { src: "/images/archive/224565359-320e0252-161d-4058-bc26-e747a61eb141.jpg", caption: "Lara Frank on granular synthesis plugins" },
      { src: "/images/archive/tempimagetdb2jm.jpg", caption: "Six Thinking Hats — creative process framework" },
      { src: "/images/archive/tempimagen62s1a.jpg", caption: "Ableton Live with Arturia MiniLab" },
      { src: "/images/archive/tempimagegcpzcp.jpg", caption: "Akai MPC Live II — dawless workflow" },
      { src: "/images/archive/tempimagelcdac7.jpg", caption: "Cable setup and audio interface" },
      { src: "/images/archive/tempimagembpb0t.jpg", caption: "Rita Eperjesi — Resolume Arena workshop" },
      { src: "/images/archive/224735932-975650eb-c54f-4ad8-b3ba-7dee26a00295.png", caption: "Performance setup — Elektron Syntakt + Digitone" },
      { src: "/images/archive/224736378-0a3fbd59-9149-4963-9200-3c2ee2709d29.png", caption: "Performance setup — Octatrack + Roland MC-707" },
      { src: "/images/archive/225284679-77fa05ce-b10b-44f8-9349-a30f9e23ef38.jpg", caption: "Performance setup — Deluge, Launchpad, Resolume" },
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
