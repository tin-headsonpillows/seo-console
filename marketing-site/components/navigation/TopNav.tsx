"use client";

import type { CSSProperties, ReactNode } from "react";
import { Button } from "../actions/Button";
import { TextLink } from "../actions/TextLink";

export interface NavItem {
  label: string;
  href?: string;
}

export interface TopNavProps {
  logo?: ReactNode;
  items?: NavItem[];
  activeHref?: string | null;
  onLoginClick?: () => void;
  onStartClick?: () => void;
  right?: ReactNode;
  style?: CSSProperties;
}

export function TopNav({ logo, items = [], activeHref, onLoginClick, onStartClick, right, style }: TopNavProps) {
  return (
    <header
      style={{
        height: "var(--nav-height)",
        background: "var(--surface-canvas)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--space-xl)",
        boxSizing: "border-box",
        borderBottom: "var(--border-width-hairline) solid var(--border-hairline-soft)",
        gap: "var(--space-lg)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xxl)", flex: "1 1 auto", minWidth: 0 }}>
        {logo}
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-xl)" }}>
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href || "#"}
              style={{
                fontFamily: "var(--nav-link-family)",
                fontSize: "var(--nav-link-size)",
                fontWeight: "var(--nav-link-weight)" as CSSProperties["fontWeight"],
                lineHeight: "var(--nav-link-leading)",
                color: it.href === activeHref ? "var(--text-ink)" : "var(--text-body)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", flex: "0 0 auto" }}>
        {right}
        <TextLink onClick={onLoginClick}>Log in</TextLink>
        <Button onClick={onStartClick}>Start free</Button>
      </div>
    </header>
  );
}
