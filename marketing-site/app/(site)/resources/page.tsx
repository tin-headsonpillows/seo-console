"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { Badge } from "@/components/display/Badge";
import { CategoryTab } from "@/components/navigation/CategoryTab";

const section: CSSProperties = { maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--pad-band) var(--space-xl)", boxSizing: "border-box" };

const POSTS = [
  { tag: "Product", title: "Introducing scheduled audits", excerpt: "Set a crawl cadence once — SEO Console handles the rest.", date: "Sep 8" },
  { tag: "Article", title: "How search engines actually crawl your site", excerpt: "A practical walkthrough of crawl budget and indexing.", date: "Sep 2" },
  { tag: "New", title: "Backlink monitoring is live", excerpt: "Track every link gained or lost, scored by source authority.", date: "Aug 26" },
  { tag: "Article", title: "Fixing duplicate title tags at scale", excerpt: "A step-by-step guide for large e-commerce catalogs.", date: "Aug 19" },
  { tag: "Product", title: "Faster reports, half the load time", excerpt: "We rebuilt the reporting pipeline from the ground up.", date: "Aug 12" },
  { tag: "Article", title: "The state of Core Web Vitals in 2026", excerpt: "What changed, what didn't, and what to prioritize.", date: "Aug 5" },
];
const TAGS = ["All", "Product", "Article", "New"];

export default function ResourcesPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? POSTS : POSTS.filter((p) => p.tag === filter);

  return (
    <div style={section}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", marginBottom: "var(--space-xxl)" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--display-lg-family)", fontSize: "var(--display-lg-size)", fontWeight: 600, letterSpacing: "var(--display-lg-tracking)", color: "var(--text-ink)" }}>
          Resources
        </h1>
        <div style={{ display: "flex", gap: "4px" }}>
          {TAGS.map((t) => (
            <CategoryTab key={t} active={t === filter} onClick={() => setFilter(t)}>
              {t}
            </CategoryTab>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gutter-card)" }}>
        {visible.map((p) => (
          <div key={p.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-lg)", height: "160px" }}></div>
            <Badge tone={p.tag === "New" ? "emerald" : "neutral"}>{p.tag}</Badge>
            <h3 style={{ margin: 0, fontFamily: "var(--title-md-family)", fontSize: "var(--title-md-size)", fontWeight: 600, color: "var(--text-ink)" }}>{p.title}</h3>
            <p style={{ margin: 0, fontFamily: "var(--body-sm-family)", fontSize: "var(--body-sm-size)", color: "var(--text-body)" }}>{p.excerpt}</p>
            <span style={{ fontFamily: "var(--caption-family)", fontSize: "var(--caption-size)", color: "var(--text-muted-soft)" }}>{p.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
