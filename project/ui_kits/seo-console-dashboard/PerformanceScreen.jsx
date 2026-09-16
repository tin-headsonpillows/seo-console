const SAMPLE_SERIES = [
  { d: "Aug 19", clicks: 20, impr: 870 }, { d: "Aug 21", clicks: 18, impr: 900 },
  { d: "Aug 23", clicks: 32, impr: 950 }, { d: "Aug 25", clicks: 22, impr: 820 },
  { d: "Aug 27", clicks: 24, impr: 860 }, { d: "Aug 29", clicks: 21, impr: 800 },
  { d: "Aug 31", clicks: 19, impr: 790 }, { d: "Sep 2", clicks: 23, impr: 900 },
  { d: "Sep 4", clicks: 25, impr: 980 }, { d: "Sep 6", clicks: 24, impr: 1020 },
  { d: "Sep 8", clicks: 26, impr: 1000 }, { d: "Sep 10", clicks: 23, impr: 950 },
  { d: "Sep 12", clicks: 29, impr: 1050 }, { d: "Sep 14", clicks: 18, impr: 900 },
];

const SAMPLE_ROWS = [
  { query: "builder hall 3 base", clicks: 15, impressions: 889, position: 8.2, ctr: 0.017 },
  { query: "coc base copy", clicks: 8, impressions: 863, position: 11.4, ctr: 0.009 },
  { query: "th13 base with hero hunter", clicks: 6, impressions: 86, position: 4.1, ctr: 0.07 },
  { query: "base aula tukang level 3", clicks: 5, impressions: 176, position: 6.8, ctr: 0.028 },
  { query: "best builder hall 2 base", clicks: 4, impressions: 79, position: 9.9, ctr: 0.05 },
];

function LineChart({ series, width = 900, height = 220 }) {
  const max = { clicks: Math.max(...series.map((s) => s.clicks)) * 1.15, impr: Math.max(...series.map((s) => s.impr)) * 1.15 };
  const pt = (v, key) => height - (v / max[key]) * height;
  const step = width / (series.length - 1);
  const path = (key) => series.map((s, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${pt(s[key], key).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", display: "block" }} preserveAspectRatio="none">
      <path d={path("impr")} fill="none" stroke="var(--db-impressions)" strokeWidth="2" />
      <path d={path("clicks")} fill="none" stroke="var(--db-clicks)" strokeWidth="2" />
    </svg>
  );
}

function PerformanceScreen({ compareOn, filters, onFilters, dimension, onDimension }) {
  const { MetricCard, FilterPopover, DateRangePopover, DataTable, TrendPill } = window.SEOConsoleDesignSystem_8b9179;
  const [active, setActive] = React.useState({ clicks: true, impressions: true, ctr: false, position: false });
  const toggle = (k) => setActive((a) => ({ ...a, [k]: !a[k] }));

  const columns = [
    { field: "query", label: "Query" },
    { field: "clicks", label: "clicks", align: "right", color: "var(--db-clicks)" },
    { field: "impressions", label: "impressions", align: "right", color: "var(--db-impressions)" },
    { field: "ctr", label: "ctr", align: "right", color: "var(--db-ctr)", render: (r) => (r.ctr * 100).toFixed(1) + "%" },
    { field: "position", label: "position", align: "right", color: "var(--db-position)", render: (r) => r.position.toFixed(1) },
  ];

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <h1 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>Performance</h1>
        <DateRangePopover
          label="Last 28 days"
          range={{ start: "2026-08-18", end: "2026-09-14" }}
          presets={[{ id: "28d", label: "Last 28 days" }, { id: "3m", label: "Last 3 months" }, { id: "12m", label: "Last 12 months" }]}
          compareOptions={[{ id: "none", label: "Disabled" }, { id: "previous", label: "Previous period" }, { id: "yoy", label: "Year over year" }]}
          compareMode={compareOn ? "previous" : "none"}
        />
        <FilterPopover value={filters} onChange={onFilters} dimension={dimension} />
        <span style={{ marginLeft: "auto", fontSize: "13px", color: "var(--db-muted)" }}>2026-08-18 → 2026-09-14</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "12px", marginBottom: "16px" }}>
        <MetricCard label="Total clicks" value="489" color="var(--db-clicks)" active={active.clicks} onClick={() => toggle("clicks")} delta={compareOn ? "+8.2%" : null} deltaGood />
        <MetricCard label="Total impressions" value="41.9K" color="var(--db-impressions)" active={active.impressions} onClick={() => toggle("impressions")} delta={compareOn ? "+3.1%" : null} deltaGood />
        <MetricCard label="Average CTR" value="1.0%" color="var(--db-ctr)" active={active.ctr} onClick={() => toggle("ctr")} delta={compareOn ? "-0.4%" : null} />
        <MetricCard label="Average position" value="9.4" color="var(--db-position)" active={active.position} onClick={() => toggle("position")} delta={compareOn ? "+1.1" : null} />
      </div>

      <div style={{ borderRadius: "var(--db-radius-lg)", border: "1px solid var(--db-border)", background: "var(--db-surface)", padding: "16px", marginBottom: "24px" }}>
        <LineChart series={SAMPLE_SERIES} />
      </div>

      <div style={{ borderRadius: "var(--db-radius-lg)", border: "1px solid var(--db-border)", background: "var(--db-surface)" }}>
        <div style={{ display: "flex", gap: "4px", borderBottom: "1px solid var(--db-border)", padding: "8px 8px 0" }}>
          {[["query", "Queries"], ["page", "Pages"], ["country", "Countries"], ["device", "Devices"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => onDimension(id)}
              style={{
                border: "none", background: dimension === id ? "var(--db-accent-soft)" : "transparent",
                color: dimension === id ? "var(--db-accent)" : "var(--db-muted)", fontWeight: 500, fontSize: "14px",
                padding: "8px 12px", borderRadius: "var(--db-radius-sm) var(--db-radius-sm) 0 0", cursor: "pointer",
              }}
            >{label}</button>
          ))}
        </div>
        <DataTable columns={columns} rows={SAMPLE_ROWS} keyField="query" />
      </div>
    </div>
  );
}

window.PerformanceScreen = PerformanceScreen;
