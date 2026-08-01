import { Link } from "@tanstack/react-router";
import { EMAIL, FACEBOOK, INSTAGRAM, SERVICES } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-coffee text-coffee-foreground">
      <div className="mx-auto grid max-w-7xl items-end gap-8 px-6 py-10 md:grid-cols-2">
        <div>
          <p className="font-display text-[18vw] leading-[0.8] md:text-[11vw]">Muse</p>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-coffee-foreground/60">
            © 2026 Muse. All rights reserved.
          </p>
        </div>
        <div className="md:text-right">
          <h2 className="font-display text-2xl">Contact us</h2>
          <a href={`mailto:${EMAIL}`} className="mt-2 block text-sm">
            {EMAIL}
          </a>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-coffee-foreground/60">
            A remote studio in Hargeisa, working with clients worldwide
          </p>
          <div className="mt-2 flex gap-4 text-sm md:justify-end">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:underline">
              Instagram
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
          <nav
            aria-label="Footer"
            className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.16em] text-coffee-foreground/70 md:justify-end"
          >
            <Link to="/work" className="hover:underline">
              Portfolio
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="hover:underline"
              >
                {s.navTitle}
              </Link>
            ))}
            <Link to="/about" className="hover:underline">
              About Naima
            </Link>
            <Link to="/contact" className="hover:underline">
              Start a project
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
