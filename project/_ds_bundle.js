/* @ds-bundle: {"format":4,"namespace":"SEOConsoleDesignSystem_8b9179","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"DataTable","sourcePath":"components/dashboard/DataTable.jsx"},{"name":"DateRangePopover","sourcePath":"components/dashboard/DateRangePopover.jsx"},{"name":"FilterPopover","sourcePath":"components/dashboard/FilterPopover.jsx"},{"name":"GoogleSignInButton","sourcePath":"components/dashboard/GoogleSignInButton.jsx"},{"name":"MetricCard","sourcePath":"components/dashboard/MetricCard.jsx"},{"name":"SidebarNav","sourcePath":"components/dashboard/SidebarNav.jsx"},{"name":"ThemeToggle","sourcePath":"components/dashboard/ThemeToggle.jsx"},{"name":"TrendPill","sourcePath":"components/dashboard/TrendPill.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"RatingStars","sourcePath":"components/display/RatingStars.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"HeroBand","sourcePath":"components/layout/HeroBand.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"},{"name":"CategoryTab","sourcePath":"components/navigation/CategoryTab.jsx"},{"name":"NavPillGroup","sourcePath":"components/navigation/NavPillGroup.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"CtaBandLight","sourcePath":"components/surfaces/CtaBandLight.jsx"},{"name":"CustomerProofCard","sourcePath":"components/surfaces/CustomerProofCard.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"FeatureIconCard","sourcePath":"components/surfaces/FeatureIconCard.jsx"},{"name":"HeroAppMockupCard","sourcePath":"components/surfaces/HeroAppMockupCard.jsx"},{"name":"PricingTierCard","sourcePath":"components/surfaces/PricingTierCard.jsx"},{"name":"ProductMockupCard","sourcePath":"components/surfaces/ProductMockupCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"07e72262350e","components/actions/IconButton.jsx":"39c9c159bac2","components/actions/TextLink.jsx":"add312a4e989","components/dashboard/DataTable.jsx":"76e389d5a1cc","components/dashboard/DateRangePopover.jsx":"551519e8a7e8","components/dashboard/FilterPopover.jsx":"1927d5cd78fd","components/dashboard/GoogleSignInButton.jsx":"d179a6b924fd","components/dashboard/MetricCard.jsx":"39bafa26c97f","components/dashboard/SidebarNav.jsx":"3388bc646620","components/dashboard/ThemeToggle.jsx":"05d0a561309f","components/dashboard/TrendPill.jsx":"ce3ef9c981eb","components/display/Avatar.jsx":"409e7f1d0db9","components/display/Badge.jsx":"668f772b4978","components/display/Icon.jsx":"9ca11d46d405","components/display/RatingStars.jsx":"990f90e40d7a","components/forms/TextInput.jsx":"ace93c90fe94","components/layout/Footer.jsx":"bf7c6e35c8e8","components/layout/HeroBand.jsx":"4302df02d6e6","components/layout/Wordmark.jsx":"71379da26a40","components/navigation/CategoryTab.jsx":"d1cb91711b47","components/navigation/NavPillGroup.jsx":"b512f994eb92","components/navigation/TopNav.jsx":"9f5ca12f644e","components/surfaces/CtaBandLight.jsx":"64c250a5fe4e","components/surfaces/CustomerProofCard.jsx":"b5882baf5a96","components/surfaces/FeatureCard.jsx":"1e3dca2f4cf3","components/surfaces/FeatureIconCard.jsx":"86cadb253f90","components/surfaces/HeroAppMockupCard.jsx":"c04fa8919efa","components/surfaces/PricingTierCard.jsx":"c498a1c25ed4","components/surfaces/ProductMockupCard.jsx":"35457a09e1b3","ui_kits/marketing-site/Homepage.jsx":"fc27076a4be5","ui_kits/marketing-site/LoginPage.jsx":"2116742f08b7","ui_kits/marketing-site/PricingPage.jsx":"b71e9f716384","ui_kits/marketing-site/ResourcesPage.jsx":"565168a2b301","ui_kits/marketing-site/chrome.jsx":"5affc94c49d1","ui_kits/marketing-site/fragments.jsx":"37229557c71a","ui_kits/seo-console-dashboard/OpportunitiesScreen.jsx":"9e40a1597d71","ui_kits/seo-console-dashboard/PerformanceScreen.jsx":"449a66d7a31c","ui_kits/seo-console-dashboard/SettingsScreen.jsx":"c08d8e8357be","ui_kits/seo-console-dashboard/SignInScreen.jsx":"145fda7a254d","ui_kits/seo-console-dashboard/chrome.jsx":"9cd2067aecc0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SEOConsoleDesignSystem_8b9179 = window.SEOConsoleDesignSystem_8b9179 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--button-family)",
  fontSize: "var(--button-size)",
  fontWeight: "var(--button-weight)",
  lineHeight: "var(--button-leading)",
  letterSpacing: "var(--button-tracking)",
  height: "var(--control-height)",
  padding: "var(--control-pad-y) var(--control-pad-x)",
  borderRadius: "var(--radius-md)",
  border: "var(--border-width-hairline) solid transparent",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-xs)",
  boxSizing: "border-box",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color 120ms linear, color 120ms linear"
};
function Button({
  variant = "primary",
  children,
  disabled = false,
  iconLeft,
  iconRight,
  href,
  onClick,
  fullWidth = false,
  type = "button",
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  let skin;
  if (variant === "secondary") {
    skin = {
      background: "var(--surface-canvas)",
      color: "var(--text-ink)",
      borderColor: "var(--border-hairline)"
    };
    if (pressed) skin.background = "var(--surface-soft)";
  } else if (variant === "text") {
    skin = {
      background: "transparent",
      color: "var(--text-ink)",
      padding: "var(--control-pad-y) var(--space-xs)"
    };
    if (pressed) skin.color = "var(--color-primary-active)";
  } else if (variant === "inverse") {
    skin = {
      background: "var(--surface-canvas)",
      color: "var(--text-ink)"
    };
    if (pressed) skin.background = "var(--surface-strong)";
  } else {
    skin = {
      background: "var(--color-primary)",
      color: "var(--text-on-primary)"
    };
    if (pressed) skin.background = "var(--color-primary-active)";
  }
  if (disabled) {
    skin = {
      background: variant === "primary" || variant === "inverse" ? "var(--color-primary-disabled)" : "var(--surface-canvas)",
      color: "var(--text-muted)",
      borderColor: variant === "secondary" ? "var(--border-hairline)" : "transparent"
    };
  }
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href && !disabled ? href : undefined,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onPointerDown: () => !disabled && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      ...base,
      ...skin,
      width: fullWidth ? "100%" : undefined,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  onClick,
  href,
  disabled = false,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href && !disabled ? href : undefined,
    "aria-label": label,
    title: label,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onPointerDown: () => !disabled && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
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
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = "#",
  tone = "ink",
  size = "body-md",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const scale = size === "body-sm" ? "body-sm" : size === "caption" ? "caption" : "body-md";
  const color = tone === "accent" ? "var(--color-accent)" : tone === "muted" ? "var(--text-muted)" : tone === "on-dark" ? "var(--text-on-dark-soft)" : "var(--text-link)";
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--" + scale + "-family)",
      fontSize: "var(--" + scale + "-size)",
      fontWeight: "var(--" + scale + "-weight)",
      lineHeight: "var(--" + scale + "-leading)",
      color: hover && tone === "on-dark" ? "var(--text-on-dark)" : color,
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: "2px",
      cursor: "pointer",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/DataTable.jsx
try { (() => {
const {
  useMemo,
  useState
} = React;
function DataTable({
  columns = [],
  rows = [],
  keyField = "key",
  onExport,
  extraTabs,
  style
}) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState(columns[0]?.field || keyField);
  const [dir, setDir] = useState("desc");
  const [pageSize, setPageSize] = useState(25);
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const base = needle ? rows.filter(r => String(r[keyField]).toLowerCase().includes(needle)) : rows;
    return [...base].sort((a, b) => {
      const av = a[sort],
        bv = b[sort];
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, q, sort, dir, keyField]);
  const shown = pageSize > 0 ? filtered.slice(0, pageSize) : filtered;
  const toggleSort = f => {
    if (sort === f) setDir(dir === "asc" ? "desc" : "asc");else {
      setSort(f);
      setDir("desc");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--db-font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "12px",
      borderBottom: "1px solid var(--db-border)",
      padding: "12px 16px"
    }
  }, extraTabs, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Filter\u2026",
    style: {
      flex: "1 1 160px",
      minWidth: "160px",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "var(--db-bg)",
      color: "var(--db-fg)",
      padding: "6px 12px",
      fontSize: "14px",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--db-muted)"
    }
  }, filtered.length.toLocaleString(), " rows"), /*#__PURE__*/React.createElement("select", {
    value: pageSize,
    onChange: e => setPageSize(Number(e.target.value)),
    style: {
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "var(--db-bg)",
      color: "var(--db-fg)",
      padding: "6px 8px",
      fontSize: "14px"
    }
  }, [10, 25, 50, 100].map(n => /*#__PURE__*/React.createElement("option", {
    key: n,
    value: n
  }, "Show ", n)), /*#__PURE__*/React.createElement("option", {
    value: 0
  }, "Show all")), /*#__PURE__*/React.createElement("button", {
    onClick: onExport,
    style: {
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      color: "var(--db-fg)",
      padding: "6px 12px",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Export CSV")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "34rem",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "14px"
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      position: "sticky",
      top: 0,
      background: "var(--db-surface)"
    }
  }, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "1px solid var(--db-border)",
      textAlign: "left",
      color: "var(--db-muted)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.field,
    onClick: () => toggleSort(c.field),
    style: {
      padding: "10px 16px",
      fontWeight: 500,
      cursor: "pointer",
      textAlign: c.align || "left",
      whiteSpace: "nowrap",
      color: c.color || "var(--db-muted)"
    }
  }, c.label, sort === c.field ? dir === "asc" ? " ▲" : " ▼" : "")))), /*#__PURE__*/React.createElement("tbody", null, shown.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[keyField],
    style: {
      borderBottom: "1px solid var(--db-border)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.field,
    style: {
      padding: "8px 16px",
      textAlign: c.align || "left",
      whiteSpace: "nowrap"
    }
  }, c.render ? c.render(r) : r[c.field])))), !shown.length && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: "40px",
      textAlign: "center",
      color: "var(--db-muted)"
    }
  }, "No rows match."))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/DateRangePopover.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function DateRangePopover({
  label,
  range,
  presets = [],
  onPreset,
  compareOptions = [],
  compareMode,
  onCompare,
  style
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const row = on => ({
    display: "block",
    width: "100%",
    textAlign: "left",
    borderRadius: "var(--db-radius-sm)",
    border: "none",
    background: on ? "var(--db-accent-soft)" : "transparent",
    color: on ? "var(--db-accent)" : "var(--db-fg)",
    padding: "6px 8px",
    fontSize: "14px",
    cursor: "pointer"
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      fontFamily: "var(--db-font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      color: "var(--db-fg)",
      padding: "7px 12px",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--db-muted)"
    }
  }, range.start, " \u2192 ", range.end), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--db-muted)"
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: "calc(100% + 8px)",
      zIndex: 40,
      display: "flex",
      width: compareOptions.length ? "480px" : "260px",
      borderRadius: "var(--db-radius-lg)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      boxShadow: "0 8px 24px rgba(0,0,0,.12)"
    }
  }, compareOptions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "50%",
      borderRight: "1px solid var(--db-border)",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      color: "var(--db-muted)"
    }
  }, "Comparison period"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, compareOptions.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onCompare && onCompare(c.id),
    style: row(compareMode === c.id)
  }, c.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: compareOptions.length ? "50%" : "100%",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "260px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => {
      onPreset && onPreset(p.id);
      setOpen(false);
    },
    style: row(false)
  }, p.label))))));
}
Object.assign(__ds_scope, { DateRangePopover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/DateRangePopover.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/FilterPopover.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function FilterPopover({
  value,
  onChange,
  dimension = "query",
  style
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const set = patch => onChange && onChange({
    ...value,
    ...patch
  });
  const queryOnly = dimension === "query";
  const activeCount = [value.branded !== "all", value.position !== 0, value.question, value.longtail, value.ai, value.trend !== "all", (value.contains || "").trim().length > 0].filter(Boolean).length;
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const sectionLabel = {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "var(--db-muted)",
    letterSpacing: "0.02em"
  };
  const chip = on => ({
    borderRadius: "var(--db-radius-sm)",
    border: "1px solid " + (on ? "var(--db-accent)" : "var(--db-border)"),
    background: on ? "var(--db-accent-soft)" : "transparent",
    color: on ? "var(--db-accent)" : "var(--db-fg)",
    fontSize: "13px",
    padding: "6px 8px",
    cursor: "pointer"
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      fontFamily: "var(--db-font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid " + (activeCount ? "var(--db-accent)" : "var(--db-border)"),
      background: activeCount ? "var(--db-accent-soft)" : "var(--db-surface)",
      color: activeCount ? "var(--db-accent)" : "var(--db-fg)",
      padding: "7px 12px",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, "Filters", activeCount ? ` · ${activeCount}` : ""), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: "calc(100% + 8px)",
      zIndex: 40,
      width: "288px",
      borderRadius: "var(--db-radius-lg)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      padding: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionLabel
  }, "Contains"), /*#__PURE__*/React.createElement("input", {
    value: value.contains || "",
    onChange: e => set({
      contains: e.target.value
    }),
    placeholder: "text in query / URL\u2026",
    style: {
      marginTop: "4px",
      width: "100%",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "var(--db-bg)",
      color: "var(--db-fg)",
      padding: "6px 8px",
      fontSize: "14px",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionLabel,
      marginTop: "16px"
    }
  }, "Position"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      display: "flex",
      gap: "4px"
    }
  }, [0, 3, 10, 20].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => set({
      position: n
    }),
    style: {
      ...chip(value.position === n),
      flex: 1
    }
  }, n === 0 ? "Any" : `Top ${n}`))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionLabel,
      marginTop: "16px"
    }
  }, "Trend vs comparison"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "4px"
    }
  }, ["all", "growing", "decaying", "new"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => set({
      trend: t
    }),
    style: {
      ...chip(value.trend === t),
      textTransform: "capitalize",
      padding: "6px 2px"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: queryOnly ? 1 : 0.4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionLabel,
      marginTop: "16px"
    }
  }, "Query presets ", queryOnly ? "" : "(Queries only)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, [["Branded", value.branded === "branded", () => set({
    branded: value.branded === "branded" ? "all" : "branded"
  })], ["Non-branded", value.branded === "nonbranded", () => set({
    branded: value.branded === "nonbranded" ? "all" : "nonbranded"
  })], ["People Also Ask (questions)", value.question, () => set({
    question: !value.question
  })], ["Long-tail keywords", value.longtail, () => set({
    longtail: !value.longtail
  })], ["AI search prompts", value.ai, () => set({
    ai: !value.ai
  })]].map(([label, on, click]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    disabled: !queryOnly,
    onClick: click,
    style: {
      ...chip(on),
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      boxSizing: "border-box"
    }
  }, label, /*#__PURE__*/React.createElement("span", null, on ? "✓" : ""))))), activeCount > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange && onChange({
      branded: "all",
      position: 0,
      question: false,
      longtail: false,
      ai: false,
      contains: "",
      trend: "all"
    }),
    style: {
      marginTop: "16px",
      width: "100%",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "transparent",
      color: "var(--db-bad)",
      padding: "6px 8px",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, "Clear all filters")));
}
Object.assign(__ds_scope, { FilterPopover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/FilterPopover.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/GoogleSignInButton.jsx
try { (() => {
function GoogleSignInButton({
  label = "Continue with Google",
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.05H2.18a11 11 0 0 0 0 9.9l3.67-2.85Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05L5.85 9.9C6.71 7.3 9.14 5.38 12 5.38Z"
  })), label);
}
Object.assign(__ds_scope, { GoogleSignInButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/GoogleSignInButton.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/MetricCard.jsx
try { (() => {
function MetricCard({
  label,
  value,
  color,
  delta,
  deltaGood,
  active = true,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      textAlign: "left",
      borderRadius: "var(--db-radius-lg)",
      border: "1px solid " + (active ? color : "var(--db-border)"),
      background: active ? "var(--db-surface)" : "var(--db-bg)",
      opacity: active ? 1 : 0.7,
      padding: "16px",
      cursor: "pointer",
      fontFamily: "var(--db-font-sans)",
      boxShadow: active ? "0 1px 2px rgba(0,0,0,.04)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      color: "var(--db-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: color,
      flex: "0 0 auto"
    }
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      fontSize: "24px",
      fontWeight: 600,
      color: "var(--db-fg)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2px",
      fontSize: "12px",
      fontWeight: 500,
      color: deltaGood ? "var(--db-good)" : "var(--db-bad)"
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/SidebarNav.jsx
try { (() => {
function SidebarNav({
  items = [],
  active,
  onSelect,
  property,
  properties = [],
  onPropertyChange,
  user,
  onSettings,
  settingsIcon,
  onSignOut,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "240px",
      flex: "0 0 auto",
      background: "var(--db-surface)",
      borderRight: "1px solid var(--db-border)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--db-font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      borderBottom: "1px solid var(--db-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--db-fg)"
    }
  }, "SEO Console"), properties.length ? /*#__PURE__*/React.createElement("select", {
    value: property,
    onChange: e => onPropertyChange && onPropertyChange(e.target.value),
    style: {
      marginTop: "10px",
      width: "100%",
      fontSize: "13px",
      padding: "6px 8px",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid var(--db-border)",
      background: "var(--db-bg)",
      color: "var(--db-fg)",
      boxSizing: "border-box"
    }
  }, properties.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))) : null), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: "1 1 auto",
      padding: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      overflowY: "auto"
    }
  }, items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "9px 12px",
        borderRadius: "var(--db-radius-sm)",
        border: "none",
        background: isActive ? "var(--db-accent-soft)" : "transparent",
        color: isActive ? "var(--db-accent)" : "var(--db-fg)",
        fontSize: "14px",
        fontWeight: isActive ? 600 : 400,
        textAlign: "left",
        cursor: "pointer"
      }
    }, it.icon, it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px",
      borderTop: "1px solid var(--db-border)",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSettings,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "9px 12px",
      borderRadius: "var(--db-radius-sm)",
      border: "none",
      background: "transparent",
      color: "var(--db-fg)",
      fontSize: "14px",
      textAlign: "left",
      cursor: "pointer"
    }
  }, settingsIcon, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "4px 12px"
    }
  }, user?.picture ? /*#__PURE__*/React.createElement("img", {
    src: user.picture,
    alt: "",
    style: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      flex: "0 0 auto"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: "var(--db-accent-soft)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--db-fg)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, user?.name || user?.email), /*#__PURE__*/React.createElement("button", {
    onClick: onSignOut,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      fontSize: "12px",
      color: "var(--db-muted)",
      cursor: "pointer",
      textAlign: "left"
    }
  }, "Sign out")))));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/ThemeToggle.jsx
