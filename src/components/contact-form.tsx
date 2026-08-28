"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { services, siteConfig } from "@/content/site";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, startedAt }) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent.");
      form.reset();
      setState("success");
      setMessage("Thank you. Your enquiry has been sent directly to Rohan.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Your enquiry could not be sent. Please email or WhatsApp Rohan directly.");
    }
  }

  return <form className="contact-form" onSubmit={submit} aria-describedby="contact-form-note">
    <div className="contact-form-heading"><p className="eyebrow">Confidential project enquiry</p><h2>Share the challenge—not a perfect brief.</h2><p id="contact-form-note">Required fields are marked *. Do not include passwords, payment details or sensitive account credentials.</p></div>
    <div className="contact-form-fields">
      <label><span>Name *</span><input name="name" autoComplete="name" required minLength={2} maxLength={80} /></label>
      <label><span>Email *</span><input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
      <label><span>Phone *</span><input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} /></label>
      <label><span>Required service *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service or starting point</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}<option value="Not sure yet">Not sure yet</option></select></label>
      <label className="contact-form-wide"><span>Website or primary profile</span><input name="websiteUrl" type="url" inputMode="url" autoComplete="url" placeholder="https://" maxLength={300} /></label>
      <label className="contact-form-wide"><span>Message *</span><textarea name="message" required minLength={20} maxLength={4000} rows={7} placeholder="What do you sell, who do you want to reach, what have you tried, and what should improve?" /></label>
      <label className="contact-form-honeypot" aria-hidden="true"><span>Company website</span><input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      <label className="contact-form-consent contact-form-wide"><input name="privacyAccepted" type="checkbox" required value="yes" /><span>I have read the <Link href="/privacy">Privacy Policy</Link> and agree that GrowthLabs may use these details to respond to my enquiry. *</span></label>
      <div className="contact-form-wide contact-form-actions"><button className="button button-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending securely…" : "Send enquiry to Rohan →"}</button><p>Prefer messaging? <a href={siteConfig.cta.whatsapp.href} target="_blank" rel="noopener noreferrer">Use WhatsApp ↗</a></p></div>
      {message && <div className={`contact-form-status contact-form-wide ${state === "success" ? "is-success" : "is-error"}`} role={state === "error" ? "alert" : "status"}>{message}{state === "error" && <> You can email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</>}</div>}
    </div>
  </form>;
}
