"use client";

import { useId, useState } from "react";
import type { ToolKind } from "@/content/tools";
import { adsBreakEven, buildCampaignUrl, campaignMetrics, conversionRate, funnelEconomics, metaBudget, seoRoi } from "@/lib/marketing-calculations";

type NumericKind = Exclude<ToolKind, "utm-builder">;
type InputSpec = { key: string; label: string; value: string; unit?: "%" | "money" | "days"; max?: number; integer?: boolean; hint?: string };
type Metric = { label: string; value: number | null; unit?: "%" | "money" | "×" };
const percent = { unit: "%", max: 100 } as const;
const specs: Record<NumericKind, { fields: InputSpec[]; note: string }> = {
  "seo-roi": { fields: [
    { key: "sessions", label: "Monthly organic sessions", value: "2000", integer: true },
    { key: "currentRate", label: "Current session-to-lead rate", value: "2", ...percent },
    { key: "scenarioRate", label: "Scenario session-to-lead rate", value: "2.5", ...percent },
    { key: "closeRate", label: "Lead-to-customer close rate", value: "20", ...percent },
    { key: "profit", label: "Gross profit per customer", value: "500", unit: "money" },
    { key: "cost", label: "Monthly SEO investment", value: "1000", unit: "money" },
  ], note: "Compares a conversion-rate change at the same traffic volume. Negative results show a lower scenario. Gross profit excludes SEO cost until the ROI calculation." },
  "google-ads-break-even": { fields: [
    { key: "revenue", label: "Revenue per customer", value: "500", unit: "money" },
    { key: "margin", label: "Gross margin", value: "40", ...percent, hint: "Revenue remaining after direct costs, before advertising." },
    { key: "closeRate", label: "Lead-to-customer close rate", value: "20", ...percent },
    { key: "pageRate", label: "Click-to-lead conversion rate", value: "4", ...percent },
  ], note: "Break-even uses gross profit before overhead and desired profit. Set a working acquisition target below this ceiling to leave room for both." },
  "meta-budget": { fields: [
    { key: "outcomes", label: "Desired qualified outcomes", value: "40", integer: true },
    { key: "cpa", label: "Target cost per outcome", value: "25", unit: "money" },
    { key: "buffer", label: "Testing allowance", value: "20", unit: "%" },
    { key: "days", label: "Campaign duration", value: "30", unit: "days", integer: true },
  ], note: "Media planning only. Include creative production and management fees separately. Outcome volume depends on the actual CPA achieved." },
  "conversion-rate": { fields: [
    { key: "visits", label: "Eligible sessions", value: "5000", integer: true },
    { key: "conversions", label: "Sessions with a qualified conversion", value: "150", integer: true, hint: "Count each session once, even if it has several conversion events." },
    { key: "targetRate", label: "Scenario session conversion rate", value: "4", ...percent },
  ], note: "Uses converting sessions, not total event count. Keep the date range, traffic segment and qualified action the same. A negative difference means fewer converting sessions." },
  "funnel-economics": { fields: [
    { key: "visits", label: "Monthly visits", value: "10000", integer: true },
    { key: "leadRate", label: "Visit-to-lead rate", value: "3", ...percent },
    { key: "closeRate", label: "Lead-to-customer close rate", value: "20", ...percent },
    { key: "revenue", label: "Revenue per customer", value: "800", unit: "money" },
    { key: "cost", label: "Included acquisition cost", value: "3000", unit: "money", hint: "Include all marketing and sales costs for fully loaded CAC, or label the subset you use." },
  ], note: "Customers are an expected scenario and can be fractional. Revenue is before costs. CAC covers only the acquisition costs you include." },
  "campaign-metrics": { fields: [
    { key: "spend", label: "Advertising spend", value: "1000", unit: "money" },
    { key: "impressions", label: "Recorded impressions", value: "100000", integer: true },
    { key: "clicks", label: "Recorded clicks", value: "2500", integer: true },
  ], note: "Use the same account, period and click definition for every input. Delivery metrics describe traffic cost and response; use CPA and qualified outcomes to evaluate its value." },
};

