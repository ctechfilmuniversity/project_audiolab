// ============================================================
//  AUDIOLAB PROJECTS — works with their own page on the AudioLab site
//  (Making Waves workshops and events stay in events-data.ts)
// ============================================================

import type { Event } from "./events-data"

export const untracked: Event = {
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
  }
