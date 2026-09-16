import type { CSSProperties, ReactNode } from "react";

export interface HeroAppMockupCardProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export function HeroAppMockupCard({ children, style }: HeroAppMockupCardProps) {
  return (
    <div
      style={{
        background: "var(--surface-canvas)",
        border: "var(--border-width-hairline) solid var(--border-hairline)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
        padding: "var(--space-lg)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
