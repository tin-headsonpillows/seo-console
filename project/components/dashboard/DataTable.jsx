import React, { useMemo, useState } from "react";

export function DataTable({ columns = [], rows = [], keyField = "key", onExport, extraTabs, style }) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState(columns[0]?.field || keyField);
  const [dir, setDir] = useState("desc");
  const [pageSize, setPageSize] = useState(25);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const base = needle ? rows.filter((r) => String(r[keyField]).toLowerCase().includes(needle)) : rows;
    return [...base].sort((a, b) => {
      const av = a[sort], bv = b[sort];
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, q, sort, dir, keyField]);

  const shown = pageSize > 0 ? filtered.slice(0, pageSize) : filtered;
  const toggleSort = (f) => { if (sort === f) setDir(dir === "asc" ? "desc" : "asc"); else { setSort(f); setDir("desc"); } };

  return (
    <div style={{ fontFamily: "var(--db-font-sans)", ...style }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", borderBottom: "1px solid var(--db-border)", padding: "12px 16px" }}>
        {extraTabs}
        <input
          value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter…"
          style={{ flex: "1 1 160px", minWidth: "160px", borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "var(--db-bg)", color: "var(--db-fg)", padding: "6px 12px", fontSize: "14px", boxSizing: "border-box" }}
        />
        <span style={{ fontSize: "14px", color: "var(--db-muted)" }}>{filtered.length.toLocaleString()} rows</span>
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} style={{ borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "var(--db-bg)", color: "var(--db-fg)", padding: "6px 8px", fontSize: "14px" }}>
          {[10, 25, 50, 100].map((n) => <option key={n} value={n}>Show {n}</option>)}
          <option value={0}>Show all</option>
        </select>
        <button onClick={onExport} style={{ borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "var(--db-surface)", color: "var(--db-fg)", padding: "6px 12px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>Export CSV</button>
      </div>

      <div style={{ maxHeight: "34rem", overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead style={{ position: "sticky", top: 0, background: "var(--db-surface)" }}>
            <tr style={{ borderBottom: "1px solid var(--db-border)", textAlign: "left", color: "var(--db-muted)" }}>
              {columns.map((c) => (
                <th key={c.field} onClick={() => toggleSort(c.field)} style={{ padding: "10px 16px", fontWeight: 500, cursor: "pointer", textAlign: c.align || "left", whiteSpace: "nowrap", color: c.color || "var(--db-muted)" }}>
                  {c.label}{sort === c.field ? (dir === "asc" ? " ▲" : " ▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r[keyField]} style={{ borderBottom: "1px solid var(--db-border)" }}>
                {columns.map((c) => (
                  <td key={c.field} style={{ padding: "8px 16px", textAlign: c.align || "left", whiteSpace: "nowrap" }}>
                    {c.render ? c.render(r) : r[c.field]}
                  </td>
                ))}
              </tr>
            ))}
            {!shown.length && (
              <tr><td colSpan={columns.length} style={{ padding: "40px", textAlign: "center", color: "var(--db-muted)" }}>No rows match.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
