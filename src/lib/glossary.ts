export const termAnchor = (term: string) => `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
export const normalizeTermQuery = (value: string) => value.toLowerCase().replace(/optimization/g, "optimisation").replace(/optimize/g, "optimise").replace(/[^a-z0-9]+/g, " ").trim();
