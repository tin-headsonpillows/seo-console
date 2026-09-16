Inline link inside running text, footer link columns and card footers.

```jsx
<p>Read the <TextLink href="/docs">crawl budget guide</TextLink>.</p>
<TextLink tone="on-dark" size="body-sm">Site audits</TextLink>
```

- Default tone is `ink` — this brand keeps inline links monochrome. `tone="accent"` is a deliberate exception, used a couple of times per page at most.
- Footer link rows use `tone="on-dark"` at `body-sm`.