try { (() => {
function ThemeToggle({
  value = "system",
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: "8px",
      ...style
    }
  }, ["system", "light", "dark"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      textTransform: "capitalize",
      fontFamily: "var(--db-font-sans)",
      fontSize: "14px",
      padding: "6px 12px",
      borderRadius: "var(--db-radius-sm)",
      border: "1px solid " + (value === t ? "var(--db-accent)" : "var(--db-border)"),
      background: value === t ? "var(--db-accent-soft)" : "transparent",
      color: value === t ? "var(--db-accent)" : "var(--db-fg)",
      cursor: "pointer"
    }
  }, t)));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/TrendPill.jsx
try { (() => {
function TrendPill({
  pct,
  invert = false,
  size = 12,
  style
}) {
  if (pct === null || pct === undefined) return null;
  const up = pct > 0;
  const good = invert ? !up : up;
  const label = !isFinite(pct) || Math.abs(pct) >= 999 ? "∞%" : `${up ? "+" : ""}${pct.toFixed(1)}%`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size + "px",
      fontWeight: 500,
      color: good ? "var(--db-good)" : "var(--db-bad)",
      fontFamily: "var(--db-font-sans)",
      ...style
    }
  }, up ? "↑" : "↓", label.replace("+", "").replace("-", ""));
}
Object.assign(__ds_scope, { TrendPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/TrendPill.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const palette = {
  orange: "var(--badge-orange)",
  pink: "var(--badge-pink)",
  violet: "var(--badge-violet)",
  emerald: "var(--badge-emerald)",
  neutral: "var(--surface-card)"
};
function Avatar({
  src,
  alt = "",
  initials,
  fill = "neutral",
  size = 36,
  style
}) {
  const isPastel = fill !== "neutral";
  return /*#__PURE__*/React.createElement("div", {
    style: {
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
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const pastel = {
  orange: "var(--badge-orange)",
  pink: "var(--badge-pink)",
  violet: "var(--badge-violet)",
  emerald: "var(--badge-emerald)"
};
function Badge({
  children,
  tone = "neutral",
  style
}) {
  const isPastel = !!pastel[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      fontWeight: "var(--caption-weight)",
      lineHeight: "var(--caption-leading)",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      background: isPastel ? pastel[tone] : "var(--surface-card)",
      color: isPastel ? "var(--text-on-primary)" : "var(--text-ink)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icon substitution: SEO Console's own icon set was not in the source material.
   Lucide (via CDN) is used as the closest geometric-stroke match. See readme ICONOGRAPHY. */
function lucideReady() {
  if (!window.__lucideReadyPromise) {
    window.__lucideReadyPromise = new Promise(resolve => {
      const check = () => {
        if (window.lucide) resolve();else setTimeout(check, 100);
      };
      document.querySelectorAll('script[src*="lucide"]').forEach(s => s.addEventListener("load", check));
      check();
    });
  }
  return window.__lucideReadyPromise;
}
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    lucideReady().then(() => {
      if (!cancelled && ref.current) window.lucide.createIcons({
        nameAttr: "data-lucide"
      });
    });
    return () => {
      cancelled = true;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("i", _extends({}, rest, {
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      flex: "0 0 auto",
      strokeWidth,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/RatingStars.jsx
try { (() => {
function RatingStars({
  rating = 5,
  max = 5,
  size = 14,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: "2px",
      color: "var(--badge-orange)",
      ...style
    },
    "aria-label": rating + " out of " + max + " stars"
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: size,
    color: i < rating ? "var(--badge-orange)" : "var(--border-hairline)",
    style: {
      fill: i < rating ? "var(--badge-orange)" : "none"
    }
  })));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextInput({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)",
      width: fullWidth ? "100%" : undefined,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      fontWeight: "var(--caption-weight)",
      lineHeight: "var(--caption-leading)",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      height: "var(--control-height)",
      padding: "var(--input-pad-y) var(--input-pad-x)",
      background: disabled ? "var(--surface-soft)" : "var(--surface-canvas)",
      border: "var(--border-width-hairline) solid " + borderColor,
      borderRadius: "var(--radius-md)",
      boxSizing: "border-box"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex",
      flex: "0 0 auto"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: inputId,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      all: "unset",
      flex: "1 1 auto",
      minWidth: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      fontWeight: "var(--body-md-weight)",
      color: disabled ? "var(--text-muted)" : "var(--text-ink)",
      cursor: disabled ? "not-allowed" : "text"
    }
  }))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      fontWeight: "var(--caption-weight)",
      color: error ? "var(--color-error)" : "var(--text-muted-soft)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroBand.jsx
try { (() => {
function HeroBand({
  eyebrow,
  heading,
  subline,
  actions,
  mockup,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-canvas)",
      padding: "var(--pad-band) var(--space-xl)",
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--space-xxl)",
      alignItems: "center",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--nav-link-family)",
      fontSize: "var(--nav-link-size)",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--display-xl-family)",
      fontSize: "var(--display-xl-size)",
      fontWeight: "var(--display-xl-weight)",
      letterSpacing: "var(--display-xl-tracking)",
      lineHeight: "var(--display-xl-leading)",
      color: "var(--text-ink)"
    }
  }, heading), subline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-leading)",
      color: "var(--text-body)",
      maxWidth: "480px"
    }
  }, subline) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      marginTop: "var(--space-xs)"
    }
  }, actions) : null), mockup);
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
function Wordmark({
  tone = "ink",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "18px",
      letterSpacing: "-0.3px",
      color: tone === "on-dark" ? "var(--text-on-dark)" : "var(--text-ink)",
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, "SEO Console");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark-soft)",
      padding: "var(--pad-footer) var(--space-xl)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "on-dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + Math.max(columns.length, 1) + ", 1fr)",
      gap: "var(--space-xl)"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gutter-footer)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      fontWeight: 600,
      color: "var(--text-on-dark)"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    key: l,
    tone: "on-dark",
    size: "body-sm",
    href: "#"
  }, l))))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--body-sm-family)",
      fontSize: "var(--body-sm-size)",
      color: "var(--text-on-dark-soft)"
    }
  }, "\xA9 ", new Date().getFullYear(), " SEO Console. All rights reserved.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTab.jsx
