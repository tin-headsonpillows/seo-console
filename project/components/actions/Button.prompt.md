The system's primary action — use for the single main CTA in any band ("Start free", "Run audit", "Choose plan"); everything secondary drops to `variant="secondary"` or `"text"`.

```jsx
<Button href="/signup">Start free</Button>
<Button variant="secondary" iconLeft={<Icon name="play" size={16} />}>Watch demo</Button>
<Button variant="text">Log in</Button>
<Button disabled>Run audit</Button>
```

- `primary` is the only filled variant on light surfaces. Never tint it with the accent blue or a badge pastel — the action layer is monochrome.
- `inverse` (white fill, ink label) is for the featured dark pricing tier and the dark footer only.
- One primary per band. Pair with `secondary` or `text` for the alternate path.
- No hover styling: primary darkens on press (#242424) and that is the whole state model.
