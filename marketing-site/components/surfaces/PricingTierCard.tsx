import type { CSSProperties } from "react";
import { Button } from "../actions/Button";
import { Icon } from "../display/Icon";

export interface PricingTierCardProps {
  name: string;
  price: string;
  period?: string;
  features?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  featured?: boolean;
  style?: CSSProperties;
}

export function PricingTierCard({
  name,
  price,
  period = "/mo",
  features = [],
  ctaLabel = "Choose plan",
  onCtaClick,
  featured = false,
  style,
}: PricingTierCardProps) {
  const dark = featured;
  return (
    <div
      style={{
        background: dark ? "var(--surface-dark)" : "var(--surface-canvas)",
        border: dark ? "none" : "var(--border-width-hairline) solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-lg)",
        boxShadow: "var(--shadow-md)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "var(--title-lg-family)",
          fontSize: "var(--title-lg-size)",
          fontWeight: "var(--title-lg-weight)" as CSSProperties["fontWeight"],
          letterSpacing: "var(--title-lg-tracking)",
          color: dark ? "var(--text-on-dark)" : "var(--text-ink)",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "var(--display-sm-family)",
          fontSize: "var(--display-sm-size)",
          fontWeight: "var(--display-sm-weight)" as CSSProperties["fontWeight"],
          letterSpacing: "var(--display-sm-tracking)",
          lineHeight: "var(--display-sm-leading)",
          color: dark ? "var(--text-on-dark)" : "var(--text-ink)",
        }}
      >
        {price}
        <span style={{ fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", fontWeight: 400, color: dark ? "var(--text-on-dark-soft)" : "var(--text-muted)" }}>
          {" "}
          {period}
        </span>
      </span>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-xs)",
              fontFamily: "var(--body-md-family)",
              fontSize: "var(--body-md-size)",
              color: dark ? "var(--text-on-dark-soft)" : "var(--text-body)",
            }}
          >
            <Icon name="check" size={16} color={dark ? "var(--text-on-dark)" : "var(--text-ink)"} />
            {f}
          </li>
        ))}
      </ul>
      <Button variant={dark ? "inverse" : "primary"} fullWidth onClick={onCtaClick} style={{ marginTop: "auto" }}>
        {ctaLabel}
      </Button>
    </div>
  );
}
