import { PageStructuredData } from "@/components/structured-data";
import { PageIntro } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy | GrowthLabs by Rohan Neure",
  "Learn what information GrowthLabs may receive through direct enquiries, why it is used, how it is protected and how to contact GrowthLabs.",
  "/privacy",
);

const contents = [
  ["1", "Who is responsible", "who-is-responsible"],
  ["2", "Information you provide", "information-you-provide"],
  ["3", "Technical information", "technical-information"],
  ["4", "How information is used", "how-information-is-used"],
  ["5", "Cookies and analytics", "cookies-and-analytics"],
  ["6", "Sharing and third parties", "sharing-and-third-parties"],
  ["7", "Retention and security", "retention-and-security"],
  ["8", "Your choices", "your-choices"],
  ["9", "Children and policy changes", "children-and-changes"],
  ["10", "Privacy contact", "privacy-contact"],
];

export default function PrivacyPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Privacy Policy" }]} eyebrow="Privacy Policy" title="Privacy Policy">
      <p>Last updated: 14 August 2026</p>
      <p className="mt-5">GrowthLabs by Rohan Neure respects your privacy and aims to collect only the information reasonably needed to operate this website, respond to direct enquiries and provide agreed services.</p>
      <p className="mt-4">This policy explains what information may be processed through neurerohan.com.np and the contact channels linked from it, why that information may be used and the choices available to you.</p>
    </PageIntro>

    <div className="section-dark border-b border-white/20">
      <ul className="shell grid font-mono text-[.68rem] uppercase tracking-[.04em] sm:grid-cols-3">
        <li className="border-b border-white/20 py-5 sm:border-b-0 sm:border-r sm:pr-6">No website contact form</li>
        <li className="border-b border-white/20 py-5 sm:border-b-0 sm:border-r sm:px-6">No active analytics or advertising pixels</li>
        <li className="py-5 sm:pl-6">Essential hosting and security logs may apply</li>
      </ul>
    </div>

    <section className="section pt-0">
      <div className="shell grid gap-12 lg:grid-cols-[15rem_minmax(0,46rem)] lg:justify-center">
        <nav aria-label="Privacy policy contents" className="h-fit border-t border-[var(--line)] pt-5 lg:sticky lg:top-28">
          <p className="eyebrow">On this page</p>
          <ol className="mt-4 space-y-2 text-sm">
            {contents.map(([number, label, href]) => <li key={href}><a className="flex gap-3 py-1.5 text-[var(--muted)] hover:text-[var(--accent)]" href={`#${href}`}><span>{number}.</span><span>{label}</span></a></li>)}
          </ol>
        </nav>

        <div className="prose-copy space-y-14">
          <section id="who-is-responsible" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">1. Who is responsible for this website?</h2>
            <p className="mt-4">GrowthLabs by Rohan Neure operates this website.</p>
            <address className="mt-5 grid gap-1 not-italic">
              <strong>{siteConfig.brandName}</strong>
              <span>Sallaghari Shopping Complex, Bhaktapur 44800, Nepal</span>
              <a className="text-link w-fit" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a className="text-link w-fit" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              <a className="text-link w-fit" href={siteConfig.domain}>{siteConfig.domain}</a>
            </address>
            <p className="mt-4">Use the email address above for questions or requests about this policy or information you have shared with GrowthLabs.</p>
          </section>

          <section id="information-you-provide" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">2. Information you choose to provide</h2>
            <p className="mt-4">This website does not use a contact form. When you contact GrowthLabs by email, phone, WhatsApp, LinkedIn or another confirmed channel, you may choose to provide:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Your name, email address or phone number</li>
              <li>Your company or business name</li>
              <li>A website or profile URL</li>
              <li>Your preferred contact method</li>
              <li>Information about your business, marketing, project or enquiry</li>
              <li>Other information you voluntarily include in the conversation</li>
            </ul>
            <p className="mt-4">Do not send passwords, recovery codes, payment-card information, government identification or other sensitive information unless GrowthLabs has confirmed that it is necessary and provided an appropriate secure method.</p>
          </section>

          <section id="technical-information" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">3. Technical and usage information</h2>
            <p className="mt-4">The website host, delivery network and security systems may process standard technical information needed to deliver and protect the site. This may include an IP address, browser or device type, requested URL, access time, referrer, and error or security logs.</p>
            <p className="mt-4">GrowthLabs does not currently operate user accounts, accept uploads or collect message content through this website. Technical logs are controlled in part by the hosting and infrastructure providers used to keep the site available and secure.</p>
          </section>

          <section id="how-information-is-used" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">4. How information may be used</h2>
            <p className="mt-4">Information you send directly may be used to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Respond to your enquiry through the channel you choose</li>
              <li>Understand your business needs and assess whether GrowthLabs is a suitable fit</li>
              <li>Prepare, discuss and manage appointments, proposals or agreed services</li>
              <li>Maintain necessary business and communication records</li>
              <li>Operate, secure and troubleshoot the website</li>
              <li>Meet applicable legal or regulatory obligations</li>
              <li>Prevent spam, fraud, misuse or security incidents</li>
            </ul>
            <p className="mt-4">GrowthLabs should not use information you provide for an unrelated purpose without an appropriate reason and notice.</p>
          </section>

          <section id="cookies-and-analytics" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">5. Cookies, analytics and advertising measurement</h2>
            <p className="mt-4">At the date shown above, GrowthLabs does not intentionally load analytics, advertising pixels, behavioural tracking tools or marketing cookies on this website. No cookie-consent banner is shown because those optional technologies are not active.</p>
            <p className="mt-4">The hosting or security provider may still use essential technical mechanisms needed to deliver and protect the site. If analytics, advertising measurement, preferences or another cookie-dependent feature is added later, this policy and any required consent controls will be updated before that feature is enabled.</p>
            <p className="mt-4">Message content, passwords and sensitive personal information will not knowingly be sent to analytics or advertising platforms.</p>
          </section>

          <section id="sharing-and-third-parties" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">6. When information may be shared</h2>
            <p className="mt-4">GrowthLabs may share limited information with service providers needed for website hosting, security, email, communication or agreed project delivery. Providers process information for their relevant service under their own terms, privacy notices and security practices, and some may process data outside Nepal.</p>
            <p className="mt-4">GrowthLabs may also disclose information where reasonably required to comply with law, protect rights or security, investigate misuse or respond to a valid legal request. GrowthLabs does not sell personal information.</p>
            <h3 className="mt-8 font-serif text-2xl text-[var(--ink)]">Third-party links and contact services</h3>
            <p className="mt-3">This website links to WhatsApp, LinkedIn and Google Maps and may open the email or telephone application on your device. Once you use an independent service, its own terms and privacy policy apply. GrowthLabs does not control how that provider processes information on its platform.</p>
          </section>

          <section id="retention-and-security" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">7. Retention and security</h2>
            <p className="mt-4">GrowthLabs keeps personal information only for as long as reasonably needed for the purpose it was collected, ongoing communication, agreed service delivery, security, record-keeping and applicable legal obligations. Retention may differ for enquiries, project records, invoices and technical logs. Information that is no longer needed should be deleted or anonymised where reasonably possible.</p>
            <p className="mt-4">Reasonable organisational and technical measures are used to protect information from unauthorised access, loss, misuse or alteration. No website, email, messaging service or internet transmission can be guaranteed completely secure. If you believe information sent to GrowthLabs has been compromised, email <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> promptly.</p>
          </section>

          <section id="your-choices" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">8. Your choices and requests</h2>
            <p className="mt-4">Depending on the information, circumstances and applicable law, you may ask GrowthLabs to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Confirm whether information about you is held</li>
              <li>Provide access to information you supplied</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete information that is no longer required</li>
              <li>Stop or limit certain uses or communications</li>
            </ul>
            <p className="mt-4">Send a request to <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. GrowthLabs may need to verify your identity and may retain information where continued storage is reasonably required or permitted.</p>
          </section>

          <section id="children-and-changes" className="scroll-mt-28">
            <h2 className="font-serif text-3xl text-[var(--ink)]">9. Children’s privacy and policy changes</h2>
            <p className="mt-4">This website and GrowthLabs services are intended for businesses and are not directed to children. Do not knowingly submit personal information about a child. If you believe a child has provided information, contact GrowthLabs so the situation can be reviewed.</p>
            <p className="mt-4">This policy may be updated when the website, contact methods, tracking tools, providers or legal requirements change. The latest version will appear here with a revised last-updated date. Material changes should be published before new forms, analytics, advertising trackers, user accounts or other data-processing features go live.</p>
          </section>

          <section id="privacy-contact" className="scroll-mt-28 border-t border-[var(--line)] pt-10">
            <h2 className="font-serif text-3xl text-[var(--ink)]">10. Contact GrowthLabs about privacy</h2>
            <address className="mt-5 grid gap-1 not-italic">
              <strong>{siteConfig.brandName}</strong>
              <span>Sallaghari Shopping Complex, Bhaktapur 44800, Nepal</span>
              <a className="text-link w-fit" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a className="text-link w-fit" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            </address>
          </section>
        </div>
      </div>
    </section>
    <PageStructuredData path="/privacy" />
  </>;
}
