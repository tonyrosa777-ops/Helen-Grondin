import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Member Testimonials — Real NH Families on Health Sharing",
  description:
    "32 testimonials from New Hampshire families, freelancers, and COBRA refugees who switched to Impact Health Sharing through Helen Grondin.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
