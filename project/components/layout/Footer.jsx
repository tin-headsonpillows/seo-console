import React from "react";
import { Wordmark } from "./Wordmark.jsx";
import { TextLink } from "../actions/TextLink.jsx";

export function Footer({ columns = [], style }) {
  return (
    <footer
      style={{
        background: "var(--surface-dark)",
        color: "var(--text-on-dark-soft)",
        padding: "var(--pad-footer) var(--space-xl)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-xxl)" }}>
        <Wordmark tone="on-dark" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(" + Math.max(columns.length, 1) + ", 1fr)", gap: "var(--space-xl)" }}>
          {columns.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "var(--gutter-footer)" }}>
              <span style={{ fontFamily: "var(--caption-family)", fontSize: "var(--caption-size)", fontWeight: 600, color: "var(--text-on-dark)" }}>{col.title}</span>
              {col.links.map((l) => (
                <TextLink key={l} tone="on-dark" size="body-sm" href="#">
                  {l}
                </TextLink>
              ))}
            </div>
          ))}
        </div>
        <span style={{ fontFamily: "var(--body-sm-family)", fontSize: "var(--body-sm-size)", color: "var(--text-on-dark-soft)" }}>
          © {new Date().getFullYear()} SEO Console. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
