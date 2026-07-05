**ProjectCard** — a composed project entry (numbered index, mono title, serif blurb, tech-tag Badges). Fills the source site's empty `projects` section. Built on `Card` + `Badge`.

```jsx
<ProjectCard
  index="01"
  title="frame-grabber"
  blurb="A CLI that pulls the sharpest still from any video clip."
  tags={['python', 'opencv', 'ffmpeg']}
  href="https://github.com/bkfsss/frame-grabber"
/>
```

Pass `href` to make the whole card a clickable link (opens in a new tab, adds hover feedback). Stack several in a single-column list for the projects section. **Intentional addition** — see README.
