**Button** — the brand's action primitive. Lowercase mono label, sharp corners, monochrome; use for calls-to-action, downloads, and links styled as buttons.

```jsx
<Button variant="solid">view work</Button>
<Button variant="outline" href="/cv.pdf">download cv</Button>
<Button variant="ghost" size="sm">skip</Button>
```

Variants: `solid` (white fill, black text — highest emphasis), `outline` (hairline border, default), `ghost` (muted text, appears on hover). Sizes `sm` / `md`. Pass `href` to render as an anchor. Keep labels lowercase to match the brand voice.