function metrics(kind: NumericKind, n: Record<string, number>, model: "leads" | "purchases"): Metric[] {
  if (kind === "seo-roi") {
    const r = seoRoi(n.sessions, n.currentRate, n.scenarioRate, n.closeRate, n.profit, n.cost);
    return [{ label: "Change in monthly leads", value: r.conversions }, { label: "Change in expected customers", value: r.customers }, { label: "Change in gross profit", value: r.grossProfit, unit: "money" }, { label: "ROI after SEO cost", value: r.roi, unit: "%" }];
  }
  if (kind === "google-ads-break-even") {
    const r = adsBreakEven(n.revenue, n.margin, n.closeRate, n.pageRate, model);
    return [{ label: "Break-even ROAS", value: r.roas, unit: "×" }, { label: "Maximum customer CPA", value: r.cpa, unit: "money" }, ...(model === "leads" ? [{ label: "Maximum qualified-lead CPL", value: r.cpl, unit: "money" as const }] : []), { label: "Maximum CPC", value: r.cpc, unit: "money" }];
  }
  if (kind === "meta-budget") {
    const r = metaBudget(n.outcomes, n.cpa, n.buffer, n.days);
    return [{ label: "Base outcome budget", value: r.base, unit: "money" }, { label: "Testing allowance", value: r.allowance, unit: "money" }, { label: "Planning media budget", value: r.planning, unit: "money" }, { label: "Daily planning budget", value: r.daily, unit: "money" }];
  }
  if (kind === "conversion-rate") {
    const r = conversionRate(n.visits, n.conversions, n.targetRate);
    return [{ label: "Session conversion rate", value: r.current, unit: "%" }, { label: "Sessions without a conversion", value: r.nonConverting }, { label: "Converting sessions at scenario rate", value: r.scenario }, { label: "Change in converting sessions", value: r.additional }];
  }
  if (kind === "funnel-economics") {
    const r = funnelEconomics(n.visits, n.leadRate, n.closeRate, n.revenue, n.cost);
    return [{ label: "Expected qualified leads", value: r.leads }, { label: "Expected customers", value: r.customers }, { label: "Expected gross revenue", value: r.revenue, unit: "money" }, { label: "Customer acquisition cost", value: r.cac, unit: "money" }];
  }
  const r = campaignMetrics(n.spend, n.impressions, n.clicks);
  return [{ label: "Cost per click (CPC)", value: r.cpc, unit: "money" }, { label: "Cost per 1,000 impressions (CPM)", value: r.cpm, unit: "money" }, { label: "Click-through rate (CTR)", value: r.ctr, unit: "%" }];
}

function NumericCalculator({ kind }: { kind: NumericKind }) {
  const config = specs[kind];
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(config.fields.map((field) => [field.key, field.value])));
  const [currency, setCurrency] = useState("USD");
  const [model, setModel] = useState<"leads" | "purchases">("leads");
  const id = useId();
  const fields = config.fields.filter((field) => !(kind === "google-ads-break-even" && model === "purchases" && field.key === "closeRate"));
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const raw = values[field.key]?.trim();
    const value = Number(raw);
    if (!raw || !Number.isFinite(value)) errors[field.key] = "Enter a number.";
    else if (value < 0 || (field.max !== undefined && value > field.max)) errors[field.key] = field.max ? `Use a value from 0 to ${field.max}.` : "Use zero or a positive number.";
    else if (field.integer && !Number.isInteger(value)) errors[field.key] = "Use a whole number.";
  }
  if (kind === "conversion-rate" && !errors.visits && !errors.conversions && Number(values.conversions) > Number(values.visits)) errors.conversions = "Converting sessions cannot exceed eligible sessions.";
  const valid = Object.keys(errors).length === 0;
  const numbers = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, Number(value)]));
  const results = valid ? metrics(kind, numbers, model) : [];
  const formatted = (metric: Metric) => {
    if (metric.value === null || !Number.isFinite(metric.value)) return "Not defined";
    const value = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(metric.value);
    return metric.unit === "money" ? `${currency} ${value}` : `${value}${metric.unit ?? ""}`;
  };
  return <div className="tool-shell" data-tool={kind}>
    <div className="tool-inputs">
      <div className="tool-panel-heading"><p className="eyebrow">Your inputs</p><h3>Build your scenario</h3><p>Change a value to see the effect. Your inputs stay on this device.</p></div>
      {kind === "google-ads-break-even" && <fieldset className="tool-model"><legend>What does the campaign generate?</legend>{([["leads", "Qualified leads"], ["purchases", "Direct purchases"]] as const).map(([value, label]) => <label key={value}><input type="radio" name={`${id}-model`} value={value} checked={model === value} onChange={() => setModel(value)} />{label}</label>)}</fieldset>}
      <div className="tool-fields">{fields.map((field) => {
        const label = kind === "google-ads-break-even" && field.key === "pageRate" && model === "purchases" ? "Click-to-purchase conversion rate" : field.label;
        const error = errors[field.key];
        return <label className="tool-field" key={field.key} htmlFor={`${id}-${field.key}`}><span>{label}</span><span className="tool-input-wrap"><input id={`${id}-${field.key}`} type="number" inputMode={field.integer ? "numeric" : "decimal"} min={0} max={field.max} step={field.integer ? 1 : "any"} required value={values[field.key]} aria-invalid={Boolean(error)} aria-describedby={error || field.hint ? `${id}-${field.key}-help` : undefined} onChange={(event) => setValues({ ...values, [field.key]: event.target.value })} />{field.unit && <span>{field.unit === "money" ? currency : field.unit}</span>}</span>{(error || field.hint) && <small className={error ? "tool-field-error" : ""} id={`${id}-${field.key}-help`}>{error ?? field.hint}</small>}</label>;
      })}{config.fields.some((field) => field.unit === "money") && <label className="tool-field"><span>Currency</span><select value={currency} onChange={(event) => setCurrency(event.target.value)}>{["USD", "NPR", "GBP", "AUD", "EUR", "INR", "AED", "CAD"].map((value) => <option key={value}>{value}</option>)}</select><small>Label only. No exchange-rate conversion.</small></label>}</div>
      <button className="tool-reset" type="button" onClick={() => { setValues(Object.fromEntries(config.fields.map((field) => [field.key, field.value]))); setModel("leads"); setCurrency("USD"); }}>Reset example values</button>
    </div>
    <div className="tool-results" aria-live="polite" aria-atomic="true"><div className="tool-panel-heading"><p className="eyebrow">Your result</p><h3>{valid ? "See what changes" : "Check your inputs"}</h3></div>{valid ? <dl>{results.map((metric) => <div className="tool-metric" key={metric.label}><dt>{metric.label}</dt><dd>{formatted(metric)}</dd>{metric.value === null && <p>Requires a non-zero denominator.</p>}</div>)}</dl> : <p className="tool-validation" role="status">Complete the highlighted fields to calculate a valid scenario.</p>}<p className="tool-result-note">{config.note}</p></div>
  </div>;
}

