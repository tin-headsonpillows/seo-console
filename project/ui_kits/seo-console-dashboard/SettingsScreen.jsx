function SettingsScreen({ onClose, dark, onThemeChange }) {
  const { ThemeToggle } = window.SEOConsoleDesignSystem_8b9179;
  const field = { marginTop: "8px", width: "100%", borderRadius: "var(--db-radius-sm)", border: "1px solid var(--db-border)", background: "var(--db-bg)", color: "var(--db-fg)", padding: "8px 10px", fontSize: "14px", boxSizing: "border-box" };
  const sectionTitle = { fontSize: "14px", fontWeight: 600, color: "var(--db-fg)", margin: 0 };
  const hint = { fontSize: "12px", color: "var(--db-muted)", marginTop: "4px" };
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "80px 16px", zIndex: 50 }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "560px", maxHeight: "85vh", overflowY: "auto", borderRadius: "var(--db-radius-xl)", border: "1px solid var(--db-border)", background: "var(--db-surface)", padding: "24px", boxSizing: "border-box", fontFamily: "var(--db-font-sans)", color: "var(--db-fg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>Settings</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--db-muted)", fontSize: "16px", cursor: "pointer" }}>✕</button>
        </div>

        <section style={{ marginTop: "20px" }}>
          <p style={sectionTitle}>Appearance</p>
          <div style={{ marginTop: "8px" }}><ThemeToggle value={dark ? "dark" : "light"} onChange={onThemeChange} /></div>
        </section>

        <section style={{ marginTop: "24px" }}>
          <p style={sectionTitle}>Bing Webmaster Tools <span style={{ color: "var(--db-muted)", fontWeight: 400 }}>· not connected</span></p>
          <p style={hint}>Bing Webmaster Tools → Settings → API access → API Key. One key covers every verified Bing site.</p>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <input placeholder="Paste Bing API key" style={{ ...field, marginTop: 0, flex: 1 }} />
            <button style={{ borderRadius: "var(--db-radius-sm)", border: "none", background: "var(--db-accent)", color: "#fff", padding: "8px 16px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>Save</button>
          </div>
        </section>

        <section style={{ marginTop: "24px" }}>
          <p style={sectionTitle}>Query filters — cocbasemelon.weebly.com</p>
          <label style={{ ...hint, display: "block" }}>Branded terms (comma-separated)</label>
          <textarea rows={2} defaultValue="coc base melon" style={field} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "12px" }}>
            <label style={{ display: "flex", flexDirection: "column", fontSize: "12px", color: "var(--db-muted)" }}>
              Long-tail: min words
              <input type="number" defaultValue={4} style={{ ...field, width: "80px" }} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", fontSize: "12px", color: "var(--db-muted)" }}>
              AI prompt: impressions &lt;
              <input type="number" defaultValue={10} style={{ ...field, width: "80px" }} />
            </label>
          </div>
        </section>

        <section style={{ marginTop: "24px", borderRadius: "var(--db-radius-md)", border: "1px solid var(--db-border)", background: "var(--db-bg)", padding: "12px" }}>
          <p style={{ margin: 0, fontSize: "13px", fontWeight: 600 }}>Scheduled daily sync</p>
          <p style={{ margin: "4px 0 0", fontSize: "12px", color: "var(--db-muted)" }}>Runs the same pull as "Sync now" for every property, once a day.</p>
        </section>
      </div>
    </div>
  );
}

window.SettingsScreen = SettingsScreen;
