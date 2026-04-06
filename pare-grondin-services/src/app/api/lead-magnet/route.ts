import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Attempt Resend delivery only when key is configured
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Helen Grondin <helen@paregrodinservices.com>",
          to: email,
          subject: "Your NH Health Insurance vs. Health Sharing Guide",
          html: `
            <h2>Hi ${name},</h2>
            <p>Thanks for requesting the guide! You can read it right now at the page you just came from — it loaded instantly after you submitted.</p>
            <p>When you're ready to see your exact numbers, book a free call with Helen:</p>
            <p><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://paregrodinservices.com"}/booking">Book a Free Consultation</a></p>
            <p>— Helen</p>
          `,
        }),
      });
    }
  } catch {
    // Fail silently — client always shows success state
  }

  return NextResponse.json({ ok: true });
}
