import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Helen Grondin",
  description:
    "Get in touch with Helen Grondin, NH's health sharing consultant. Book a free consultation or send a question.",
};

export default function ContactPage() {
  return <ContactContent />;
}
