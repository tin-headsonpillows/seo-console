import * as React from "react";

/**
 * The signature SEO Console CTA: near-black #111111 fill, Inter 14/600 label,
 * 40px tall, 8px radius. Primary darkens to #242424 on press — nothing else moves.
 */
export interface ButtonProps {
  /** primary = near-black fill · secondary = white + hairline · text = inline link button · inverse = white fill for use on dark surfaces */
  variant?: "primary" | "secondary" | "text" | "inverse";
  children?: React.ReactNode;
  disabled?: boolean;
  /** Icon element rendered before the label (use `Icon`). */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Renders an <a> instead of a <button>. Marketing CTAs are links in this system. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
