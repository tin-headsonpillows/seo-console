import * as React from "react";

/** A lighter-density feature card — white + hairline border — for 4-up grids on lower-priority bands. */
export interface FeatureIconCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

export declare function FeatureIconCard(props: FeatureIconCardProps): JSX.Element;
