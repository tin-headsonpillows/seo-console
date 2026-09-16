import React from "react";

export function TopTabNav({ items = [], active, onSelect, property, properties = [], onPropertyChange, user, onSettings, settingsIcon, onSignOut, style }) {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--db-border)",
        background: "var(--db-surface)",
        fontFamily: "var(--db-font-sans)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "12px 20px" }}>
        <span style={{ fontSize: "16px", fontWeight: 600, color: "var(--db-fg)" }}>SEO Console</span>

        {properties.length ? (
          <select
            value={property}
            onChange={(e) => onPropertyChange && onPropertyChange(e.target.value)}
            style={{
              fontSize: "13px",
              padding: "6px 10px",
              borderRadius: "var(--db-radius-sm)",
              border: "1px solid var(--db-border)",
              background: "var(--db-bg)",
              color: "var(--db-fg)",
              boxSizing: "border-box",
            }}
          >
            {properties.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        ) : null}

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={onSettings}
            style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", borderRadius: "var(--db-radius-sm)",
              border: "1px solid var(--db-border)", background: "transparent", color: "var(--db-fg)", fontSize: "13px", cursor: "pointer",
            }}
          >
            {settingsIcon}
            Settings
          </button>
          {user?.picture ? (
            <img src={user.picture} alt="" style={{ width: "28px", height: "28px", borderRadius: "50%", flex: "0 0 auto" }} />
          ) : (
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--db-accent-soft)", flex: "0 0 auto" }} />
          )}
          <button onClick={onSignOut} style={{ background: "none", border: "none", padding: 0, fontSize: "13px", color: "var(--db-muted)", cursor: "pointer" }}>
            Sign out
          </button>
        </div>
      </div>

      <nav style={{ display: "flex", gap: "4px", padding: "0 20px" }}>
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <button
              key={it.id}
              onClick={() => onSelect && onSelect(it.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                borderBottom: "2px solid " + (isActive ? "var(--db-accent)" : "transparent"),
                border: "none",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
                borderBottomColor: isActive ? "var(--db-accent)" : "transparent",
                background: "transparent",
                color: isActive ? "var(--db-accent)" : "var(--db-muted)",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 500,
                cursor: "pointer",
              }}
            >
              {it.icon}
              {it.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
