A circular 36px icon-only control — use for carousel arrows, share and "view more" affordances beside a card or heading.

```jsx
<IconButton label="Previous"><Icon name="arrow-left" size={16} /></IconButton>
<IconButton label="Next"><Icon name="arrow-right" size={16} /></IconButton>
```

- Always perfect circles (`--radius-full`) at exactly 36px — the spec accepts this below the 44px touch minimum because the full-circle silhouette reads as the target.
- Never fill it with `--color-primary`; the filled action is `Button`.
