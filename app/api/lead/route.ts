import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  monthlyReceivables?: unknown;
  phone?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const monthlyReceivables =
      typeof body.monthlyReceivables === "string"
        ? body.monthlyReceivables
        : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    if (!name || !email || !company || !monthlyReceivables || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company,
      monthlyReceivables,
      phone,
      timestamp: new Date().toISOString(),
    };

    // If RESEND_API_KEY and TO_EMAIL are set, send an email notification
    try {
      const apiKey = process.env.RESEND_API_KEY;
      const toEmail = process.env.TO_EMAIL;
      const fromEmail = process.env.FROM_EMAIL || "leads@nowcorp.local";
      if (apiKey && toEmail) {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `New lead: ${company}`,
          text: `New lead submitted\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMonthly Receivables: ${monthlyReceivables}\nTime: ${payload.timestamp}`,
        });
      } else {
        // Fallback: log to server if email is not configured
        console.log("Lead submitted:", payload);
      }
    } catch (sendError) {
      console.warn("Lead email send failed; proceeding without blocking.", sendError);
    }

    return NextResponse.json({ message: "Thanks — we'll be in touch shortly." });
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to process submission" },
      { status: 500 }
    );
  }
}

