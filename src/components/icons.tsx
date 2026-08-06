export function Arrow({ direction = "right" }: { direction?: "right" | "up-right" }) {
  return <span aria-hidden="true">{direction === "up-right" ? "↗" : "→"}</span>;
}

export function MenuIcon({ open }: { open: boolean }) {
  return <span aria-hidden="true" className="text-xl leading-none">{open ? "×" : "≡"}</span>;
}
