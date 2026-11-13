import type { ReactNode } from "react";
export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return <div className="knowledge-page">{children}</div>;
}
