import type { Metadata } from "next";
import { NEXA_ENTITY_DESCRIPTION, NEXA_ORIGIN } from "@/lib/entity";

export type SeoEntry = {
  title: string;
  description: string;
  /** Path with trailing slash, e.g. `/go/` */
  path: string;
  ogTitle?: string;
  ogDescription?: string;
};

function absoluteCanonical(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  const withSlash = p.endsWith("/") ? p : `${p}/`;
  return `${NEXA_ORIGIN}${withSlash}`;
}

export function toMetadata(
  entry: SeoEntry,
  extra?: Pick<Metadata, "alternates">,
): Metadata {
  const ogTitle = entry.ogTitle ?? entry.title;
  const ogDescription = entry.ogDescription ?? entry.description;
  const path = entry.path.endsWith("/") ? entry.path : `${entry.path}/`;
  return {
    title: { absolute: entry.title },
    description: entry.description,
    alternates: {
      canonical: path,
      ...extra?.alternates,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: path,
    },
  };
}

export const homeLanguageAlternates = {
  languages: {
    en: "https://nexa.ma/",
    "fr-MA": "https://nexa.ma/fr/",
    "ar-MA": "https://nexa.ma/ar/",
    "x-default": "https://nexa.ma/",
  },
} as const;

/** Page-level hreflang for mirrored EN/FR/AR URLs (trailing slash). */
export function pageLanguageAlternates(slug: string) {
  const path = slug.replace(/^\/+|\/+$/g, "");
  return {
    languages: {
      en: `${NEXA_ORIGIN}/${path}/`,
      "fr-MA": `${NEXA_ORIGIN}/fr/${path}/`,
      "ar-MA": `${NEXA_ORIGIN}/ar/${path}/`,
      "x-default": `${NEXA_ORIGIN}/${path}/`,
    },
  };
}

export function insightsLanguageAlternates(articleSlug?: string) {
  if (articleSlug) {
    const s = articleSlug.replace(/^\/+|\/+$/g, "");
    return {
      languages: {
        en: `${NEXA_ORIGIN}/insights/${s}/`,
        "x-default": `${NEXA_ORIGIN}/insights/${s}/`,
      },
    };
  }
  return {
    languages: {
      en: `${NEXA_ORIGIN}/insights/`,
      "fr-MA": `${NEXA_ORIGIN}/fr/insights/`,
      "ar-MA": `${NEXA_ORIGIN}/ar/insights/`,
      "x-default": `${NEXA_ORIGIN}/insights/`,
    },
  };
}

/** Absolute canonical helper for docs / llms.txt */
export { absoluteCanonical };

export const homeSeo = {
  en: {
    title: "Nexa Morocco — Connected Digital Services Ecosystem",
    description:
      "Nexa is a Moroccan technology company building connected digital services across accommodation, mobility, delivery, payments, groceries, commerce and careers.",
    path: "/",
  },
  fr: {
    title: "Nexa Maroc — Écosystème de services numériques connectés",
    description:
      "Nexa est une entreprise technologique marocaine qui construit des services numériques spécialisés pour le quotidien — hébergement, mobilité, livraison, paiements, courses, commerce et emploi.",
    path: "/fr/",
  },
  ar: {
    title: "نكسا المغرب — نظام بيئي للخدمات الرقمية المترابطة",
    description:
      "نكسا شركة تكنولوجيا مغربية تبني خدمات رقمية متخصصة للحياة اليومية — الإقامة والتنقل والتوصيل والمدفوعات والبقالة والتجارة والتوظيف.",
    path: "/ar/",
  },
} as const satisfies Record<string, SeoEntry>;

