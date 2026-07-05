**IconButton** — square, borderless control holding a single icon asset or glyph; fades from muted gray to white on hover. Use for social links, toolbar actions, and compact icon affordances.

```jsx
<IconButton label="GitHub" href="https://github.com/bkfsss">
  <img src="assets/icons8-github-50.png" width="20" alt="" />
</IconButton>
```

Set `size` for the hit area (default 36px, keep ≥44px for primary mobile targets). Pass `href` to render as a link. Always provide `label` for accessibility.
