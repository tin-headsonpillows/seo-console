import React from "react";

export function TrendPill({ pct, invert = false, size = 12, style }) {
  if (pct === null || pct === undefined) return null;
  const up = pct > 0;
  const good = invert ? !up : up;
  const label = !isFinite(pct) || Math.abs(pct) >= 999 ? "∞%" : `${up ? "+" : ""}${pct.toFixed(1)}%`;
  return (
    <span style={{ fontSize: size + "px", fontWeight: 500, color: good ? "var(--db-good)" : "var(--db-bad)", fontFamily: "var(--db-font-sans)", ...style }}>
      {up ? "↑" : "↓"}{label.replace("+", "").replace("-", "")}
    </span>
  );
}
