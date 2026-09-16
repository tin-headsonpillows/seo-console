import * as React from "react";

/** A single tab used inside `NavPillGroup` (or standalone filter rows). Inactive is transparent + muted text; active flips to white + ink + soft shadow. */
export interface CategoryTabProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function CategoryTab(props: CategoryTabProps): JSX.Element;
