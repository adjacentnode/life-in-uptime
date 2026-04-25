import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, title, linkedin, topic, referral } = body;

    if (!firstName || !lastName || !email || !title || !topic) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Format a clean email to send
    const emailBody = `
New Guest Application — Life in Uptime

Name: ${firstName} ${lastName}
Email: ${email}
Title/Role: ${title}
LinkedIn/Website: ${linkedin || "Not provided"}

What they'd talk about:
${topic}

How they heard about the show: ${referral || "Not provided"}
    `.trim();

    // Send via Resend if API key is configured, otherwise log
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.GUEST_EMAIL || "podcasts@packetpushers.net";
    const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@lifeinuptime.com";

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: email,
          subject: `Guest Application: ${firstName} ${lastName} — ${title}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Email send failed" }, { status: 500 });
      }
    } else {
      // Dev mode — just log it
      console.log("Guest application (no RESEND_API_KEY set):\n", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Guest form error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
