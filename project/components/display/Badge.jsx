import React from "react";

const pastel = {
  orange: "var(--badge-orange)",
  pink: "var(--badge-pink)",
  violet: "var(--badge-violet)",
  emerald: "var(--badge-emerald)",
};

export function Badge({ children, tone = "neutral", style }) {
  const isPastel = !!pastel[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--caption-family)",
        fontSize: "var(--caption-size)",
        fontWeight: "var(--caption-weight)",
        lineHeight: "var(--caption-leading)",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        background: isPastel ? pastel[tone] : "var(--surface-card)",
        color: isPastel ? "var(--text-on-primary)" : "var(--text-ink)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
