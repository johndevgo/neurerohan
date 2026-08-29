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
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const selectedServices = formData.getAll("services").map(String);
    if (selectedServices.length === 0) {
      setState("error");
      setMessage("Choose at least one service so we can route your enquiry correctly.");
      form.querySelector<HTMLInputElement>('input[name="services"]')?.focus();
      return;
    }
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, services: selectedServices, startedAt }) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent.");
      form.reset();
      setState("success");
      setMessage("Thank you. Your enquiry has reached the GrowthLabs team.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Your enquiry could not be sent. Please email or WhatsApp us directly.");
    }
  }

  const serviceIcons = ["⌁", "↗", "◉", "✦", "▤", "✎", "⌖", "+"];

  return <form className="contact-form" onSubmit={submit} aria-describedby="contact-form-note">
    <div className="contact-form-heading"><div className="contact-form-heading-icon" aria-hidden="true">↗</div><div><h2>Tell us what needs to grow</h2><p id="contact-form-note">Choose every relevant service. We will review the complete context together.</p></div></div>
    <div className="contact-form-fields">
      <label><span>Name *</span><input name="name" autoComplete="name" required minLength={2} maxLength={80} /></label>
      <label><span>Email *</span><input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
      <label className="contact-form-wide"><span>Phone / WhatsApp *</span><input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} /></label>
      <label className="contact-form-wide"><span>Website or primary profile</span><input name="websiteUrl" type="url" inputMode="url" autoComplete="url" placeholder="https://" maxLength={300} /></label>
      <fieldset className="contact-service-fieldset contact-form-wide"><legend>What can we help with? Choose one or more. *</legend><div className="contact-service-grid">{[...services, { title: "Not sure yet", slug: "not-sure" }].map((service, index) => <label key={service.slug}><input name="services" type="checkbox" value={service.title} /><span className="contact-service-choice"><span className="contact-service-icon" aria-hidden="true">{serviceIcons[index]}</span><span>{service.title}</span></span></label>)}</div></fieldset>
      <label className="contact-form-wide"><span>Message *</span><textarea name="message" required minLength={20} maxLength={4000} rows={7} placeholder="What do you sell, who do you want to reach, what have you tried, and what should improve?" /></label>
      <label className="contact-form-honeypot" aria-hidden="true"><span>Company website</span><input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      <label className="contact-form-consent contact-form-wide"><input name="privacyAccepted" type="checkbox" required value="yes" /><span>I have read the <Link href="/privacy">Privacy Policy</Link> and agree that GrowthLabs may use these details to respond to my enquiry. *</span></label>
      <div className="contact-form-wide contact-form-actions"><button className="button button-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending securely…" : "Send your growth brief →"}</button><p>Prefer messaging? <a href={siteConfig.cta.whatsapp.href} target="_blank" rel="noopener noreferrer">Use WhatsApp ↗</a></p></div>
      <div className="contact-form-trust contact-form-wide" aria-label="Form reassurance"><span>Private enquiry</span><span>No mailing list</span><span>Direct founder review</span></div>
      {message && <div className={`contact-form-status contact-form-wide ${state === "success" ? "is-success" : "is-error"}`} role={state === "error" ? "alert" : "status"}>{message}{state === "error" && <> You can email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</>}</div>}
    </div>
  </form>;
}
