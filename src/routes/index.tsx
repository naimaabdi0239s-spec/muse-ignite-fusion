import { createFileRoute } from "@tanstack/react-router";
import { WordCycle } from "@/components/WordCycle";
import { Testimonials } from "@/components/Testimonials";
import { Faqs } from "@/components/Faqs";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { breadcrumbLd, FAQS, ORGANIZATION_LD, pageMeta, SITE_URL } from "@/lib/site";

const HERO_VIDEO = "/hero-video.mp4";
const EMAIL = "hello@musewebstudio.com";
const CALENDAR = "https://calendar.app.google/Gz61Voaay6zF1wte8";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL,
)}&su=${encodeURIComponent("Start my project with Muse")}&body=${encodeURIComponent(
  "Hi Naima,\n\nHere is what I have in mind:\n\n- About my business:\n- What I need (website, refresh, branding):\n- Timeline:\n\nThanks!",
)}`;

export const Route = createFileRoute("/")({
  head: () => {
    const base = pageMeta({
      title: "Muse Web Studio | Custom Website Design & Branding",
      description:
        "Muse is a one-woman creative studio offering custom website design, website redesigns, fixes and branding. Modern, responsive sites for small businesses worldwide.",
      path: "/",
    });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(ORGANIZATION_LD) },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Muse Web Studio",
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#studio` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbLd([{ name: "Home", path: "/" }])),
        },
      ],
    };
  },
  component: Index,
});

const SERVICES = [
  {
    title: "Website Design & Development",
    body: "A site built around your work, from structure and copy layout to the finished, fast, responsive build.",
    tag: "Typically 2 weeks",
  },
  {
    title: "Website Refresh",
    body: "Keep what works and rebuild the rest, with sharper typography, cleaner layout and better performance.",
    tag: "Typically 1 week",
  },
  {
    title: "Logo & Brand Design",
    body: "A wordmark, palette and type system that stays consistent everywhere your business appears.",
    tag: "Typically 5 days",
  },
];

const REASONS = [
  {
    title: "Fair, transparent pricing",
    body: "Rates are set out clearly before we begin, with no retainers you did not ask for and no invoices that arrive as a surprise.",
  },
  {
    title: "Built to be found",
    body: "Every site ships with clean structure, fast load times and proper SEO fundamentals, so the people looking for you can actually find you.",
  },
  {
    title: "Fast turnaround, done properly",
    body: "Most projects launch within one to two weeks. The pace comes from a tight process, never from skipping the detail.",
  },
  {
    title: "Optional aftercare, priced fairly",
    body: "If you would like ongoing support we charge a small monthly fee. If you would rather maintain the site yourself, that is completely fine.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conversation",
    body: "We talk through your business, your goals and what the site needs to do.",
  },
  {
    n: "02",
    title: "Design",
    body: "You see the layout and typography early, and shape it with us before any build begins.",
  },
  { n: "03", title: "Build", body: "The site is built responsive, fast and tested across devices." },
  {
    n: "04",
    title: "Launch",
    body: "We hand over a live site, plus everything you need to keep it running.",
  },
];

