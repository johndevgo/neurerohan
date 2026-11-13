import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseCsv } from "./csv-preview";

export async function downloadPreview(href: string) {
  if (!/^\/downloads\/[a-z0-9-]+\.csv$/.test(href)) throw new Error("Invalid published download path");
  const rows = parseCsv(await readFile(join(process.cwd(), "public", href), "utf8"));
  return { headers: rows[0], rows: rows.slice(1, 4), rowCount: rows.length - 1 };
}
