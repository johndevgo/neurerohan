"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

const eligiblePaths = ["/resources", "/tools", "/insights/glossary"];
const preferredSourceUrl = "https://www.google.com/preferences/source?q=neurerohan.com.np";

type PromptState = "idle" | "sending" | "success" | "error";

export function ResourceLibraryPrompt() {
  const pathname = usePathname();
  const eligible = eligiblePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<PromptState>("idle");
  const [message, setMessage] = useState("");
  const startedAtRef = useRef(Date.now());
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!eligible || sessionStorage.getItem("growthlabs-library-prompt") === "dismissed") return;
    const timer = window.setTimeout(() => { startedAtRef.current = Date.now(); setOpen(true); }, 9000);
    return () => window.clearTimeout(timer);
  }, [eligible, pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]):not([tabindex="-1"])')];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", keydown);
    return () => { document.removeEventListener("keydown", keydown); previous?.focus(); };
  }, [open]);

  function close() {
    sessionStorage.setItem("growthlabs-library-prompt", "dismissed");
    setOpen(false);
  }

  function openPrompt() {
    startedAtRef.current = Date.now();
    setOpen(true);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/resource-library", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, sourcePath: pathname, startedAt: startedAtRef.current }) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "The library email could not be sent.");
      setState("success");
      setMessage("Check your inbox. We sent the complete GrowthLabs tools and resources library.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The library email could not be sent. Please try again.");
    }
  }

  if (!eligible) return null;

  return <>
    <button className="library-prompt-trigger" type="button" onClick={openPrompt} aria-haspopup="dialog" aria-expanded={open}>Email me the free library <span aria-hidden="true">↗</span></button>
    {open && <div className="library-prompt-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div ref={dialogRef} className="library-prompt" role="dialog" aria-modal="true" aria-labelledby="library-prompt-title" aria-describedby="library-prompt-copy">
        <button className="library-prompt-close" type="button" onClick={close} aria-label="Close resource library email form">×</button>
        <div className="library-prompt-copy">
          <p className="eyebrow">Free GrowthLabs library</p>
          <h2 id="library-prompt-title">Get every tool, template and checklist in one email.</h2>
          <p id="library-prompt-copy">We will send one organised email linking to the complete SEO, Google Ads, Meta Ads, CRO, analytics, local-search and website-planning library. Nothing is gated and there is no mailing-list subscription.</p>
          <ul><li>All browser-based calculators</li><li>All editable CSV templates</li><li>Glossary and practical learning hubs</li></ul>
        </div>
        <form className="library-prompt-form" onSubmit={submit}>
          <label><span>Name <small>(optional)</small></span><input name="name" autoComplete="name" maxLength={80} placeholder="Your name" /></label>
          <label><span>Email address *</span><input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@company.com" /></label>
          <label className="library-prompt-honeypot" aria-hidden="true"><span>Company</span><input name="company" tabIndex={-1} autoComplete="off" /></label>
          <label className="library-prompt-consent"><input name="privacyAccepted" type="checkbox" required value="yes" /><span>Send me this one resource-library email. I have read the <Link href="/privacy">Privacy Policy</Link>.</span></label>
          <button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending your library…" : "Email the complete library →"}</button>
          {message && <p className={`library-prompt-status ${state === "success" ? "is-success" : "is-error"}`} role={state === "error" ? "alert" : "status"}>{message}</p>}
        </form>
        <div className="library-prompt-source"><div><strong>Make future answers easier to find.</strong><span>Add GrowthLabs as a preferred source in Google.</span></div><a href={preferredSourceUrl} target="_blank" rel="noopener noreferrer">Prefer GrowthLabs ↗</a></div>
      </div>
    </div>}
  </>;
}
