The dashboard's primary navigation, replacing the marketing site's `TopNav` entirely — this is a different product surface with its own token set (`.db-scope`).

```jsx
<TopTabNav
  items={[
    { id: "performance", label: "Performance", icon: <Icon name="trending-up" size={18} /> },
    { id: "opportunities", label: "Opportunities", icon: <Icon name="target" size={18} /> },
  ]}
  active="performance"
  onSelect={setTab}
  property="https://example.com/"
  properties={["https://example.com/"]}
  user={{ email: "jane@co.com", name: "Jane Cho" }}
  settingsIcon={<Icon name="settings" size={18} />}
/>
```

Always wrap the whole dashboard shell in a `.db-scope` container (add `.db-dark` for dark mode) — every dashboard component reads `--db-*` tokens, not the marketing brand's tokens.
