"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";
import { siteConfig } from "@/content/site";
import { Arrow, MenuIcon } from "./icons";

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.classList.add("mobile-menu-open");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
        const first = focusable[0]; const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("mobile-menu-open");
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      previous?.focus();
    };
  }, [open]);

  return (
    <div className="flex items-center gap-1.5 lg:hidden">
      <Link className="header-mobile-cta" href={siteConfig.cta.primary.href} aria-label={siteConfig.cta.primary.label} data-cta-intent="growth-review" data-cta-location="mobile-header" data-cta-channel="contact">{siteConfig.cta.primary.shortLabel} <Arrow /></Link>
      <button ref={buttonRef} className={`mobile-menu-button relative z-[70] flex min-h-12 min-w-12 items-center justify-center ${open ? "mobile-menu-button-open" : ""}`} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}><MenuIcon open={open} /></button>
      {open && <div ref={panelRef} id="mobile-menu" className="mobile-menu-panel fixed inset-x-0 top-[var(--header)] z-50 flex h-[calc(100dvh-var(--header))] flex-col overflow-y-auto overscroll-contain bg-[var(--ink)] p-5 pb-8 text-[var(--paper)]" aria-label="Mobile navigation">
        <nav className="flex flex-col">
          {items.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className={`mobile-menu-link ${item.href === "/contact" ? "mobile-menu-contact" : ""}`}><span className="mobile-menu-index">0{index + 1}</span>{item.label}</Link>)}
        </nav>
        <div className="mobile-menu-actions mt-auto pt-8">
          <a className="mobile-menu-preferred" href="https://www.google.com/preferences/source?q=neurerohan.com.np" target="_blank" rel="noopener noreferrer">Add GrowthLabs as a preferred source <Arrow direction="up-right" /></a>
          <div className="grid grid-cols-2 gap-2"><a className="mobile-menu-secondary" href={siteConfig.cta.whatsapp.href} target="_blank" rel="noopener noreferrer" data-cta-intent="growth-review" data-cta-location="mobile-menu" data-cta-channel="whatsapp">Send brief</a><a className="mobile-menu-secondary" href={siteConfig.cta.phone.href} data-cta-intent="growth-review" data-cta-location="mobile-menu" data-cta-channel="phone">Call GrowthLabs</a></div>
        </div><p className="mt-5 font-mono text-[.72rem] uppercase tracking-[.08em] text-white/65">SEO · Google Ads · Meta Ads · CRO</p>
      </div>}
    </div>
  );
}