function Index() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
          <div className="max-w-xl text-left">
            <p className="text-[0.7rem] uppercase tracking-[0.34em] text-coffee-foreground/80">
              a creative studio.
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-coffee-foreground sm:text-7xl">
              Your vision. Our <em className="italic">muse</em>.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-coffee-foreground/85 sm:text-base">
              We craft websites, brands, and digital experiences with warmth, care, and a considered
              editorial hand — made to feel like you, not a template.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={GMAIL_COMPOSE}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-accent-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-95"
              >
                Start your project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={CALENDAR}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-coffee-foreground/45 px-6 py-3 text-xs uppercase tracking-[0.16em] text-coffee-foreground transition-colors hover:bg-coffee-foreground/10"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">What we do</p>
        <h2 className="mt-3 max-w-lg font-display text-4xl leading-tight sm:text-5xl">
          Design with intention.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-lg border border-border border-l-4 border-l-maroon bg-card p-7"
            >
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="mt-5 inline-block rounded-full bg-secondary px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-secondary-foreground">
                {s.tag}
              </span>
            </article>
          ))}
        </div>
      </section>

      <WordCycle />

      {/* Featured project */}
      <section id="work" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
            Featured project
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tech Support For Everyone</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A full redesign of a Silver Spring tech support service, rebuilt from a plain single
            page into a clear, bookable website.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                label: "Before",
                href: "https://techsupportforeveryone.pages.dev",
                src: "/media/tsfe-before.webp",
                alt: "Before version of the Tech Support For Everyone website",
              },
              {
                label: "After",
                href: "https://techsupportforeveryone.com",
                src: "/media/tsfe-after.webp",
                alt: "After version of the Tech Support For Everyone website",
              },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.label}
                  </span>
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Visit
                  </span>
                </div>
                <div className="h-[26rem] overflow-hidden bg-ink">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="auto-pan-down block w-full"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="https://techsupportforeveryone.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.16em] text-accent underline-offset-4 hover:underline"
            >
              View live project
            </a>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
          Our projects
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Selected work.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a
            href="https://techsupportforeveryone.com"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/media/tsfe-after.webp"
                alt="Tech Support For Everyone website"
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <h3 className="font-display text-xl">Tech Support For Everyone</h3>
              <span className="rounded-full bg-secondary px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-secondary-foreground">
                Client Work
              </span>
            </div>
          </a>
          <a
            href="https://aura-seven-tan.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/media/aura.webp"
                alt="Aura Aesthetics website"
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <h3 className="font-display text-xl">Aura Aesthetics</h3>
              <span className="rounded-full bg-secondary px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-secondary-foreground">
                Concept Project
              </span>
            </div>
          </a>
          <a
            href="https://medi-estate.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="h-56 overflow-hidden">
              <img
                src="/media/medi.webp"
                alt="Med Estate website"
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center justify-between px-5 pt-4">
              <h3 className="font-display text-xl">Med Estate</h3>
              <span className="rounded-full bg-secondary px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-secondary-foreground">
                Concept Project
              </span>
            </div>
            <p className="px-5 pb-4 pt-2 text-[0.68rem] uppercase tracking-[0.16em] text-accent underline-offset-4 group-hover:underline">
              View live project
            </p>
          </a>
        </div>
      </section>

      {/* About us */}
      <section id="about" className="bg-secondary/40 py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Meet the Founder</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Hi, I&apos;m Naima 👋🏽
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              The designer, developer, strategist, and creative mind behind Muse.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              I&apos;m obsessed with the little things that make a brand feel right — the perfect
              typeface, the colour that changes the whole mood, the tiny interaction you didn&apos;t
              know you needed.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Muse is my way of bringing all of that together. I create with intention, curiosity,
              and a genuine love for making things that feel beautiful, memorable, and uniquely
              yours.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              I&apos;m not here to build you another website. I&apos;m here to build{" "}
              <em className="italic">your</em> website.
            </p>
            <p className="mt-4 font-display text-3xl italic">Your vision, my mission.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRcec-Gcn2ZdkDfO6dTEtdjNN54-_ePwjadFpEeZJGQE8Fvw/viewform?usp=publish-editor"
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
                alt="Designer reviewing brand work on a phone beside an iMac showing a color-system layout"
                loading="lazy"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
          Why choose us
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Reasons clients stay.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {REASONS.map((r) => (
            <article key={r.title} className="rounded-lg bg-coffee p-8">
              <h3 className="font-display text-2xl text-coffee-foreground">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-coffee-foreground/80">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Four steps, no guesswork.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-border pt-5">
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <h3 className="mt-2 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Faqs />

      {/* Contact */}
      <section id="contact" className="bg-ink py-12 text-coffee-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Have a vision in mind?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-coffee-foreground/80">
            Tell us what you are building and we will come back with a clear plan, a price and a
            timeline.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={CALENDAR}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-coffee-foreground/45 px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-coffee-foreground/10"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
