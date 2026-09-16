function KeywordGridFragment() {
  const rows = [
    { kw: "technical seo audit", pos: 3, change: "+2" },
    { kw: "keyword rank tracker", pos: 1, change: "0" },
    { kw: "site crawl tool", pos: 7, change: "-1" },
    { kw: "backlink checker", pos: 4, change: "+5" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "360px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--title-sm-family)", fontSize: "var(--title-sm-size)", fontWeight: 600, color: "var(--text-ink)" }}>Keyword rankings</span>
        <span style={{ fontFamily: "var(--caption-family)", fontSize: "var(--caption-size)", color: "var(--color-success)" }}>● Live</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", borderRadius: "8px", border: "1px solid var(--border-hairline)", overflow: "hidden" }}>
        {rows.map((r, i) => (
          <div
            key={r.kw}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",
              borderTop: i === 0 ? "none" : "1px solid var(--border-hairline-soft)",
              fontFamily: "var(--body-sm-family)",
              fontSize: "13px",
            }}
          >
            <span style={{ color: "var(--text-body)" }}>{r.kw}</span>
            <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "var(--text-ink)", fontWeight: 600 }}>#{r.pos}</span>
              <span style={{ color: r.change.startsWith("+") ? "var(--color-success)" : r.change === "0" ? "var(--text-muted)" : "var(--color-error)", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                {r.change}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationFragment() {
  const steps = ["Crawl site", "Detect issues", "Send report"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid var(--border-hairline)",
              fontFamily: "var(--body-sm-family)",
              fontSize: "13px",
              color: "var(--text-ink)",
              background: "var(--surface-canvas)",
            }}
          >
            {s}
          </div>
          {i < steps.length - 1 ? <span style={{ color: "var(--text-muted-soft)" }}>→</span> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

window.KeywordGridFragment = KeywordGridFragment;
window.AutomationFragment = AutomationFragment;
