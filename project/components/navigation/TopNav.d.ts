import * as React from "react";

/**
 * White nav bar pinned to the top of every marketing page. 64px tall. Wordmark + horizontal
 * menu at left/center, "Log in" text-link + "Start free" primary button at right.
 *
 * @startingPoint section="Navigation" subtitle="Wordmark, menu, log in + start free" viewport="1200x64"
 */
export interface TopNavItem {
  label: string;
  href?: string;
}

export interface TopNavProps {
  /** Wordmark / logo element, e.g. `<Wordmark />`. */
  logo?: React.ReactNode;
  items?: TopNavItem[];
  activeHref?: string;
  onLoginClick?: () => void;
  onStartClick?: () => void;
  /** Extra element rendered before "Log in" (e.g. a language selector). */
  right?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function TopNav(props: TopNavProps): JSX.Element;
