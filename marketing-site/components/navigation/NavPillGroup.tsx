"use client";

import type { CSSProperties } from "react";

export interface NavPillGroupProps {
  segments?: string[];
  active?: string;
  onChange?: (segment: string) => void;
  style?: CSSProperties;
}

export function NavPillGroup({ segments = [], active, onChange, style }: NavPillGroupProps) {
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        background: "var(--surface-soft)",
        borderRadius: "var(--radius-pill)",
        padding: "6px",
        gap: "2px",
        ...style,
      }}
    >
      {segments.map((seg) => {
        const isActive = seg === active;
        return (
          <button
            key={seg}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange && onChange(seg)}
            style={{
              fontFamily: "var(--nav-link-family)",
              fontSize: "var(--nav-link-size)",
              fontWeight: "var(--nav-link-weight)" as CSSProperties["fontWeight"],
              padding: "8px 14px",
              borderRadius: "var(--radius-md)",
              border: "none",
              cursor: "pointer",
              background: isActive ? "var(--surface-canvas)" : "transparent",
              color: isActive ? "var(--text-ink)" : "var(--text-muted)",
              boxShadow: isActive ? "var(--shadow-sm)" : "none",
              transition: "background-color 120ms linear, color 120ms linear",
            }}
          >
            {seg}
          </button>
        );
      })}
    </div>
  );
}
