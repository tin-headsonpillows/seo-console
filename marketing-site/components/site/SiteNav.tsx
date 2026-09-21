"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TopNav, type NavItem } from "../navigation/TopNav";
import { Wordmark } from "../layout/Wordmark";

const NAV_ITEMS: NavItem[] = [
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Agencies", href: "#" },
];

export function SiteNav() {
  const pathname = usePathname();
  return (
    <TopNav
      logo={
        <Link href="/" style={{ display: "inline-flex", textDecoration: "none" }}>
          <Wordmark />
        </Link>
      }
      items={NAV_ITEMS}
      activeHref={pathname}
    />
  );
}
