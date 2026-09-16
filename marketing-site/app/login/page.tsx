"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wordmark } from "@/components/layout/Wordmark";
import { TextInput } from "@/components/forms/TextInput";
import { Button } from "@/components/actions/Button";
import { TextLink } from "@/components/actions/TextLink";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-xxl)" }}>
      <div style={{ width: "360px", display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Wordmark />
        </div>
        <h1
          style={{
            margin: 0,
            textAlign: "center",
            fontFamily: "var(--display-sm-family)",
            fontSize: "var(--display-sm-size)",
            fontWeight: 600,
            letterSpacing: "var(--display-sm-tracking)",
            color: "var(--text-ink)",
          }}
        >
          Log in
        </h1>
        <TextInput label="Work email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput label="Password" type="password" placeholder="••••••••" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Button fullWidth onClick={() => router.push("/")}>
          Log in
        </Button>
        <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--body-sm-family)", fontSize: "var(--body-sm-size)", color: "var(--text-muted)" }}>
          No account? <TextLink onClick={() => router.push("/")}>Start free</TextLink>
        </p>
      </div>
    </div>
  );
}
