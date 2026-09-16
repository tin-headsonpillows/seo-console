Used to switch between 2-3 sibling product modes or views — the pill-in-pill treatment is one of the brand's signature components.

```jsx
const [mode, setMode] = React.useState("Projects");
<NavPillGroup segments={["Projects", "Pro", "Agencies"]} active={mode} onChange={setMode} />
```

- Exactly 2-3 segments; more should become a `TopNav` menu instead.
- The active segment's white-pill + soft-shadow treatment IS the active state — don't add an underline or color change on top of it.
