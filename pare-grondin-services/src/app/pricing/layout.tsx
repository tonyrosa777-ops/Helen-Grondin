import type { Metadata } from "next";

// Pricing page is an Optimus sales tool — never indexed, deleted before launch.
export const metadata: Metadata = {
  title: "Website Investment — Pare Grondin Services (Internal)",
  robots: { index: false, follow: false },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
