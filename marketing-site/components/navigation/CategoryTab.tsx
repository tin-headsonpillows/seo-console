"use client";

import type { CSSProperties, ReactNode } from "react";

export interface CategoryTabProps {
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export function CategoryTab({ children, active = false, onClick, style }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--nav-link-family)",
        fontSize: "var(--nav-link-size)",
        fontWeight: "var(--nav-link-weight)" as CSSProperties["fontWeight"],
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
