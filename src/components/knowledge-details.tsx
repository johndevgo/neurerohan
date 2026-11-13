import Link from "next/link";
import { Arrow } from "./icons";
import { SectionHeading } from "./ui";
import type { ResourceWorkflow, ToolWorkflow } from "@/content/knowledge-workflows";

export function ResourceFieldGuide({ workflow, preview }: { workflow: ResourceWorkflow; preview: { headers: string[]; rows: string[][]; rowCount: number } }) {
  const columns = Math.min(4, preview.headers.length);
  return <section className="section knowledge-workflow" id="template-preview"><div className="shell">
    <SectionHeading eyebrow="Inside the download" title="Preview the file before you use it." copy={workflow.audience} />
    <div className="knowledge-detail-body"><div className="download-facts"><span><strong>{preview.headers.length}</strong> editable columns</span><span><strong>{preview.rowCount}</strong> {preview.rowCount === 1 ? "starter row" : "starter rows"}</span><span>CSV · No account required</span></div>
      <div className="knowledge-table" role="region" aria-label="Downloadable template preview" tabIndex={0}><table><caption>First {columns} columns and up to three starter rows. The download contains every field below.</caption><thead><tr>{preview.headers.slice(0, columns).map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{preview.rows.map((row, index) => <tr key={index}>{Array.from({ length: columns }, (_, cell) => <td key={cell}>{row[cell] || "Ready for your input"}</td>)}</tr>)}</tbody></table></div>
      <details className="template-columns"><summary>See all {preview.headers.length} column names</summary><ul>{preview.headers.map((header) => <li key={header}>{header}</li>)}</ul></details>
      <div className="workflow-fields">{workflow.fields.map((field) => <article key={field.name}><h3>{field.name}</h3><p>{field.guidance}</p></article>)}</div>
      <aside className="worked-example"><p className="eyebrow">Applied example</p><h3>{workflow.example.title}</h3><p>{workflow.example.copy}</p><p><strong>Review cadence:</strong> {workflow.review}</p></aside>
    </div>
  </div></section>;
}

export function ToolWorkedExample({ workflow }: { workflow: ToolWorkflow }) {
  return <section className="section knowledge-workflow" id="worked-example"><div className="shell"><SectionHeading eyebrow="Worked example" title={workflow.example.title} copy="Illustrative inputs, not client performance or a promised outcome. Replace them with your own baseline in the tool above." /><div className="knowledge-detail-body"><dl className="tool-example"><div><dt>Example inputs</dt><dd>{workflow.example.inputs}</dd></div><div><dt>Calculation</dt><dd>{workflow.example.output}</dd></div><div><dt>What it means</dt><dd>{workflow.example.interpretation}</dd></div></dl><h3 className="workflow-subtitle">Use the result to make a better decision</h3><ul className="workflow-decisions">{workflow.decisions.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>;
}

const learningPaths = [
  { title: "Build organic visibility", copy: "Understand search intent, map the pages and work through technical priorities.", guide: ["SEO foundations", "/insights/what-is-seo"], resource: ["SEO audit checklist", "/resources/seo-audit-checklist"], tool: ["SEO ROI calculator", "/tools/seo-roi-calculator"] },
  { title: "Make paid search accountable", copy: "Connect search queries, campaign economics and reliable conversion events.", guide: ["Google Ads account audit", "/insights/google-ads-account-audit-guide"], resource: ["Google Ads launch checklist", "/resources/google-ads-launch-checklist"], tool: ["Break-even calculator", "/tools/google-ads-break-even-calculator"] },
  { title: "Improve creative and lead quality", copy: "Plan the test, record what changed and assess qualified outcomes.", guide: ["Meta creative testing", "/insights/meta-ads-creative-testing-framework"], resource: ["Creative testing tracker", "/resources/meta-ads-creative-testing-tracker"], tool: ["Meta budget planner", "/tools/meta-ads-budget-planner"] },
  { title: "Turn website visits into action", copy: "Find conversion friction and prioritise changes that improve the customer journey.", guide: ["Landing-page conversion guide", "/insights/landing-page-conversion-optimization-guide"], resource: ["CRO experiment backlog", "/resources/cro-experiment-backlog"], tool: ["Conversion-rate calculator", "/tools/conversion-rate-calculator"] },
];

export function LearningPaths() {
  return <section className="section learning-paths"><div className="shell"><SectionHeading eyebrow="Choose your next step" title="Read it. Plan it. Put it to work." copy="Follow a connected path from explanation to a working template and a useful calculation. Everything is open to use without an email gate." /><div className="learning-path-grid">{learningPaths.map((path) => <article key={path.title}><h3>{path.title}</h3><p>{path.copy}</p><ul>{[path.guide, path.resource, path.tool].map(([label, href], index) => <li key={href}><Link href={href}><span><small>{["Guide", "Template", "Tool"][index]}</small>{label}</span><Arrow /></Link></li>)}</ul></article>)}</div></div></section>;
}
