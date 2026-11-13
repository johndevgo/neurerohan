import assert from "node:assert/strict";
const base = new URL(process.argv[2] ?? "http://127.0.0.1:3182");
for (const path of ["/api/contact", "/api/resource-library"]) {
  for (const [origin, body, expected] of [[base.origin, "{}", 400], [base.origin, "null", 400], ["https://unrelated.example", "{}", 403]]) {
    const response = await fetch(new URL(path, base), { method: "POST", headers: { "Content-Type": "application/json", Origin: origin }, body });
    assert.equal(response.status, expected, `${path}: ${origin}, payload ${body}`);
    assert.ok((await response.json()).message, `${path}: useful response message`);
  }
  console.log(`PASS ${path}: same-host requests reach validation, null bodies rejected, cross-site origin blocked. No email sent.`);
}
