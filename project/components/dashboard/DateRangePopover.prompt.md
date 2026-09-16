```jsx
<DateRangePopover
  label="Last 28 days" range={{ start: "2026-08-18", end: "2026-09-14" }}
  presets={[{ id: "28d", label: "Last 28 days" }, { id: "3m", label: "Last 3 months" }]}
  compareOptions={[{ id: "none", label: "Disabled" }, { id: "previous", label: "Previous period" }]}
  compareMode="none" onPreset={setPreset} onCompare={setCompare}
/>
```