try { (() => {
function CategoryTab({
  children,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--nav-link-family)",
      fontSize: "var(--nav-link-size)",
      fontWeight: "var(--nav-link-weight)",
      padding: "8px 14px",
      borderRadius: "var(--radius-md)",
      border: "none",
      cursor: "pointer",
      background: active ? "var(--surface-canvas)" : "transparent",
      color: active ? "var(--text-ink)" : "var(--text-muted)",
      boxShadow: active ? "var(--shadow-sm)" : "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavPillGroup.jsx
try { (() => {
function NavPillGroup({
  segments = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      background: "var(--surface-soft)",
      borderRadius: "var(--radius-pill)",
      padding: "6px",
      gap: "2px",
      ...style
    }
  }, segments.map(seg => {
    const isActive = seg === active;
    return /*#__PURE__*/React.createElement("button", {
      key: seg,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(seg),
      style: {
        fontFamily: "var(--nav-link-family)",
        fontSize: "var(--nav-link-size)",
        fontWeight: "var(--nav-link-weight)",
        padding: "8px 14px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        background: isActive ? "var(--surface-canvas)" : "transparent",
        color: isActive ? "var(--text-ink)" : "var(--text-muted)",
        boxShadow: isActive ? "var(--shadow-sm)" : "none",
        transition: "background-color 120ms linear, color 120ms linear"
      }
    }, seg);
  }));
}
Object.assign(__ds_scope, { NavPillGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavPillGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  logo,
  items = [],
  activeHref,
  onLoginClick,
  onStartClick,
  right,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--nav-height)",
      background: "var(--surface-canvas)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-xl)",
      boxSizing: "border-box",
      borderBottom: "var(--border-width-hairline) solid var(--border-hairline-soft)",
      gap: "var(--space-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xxl)",
      flex: "1 1 auto",
      minWidth: 0
    }
  }, logo, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || "#",
    style: {
      fontFamily: "var(--nav-link-family)",
      fontSize: "var(--nav-link-size)",
      fontWeight: "var(--nav-link-weight)",
      lineHeight: "var(--nav-link-leading)",
      color: it.href === activeHref ? "var(--text-ink)" : "var(--text-body)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, it.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      flex: "0 0 auto"
    }
  }, right, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    onClick: onLoginClick
  }, "Log in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onStartClick
  }, "Start free")));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CtaBandLight.jsx
