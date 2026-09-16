import React from "react";

export function GoogleSignInButton({ label = "Continue with Google", onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 20px",
        borderRadius: "var(--db-radius-md)",
        border: "1px solid var(--db-border)",
        background: "var(--db-bg)",
        fontFamily: "var(--db-font-sans)",
        fontSize: "14px",
        fontWeight: 500,
        color: "var(--db-fg)",
        cursor: "pointer",
        ...style,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09Z"></path>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z"></path>
        <path fill="#FBBC05" d="M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.05H2.18a11 11 0 0 0 0 9.9l3.67-2.85Z"></path>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05L5.85 9.9C6.71 7.3 9.14 5.38 12 5.38Z"></path>
      </svg>
      {label}
    </button>
  );
}
