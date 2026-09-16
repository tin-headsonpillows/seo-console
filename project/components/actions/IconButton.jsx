import React from "react";

export function IconButton({ children, label, onClick, href, disabled = false, style, ...rest }) {
  const [pressed, setPressed] = React.useState(false);
  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      {...rest}
      href={href && !disabled ? href : undefined}
      aria-label={label}
      title={label}
      disabled={Tag === "button" ? disabled : undefined}
      onClick={disabled ? undefined : onClick}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        width: "var(--icon-button-size)",
        height: "var(--icon-button-size)",
        borderRadius: "var(--radius-full)",
        background: pressed ? "var(--surface-soft)" : "var(--surface-canvas)",
        border: "var(--border-width-hairline) solid var(--border-hairline)",
        color: disabled ? "var(--text-muted)" : "var(--text-ink)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        boxSizing: "border-box",
        cursor: disabled ? "not-allowed" : "pointer",
        flex: "0 0 auto",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
