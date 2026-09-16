import * as React from "react";

/**
 * The pill-in-pill sub-nav switcher — SEO Console's signature interactive component.
 * A soft-gray pill wrapper holds 2-3 segments; the active one renders as a white pill with a
 * faint drop shadow inside the wrapper.
 */
export interface NavPillGroupProps {
  /** Segment labels, e.g. ["Projects", "Pro", "Agencies"]. */
  segments: string[];
  active?: string;
  onChange?: (segment: string) => void;
  style?: React.CSSProperties;
}

export declare function NavPillGroup(props: NavPillGroupProps): JSX.Element;
