import * as React from "react";

/** System/Light/Dark segmented control, used in the Settings panel's Appearance section. */
export interface ThemeToggleProps {
  value?: "system" | "light" | "dark";
  onChange?: (t: "system" | "light" | "dark") => void;
  style?: React.CSSProperties;
}

export declare function ThemeToggle(props: ThemeToggleProps): JSX.Element;
