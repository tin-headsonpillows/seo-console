Glyph wrapper around Lucide (CDN) — a documented substitute for SEO Console's own icon set, which the source material didn't include.

```jsx
<Icon name="search" size={16} />
<Icon name="arrow-right" size={18} color="var(--text-muted)" />
```

Load `https://unpkg.com/lucide@latest` (or the pinned version in the UI kit) once per page before mounting any `Icon`. Stroke weight 1.75 matches the system's geometric, not-too-thin feel.
