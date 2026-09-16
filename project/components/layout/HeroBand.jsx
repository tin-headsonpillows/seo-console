import React from "react";

export function HeroBand({ eyebrow, heading, subline, actions, mockup, style }) {
  return (
    <div
      style={{
        background: "var(--surface-canvas)",
        padding: "var(--pad-band) var(--space-xl)",
        display: "grid",
        gridTemplateColumns: "7fr 5fr",
        gap: "var(--space-xxl)",
        alignItems: "center",
        maxWidth: "var(--content-max)",
        margin: "0 auto",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
        {eyebrow ? (
          <span style={{ fontFamily: "var(--nav-link-family)", fontSize: "var(--nav-link-size)", fontWeight: 600, color: "var(--text-muted)" }}>{eyebrow}</span>
        ) : null}
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--display-xl-family)",
            fontSize: "var(--display-xl-size)",
            fontWeight: "var(--display-xl-weight)",
            letterSpacing: "var(--display-xl-tracking)",
            lineHeight: "var(--display-xl-leading)",
            color: "var(--text-ink)",
          }}
        >
          {heading}
        </h1>
        {subline ? (
          <p style={{ margin: 0, fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", lineHeight: "var(--body-md-leading)", color: "var(--text-body)", maxWidth: "480px" }}>
            {subline}
          </p>
        ) : null}
        {actions ? <div style={{ display: "flex", gap: "var(--space-md)", marginTop: "var(--space-xs)" }}>{actions}</div> : null}
      </div>
      {mockup}
    </div>
  );
}
