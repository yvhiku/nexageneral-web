import { LINKEDIN_URL, STAYS_URL, type Product } from "@/lib/products";

export {
  NEXA_ENTITY_REGISTER,
  getEntityRegisterEntry,
  type NexaEntityId,
  type NexaEntityRole,
  type NexaEntityRegisterEntry,
  type NexaProductStatus,
} from "@/lib/entity-register";


/** Locked factual baseline — marketing may vary; facts must not. */
export const NEXA_ENTITY_DESCRIPTION =
  "Nexa is a Moroccan technology company building a connected ecosystem of specialized digital services for everyday life. The ecosystem includes Nexa Stays for accommodation, Nexa Go for rides, restaurant food delivery and local delivery, Nexa Pay for payments, Nexa Fresh for groceries, Nexa Market for commerce and Nexa Jobs for employment. Nexa is built in Morocco with a long-term ambition to expand across North Africa.";

export const NEXA_SITE_NAME = "Nexa";
export const NEXA_ORIGIN = "https://nexa.ma";
/** Prefer transparent PNG for crawlers; stable path — do not rotate. */
export const NEXA_LOGO = `${NEXA_ORIGIN}/icon-512.png`;
export const ORGANIZATION_ID = `${NEXA_ORIGIN}/#organization`;
export const WEBSITE_ID = `${NEXA_ORIGIN}/#website`;

/** Main chrome links — also used for SiteNavigationElement (sitelinks hint). */
export const NEXA_PRIMARY_NAV = [
  { name: "Products", path: "/products/" },
  { name: "Ecosystem", path: "/ecosystem/" },
  { name: "Insights", path: "/insights/" },
  { name: "Why Nexa", path: "/why-nexa/" },
  { name: "Roadmap", path: "/roadmap/" },
  { name: "About", path: "/about/" },
  { name: "Nexa Stays", path: "/stays/" },
] as const;

/** Single shared Organization — reuse everywhere; do not fork descriptions. */
export function getOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: NEXA_SITE_NAME,
    alternateName: ["Nexa Morocco", "Nexa Maroc", "نكسا"],
    url: NEXA_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: NEXA_LOGO,
      width: 512,
      height: 512,
    },
    image: NEXA_LOGO,
    description: NEXA_ENTITY_DESCRIPTION,
    foundingLocation: {
      "@type": "Place",
      name: "Morocco",
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    sameAs: [LINKEDIN_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${NEXA_ORIGIN}/contact/`,
      availableLanguage: ["English", "French", "Arabic"],
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: NEXA_SITE_NAME,
    alternateName: ["Nexa Morocco", "Nexa Maroc"],
    url: NEXA_ORIGIN,
    description: NEXA_ENTITY_DESCRIPTION,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: ["en", "fr", "ar"],
    hasPart: NEXA_PRIMARY_NAV.map((item, index) => ({
      "@type": "WebPage",
      "@id": `${NEXA_ORIGIN}${item.path}#webpage`,
      name: item.name,
      url: `${NEXA_ORIGIN}${item.path}`,
      position: index + 1,
      isPartOf: { "@id": WEBSITE_ID },
    })),
  };
}

export function getSiteNavigationJsonLd() {
  return {
    "@type": "ItemList",
    "@id": `${NEXA_ORIGIN}/#sitenav`,
    name: "Primary navigation",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: NEXA_PRIMARY_NAV.length,
    itemListElement: NEXA_PRIMARY_NAV.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: `${NEXA_ORIGIN}${item.path}`,
    })),
  };
}

