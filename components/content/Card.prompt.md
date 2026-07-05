**Card** — a dark surface (`--bg-surface`) with a hairline border and square corners. The base container for grouped content: project entries, experience rows, photo tiles.

```jsx
<Card>Static content block</Card>
<Card interactive onClick={open}>Clickable — border + fill brighten on hover</Card>
```

Set `interactive` for clickable cards (adds hover feedback and pointer cursor). Override `padding` for dense or roomy layouts. Keep corners square — that's the brand default.
