import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function limited(key: string) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt < now) { attempts.set(key, { count: 1, resetAt: now + 10 * 60_000 }); return false; }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try { if (new URL(origin).host !== request.nextUrl.host) return NextResponse.json({ message: "This request was not accepted." }, { status: 403 }); }
    catch { return NextResponse.json({ message: "This request was not accepted." }, { status: 403 }); }
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ message: "Too many enquiries were submitted. Please wait ten minutes or contact Rohan directly." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "The submitted form could not be read." }, { status: 400 }); }
  if (clean(body.companyWebsite, 200)) return NextResponse.json({ message: "Thank you." });

  const name = clean(body.name, 80);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 30);
  const service = clean(body.service, 120);
  const websiteUrl = clean(body.websiteUrl, 300);
  const enquiry = clean(body.message, 4000);
  const privacyAccepted = body.privacyAccepted === "yes";
  const startedAt = Number(body.startedAt);
  if (Date.now() - startedAt < 2_000) return NextResponse.json({ message: "Please review the enquiry before sending it." }, { status: 400 });
  if (name.length < 2 || !emailPattern.test(email) || phone.length < 7 || !service || enquiry.length < 20 || !privacyAccepted) return NextResponse.json({ message: "Please complete every required field with valid information." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) return NextResponse.json({ message: "Online form delivery is being configured. Please email or WhatsApp Rohan directly." }, { status: 503 });

  const subject = `GrowthLabs enquiry: ${service} — ${name}`;
  const text = [`New GrowthLabs website enquiry`, ``, `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Service: ${service}`, `Website: ${websiteUrl || "Not supplied"}`, ``, `Message:`, enquiry].join("\n");
  const html = `<h1>New GrowthLabs website enquiry</h1><table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse"><tr><th align="left">Name</th><td>${escapeHtml(name)}</td></tr><tr><th align="left">Email</th><td>${escapeHtml(email)}</td></tr><tr><th align="left">Phone</th><td>${escapeHtml(phone)}</td></tr><tr><th align="left">Service</th><td>${escapeHtml(service)}</td></tr><tr><th align="left">Website</th><td>${escapeHtml(websiteUrl || "Not supplied")}</td></tr></table><h2>Message</h2><p style="white-space:pre-wrap">${escapeHtml(enquiry)}</p>`;

  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": randomUUID() }, body: JSON.stringify({ from: sender, to: [recipient], reply_to: email, subject, text, html }) });
  if (!response.ok) { console.error("Contact delivery failed", response.status, await response.text()); return NextResponse.json({ message: "The email provider could not deliver this enquiry. Please email or WhatsApp Rohan directly." }, { status: 502 }); }
  return NextResponse.json({ message: "Your enquiry was sent." });
}
