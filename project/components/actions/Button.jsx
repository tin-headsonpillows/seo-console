import React from "react";

const base = {
  fontFamily: "var(--button-family)",
  fontSize: "var(--button-size)",
  fontWeight: "var(--button-weight)",
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
}) {
  const [pressed, setPressed] = React.useState(false);

  let skin;
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

  const Tag = href && !disabled ? "a" : "button";
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
