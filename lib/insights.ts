export type InsightCategory =
  | "digital-morocco"
  | "hospitality-travel"
  | "mobility-delivery"
  | "commerce-technology";

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  category: InsightCategory;
  published: string; // YYYY-MM-DD
  updated?: string;
  readingMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
};

export const insightCategories: Record<
  InsightCategory,
  { label: string; blurb: string }
> = {
  "digital-morocco": {
    label: "Digital Morocco",
    blurb: "How digital services are taking shape in Morocco.",
  },
  "hospitality-travel": {
    label: "Hospitality & Travel",
    blurb: "Accommodation, guests, hosts and travel experiences.",
  },
  "mobility-delivery": {
    label: "Mobility & Delivery",
    blurb: "Rides, restaurant delivery, groceries and local logistics.",
  },
  "commerce-technology": {
    label: "Commerce & Technology",
    blurb: "Marketplaces, payments, employment tech and product strategy.",
  },
};

export const insights: InsightArticle[] = [
  {
    slug: "why-nexa-builds-specialized-products",
    title: "Why Nexa Builds Specialized Products Instead of One Super App",
    description:
      "Nexa’s product strategy for Morocco: specialized digital services first, connected with purpose — not one overloaded application.",
    category: "digital-morocco",
    published: "2026-09-08",
    readingMinutes: 6,
    sections: [
      {
        heading: "The problem with forcing everything into one app",
        paragraphs: [
          "A single application that tries to cover accommodation, rides, food, groceries, payments, commerce and careers often becomes hard to use and harder to operate. Each category has different users, merchants, trust requirements and fulfillment models.",
          "Nexa takes a different approach: build specialized products with clear purposes, then connect them where the connection creates real value.",
        ],
      },
      {
        heading: "Specialization first, connection second",
        paragraphs: [
          "Nexa Stays focuses on accommodation. Nexa Go focuses on rides, restaurant food delivery and general local delivery. Nexa Fresh focuses on groceries. Nexa Pay supports transactions. Nexa Market and Nexa Jobs address commerce and employment.",
          "Clear boundaries help each product stay understandable for customers and executable for the team building it.",
        ],
      },
      {
        heading: "Built in Morocco, for Moroccan everyday life",
        paragraphs: [
          "Starting in Morocco means designing around local expectations, businesses, cities, payment behavior, language and trust — not only translating an international template.",
          "The long-term ambition includes North Africa, but regional expansion should follow strong execution at home.",
        ],
      },
      {
        heading: "What this means for customers",
        paragraphs: [
          "Customers should get focused experiences that work on their own, with useful links over time — for example a stay connected to local transport, restaurant orders, groceries or supported payments when those products are ready.",
          "Integration should solve a problem. If it does not make something simpler, clearer or more convenient, it does not need to exist.",
        ],
      },
    ],
  },
  {
    slug: "short-term-accommodation-morocco-digital-trends",
    title: "Short-Term Accommodation in Morocco: What Digital Platforms Must Get Right",
    description:
      "Clarity, trust, structured booking and local market realities — the foundations of better digital accommodation experiences in Morocco.",
    category: "hospitality-travel",
    published: "2026-09-08",
    readingMinutes: 7,
    sections: [
      {
        heading: "Guests need clearer information before they request a stay",
        paragraphs: [
          "Short-term stays go wrong when listings are incomplete, rules are unclear or conversations are scattered. Guests need property details, expectations and house rules in a structured place.",
          "Digital platforms serving Morocco should treat clarity as a product requirement, not a nice-to-have.",
        ],
      },
      {
        heading: "Hosts need professional presentation and organized demand",
        paragraphs: [
          "Property owners, riads, residences and operators need more than a public listing. They need tools to present professionally, manage booking interest and share sensitive details at the right time.",
        ],
      },
      {
        heading: "Trust is local",
        paragraphs: [
          "Verification, communication quality and privacy around addresses matter in markets where informal arrangements are common. Platforms that ignore trust mechanics struggle to earn repeat use.",
        ],
      },
      {
        heading: "How Nexa Stays approaches this",
        paragraphs: [
          "Nexa Stays is being built as Nexa’s accommodation product for Morocco — clearer listings, structured booking and greater trust between guests and hosts — as the starting point of a wider ecosystem.",
          "For the commercial booking experience, see nexastays.ma. For how Stays fits into Nexa, see nexa.ma/stays.",
        ],
      },
    ],
  },
  {
    slug: "food-delivery-vs-grocery-delivery-morocco",
    title: "Food Delivery vs Grocery Delivery in Morocco: Why They Are Different Products",
    description:
      "Restaurant meals and grocery essentials look similar from the outside. Operationally they are not — and that is why Nexa separates Go and Fresh.",
    category: "mobility-delivery",
    published: "2026-09-08",
    readingMinutes: 6,
    sections: [
      {
        heading: "Different merchants, different expectations",
        paragraphs: [
          "Restaurant delivery depends on menus, preparation time and kitchen capacity. Grocery delivery depends on inventory, substitutions, cold chain and household essentials baskets.",
          "Customers also expect different speed, pricing and reliability patterns from each.",
        ],
      },
      {
        heading: "Different logistics models",
        paragraphs: [
          "A courier picking up a prepared meal is not the same network as rapid grocery fulfillment from dark stores or retail points. Mixing both in one overloaded product often weakens both experiences.",
        ],
      },
      {
        heading: "Nexa’s boundary",
        paragraphs: [
          "Nexa Go is planned for rides, restaurant food delivery and general local delivery. Nexa Fresh is dedicated to groceries and household essentials, with a long-term under-15-minute target where operations support it.",
          "Keeping the products separate allows focus while remaining part of one ecosystem.",
        ],
      },
    ],
  },
  {
    slug: "building-digital-products-for-moroccan-consumer-behavior",
    title: "How Moroccan Startups Can Build for Local Consumer Behavior",
    description:
      "Local trust, payment habits, city infrastructure and language shape product design more than feature checklists copied from elsewhere.",
    category: "commerce-technology",
    published: "2026-09-08",
    readingMinutes: 7,
    sections: [
      {
        heading: "Start with real usage, not imported assumptions",
        paragraphs: [
          "Consumer apps succeed in Morocco when they respect how people already book, pay, move and communicate. Copying an overseas UX often fails when trust, cash habits or informal channels are ignored.",
        ],
      },
      {
        heading: "Design for trust early",
        paragraphs: [
          "Clear information, progressive disclosure of sensitive data, verifiable counterparties and human-supportable flows matter as much as visual polish.",
        ],
      },
      {
        heading: "Specialize before you scale the ecosystem",
        paragraphs: [
          "Nexa’s approach is to earn the right to connect products by making each category useful on its own. That sequencing — Stays first, then payments and mobility/delivery categories — reflects execution discipline more than a marketing roadmap.",
        ],
      },
      {
        heading: "Measure what locals actually do",
        paragraphs: [
          "Over time, original research on booking habits, delivery usage and payment preferences will matter more than generic global trend reports. Until then, stay close to operators, hosts, merchants and users in Moroccan cities.",
        ],
      },
    ],
  },
  {
    slug: "payments-trust-digital-services-morocco",
    title: "Payments and Trust in Moroccan Digital Services",
    description:
      "Why payment design, clarity and progressive trust matter when building digital services for everyday life in Morocco.",
    category: "commerce-technology",
    published: "2026-09-08",
    readingMinutes: 6,
    sections: [
      {
        heading: "Payment is part of the product experience",
        paragraphs: [
          "In Morocco, how people pay — and how confident they feel doing it — shapes whether a digital service earns repeat use. Checkout is not a side feature; it is part of trust.",
          "Cash habits, card adoption, mobile money patterns and merchant readiness vary by city and category. Products should meet users where they are while raising clarity around what is being paid for.",
        ],
      },
      {
        heading: "Progressive trust beats forced friction",
        paragraphs: [
          "Asking for too much sensitive information too early can reduce conversion. Asking for too little can increase risk. The right balance depends on the category — accommodation, delivery, commerce and employment each have different trust thresholds.",
        ],
      },
      {
        heading: "How Nexa thinks about payments",
        paragraphs: [
          "Nexa Pay is planned as a payment layer for supported Nexa services and merchant experiences, introduced progressively under regulatory, operational and technical requirements.",
          "The goal is consistent, clearer transactions across the ecosystem — not a payment product disconnected from real Nexa use cases.",
        ],
      },
    ],
  },
  {
    slug: "local-rides-and-delivery-cities-morocco",
    title: "Local Rides and Delivery in Moroccan Cities",
    description:
      "What city density, merchant readiness and courier networks mean for mobility and delivery products in Morocco.",
    category: "mobility-delivery",
    published: "2026-09-08",
    readingMinutes: 6,
    sections: [
      {
        heading: "Cities are not interchangeable",
        paragraphs: [
          "Casablanca, Rabat, Marrakech and other Moroccan cities differ in traffic patterns, tourist demand, restaurant density and last-mile constraints. A mobility and delivery product has to respect those differences rather than assume one national template.",
        ],
      },
      {
        heading: "Three needs, related logistics",
        paragraphs: [
          "Local rides, restaurant food delivery and general parcel/local delivery share courier and routing infrastructure in principle, but they have different time expectations, pickup points and failure modes.",
          "Nexa Go is designed around those three everyday needs in one service, while grocery fulfillment remains a separate product — Nexa Fresh — because inventory and cold-chain realities differ.",
        ],
      },
      {
        heading: "Start where operations can succeed",
        paragraphs: [
          "Launch sequencing should follow operational readiness: partner density, courier supply and customer demand in supported zones. Expanding too early weakens reliability — the metric users remember.",
        ],
      },
    ],
  },
  {
    slug: "host-guest-trust-short-term-stays-morocco",
    title: "Building Trust Between Hosts and Guests in Morocco",
    description:
      "Verification, clearer listings and structured booking — practical trust mechanics for short-term accommodation in Morocco.",
    category: "hospitality-travel",
    published: "2026-09-08",
    readingMinutes: 6,
    sections: [
      {
        heading: "Trust is the product underneath the listing",
        paragraphs: [
          "Photos and prices attract attention. Trust decides whether a guest completes a request and whether a host accepts one. Incomplete rules, unclear communication and late address sharing create avoidable friction.",
        ],
      },
      {
        heading: "What guests and hosts both need",
        paragraphs: [
          "Guests need structured property information before they commit. Hosts need professional presentation and organized demand instead of chaotic informal threads.",
          "Verification, house rules and privacy-conscious address handling are product features, not optional polish.",
        ],
      },
      {
        heading: "Nexa Stays’ approach",
        paragraphs: [
          "Nexa Stays focuses on clearer stays for guests and hosts in Morocco as the starting product of the Nexa ecosystem. Corporate context: nexa.ma/stays. Commercial booking: nexastays.ma.",
        ],
      },
    ],
  },
  {
    slug: "north-africa-ambition-morocco-first",
    title: "North Africa Ambition, Morocco First",
    description:
      "Why Nexa’s long-term North Africa ambition starts with disciplined execution in Morocco.",
    category: "digital-morocco",
    published: "2026-09-08",
    readingMinutes: 5,
    sections: [
      {
        heading: "Ambition without a home market is fragile",
        paragraphs: [
          "Regional expansion sounds impressive in a pitch. In practice, digital services fail when they expand before product-market fit, operations and trust are proven at home.",
          "Nexa is built in Morocco with a long-term ambition to expand across North Africa — in that order.",
        ],
      },
      {
        heading: "What Morocco-first enables",
        paragraphs: [
          "Starting in Morocco allows the team to design around local language, payment behavior, city logistics, hospitality norms and merchant relationships before generalizing patterns to neighboring markets.",
        ],
      },
      {
        heading: "How expansion should be judged",
        paragraphs: [
          "Expansion should follow evidence: reliable category performance, partner readiness and repeat usage — not a calendar. Specialized products that work in Morocco are the foundation for any later regional chapter.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((a) => a.slug === slug);
}

export function insightsByCategory(category: InsightCategory) {
  return insights.filter((a) => a.category === category);
}
