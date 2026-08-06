"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";
import { MenuIcon } from "./icons";

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
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
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; previous?.focus(); };
  }, [open]);

  return (
    <div className="md:hidden">
      <button ref={buttonRef} className="flex min-h-12 min-w-12 items-center justify-center border border-[var(--line)]" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}><MenuIcon open={open} /></button>
      {open && <div ref={panelRef} id="mobile-menu" className="fixed inset-x-0 top-[73px] z-50 flex h-[calc(100dvh-73px)] flex-col bg-[var(--ink)] p-5 text-[var(--paper)]" aria-label="Mobile navigation">
        <nav className="mt-8 flex flex-col">
          {items.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className="border-b border-white/20 py-4 font-serif text-4xl"><span className="mr-4 align-top font-sans text-xs text-white/50">0{index + 1}</span>{item.label}</Link>)}
        </nav>
        <p className="mt-auto text-sm text-white/60">neurerohan.com.np</p>
      </div>}
    </div>
  );
}
