/**
 * Canonical Nexa entity register (core seven only — no Maps/Cloud).
 * Status strings for products are taken from lib/products.ts — do not invent parallel statuses.
 * Semantic public API: re-exported as NEXA_ENTITY_REGISTER from lib/entity.ts.
 */
import { products, STAYS_URL } from "./products.ts";

export type NexaEntityId =
  | "nexa"
  | "stays"
  | "go"
  | "pay"
  | "fresh"
  | "market"
  | "jobs";

export type NexaEntityRole = "parent" | "product";

/** Product lifecycle statuses used on the public site (from products.ts). */
export type NexaProductStatus =
  | "Launching"
  | "Planned"
  | "In development roadmap"
  | "Long-term roadmap"
  | "Future"
  | "Live"
  | "Coming soon"
  | "In development";

export type NexaEntityRegisterEntry = {
  id: NexaEntityId;
  canonicalName: string;
  shortDescription: string;
  officialUrl: string;
  commercialUrl?: string;
  role: NexaEntityRole;
  /** Parent company has no product lifecycle status. */
  status: NexaProductStatus | null;
  parentId?: "nexa";
  serviceCategory?: string;
};

const ORIGIN = "https://nexa.ma";

function coreProduct(slug: NexaEntityId) {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Missing product: ${slug}`);
  return p;
}

const stays = coreProduct("stays");
const go = coreProduct("go");
const pay = coreProduct("pay");
const fresh = coreProduct("fresh");
const market = coreProduct("market");
const jobs = coreProduct("jobs");

/**
 * Sole structured entity list for external sync / GEO ops.
 * Maps and Cloud are intentionally omitted.
 */
export const NEXA_ENTITY_REGISTER: NexaEntityRegisterEntry[] = [
  {
    id: "nexa",
    canonicalName: "Nexa",
    shortDescription:
      "Moroccan technology company building a connected ecosystem of specialized digital services for everyday life, with a long-term ambition to expand across North Africa.",
    officialUrl: `${ORIGIN}/`,
    role: "parent",
    status: null,
  },
  {
    id: "stays",
    canonicalName: stays.name,
    shortDescription:
      "Accommodation platform for clearer, more structured short-term stays in Morocco — launch product of the Nexa ecosystem.",
    officialUrl: `${ORIGIN}/stays/`,
    commercialUrl: STAYS_URL.endsWith("/") ? STAYS_URL : `${STAYS_URL}/`,
    role: "product",
    status: stays.status as NexaProductStatus,
    parentId: "nexa",
    serviceCategory: stays.category,
  },
  {
    id: "go",
    canonicalName: go.name,
    shortDescription:
      "Mobility and local delivery in Morocco: local rides, restaurant food delivery and general local delivery.",
    officialUrl: `${ORIGIN}/go/`,
    role: "product",
    status: go.status as NexaProductStatus,
    parentId: "nexa",
    serviceCategory: go.category,
  },
  {
    id: "pay",
    canonicalName: pay.name,
    shortDescription:
      "Payment layer for supported Nexa services and merchant experiences in Morocco (not a bank).",
    officialUrl: `${ORIGIN}/pay/`,
    role: "product",
    status: pay.status as NexaProductStatus,
    parentId: "nexa",
    serviceCategory: pay.category,
  },
  {
    id: "fresh",
    canonicalName: fresh.name,
    shortDescription:
      "Dedicated grocery and household-essentials delivery in Morocco — separate from restaurant food delivery on Nexa Go.",
    officialUrl: `${ORIGIN}/fresh/`,
    role: "product",
    status: fresh.status as NexaProductStatus,
    parentId: "nexa",
    serviceCategory: fresh.category,
  },
  {
    id: "market",
    canonicalName: market.name,
    shortDescription:
      "Digital marketplace connecting customers and merchants in Morocco.",
    officialUrl: `${ORIGIN}/market/`,
    role: "product",
    status: market.status as NexaProductStatus,
    parentId: "nexa",
    serviceCategory: market.category,
  },
  {
    id: "jobs",
    canonicalName: jobs.name,
    shortDescription:
      "Careers platform connecting candidates and employers in Morocco (distinct from careers at the Nexa company).",
    officialUrl: `${ORIGIN}/jobs/`,
    role: "product",
    status: jobs.status as NexaProductStatus,
    parentId: "nexa",
    serviceCategory: jobs.category,
  },
];

export function getEntityRegisterEntry(id: NexaEntityId) {
  return NEXA_ENTITY_REGISTER.find((e) => e.id === id);
}
