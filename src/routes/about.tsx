import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { breadcrumbLd, CALENDAR, pageMeta, SITE_URL, VISION_FORM } from "@/lib/site";

const TITLE = "About Naima — Freelance Web Designer Behind Muse | Muse Web Studio";
const DESCRIPTION =
  "Muse is a one-woman creative studio run by Naima, a freelance web designer and brand designer working remotely with small businesses and personal brands worldwide.";

export const Route = createFileRoute("/about")({
  head: () => {
    const base = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/about" });
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: "og:image", content: `${SITE_URL}/media/aboutus.webp` },
        { name: "twitter:image", content: `${SITE_URL}/media/aboutus.webp` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Naima",
            jobTitle: "Freelance Web Designer & Brand Designer",
            url: `${SITE_URL}/about`,
            image: `${SITE_URL}/media/aboutus.webp`,
            worksFor: { "@id": `${SITE_URL}/#studio` },
            knowsAbout: [
              "custom website design",
              "website redesign",
              "brand identity design",
              "responsive web design",
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        },
      ],
    };
  },
  component: About,
});

function About() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="mx-auto max-w-6xl px-6 py-14">
        <nav
          aria-label="Breadcrumb"
          className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / About
        </nav>
        <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl">
              Meet the founder behind Muse
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Hi, I&apos;m Naima 👋🏽</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The designer, developer, strategist, and creative mind behind Muse — a one-woman
              creative studio working remotely with clients wherever they are.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I&apos;m obsessed with the little things that make a brand feel right — the perfect
              typeface, the colour that changes the whole mood, the tiny interaction you didn&apos;t
              know you needed.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Muse is my way of bringing all of that together. I create with intention, curiosity,
              and a genuine love for making things that feel beautiful, memorable, and uniquely
              yours.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I&apos;m not here to build you another website. I&apos;m here to build{" "}
              <em className="italic">your</em> website.
            </p>
            <p className="mt-4 font-display text-3xl italic">Your vision, my mission.</p>
            <a
              href={VISION_FORM}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee px-6 py-3 text-xs uppercase tracking-[0.16em] text-coffee-foreground transition-opacity hover:opacity-90"
            >
              Submit your vision <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-lg overflow-hidden rounded-xl border border-maroon/20 bg-card">
              <img
                src="/media/aboutus.webp"
                alt="Naima reviewing brand work on a phone beside an iMac showing a colour-system layout"
                width={1400}
                height={2100}
                loading="lazy"
                decoding="async"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-3xl">How I work</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <article className="rounded-lg border border-border border-l-4 border-l-maroon bg-card p-6">
              <h3 className="font-display text-xl">One person, start to finish</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Strategy, design and the build are all mine, so nothing gets lost in a handover.
              </p>
            </article>
            <article className="rounded-lg border border-border border-l-4 border-l-maroon bg-card p-6">
              <h3 className="font-display text-xl">Remote, internationally</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Muse is based in Hargeisa, Somaliland and works with clients across time zones over
                calls, email and shared previews.
              </p>
            </article>
            <article className="rounded-lg border border-border border-l-4 border-l-maroon bg-card p-6">
              <h3 className="font-display text-xl">Made for you, not a template</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every site is designed around your business, your words and the people you want to
                reach.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl">Work with me</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Have a look at{" "}
            <Link to="/services" className="text-accent underline-offset-4 hover:underline">
              what I offer
            </Link>
            , browse{" "}
            <Link to="/work" className="text-accent underline-offset-4 hover:underline">
              recent projects
            </Link>
            , or{" "}
            <Link to="/contact" className="text-accent underline-offset-4 hover:underline">
              get in touch
            </Link>{" "}
            when you are ready.
          </p>
          <a
            href={CALENDAR}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.16em]"
          >
            Book a call
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
