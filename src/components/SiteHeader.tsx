import { Link } from "@tanstack/react-router";
import { GMAIL_COMPOSE } from "@/lib/site";

const NAV = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const overlay = variant === "overlay";

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-40"
          : "relative z-40 border-b border-border bg-background"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          aria-label="Muse Web Studio home"
          className={`font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl ${
            overlay ? "text-coffee-foreground" : "text-foreground"
          }`}
        >
          Muse
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                overlay
                  ? "text-coffee-foreground/85 hover:text-coffee-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
            overlay
              ? "border border-coffee-foreground/40 text-coffee-foreground hover:bg-coffee-foreground hover:text-coffee"
              : "bg-coffee text-coffee-foreground hover:opacity-90"
          }`}
        >
          Start your vision
        </a>
      </div>
    </header>
  );
}
