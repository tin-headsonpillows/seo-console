import React, { useEffect, useRef, useState } from "react";

export function DateRangePopover({ label, range, presets = [], onPreset, compareOptions = [], compareMode, onCompare, style }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const row = (on) => ({
    display: "block", width: "100%", textAlign: "left", borderRadius: "var(--db-radius-sm)", border: "none",
    background: on ? "var(--db-accent-soft)" : "transparent", color: on ? "var(--db-accent)" : "var(--db-fg)",
    padding: "6px 8px", fontSize: "14px", cursor: "pointer",
  });

  return (
    <div ref={ref} style={{ position: "relative", fontFamily: "var(--db-font-sans)", ...style }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ display: "flex", alignItems: "center", gap: "8px", borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "var(--db-surface)", color: "var(--db-fg)", padding: "7px 12px", fontSize: "14px", cursor: "pointer" }}
      >
        <span style={{ fontWeight: 500 }}>{label}</span>
        <span style={{ color: "var(--db-muted)" }}>{range.start} → {range.end}</span>
        <span style={{ color: "var(--db-muted)" }}>▾</span>
      </button>

      {open && (
        <div style={{ position: "absolute", left: 0, top: "calc(100% + 8px)", zIndex: 40, display: "flex", width: compareOptions.length ? "480px" : "260px", borderRadius: "var(--db-radius-lg)", border: "1px solid var(--db-border)", background: "var(--db-surface)", boxShadow: "0 8px 24px rgba(0,0,0,.12)" }}>
          {compareOptions.length > 0 && (
            <div style={{ width: "50%", borderRight: "1px solid var(--db-border)", padding: "16px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "var(--db-muted)" }}>Comparison period</div>
              <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "2px" }}>
                {compareOptions.map((c) => (
                  <button key={c.id} onClick={() => onCompare && onCompare(c.id)} style={row(compareMode === c.id)}>{c.label}</button>
                ))}
              </div>
            </div>
          )}
          <div style={{ width: compareOptions.length ? "50%" : "100%", padding: "16px" }}>
            <div style={{ maxHeight: "260px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2px" }}>
              {presets.map((p) => (
                <button key={p.id} onClick={() => { onPreset && onPreset(p.id); setOpen(false); }} style={row(false)}>{p.label}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
