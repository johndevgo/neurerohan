"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";
import { siteConfig } from "@/content/site";
import { Arrow, MenuIcon } from "./icons";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onInstallable = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    const onInstalled = () => setInstallPrompt(null);
    window.addEventListener("beforeinstallprompt", onInstallable);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onInstallable);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

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
        const focusable = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a, button")].filter(Boolean) as HTMLElement[];
        const first = focusable[0];
        const last = focusable.at(-1);
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

  async function installApp() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  }

  return (
    <div className="mobile-nav-root flex items-center gap-1.5 lg:hidden">
      <Link className="header-mobile-cta" href={siteConfig.cta.primary.href} aria-label={siteConfig.cta.primary.label} data-cta-intent="growth-review" data-cta-location="mobile-header" data-cta-channel="contact">{siteConfig.cta.primary.shortLabel} <Arrow /></Link>
      <button ref={buttonRef} className={`mobile-menu-button relative z-[70] flex min-h-12 min-w-12 items-center justify-center ${open ? "mobile-menu-button-open" : ""}`} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}><MenuIcon open={open} /></button>
      {open && <div ref={panelRef} id="mobile-menu" className="mobile-menu-panel fixed z-50 flex flex-col overflow-y-auto overscroll-contain" aria-label="Mobile navigation">
        <div className="mobile-menu-heading"><span>Menu</span><small>Strategy, services and useful guidance</small></div>
        <nav className="flex flex-col">
          {items.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className={`mobile-menu-link ${item.href === "/contact" ? "mobile-menu-contact" : ""}`}><span className="mobile-menu-index">0{index + 1}</span><span className="mobile-menu-label">{item.label}</span><Arrow /></Link>)}
        </nav>
        <div className="mobile-menu-actions">
          <p className="mobile-menu-action-label">Ready to discuss growth?</p>
          <div className="mobile-menu-primary-actions"><a className="mobile-menu-brief" href={siteConfig.cta.whatsapp.href} target="_blank" rel="noopener noreferrer" data-cta-intent="growth-review" data-cta-location="mobile-menu" data-cta-channel="whatsapp">Send a brief <Arrow /></a><a className="mobile-menu-call" href={siteConfig.cta.phone.href} data-cta-intent="growth-review" data-cta-location="mobile-menu" data-cta-channel="phone">Call +977 9746265996</a></div>
          <div className="mobile-menu-utilities">
            <a className="mobile-menu-preferred" href="https://www.google.com/preferences/source?q=neurerohan.com.np" target="_blank" rel="noopener noreferrer">Preferred source on Google <Arrow direction="up-right" /></a>
            {installPrompt && <button className="mobile-menu-install" type="button" onClick={installApp}>Install app <Arrow /></button>}
          </div>
        </div>
      </div>}
    </div>
  );
}
