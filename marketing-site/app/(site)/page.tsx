"use client";

import { useRouter } from "next/navigation";
import { HeroBand } from "@/components/layout/HeroBand";
import { HeroAppMockupCard } from "@/components/surfaces/HeroAppMockupCard";
import { FeatureCard } from "@/components/surfaces/FeatureCard";
import { ProductMockupCard } from "@/components/surfaces/ProductMockupCard";
import { CustomerProofCard } from "@/components/surfaces/CustomerProofCard";
import { CtaBandLight } from "@/components/surfaces/CtaBandLight";
import { Avatar } from "@/components/display/Avatar";
import { Button } from "@/components/actions/Button";
import { Icon } from "@/components/display/Icon";
import { KeywordGridFragment } from "@/components/fragments/KeywordGridFragment";
import { AutomationFragment } from "@/components/fragments/AutomationFragment";
import type { CSSProperties } from "react";

const section: CSSProperties = { maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--pad-band) var(--space-xl)", boxSizing: "border-box" };

export default function Homepage() {
  const router = useRouter();
  return (
    <div>
      <HeroBand
        heading="The better way to monitor and improve your search performance"
        subline="Automated audits, keyword tracking and reporting in one console."
        actions={
          <>
            <Button href="/login">Start free</Button>
            <Button variant="secondary" iconLeft={<Icon name="play" size={16} />}>
              Watch demo
            </Button>
          </>
        }
        mockup={
          <HeroAppMockupCard>
            <KeywordGridFragment />
          </HeroAppMockupCard>
        }
      />

      <div style={{ background: "var(--surface-card)" }}>
        <div style={{ ...section, display: "flex", flexDirection: "column", gap: "var(--space-xxl)" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--display-lg-family)",
              fontSize: "var(--display-lg-size)",
              fontWeight: 600,
              letterSpacing: "var(--display-lg-tracking)",
              lineHeight: "var(--display-lg-leading)",
              color: "var(--text-ink)",
              textAlign: "center",
            }}
          >
            Your all-purpose SEO console
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gutter-card)" }}>
            <FeatureCard icon={<Icon name="zap" size={24} />} title="Automated audits" description="Run a full technical crawl on a schedule you set — no manual kickoff required." />
            <FeatureCard icon={<Icon name="line-chart" size={24} />} title="Keyword tracking" description="Track ranking position and volatility for every keyword that matters." />
            <FeatureCard icon={<Icon name="link" size={24} />} title="Backlink monitoring" description="See every link gained or lost, with source authority scored automatically." />
          </div>
        </div>
      </div>

      <div style={section}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "var(--space-xxl)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--display-md-family)",
                fontSize: "var(--display-md-size)",
                fontWeight: 600,
                letterSpacing: "var(--display-md-tracking)",
                lineHeight: "var(--display-md-leading)",
                color: "var(--text-ink)",
              }}
            >
              Reports that run themselves
            </h3>
            <p style={{ margin: 0, fontFamily: "var(--body-md-family)", fontSize: "var(--body-md-size)", color: "var(--text-body)" }}>
              Set a crawl schedule once. SEO Console handles the rest — issue detection, prioritization, and a report in your inbox.
            </p>
          </div>
          <ProductMockupCard>
            <AutomationFragment />
          </ProductMockupCard>
        </div>
      </div>

      <div style={{ background: "var(--surface-card)" }}>
        <div style={{ ...section, display: "flex", flexDirection: "column", gap: "var(--space-xxl)" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--display-lg-family)",
              fontSize: "var(--display-lg-size)",
              fontWeight: 600,
              letterSpacing: "var(--display-lg-tracking)",
              color: "var(--text-ink)",
              textAlign: "center",
            }}
          >
            Trusted by SEO teams
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gutter-card)" }}>
            <CustomerProofCard avatar={<Avatar initials="JC" fill="violet" />} name="Jane Cho" role="Head of SEO, Loop Retail" rating={5} quote="We cut our audit turnaround from two days to twenty minutes." />
            <CustomerProofCard avatar={<Avatar initials="TK" fill="orange" />} name="Tom Kessler" role="Marketing Lead, Fernway" rating={5} quote="Keyword tracking finally feels reliable instead of a spreadsheet chore." />
            <CustomerProofCard avatar={<Avatar initials="SM" fill="emerald" />} name="Sara Mendez" role="SEO Manager, Northstack" rating={5} quote="The automated reports replaced three hours of manual work every Monday." />
          </div>
        </div>
      </div>

      <div style={{ ...section, paddingTop: "var(--space-xxl)", paddingBottom: "var(--space-xxl)" }}>
        <CtaBandLight heading="Clearer, faster SEO decisions" subline="Start free — no card required." ctaLabel="Start free" onCtaClick={() => router.push("/login")} />
      </div>
    </div>
  );
}
