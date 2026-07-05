---
name: baha-satgun-design
description: Use this skill to generate well-branded interfaces and assets for Baha Satgun's portfolio brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping — a dark, monochrome, terminal-flavored personal-portfolio aesthetic.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- **Entry point:** link `styles.css` (it `@import`s all tokens + the JetBrains Mono webfont).
- **The look in one line:** near-black void, faint crimson particle-grid texture, white light-weight text, JetBrains Mono for labels/UI + Times New Roman for prose, square corners, hairline borders, links/cards that **charge to crimson with a glow** on hover (cyan is the sparse secondary glint). Calibrated to the owner's profile picture. Monochrome base — no purple, no gradients-as-decoration, no emoji.
- **Tokens:** `tokens/*.css` — colors, typography, spacing, effects, fonts.
- **Components:** `components/{actions,content,portfolio}/` — Button, IconButton, Card, Badge, SectionLabel, Divider, SocialLink, ProjectCard. Each has a `.prompt.md` with usage.
- **UI kit:** `ui_kits/portfolio/` — the full single-page site to copy from.
- **Assets:** `assets/` — GitHub, LinkedIn, UQAM logos (PNG/JPG).
- **No logo exists** — set the name `baha satgun` in JetBrains Mono wherever a mark is needed.
