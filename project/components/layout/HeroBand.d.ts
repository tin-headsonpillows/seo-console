import * as React from "react";

/**
 * The homepage hero — 7/5 grid, h1 + sub-headline + buttons on the left, a `HeroAppMockupCard` on the right.
 */
export interface HeroBandProps {
  eyebrow?: string;
  heading: string;
  subline?: string;
  /** Usually a `Button` (primary) + `Button variant="secondary"`. */
  actions?: React.ReactNode;
  /** A `<HeroAppMockupCard>` element for the right column. */
  mockup?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function HeroBand(props: HeroBandProps): JSX.Element;
