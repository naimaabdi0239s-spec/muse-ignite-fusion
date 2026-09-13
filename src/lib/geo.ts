export const GEO_MARKETS = [
  { slug: "usa", name: "United States", adjective: "US", countryCode: "US", keywords: ["web design USA", "web designer USA", "website designer for small businesses USA"] },
  { slug: "uk", name: "United Kingdom", adjective: "UK", countryCode: "GB", keywords: ["web design UK", "web designer UK", "website designer for small businesses UK"] },
  { slug: "uae", name: "United Arab Emirates", adjective: "UAE", countryCode: "AE", keywords: ["web design UAE", "web designer UAE", "website designer Dubai", "website designer Abu Dhabi"] },
  { slug: "canada", name: "Canada", adjective: "Canadian", countryCode: "CA", keywords: ["web design Canada", "web designer Canada", "website designer for small businesses Canada"] },
  { slug: "australia", name: "Australia", adjective: "Australian", countryCode: "AU", keywords: ["web design Australia", "web designer Australia", "website designer for small businesses Australia"] },
  { slug: "ireland", name: "Ireland", adjective: "Irish", countryCode: "IE", keywords: ["web design Ireland", "web designer Ireland", "website designer for small businesses Ireland"] },
  { slug: "new-zealand", name: "New Zealand", adjective: "New Zealand", countryCode: "NZ", keywords: ["web design New Zealand", "web designer New Zealand", "website designer for small businesses New Zealand"] },
  { slug: "singapore", name: "Singapore", adjective: "Singapore", countryCode: "SG", keywords: ["web design Singapore", "web designer Singapore", "website designer for small businesses Singapore"] },
  { slug: "saudi-arabia", name: "Saudi Arabia", adjective: "Saudi", countryCode: "SA", keywords: ["web design Saudi Arabia", "web designer Saudi Arabia", "website designer Riyadh"] },
  { slug: "qatar", name: "Qatar", adjective: "Qatari", countryCode: "QA", keywords: ["web design Qatar", "web designer Qatar", "website designer Doha"] },
  { slug: "kuwait", name: "Kuwait", adjective: "Kuwaiti", countryCode: "KW", keywords: ["web design Kuwait", "web designer Kuwait", "website designer Kuwait City"] },
  { slug: "netherlands", name: "Netherlands", adjective: "Dutch", countryCode: "NL", keywords: ["web design Netherlands", "web designer Netherlands", "website designer for small businesses Netherlands"] },
  { slug: "germany", name: "Germany", adjective: "German", countryCode: "DE", keywords: ["web design Germany", "web designer Germany", "website designer for small businesses Germany"] },
  { slug: "switzerland", name: "Switzerland", adjective: "Swiss", countryCode: "CH", keywords: ["web design Switzerland", "web designer Switzerland", "website designer for small businesses Switzerland"] },
] as const;

export const GEO_SERVICE_LIST = [
  "Custom website design and development",
  "Website redesigns and refreshes",
  "Website fixes and performance improvements",
  "Landing pages and conversion-focused websites",
  "Logo and brand identity design",
  "Responsive mobile-first web design",
  "SEO-ready website structure",
];

export function geoMarket(slug: string) {
  return GEO_MARKETS.find((market) => market.slug === slug);
}

export function geoMarketLd(market: (typeof GEO_MARKETS)[number]) {
  return {
    "@type": "Country",
    name: market.name,
    identifier: market.countryCode,
  };
}
