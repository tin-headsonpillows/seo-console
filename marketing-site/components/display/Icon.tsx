"use client";

import * as LucideIcons from "lucide-react";
import type { CSSProperties } from "react";
import type { LucideProps } from "lucide-react";

export interface IconProps {
  /** Lucide icon name, kebab-case, e.g. "search", "arrow-right", "check". */
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}

function toPascalCase(kebab: string) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

type LucideIconComponent = React.ComponentType<LucideProps>;

export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.75, style }: IconProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIconComponent>)[toPascalCase(name)];
  if (!IconComponent) return null;
  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      style={{ display: "inline-flex", flex: "0 0 auto", ...style }}
    />
  );
}
