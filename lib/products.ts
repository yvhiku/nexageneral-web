export type Product = {
  slug: string;
  name: string;
  verb: string;
  category: string;
  color: string;
  tint: string;
  status: string;
  headline: string;
  short: string;
  description: string;
  details: string[];
  connections: string[];
  mascot?: string;
  logo?: string;
};
export const products: Product[] = [
  {
    slug: "stays",
    name: "Nexa Stays",
    verb: "Stay",
    category: "Accommodation",
    color: "#c63159",
    tint: "#fff0f3",
    status: "Launching",
    headline: "Stay with more confidence.",
    short: "Accommodation discovery and booking built around greater clarity and trust.",
    description:
      "Nexa Stays is a Moroccan accommodation platform being created to make short-term stays clearer, safer and more structured for both guests and hosts.",
    details: [
      "Explore places to stay with clearer property information, photos and house rules in one place.",
      "Make structured booking requests with better communication between guests and hosts.",
      "Privacy-conscious address handling and host verification designed for greater trust.",
    ],
    connections: ["go", "pay", "fresh"],
    mascot: "stays",
    logo: "stays",
  },
  {
    slug: "go",
    name: "Nexa Go",
    verb: "Move",
    category: "Rides, food & local delivery",
    color: "#956000",
    tint: "#fff6d9",
    status: "Planned",
    headline: "Ride. Order. Deliver.",
    short: "Local rides, restaurant food delivery and general local delivery.",
    description:
      "Nexa Go is Nexa's mobility and delivery service, designed to bring together local rides, restaurant food delivery and general local delivery in Morocco.",
    details: [
      "Request local rides and move around supported cities with clear trip progress.",
      "Discover participating restaurants and order prepared meals for local delivery.",
      "Send or receive documents, parcels, retail purchases and other everyday items locally.",
    ],
    connections: ["stays", "pay", "market", "fresh"],
    mascot: "go",
    logo: "go",
  },
  {
    slug: "pay",
    name: "Nexa Pay",
    verb: "Pay",
    category: "Digital payments",
    color: "#304ca9",
    tint: "#eef1fd",
    status: "In development roadmap",
    headline: "Payments that connect the experience.",
    short: "A future payment layer for supported Nexa transactions.",
    description:
      "Nexa Pay is planned as a payment layer for selected Nexa services and merchant experiences. Its purpose is to make supported transactions across the ecosystem easier to complete and manage.",
    details: [
      "Ecosystem checkout for supported Nexa services through a consistent transaction experience.",
      "Merchant payments and QR experiences where appropriate, introduced in phases.",
      "Capabilities depend on regulatory, operational and technical requirements in each market.",
    ],
    connections: ["stays", "go", "fresh", "market"],
    mascot: "pay",
    logo: "pay",
  },
  {
    slug: "fresh",
    name: "Nexa Fresh",
    verb: "Groceries",
    category: "Grocery delivery",
    color: "#3a7935",
    tint: "#edf6e8",
    status: "Planned",
    headline: "Groceries when everyday essentials cannot wait.",
    short: "Fast grocery delivery for everyday essentials.",
    description:
      "Nexa Fresh is planned as Nexa’s dedicated grocery-delivery service, focused specifically on groceries, household essentials and high-frequency everyday purchases.",
    details: [
      "Browse groceries and household essentials from supported local fulfillment points.",
      "Order fruit, vegetables, dairy, drinks, pantry items and everyday necessities.",
      "Long-term target of delivery in under 15 minutes in supported areas, subject to local operations.",
    ],
    connections: ["pay", "stays", "go"],
    mascot: "fresh",
    logo: "fresh",
  },
  {
    slug: "market",
    name: "Nexa Market",
    verb: "Shop",
    category: "Marketplace",
    color: "#803cba",
    tint: "#f4edfc",
    status: "Long-term roadmap",
    headline: "A marketplace built around local commerce.",
    short: "A digital marketplace connecting customers and merchants.",
    description:
      "Nexa Market is planned as an e-commerce marketplace connecting customers with products and merchants through one digital platform.",
    details: [
      "Explore products through structured categories and clearer merchant information.",
      "Give businesses an additional digital channel for showcasing and selling products.",
      "Future links to Nexa Pay and selected local deliveries through Nexa Go where useful.",
    ],
    connections: ["pay", "go"],
    mascot: "market",
    logo: "market",
  },
  {
    slug: "jobs",
    name: "Nexa Jobs",
    verb: "Work",
    category: "Jobs & opportunities",
    color: "#626264",
    tint: "#f0f0ef",
    status: "Long-term roadmap",
    headline: "Find opportunity. Find talent.",
    short: "A careers platform connecting people and opportunities.",
    description:
      "Nexa Jobs is planned as a careers platform connecting people looking for work with employers looking for candidates.",
    details: [
      "Discover job listings, build candidate profiles and track applications.",
      "Publish vacancies, review candidates and manage recruitment tools for employers.",
      "Designed to improve the connection between employers, candidates and opportunities.",
    ],
    connections: [],
    mascot: "jobs",
    logo: "jobs",
  },
  {
    slug: "maps",
    name: "Nexa Maps",
    verb: "Explore",
    category: "Local discovery",
    color: "#3c616b",
    tint: "#eff4f4",
    status: "Future",
    headline: "There’s more around you.",
    short: "Get to know what’s nearby.",
    description:
      "A local-first discovery and navigation experience, designed around the places, businesses and services that make a neighborhood.",
    details: [
      "Discover accommodation, cafés, shops and services nearby.",
      "Explore neighborhoods and find places that matter to your plans.",
      "Continue from discovery into a relevant Nexa experience as integrations become available.",
    ],
    connections: ["stays", "go", "market"],
  },
  {
    slug: "cloud",
    name: "Nexa Cloud",
    verb: "Create",
    category: "Digital infrastructure",
    color: "#51617a",
    tint: "#f0f3f8",
    status: "Future",
    headline: "Room for your digital life.",
    short: "A longer-term digital layer.",
    description:
      "Nexa Cloud represents our long-term vision for digital infrastructure that can support both people and the wider Nexa ecosystem.",
    details: [
      "Exploring how storage, communication and productivity could fit together.",
      "Considering the infrastructure that supports connected digital experiences.",
      "This is a long-term direction. Detailed capabilities and availability have not been committed.",
    ],
    connections: [],
  },
];
export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
export const STAYS_URL = "https://nexastays.ma";
export const LINKEDIN_URL = "https://www.linkedin.com/company/nexa-superapp/";
