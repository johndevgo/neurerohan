"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Arrow } from "./icons";
import type { GlossaryTerm } from "@/content/knowledge";
import { normalizeTermQuery, termAnchor } from "@/lib/glossary";

export function GlossaryExplorer({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const normalized = normalizeTermQuery(query);
  const filtered = useMemo(() => normalized
    ? terms.filter((item) => normalized.split(" ").every((part) => normalizeTermQuery(`${item.term} ${item.abbreviation ?? ""} ${item.definition} ${item.practicalMeaning}`).includes(part)))
    : terms, [normalized, terms]);
  const groups = Object.entries(filtered.reduce<Record<string, GlossaryTerm[]>>((all, item) => {
    const letter = item.term[0].toUpperCase();
    (all[letter] ??= []).push(item);
    return all;
  }, {})).sort(([a], [b]) => a.localeCompare(b));

  return <>
    <div className="glossary-search-wrap">
      <label htmlFor="glossary-search"><span>Search the glossary</span><input id="glossary-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try SEO, attribution, email, ROAS…" /></label>
      <p aria-live="polite"><strong>{filtered.length}</strong> of {terms.length} terms shown</p>
      {query && <button className="tool-reset" type="button" onClick={() => setQuery("")}>Clear search</button>}
    </div>
    {groups.length > 0 && <nav className="glossary-alphabet" aria-label="Glossary letters">{groups.map(([letter]) => <a href={`#letter-${letter.toLowerCase()}`} key={letter}>{letter}</a>)}</nav>}
    {groups.length ? <div className="glossary-groups">{groups.map(([letter, items]) => <section className="glossary-letter scroll-mt-28" id={`letter-${letter.toLowerCase()}`} key={letter}><h2>{letter}</h2><dl>{items.map((item) => <div className="glossary-term" id={termAnchor(item.term)} key={item.term}><dt><a className="glossary-term-link" href={`#${termAnchor(item.term)}`} aria-label={`Link to ${item.term}`}>{item.term}</a>{item.abbreviation && <span>({item.abbreviation})</span>}</dt><dd><p>{item.definition}</p><p className="glossary-practice"><strong>In practice:</strong> {item.practicalMeaning}</p>{item.href && <Link className="text-link mt-4" href={item.href}>Explore {item.term.toLowerCase()} <Arrow /></Link>}</dd></div>)}</dl></section>)}</div> : <div className="empty-state mt-8"><h2 className="font-serif text-2xl">No matching term yet.</h2><p className="mt-2 text-[var(--muted)]">Try a shorter phrase, an acronym or a related topic.</p><button className="button mt-5" type="button" onClick={() => setQuery("")}>Show all terms</button></div>}
  </>;
}
