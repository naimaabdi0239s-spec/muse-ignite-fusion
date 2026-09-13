import { createFileRoute, Link } from "@tanstack/react-router";
import { geoMarket } from "@/lib/geo";
import { FAQS, ORGANIZATION_LD, SITE_URL, pageMeta } from "@/lib/site";

const MARKET_FAQ = (name: string) => [
  { q: `Does Muse Web Studio work with clients in ${name}?`, a: `Yes. Muse Web Studio is a remote creative web studio serving clients in ${name} and internationally. Projects are handled remotely through calls, email and shared previews.` },
  { q: `What website services does Muse offer in ${name}?`, a: `Muse offers custom website design and development, website redesigns, website fixes, landing pages, responsive builds and branding for small businesses, startups and personal brands.` },
  { q: `Is Muse a local web design agency in ${name}?`, a: `Muse is based in Hargeisa, Somaliland and works remotely with businesses worldwide. This page is specifically for clients searching for a web designer or web design studio serving ${name}.` },
];

export const Route = createFileRoute("/geo/$slug")({
  head: ({ params }) => {
    const market = geoMarket(params.slug);
    if (!market) return {};
    const title = `Web Design in ${market.name} | Muse Web Studio`;
    const description = `Muse Web Studio provides custom website design, redesigns, website fixes and branding for businesses in ${market.name}. Remote, responsive and built around your brand.`;
    return {
      ...pageMeta({ title, description, path: `/geo/${market.slug}`, keywords: [...market.keywords, "custom website design", "website redesign", "small business web design"] }),
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ ...ORGANIZATION_LD, areaServed: [{ "@type": "Country", name: market.name, identifier: market.countryCode }, { "@type": "Place", name: "Worldwide" }] }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: `Web Design Services in ${market.name}`, serviceType: "Web Design", provider: { "@id": `${SITE_URL}/#studio` }, areaServed: { "@type": "Country", name: market.name, identifier: market.countryCode }, url: `${SITE_URL}/geo/${market.slug}` }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: MARKET_FAQ(market.name).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) },
      ],
    };
  },
  component: GeoPage,
});

function GeoPage() {
  const { slug } = Route.useParams();
  const market = geoMarket(slug);
  if (!market) return <main className="mx-auto max-w-3xl px-6 py-24"><h1 className="font-display text-5xl">Market not found</h1><Link to="/" className="mt-6 inline-block underline">Back to Muse</Link></main>;

  const faqs = MARKET_FAQ(market.name);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-5"><div className="mx-auto flex max-w-6xl items-center justify-between"><Link to="/" className="font-display text-3xl">Muse</Link><Link to="/" className="text-xs uppercase tracking-[0.16em] underline underline-offset-4">Muse Web Studio</Link></div></header>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">Remote web design · {market.adjective}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Custom web design for businesses in {market.name}.</h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">Muse Web Studio is a one-woman creative web studio based in Hargeisa, Somaliland, working remotely with businesses in {market.name} and around the world. I design websites that feel considered, load quickly and make it clear what your business does.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="https://calendar.app.google/M47RAvAPKgH2mDRE7" target="_blank" rel="noreferrer" className="rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-primary-foreground">Book a discovery call</a><Link to="/services/$slug" params={{ slug: "custom-website-design" }} className="rounded-full border border-border px-7 py-3.5 text-xs uppercase tracking-[0.16em]">See website service</Link></div>
      </section>
      <section className="bg-secondary/40 py-20"><div className="mx-auto max-w-6xl px-6"><p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">What Muse can build</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">A proper website, not another template.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{["Custom website design & development", "Website redesigns & fixes", "Branding, landing pages & digital experiences"].map((x)=><article key={x} className="rounded-lg border border-border bg-card p-7"><h3 className="font-display text-2xl">{x}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Built around your business, responsive across devices and structured with SEO fundamentals from the start.</p></article>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-6 py-20"><h2 className="font-display text-4xl sm:text-5xl">Why businesses choose Muse.</h2><div className="mt-10 grid gap-5 sm:grid-cols-2"><article className="rounded-lg bg-coffee p-8"><h3 className="font-display text-2xl text-coffee-foreground">One person, one point of contact</h3><p className="mt-3 text-sm leading-relaxed text-coffee-foreground/80">You work directly with the designer and developer behind the project.</p></article><article className="rounded-lg bg-coffee p-8"><h3 className="font-display text-2xl text-coffee-foreground">Designed for your business</h3><p className="mt-3 text-sm leading-relaxed text-coffee-foreground/80">The structure, typography and visual direction are shaped around your brand instead of forcing you into a preset layout.</p></article><article className="rounded-lg bg-coffee p-8"><h3 className="font-display text-2xl text-coffee-foreground">Remote and international</h3><p className="mt-3 text-sm leading-relaxed text-coffee-foreground/80">Calls, email and shared previews make the process straightforward from {market.name} or anywhere else.</p></article><article className="rounded-lg bg-coffee p-8"><h3 className="font-display text-2xl text-coffee-foreground">SEO-ready foundations</h3><p className="mt-3 text-sm leading-relaxed text-coffee-foreground/80">Clean structure, metadata, headings, image alt text, sitemap and robots setup are part of the launch process.</p></article></div></section>
      <section className="bg-secondary/40 py-20"><div className="mx-auto max-w-3xl px-6"><h2 className="font-display text-4xl sm:text-5xl">Questions about working with Muse?</h2><div className="mt-8 space-y-5">{faqs.map((f)=><details key={f.q} className="rounded-lg border border-border bg-card p-5"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div></div></section>
      <footer className="mx-auto max-w-6xl px-6 py-12"><p className="text-sm text-muted-foreground">Muse Web Studio · Hargeisa, Somaliland · Serving clients in {market.name} and worldwide.</p><Link to="/" className="mt-3 inline-block text-sm underline underline-offset-4">Visit the main Muse website</Link></footer>
    </main>
  );
}
