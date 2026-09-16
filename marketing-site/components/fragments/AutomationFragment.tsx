import { Fragment } from "react";

const steps = ["Crawl site", "Detect issues", "Send report"];

export function AutomationFragment() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      {steps.map((s, i) => (
        <Fragment key={s}>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid var(--border-hairline)",
              fontFamily: "var(--body-sm-family)",
              fontSize: "13px",
              color: "var(--text-ink)",
              background: "var(--surface-canvas)",
            }}
          >
            {s}
          </div>
          {i < steps.length - 1 ? <span style={{ color: "var(--text-muted-soft)" }}>→</span> : null}
        </Fragment>
      ))}
    </div>
  );
}
