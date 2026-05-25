import { NextResponse } from "next/server";

const EVENT_NAME = /^[a-z0-9_:-]{3,80}$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const event = "event" in body ? body.event : undefined;
  const path = "path" in body ? body.path : undefined;
  const href = "href" in body ? body.href : undefined;
  const type = "type" in body ? body.type : undefined;

  if (typeof event !== "string" || !EVENT_NAME.test(event)) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  if (process.env.EVENT_TRACKING_LOGS === "1") {
    console.log("site_event", {
      event,
      type: typeof type === "string" ? type : undefined,
      path: typeof path === "string" ? path.slice(0, 160) : undefined,
      href: typeof href === "string" ? href.slice(0, 240) : undefined,
    });
  }

  return new Response(null, { status: 204 });
}
