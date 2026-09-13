import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = "https://musewebstudio.com";
const DESCRIPTION = "Muse Web Studio is a Hargeisa, Somaliland-based creative web studio offering custom website design, website redesigns, website fixes and branding for small businesses, startups and personal brands worldwide.";
const BOOKING_URL = "https://calendar.app.google/M47RAvAPKgH2mDRE7";

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-foreground">404</h1><h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2><p className="mt-2 text-sm text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link></div></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn&apos;t load</h1><p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Try again</button><a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Go home</a></div></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Muse Web Studio" },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "Muse Web Studio, Hargeisa web design, Somaliland web design, custom website design, website redesign, website fixes, logo design, branding, small business websites" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Muse Web Studio | Custom Website Design in Hargeisa & Worldwide" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Muse Web Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Muse Web Studio | Custom Website Design in Hargeisa & Worldwide" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${SITE_URL}/#studio`, name: "Muse Web Studio", url: SITE_URL, description: DESCRIPTION, email: "hello@musewebstudio.com", founder: { "@type": "Person", name: "Naima", jobTitle: "Web Designer & Brand Designer" }, address: { "@type": "PostalAddress", addressLocality: "Hargeisa", addressRegion: "Woqooyi Galbeed", addressCountry: "SO" }, areaServed: [{ "@type": "City", name: "Hargeisa" }, { "@type": "Country", name: "Somaliland" }, { "@type": "Place", name: "Worldwide" }], sameAs: ["https://www.instagram.com/musewebstudio/", "https://www.facebook.com/musewebstudio"], hasOfferCatalog: { "@type": "OfferCatalog", name: "Muse Web Studio Services", itemListElement: ["Custom website design and development", "Website redesigns and refreshes", "Website fixes and improvements", "Logo and brand design", "Custom digital experiences"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) }, potentialAction: { "@type": "ReserveAction", target: BOOKING_URL } }) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
