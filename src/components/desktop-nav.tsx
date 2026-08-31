"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";

type MenuKey = "services" | "insights";
type MenuLink = { label: string; href: string; copy: string };
type MenuGroup = { title: string; links: MenuLink[] };

const menus: Record<MenuKey, { eyebrow: string; title: string; copy: string; allLabel: string; allHref: string; groups: MenuGroup[] }> = {
  services: {
    eyebrow: "Connected growth services",
    title: "Find the constraint before buying the channel.",
    copy: "Explore focused SEO, paid-media, creative, website and measurement systems. Every engagement connects acquisition to the page, proof and tracking needed to convert it.",
    allLabel: "Explore all services",
    allHref: "/services",
    groups: [
      { title: "Search visibility", links: [
        { label: "SEO expert in Nepal", href: "/seo-expert-in-nepal", copy: "Founder-led search strategy and execution" },
        { label: "SEO company in Nepal", href: "/seo-company-in-nepal", copy: "Full-scope organic growth systems" },
        { label: "Local SEO", href: "/local-seo-services-in-nepal", copy: "Maps, Business Profile and local demand" },
        { label: "SEO audits", href: "/seo-audit-services-in-nepal", copy: "Technical, content and conversion diagnosis" },
      ] },
      { title: "Paid acquisition", links: [
        { label: "Google Ads", href: "/google-ads-agency-in-nepal", copy: "Search demand, landing pages and measurement" },
        { label: "Meta Ads", href: "/meta-ads-agency-in-nepal", copy: "Creative testing and qualified demand" },
        { label: "Advertising agency", href: "/advertising-agency-in-nepal", copy: "Cross-channel paid-media planning" },
        { label: "Conversion optimisation", href: "/conversion-rate-optimization-services", copy: "Turn more qualified visits into action" },
      ] },
      { title: "Brand & experience", links: [
        { label: "Social media marketing", href: "/social-media-marketing-agency-in-nepal", copy: "Content, distribution and paid amplification" },
        { label: "Web design", href: "/web-design-company-in-nepal", copy: "Fast, persuasive search-ready experiences" },
        { label: "Content marketing", href: "/content-marketing-agency-in-nepal", copy: "Intent-led topic and conversion systems" },
        { label: "Analytics & tracking", href: "/analytics-conversion-tracking-services", copy: "Reliable events, attribution and decisions" },
      ] },
    ],
  },
  insights: {
    eyebrow: "GrowthLabs knowledge system",
    title: "Use the playbooks behind better decisions.",
    copy: "Move from a direct answer to a practical framework, downloadable resource or calculator. Every format is designed to help you act, not keep you reading in circles.",
    allLabel: "Explore all insights",
    allHref: "/insights",
    groups: [
      { title: "Learn", links: [
        { label: "Articles", href: "/insights", copy: "Evidence-led marketing guides" },
        { label: "Marketing questions", href: "/insights/questions", copy: "Short answers to real decisions" },
        { label: "Marketing glossary", href: "/insights/glossary", copy: "Clear definitions and connected concepts" },
        { label: "Case studies", href: "/insights/case-studies", copy: "Evidence, context and interpretation" },
      ] },
      { title: "Use", links: [
        { label: "Free resources", href: "/resources", copy: "Checklists, templates and workbooks" },
        { label: "Marketing tools", href: "/tools", copy: "Interactive planning calculators" },
        { label: "SEO audit checklist", href: "/resources/seo-audit-checklist", copy: "Inspect crawl, content and conversion" },
        { label: "SEO ROI calculator", href: "/tools/seo-roi-calculator", copy: "Model traffic, leads and commercial value" },
      ] },
      { title: "New deep guides", links: [
        { label: "Topical authority", href: "/insights/topical-authority-content-clusters-guide", copy: "Build depth without publishing noise" },
        { label: "Google Ads audit", href: "/insights/google-ads-account-audit-guide", copy: "Diagnose campaign-to-revenue performance" },
        { label: "Core Web Vitals", href: "/insights/core-web-vitals-optimization-guide", copy: "Improve LCP, INP and CLS by template" },
        { label: "Social strategy", href: "/insights/social-media-marketing-strategy-guide", copy: "Connect content to measurable demand" },
      ] },
    ],
  },
};

function Chevron({ open }: { open: boolean }) {
  return <svg aria-hidden="true" className={open ? "mega-nav-chevron is-open" : "mega-nav-chevron"} viewBox="0 0 12 8"><path d="m1 1.5 5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>;
}

export function DesktopNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const queueClose = () => { cancelClose(); closeTimer.current = setTimeout(() => setOpenMenu(null), 130); };

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);
  useEffect(() => () => cancelClose(), []);

  return <nav ref={navRef} aria-label="Primary navigation" className="desktop-nav" onMouseEnter={cancelClose} onMouseLeave={queueClose}>
    {items.map((item) => {
      const menuKey = item.href === "/services" ? "services" : item.href === "/insights" ? "insights" : null;
      const current = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
      if (!menuKey) return <Link key={item.href} aria-current={current ? "page" : undefined} className={current ? "desktop-nav-link is-current" : "desktop-nav-link"} href={item.href} onClick={() => setOpenMenu(null)}>{item.label}</Link>;

      const menu = menus[menuKey];
      const open = openMenu === menuKey;
      const panelId = `${menuKey}-mega-menu`;
      return <div className="mega-nav-item" key={item.href} onMouseEnter={() => setOpenMenu(menuKey)} onFocus={cancelClose} onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) queueClose();
      }}>
        <button aria-controls={panelId} aria-expanded={open} className={current ? "mega-nav-trigger is-current" : "mega-nav-trigger"}
          onClick={() => setOpenMenu(open ? null : menuKey)} onFocus={() => setOpenMenu(menuKey)}
          onKeyDown={(event) => {
            if (event.key === "Escape") { setOpenMenu(null); event.currentTarget.focus(); }
            if (event.key === "ArrowDown") {
              event.preventDefault(); setOpenMenu(menuKey);
              requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(`#${panelId} a`)?.focus());
            }
          }} type="button">{item.label}<Chevron open={open} /></button>
        {open ? <div className="mega-menu" id={panelId} onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpenMenu(null);
            navRef.current?.querySelector<HTMLButtonElement>(`[aria-controls="${panelId}"]`)?.focus();
          }
        }}>
          <div className="mega-menu-intro">
            <span className="mega-menu-eyebrow">{menu.eyebrow}</span><strong>{menu.title}</strong><p>{menu.copy}</p>
            <Link className="mega-menu-all" href={menu.allHref} onClick={() => setOpenMenu(null)}>{menu.allLabel}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="mega-menu-groups">
            {menu.groups.map((group) => {
              const titleId = `${menuKey}-${group.title.replaceAll(" ", "-").toLowerCase()}`;
              return <section className="mega-menu-group" key={group.title} aria-labelledby={titleId}>
                <h2 id={titleId}>{group.title}</h2><div>{group.links.map((link) => <Link className="mega-menu-link" href={link.href} key={link.href} onClick={() => setOpenMenu(null)}>
                  <span>{link.label}<i aria-hidden="true">↗</i></span><small>{link.copy}</small>
                </Link>)}</div>
              </section>;
            })}
          </div>
        </div> : null}
      </div>;
    })}
  </nav>;
}
