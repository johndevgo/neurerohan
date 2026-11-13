// Next's internal URL can use a different hostname from the incoming public
// request. Compare Origin against the actual Host header, not that internal URL.
// Forwarded host headers are deliberately not trusted here.
export function acceptsRequestOrigin(origin: string | null, host: string | null, fallbackHost: string): boolean {
  if (!origin) return true; // Non-browser clients may omit Origin; validation still applies.
  try {
    const source = new URL(origin);
    if (!["http:", "https:"].includes(source.protocol)) return false;
    const expected = new URL(`${source.protocol}//${host || fallbackHost}`);
    return source.host === expected.host;
  } catch { return false; }
}

export function acceptsSubmissionTime(value: unknown, minimumDelay: number, now = Date.now()): boolean {
  const startedAt = Number(value);
  return Number.isFinite(startedAt) && startedAt > 0 && now - startedAt >= minimumDelay;
}
