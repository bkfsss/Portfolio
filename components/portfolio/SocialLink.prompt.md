**SocialLink** — an icon link for the footer social row (GitHub, LinkedIn, …). Lifted from the source site's footer. The icon rests dimmed and brightens to full white on hover.

```jsx
<SocialLink href="https://github.com/bkfsss" label="GitHub"
  icon="assets/icons8-github-50.png" />
<SocialLink href="https://linkedin.com/in/..." label="LinkedIn"
  icon="assets/linkedin-square-icon.png" showLabel />
```

Always opens in a new tab. Set `showLabel` to pair the mono label with the icon. Lay several out in a centered flex row with a gap for the classic footer.
