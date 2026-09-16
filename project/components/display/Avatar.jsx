import React from "react";

const palette = {
  orange: "var(--badge-orange)",
  pink: "var(--badge-pink)",
  violet: "var(--badge-violet)",
  emerald: "var(--badge-emerald)",
  neutral: "var(--surface-card)",
};

export function Avatar({ src, alt = "", initials, fill = "neutral", size = 36, style }) {
  const isPastel = fill !== "neutral";
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        background: palette[fill] || palette.neutral,
        color: isPastel ? "var(--text-on-primary)" : "var(--text-ink)",
        fontFamily: "var(--caption-family)",
        fontSize: "var(--caption-size)",
        fontWeight: "var(--caption-weight)",
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
