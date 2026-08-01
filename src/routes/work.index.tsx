import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { breadcrumbLd, pageMeta, PROJECTS, SITE_URL } from "@/lib/site";

const TITLE = "Web Design Portfolio & Case Studies | Muse Web Studio";
const DESCRIPTION =
  "Website design portfolio from Muse Web Studio: a redesigned IT support site, a beauty brand concept and a real estate concept, each with the goal, problem and solution.";

export const Route = createFileRoute("/work/")({
  head: () => {
    const base = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/work" });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: TITLE,
            url: `${SITE_URL}/work`,
            hasPart: PROJECTS.map((p) => ({
              "@type": "CreativeWork",
              name: p.title,
              url: `${SITE_URL}/work/${p.slug}`,
              about: p.industry,
            })),
          }),
        },
      ],
    };
  },
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <nav
          aria-label="Breadcrumb"
          className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / Work
        </nav>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Web design portfolio and case studies
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Client work and concept projects, each written up around what the business needed, what
          was getting in the way and how the design solved it.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <Link to="/work/$slug" params={{ slug: p.slug }} className="block">
                <div className="h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width={p.imageWidth}
                    height={p.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-5 py-4">
                  <h2 className="font-display text-xl">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.cardBlurb}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-secondary-foreground">
                    {p.category}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Want something similar?{" "}
          <Link to="/services" className="text-accent underline-offset-4 hover:underline">
            See the web design services
          </Link>{" "}
          or{" "}
          <Link to="/contact" className="text-accent underline-offset-4 hover:underline">
            start your project
          </Link>
          .
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
