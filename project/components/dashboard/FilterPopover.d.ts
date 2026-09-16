import * as React from "react";

export interface FilterState {
  contains: string;
  position: 0 | 3 | 10 | 20;
  trend: "all" | "growing" | "decaying" | "new";
  branded: "all" | "branded" | "nonbranded";
  question: boolean;
  longtail: boolean;
  ai: boolean;
}

/** The Performance tab's Filters button + popover — contains, position, trend, and query-only presets (branded, PAA, long-tail, AI prompts). */
export interface FilterPopoverProps {
  value: FilterState;
  onChange?: (v: FilterState) => void;
  /** Query-preset section dims when the breakdown dimension isn't "query". */
  dimension?: string;
  style?: React.CSSProperties;
}

export declare function FilterPopover(props: FilterPopoverProps): JSX.Element;
