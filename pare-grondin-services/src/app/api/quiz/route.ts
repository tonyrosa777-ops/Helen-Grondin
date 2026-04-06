import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: wire to Resend on launch to email Helen + send lead confirmation
  const body = await req.json();
  console.log("[quiz submission]", body);
  return NextResponse.json({ ok: true });
}
