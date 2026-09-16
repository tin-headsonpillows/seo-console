function DashboardShell({ active, onSelect, property, properties, onPropertyChange, user, onSettings, onSignOut, dark, children }) {
  const { TopTabNav, Icon } = window.SEOConsoleDesignSystem_8b9179;
  const items = [
    { id: "performance", label: "Performance", icon: <Icon name="trending-up" size={18} /> },
    { id: "opportunities", label: "Opportunities", icon: <Icon name="target" size={18} /> },
    { id: "analytics", label: "Analytics", icon: <Icon name="bar-chart-2" size={18} /> },
    { id: "indexing", label: "Indexing", icon: <Icon name="database" size={18} /> },
    { id: "inspect", label: "URL Inspection", icon: <Icon name="search" size={18} /> },
  ];
  return (
    <div className={"db-scope" + (dark ? " db-dark" : "")} style={{ minHeight: "100vh", background: "var(--db-bg)" }}>
      <TopTabNav
        items={items}
        active={active}
        onSelect={onSelect}
        property={property}
        properties={properties}
        onPropertyChange={onPropertyChange}
        user={user}
        onSettings={onSettings}
        settingsIcon={<Icon name="settings" size={18} />}
        onSignOut={onSignOut}
      />
      <main style={{ maxWidth: "1500px", margin: "0 auto", padding: "24px 28px", fontFamily: "var(--db-font-sans)", color: "var(--db-fg)" }}>
        {children}
      </main>
    </div>
  );
}

window.DashboardShell = DashboardShell;
