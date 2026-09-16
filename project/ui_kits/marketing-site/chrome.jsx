function SiteNav({ activeHref, onNavigate }) {
  const { TopNav, Wordmark } = window.SEOConsoleDesignSystem_8b9179;
  const NAV_ITEMS = [{ label: "Product" }, { label: "Solutions" }, { label: "Resources" }, { label: "Pricing" }, { label: "Agencies" }];
  return (
    <TopNav
      logo={<Wordmark />}
      items={NAV_ITEMS.map((i) => ({ ...i, href: "#" + i.label.toLowerCase() }))}
      activeHref={activeHref}
      onStartClick={() => onNavigate("login")}
      onLoginClick={() => onNavigate("login")}
    />
  );
}

function SiteFooter() {
  const { Footer } = window.SEOConsoleDesignSystem_8b9179;
  return (
    <Footer
      columns={[
        { title: "Projects", links: ["Overview", "Pricing", "Integrations"] },
        { title: "Audits", links: ["Technical SEO", "Backlinks", "Core Web Vitals"] },
        { title: "Reports", links: ["Rankings", "Traffic", "Scheduled reports"] },
        { title: "Resources", links: ["Blog", "Docs", "Changelog"] },
      ]}
    />
  );
}

window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
