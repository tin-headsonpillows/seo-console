import React from "react";

export function ProductMockupCard({ children, style }) {
  return (
    <div
      style={{
        background: "var(--surface-canvas)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card-compact)",
        border: "var(--border-width-hairline) solid var(--border-hairline)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
