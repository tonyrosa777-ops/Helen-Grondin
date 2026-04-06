// opengraph-image.tsx — Pare Grondin Services
// Homepage OG image. Text-only (no logo file yet).
// Pattern: nextjs-og-image-readfilesync-base64.md
// Note: No local image asset available yet — pure text composition.

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Pare Grondin Services — Health Sharing for NH Families";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A2B1E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color: "#C97B2E",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
            fontFamily: "monospace",
          }}
        >
          MANCHESTER, NEW HAMPSHIRE
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F5F5F0",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 32,
          }}
        >
          Stop Overpaying for Health Coverage
        </div>

        {/* Subtext */}
        <div
          style={{
            color: "rgba(245,245,240,0.70)",
            fontSize: 28,
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          Helen Grondin helps NH families cut healthcare costs 40-60% through
          Impact Health Sharing.
        </div>

        {/* Price anchor */}
        <div
          style={{
            background: "#C97B2E",
            color: "white",
            fontSize: 22,
            fontWeight: 600,
            padding: "12px 28px",
            borderRadius: 8,
            fontFamily: "monospace",
          }}
        >
          Plans starting at $73/month
        </div>

        {/* Site URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "rgba(245,245,240,0.45)",
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          paregrondinservices.com
        </div>
      </div>
    ),
    { ...size }
  );
}
