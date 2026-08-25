"use client";

import { useMemo, useState } from "react";
import type { ToolKind } from "@/content/tools";

const number = (value: string, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const fixed = (value: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(Number.isFinite(value) ? value : 0);

function Field({ label, value, onChange, suffix, min = 0, step = "any" }: { label: string; value: string; onChange: (value: string) => void; suffix?: string; min?: number; step?: string }) {
  return <label className="grid gap-2"><span className="font-mono text-[.68rem] font-bold uppercase tracking-[.045em] text-[var(--muted)]">{label}</span><span className="flex border border-[var(--line-strong)] bg-white focus-within:outline focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-[var(--accent)]"><input className="min-h-12 min-w-0 flex-1 bg-transparent px-3 outline-none" type="number" inputMode="decimal" value={value} min={min} step={step} onChange={(event) => onChange(event.target.value)} />{suffix && <span className="grid min-w-12 place-items-center border-l border-[var(--line)] bg-[var(--paper-deep)] px-3 font-mono text-xs">{suffix}</span>}</span></label>;
}

function Result({ label, value, note }: { label: string; value: string; note?: string }) {
  return <div className="border-t border-white/20 p-5"><dt className="font-mono text-[.65rem] uppercase tracking-[.045em] text-white/55">{label}</dt><dd className="mt-3 font-serif text-4xl leading-none tracking-[-.05em] text-[var(--sun)]">{value}</dd>{note && <p className="mt-3 text-xs leading-5 text-white/50">{note}</p>}</div>;
}

function SeoRoiCalculator() {
  const [sessions, setSessions] = useState("2000");
  const [currentRate, setCurrentRate] = useState("2");
  const [scenarioRate, setScenarioRate] = useState("2.5");
  const [closeRate, setCloseRate] = useState("20");
  const [profit, setProfit] = useState("500");
  const [cost, setCost] = useState("1000");
  const [currency, setCurrency] = useState("$");
  const output = useMemo(() => {
    const incrementalConversions = number(sessions) * Math.max(0, number(scenarioRate) - number(currentRate)) / 100;
    const customers = incrementalConversions * number(closeRate) / 100;
    const grossProfit = customers * number(profit);
    const investment = number(cost);
    const roi = investment > 0 ? (grossProfit - investment) / investment * 100 : 0;
    return { incrementalConversions, customers, grossProfit, roi };
  }, [sessions, currentRate, scenarioRate, closeRate, profit, cost]);
  return <ToolShell fields={<><Field label="Monthly organic sessions" value={sessions} onChange={setSessions} /><Field label="Current conversion rate" value={currentRate} onChange={setCurrentRate} suffix="%" /><Field label="Scenario conversion rate" value={scenarioRate} onChange={setScenarioRate} suffix="%" /><Field label="Lead-to-customer close rate" value={closeRate} onChange={setCloseRate} suffix="%" /><Field label="Gross profit per customer" value={profit} onChange={setProfit} suffix={currency} /><Field label="Monthly SEO investment" value={cost} onChange={setCost} suffix={currency} /><label className="grid gap-2"><span className="font-mono text-[.68rem] font-bold uppercase tracking-[.045em] text-[var(--muted)]">Currency symbol</span><input className="min-h-12 border border-[var(--line-strong)] bg-white px-3" value={currency} maxLength={4} onChange={(event) => setCurrency(event.target.value)} /></label></>} results={<><Result label="Incremental monthly conversions" value={fixed(output.incrementalConversions)} /><Result label="Estimated new customers" value={fixed(output.customers)} /><Result label="Estimated incremental gross profit" value={`${currency}${fixed(output.grossProfit)}`} /><Result label="Estimated ROI after SEO cost" value={`${fixed(output.roi)}%`} note="Arithmetic scenario only—not a ranking, traffic or revenue forecast." /></>} />;
}

function GoogleAdsCalculator() {
  const [revenue, setRevenue] = useState("500");
  const [margin, setMargin] = useState("40");
  const [closeRate, setCloseRate] = useState("20");
  const [pageRate, setPageRate] = useState("4");
  const [currency, setCurrency] = useState("$");
  const output = useMemo(() => {
    const marginRate = number(margin) / 100;
    const maxCpa = number(revenue) * marginRate;
    return { breakEvenRoas: marginRate > 0 ? 1 / marginRate : 0, maxCpa, maxCpl: maxCpa * number(closeRate) / 100, maxCpc: maxCpa * number(pageRate) / 100 };
  }, [revenue, margin, closeRate, pageRate]);
  return <ToolShell fields={<><Field label="Gross revenue per customer" value={revenue} onChange={setRevenue} suffix={currency} /><Field label="Gross margin" value={margin} onChange={setMargin} suffix="%" /><Field label="Lead-to-customer close rate" value={closeRate} onChange={setCloseRate} suffix="%" /><Field label="Landing-page conversion rate" value={pageRate} onChange={setPageRate} suffix="%" /><label className="grid gap-2"><span className="font-mono text-[.68rem] font-bold uppercase tracking-[.045em] text-[var(--muted)]">Currency symbol</span><input className="min-h-12 border border-[var(--line-strong)] bg-white px-3" value={currency} maxLength={4} onChange={(event) => setCurrency(event.target.value)} /></label></>} results={<><Result label="Break-even ROAS" value={`${fixed(output.breakEvenRoas)}×`} /><Result label="Maximum customer CPA" value={`${currency}${fixed(output.maxCpa)}`} /><Result label="Maximum lead CPL" value={`${currency}${fixed(output.maxCpl)}`} /><Result label="Maximum CPC at stated page rate" value={`${currency}${fixed(output.maxCpc)}`} note="Mathematical break-even before overhead, desired profit and attribution uncertainty." /></>} />;
}

function MetaBudgetCalculator() {
  const [outcomes, setOutcomes] = useState("40");
  const [cpa, setCpa] = useState("25");
  const [buffer, setBuffer] = useState("20");
  const [days, setDays] = useState("30");
  const [currency, setCurrency] = useState("$");
  const output = useMemo(() => {
    const base = number(outcomes) * number(cpa);
    const planning = base * (1 + number(buffer) / 100);
    return { base, planning, daily: number(days) > 0 ? planning / number(days) : 0 };
  }, [outcomes, cpa, buffer, days]);
  return <ToolShell fields={<><Field label="Desired qualified outcomes" value={outcomes} onChange={setOutcomes} step="1" /><Field label="Target cost per outcome" value={cpa} onChange={setCpa} suffix={currency} /><Field label="Testing buffer" value={buffer} onChange={setBuffer} suffix="%" /><Field label="Campaign duration" value={days} onChange={setDays} suffix="days" step="1" /><label className="grid gap-2"><span className="font-mono text-[.68rem] font-bold uppercase tracking-[.045em] text-[var(--muted)]">Currency symbol</span><input className="min-h-12 border border-[var(--line-strong)] bg-white px-3" value={currency} maxLength={4} onChange={(event) => setCurrency(event.target.value)} /></label></>} results={<><Result label="Base outcome budget" value={`${currency}${fixed(output.base)}`} /><Result label="Testing and uncertainty allowance" value={`${currency}${fixed(output.planning - output.base)}`} /><Result label="Planning media budget" value={`${currency}${fixed(output.planning)}`} /><Result label="Daily planning budget" value={`${currency}${fixed(output.daily)}`} note="Media budget only. Delivery and result volume are not guaranteed." /></>} />;
}

function UtmBuilder() {
  const [url, setUrl] = useState("https://example.com/landing-page");
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("campaign-name");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => {
    try {
      const destination = new URL(url);
      if (!['http:', 'https:'].includes(destination.protocol)) return "";
      [["utm_source", source], ["utm_medium", medium], ["utm_campaign", campaign], ["utm_term", term], ["utm_content", content]].forEach(([key, value]) => { if (value.trim()) destination.searchParams.set(key, value.trim()); });
      return source.trim() && medium.trim() && campaign.trim() ? destination.toString() : "";
    } catch { return ""; }
  }, [url, source, medium, campaign, term, content]);
  async function copy() { if (!result) return; await navigator.clipboard.writeText(result); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
  const textField = (label: string, value: string, setter: (value: string) => void, required = false) => <label className="grid gap-2"><span className="font-mono text-[.68rem] font-bold uppercase tracking-[.045em] text-[var(--muted)]">{label}{required ? " *" : ""}</span><input className="min-h-12 border border-[var(--line-strong)] bg-white px-3" value={value} required={required} onChange={(event) => setter(event.target.value)} /></label>;
  return <div className="grid border border-[var(--ink)] lg:grid-cols-[1fr_1fr]"><div className="grid content-start gap-5 bg-[var(--surface)] p-5 md:p-8">{textField("Destination URL", url, setUrl, true)}{textField("Campaign source", source, setSource, true)}{textField("Campaign medium", medium, setMedium, true)}{textField("Campaign name", campaign, setCampaign, true)}{textField("Campaign term", term, setTerm)}{textField("Campaign content", content, setContent)}</div><div className="flex min-h-96 flex-col justify-between bg-[var(--ink)] p-5 text-[var(--paper)] md:p-8"><div><p className="eyebrow !text-[var(--sun)]">Generated campaign URL</p><output className="mt-6 block break-all border border-white/20 bg-white/5 p-4 font-mono text-sm leading-7" aria-live="polite">{result || "Enter a valid http(s) URL and complete source, medium and campaign."}</output></div><div className="mt-8"><button className="button border-white text-white hover:bg-[var(--sun)] hover:text-[var(--ink)]" type="button" disabled={!result} onClick={copy}>{copied ? "Copied" : "Copy campaign URL"}</button><p className="mt-4 text-xs leading-5 text-white/50">Generated locally in your browser. Do not include personal data or secrets.</p></div></div></div>;
}

function ToolShell({ fields, results }: { fields: React.ReactNode; results: React.ReactNode }) {
  return <div className="grid border border-[var(--ink)] lg:grid-cols-[1.05fr_.95fr]"><div className="grid content-start gap-5 bg-[var(--surface)] p-5 sm:grid-cols-2 md:p-8">{fields}</div><dl className="grid content-start bg-[var(--ink)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{results}</dl></div>;
}

export function MarketingToolCalculator({ kind }: { kind: ToolKind }) {
  if (kind === "seo-roi") return <SeoRoiCalculator />;
  if (kind === "google-ads-break-even") return <GoogleAdsCalculator />;
  if (kind === "meta-budget") return <MetaBudgetCalculator />;
  return <UtmBuilder />;
}
