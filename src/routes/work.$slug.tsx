import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  breadcrumbLd,
  gmailCompose,
  pageMeta,
  projectBySlug,
  serviceBySlug,
  SITE_URL,
} from "@/lib/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const base = pageMeta({
      title: loaderData.seoTitle,
      description: loaderData.description,
      path: `/work/${params.slug}`,
      type: "article",
    });
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: "og:image", content: `${SITE_URL}${loaderData.image}` },
        { name: "twitter:image", content: `${SITE_URL}${loaderData.image}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: loaderData.title,
            url: `${SITE_URL}/work/${loaderData.slug}`,
            description: loaderData.description,
            about: loaderData.industry,
            image: `${SITE_URL}${loaderData.image}`,
            creator: { "@id": `${SITE_URL}/#studio` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: loaderData.title, path: `/work/${loaderData.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const p = Route.useLoaderData();

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
          <Link to="/work" className="hover:underline">
            Work
          </Link>{" "}
          / {p.title}
        </nav>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{p.title}</h1>
        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          {p.category} · {p.industry}
        </p>

        <div className="mt-8 max-h-[30rem] overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={p.image}
            alt={p.imageAlt}
            width={p.imageWidth}
            height={p.imageHeight}
            loading="lazy"
            decoding="async"
            className="w-full object-cover object-top"
          />
        </div>

        <section className="mt-10">
          <h2 className="font-display text-3xl">The goal</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.goal}</p>
        </section>
        <section className="mt-8">
          <h2 className="font-display text-3xl">The problem</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>
        </section>
        <section className="mt-8">
          <h2 className="font-display text-3xl">The solution</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.solution}</p>
        </section>
        <section className="mt-8">
          <h2 className="font-display text-3xl">The result</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.outcome}</p>
          <p className="mt-4">
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] uppercase tracking-[0.16em] text-accent underline-offset-4 hover:underline"
            >
              View live project →
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">Services used</h2>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            {p.services.map((slug) => {
              const s = serviceBySlug(slug);
              if (!s) return null;
              return (
                <li key={slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug }}
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-12 rounded-lg bg-coffee p-8 text-coffee-foreground">
          <h2 className="font-display text-3xl">Want something like this?</h2>
          <p className="mt-3 text-sm leading-relaxed text-coffee-foreground/80">
            Tell me about your business and I will come back with a plan, a price and a timeline.
          </p>
          <a
            href={gmailCompose("Start my project with Muse")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.16em] text-accent-foreground"
          >
            Start your project
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
