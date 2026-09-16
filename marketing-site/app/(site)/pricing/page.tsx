"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";
import { PricingTierCard } from "@/components/surfaces/PricingTierCard";
import { CtaBandLight } from "@/components/surfaces/CtaBandLight";

const section: CSSProperties = { maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--pad-band) var(--space-xl)", boxSizing: "border-box" };

const TIERS = [
  { name: "Starter", price: "$29", features: ["1 site", "Weekly audits", "Email support"] },
  { name: "Pro", price: "$79", features: ["10 sites", "Daily audits", "Priority support", "Backlink monitoring"], featured: true },
  { name: "Agency", price: "$199", features: ["50 sites", "Daily audits", "White-label reports", "Dedicated manager"] },
  { name: "Enterprise", price: "Custom", features: ["Unlimited sites", "Custom SLAs", "SSO", "Dedicated manager"] },
];

export default function PricingPage() {
  const router = useRouter();
  return (
    <div>
      <div style={{ ...section, textAlign: "center", display: "flex", flexDirection: "column", gap: "var(--space-md)", alignItems: "center" }}>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--display-lg-family)",
            fontSize: "var(--display-lg-size)",
            fontWeight: 600,
            letterSpacing: "var(--display-lg-tracking)",
            lineHeight: "var(--display-lg-leading)",
            color: "var(--text-ink)",
          }}
        >
          Simple pricing, every plan included
        </h1>
        <p style={{ margin: 0, fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", color: "var(--text-body)", maxWidth: "480px" }}>
          Every plan includes audits, keyword tracking and reporting. Scale by site count.
        </p>
      </div>
      <div style={{ ...section, paddingTop: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gutter-card)" }}>
        {TIERS.map((t) => (
          <PricingTierCard key={t.name} {...t} onCtaClick={() => router.push("/login")} />
        ))}
      </div>
      <div style={{ ...section, paddingTop: "var(--space-xxl)" }}>
        <CtaBandLight heading="Not sure which plan fits?" subline="Talk to us — we'll help you pick." ctaLabel="Contact sales" />
      </div>
    </div>
  );
}