export function getWebPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  inLanguage?: string;
}) {
  const path = opts.path.endsWith("/") ? opts.path : `${opts.path}/`;
  return {
    "@type": "WebPage",
    "@id": `${NEXA_ORIGIN}${path}#webpage`,
    url: `${NEXA_ORIGIN}${path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: opts.inLanguage ?? "en",
  };
}

export function getHomeJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationJsonLd(),
      getWebSiteJsonLd(),
      getSiteNavigationJsonLd(),
      getWebPageJsonLd({
        name: "Nexa Morocco — Connected Digital Services Ecosystem",
        description: NEXA_ENTITY_DESCRIPTION,
        path: "/",
        inLanguage: "en",
      }),
    ],
  };
}

/**
 * Honest Service schema for a Nexa product page.
 * Do not use SoftwareApplication / Offer for non-live products.
 */
export function getProductServiceJsonLd(opts: {
  product: Product;
  description: string;
  path: string;
  relatedSlugs?: string[];
}) {
  const path = opts.path.endsWith("/") ? opts.path : `${opts.path}/`;
  const serviceId = `${NEXA_ORIGIN}${path}#service`;
  const related = (opts.relatedSlugs ?? opts.product.connections).map(
    (slug) => ({
      "@type": "Service",
      "@id": `${NEXA_ORIGIN}/${slug}/#service`,
      name: `Nexa ${slug.charAt(0).toUpperCase()}${slug.slice(1)}`,
      url: `${NEXA_ORIGIN}/${slug}/`,
    }),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationJsonLd(),
      getWebPageJsonLd({
        name: opts.product.name,
        description: opts.description,
        path,
      }),
      {
        "@type": "Service",
        "@id": serviceId,
        name: opts.product.name,
        description: opts.description,
        url: `${NEXA_ORIGIN}${path}`,
        provider: { "@id": ORGANIZATION_ID },
        brand: { "@id": ORGANIZATION_ID },
        areaServed: {
          "@type": "Country",
          name: "Morocco",
        },
        category: opts.product.category,
        ...(related.length
          ? { isRelatedTo: related }
          : {}),
        ...(opts.product.slug === "stays"
          ? {
              sameAs: [STAYS_URL],
            }
          : {}),
      },
    ],
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${NEXA_ORIGIN}${item.path.endsWith("/") ? item.path : `${item.path}/`}`,
    })),
  };
}

export const NEXA_AT_A_GLANCE = {
  company: "Nexa",
  type: "Technology company",
  origin: "Morocco",
  primaryMarket: "Morocco",
  longTermMarket: "North Africa",
  firstProduct: "Nexa Stays",
  model: "Connected ecosystem of specialized digital services",
  ecosystem:
    "Nexa Stays, Nexa Go, Nexa Pay, Nexa Fresh, Nexa Market and Nexa Jobs",
  website: "nexa.ma",
  staysCommercial: "nexastays.ma",
  linkedin: LINKEDIN_URL,
} as const;

/** SEO H1 forms for product pages (brand line stays as subhead). */
export const productSeoH1: Record<string, string> = {
  stays: "Nexa Stays: Accommodation in Morocco",
  go: "Nexa Go Morocco: Rides, Food & Local Delivery",
  pay: "Nexa Pay Morocco: Digital Payments",
  fresh: "Nexa Fresh: Grocery Delivery in Morocco",
  market: "Nexa Market: Digital Marketplace in Morocco",
  jobs: "Nexa Jobs: Jobs & Recruitment in Morocco",
  maps: "Nexa Maps: Future Concept",
  cloud: "Nexa Cloud: Future Concept",
};

/** Short 40–80 word answer blocks for GEO extraction. */
export const productAnswerBlocks: Record<string, string> = {
  stays:
    "Nexa Stays is Nexa’s accommodation platform within the Nexa ecosystem in Morocco. It is being built to make short-term stays clearer and more structured for guests and hosts. Nexa Stays is the launch product of Nexa. The corporate product page is on nexa.ma; the commercial booking experience is at nexastays.ma.",
  go: "Nexa Go is a planned mobility and local-delivery service within the Nexa ecosystem in Morocco. It is being designed to support local rides, restaurant food delivery and general local delivery through one focused service. Grocery delivery belongs to Nexa Fresh, not Nexa Go.",
  pay: "Nexa Pay Morocco is planned as the payment layer for supported Nexa services and merchant experiences within the Nexa ecosystem. It is not a bank. Capabilities will be introduced progressively, subject to regulatory, operational and technical requirements in Morocco.",
  fresh:
    "Nexa Fresh is Nexa’s planned grocery-delivery service within the Nexa ecosystem in Morocco, focused on everyday essentials and household items. Restaurant food delivery belongs to Nexa Go. The two products are separate by design.",
  market:
    "Nexa Market is planned as Nexa’s digital marketplace within the Nexa ecosystem in Morocco, connecting customers and merchants. It is on the long-term roadmap and is not an active public marketplace today.",
  jobs: "Nexa Jobs is planned as Nexa’s careers platform within the Nexa ecosystem in Morocco, connecting candidates and employers. It is distinct from careers at the Nexa company itself (nexa.ma/careers).",
  maps: "Nexa Maps is a future concept within the Nexa ecosystem. It is not an active public product.",
  cloud:
    "Nexa Cloud represents a longer-term digital infrastructure direction for Nexa. It is not an active public product.",
};
