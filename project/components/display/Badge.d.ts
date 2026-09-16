import * as React from "react";

/** Small pill label for category tags ("Product", "Article", "New") and pastel accent moments. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "orange" | "pink" | "violet" | "emerald";
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
