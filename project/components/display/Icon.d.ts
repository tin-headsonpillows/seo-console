import * as React from "react";

/**
 * Wraps a Lucide glyph (CDN-loaded `lucide` script) — a substitution for SEO Console's
 * own icon set, which wasn't present in the source material. Same geometric stroke weight.
 */
export interface IconProps {
  /** Lucide icon name, e.g. "search", "globe", "arrow-right", "check". */
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
