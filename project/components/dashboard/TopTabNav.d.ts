import * as React from "react";

/**
 * The dashboard's primary navigation — a sticky header (title, property switcher,
 * settings/user/sign-out) over a horizontal tab row with an accent underline on the
 * active tab. Matches the real app's actual top-tab layout (app/components/Dashboard.tsx);
 * an earlier pass explored a GSC-style left sidebar here, but that was a departure from
 * the shipped product and has been reverted.
 */
export interface TopTabNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TopTabNavProps {
  items: TopTabNavItem[];
  active: string;
  onSelect?: (id: string) => void;
  property?: string;
  properties?: string[];
  onPropertyChange?: (p: string) => void;
  user?: { email: string; name?: string | null; picture?: string | null };
  onSettings?: () => void;
  settingsIcon?: React.ReactNode;
  onSignOut?: () => void;
  style?: React.CSSProperties;
}

export declare function TopTabNav(props: TopTabNavProps): JSX.Element;
