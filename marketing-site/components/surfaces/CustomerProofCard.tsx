import type { CSSProperties, ReactNode } from "react";
import { RatingStars } from "../display/RatingStars";

export interface CustomerProofCardProps {
  avatar?: ReactNode;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  style?: CSSProperties;
}

export function CustomerProofCard({ avatar, name, role, quote, rating, style }: CustomerProofCardProps) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--pad-card-compact)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-md)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
        {avatar}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--title-sm-family)", fontSize: "var(--title-sm-size)", fontWeight: "var(--title-sm-weight)" as CSSProperties["fontWeight"], color: "var(--text-ink)" }}>
            {name}
          </span>
          <span style={{ fontFamily: "var(--caption-family)", fontSize: "var(--caption-size)", color: "var(--text-muted)" }}>{role}</span>
        </div>
      </div>
      {rating ? <RatingStars rating={rating} /> : null}
      <p style={{ margin: 0, fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", lineHeight: "var(--body-md-leading)", color: "var(--text-body)" }}>
        {quote}
      </p>
    </div>
  );
}
