import * as React from "react";

/**
 * Pricing plan card. `featured` flips the whole card to the dark surface (#101010) — that
 * inversion IS the featured-tier signal; no border, badge or scale shift on top of it.
 */
export interface PricingTierCardProps {
  name: string;
  price: string;
  period?: string;
  features?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  /** Flips to the dark surface + inverse button. Use on exactly one tier per grid. */
  featured?: boolean;
  style?: React.CSSProperties;
}

export declare function PricingTierCard(props: PricingTierCardProps): JSX.Element;
