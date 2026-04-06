"use client";

import { useEffect } from "react";

// Calendly inline widget — loads the Calendly script dynamically.
// Brand colors injected via URL params: primary_color, text_color, background_color.
// NEVER implemented as a redirect or href link — calendar renders inside this component.

interface BookingWidgetProps {
  url?: string;
  minHeight?: number;
}

export default function BookingWidget({ url, minHeight = 700 }: BookingWidgetProps) {
  const calendlyUrl =
    url ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/helengrondin";

  // Append brand color params — values reference design tokens:
  // --accent-hex: c97b2e, --text-primary hex: 1a2b1e, --bg-base hex: faf8f4
  const brandedUrl = `${calendlyUrl}?primary_color=c97b2e&text_color=1a2b1e&background_color=faf8f4&hide_gdpr_banner=1`;

  useEffect(() => {
    // Only inject the script once per page lifecycle
    const existing = document.head.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src =
      "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const injected = document.head.querySelector(
        'script[src*="calendly.com/assets/external/widget.js"]'
      );
      if (injected) document.head.removeChild(injected);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={brandedUrl}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
}