function UtmBuilder() {
  const [url, setUrl] = useState("https://example.com/landing-page");
  const [values, setValues] = useState({ utm_source: "google", utm_medium: "cpc", utm_campaign: "campaign-name", utm_term: "", utm_content: "" });
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const result = buildCampaignUrl(url, values);
  const id = useId();
  async function copy() {
    if (!result) return;
    try { await navigator.clipboard.writeText(result); setCopyState("copied"); }
    catch { setCopyState("failed"); }
  }
  const labels: Record<string, string> = { utm_source: "Campaign source", utm_medium: "Campaign medium", utm_campaign: "Campaign name", utm_term: "Campaign term", utm_content: "Campaign content" };
  return <div className="tool-shell" data-tool="utm-builder"><div className="tool-inputs"><div className="tool-panel-heading"><p className="eyebrow">Campaign details</p><h3>Build a consistent tracking link</h3><p>Keep names consistent across your campaign and analytics reports.</p></div><div className="tool-fields"><label className="tool-field tool-field-wide" htmlFor={`${id}-url`}><span>Destination URL (required)</span><input id={`${id}-url`} type="url" required value={url} onChange={(event) => { setUrl(event.target.value); setCopyState("idle"); }} /><small>Use a complete http or https address without login credentials.</small></label>{Object.entries(values).map(([key, value]) => <label className="tool-field" key={key} htmlFor={`${id}-${key}`}><span>{labels[key]}{["utm_source", "utm_medium", "utm_campaign"].includes(key) ? " (required)" : " (optional)"}</span><input id={`${id}-${key}`} required={["utm_source", "utm_medium", "utm_campaign"].includes(key)} value={value} onChange={(event) => { setValues({ ...values, [key]: event.target.value }); setCopyState("idle"); }} /></label>)}</div></div><div className="tool-results"><div className="tool-panel-heading"><p className="eyebrow">Ready to use</p><h3>Your campaign URL</h3></div><output className="tool-url" aria-live="polite">{result ?? "Enter a valid destination and complete source, medium and campaign."}</output><button className="button button-primary" disabled={!result} type="button" onClick={copy}>{copyState === "copied" ? "URL copied" : "Copy campaign URL"}</button><p role="status" className="tool-result-note">{copyState === "failed" ? "Clipboard access is unavailable. Select and copy the URL above manually." : "Built locally. Existing non-UTM parameters and the page anchor are preserved. Never add names, email addresses or other personal data to a campaign URL."}</p></div></div>;
}

export function MarketingToolCalculator({ kind }: { kind: ToolKind }) {
  return kind === "utm-builder" ? <UtmBuilder /> : <NumericCalculator key={kind} kind={kind} />;
}
