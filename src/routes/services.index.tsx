import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { breadcrumbLd, pageMeta, PROJECTS, SERVICES, SITE_URL, VISION_FORM } from "@/lib/site";

const TITLE = "Web Design Services: Custom Sites, Redesigns & Branding | Muse";
const DESCRIPTION =
  "Website design services from a one-woman studio: custom website design, website redesigns, website fixes and brand identity — built remotely for clients worldwide.";

export const Route = createFileRoute("/services/")({
  head: () => {
    const base = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/services" });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Muse Web Studio services",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE_URL}/services/${s.slug}`,
            })),
          }),
        },
      ],
    };
  },
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <nav aria-label="Breadcrumb" className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / Services
        </nav>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Website design, redesign and branding services
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Muse is a one-woman creative studio. I design and build custom websites, redesign sites
          that have fallen behind, fix the parts that are quietly costing you enquiries, and create
          brand identities that hold together everywhere. Everything runs remotely, so where you are
          based is never the problem.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="rounded-lg border border-border border-l-4 border-l-maroon bg-card p-7"
            >
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.card}</p>
              <span className="mt-5 inline-block rounded-full bg-secondary px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-secondary-foreground">
                {s.tag}
              </span>
              <p className="mt-5">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-[0.68rem] uppercase tracking-[0.16em] text-accent underline-offset-4 hover:underline"
                >
                  More on {s.navTitle.toLowerCase()} →
                </Link>
              </p>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-3xl sm:text-4xl">Recent work</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            See how these services look in practice across{" "}
            <Link to="/work" className="text-accent underline-offset-4 hover:underline">
              the Muse portfolio
            </Link>
            .
          </p>
          <ul className="mt-5 flex flex-wrap gap-4 text-sm">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-lg bg-coffee p-10 text-coffee-foreground">
          <h2 className="font-display text-3xl">Not sure which one you need?</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-coffee-foreground/80">
            Tell me what you are building and I will come back with a clear plan, a price and a
            timeline.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={VISION_FORM}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.16em] text-accent-foreground"
            >
              Submit your vision
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-coffee-foreground/45 px-6 py-3 text-xs uppercase tracking-[0.16em]"
            >
              Start your project
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