try { (() => {
function CtaBandLight({
  heading,
  subline,
  ctaLabel = "Start free",
  onCtaClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-cta-band)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-md)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--display-sm-family)",
      fontSize: "var(--display-sm-size)",
      fontWeight: "var(--display-sm-weight)",
      letterSpacing: "var(--display-sm-tracking)",
      lineHeight: "var(--display-sm-leading)",
      color: "var(--text-ink)"
    }
  }, heading), subline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      color: "var(--text-body)",
      maxWidth: "480px"
    }
  }, subline) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onCtaClick,
    style: {
      marginTop: "var(--space-xs)"
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { CtaBandLight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CtaBandLight.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CustomerProofCard.jsx
try { (() => {
function CustomerProofCard({
  avatar,
  name,
  role,
  quote,
  rating,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card-compact)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, avatar, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--title-sm-family)",
      fontSize: "var(--title-sm-size)",
      fontWeight: "var(--title-sm-weight)",
      color: "var(--text-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      color: "var(--text-muted)"
    }
  }, role))), rating ? /*#__PURE__*/React.createElement(__ds_scope.RatingStars, {
    rating: rating
  }) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-leading)",
      color: "var(--text-body)"
    }
  }, quote));
}
Object.assign(__ds_scope, { CustomerProofCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CustomerProofCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon,
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      boxSizing: "border-box",
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--title-md-family)",
      fontSize: "var(--title-md-size)",
      fontWeight: "var(--title-md-weight)",
      color: "var(--text-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-leading)",
      color: "var(--text-body)"
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureIconCard.jsx
try { (() => {
function FeatureIconCard({
  icon,
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-canvas)",
      border: "var(--border-width-hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card-compact)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      boxSizing: "border-box",
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--title-sm-family)",
      fontSize: "var(--title-sm-size)",
      fontWeight: "var(--title-sm-weight)",
      color: "var(--text-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-sm-family)",
      fontSize: "var(--body-sm-size)",
      lineHeight: "var(--body-sm-leading)",
      color: "var(--text-body)"
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureIconCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureIconCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/HeroAppMockupCard.jsx
try { (() => {
function HeroAppMockupCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-canvas)",
      border: "var(--border-width-hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)",
      padding: "var(--space-lg)",
      boxSizing: "border-box",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { HeroAppMockupCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/HeroAppMockupCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PricingTierCard.jsx
try { (() => {
function PricingTierCard({
  name,
  price,
  period = "/mo",
  features = [],
  ctaLabel = "Choose plan",
  onCtaClick,
  featured = false,
  style
}) {
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? "var(--surface-dark)" : "var(--surface-canvas)",
      border: dark ? "none" : "var(--border-width-hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      boxShadow: "var(--shadow-md)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--title-lg-family)",
      fontSize: "var(--title-lg-size)",
      fontWeight: "var(--title-lg-weight)",
      letterSpacing: "var(--title-lg-tracking)",
      color: dark ? "var(--text-on-dark)" : "var(--text-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display-sm-family)",
      fontSize: "var(--display-sm-size)",
      fontWeight: "var(--display-sm-weight)",
      letterSpacing: "var(--display-sm-tracking)",
      lineHeight: "var(--display-sm-leading)",
      color: dark ? "var(--text-on-dark)" : "var(--text-ink)"
    }
  }, price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      fontWeight: 400,
      color: dark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, " ", period)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      color: dark ? "var(--text-on-dark-soft)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: dark ? "var(--text-on-dark)" : "var(--text-ink)"
  }), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "inverse" : "primary",
    fullWidth: true,
    onClick: onCtaClick,
    style: {
      marginTop: "auto"
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingTierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PricingTierCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductMockupCard.jsx
try { (() => {
function ProductMockupCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-canvas)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card-compact)",
      border: "var(--border-width-hairline) solid var(--border-hairline)",
      boxSizing: "border-box",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ProductMockupCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductMockupCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Homepage.jsx
try { (() => {
function Homepage({
  onNavigate
}) {
  const {
    HeroBand,
    Wordmark
  } = window.SEOConsoleDesignSystem_8b9179;
  const HeroAppMockupCard = window.SEOConsoleDesignSystem_8b9179.HeroAppMockupCard;
  const {
    FeatureCard,
    ProductMockupCard,
    CustomerProofCard,
    CtaBandLight,
    Avatar,
    Button,
    Icon
  } = window.SEOConsoleDesignSystem_8b9179;
  const section = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    padding: "var(--pad-band) var(--space-xl)",
    boxSizing: "border-box"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBand, {
    heading: "The better way to monitor and improve your search performance",
    subline: "Automated audits, keyword tracking and reporting in one console.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNavigate("login")
    }, "Start free"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 16
      })
    }, "Watch demo")),
    mockup: /*#__PURE__*/React.createElement(HeroAppMockupCard, null, /*#__PURE__*/React.createElement(KeywordGridFragment, null))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--display-lg-family)",
      fontSize: "var(--display-lg-size)",
      fontWeight: 600,
      letterSpacing: "var(--display-lg-tracking)",
      lineHeight: "var(--display-lg-leading)",
      color: "var(--text-ink)",
      textAlign: "center"
    }
  }, "Your all-purpose SEO console"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gutter-card)"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 24
    }),
    title: "Automated audits",
    description: "Run a full technical crawl on a schedule you set \u2014 no manual kickoff required."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "line-chart",
      size: 24
    }),
    title: "Keyword tracking",
    description: "Track ranking position and volatility for every keyword that matters."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "link",
      size: 24
    }),
    title: "Backlink monitoring",
    description: "See every link gained or lost, with source authority scored automatically."
  })))), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: "var(--space-xxl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--display-md-family)",
      fontSize: "var(--display-md-size)",
      fontWeight: 600,
      letterSpacing: "var(--display-md-tracking)",
      lineHeight: "var(--display-md-leading)",
      color: "var(--text-ink)"
    }
  }, "Reports that run themselves"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      color: "var(--text-body)"
    }
  }, "Set a crawl schedule once. SEO Console handles the rest \u2014 issue detection, prioritization, and a report in your inbox.")), /*#__PURE__*/React.createElement(ProductMockupCard, null, /*#__PURE__*/React.createElement(AutomationFragment, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--display-lg-family)",
      fontSize: "var(--display-lg-size)",
      fontWeight: 600,
      letterSpacing: "var(--display-lg-tracking)",
      color: "var(--text-ink)",
      textAlign: "center"
    }
  }, "Trusted by SEO teams"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gutter-card)"
    }
  }, /*#__PURE__*/React.createElement(CustomerProofCard, {
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      initials: "JC",
      fill: "violet"
    }),
    name: "Jane Cho",
    role: "Head of SEO, Loop Retail",
    rating: 5,
    quote: "We cut our audit turnaround from two days to twenty minutes."
  }), /*#__PURE__*/React.createElement(CustomerProofCard, {
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      initials: "TK",
      fill: "orange"
    }),
    name: "Tom Kessler",
    role: "Marketing Lead, Fernway",
    rating: 5,
    quote: "Keyword tracking finally feels reliable instead of a spreadsheet chore."
  }), /*#__PURE__*/React.createElement(CustomerProofCard, {
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      initials: "SM",
      fill: "emerald"
    }),
    name: "Sara Mendez",
    role: "SEO Manager, Northstack",
    rating: 5,
    quote: "The automated reports replaced three hours of manual work every Monday."
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      paddingTop: "var(--space-xxl)",
      paddingBottom: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement(CtaBandLight, {
    heading: "Clearer, faster SEO decisions",
    subline: "Start free \u2014 no card required.",
    ctaLabel: "Start free",
    onCtaClick: () => onNavigate("login")
  })));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/LoginPage.jsx
