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
    status: "Live",
    headline: "Stay somewhere worth remembering.",
    short: "Find your place in Morocco.",
    description:
      "Discover and book places to stay across Morocco, with clearer information, trusted hosts and a more confident booking experience.",
    details: [
      "Explore places to stay, with photos, property details and house rules in one place.",
      "Understand host information, check-in expectations and the details that matter before booking.",
      "Manage your reservations and connect with your host.",
    ],
    connections: ["maps", "go", "pay", "fresh"],
    mascot: "stays",
    logo: "stays",
  },
  {
    slug: "go",
    name: "Nexa Go",
    verb: "Move",
    category: "Rides & local delivery",
    color: "#956000",
    tint: "#fff6d9",
    status: "Coming soon",
    headline: "Your city. Your next move.",
    short: "People and packages, on the move.",
    description:
      "Nexa Go is being built for taxi rides and general local delivery. One focused experience for getting where you need to go and getting things delivered.",
    details: [
      "Request a ride and follow your trip from pickup to arrival.",
      "Send packages, documents and other non-grocery items locally.",
      "Manage trips and deliveries with clear progress along the way.",
    ],
    connections: ["maps", "pay", "market"],
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
    status: "In development",
    headline: "A little less between you and paid.",
    short: "Everyday payments, connected.",
    description:
      "The payment layer of the Nexa ecosystem, being designed for everyday transfers, QR payments, merchant transactions and checkout across Nexa products.",
    details: [
      "Person-to-person transfers and straightforward payment history.",
      "QR and merchant payments designed around everyday transactions.",
      "Connected checkout across supported Nexa experiences. Availability and functionality will be introduced in phases.",
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
    status: "Coming soon",
    headline: "The groceries you forgot. The time you get back.",
    short: "Fresh essentials, delivered quickly.",
    description:
      "A dedicated grocery delivery experience for everyday essentials, with a target of under 15 minutes where operationally supported.",
    details: [
      "Browse groceries and essentials from supported local fulfillment points.",
      "Order fruit, vegetables, milk, bread and the things you need every day.",
      "Follow your order from preparation to delivery. The under-15-minute target depends on location and operating conditions.",
    ],
    connections: ["pay", "stays"],
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
    status: "Coming soon",
    headline: "Find something worth finding.",
    short: "Discover, buy and sell.",
    description:
      "A marketplace connecting people, sellers and businesses. Discover products, compare options and take part in local digital commerce.",
    details: [
      "Explore products across everyday shopping categories.",
      "Compare options and learn about the people and businesses behind them.",
      "Connect with sellers, with future links to Nexa Pay and general delivery through Nexa Go.",
    ],
    connections: ["pay", "go", "maps"],
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
    status: "Coming soon",
    headline: "Your next chapter starts with an opportunity.",
    short: "Find work. Find your people.",
    description:
      "Nexa Jobs is being designed to connect people with work opportunities and help businesses find the people they need.",
    details: [
      "Discover opportunities and build a professional profile.",
      "Apply for roles and manage your applications.",
      "For employers: publish openings, review candidates and manage recruitment.",
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
