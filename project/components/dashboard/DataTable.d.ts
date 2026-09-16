import * as React from "react";

export interface DataTableColumn {
  field: string;
  label: string;
  align?: "left" | "right";
  color?: string;
  render?: (row: any) => React.ReactNode;
}

/** The breakdown/opportunities table shell — search, page size, CSV export, sortable sticky header. Pass `extraTabs` for a leading tab strip (Growing/Decaying/New, or the Opportunities kind switcher). */
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, any>[];
  keyField?: string;
  onExport?: () => void;
  extraTabs?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function DataTable(props: DataTableProps): JSX.Element;
