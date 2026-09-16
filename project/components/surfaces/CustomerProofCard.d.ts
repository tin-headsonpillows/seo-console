import * as React from "react";

/**
 * Customer testimonial card — avatar + name + role, optional star rating, quote.
 */
export interface CustomerProofCardProps {
  /** `<Avatar />` element. */
  avatar?: React.ReactNode;
  name: string;
  role: string;
  quote: string;
  /** 1-5; omit to hide the star row. */
  rating?: number;
  style?: React.CSSProperties;
}

export declare function CustomerProofCard(props: CustomerProofCardProps): JSX.Element;