export const pageSeo: Record<string, SeoEntry> = {
  products: {
    title: "Nexa Products — Digital Services Built for Morocco",
    description:
      "Explore Nexa’s specialized digital services for Morocco: Stays, Go, Pay, Fresh, Market and Jobs — each with a clear purpose in one connected ecosystem.",
    path: "/products/",
  },
  ecosystem: {
    title: "Nexa Ecosystem — Connected Digital Services in Morocco",
    description:
      "Learn how Nexa’s specialized digital services connect across accommodation, mobility, delivery, payments, groceries, commerce and careers in Morocco.",
    path: "/ecosystem/",
  },
  "why-nexa": {
    title: "Why Nexa — Building Digital Services for Morocco",
    description:
      "Why Nexa builds specialized digital products for Morocco — focus before scale, local understanding, and connections with purpose.",
    path: "/why-nexa/",
  },
  roadmap: {
    title: "Nexa Roadmap — Building Morocco's Digital Ecosystem",
    description:
      "See how Nexa is building its Morocco digital ecosystem in stages — starting with Nexa Stays, then Pay, Go, Fresh, Market and Jobs.",
    path: "/roadmap/",
  },
  about: {
    title: "About Nexa — Moroccan Technology Company",
    description:
      "About Nexa, a Moroccan technology company building a connected ecosystem of specialized digital services, beginning with Nexa Stays.",
    path: "/about/",
  },
  careers: {
    title: "Careers at Nexa — Build with a Moroccan Technology Company",
    description:
      "Explore careers at Nexa, a Moroccan technology company building digital services for everyday life.",
    path: "/careers/",
  },
  partners: {
    title: "Partner with Nexa — Build Morocco's Digital Ecosystem",
    description:
      "Partner with Nexa across hospitality, restaurants, logistics, technology and strategic collaborations in Morocco.",
    path: "/partners/",
  },
  updates: {
    title: "Nexa Updates — Product and Company Progress",
    description:
      "Follow Nexa product developments and company progress as the Morocco digital ecosystem grows.",
    path: "/updates/",
  },
  contact: {
    title: "Contact Nexa — Talk to the Nexa Team",
    description:
      "Contact Nexa for company, partnership, careers, media or Nexa Stays enquiries.",
    path: "/contact/",
  },
  privacy: {
    title: "Privacy — Nexa Website",
    description: "How the Nexa corporate website handles information.",
    path: "/privacy/",
  },
  terms: {
    title: "Terms of Use — Nexa Website",
    description: "Terms for using the Nexa corporate website.",
    path: "/terms/",
  },
  cookies: {
    title: "Cookies — Nexa Website",
    description: "Cookie and local storage information for nexa.ma.",
    path: "/cookies/",
  },
  credits: {
    title: "Image Credits — Nexa",
    description: "Photography credits for images used on the Nexa website.",
    path: "/credits/",
  },
};

export const productSeo: Record<string, SeoEntry> = {
  stays: {
    title: "Nexa Stays — Accommodation Platform in Morocco | Nexa",
    description:
      "Nexa Stays is Nexa’s accommodation platform for clearer, more structured short-term stays in Morocco — the starting product of the Nexa ecosystem.",
    path: "/stays/",
  },
  go: {
    title: "Nexa Go Morocco — Rides, Food & Local Delivery | Nexa",
    description:
      "Nexa Go is Nexa’s mobility and delivery platform in Morocco for local rides, restaurant food delivery and general local delivery — part of the Nexa ecosystem.",
    path: "/go/",
  },
  pay: {
    title: "Nexa Pay Morocco — Digital Payments for the Nexa Ecosystem",
    description:
      "Nexa Pay Morocco is planned as the payment layer for supported Nexa services and merchant experiences in Morocco, developed progressively within the Nexa ecosystem.",
    path: "/pay/",
  },
  fresh: {
    title: "Nexa Fresh — Grocery Delivery in Morocco | Nexa",
    description:
      "Nexa Fresh is Nexa’s dedicated grocery-delivery service for everyday essentials in Morocco — separate from restaurant food delivery on Nexa Go.",
    path: "/fresh/",
  },
  market: {
    title: "Nexa Market — Digital Marketplace in Morocco | Nexa",
    description:
      "Nexa Market is planned as Nexa’s e-commerce marketplace connecting customers and merchants in Morocco.",
    path: "/market/",
  },
  jobs: {
    title: "Nexa Jobs — Jobs & Recruitment Platform in Morocco | Nexa",
    description:
      "Nexa Jobs is planned as Nexa’s careers platform connecting candidates and employers in Morocco.",
    path: "/jobs/",
  },
  maps: {
    title: "Nexa Maps — Future Nexa Concept",
    description:
      "Nexa Maps is a future concept within the Nexa ecosystem. It is not an active public product.",
    path: "/maps/",
  },
  cloud: {
    title: "Nexa Cloud — Future Nexa Concept",
    description:
      "Nexa Cloud represents a longer-term digital infrastructure direction. It is not an active public product.",
    path: "/cloud/",
  },
};

export function getSeoForSlug(slug: string): SeoEntry | undefined {
  return productSeo[slug] ?? pageSeo[slug];
}

/** Short homepage definition block (~70–100 words), facts from entity. */
export const HOME_ENTITY_BLOCK = NEXA_ENTITY_DESCRIPTION;
