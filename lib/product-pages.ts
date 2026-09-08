export type LongformSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ProductLongform = {
  slug: string;
  sections: LongformSection[];
  faq: { q: string; a: string }[];
};

/** Substantive EN copy for core six products — topical coverage without filler. */
export const productLongform: Record<string, ProductLongform> = {
  stays: {
    slug: "stays",
    sections: [
      {
        id: "what",
        heading: "What is Nexa Stays?",
        paragraphs: [
          "Nexa Stays is Nexa’s accommodation platform for discovering and booking short-term stays in Morocco. It is the first market-facing product in the Nexa ecosystem and the starting point for how we build specialized digital services.",
          "The product is designed around clearer listings, structured booking requests, stronger trust signals between guests and hosts, and privacy-conscious handling of sensitive property information.",
          "Nexa Stays on nexa.ma explains the product and its place in the ecosystem. The live commercial experience for browsing and booking is at nexastays.ma.",
        ],
      },
      {
        id: "guests",
        heading: "Designed for guests",
        paragraphs: [
          "Guests should understand what they are requesting before a stay begins. That means property information, rules and expectations presented clearly — not scattered across informal messages.",
        ],
        bullets: [
          "Clearer property listings with photos and house rules in one place",
          "Structured booking requests instead of informal messaging alone",
          "Better communication between guests and hosts",
          "Addresses shared at the appropriate stage of the booking process",
        ],
      },
      {
        id: "hosts",
        heading: "Designed for hosts and operators",
        paragraphs: [
          "Hosts and accommodation operators need a dedicated environment to present properties professionally and manage booking interest with clearer expectations.",
        ],
        bullets: [
          "Structured listings for apartments, riads, villas, guesthouses and residences",
          "Verification and clearer profiles to help distinguish serious hosts",
          "Organized booking interest rather than fragmented conversations",
          "Progressive sharing of sensitive property details",
        ],
      },
      {
        id: "morocco",
        heading: "Built for Morocco",
        paragraphs: [
          "Nexa Stays is being developed around the realities of the Moroccan accommodation market — local guest expectations, host practices and city dynamics — rather than simply copying an international platform.",
          "Initial growth focuses on markets where short-term accommodation demand and host supply are strongest.",
        ],
      },
      {
        id: "ecosystem",
        heading: "Part of the Nexa ecosystem",
        paragraphs: [
          "Over time, a traveler may use Nexa Go for local transportation and restaurant food delivery, Nexa Fresh for apartment groceries, and Nexa Pay for supported transactions.",
          "Every connection will be introduced progressively as the relevant services become available.",
        ],
      },
      {
        id: "status",
        heading: "Current status",
        paragraphs: [
          "Nexa Stays is Nexa’s launch product. Product availability, features and cities evolve as the service develops. For the commercial booking experience, visit nexastays.ma.",
        ],
      },
    ],
    faq: [
      {
        q: "What is Nexa Stays?",
        a: "Nexa Stays is Nexa’s Moroccan accommodation platform for clearer, more structured short-term stays for guests and hosts. It is a Nexa product and the starting product of the Nexa ecosystem.",
      },
      {
        q: "Is Nexa Stays available in Morocco?",
        a: "Yes — Nexa Stays is built for Morocco. Availability of cities, features and inventory evolves as the service develops. For the commercial booking experience, visit nexastays.ma.",
      },
      {
        q: "What types of accommodation can guests find?",
        a: "Nexa Stays is designed for short-term stays across property types such as apartments, riads, villas, guesthouses and residences, depending on what hosts list.",
      },
      {
        q: "How does host verification work?",
        a: "Nexa Stays is designed around clearer host profiles and verification signals to help guests distinguish serious hosts. Specific verification steps evolve with the product.",
      },
      {
        q: "How does Nexa Stays protect property addresses?",
        a: "Sensitive address details are intended to be shared at the appropriate stage of the booking process, rather than exposed prematurely — a privacy-conscious design choice for the Moroccan market.",
      },
      {
        q: "How is Nexa Stays connected to Nexa?",
        a: "Nexa Stays is a product of Nexa, a Moroccan technology company. nexa.ma/stays explains the product in the ecosystem; nexastays.ma is the commercial booking site.",
      },
      {
        q: "Where do I book a stay?",
        a: "The commercial Nexa Stays experience is at nexastays.ma. The nexa.ma/stays page explains the product and how it fits into Nexa.",
      },
      {
        q: "Is Nexa Stays available outside Morocco?",
        a: "Nexa Stays begins in Morocco. Broader expansion would follow strong execution in the home market.",
      },
    ],
  },
  go: {
    slug: "go",
    sections: [
      {
        id: "what",
        heading: "What is Nexa Go?",
        paragraphs: [
          "Nexa Go is Nexa’s planned mobility and local delivery platform for Morocco. It brings together three everyday needs in one service: local rides, restaurant food delivery and general local delivery.",
          "The aim is a focused digital experience for moving around a city, ordering prepared meals from participating restaurants, and sending or receiving eligible everyday items locally.",
        ],
      },
      {
        id: "rides",
        heading: "Local rides with Nexa Go",
        paragraphs: [
          "Nexa Go is planned to support convenient local transportation within supported cities — everyday trips, commuting, airport and station journeys, appointments, leisure and visitors exploring a city.",
          "Clear trip progress from pickup to arrival is part of the intended experience.",
        ],
      },
      {
        id: "food",
        heading: "Restaurant food delivery",
        paragraphs: [
          "Nexa Go will include prepared-food delivery from participating restaurants, cafés, fast food, bakeries and selected prepared-food merchants.",
          "Customers will be able to discover nearby options, place an order and have meals delivered locally. Restaurant meals belong to Nexa Go — not to Nexa Fresh.",
        ],
      },
      {
        id: "delivery",
        heading: "General local delivery",
        paragraphs: [
          "Beyond food, Nexa Go is planned to support local delivery of documents, small parcels, retail purchases, forgotten items and other everyday personal deliveries, subject to service-area rules and item restrictions.",
        ],
      },
      {
        id: "vs-fresh",
        heading: "Nexa Go vs Nexa Fresh",
        paragraphs: [
          "Nexa Go handles rides, restaurant food and general local delivery. Nexa Fresh is dedicated specifically to groceries and household essentials.",
          "Food delivery and grocery delivery require different operations, merchants, customer expectations and fulfillment models. Keeping them separate lets each product stay focused while remaining part of the same ecosystem.",
        ],
      },
      {
        id: "who",
        heading: "Who Nexa Go is designed for",
        paragraphs: [
          "Residents who need everyday mobility and delivery, visitors connecting a stay to local transport and meals, restaurants seeking digital orders, and people or businesses that need reliable local item delivery.",
        ],
      },
      {
        id: "ecosystem",
        heading: "How Nexa Go connects to the ecosystem",
        paragraphs: [
          "A Nexa Stays guest could use Go to reach accommodation and order dinner. A Nexa Market customer could potentially use Go for selected local deliveries. Nexa Pay may support compatible transactions over time.",
          "Connections will be introduced only when they improve the experience and the products are ready.",
        ],
      },
      {
        id: "status",
        heading: "Current status",
        paragraphs: [
          "Nexa Go is on Nexa’s planned roadmap. Specific cities, services and timelines will be announced when operational plans are ready.",
        ],
      },
    ],
    faq: [
      {
        q: "What is Nexa Go?",
        a: "Nexa Go is Nexa’s planned mobility and delivery service for local rides, restaurant food delivery and general local delivery in Morocco.",
      },
      {
        q: "Does Nexa Go offer food delivery?",
        a: "Yes. Restaurant and prepared-food delivery is part of Nexa Go. Grocery delivery belongs to Nexa Fresh.",
      },
      {
        q: "What’s the difference between Nexa Go and Nexa Fresh?",
        a: "Go covers rides, restaurant meals and general local delivery. Fresh focuses on groceries and household essentials with a fast grocery fulfillment model.",
      },
    ],
  },
  pay: {
    slug: "pay",
    sections: [
      {
        id: "what",
        heading: "What is Nexa Pay?",
        paragraphs: [
          "Nexa Pay is planned as the payment layer for selected Nexa services and merchant experiences. Its purpose is to make supported transactions across the ecosystem easier to complete and manage.",
          "It is not intended to replace every financial service. It is designed to reduce friction where Nexa products and selected partners need a consistent transaction experience.",
        ],
      },
      {
        id: "phases",
        heading: "Built in phases",
        paragraphs: [
          "Payments require technology, partnerships, compliance, security and the right regulatory framework. Nexa Pay will therefore be developed progressively.",
          "Capabilities will be introduced only when the necessary infrastructure and approvals are in place.",
        ],
      },
      {
        id: "direction",
        heading: "Long-term direction",
        paragraphs: [
          "Depending on regulatory and operational requirements, Nexa Pay may support ecosystem checkout for Nexa services, selected merchant payments, QR-based experiences and simpler flows when moving between compatible Nexa products.",
        ],
      },
      {
        id: "why",
        heading: "Why Nexa Pay matters",
        paragraphs: [
          "Nexa products span accommodation, mobility, delivery and commerce. A shared payment layer can make those services feel more connected without forcing them into one application.",
        ],
      },
      {
        id: "status",
        heading: "Current status",
        paragraphs: [
          "Nexa Pay is on Nexa’s development roadmap. Specific functionality will be announced as the product progresses.",
        ],
      },
    ],
    faq: [
      {
        q: "What is Nexa Pay?",
        a: "Nexa Pay Morocco is planned as the payment layer for supported Nexa services and selected merchant experiences within the Nexa ecosystem in Morocco.",
      },
      {
        q: "Is Nexa Pay available in Morocco?",
        a: "Nexa Pay is on Nexa’s development roadmap for Morocco. It is not a fully live public payments product today. Capabilities will be introduced progressively.",
      },
      {
        q: "Is Nexa Pay currently live?",
        a: "No. Nexa Pay is in development roadmap status. Specific functionality will be announced as the product progresses.",
      },
      {
        q: "How will Nexa Pay connect with other Nexa services?",
        a: "Over time, Nexa Pay is intended to support consistent checkout and transactions across compatible Nexa products — for example Stays, Go, Fresh or Market — where regulatory and operational conditions allow.",
      },
      {
        q: "Is Nexa Pay a bank?",
        a: "No. Nexa Pay is being designed as a transaction layer for the ecosystem, subject to regulatory and operational requirements — not as a full banking replacement.",
      },
      {
        q: "What stage is Nexa Pay currently in?",
        a: "Nexa Pay is on Nexa’s in-development roadmap. Technology, partnerships, compliance and regulatory requirements determine when capabilities launch.",
      },
      {
        q: "Is this the same as other apps named Nexa Pay?",
        a: "No. This page describes Nexa Pay as a product of Nexa, the Moroccan technology company at nexa.ma — not unrelated products that may share a similar name elsewhere.",
      },
    ],
  },
  fresh: {
    slug: "fresh",
    sections: [
      {
        id: "what",
        heading: "What is Nexa Fresh?",
        paragraphs: [
          "Nexa Fresh is planned as Nexa’s dedicated grocery-delivery service for Morocco. It focuses on groceries, household essentials and high-frequency everyday purchases.",
          "It is not a restaurant-delivery service. Prepared meals and restaurant orders belong to Nexa Go.",
        ],
      },
      {
        id: "categories",
        heading: "Grocery first",
        paragraphs: [
          "Categories may include fruit and vegetables, dairy, drinks, pantry essentials, snacks, household products, personal care and other everyday necessities from supported fulfillment points.",
        ],
      },
      {
        id: "speed",
        heading: "A faster grocery model",
        paragraphs: [
          "The long-term ambition is delivery in under 15 minutes within supported service zones. That target depends on inventory, fulfillment locations, delivery capacity, traffic, customer location and local infrastructure.",
          "Speed should never come at the expense of accuracy and reliability.",
        ],
      },
      {
        id: "vs-go",
        heading: "Fresh vs Go",
        paragraphs: [
          "Nexa Fresh focuses on groceries. Nexa Go handles restaurant meals and general local delivery, plus rides.",
          "A grocery network needs different inventory, logistics and fulfillment processes from restaurant delivery. The separation is intentional.",
        ],
      },
      {
        id: "ecosystem",
        heading: "Part of Nexa",
        paragraphs: [
          "Nexa Fresh could eventually connect with Nexa Pay for supported checkout and with other Nexa services where integration genuinely improves the customer experience — for example essentials for a Nexa Stays stay.",
        ],
      },
      {
        id: "status",
        heading: "Current status",
        paragraphs: [
          "Nexa Fresh is on Nexa’s planned roadmap. Launch markets and availability will be announced when the service is operationally ready.",
        ],
      },
    ],
    faq: [
      {
        q: "What is Nexa Fresh?",
        a: "Nexa Fresh is Nexa’s planned dedicated grocery-delivery service for everyday essentials in Morocco.",
      },
      {
        q: "Does Nexa Fresh deliver restaurant food?",
        a: "No. Restaurant and prepared-food delivery belongs to Nexa Go. Fresh is groceries and household essentials only.",
      },
    ],
  },
  market: {
    slug: "market",
    sections: [
      {
        id: "what",
        heading: "What is Nexa Market?",
        paragraphs: [
          "Nexa Market is planned as Nexa’s e-commerce marketplace for discovering and purchasing products from participating merchants in Morocco.",
          "The objective is a structured environment where customers can explore products and businesses gain greater digital reach.",
        ],
      },
      {
        id: "buyers",
        heading: "Built for buyers",
        paragraphs: [
          "Customers should be able to explore products through structured categories, clearer merchant information and a consistent purchasing experience.",
        ],
      },
      {
        id: "merchants",
        heading: "Built for merchants",
        paragraphs: [
          "Potential merchant capabilities may include product listings, storefront profiles, order management, customer reviews, promotions and selected delivery integrations.",
        ],
      },
      {
        id: "connected",
        heading: "Connected commerce",
        paragraphs: [
          "Where useful, Nexa Market may connect with Nexa Go for eligible local deliveries and Nexa Pay for supported payment — only when both products are ready and the connection improves the experience.",
        ],
      },
      {
        id: "status",
        heading: "Current status",
        paragraphs: [
          "Nexa Market is part of Nexa’s longer-term roadmap.",
        ],
      },
    ],
    faq: [
      {
        q: "What is Nexa Market?",
        a: "Nexa Market is planned as Nexa’s digital marketplace connecting customers and merchants in Morocco.",
      },
    ],
  },
  jobs: {
    slug: "jobs",
    sections: [
      {
        id: "what",
        heading: "What is Nexa Jobs?",
        paragraphs: [
          "Nexa Jobs is planned as a careers platform connecting people looking for work with employers looking for candidates.",
          "It is distinct from careers at Nexa the company (see nexa.ma/careers). Nexa Jobs is a product in the ecosystem.",
        ],
      },
      {
        id: "candidates",
        heading: "For candidates",
        paragraphs: [
          "Potential features may include job listings, candidate profiles, application tracking, employer information and career discovery.",
        ],
      },
      {
        id: "employers",
        heading: "For employers",
        paragraphs: [
          "Potential capabilities may include employer profiles, vacancy publishing, candidate discovery, application management and recruitment tools.",
        ],
      },
      {
        id: "more",
        heading: "More than listings",
        paragraphs: [
          "The long-term goal is not simply another list of vacancies. Nexa Jobs should help improve the connection between employers, candidates and opportunities.",
        ],
      },
      {
        id: "status",
        heading: "Current status",
        paragraphs: [
          "Nexa Jobs is part of Nexa’s longer-term roadmap.",
        ],
      },
    ],
    faq: [
      {
        q: "What is Nexa Jobs?",
        a: "Nexa Jobs is planned as Nexa’s careers and recruitment product. Working at Nexa the company is listed separately under Careers.",
      },
      {
        q: "How is Nexa Jobs different from Careers at Nexa?",
        a: "/careers is for joining the Nexa company. /jobs is the Nexa Jobs product for candidates and employers in the market.",
      },
    ],
  },
};

export function getProductLongform(slug: string) {
  return productLongform[slug];
}
