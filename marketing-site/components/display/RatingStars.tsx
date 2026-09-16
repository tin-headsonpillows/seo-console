import type { CSSProperties } from "react";
import { Icon } from "./Icon";

export interface RatingStarsProps {
  rating?: number;
  max?: number;
  size?: number;
  style?: CSSProperties;
}

export function RatingStars({ rating = 5, max = 5, size = 14, style }: RatingStarsProps) {
  return (
    <div style={{ display: "inline-flex", gap: "2px", color: "var(--badge-orange)", ...style }} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={size}
          color={i < rating ? "var(--badge-orange)" : "var(--border-hairline)"}
          style={{ fill: i < rating ? "var(--badge-orange)" : "none" }}
        />
      ))}
    </div>
  );
}
