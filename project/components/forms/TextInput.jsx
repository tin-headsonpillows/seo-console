import React from "react";

export function TextInput({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  iconLeft,
  id,
  name,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : "input";
  const inputId = id || autoId;
  const borderColor = error ? "var(--color-error)" : focused ? "var(--text-ink)" : "var(--border-hairline)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)", width: fullWidth ? "100%" : undefined, ...style }}>
      {label ? (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--caption-family)",
            fontSize: "var(--caption-size)",
            fontWeight: "var(--caption-weight)",
            lineHeight: "var(--caption-leading)",
            color: "var(--text-body)",
          }}
        >
          {label}
        </label>
      ) : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-xs)",
          height: "var(--control-height)",
          padding: "var(--input-pad-y) var(--input-pad-x)",
          background: disabled ? "var(--surface-soft)" : "var(--surface-canvas)",
          border: "var(--border-width-hairline) solid " + borderColor,
          borderRadius: "var(--radius-md)",
          boxSizing: "border-box",
        }}
      >
        {iconLeft ? <span style={{ color: "var(--text-muted)", display: "inline-flex", flex: "0 0 auto" }}>{iconLeft}</span> : null}
        <input
          {...rest}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            all: "unset",
            flex: "1 1 auto",
            minWidth: 0,
            fontFamily: "var(--body-md-family)",
            fontSize: "var(--body-md-size)",
            fontWeight: "var(--body-md-weight)",
            color: disabled ? "var(--text-muted)" : "var(--text-ink)",
            cursor: disabled ? "not-allowed" : "text",
          }}
        />
      </div>
      {error || hint ? (
        <span
          style={{
            fontFamily: "var(--caption-family)",
            fontSize: "var(--caption-size)",
            fontWeight: "var(--caption-weight)",
            color: error ? "var(--color-error)" : "var(--text-muted-soft)",
          }}
        >
          {error || hint}
        </span>
      ) : null}
    </div>
  );
}
