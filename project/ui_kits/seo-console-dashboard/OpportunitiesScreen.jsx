const OPP_TABS = [
  { id: "cannibalization", label: "Keyword Cannibalization", blurb: "Non-brand queries where 2+ of your URLs compete. Consolidate or differentiate them." },
  { id: "low-hanging", label: "Low-hanging Fruit", blurb: "Queries ranking 4–10 with lots of impressions but a weak click-through rate." },
  { id: "underperforming", label: "Underperforming Pages", blurb: "Pages that used to earn real traffic and have since dropped materially." },
];

const CANNIBAL_ROWS = [
  { query: "clash of clans base layout", pages: 3, clicks: 210, impressions: 12400, position: 6.2, ctr: 0.017 },
  { query: "th12 war base", pages: 2, clicks: 140, impressions: 8100, position: 5.4, ctr: 0.017 },
];

function OpportunitiesScreen() {
  const { DateRangePopover, DataTable } = window.SEOConsoleDesignSystem_8b9179;
  const [kind, setKind] = React.useState("cannibalization");
  const active = OPP_TABS.find((t) => t.id === kind);
  const columns = [
    { field: "query", label: "Query" },
    { field: "pages", label: "Pages", align: "right" },
    { field: "clicks", label: "clicks", align: "right", color: "var(--db-clicks)" },
    { field: "impressions", label: "impressions", align: "right", color: "var(--db-impressions)" },
    { field: "position", label: "position", align: "right", color: "var(--db-position)", render: (r) => r.position.toFixed(1) },
    { field: "ctr", label: "ctr", align: "right", color: "var(--db-ctr)", render: (r) => (r.ctr * 100).toFixed(1) + "%" },
  ];
  return (
    <div>
      <div style={{ display: "flex", gap: "4px", borderBottom: "1px solid var(--db-border)", marginBottom: "16px" }}>
        {OPP_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setKind(t.id)}
            style={{
              border: "none", borderBottom: "2px solid " + (kind === t.id ? "var(--db-accent)" : "transparent"),
              background: "transparent", color: kind === t.id ? "var(--db-accent)" : "var(--db-muted)",
              fontWeight: 500, fontSize: "14px", padding: "8px 12px", cursor: "pointer",
            }}
          >{t.label}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <DateRangePopover
          label="Last 3 months" range={{ start: "2026-06-17", end: "2026-09-14" }}
          presets={[{ id: "3m", label: "Last 3 months" }, { id: "6m", label: "Last 6 months" }]}
        />
      </div>

      <p style={{ borderRadius: "var(--db-radius-md)", border: "1px solid var(--db-border)", background: "var(--db-surface)", padding: "12px", fontSize: "14px", color: "var(--db-muted)", marginBottom: "16px" }}>
        {active.blurb}
      </p>

      <div style={{ borderRadius: "var(--db-radius-lg)", border: "1px solid var(--db-border)", background: "var(--db-surface)" }}>
        <DataTable columns={columns} rows={kind === "cannibalization" ? CANNIBAL_ROWS : []} keyField="query" />
      </div>
    </div>
  );
}

window.OpportunitiesScreen = OpportunitiesScreen;
