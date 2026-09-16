"use client";

import { useState } from "react";
import type { CSSProperties, ElementType, MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  /** primary = near-black fill · secondary = white + hairline · text = inline link button · inverse = white fill for use on dark surfaces */
  variant?: "primary" | "secondary" | "text" | "inverse";
  children?: ReactNode;
  disabled?: boolean;
  /** Icon element rendered before the label (use `Icon`). */
  iconLeft?: ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: ReactNode;
  /** Renders an <a> instead of a <button>. Marketing CTAs are links in this system. */
  href?: string;
  onClick?: (e: MouseEvent) => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

const base: CSSProperties = {
  fontFamily: "var(--button-family)",
  fontSize: "var(--button-size)",
  fontWeight: "var(--button-weight)" as CSSProperties["fontWeight"],
  lineHeight: "var(--button-leading)",
  letterSpacing: "var(--button-tracking)",
  height: "var(--control-height)",
  padding: "var(--control-pad-y) var(--control-pad-x)",
  borderRadius: "var(--radius-md)",
  border: "var(--border-width-hairline) solid transparent",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-xs)",
  boxSizing: "border-box",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color 120ms linear, color 120ms linear",
};

export function Button({
  variant = "primary",
  children,
  disabled = false,
  iconLeft,
  iconRight,
  href,
  onClick,
  fullWidth = false,
  type = "button",
  style,
  ...rest
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  let skin: CSSProperties;
  if (variant === "secondary") {
    skin = {
      background: "var(--surface-canvas)",
      color: "var(--text-ink)",
      borderColor: "var(--border-hairline)",
    };
    if (pressed) skin.background = "var(--surface-soft)";
  } else if (variant === "text") {
    skin = { background: "transparent", color: "var(--text-ink)", padding: "var(--control-pad-y) var(--space-xs)" };
    if (pressed) skin.color = "var(--color-primary-active)";
  } else if (variant === "inverse") {
    skin = { background: "var(--surface-canvas)", color: "var(--text-ink)" };
    if (pressed) skin.background = "var(--surface-strong)";
  } else {
    skin = { background: "var(--color-primary)", color: "var(--text-on-primary)" };
    if (pressed) skin.background = "var(--color-primary-active)";
  }

  if (disabled) {
    skin = {
      background: variant === "primary" || variant === "inverse" ? "var(--color-primary-disabled)" : "var(--surface-canvas)",
      color: "var(--text-muted)",
      borderColor: variant === "secondary" ? "var(--border-hairline)" : "transparent",
    };
  }

  const Tag = (href && !disabled ? "a" : "button") as ElementType;
  return (
    <Tag
      {...rest}
      href={href && !disabled ? href : undefined}
      type={Tag === "button" ? type : undefined}
      disabled={Tag === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{ ...base, ...skin, width: fullWidth ? "100%" : undefined, cursor: disabled ? "not-allowed" : "pointer", ...style }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
