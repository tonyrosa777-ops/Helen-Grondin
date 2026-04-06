import { NextRequest, NextResponse } from "next/server";

// TODO: wire to Resend on launch
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[contact form submission]", body);
  return NextResponse.json({ ok: true });
}
