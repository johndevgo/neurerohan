"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";

export function DesktopNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();

  return <nav aria-label="Primary navigation" className="flex items-center gap-6">
    {items.map((item, index) => {
      const current = pathname === item.href;
      return <Link key={item.href} aria-current={current ? "page" : undefined} className="group relative py-2 text-sm font-bold" href={item.href}>
        <span className="mr-1 font-mono text-[.65rem] text-[var(--muted)]">0{index + 1}</span>{item.label}
        <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--ink)] transition-transform ${current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
      </Link>;
    })}
  </nav>;
}
