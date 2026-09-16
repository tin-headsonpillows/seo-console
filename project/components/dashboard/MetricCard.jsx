import React from "react";

export function MetricCard({ label, value, color, delta, deltaGood, active = true, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        borderRadius: "var(--db-radius-lg)",
        border: "1px solid " + (active ? color : "var(--db-border)"),
        background: active ? "var(--db-surface)" : "var(--db-bg)",
        opacity: active ? 1 : 0.7,
        padding: "16px",
        cursor: "pointer",
        fontFamily: "var(--db-font-sans)",
        boxShadow: active ? "0 1px 2px rgba(0,0,0,.04)" : "none",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--db-muted)" }}>
        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: color, flex: "0 0 auto" }}></span>
        {label}
      </div>
      <div style={{ marginTop: "4px", fontSize: "24px", fontWeight: 600, color: "var(--db-fg)", fontVariantNumeric: "tabular-nums" }}>{value}</div>
      {delta ? (
        <div style={{ marginTop: "2px", fontSize: "12px", fontWeight: 500, color: deltaGood ? "var(--db-good)" : "var(--db-bad)" }}>{delta}</div>
      ) : null}
    </button>
  );
}
