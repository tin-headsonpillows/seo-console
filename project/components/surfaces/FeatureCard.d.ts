import * as React from "react";

/**
 * Light-gray abstract-feature-claim card used in 3-up feature grids. Signals "concept",
 * not "product" — pair with `ProductMockupCard` (white) when you want to show the real UI instead.
 */
export interface FeatureCardProps {
  /** Small icon element, e.g. `<Icon name="zap" size={24} />`. */
  icon?: React.ReactNode;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
