import * as React from "react";

/** A toggleable metric tile — color dot, big number, optional delta. Click toggles it into/out of the chart's active series. */
export interface MetricCardProps {
  label: string;
  value: string;
  /** A `--db-clicks` / `--db-impressions` / `--db-ctr` / `--db-position` value. */
  color: string;
  delta?: string;
  deltaGood?: boolean;
  /** Inactive metrics dim and drop their color border. */
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function MetricCard(props: MetricCardProps): JSX.Element;
