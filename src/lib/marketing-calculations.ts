// Pure arithmetic shared by browser tools and independent tests.
// Null means the denominator is zero, not a measured result of zero.
export const ratio = (numerator: number, denominator: number) => denominator === 0 ? null : numerator / denominator;
export function seoRoi(sessions: number, currentRate: number, scenarioRate: number, closeRate: number, profit: number, cost: number) {
  const conversions = sessions * (scenarioRate - currentRate) / 100;
  const customers = conversions * closeRate / 100;
  const grossProfit = customers * profit;
  const roi = ratio(grossProfit - cost, cost);
  return { conversions, customers, grossProfit, roi: roi === null ? null : roi * 100 };
}
export function adsBreakEven(revenue: number, margin: number, closeRate: number, pageRate: number, model: "leads" | "purchases") {
  const cpa = revenue * margin / 100;
  const cpl = cpa * closeRate / 100;
  // Lead generation has TWO stages between the click and a customer.
  const cpc = (model === "leads" ? cpl : cpa) * pageRate / 100;
  return { roas: ratio(100, margin), cpa, cpl: model === "leads" ? cpl : null, cpc };
}
export function metaBudget(outcomes: number, cpa: number, buffer: number, days: number) {
  const base = outcomes * cpa;
  const allowance = base * buffer / 100;
  const planning = base + allowance;
  return { base, allowance, planning, daily: ratio(planning, days) };
}
export function conversionRate(visits: number, converters: number, targetRate: number) {
  const current = ratio(converters, visits);
  const scenario = visits * targetRate / 100;
  return { current: current === null ? null : current * 100, nonConverting: visits - converters, scenario, additional: scenario - converters };
}
export function funnelEconomics(visits: number, leadRate: number, closeRate: number, customerRevenue: number, cost: number) {
  const leads = visits * leadRate / 100;
  const customers = leads * closeRate / 100;
  return { leads, customers, revenue: customers * customerRevenue, cac: ratio(cost, customers) };
}
export function campaignMetrics(spend: number, impressions: number, clicks: number) {
  const ctr = ratio(clicks, impressions);
  const cpm = ratio(spend, impressions);
  return { cpc: ratio(spend, clicks), cpm: cpm === null ? null : cpm * 1000, ctr: ctr === null ? null : ctr * 100 };
}
export function buildCampaignUrl(url: string, values: Record<string, string>): string | null {
  try {
    const destination = new URL(url.trim());
    if (!["http:", "https:"].includes(destination.protocol) || destination.username || destination.password) return null;
    if (!["utm_source", "utm_medium", "utm_campaign"].every((key) => values[key]?.trim())) return null;
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const value = values[key]?.trim();
      if (value) destination.searchParams.set(key, value);
      else destination.searchParams.delete(key);
    }
    return destination.toString();
  } catch { return null; }
}
