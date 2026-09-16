import * as React from "react";

/** Plain-type wordmark — no logo file was provided in the source material, so the brand name renders in Manrope 600 wherever a mark is needed. */
export interface WordmarkProps {
  tone?: "ink" | "on-dark";
  style?: React.CSSProperties;
}

export declare function Wordmark(props: WordmarkProps): JSX.Element;
