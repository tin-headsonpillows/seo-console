import * as React from "react";

/** Inline body link. Monochrome ink by default — the accent blue is reserved for rare inline highlights. Underlines on hover. */
export interface TextLinkProps {
  children?: React.ReactNode;
  href?: string;
  /** ink = default monochrome · accent = the rare #3b82f6 inline link · muted = fine print · on-dark = footer link rows */
  tone?: "ink" | "accent" | "muted" | "on-dark";
  size?: "body-md" | "body-sm" | "caption";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function TextLink(props: TextLinkProps): JSX.Element;
