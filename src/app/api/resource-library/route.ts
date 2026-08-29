import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { resources } from "@/content/knowledge";
import { marketingTools } from "@/content/tools";
import { siteConfig } from "@/content/site";

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
  if (!current || current.resetAt < now) { attempts.set(key, { count: 1, resetAt: now + 15 * 60_000 }); return false; }
  current.count += 1;
  return current.count > 4;
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": randomUUID(), "User-Agent": "GrowthLabs-Website/1.0" },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try { if (new URL(origin).host !== request.nextUrl.host) return NextResponse.json({ message: "This request was not accepted." }, { status: 403 }); }
    catch { return NextResponse.json({ message: "This request was not accepted." }, { status: 403 }); }
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ message: "Please wait before requesting the library again." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "The submitted form could not be read." }, { status: 400 }); }
  if (clean(body.company, 160)) return NextResponse.json({ message: "Your library is on its way." });

  const name = clean(body.name, 80);
  const email = clean(body.email, 160).toLowerCase();
  const sourcePath = clean(body.sourcePath, 240) || "/resources";
  const accepted = body.privacyAccepted === "yes";
  const startedAt = Number(body.startedAt);
  if (Date.now() - startedAt < 1_500) return NextResponse.json({ message: "Please review your email address before submitting." }, { status: 400 });
  if (!emailPattern.test(email) || !accepted) return NextResponse.json({ message: "Enter a valid email and confirm the one-email privacy notice." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;
  const backupRecipient = process.env.CONTACT_BACKUP_EMAIL?.trim() || "neurerohan@gmail.com";
  const sender = process.env.RESOURCE_FROM_EMAIL?.trim() || "GrowthLabs Resources <resources@send.neurerohan.com.np>";
  if (!apiKey) return NextResponse.json({ message: "Library delivery is being configured. You can still access every item directly on this page." }, { status: 503 });

  const toolLinks = marketingTools.map((tool) => `<li><a href="${siteConfig.domain}/tools/${tool.slug}">${escapeHtml(tool.title)}</a></li>`).join("");
  const resourceLinks = resources.map((resource) => `<li><a href="${siteConfig.domain}/resources/${resource.slug}">${escapeHtml(resource.title)}</a></li>`).join("");
  const greeting = name ? `Hi ${escapeHtml(name)},` : "Hello,";
  const html = `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#13251c"><p style="color:#a85619;font-weight:700">GROWTHLABS FREE MARKETING LIBRARY</p><h1 style="font-family:Georgia,serif;font-size:38px;line-height:1.05">Every tool and resource, organised.</h1><p>${greeting}</p><p>Here is the complete GrowthLabs library you requested. These resources remain free and ungated.</p><h2>Browser-based marketing tools</h2><ul>${toolLinks}</ul><h2>Templates and checklists</h2><ul>${resourceLinks}</ul><h2>Reference hubs</h2><ul><li><a href="${siteConfig.domain}/insights/glossary">Digital marketing glossary</a></li><li><a href="${siteConfig.domain}/insights/questions">Marketing questions and direct answers</a></li><li><a href="${siteConfig.domain}/insights/case-studies">SEO and paid-media evidence library</a></li></ul><p style="margin-top:32px"><a href="${siteConfig.domain}/contact" style="display:inline-block;background:#d96f20;color:white;padding:14px 20px;text-decoration:none;border-radius:8px;font-weight:700">Ask us to review your growth system</a></p><p style="color:#66716a;font-size:13px">You requested this one email from ${escapeHtml(sourcePath)}. You have not been subscribed to a mailing list.</p></div>`;
  const text = [`GrowthLabs free marketing library`, ``, `Tools: ${siteConfig.domain}/tools`, `Resources: ${siteConfig.domain}/resources`, `Glossary: ${siteConfig.domain}/insights/glossary`, `Questions: ${siteConfig.domain}/insights/questions`, `Case studies: ${siteConfig.domain}/insights/case-studies`, ``, `You requested this one email from ${sourcePath}. You have not been subscribed to a mailing list.`].join("\n");

  const delivery = await sendEmail(apiKey, { from: sender, to: [email], reply_to: recipient, subject: "Your complete GrowthLabs marketing tools & resources library", html, text, tags: [{ name: "source", value: "resource-library" }] });
  if (!delivery.ok) {
    console.error("Resource library delivery failed", delivery.status, await delivery.text());
    return NextResponse.json({ message: delivery.status === 401 || delivery.status === 403 ? "Email delivery needs a corrected Resend key or sender domain. Every resource remains available directly on this page." : "We could not email the library right now. Every resource remains available directly on this page." }, { status: 502 });
  }

  const deliveryResult = await delivery.json() as { id?: string };
  console.info("Resource library delivery accepted", deliveryResult.id);

  const notice = `<h1>Resource library request</h1><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Name:</strong> ${escapeHtml(name || "Not supplied")}</p><p><strong>Source:</strong> ${escapeHtml(sourcePath)}</p>`;
  const notificationRecipients = [...new Set([recipient, backupRecipient].filter(Boolean))];
  const notification = await sendEmail(apiKey, { from: sender, to: notificationRecipients, reply_to: email, subject: `GrowthLabs library request: ${email}`, html: notice, text: `Resource library request\nEmail: ${email}\nName: ${name || "Not supplied"}\nSource: ${sourcePath}`, tags: [{ name: "source", value: "library-notice" }] });
  if (!notification.ok) console.error("Resource library notification failed", notification.status, await notification.text());

  return NextResponse.json({ message: "The complete library was accepted for delivery.", reference: deliveryResult.id });
}
