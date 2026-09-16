import * as React from "react";

/**
 * The dark footer that closes every page — the only dark surface besides the featured pricing tier.
 *
 * @startingPoint section="Layout" subtitle="Dark 4-column footer" viewport="1200x320"
 */
export interface FooterColumn {
  title: string;
  links: string[];
}

export interface FooterProps {
  columns: FooterColumn[];
  style?: React.CSSProperties;
}

export declare function Footer(props: FooterProps): JSX.Element;
