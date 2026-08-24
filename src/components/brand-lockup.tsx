import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

type BrandLockupProps = {
  className?: string;
  priority?: boolean;
  size?: "header" | "footer" | "card";
  tone?: "light" | "dark";
};

export function BrandLockup({ className = "", priority = false, size = "header", tone = "light" }: BrandLockupProps) {
  return <Link
    href="/"
    className={`wordmark wordmark-${size} wordmark-${tone} ${className}`.trim()}
    aria-label={`${siteConfig.brandName} — home`}
  >
    <span className="wordmark-avatar" aria-hidden="true"><Image
      src={siteConfig.brandAvatar}
      alt=""
      width={64}
      height={64}
      sizes={size === "footer" ? "56px" : size === "card" ? "52px" : "44px"}
      priority={priority}
    /></span>
    <span className="wordmark-copy"><strong>{siteConfig.name}</strong><small>by {siteConfig.fullName}</small></span>
  </Link>;
}
