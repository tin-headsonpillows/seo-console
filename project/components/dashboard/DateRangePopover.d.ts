import * as React from "react";

export interface DateRangePreset { id: string; label: string; }
export interface DateCompareOption { id: string; label: string; }

/** The Performance/Opportunities date-range button — opens a two-column popover (presets + comparison period). Omit `compareOptions` for the simple range-only variant used on Opportunities. */
export interface DateRangePopoverProps {
  label: string;
  range: { start: string; end: string };
  presets: DateRangePreset[];
  onPreset?: (id: string) => void;
  compareOptions?: DateCompareOption[];
  compareMode?: string;
  onCompare?: (id: string) => void;
  style?: React.CSSProperties;
}

export declare function DateRangePopover(props: DateRangePopoverProps): JSX.Element;
