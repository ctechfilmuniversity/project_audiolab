# AUDIOLAB website: how to add new content

The AUDIOLAB and Making Waves site lives here:
**https://ctechfilmuniversity.github.io/project_audiolab/**

Everything can be done in the browser on github.com. You don't need to install anything or use a terminal.

Every time you save a change ("commit") on GitHub, the site rebuilds itself. About **2–3 minutes** later the change is online.

---

## Contents

1. [The basic routine: edit a file in the browser](#1-the-basic-routine-edit-a-file-in-the-browser)
2. [Upload pictures](#2-upload-pictures)
3. [Add a Making Waves entry (workshop, performance, jam, visit)](#3-add-a-making-waves-entry)
4. [Add a work to the AUDIOLAB homepage list](#4-add-a-work-to-the-audiolab-homepage-list)
5. [Change texts you already have](#5-change-texts-you-already-have)
6. [Check it went online, and what to do if it didn't](#6-check-it-went-online)
7. [Where everything is](#7-where-everything-is)

---

## 1. The basic routine: edit a file in the browser

1. Open the repository: https://github.com/ctechfilmuniversity/project_audiolab
2. Click your way to the file (for example `lib` → `events-data.ts`).
3. Click the **pencil icon** ✏️ at the top right of the file.
4. Make your change.
5. Click the green **Commit changes…** button. Write a short note about what you changed (for example "Add WS26/27 workshop"). Leave "Commit directly to the main branch" selected and confirm.
6. Wait 2–3 minutes and reload the site.

> **Tip:** before editing, copy the whole file somewhere (a text file is fine). If something goes wrong you can paste the old version back.

---

## 2. Upload pictures

Pictures go into the folder `public/images/`. Give each event its own folder, for example `public/images/ws2627/`.

1. Open https://github.com/ctechfilmuniversity/project_audiolab/tree/main/public/images
2. Click **Add file → Upload files**.
3. To create a new folder, upload the files first. Then click the pencil in the file name field, type `ws2627/` in front of the name and press Enter. (Or go into an existing folder first.)
4. Drag the pictures in and click **Commit changes**.

**Rules for pictures**
- Use **.jpg**, about **1600–2000 px** wide and under **1 MB** each. Bigger files make the site slow.
- File names: lowercase, no spaces, no umlauts. Use `-` between words.
  ✅ `group-jam.jpg` ❌ `Group Jam (final) Ä.JPG`
- In the content file you write the path **without** `public`:
  the file `public/images/ws2627/group-jam.jpg` → is written as `"/images/ws2627/group-jam.jpg"`

---

## 3. Add a Making Waves entry

All Making Waves workshops, performances, jams and visits are in **one file**:
`lib/events-data.ts` → [open it](https://github.com/ctechfilmuniversity/project_audiolab/blob/main/lib/events-data.ts)

Each entry is one block between `{` and `},`. The order doesn't matter: the site sorts the timeline by date by itself.

### Step by step

1. Upload the pictures first (see section 2).
2. Open `lib/events-data.ts` and click the pencil.
3. Find the line `export const events: Event[] = [`.
4. Put your cursor **directly after** that line and paste the template below.
5. Fill it in, then commit.

### Template (copy all of it)

```ts
  // ── WS26/27 workshop ────────────────────────────────────
  {
    timelineLabel: "OCT 26 – FEB 27",
    date: "2026-10-15",
    displayDate: "Oct 2026 – Feb 2027",
    category: "WRK",
    coverImage: "/images/ws2627/cover.jpg",
    title: "Title of the workshop",
    subtitle: "Optional second line",
    shortDescription: "One or two sentences. This is shown on the card.",
    people: [
      { name: "Angela Brennecke", role: "Workshop lead" },
      { name: "First Last", role: "Participant" },
    ],
    keywords: [
      "Live coding",
      "TouchDesigner",
    ],
    longDescription: `
First paragraph of the long text.

Second paragraph. Leave one empty line between paragraphs.

**Session 1 — Title** (15 Oct 2026)
What happened in the session.
    `.trim(),
    embeds: [
      { type: "youtube", url: "https://www.youtube.com/watch?v=XXXX", label: "Performance video" },
    ],
    gallery: [
      { src: "/images/ws2627/group-jam.jpg", caption: "The final group jam" },
      { src: "/images/ws2627/setup.jpg", caption: "Setting up" },
    ],
  },
```

### What each field means

| Field | What to write | Required? |
|---|---|---|
| `timelineLabel` | Short date on the timeline, in capitals: `"OCT 26"` or `"OCT 26 – FEB 27"` | yes |
| `date` | Start date as `"YYYY-MM-DD"`. Only used for sorting. | yes |
| `displayDate` | The date as people should read it: `"Oct 2026 – Feb 2027"` | yes |
| `category` | `"WRK"` workshop · `"PRF"` performance · `"JAM"` jam · `"VST"` visit | yes |
| `coverImage` | The main picture, path as in section 2 | yes |
| `title` | Name of the event | yes |
| `subtitle` | A second line under the title | no, delete the line if not needed |
| `shortDescription` | 1–2 sentences for the card | yes |
| `people` | One line per person, `role` is optional | no |
| `keywords` | Tools, topics, skills, one per line | no |
| `longDescription` | The full text (see below) | no |
| `embeds` | Videos and links (see below) | no |
| `gallery` | More pictures with captions | no |

If you don't need an optional field, delete the whole thing, including its `[ ... ],` part.

### Formatting in `longDescription`

- Empty line = new paragraph
- `**bold**` → **bold**
- `*italic*` → *italic*
- `[link text](https://example.com)` → a link

The text must stay between the two backticks: `` longDescription: ` `` … `` `.trim(), ``

### Videos and links (`embeds`)

Each one shows up as a link button with a small icon. `type` sets the icon: `"youtube"`, `"vimeo"`, `"soundcloud"`, `"instagram"`, `"github"`.

```ts
    embeds: [
      { type: "youtube", url: "https://www.youtube.com/watch?v=XXXX", label: "Sound demo" },
      { type: "instagram", url: "https://www.instagram.com/reel/XXXX/", label: "Reel" },
    ],
```

For a cloud folder (owncloud and similar), use any type that fits (for example `"vimeo"` for video) and paste the folder link.

### The 5 mistakes that break the build

The file is code, so small typos stop it from building. Check these before you commit:

1. **Every text has quotes** at both ends: `title: "Like this",`
2. **Every line ends with a comma**, and so does every block: `},`
3. **Quotes inside a text** need a backslash: `"The \"Untangling\" session"`. Or use typographic quotes: `“Untangling”`.
4. **Backticks (`) are not allowed** inside `longDescription`.
5. **Brackets come in pairs**: every `{` has a `}` and every `[` has a `]`.

If something goes wrong anyway, the old site stays online. Nothing breaks for visitors. See section 6.

---

## 4. Add a work to the AUDIOLAB homepage list

The list of works on the homepage (papers, performances, projects), with the four research-area filters, is in:
`app/page.tsx` → [open it](https://github.com/ctechfilmuniversity/project_audiolab/blob/main/app/page.tsx)

Find the line `const ENTRIES: IndexEntry[] = [` and paste a new block right after it:

```ts
  {
    cat: "PUB",
    pillars: ["GEN", "LAV"],
    title: "Title of the paper or work",
    summary: "One or two sentences: who, what, where.",
    when: "2026",
  },
```

| Field | What to write |
|---|---|
| `cat` | `"PUB"` publication · `"PRF"` performance · `"WRK"` workshop · `"MTH"` method |
| `pillars` | The research areas it belongs to (one or more): `"RTS"` Real-Time Sound Systems · `"SYN"` Sound Synthesis · `"LAV"` Live Audiovisual Performance · `"GEN"` Generative Music |
| `title` | Title |
| `summary` | Short text |
| `when` | Year, or `"Ongoing"` |
| `href` | Optional. A link, for example `href: "https://doi.org/..."` |

The four research-area texts are in the same file, a bit higher up, under `const PILLARS`. Each has `h:` (heading) and `p:` (text). You can edit those the same way.

> A work with its own full page (like *Untracked*) needs a bit of code. Write to Nina for those.

---

## 5. Change texts you already have

- **A Making Waves entry:** in `lib/events-data.ts`, press `Ctrl+F` / `Cmd+F` and search for the title.
- **The Untracked page:** `lib/projects-data.ts`
- **Homepage texts and research areas:** `app/page.tsx`
- **Making Waves intro ("about") text:** `components/about.tsx`
- **Footer (contact, address):** `components/footer.tsx`

Only change what's **inside the quotes**. Leave everything else as it is.

---

## 6. Check it went online

1. After committing, open the **Actions** tab: https://github.com/ctechfilmuniversity/project_audiolab/actions
2. The top line is your change:
   - 🟡 yellow circle = it's building, wait
   - ✅ green tick = online. Reload the site (on a Mac press `Cmd+Shift+R` to skip the cache).
   - ❌ red cross = there's a typo. **The old site is still online.**

**If it's red:**
1. Click the red line, then **build**. The error message usually names the file and the line number, for example `events-data.ts:52`.
2. Open that file, go to that line and check it against "the 5 mistakes" in section 3.
3. Fix it and commit again.
4. Still stuck? Open the file → **History** (clock icon) → choose the last working version, copy its content back in and commit. Or write to Nina.

---

## 7. Where everything is

```
lib/events-data.ts      ← Making Waves entries (timeline + cards)
lib/projects-data.ts    ← the Untracked page text
app/page.tsx            ← AUDIOLAB homepage: research areas + list of works
components/about.tsx    ← Making Waves intro text
components/footer.tsx   ← footer
public/images/          ← all pictures (one folder per event)
.github/workflows/      ← automatic build, don't change
```

**Second copy:** there is also a preview copy at https://audio-lab-group.vercel.app. It only updates when Nina syncs it. The official site is the GitHub one above.

---

*For developers:* Next.js (static export), pnpm. Run it locally with `pnpm install && pnpm dev`. The GitHub Pages build sets `NEXT_PUBLIC_BASE_PATH=/project_audiolab`, and `lib/asset.ts` adds that prefix to image paths.
