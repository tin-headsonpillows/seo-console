import * as React from "react";

/**
 * A plain white frame that holds real product UI fragments (keyword grids, automation
 * diagrams, integration tiles) — this card displays the product, it doesn't decorate around it.
 */
export interface ProductMockupCardProps {
  /** The product UI fragment to embed — build it from ordinary markup, it keeps its own internal chrome/radii. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ProductMockupCard(props: ProductMockupCardProps): JSX.Element;
