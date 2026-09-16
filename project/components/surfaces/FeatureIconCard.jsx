import React from "react";

export function FeatureIconCard({ icon, title, description, style }) {
  return (
    <div
      style={{
        background: "var(--surface-canvas)",
        border: "var(--border-width-hairline) solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card-compact)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-sm)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {icon}
      <h4 style={{ margin: 0, fontFamily: "var(--title-sm-family)", fontSize: "var(--title-sm-size)", fontWeight: "var(--title-sm-weight)", color: "var(--text-ink)" }}>
        {title}
      </h4>
      <p style={{ margin: 0, fontFamily: "var(--body-sm-family)", fontSize: "var(--body-sm-size)", lineHeight: "var(--body-sm-leading)", color: "var(--text-body)" }}>
        {description}
      </p>
    </div>
  );
}
