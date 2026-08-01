import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  breadcrumbLd,
  CALENDAR,
  EMAIL,
  FACEBOOK,
  GMAIL_COMPOSE,
  INSTAGRAM,
  pageMeta,
  SERVICES,
  VISION_FORM,
} from "@/lib/site";

const TITLE = "Contact Muse Web Studio — Start Your Website Project";
const DESCRIPTION =
  "Start a website design, redesign or branding project with Muse. Email hello@musewebstudio.com, submit your vision or book a call — remote work, clients worldwide.";

export const Route = createFileRoute("/contact")({
  head: () => {
    const base = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/contact" });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        },
      ],
    };
  },
  component: Contact,
});

function Contact() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <nav
          aria-label="Breadcrumb"
          className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / Contact
        </nav>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Start your website project with Muse
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Tell me what you are building and I will come back with a clear plan, a price and a
          timeline. Muse works remotely with clients internationally, so wherever you are is fine.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-accent-foreground"
          >
            Start your project
          </a>
          <a
            href={VISION_FORM}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-coffee px-6 py-3 text-xs uppercase tracking-[0.16em] text-coffee-foreground"
          >
            Submit your vision
          </a>
          <a
            href={CALENDAR}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.16em]"
          >
            Book a call
          </a>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-3xl">Ways to reach me</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              Email:{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent underline-offset-4 hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                @musewebstudio
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                musewebstudio
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">What would you like to start with?</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {s.title}
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
