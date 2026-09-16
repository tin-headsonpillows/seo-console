The top-level marketing nav — one per page, pinned at the top.

```jsx
<TopNav
  logo={<Wordmark />}
  items={[{ label: "Product" }, { label: "Solutions" }, { label: "Resources" }, { label: "Pricing" }, { label: "Agencies" }]}
  onStartClick={() => nav("/signup")}
/>
```

- Always exactly one primary button (`Start free`) and one text link (`Log in`) at the right.
- Menu items are plain links in `nav-link` type — no active-pill treatment here (that's `NavPillGroup`, used for in-page mode switchers, not the top nav).
