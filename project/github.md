repo: talabadao/seo-console
branch: main
source: attached as local codebase folder (uploads/seo-dashboard), not a live GitHub connection

## Last sync
date: 2026-09-15T00:00:00Z
commit: (unknown — not available from a local folder attachment)

### Updated in this project
- Dashboard token set (`--db-*`, `.db-scope`/`.db-dark`) read from `app/globals.css`
- Dashboard components (TopTabNav, MetricCard, FilterPopover, DateRangePopover, DataTable, GoogleSignInButton, ThemeToggle, TrendPill) ported from `app/components/*.tsx`
- Dashboard UI kit: Sign-in, Performance, Opportunities, Settings screens

## Screen map
| Screen | Source files |
| --- | --- |
| Sign-in | `app/components/Landing.tsx` |
| Performance | `app/components/Dashboard.tsx`, `Chart.tsx`, `BreakdownTable.tsx`, `DateRangePicker.tsx`, `FilterMenu.tsx`, `format.ts` |
| Opportunities | `app/components/Opportunities.tsx` |
| Settings | `app/components/SettingsPanel.tsx` |
| (not built) Analytics | `app/components/Analytics.tsx` |
| (not built) Indexing | `app/components/Indexing.tsx` |
| (not built) URL Inspection | `app/components/UrlInspector.tsx` |
