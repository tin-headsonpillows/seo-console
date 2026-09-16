import * as React from "react";

/** The pre-footer CTA card — light-gray, centered heading + subline + one primary button. */
export interface CtaBandLightProps {
  heading: string;
  subline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  style?: React.CSSProperties;
}

export declare function CtaBandLight(props: CtaBandLightProps): JSX.Element;
