import React from "react";

export function Wordmark({ tone = "ink", style }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "18px",
        letterSpacing: "-0.3px",
        color: tone === "on-dark" ? "var(--text-on-dark)" : "var(--text-ink)",
        display: "inline-flex",
        alignItems: "center",
        ...style,
      }}
    >
      SEO Console
    </span>
  );
}
