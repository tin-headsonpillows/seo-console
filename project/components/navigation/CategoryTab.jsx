import React from "react";

export function CategoryTab({ children, active = false, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--nav-link-family)",
        fontSize: "var(--nav-link-size)",
        fontWeight: "var(--nav-link-weight)",
        padding: "8px 14px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        background: active ? "var(--surface-canvas)" : "transparent",
        color: active ? "var(--text-ink)" : "var(--text-muted)",
        boxShadow: active ? "var(--shadow-sm)" : "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