try { (() => {
function LoginPage({
  onNavigate
}) {
  const {
    Wordmark,
    TextInput,
    Button,
    TextLink
  } = window.SEOConsoleDesignSystem_8b9179;
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "560px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "360px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--display-sm-family)",
      fontSize: "var(--display-sm-size)",
      fontWeight: 600,
      letterSpacing: "var(--display-sm-tracking)",
      color: "var(--text-ink)"
    }
  }, "Log in"), /*#__PURE__*/React.createElement(TextInput, {
    label: "Work email",
    placeholder: "you@company.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onNavigate("home")
  }, "Log in"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--body-sm-family)",
      fontSize: "var(--body-sm-size)",
      color: "var(--text-muted)"
    }
  }, "No account? ", /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => onNavigate("home")
  }, "Start free"))));
}
window.LoginPage = LoginPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/LoginPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PricingPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PricingPage({
  onNavigate
}) {
  const {
    PricingTierCard,
    CtaBandLight
  } = window.SEOConsoleDesignSystem_8b9179;
  const section = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    padding: "var(--pad-band) var(--space-xl)",
    boxSizing: "border-box"
  };
  const TIERS = [{
    name: "Starter",
    price: "$29",
    features: ["1 site", "Weekly audits", "Email support"]
  }, {
    name: "Pro",
    price: "$79",
    features: ["10 sites", "Daily audits", "Priority support", "Backlink monitoring"],
    featured: true
  }, {
    name: "Agency",
    price: "$199",
    features: ["50 sites", "Daily audits", "White-label reports", "Dedicated manager"]
  }, {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited sites", "Custom SLAs", "SSO", "Dedicated manager"]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--display-lg-family)",
      fontSize: "var(--display-lg-size)",
      fontWeight: 600,
      letterSpacing: "var(--display-lg-tracking)",
      lineHeight: "var(--display-lg-leading)",
      color: "var(--text-ink)"
    }
  }, "Simple pricing, every plan included"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-md-family)",
      fontSize: "var(--body-md-size)",
      color: "var(--text-body)",
      maxWidth: "480px"
    }
  }, "Every plan includes audits, keyword tracking and reporting. Scale by site count.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      paddingTop: 0,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--gutter-card)"
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement(PricingTierCard, _extends({
    key: t.name
  }, t, {
    onCtaClick: () => onNavigate("login")
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      paddingTop: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement(CtaBandLight, {
    heading: "Not sure which plan fits?",
    subline: "Talk to us \u2014 we'll help you pick.",
    ctaLabel: "Contact sales"
  })));
}
window.PricingPage = PricingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PricingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ResourcesPage.jsx
try { (() => {
function ResourcesPage() {
  const {
    Badge,
    CategoryTab
  } = window.SEOConsoleDesignSystem_8b9179;
  const section = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    padding: "var(--pad-band) var(--space-xl)",
    boxSizing: "border-box"
  };
  const POSTS = [{
    tag: "Product",
    title: "Introducing scheduled audits",
    excerpt: "Set a crawl cadence once — SEO Console handles the rest.",
    date: "Sep 8"
  }, {
    tag: "Article",
    title: "How search engines actually crawl your site",
    excerpt: "A practical walkthrough of crawl budget and indexing.",
    date: "Sep 2"
  }, {
    tag: "New",
    title: "Backlink monitoring is live",
    excerpt: "Track every link gained or lost, scored by source authority.",
    date: "Aug 26"
  }, {
    tag: "Article",
    title: "Fixing duplicate title tags at scale",
    excerpt: "A step-by-step guide for large e-commerce catalogs.",
    date: "Aug 19"
  }, {
    tag: "Product",
    title: "Faster reports, half the load time",
    excerpt: "We rebuilt the reporting pipeline from the ground up.",
    date: "Aug 12"
  }, {
    tag: "Article",
    title: "The state of Core Web Vitals in 2026",
    excerpt: "What changed, what didn't, and what to prioritize.",
    date: "Aug 5"
  }];
  const TAGS = ["All", "Product", "Article", "New"];
  const [filter, setFilter] = React.useState("All");
  const visible = filter === "All" ? POSTS : POSTS.filter(p => p.tag === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      marginBottom: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--display-lg-family)",
      fontSize: "var(--display-lg-size)",
      fontWeight: 600,
      letterSpacing: "var(--display-lg-tracking)",
      color: "var(--text-ink)"
    }
  }, "Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px"
    }
  }, TAGS.map(t => /*#__PURE__*/React.createElement(CategoryTab, {
    key: t,
    active: t === filter,
    onClick: () => setFilter(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gutter-card)"
    }
  }, visible.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      height: "160px"
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: p.tag === "New" ? "emerald" : "neutral"
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--title-md-family)",
      fontSize: "var(--title-md-size)",
      fontWeight: 600,
      color: "var(--text-ink)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--body-sm-family)",
      fontSize: "var(--body-sm-size)",
      color: "var(--text-body)"
    }
  }, p.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      color: "var(--text-muted-soft)"
    }
  }, p.date)))));
}
window.ResourcesPage = ResourcesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ResourcesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/chrome.jsx
try { (() => {
function SiteNav({
  activeHref,
  onNavigate
}) {
  const {
    TopNav,
    Wordmark
  } = window.SEOConsoleDesignSystem_8b9179;
  const NAV_ITEMS = [{
    label: "Product"
  }, {
    label: "Solutions"
  }, {
    label: "Resources"
  }, {
    label: "Pricing"
  }, {
    label: "Agencies"
  }];
  return /*#__PURE__*/React.createElement(TopNav, {
    logo: /*#__PURE__*/React.createElement(Wordmark, null),
    items: NAV_ITEMS.map(i => ({
      ...i,
      href: "#" + i.label.toLowerCase()
    })),
    activeHref: activeHref,
    onStartClick: () => onNavigate("login"),
    onLoginClick: () => onNavigate("login")
  });
}
function SiteFooter() {
  const {
    Footer
  } = window.SEOConsoleDesignSystem_8b9179;
  return /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      title: "Projects",
      links: ["Overview", "Pricing", "Integrations"]
    }, {
      title: "Audits",
      links: ["Technical SEO", "Backlinks", "Core Web Vitals"]
    }, {
      title: "Reports",
      links: ["Rankings", "Traffic", "Scheduled reports"]
    }, {
      title: "Resources",
      links: ["Blog", "Docs", "Changelog"]
    }]
  });
}
window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/fragments.jsx
try { (() => {
function KeywordGridFragment() {
  const rows = [{
    kw: "technical seo audit",
    pos: 3,
    change: "+2"
  }, {
    kw: "keyword rank tracker",
    pos: 1,
    change: "0"
  }, {
    kw: "site crawl tool",
    pos: 7,
    change: "-1"
  }, {
    kw: "backlink checker",
    pos: 4,
    change: "+5"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      minWidth: "360px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--title-sm-family)",
      fontSize: "var(--title-sm-size)",
      fontWeight: 600,
      color: "var(--text-ink)"
    }
  }, "Keyword rankings"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--caption-family)",
      fontSize: "var(--caption-size)",
      color: "var(--color-success)"
    }
  }, "\u25CF Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      border: "1px solid var(--border-hairline)",
      overflow: "hidden"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.kw,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 12px",
      borderTop: i === 0 ? "none" : "1px solid var(--border-hairline-soft)",
      fontFamily: "var(--body-sm-family)",
      fontSize: "13px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, r.kw), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-ink)",
      fontWeight: 600
    }
  }, "#", r.pos), /*#__PURE__*/React.createElement("span", {
    style: {
      color: r.change.startsWith("+") ? "var(--color-success)" : r.change === "0" ? "var(--text-muted)" : "var(--color-error)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px"
    }
  }, r.change))))));
}
function AutomationFragment() {
  const steps = ["Crawl site", "Detect issues", "Send report"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderRadius: "8px",
      border: "1px solid var(--border-hairline)",
      fontFamily: "var(--body-sm-family)",
      fontSize: "13px",
      color: "var(--text-ink)",
      background: "var(--surface-canvas)"
    }
  }, s), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted-soft)"
    }
  }, "\u2192") : null)));
}
window.KeywordGridFragment = KeywordGridFragment;
window.AutomationFragment = AutomationFragment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/fragments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seo-console-dashboard/OpportunitiesScreen.jsx
try { (() => {
const OPP_TABS = [{
  id: "cannibalization",
  label: "Keyword Cannibalization",
  blurb: "Non-brand queries where 2+ of your URLs compete. Consolidate or differentiate them."
}, {
  id: "low-hanging",
  label: "Low-hanging Fruit",
  blurb: "Queries ranking 4–10 with lots of impressions but a weak click-through rate."
}, {
  id: "underperforming",
  label: "Underperforming Pages",
  blurb: "Pages that used to earn real traffic and have since dropped materially."
}];
const CANNIBAL_ROWS = [{
  query: "clash of clans base layout",
  pages: 3,
  clicks: 210,
  impressions: 12400,
  position: 6.2,
  ctr: 0.017
}, {
  query: "th12 war base",
  pages: 2,
  clicks: 140,
  impressions: 8100,
  position: 5.4,
  ctr: 0.017
}];
function OpportunitiesScreen() {
  const {
    DateRangePopover,
    DataTable
  } = window.SEOConsoleDesignSystem_8b9179;
  const [kind, setKind] = React.useState("cannibalization");
  const active = OPP_TABS.find(t => t.id === kind);
  const columns = [{
    field: "query",
    label: "Query"
  }, {
    field: "pages",
    label: "Pages",
    align: "right"
  }, {
    field: "clicks",
    label: "clicks",
    align: "right",
    color: "var(--db-clicks)"
  }, {
    field: "impressions",
    label: "impressions",
    align: "right",
    color: "var(--db-impressions)"
  }, {
    field: "position",
    label: "position",
    align: "right",
    color: "var(--db-position)",
    render: r => r.position.toFixed(1)
  }, {
    field: "ctr",
    label: "ctr",
    align: "right",
    color: "var(--db-ctr)",
    render: r => (r.ctr * 100).toFixed(1) + "%"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1px solid var(--db-border)",
      marginBottom: "16px"
    }
  }, OPP_TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setKind(t.id),
    style: {
      border: "none",
      borderBottom: "2px solid " + (kind === t.id ? "var(--db-accent)" : "transparent"),
      background: "transparent",
      color: kind === t.id ? "var(--db-accent)" : "var(--db-muted)",
      fontWeight: 500,
      fontSize: "14px",
      padding: "8px 12px",
      cursor: "pointer"
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(DateRangePopover, {
    label: "Last 3 months",
    range: {
      start: "2026-06-17",
      end: "2026-09-14"
    },
    presets: [{
      id: "3m",
      label: "Last 3 months"
    }, {
      id: "6m",
      label: "Last 6 months"
    }]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      borderRadius: "var(--db-radius-md)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      padding: "12px",
      fontSize: "14px",
      color: "var(--db-muted)",
      marginBottom: "16px"
    }
  }, active.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--db-radius-lg)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    rows: kind === "cannibalization" ? CANNIBAL_ROWS : [],
    keyField: "query"
  })));
}
window.OpportunitiesScreen = OpportunitiesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seo-console-dashboard/OpportunitiesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seo-console-dashboard/PerformanceScreen.jsx
try { (() => {
const SAMPLE_SERIES = [{
  d: "Aug 19",
  clicks: 20,
  impr: 870
}, {
  d: "Aug 21",
  clicks: 18,
  impr: 900
}, {
  d: "Aug 23",
  clicks: 32,
  impr: 950
}, {
  d: "Aug 25",
  clicks: 22,
  impr: 820
}, {
  d: "Aug 27",
  clicks: 24,
  impr: 860
}, {
  d: "Aug 29",
  clicks: 21,
  impr: 800
}, {
  d: "Aug 31",
  clicks: 19,
  impr: 790
}, {
  d: "Sep 2",
  clicks: 23,
  impr: 900
}, {
  d: "Sep 4",
  clicks: 25,
  impr: 980
}, {
  d: "Sep 6",
  clicks: 24,
  impr: 1020
}, {
  d: "Sep 8",
  clicks: 26,
  impr: 1000
}, {
  d: "Sep 10",
  clicks: 23,
  impr: 950
}, {
  d: "Sep 12",
  clicks: 29,
  impr: 1050
}, {
  d: "Sep 14",
  clicks: 18,
  impr: 900
}];
const SAMPLE_ROWS = [{
  query: "builder hall 3 base",
  clicks: 15,
  impressions: 889,
  position: 8.2,
  ctr: 0.017
}, {
  query: "coc base copy",
  clicks: 8,
  impressions: 863,
  position: 11.4,
  ctr: 0.009
}, {
  query: "th13 base with hero hunter",
  clicks: 6,
  impressions: 86,
  position: 4.1,
  ctr: 0.07
}, {
  query: "base aula tukang level 3",
  clicks: 5,
  impressions: 176,
  position: 6.8,
  ctr: 0.028
}, {
  query: "best builder hall 2 base",
  clicks: 4,
  impressions: 79,
  position: 9.9,
  ctr: 0.05
}];
function LineChart({
  series,
  width = 900,
  height = 220
}) {
  const max = {
    clicks: Math.max(...series.map(s => s.clicks)) * 1.15,
    impr: Math.max(...series.map(s => s.impr)) * 1.15
  };
  const pt = (v, key) => height - v / max[key] * height;
  const step = width / (series.length - 1);
  const path = key => series.map((s, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${pt(s[key], key).toFixed(1)}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: path("impr"),
    fill: "none",
    stroke: "var(--db-impressions)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: path("clicks"),
    fill: "none",
    stroke: "var(--db-clicks)",
    strokeWidth: "2"
  }));
}
function PerformanceScreen({
  compareOn,
  filters,
  onFilters,
  dimension,
  onDimension
}) {
  const {
    MetricCard,
    FilterPopover,
    DateRangePopover,
    DataTable,
    TrendPill
  } = window.SEOConsoleDesignSystem_8b9179;
  const [active, setActive] = React.useState({
    clicks: true,
    impressions: true,
    ctr: false,
    position: false
  });
  const toggle = k => setActive(a => ({
    ...a,
    [k]: !a[k]
  }));
  const columns = [{
    field: "query",
    label: "Query"
  }, {
    field: "clicks",
    label: "clicks",
    align: "right",
    color: "var(--db-clicks)"
  }, {
    field: "impressions",
    label: "impressions",
    align: "right",
    color: "var(--db-impressions)"
  }, {
    field: "ctr",
    label: "ctr",
    align: "right",
    color: "var(--db-ctr)",
    render: r => (r.ctr * 100).toFixed(1) + "%"
  }, {
    field: "position",
    label: "position",
    align: "right",
    color: "var(--db-position)",
    render: r => r.position.toFixed(1)
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "18px",
      fontWeight: 600
    }
  }, "Performance"), /*#__PURE__*/React.createElement(DateRangePopover, {
    label: "Last 28 days",
    range: {
      start: "2026-08-18",
      end: "2026-09-14"
    },
    presets: [{
      id: "28d",
      label: "Last 28 days"
    }, {
      id: "3m",
      label: "Last 3 months"
    }, {
      id: "12m",
      label: "Last 12 months"
    }],
    compareOptions: [{
      id: "none",
      label: "Disabled"
    }, {
      id: "previous",
      label: "Previous period"
    }, {
      id: "yoy",
      label: "Year over year"
    }],
    compareMode: compareOn ? "previous" : "none"
  }), /*#__PURE__*/React.createElement(FilterPopover, {
    value: filters,
    onChange: onFilters,
    dimension: dimension
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "13px",
      color: "var(--db-muted)"
    }
  }, "2026-08-18 \u2192 2026-09-14")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
      gap: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Total clicks",
    value: "489",
    color: "var(--db-clicks)",
    active: active.clicks,
    onClick: () => toggle("clicks"),
    delta: compareOn ? "+8.2%" : null,
    deltaGood: true
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Total impressions",
    value: "41.9K",
    color: "var(--db-impressions)",
    active: active.impressions,
    onClick: () => toggle("impressions"),
    delta: compareOn ? "+3.1%" : null,
    deltaGood: true
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Average CTR",
    value: "1.0%",
    color: "var(--db-ctr)",
    active: active.ctr,
    onClick: () => toggle("ctr"),
    delta: compareOn ? "-0.4%" : null
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Average position",
    value: "9.4",
    color: "var(--db-position)",
    active: active.position,
    onClick: () => toggle("position"),
    delta: compareOn ? "+1.1" : null
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--db-radius-lg)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      padding: "16px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    series: SAMPLE_SERIES
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--db-radius-lg)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1px solid var(--db-border)",
      padding: "8px 8px 0"
    }
  }, [["query", "Queries"], ["page", "Pages"], ["country", "Countries"], ["device", "Devices"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onDimension(id),
    style: {
      border: "none",
      background: dimension === id ? "var(--db-accent-soft)" : "transparent",
      color: dimension === id ? "var(--db-accent)" : "var(--db-muted)",
      fontWeight: 500,
      fontSize: "14px",
      padding: "8px 12px",
      borderRadius: "var(--db-radius-sm) var(--db-radius-sm) 0 0",
      cursor: "pointer"
    }
  }, label))), /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    rows: SAMPLE_ROWS,
    keyField: "query"
  })));
}
window.PerformanceScreen = PerformanceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seo-console-dashboard/PerformanceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seo-console-dashboard/SettingsScreen.jsx
try { (() => {
function SettingsScreen({
  onClose,
  dark,
  onThemeChange
}) {
  const {
    ThemeToggle
  } = window.SEOConsoleDesignSystem_8b9179;
  const field = {
    marginTop: "8px",
    width: "100%",
    borderRadius: "var(--db-radius-sm)",
    border: "1px solid var(--db-border)",
    background: "var(--db-bg)",
    color: "var(--db-fg)",
    padding: "8px 10px",
    fontSize: "14px",
    boxSizing: "border-box"
  };
  const sectionTitle = {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--db-fg)",
    margin: 0
  };
  const hint = {
    fontSize: "12px",
    color: "var(--db-muted)",
    marginTop: "4px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "80px 16px",
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "560px",
      maxHeight: "85vh",
      overflowY: "auto",
      borderRadius: "var(--db-radius-xl)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      padding: "24px",
      boxSizing: "border-box",
      fontFamily: "var(--db-font-sans)",
      color: "var(--db-fg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "18px",
      fontWeight: 600
    }
  }, "Settings"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      color: "var(--db-muted)",
      fontSize: "16px",
      cursor: "pointer"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: sectionTitle
  }, "Appearance"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    value: dark ? "dark" : "light",
    onChange: onThemeChange
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: sectionTitle
  }, "Bing Webmaster Tools ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--db-muted)",
      fontWeight: 400
    }
  }, "\xB7 not connected")), /*#__PURE__*/React.createElement("p", {
    style: hint
  }, "Bing Webmaster Tools \u2192 Settings \u2192 API access \u2192 API Key. One key covers every verified Bing site."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Paste Bing API key",
    style: {
      ...field,
      marginTop: 0,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      borderRadius: "var(--db-radius-sm)",
      border: "none",
      background: "var(--db-accent)",
      color: "#fff",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Save"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: sectionTitle
  }, "Query filters \u2014 cocbasemelon.weebly.com"), /*#__PURE__*/React.createElement("label", {
    style: {
      ...hint,
      display: "block"
    }
  }, "Branded terms (comma-separated)"), /*#__PURE__*/React.createElement("textarea", {
    rows: 2,
    defaultValue: "coc base melon",
    style: field
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginTop: "12px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      fontSize: "12px",
      color: "var(--db-muted)"
    }
  }, "Long-tail: min words", /*#__PURE__*/React.createElement("input", {
    type: "number",
    defaultValue: 4,
    style: {
      ...field,
      width: "80px"
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      fontSize: "12px",
      color: "var(--db-muted)"
    }
  }, "AI prompt: impressions <", /*#__PURE__*/React.createElement("input", {
    type: "number",
    defaultValue: 10,
    style: {
      ...field,
      width: "80px"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "24px",
      borderRadius: "var(--db-radius-md)",
      border: "1px solid var(--db-border)",
      background: "var(--db-bg)",
      padding: "12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13px",
      fontWeight: 600
    }
  }, "Scheduled daily sync"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "12px",
      color: "var(--db-muted)"
    }
  }, "Runs the same pull as \"Sync now\" for every property, once a day."))));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seo-console-dashboard/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seo-console-dashboard/SignInScreen.jsx
