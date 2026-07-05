# Portfolio — UI kit

A high-fidelity recreation of Baha Satgun's personal portfolio site, faithful to the source at [github.com/bkfsss/Portfolio](https://github.com/bkfsss/Portfolio) and extended to fill the sections the source scaffolds but leaves empty.

## The product

One page: a slim (720px) centered column on a **near-black void** with the signature crimson-tinted dotted grid and a **holographic cyan data-rain** falling in the background (a canvas of sparse cyan streaks echoing the profile picture). A slim top nav holds the wordmark and the **Gallery** button; sections stack below, each introduced by a numbered lowercase mono `SectionLabel`. Photography lives entirely on its own page.

## Screens / sections

- **TopNav.jsx** — slim HUD header bar: a blinking crimson status dot + mono wordmark (left) and the `Button`-based **Gallery** + **Resume** links (right). Gallery → `photography.html`; Resume → `resume.pdf` (drop your PDF at `ui_kits/portfolio/resume.pdf` or repoint the href).
- **Header.jsx** — name (mono, crimson glow) + serif tagline. Recreates the source `#Name` block.
- **EducationSection.jsx** — the UQAM row, faithful to the source `.EducationBox` (logo + "CS @ UQAM", hover charges to crimson).
- **ExperienceSection.jsx** — a stack of role cards. *Fills* the source's empty `experience` scaffold with plausible content.
- **ProjectsSection.jsx** — a list of `ProjectCard`s. *Fills* the source's empty `projects` scaffold.
- **InterestsSection.jsx** — personal interests (interest `Badge`s) + the crimson-accented **Letterboxd** link (repoint the href to your account).
- **Footer.jsx** — the LinkedIn + GitHub social row, faithful to the source footer.
- **photography.html** — a *separate page* (reached via the Gallery button): a Mikoshi-styled slider showing one frame at a time, centered, with arrows / keyboard / dots. Frames are crimson-glow placeholders with a cyan glint — swap each for a real `<img>`.

## Composition

Every section composes the design-system primitives (`SectionLabel`, `Card`, `Badge`, `ProjectCard`, `SocialLink`, `Divider`) — nothing is re-implemented locally. `index.html` loads React + Babel + the compiled bundle, then each section script, then mounts `App`.

## Notes / liberties

- Experience, project, and photography content is illustrative (grounded in the owner's stated interests: software engineering, photography, games). The source sections are empty `<li>` scaffolds.
- Gallery frames are CSS placeholders — no images exist in the source.
- The background hologram is a lightweight canvas animation — dense, slow, dotted cyan data-columns that flicker as they descend; it freezes to a static field under `prefers-reduced-motion`. Crimson HUD corner brackets frame the viewport for the cyberpunk-HUD accent.
