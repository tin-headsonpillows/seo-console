import * as React from "react";

/** Inline 5-star rating in badge-orange, shown near customer-proof avatars. */
export interface RatingStarsProps {
  rating?: number;
  max?: number;
  size?: number;
  style?: React.CSSProperties;
}

export declare function RatingStars(props: RatingStarsProps): JSX.Element;
