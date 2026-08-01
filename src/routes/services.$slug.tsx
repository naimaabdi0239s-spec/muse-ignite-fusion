import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  breadcrumbLd,
  CALENDAR,
  gmailCompose,
  pageMeta,
  projectBySlug,
  serviceBySlug,
  SERVICES,
  SITE_URL,
} from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const base = pageMeta({
      title: loaderData.seoTitle,
      description: loaderData.description,
      path: `/services/${params.slug}`,
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.title,
            serviceType: loaderData.primaryKeyword,
            url: `${SITE_URL}/services/${loaderData.slug}`,
            description: loaderData.description,
            provider: { "@id": `${SITE_URL}/#studio` },
            areaServed: { "@type": "Place", name: "Worldwide" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: `${SITE_URL}/contact`,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: loaderData.navTitle, path: `/services/${loaderData.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const s = Route.useLoaderData();
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <SiteHeader variant="solid" />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <nav
          aria-label="Breadcrumb"
          className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/services" className="hover:underline">
            Services
          </Link>{" "}
          / {s.navTitle}
        </nav>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{s.h1}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
        <span className="mt-5 inline-block rounded-full bg-secondary px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-secondary-foreground">
          {s.tag}
        </span>

        <section className="mt-12">
          <h2 className="font-display text-3xl">What is included</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {s.includes.map((i: { h: string; p: string }) => (
              <article
                key={i.h}
                className="rounded-lg border border-border border-l-4 border-l-maroon bg-card p-6"
              >
                <h3 className="font-display text-xl">{i.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.p}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">Who this is for</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.bestFor}</p>
        </section>

        {s.relatedProjects.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-3xl">Related work</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {s.relatedProjects.map((slug: string) => {
                const p = projectBySlug(slug);
                if (!p) return null;
                return (
                  <li key={slug}>
                    <Link
                      to="/work/$slug"
                      params={{ slug }}
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {p.title} — {p.industry}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-lg bg-coffee p-8 text-coffee-foreground">
          <h2 className="font-display text-3xl">Let&apos;s work together</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-coffee-foreground/80">
            Send over what you have in mind and I will reply with a plan, a price and a timeline.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={gmailCompose(`${s.navTitle} enquiry for Muse`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.16em] text-accent-foreground"
            >
              Start your project
            </a>
            <a
              href={CALENDAR}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-coffee-foreground/45 px-6 py-3 text-xs uppercase tracking-[0.16em]"
            >
              Book a call
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Other services</h2>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
