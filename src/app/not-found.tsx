import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return <section className="shell grid min-h-[70svh] content-center py-20"><p className="eyebrow">Error 404</p><h1 className="page-title mt-6">This page left no forwarding address.</h1><p className="lede mt-7">The link may be outdated, or the page may have moved.</p><Link className="button button-primary mt-9 w-fit" href="/">Return home <Arrow /></Link></section>;
}
