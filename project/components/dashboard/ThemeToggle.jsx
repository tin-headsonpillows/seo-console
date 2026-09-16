import React from "react";

export function ThemeToggle({ value = "system", onChange, style }) {
  return (
    <div style={{ display: "inline-flex", gap: "8px", ...style }}>
      {["system", "light", "dark"].map((t) => (
        <button
          key={t}
          onClick={() => onChange && onChange(t)}
          style={{
            textTransform: "capitalize",
            fontFamily: "var(--db-font-sans)",
            fontSize: "14px",
            padding: "6px 12px",
            borderRadius: "var(--db-radius-sm)",
            border: "1px solid " + (value === t ? "var(--db-accent)" : "var(--db-border)"),
            background: value === t ? "var(--db-accent-soft)" : "transparent",
            color: value === t ? "var(--db-accent)" : "var(--db-fg)",
            cursor: "pointer",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
