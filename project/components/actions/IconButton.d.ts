import * as React from "react";

/** A 36 × 36 circular icon button — white canvas fill, hairline border, ink glyph. Used for share, carousel arrows and "view more". */
export interface IconButtonProps {
  /** The glyph. Use `Icon` at size 16–18. */
  children?: React.ReactNode;
  /** Required accessible label — the button has no visible text. */
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
