function SignInScreen({ onSignIn }) {
  const { GoogleSignInButton } = window.SEOConsoleDesignSystem_8b9179;
  return (
    <div className="db-scope" style={{ minHeight: "100vh", background: "var(--db-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "var(--db-font-sans)" }}>
      <div style={{ width: "420px", borderRadius: "var(--db-radius-xl)", border: "1px solid var(--db-border)", background: "var(--db-surface)", padding: "32px", boxSizing: "border-box" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 600, color: "var(--db-fg)" }}>SEO Console</h1>
        <p style={{ marginTop: "8px", color: "var(--db-muted)", fontSize: "14px", lineHeight: 1.55 }}>
          A cleaner, more customizable view of Google Search Console (and Bing) performance, plus index &amp; crawl signals for technical SEO.
        </p>
        <div style={{ marginTop: "24px" }}>
          <GoogleSignInButton onClick={onSignIn} />
        </div>
        <p style={{ marginTop: "24px", fontSize: "12px", color: "var(--db-muted)" }}>Read-only access. We request the Search Console scope only.</p>
      </div>
    </div>
  );
}

window.SignInScreen = SignInScreen;
