export const SITE_URL = "https://musewebstudio.com";
export const EMAIL = "hello@musewebstudio.com";
export const CALENDAR = "https://calendar.app.google/M47RAvAPKgH2mDRE7";
export const INSTAGRAM = "https://www.instagram.com/musewebstudio/";
export const FACEBOOK = "https://www.facebook.com/musewebstudio";
export const VISION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRcec-Gcn2ZdkDfO6dTEtdjNN54-_ePwjadFpEeZJGQE8Fvw/viewform?usp=publish-editor";

export const GEO_SUMMARY =
  "Muse Web Studio is a Hargeisa, Somaliland-based creative web studio offering custom website design, website redesigns, website fixes and branding for small businesses, startups and personal brands worldwide.";

export function gmailCompose(subject = "Start my project with Muse") {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    "Hi Naima,\n\nHere is what I have in mind:\n\n- About my business:\n- What I need (website, redesign, fixes, branding):\n- Timeline:\n\nThanks!",
  )}`;
}

export const GMAIL_COMPOSE = gmailCompose();

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  tag: string;
  card: string;
  h1: string;
  intro: string;
  seoTitle: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  includes: { h: string; p: string }[];
  bestFor: string;
  relatedProjects: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-website-design",
    title: "Custom Website Design & Development",
    navTitle: "Custom Website Design",
    tag: "Typically 2 weeks",
    card: "A site built around your work, from structure and copy layout to the finished, fast, responsive build.",
    h1: "Custom website design for small businesses and personal brands",
    intro:
      "Every Muse website starts from your business rather than a template. I plan the structure, shape the copy layout, design the pages and build the whole thing responsive and fast — so the site reads like you and works everywhere.",
    seoTitle: "Custom Website Design & Development | Muse Web Studio",
    description:
      "Custom website design and development by a one-woman studio. Modern, responsive websites for small businesses, startups and personal brands, usually live in two weeks.",
    primaryKeyword: "custom website design",
    secondaryKeywords: [
      "website development",
      "small business website design",
      "modern website design",
      "responsive website design",
      "website designer for startups",
    ],
    includes: [
      { h: "Structure and content planning", p: "We map the pages and the order people read them in, so visitors understand what you do within seconds." },
      { h: "Design you shape early", p: "You see layout and typography before any build starts, and we adjust while changes are still cheap." },
      { h: "A responsive, fast build", p: "Hand-built pages tested across phones, tablets and desktops, with clean markup and quick load times." },
      { h: "SEO fundamentals at launch", p: "Titles, descriptions, headings, alt text, a sitemap and a robots file are set up before the site goes live." },
    ],
    bestFor:
      "Best for small businesses, startups, beauty brands, restaurants, real estate businesses and personal brands launching a first proper website.",
    relatedProjects: ["aura-aesthetics", "med-estate"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    navTitle: "Website Redesign",
    tag: "Typically 1 week",
    card: "Keep what works and rebuild the rest, with sharper typography, cleaner layout and better performance.",
    h1: "Website redesign that keeps what works and rebuilds the rest",
    intro:
      "If your site already brings people in but looks dated or converts poorly, a redesign is usually faster and cheaper than starting over. I keep the parts that earn their place and rebuild the layout, typography and performance around them.",
    seoTitle: "Website Redesign Services | Muse Web Studio",
    description:
      "Website redesign by a freelance web designer: sharper layout, modern typography, faster pages and better conversion — without losing the content that already works.",
    primaryKeyword: "website redesign",
    secondaryKeywords: ["redesign my website", "modern website design", "creative web design", "freelance web designer"],
    includes: [
      { h: "An honest review first", p: "I go through the current site and tell you what to keep, what to cut and what is quietly costing you enquiries." },
      { h: "A new layout and type system", p: "Cleaner hierarchy, better spacing and typography that makes the same content far easier to read." },
      { h: "Performance and mobile fixes", p: "Compressed images, lighter pages and a layout that behaves properly on small screens." },
      { h: "Search visibility protected", p: "Existing URLs and page titles are carried over or redirected, so a redesign does not undo your rankings." },
    ],
    bestFor: "Best for businesses with an older site that no longer matches the quality of their work.",
    relatedProjects: ["tech-support-for-everyone"],
  },
  {
    slug: "website-fixes",
    title: "Website Fixes & Improvements",
    navTitle: "Website Fixes",
    tag: "Small, scoped jobs",
    card: "Broken layouts, slow pages, mobile issues and small changes handled without rebuilding the whole site.",
    h1: "Website fixes and improvements, without a full rebuild",
    intro:
      "Sometimes a site does not need replacing — it needs the mobile layout to stop breaking, the pages to load faster, or a few sections rewritten. These are small, clearly scoped jobs with a price agreed before I start.",
    seoTitle: "Website Fixes & Improvements | Muse Web Studio",
    description:
      "Website fixes and improvements: mobile layout problems, slow pages, broken sections and small content changes, scoped and priced before any work starts.",
    primaryKeyword: "website fixes",
    secondaryKeywords: ["fix my website", "website speed improvements", "mobile responsive fixes", "freelance web designer for small businesses"],
    includes: [
      { h: "Layout and mobile repairs", p: "Sections that overlap, text that overflows and pages that only look right on a laptop." },
      { h: "Speed and image optimisation", p: "Oversized images, heavy scripts and slow first loads sorted out properly." },
      { h: "Content and section updates", p: "New services, updated pricing, fresh photos or a rewritten hero section." },
      { h: "Basic SEO clean-up", p: "Missing titles, duplicate descriptions, unnamed images and missing headings fixed at the source." },
    ],
    bestFor: "Best for owners who like their site overall but keep tripping over the same problems.",
    relatedProjects: ["tech-support-for-everyone"],
  },
  {
    slug: "branding-and-logo-design",
    title: "Branding & Logo Design",
    navTitle: "Branding & Logo",
    tag: "Typically 5 days",
    card: "A wordmark, palette and type system that stays consistent everywhere your business appears.",
    h1: "Branding and logo design for independent businesses",
    intro:
      "A logo on its own rarely solves the problem. What you need is a small, consistent set of decisions — a wordmark, a palette, a type system — that hold together on a website, an invoice and an Instagram post.",
    seoTitle: "Branding & Logo Design | Muse Web Studio",
    description:
      "Branding and logo design from a one-woman creative studio: wordmark, colour palette and type system delivered in about five days, on its own or alongside a website.",
    primaryKeyword: "branding and web design",
    secondaryKeywords: ["logo design", "brand identity design", "creative web design", "website designer for personal brands"],
    includes: [
      { h: "Wordmark and marks", p: "A primary wordmark plus the smaller variations you need for profile photos and favicons." },
      { h: "Colour palette", p: "A palette with defined roles, so the brand looks deliberate rather than accidental." },
      { h: "Type system", p: "Display and body pairings with sizes and weights already decided for you." },
      { h: "Simple usage notes", p: "A short guide so anyone helping you later keeps the brand consistent." },
    ],
    bestFor: "Best for new businesses, personal brands and studios rebranding before a website launch.",
    relatedProjects: ["aura-aesthetics"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  live: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  cardBlurb: string;
  seoTitle: string;
  description: string;
  primaryKeyword: string;
  goal: string;
  problem: string;
  solution: string;
  outcome: string;
  services: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "tech-support-for-everyone",
    title: "Tech Support For Everyone",
    category: "Client Work",
    industry: "IT support service, Silver Spring, Maryland",
    live: "https://techsupportforeveryone.com",
    image: "/media/tsfe-after.webp",
    imageAlt: "Tech Support For Everyone homepage after the Muse website redesign",
    imageWidth: 1400,
    imageHeight: 4905,
    cardBlurb: "A single-page IT support site rebuilt into a clear, bookable website with real service pages.",
    seoTitle: "Tech Support For Everyone Website Redesign | Muse Web Studio",
    description: "Website redesign case study: a one-page IT support site rebuilt into a clear, bookable website with service sections, mobile-first layout and SEO fundamentals.",
    primaryKeyword: "website redesign case study",
    goal: "Tobias needed local customers to understand exactly which services he offered and to book him without a phone call first.",
    problem: "The original site was a single scrolling page. Services blurred together, the layout struggled on phones, and there was no obvious next step for someone ready to book.",
    solution: "I restructured the content into distinct service sections with their own headings, rebuilt the layout mobile-first, and made booking the clear primary action on every screen. Titles, descriptions and headings were written so each service could be found in search.",
    outcome: "A site that reads clearly on a phone, explains the offer in seconds and gives every visitor an obvious way to book.",
    services: ["website-redesign", "website-fixes"],
  },
  {
    slug: "aura-aesthetics",
    title: "Aura Aesthetics",
    category: "Concept Project",
    industry: "Beauty and aesthetics clinic",
    live: "https://aura-seven-tan.vercel.app/",
    image: "/media/aura.webp",
    imageAlt: "Aura Aesthetics beauty clinic website concept designed by Muse Web Studio",
    imageWidth: 1400,
    imageHeight: 788,
    cardBlurb: "A calm, treatment-led concept site for a beauty clinic, built around booking and trust.",
    seoTitle: "Aura Aesthetics Beauty Brand Website Concept | Muse Web Studio",
    description: "A website design concept for a beauty and aesthetics clinic: treatment-led structure, calm editorial layout and a booking flow designed to convert first-time clients.",
    primaryKeyword: "website designer for beauty brands",
    goal: "Show how a beauty clinic can look premium online without hiding the practical details clients look for.",
    problem: "Clinic websites often lead with atmosphere and bury the treatments, prices and booking, so visitors leave before they find what they came for.",
    solution: "The concept keeps the editorial feel but puts treatments, expectations and booking in plain sight, with soft imagery supporting the content rather than competing with it.",
    outcome: "A template for how beauty and wellness brands can feel calm and still convert.",
    services: ["custom-website-design", "branding-and-logo-design"],
  },
  {
    slug: "med-estate",
    title: "Med Estate",
    category: "Concept Project",
    industry: "Real estate agency",
    live: "https://medi-estate.vercel.app/",
    image: "/media/medi.webp",
    imageAlt: "Med Estate real estate website concept designed by Muse Web Studio",
    imageWidth: 1400,
    imageHeight: 1000,
    cardBlurb: "A property listing concept where search, filtering and enquiry come before decoration.",
    seoTitle: "Med Estate Real Estate Website Concept | Muse Web Studio",
    description: "A real estate website design concept: fast property search, clear listing cards and a direct enquiry path, built for agencies that sell on detail.",
    primaryKeyword: "website designer for real estate businesses",
    goal: "Make browsing properties feel quick and calm rather than cluttered.",
    problem: "Agency sites tend to bury listings under sliders and pop-ups, and enquiring usually takes more clicks than it should.",
    solution: "Listings lead the page with readable cards, filtering stays visible, and every property has a direct enquiry route. Layout and image sizes are set so nothing shifts while the page loads.",
    outcome: "A structure real estate businesses can adopt without rebuilding their whole brand.",
    services: ["custom-website-design"],
  },
];

export const FAQS = [
  { q: "How long will my project take?", a: "Most websites launch in one to two weeks. A redesign is usually a week and a logo around five days, depending on how quickly feedback comes back." },
  { q: "What is included in a website project?", a: "Structure, copy layout, design, the full responsive build, SEO fundamentals and launch. You get a finished, live site, not a template you have to finish yourself." },
  { q: "Do you offer support after launch?", a: "Yes. Aftercare is optional and priced as a small monthly fee. If you would rather maintain the site yourself, I hand over everything you need." },
  { q: "How does pricing and payment work?", a: "Pricing is set out clearly before we begin, with a deposit to start and the balance on launch. No retainers you did not ask for, no surprise invoices." },
  { q: "Do we need to meet in person?", a: "No. Muse is a remote studio based in Hargeisa, Somaliland, working with clients internationally over calls, email and shared previews." },
  { q: "Can I get just a logo, without a full site?", a: "Absolutely. A wordmark, palette and type system can be delivered on its own, usually in about five days." },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function projectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#studio`,
  name: "Muse Web Studio",
  alternateName: "Muse",
  url: SITE_URL,
  email: EMAIL,
  description: GEO_SUMMARY,
  founder: {
    "@type": "Person",
    name: "Naima",
    jobTitle: "Web Designer & Brand Designer",
    worksFor: { "@id": `${SITE_URL}/#studio` },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hargeisa",
    addressRegion: "Woqooyi Galbeed",
    addressCountry: "SO",
  },
  areaServed: [
    { "@type": "City", name: "Hargeisa" },
    { "@type": "Country", name: "Somaliland" },
    { "@type": "Place", name: "Worldwide" },
  ],
  availableLanguage: ["en"],
  sameAs: [INSTAGRAM, FACEBOOK],
  knowsAbout: [
    "custom website design",
    "website development",
    "website redesign",
    "website fixes",
    "responsive web design",
    "brand identity design",
    "logo design",
    "small business websites",
    "web design for startups",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Muse Web Studio Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${SITE_URL}/services/${s.slug}`,
      },
    })),
  },
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      url: `${SITE_URL}/services/${s.slug}`,
    },
  })),
};

export const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Muse Web Studio website design and branding services",
  itemListElement: SERVICES.map((s, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      url: `${SITE_URL}/services/${s.slug}`,
      provider: { "@id": `${SITE_URL}/#studio` },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
  })),
};

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords?.length ? [{ name: "keywords", content: keywords.join(", ") }] : []),
      { name: "author", content: "Naima — Muse Web Studio" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: "Muse Web Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
