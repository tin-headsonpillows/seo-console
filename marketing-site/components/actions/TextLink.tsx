"use client";

import { useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

export interface TextLinkProps {
  children?: ReactNode;
  href?: string;
  tone?: "ink" | "accent" | "muted" | "on-dark";
  size?: "body-md" | "body-sm" | "caption";
  onClick?: (e: MouseEvent) => void;
  style?: CSSProperties;
}

export function TextLink({ children, href = "#", tone = "ink", size = "body-md", onClick, style, ...rest }: TextLinkProps) {
  const [hover, setHover] = useState(false);
  const scale = size === "body-sm" ? "body-sm" : size === "caption" ? "caption" : "body-md";
  const color =
    tone === "accent" ? "var(--color-accent)" : tone === "muted" ? "var(--text-muted)" : tone === "on-dark" ? "var(--text-on-dark-soft)" : "var(--text-link)";
  return (
    <a
      {...rest}
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: `var(--${scale}-family)`,
        fontSize: `var(--${scale}-size)`,
        fontWeight: `var(--${scale}-weight)` as CSSProperties["fontWeight"],
        lineHeight: `var(--${scale}-leading)`,
        color: hover && tone === "on-dark" ? "var(--text-on-dark)" : color,
        textDecoration: hover ? "underline" : "none",
        textUnderlineOffset: "2px",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </a>
  );
}
