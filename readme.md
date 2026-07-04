# Baha Satgun — Portfolio Design System

A design system distilled from the personal portfolio of **Baha Satgun**, a software-engineering student at UQAM (Montréal) with interests in **photography** and **video games**. It captures the site's minimal, dark, terminal-flavored aesthetic and extends it into a reusable system for building on-brand pages, mocks, and prototypes.

## Sources

- **GitHub — [bkfsss/Portfolio](https://github.com/bkfsss/Portfolio)** — the personal portfolio site (single `index.html` + `style.css`). This is the ground truth for every value in this system. *Explore it further to build richer, more faithful designs.*
- Related repos by the same author (not used directly, but context): [bkfsss/Coding-Trainer](https://github.com/bkfsss/Coding-Trainer), [bkfsss/bottleneck-stocktracker](https://github.com/bkfsss/bottleneck-stocktracker).

The source is a small work-in-progress: a centered black page with a dotted-grid texture, white light-weight text, and `education / experience / projects` section labels set in monospace, with content lines in Times New Roman. Several sections are scaffolded but empty; this system fills those gaps consistently.

---

## Content fundamentals

**Voice: quiet, lowercase, unshowy.** The site speaks in fragments, not marketing.

- **Casing.** Section labels and UI are **lowercase mono** (`education`, `experience`, `projects`). Content/prose is **sentence case serif**. Never TITLE CASE, never ALL CAPS except for tiny wide-tracked eyebrows.
- **Person.** First person, implied. The site is *about* Baha but rarely says "I" — it lets the labels and lists carry the meaning. When "I" appears, keep it lowercase-comfortable and dry ("i write code, take photographs, and lose evenings to video games").
- **Tone.** Understated, faintly wry, technical. No hype, no exclamation marks, no buzzwords. A joke is allowed if it's deadpan.
- **Emoji.** None. The brand is monochrome type; emoji would break it.
- **Length.** Short. Labels are one word. Blurbs are one sentence. Prose columns stay under ~42ch.
- **Examples.**
  - Label: `projects`
  - Project blurb: "A CLI that pulls the sharpest still from any video clip."
  - Tagline: "Software engineering student. I write code, take photographs, and lose evenings to video games."

---

## Visual foundations

**Overall vibe:** a terminal window meets a printed contact sheet — nudged toward **Mikoshi / Cyberpunk 2077** and calibrated to the owner's profile picture: *a hot crimson figure dissolving into particles against near-black, with sparse cyan data-glints*. Same minimal, hairline, two-typeface structure, but with a crimson charge. Restraint is the rule; the accent **glows**, it doesn't flood.

- **Color.** Base stays **monochrome** — white ink, gray de-emphasis ramp — over a **near-black void** (`--void-0 #050609`). The primary live accent is **figure crimson `#ff2450`** (`--accent-red`): links rest white and **charge to crimson with a glow** on hover (the source's fade-on-hover, re-tuned). **Cyan `#3fd9e0`** (`--accent-cyan`) is the *secondary* — sparse teal glints, used sparingly, exactly as in the picture. No purple gradients. (See `tokens/colors.css`.)
- **Background.** The signature **radial dotted grid** carries a faint **crimson cast** (`rgba(255,64,96,.10)`, 24px pitch) so it reads as the particle mesh from the picture. Full pages layer it over a near-black radial with a faint red vignette; immersive surfaces (the gallery) add a **scanline overlay** (`--texture-scan`). Framed imagery uses a crimson hairline + inner glow.
- **Typography.** Two families, mixed deliberately: **JetBrains Mono** for labels/UI/nav (the terminal voice) and **Times New Roman** for names and prose (the literary counterweight). Base weight is **light (300)** everywhere — nothing is heavy. Body line-height is generous at **1.7**. Mono eyebrows ride wide (`0.18em`) and lowercase.
- **Spacing.** 8px rhythm; the 24px dot pitch doubles as a spacing anchor. Layout is a **slim centered column** (~720px) — the page is a single vertical stack, not a grid of panels.
- **Corners.** **Square by default** (`--radius-0`). Rounding is the rare exception, not the rule — it reads as terminal/utilitarian.
- **Borders.** Semi-transparent white **hairlines** (`rgba(255,255,255,.12)`), 1px. Structure is drawn with thin lines and generous negative space, not fills or shadows.
- **Cards.** Dark surface (`#141414`), 1px hairline border, square corners, no shadow at rest. Interactive cards **brighten their border to crimson + add a soft red glow** on hover — they charge, they do not lift.
- **Shadows & glow.** Structural shadows stay minimal (menus, modals). The cyberpunk layer adds **crimson glows** (`--glow-red-sm/md/text`) for hover charge, focus rings, and framed imagery, plus **cyan glints** (`--glow-cyan-sm/md`) for the sparse secondary sparkle. Use glow as an accent, not everywhere.
- **Animation.** Restrained. The one canonical motion is a **`0.3s ease` color/glow transition** on hover (from the source). Frames fade in on the gallery slider. No bounces, no parallax, no infinite loops.
- **Hover states.** Text/links → **charge to crimson + glow** (icons: muted → crimson with a drop-shadow). Cards → crimson border + glow. Buttons → crimson border/text + glow. Everything at `0.3s`.
- **Press states.** No dramatic shrink; rely on the natural active state. Keep it quiet.
- **Transparency & blur.** Used sparingly — borders are semi-transparent white; no glassmorphism, no heavy blur.
- **Imagery vibe.** Cool, dark, high-contrast, monochrome-leaning — think black-and-white contact sheets and gameplay stills. Photos sit in bordered frames with a small mono caption (focal length / frame number), never full-bleed.

---

## Iconography

- **Approach:** sparse. The source uses only **PNG social icons** (a blue LinkedIn square, a GitHub glyph) and a small **UQAM logo JPG** — all copied into `assets/`. There is no icon font, no SVG icon set, and no emoji anywhere in the source.
- **Real assets shipped** (in `assets/`): `profile.png` (the owner's profile picture — the crimson-figure image that sets the palette, also used as the header avatar), `icons8-github-50.png`, `linkedin-square-icon.png`, `logo_uqam.jpg`.
- **Unicode as icons:** the only glyph used decoratively is a lightweight arrow (`↗`) on project cards to signal an outbound link. Keep glyph use to that level — functional, monochrome, never emoji.
- **If you need more icons:** match the existing weight — thin, monochrome, understated. A **Lucide** (1.5px stroke, CDN) set is the closest match if a broader icon set becomes necessary; flag any such addition as a substitution, since the source defines none.

## Logo

**There is no logo in the source.** The `index.html` references a `B logo.png` that does not exist in the repo. Per brand rules, none was invented. Wherever a mark is needed, **render the name in JetBrains Mono** (`baha satgun`, lowercase) — that wordmark *is* the brand. See the "Wordmark" card under Brand.

## Font substitutions

- The source used generic CSS `monospace` (via `<tt>`). Canonicalized here as **JetBrains Mono** (Google Fonts). *Flagged substitution — provide a preferred mono if you have one.*
- The source used system **Times New Roman** for content; kept as-is (no download needed).

---

## Components

Reusable primitives live under `components/`, grouped by concern. All are monochrome, mono-typed, square-cornered, and reference the CSS tokens.

**actions/**
- **Button** — action primitive; `solid` / `outline` / `ghost`, `sm` / `md`, `href` support.
- **IconButton** — square, borderless single-icon control; muted → white on hover.

**content/**
- **Card** — dark surface with hairline border; optional `interactive` hover.
- **Badge** — small mono chip for tech tags / statuses (`outline` / `solid` / `muted`).
- **SectionLabel** — the signature numbered lowercase mono section header.
- **Divider** — hairline rule, optionally labelled or vertical.

**portfolio/**
- **SocialLink** — footer icon link (GitHub / LinkedIn); dims → brightens on hover.
- **ProjectCard** — composed project entry (index · title · blurb · tech Badges), built on Card + Badge.

### Intentional additions

The source defines *no* formal component library — only a styled page. The set above was authored from scratch to match the extracted aesthetic. **ProjectCard** is the one composed addition beyond primitives, added to fill the source's empty `projects` section; it reuses Card + Badge rather than introducing new visuals.

---

## UI kits

- **ui_kits/portfolio/** — a high-fidelity, interactive recreation of the personal site: a top nav (wordmark + **Gallery** button), header, education (faithful UQAM row), experience, projects, and the social footer, over a near-black void with a **holographic cyan data-rain** background. Composes the primitives above. A dedicated second page — **`photography.html`** — is a Mikoshi-styled gallery that shows photos **one at a time in a centered slider** (arrows, keyboard, dots). See its `README.md` for per-section notes and liberties (experience/project/photo content is illustrative).

---

## Index / manifest

- `styles.css` — **the entry point.** Consumers link this one file. It only `@import`s the token files.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Effects) for the Design System tab.
- `components/` — `actions/`, `content/`, `portfolio/` (each: `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` HTML).
- `ui_kits/portfolio/` — the interactive site recreation.
- `assets/` — `profile.png` (crimson-figure avatar / palette source), `icons8-github-50.png`, `linkedin-square-icon.png`, `logo_uqam.jpg`.
- `SKILL.md` — Agent-Skill entry point for using this system elsewhere.

_Generated files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are produced automatically — do not edit._
