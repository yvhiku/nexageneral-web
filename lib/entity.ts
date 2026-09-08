import { LINKEDIN_URL } from "@/lib/products";

/** Locked factual baseline — marketing may vary; facts must not. */
export const NEXA_ENTITY_DESCRIPTION =
  "Nexa is a Moroccan technology company building a connected ecosystem of specialized digital services for everyday life. The ecosystem includes Nexa Stays for accommodation, Nexa Go for rides, restaurant food delivery and local delivery, Nexa Pay for payments, Nexa Fresh for groceries, Nexa Market for commerce and Nexa Jobs for employment. Nexa is built in Morocco with a long-term ambition to expand across North Africa.";

export const NEXA_SITE_NAME = "Nexa";
export const NEXA_ORIGIN = "https://nexa.ma";
export const NEXA_LOGO = `${NEXA_ORIGIN}/brand/nexa.webp`;

/** Single shared Organization — reuse everywhere; do not fork descriptions. */
export function getOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${NEXA_ORIGIN}/#organization`,
    name: NEXA_SITE_NAME,
    url: NEXA_ORIGIN,
    logo: NEXA_LOGO,
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
  };
}

export function getWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${NEXA_ORIGIN}/#website`,
    name: NEXA_SITE_NAME,
    url: NEXA_ORIGIN,
    description: NEXA_ENTITY_DESCRIPTION,
    publisher: { "@id": `${NEXA_ORIGIN}/#organization` },
    inLanguage: ["en", "fr", "ar"],
  };
}

export function getHomeJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [getOrganizationJsonLd(), getWebSiteJsonLd()],
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
  ecosystem:
    "Nexa Stays, Nexa Go, Nexa Pay, Nexa Fresh, Nexa Market and Nexa Jobs",
  website: "nexa.ma",
} as const;
