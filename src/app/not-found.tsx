import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return <section className="shell not-found-page"><div className="offline-card"><p className="eyebrow">Error 404</p><h1>Find the right page.</h1><p>The link may be outdated or the page may have moved. Explore our services, practical marketing guides and free tools below.</p><div className="offline-actions"><Link className="button button-primary" href="/services">Explore services <Arrow /></Link><Link className="button" href="/insights">Read our guides <Arrow /></Link><Link className="button" href="/tools">Use a free tool <Arrow /></Link></div><Link className="knowledge-secondary-link mx-auto" href="/">Return to the homepage <Arrow /></Link></div></section>;
}
