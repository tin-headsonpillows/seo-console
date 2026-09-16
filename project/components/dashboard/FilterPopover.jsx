import React, { useEffect, useRef, useState } from "react";

export function FilterPopover({ value, onChange, dimension = "query", style }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const set = (patch) => onChange && onChange({ ...value, ...patch });
  const queryOnly = dimension === "query";
  const activeCount = [
    value.branded !== "all",
    value.position !== 0,
    value.question,
    value.longtail,
    value.ai,
    value.trend !== "all",
    (value.contains || "").trim().length > 0,
  ].filter(Boolean).length;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const sectionLabel = { fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "var(--db-muted)", letterSpacing: "0.02em" };
  const chip = (on) => ({
    borderRadius: "var(--db-radius-sm)", border: "1px solid " + (on ? "var(--db-accent)" : "var(--db-border)"),
    background: on ? "var(--db-accent-soft)" : "transparent", color: on ? "var(--db-accent)" : "var(--db-fg)",
    fontSize: "13px", padding: "6px 8px", cursor: "pointer",
  });

  return (
    <div ref={ref} style={{ position: "relative", fontFamily: "var(--db-font-sans)", ...style }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex", alignItems: "center", gap: "6px", borderRadius: "var(--db-radius-sm)",
          border: "1px solid " + (activeCount ? "var(--db-accent)" : "var(--db-border)"),
          background: activeCount ? "var(--db-accent-soft)" : "var(--db-surface)",
          color: activeCount ? "var(--db-accent)" : "var(--db-fg)",
          padding: "7px 12px", fontSize: "14px", cursor: "pointer",
        }}
      >
        Filters{activeCount ? ` · ${activeCount}` : ""}
      </button>

      {open && (
        <div style={{ position: "absolute", left: 0, top: "calc(100% + 8px)", zIndex: 40, width: "288px", borderRadius: "var(--db-radius-lg)", border: "1px solid var(--db-border)", background: "var(--db-surface)", padding: "16px", boxShadow: "0 8px 24px rgba(0,0,0,.12)" }}>
          <div style={sectionLabel}>Contains</div>
          <input
            value={value.contains || ""}
            onChange={(e) => set({ contains: e.target.value })}
            placeholder="text in query / URL…"
            style={{ marginTop: "4px", width: "100%", borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "var(--db-bg)", color: "var(--db-fg)", padding: "6px 8px", fontSize: "14px", boxSizing: "border-box" }}
          />

          <div style={{ ...sectionLabel, marginTop: "16px" }}>Position</div>
          <div style={{ marginTop: "4px", display: "flex", gap: "4px" }}>
            {[0, 3, 10, 20].map((n) => (
              <button key={n} onClick={() => set({ position: n })} style={{ ...chip(value.position === n), flex: 1 }}>{n === 0 ? "Any" : `Top ${n}`}</button>
            ))}
          </div>

          <div style={{ ...sectionLabel, marginTop: "16px" }}>Trend vs comparison</div>
          <div style={{ marginTop: "4px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "4px" }}>
            {["all", "growing", "decaying", "new"].map((t) => (
              <button key={t} onClick={() => set({ trend: t })} style={{ ...chip(value.trend === t), textTransform: "capitalize", padding: "6px 2px" }}>{t}</button>
            ))}
          </div>

          <div style={{ opacity: queryOnly ? 1 : 0.4 }}>
            <div style={{ ...sectionLabel, marginTop: "16px" }}>Query presets {queryOnly ? "" : "(Queries only)"}</div>
            <div style={{ marginTop: "4px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                ["Branded", value.branded === "branded", () => set({ branded: value.branded === "branded" ? "all" : "branded" })],
                ["Non-branded", value.branded === "nonbranded", () => set({ branded: value.branded === "nonbranded" ? "all" : "nonbranded" })],
                ["People Also Ask (questions)", value.question, () => set({ question: !value.question })],
                ["Long-tail keywords", value.longtail, () => set({ longtail: !value.longtail })],
                ["AI search prompts", value.ai, () => set({ ai: !value.ai })],
              ].map(([label, on, click]) => (
                <button key={label} disabled={!queryOnly} onClick={click} style={{ ...chip(on), display: "flex", justifyContent: "space-between", width: "100%", boxSizing: "border-box" }}>
                  {label}<span>{on ? "✓" : ""}</span>
                </button>
              ))}
            </div>
          </div>

          {activeCount > 0 && (
            <button
              onClick={() => onChange && onChange({ branded: "all", position: 0, question: false, longtail: false, ai: false, contains: "", trend: "all" })}
              style={{ marginTop: "16px", width: "100%", borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "transparent", color: "var(--db-bad)", padding: "6px 8px", fontSize: "14px", cursor: "pointer" }}
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