try { (() => {
function SignInScreen({
  onSignIn
}) {
  const {
    GoogleSignInButton
  } = window.SEOConsoleDesignSystem_8b9179;
  return /*#__PURE__*/React.createElement("div", {
    className: "db-scope",
    style: {
      minHeight: "100vh",
      background: "var(--db-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "var(--db-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "420px",
      borderRadius: "var(--db-radius-xl)",
      border: "1px solid var(--db-border)",
      background: "var(--db-surface)",
      padding: "32px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "22px",
      fontWeight: 600,
      color: "var(--db-fg)"
    }
  }, "SEO Console"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "8px",
      color: "var(--db-muted)",
      fontSize: "14px",
      lineHeight: 1.55
    }
  }, "A cleaner, more customizable view of Google Search Console (and Bing) performance, plus index & crawl signals for technical SEO."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement(GoogleSignInButton, {
    onClick: onSignIn
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "24px",
      fontSize: "12px",
      color: "var(--db-muted)"
    }
  }, "Read-only access. We request the Search Console scope only.")));
}
window.SignInScreen = SignInScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seo-console-dashboard/SignInScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seo-console-dashboard/chrome.jsx
try { (() => {
function DashboardShell({
  active,
  onSelect,
  property,
  properties,
  onPropertyChange,
  user,
  onSettings,
  onSignOut,
  dark,
  children
}) {
  const {
    SidebarNav,
    Icon
  } = window.SEOConsoleDesignSystem_8b9179;
  const items = [{
    id: "performance",
    label: "Performance",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 18
    })
  }, {
    id: "opportunities",
    label: "Opportunities",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "target",
      size: 18
    })
  }, {
    id: "analytics",
    label: "Analytics",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bar-chart-2",
      size: 18
    })
  }, {
    id: "indexing",
    label: "Indexing",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "database",
      size: 18
    })
  }, {
    id: "inspect",
    label: "URL Inspection",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "db-scope" + (dark ? " db-dark" : ""),
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--db-bg)"
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: items,
    active: active,
    onSelect: onSelect,
    property: property,
    properties: properties,
    onPropertyChange: onPropertyChange,
    user: user,
    onSettings: onSettings,
    settingsIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 18
    }),
    onSignOut: onSignOut
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: "1 1 auto",
      minWidth: 0,
      padding: "24px 28px",
      fontFamily: "var(--db-font-sans)",
      color: "var(--db-fg)"
    }
  }, children));
}
window.DashboardShell = DashboardShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seo-console-dashboard/chrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DateRangePopover = __ds_scope.DateRangePopover;

__ds_ns.FilterPopover = __ds_scope.FilterPopover;

__ds_ns.GoogleSignInButton = __ds_scope.GoogleSignInButton;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.TrendPill = __ds_scope.TrendPill;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.NavPillGroup = __ds_scope.NavPillGroup;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.CtaBandLight = __ds_scope.CtaBandLight;

__ds_ns.CustomerProofCard = __ds_scope.CustomerProofCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.FeatureIconCard = __ds_scope.FeatureIconCard;

__ds_ns.HeroAppMockupCard = __ds_scope.HeroAppMockupCard;

__ds_ns.PricingTierCard = __ds_scope.PricingTierCard;

__ds_ns.ProductMockupCard = __ds_scope.ProductMockupCard;

})();
