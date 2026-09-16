import * as React from "react";

/** Small colored ↑/↓ percentage — green for good, red for bad. `invert` flips the sense for metrics where lower is better (position). */
export interface TrendPillProps {
  pct: number | null;
  invert?: boolean;
  size?: number;
  style?: React.CSSProperties;
}

export declare function TrendPill(props: TrendPillProps): JSX.Element;
