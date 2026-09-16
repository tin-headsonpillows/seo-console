import React from "react";

export function TextLink({ children, href = "#", tone = "ink", size = "body-md", onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
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
        fontFamily: "var(--" + scale + "-family)",
        fontSize: "var(--" + scale + "-size)",
        fontWeight: "var(--" + scale + "-weight)",
        lineHeight: "var(--" + scale + "-leading)",
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
