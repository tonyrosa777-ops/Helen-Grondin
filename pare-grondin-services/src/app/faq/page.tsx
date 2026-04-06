import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "Health Sharing FAQ: Common Questions Answered",
  description:
    "Honest answers to the most common questions about Impact Health Sharing, including the hard ones about what is not covered and why it is different from Aliera.",
};

export default function FAQPage() {
  return <FAQContent />;
}
