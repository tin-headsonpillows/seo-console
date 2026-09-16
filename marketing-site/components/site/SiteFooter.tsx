import { Footer } from "../layout/Footer";

export function SiteFooter() {
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
