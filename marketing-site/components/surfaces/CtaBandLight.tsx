import type { CSSProperties } from "react";
import { Button } from "../actions/Button";

export interface CtaBandLightProps {
  heading: string;
  subline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  style?: CSSProperties;
}

export function CtaBandLight({ heading, subline, ctaLabel = "Start free", onCtaClick, style }: CtaBandLightProps) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-cta-band)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "var(--space-md)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--display-sm-family)",
          fontSize: "var(--display-sm-size)",
          fontWeight: "var(--display-sm-weight)" as CSSProperties["fontWeight"],
          letterSpacing: "var(--display-sm-tracking)",
          lineHeight: "var(--display-sm-leading)",
          color: "var(--text-ink)",
        }}
      >
        {heading}
      </h2>
      {subline ? (
        <p style={{ margin: 0, fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", color: "var(--text-body)", maxWidth: "480px" }}>{subline}</p>
      ) : null}
      <Button onClick={onCtaClick} style={{ marginTop: "var(--space-xs)" }}>
        {ctaLabel}
      </Button>
    </div>
  );
}
