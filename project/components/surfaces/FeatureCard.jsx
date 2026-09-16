import React from "react";

export function FeatureCard({ icon, title, description, style }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-md)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {icon}
      <h3 style={{ margin: 0, fontFamily: "var(--title-md-family)", fontSize: "var(--title-md-size)", fontWeight: "var(--title-md-weight)", color: "var(--text-ink)" }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", lineHeight: "var(--body-md-leading)", color: "var(--text-body)" }}>
        {description}
      </p>
    </div>
  );
}
