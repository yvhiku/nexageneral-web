export type Locale = "en" | "fr" | "ar";

export const locales: Locale[] = ["en", "fr", "ar"];

export const localeHome: Record<Locale, string> = {
  en: "/",
  fr: "/fr/",
  ar: "/ar/",
};

export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "EN", htmlLang: "en", dir: "ltr" },
  fr: { label: "FR", htmlLang: "fr", dir: "ltr" },
  ar: { label: "AR", htmlLang: "ar", dir: "rtl" },
};

export function detectLocale(pathname: string | null): Locale {
  if (!pathname) return "en";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "en";
}

/** Prefix internal hrefs for FR/AR trees (`/products` → `/fr/products`). */
export function localePath(locale: Locale, href: string): string {
  if (!href || href.startsWith("http") || href.startsWith("mailto:")) return href;
  const path = href.startsWith("/") ? href : `/${href}`;
  if (locale === "en") return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/** Strip /fr or /ar prefix from a pathname. */
export function stripLocalePrefix(pathname: string | null): string {
  if (!pathname) return "/";
  if (pathname === "/fr" || pathname === "/ar") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  return pathname;
}

/** Language switcher target for the same logical page. */
export function localizedHrefForSwitch(
  pathname: string | null,
  target: Locale,
): string {
  return localePath(target, stripLocalePrefix(pathname));
}

/** Slugs mirrored under /fr/* and /ar/* (Phase 4). */
export const localizedSlugs = [
  "products",
  "ecosystem",
  "why-nexa",
  "roadmap",
  "about",
  "careers",
  "partners",
  "updates",
  "contact",
  "stays",
  "go",
  "pay",
  "fresh",
  "market",
  "jobs",
  "maps",
  "cloud",
  "privacy",
  "terms",
  "cookies",
  "credits",
] as const;

export type Dictionary = {
  skip: string;
  nav: {
    products: string;
    ecosystem: string;
    insights: string;
    whyNexa: string;
    roadmap: string;
    about: string;
    careers: string;
    contact: string;
    exploreStays: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    homeAria: string;
    language: string;
  };
  footer: {
    tagline: string;
    builtIn: string;
    products: string;
    company: string;
    connect: string;
    partnerships: string;
    contact: string;
    linkedin: string;
    privacy: string;
    terms: string;
    cookies: string;
    credits: string;
    moroccoFirst: string;
    about: string;
    whyNexa: string;
    roadmap: string;
    careers: string;
    updates: string;
    insights: string;
  };
  status: {
    Launching: string;
    Planned: string;
    "In development roadmap": string;
    "Long-term roadmap": string;
    Future: string;
    Live: string;
    "Coming soon": string;
    "In development": string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    body: string;
    bodyBreak: string;
    primaryCta: string;
    secondaryCta: string;
    liveNote: string;
    artCaption: string;
    signatureLine1: string;
    signatureStrong: string;
    scrollCue: string;
  };
  idea: {
    index: string;
    title1: string;
    title2: string;
    body: string;
    entityBlock: string;
  };
  ecosystem: {
    eyebrow: string;
    title1: string;
    title2: string;
    blurb1: string;
    blurb2: string;
  };
  stories: {
    eyebrow: string;
    title1: string;
    title2: string;
    blurb1: string;
    blurb2: string;
    staysTitle1: string;
    staysTitle2: string;
    staysBody: string;
    staysCta: string;
    staysMeet: string;
    staysFootnote: string;
    photoLabel: string;
    photoTag: string;
    photoDisclaimer: string;
    photoAlt: string;
    goTitle1: string;
    goTitle2: string;
    goBody: string;
    goMeet: string;
    freshTitle1: string;
    freshTitle2: string;
    freshBody: string;
    freshMeet: string;
    payTitle1: string;
    payTitleEm: string;
    payBody: string;
    payCta: string;
    payNote: string;
    marketHeadline: string;
    jobsHeadline: string;
    marketBody: string;
    jobsBody: string;
    marketMeet: string;
    jobsMeet: string;
    exploreProduct: string;
    horizonEyebrow: string;
    horizonTitle: string;
    horizonBody: string;
    horizonCta: string;
  };
  why: {
    eyebrow: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    link: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    blurb1: string;
    blurb2: string;
  };
  proof: {
    eyebrow: string;
    title1: string;
    title2: string;
    body: string;
    cta: string;
    liveNow: string;
    aside: string;
  };
  morocco: {
    photoLabel: string;
    photoAlt: string;
    eyebrow: string;
    title1: string;
    title2: string;
    titleEm: string;
    p1: string;
    p2: string;
    link: string;
    geoFrom: string;
    geoTo: string;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    link: string;
  };
  build: {
    eyebrow: string;
    title1: string;
    title2: string;
    body1: string;
    body2: string;
    careersSmall: string;
    careers: string;
    partnersSmall: string;
    partners: string;
  };
  updates: {
    eyebrow: string;
    title: string;
    body: string;
    cardEyebrow: string;
    cardTitle: string;
    cardLink: string;
  };
  finalCta: {
    title1: string;
    title2: string;
    cta: string;
  };
  productShort: Record<string, string>;
  productVerb: Record<string, string>;
};

const en: Dictionary = {
  skip: "Skip to content",
  nav: {
    products: "Products",
    ecosystem: "Ecosystem",
    insights: "Insights",
    whyNexa: "Why Nexa",
    roadmap: "Roadmap",
    about: "About",
    careers: "Careers",
    contact: "Contact",
    exploreStays: "Explore Nexa Stays",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    homeAria: "Nexa home",
    language: "Language",
  },
  footer: {
    tagline: "One ecosystem\nfor everyday life.",
    builtIn: "Built in Morocco. Designed to grow.",
    products: "Our products",
    company: "Company",
    connect: "Let’s connect",
    partnerships: "Partnerships",
    contact: "Contact",
    linkedin: "LinkedIn",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    credits: "Image credits",
    moroccoFirst: "Morocco first. More to come.",
    about: "About",
    whyNexa: "Why Nexa",
    roadmap: "Roadmap",
    careers: "Careers",
    updates: "Updates",
    insights: "Insights",
  },
  status: {
    Launching: "Launching",
    Planned: "Planned",
    "In development roadmap": "In development roadmap",
    "Long-term roadmap": "Long-term roadmap",
    Future: "Future",
    Live: "Live",
    "Coming soon": "Coming soon",
    "In development": "In development",
  },
  hero: {
    eyebrow: "Built in Morocco",
    titleLine1: "One ecosystem",
    titleEm: "everyday life.",
    body: "Nexa is building a family of focused digital services designed around how people live, move, stay, shop, work and pay in Morocco.",
    bodyBreak: "Each product solves a specific everyday need. Together, they form one connected ecosystem.",
    primaryCta: "Explore Nexa Stays",
    secondaryCta: "Discover the ecosystem",
    liveNote: "The ecosystem starts with Nexa Stays — accommodation in Morocco.",
    artCaption: "Focused products. One connected ecosystem.",
    signatureLine1: "Specialized by design.",
    signatureStrong: "Connected with purpose.",
    scrollCue: "There’s more to Nexa",
  },
  idea: {
    index: "01 / The idea",
    title1: "Focused products.",
    title2: "One connected ecosystem.",
    body: "Nexa is not one application trying to do everything. It is an ecosystem of specialized products, each designed for a clear purpose and built to become stronger through thoughtful connections with the others.",
    entityBlock:
      "Nexa is a Moroccan technology company building a connected ecosystem of specialized digital services for everyday life. The ecosystem includes Nexa Stays for accommodation, Nexa Go for rides, restaurant food delivery and local delivery, Nexa Pay for payments, Nexa Fresh for groceries, Nexa Market for commerce and Nexa Jobs for employment. Nexa is built in Morocco with a long-term ambition to expand across North Africa.",
  },
  ecosystem: {
    eyebrow: "The Nexa ecosystem",
    title1: "Focused products.",
    title2: "One connected ecosystem.",
    blurb1: "From accommodation and transportation to food delivery, groceries, payments, shopping and careers.",
    blurb2: "Starting with Stays. Building what comes next.",
  },
  stories: {
    eyebrow: "Meet the products",
    title1: "Specialized by design.",
    title2: "Connected with purpose.",
    blurb1: "Each product has a clear category.",
    blurb2: "Together they form one ecosystem.",
    staysTitle1: "Stay with more",
    staysTitle2: "clarity and confidence.",
    staysBody:
      "Nexa Stays is our accommodation platform for discovering and booking places to stay across Morocco — clearer listings, structured booking and greater trust between guests and hosts.",
    staysCta: "Find accommodation with Nexa Stays",
    staysMeet: "Discover Nexa Stays",
    staysFootnote: "Our launch product — the ecosystem starts here",
    photoLabel: "Marrakech, Morocco",
    photoTag: "A different pace.",
    photoDisclaimer: "Destination inspiration",
    photoAlt: "A quiet courtyard and pool at Riad Le Rihani in Marrakech",
    goTitle1: "Move, order",
    goTitle2: "and send locally.",
    goBody:
      "Nexa Go brings together local rides, restaurant food delivery and general local delivery in one service.",
    goMeet: "Discover Nexa Go rides and food delivery",
    freshTitle1: "Groceries",
    freshTitle2: "delivered fast.",
    freshBody:
      "Nexa Fresh is dedicated specifically to grocery delivery and everyday household essentials — with a long-term target of under 15 minutes where supported.",
    freshMeet: "Discover Nexa Fresh",
    payTitle1: "A simpler payment layer",
    payTitleEm: "for the ecosystem.",
    payBody:
      "Nexa Pay is being designed to support digital transactions across Nexa services and selected merchant experiences — developed progressively as the ecosystem grows.",
    payCta: "Discover Nexa Pay",
    payNote: "Capabilities introduced in phases, subject to regulatory and operational readiness.",
    marketHeadline: "A marketplace built around local commerce.",
    jobsHeadline: "Better connections between people and opportunities.",
    marketBody:
      "Nexa Market is planned as a digital marketplace where customers can discover products while merchants gain a structured channel to reach more people.",
    jobsBody:
      "Nexa Jobs is planned as a careers platform designed to help employers reach candidates and help people discover relevant employment opportunities.",
    marketMeet: "Discover Nexa Market",
    jobsMeet: "Discover Nexa Jobs",
    exploreProduct: "Explore",
    horizonEyebrow: "On the horizon",
    horizonTitle: "Nexa Maps & Nexa Cloud",
    horizonBody: "Local discovery and longer-term digital layers — future products.",
    horizonCta: "See all products",
  },
  why: {
    eyebrow: "Why Nexa",
    title1: "Useful on their own.",
    title2: "More powerful together.",
    p1: "Each Nexa service is being designed to work independently. Over time, thoughtful connections can make everyday experiences simpler.",
    p2: "Stay, ride, order dinner, get groceries, pay where supported — different services, one connected experience.",
    link: "Learn about the Nexa digital ecosystem",
  },
  journey: {
    eyebrow: "The connection in everyday life",
    title: "A weekend in Marrakech.",
    blurb1: "One trip. A few different needs.",
    blurb2: "See how Nexa could bring them together.",
  },
  proof: {
    eyebrow: "Where Nexa begins",
    title1: "The ecosystem starts",
    title2: "with Nexa Stays.",
    body: "Every ecosystem has to start somewhere. For Nexa, that starting point is accommodation — clearer, more structured short-term stays in Morocco for guests and hosts.",
    cta: "Explore Nexa Stays",
    liveNow: "Launch product",
    aside: "Accommodation in Morocco",
  },
  morocco: {
    photoLabel: "Starting close to home.",
    photoAlt:
      "Marrakech street with local shops, people and warm terracotta architecture",
    eyebrow: "Our starting point",
    title1: "Built in Morocco.",
    title2: "Designed to grow",
    titleEm: "beyond it.",
    p1: "We build around local customer expectations, local businesses, Moroccan cities and the way people already access everyday services.",
    p2: "Strong regional technology companies are built by understanding their first market deeply — then expanding responsibly.",
    link: "Get to know Nexa",
    geoFrom: "Morocco",
    geoTo: "North Africa",
  },
  roadmap: {
    eyebrow: "Our direction",
    title: "Build one product well. Then connect the ecosystem.",
    link: "Our roadmap",
  },
  build: {
    eyebrow: "Build with Nexa",
    title1: "Ecosystems are built",
    title2: "with people.",
    body1: "Customers, hosts, merchants, restaurants, operators, employers and technology partners.",
    body2: "Whether you want to work with Nexa, partner with a product or follow what we are building, we would like to hear from you.",
    careersSmall: "Join the team",
    careers: "Careers at Nexa",
    partnersSmall: "Grow with us",
    partners: "Partner with Nexa",
  },
  updates: {
    eyebrow: "Building Nexa",
    title: "Follow the progress.",
    body: "Product developments and company updates, as they happen.",
    cardEyebrow: "Product / Nexa Stays",
    cardTitle: "The ecosystem starts with Stays.",
    cardLink: "What we’re building",
  },
  finalCta: {
    title1: "Start with Nexa Stays.",
    title2: "See where the ecosystem begins.",
    cta: "Explore Nexa Stays",
  },
  productShort: {
    stays: "Accommodation discovery and booking built around greater clarity and trust.",
    go: "Local rides, restaurant food delivery and general local delivery.",
    pay: "A future payment layer for supported Nexa transactions.",
    fresh: "Fast grocery delivery for everyday essentials.",
    market: "A digital marketplace connecting customers and merchants.",
    jobs: "A careers platform connecting people and opportunities.",
    maps: "Get to know what’s nearby.",
    cloud: "A longer-term digital layer.",
  },
  productVerb: {
    stays: "Stay",
    go: "Move",
    pay: "Pay",
    fresh: "Groceries",
    market: "Shop",
    jobs: "Work",
    maps: "Explore",
    cloud: "Create",
  },
};

const fr: Dictionary = {
  skip: "Aller au contenu",
  nav: {
    products: "Produits",
    ecosystem: "Écosystème",
    insights: "Analyses",
    whyNexa: "Pourquoi Nexa",
    roadmap: "Feuille de route",
    about: "À propos",
    careers: "Carrières",
    contact: "Contact",
    exploreStays: "Découvrir Nexa Stays",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    homeAria: "Accueil Nexa",
    language: "Langue",
  },
  footer: {
    tagline: "Un écosystème\npour le quotidien.",
    builtIn: "Conçu au Maroc. Pensé pour grandir.",
    products: "Nos produits",
    company: "Entreprise",
    connect: "Restons en lien",
    partnerships: "Partenariats",
    contact: "Contact",
    linkedin: "LinkedIn",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
    credits: "Crédits photos",
    moroccoFirst: "Le Maroc d’abord. La suite arrive.",
    about: "À propos",
    whyNexa: "Pourquoi Nexa",
    roadmap: "Feuille de route",
    careers: "Carrières",
    updates: "Actualités",
    insights: "Analyses",
  },
  status: {
    Launching: "Lancement",
    Planned: "Planifié",
    "In development roadmap": "Feuille de route — développement",
    "Long-term roadmap": "Feuille de route long terme",
    Future: "Futur",
    Live: "En ligne",
    "Coming soon": "Bientôt",
    "In development": "En développement",
  },
  hero: {
    eyebrow: "Conçu au Maroc",
    titleLine1: "Un écosystème",
    titleEm: "du quotidien.",
    body: "Des lieux où séjourner. Des façons de se déplacer. Plus de ce qui compte.",
    bodyBreak: "Une famille de services numériques ciblés, reliés par Nexa.",
    primaryCta: "Découvrir Nexa Stays",
    secondaryCta: "Explorer l’écosystème",
    liveNote: "L’écosystème commence avec Nexa Stays — l’hébergement au Maroc.",
    artCaption: "Un peu plus connectés.",
    signatureLine1: "Des expériences différentes.",
    signatureStrong: "Une famille Nexa.",
    scrollCue: "Il y a plus chez Nexa",
  },
  idea: {
    index: "01 / L’idée",
    title1: "Des produits ciblés.",
    title2: "Un écosystème connecté.",
    body: "Nexa n’est pas une seule application qui veut tout faire. C’est un écosystème de produits spécialisés, chacun conçu pour un usage clair et renforcés par des liens réfléchis entre eux.",
    entityBlock:
      "Nexa est une entreprise technologique marocaine qui construit un écosystème connecté de services numériques spécialisés pour le quotidien. L’écosystème comprend Nexa Stays pour l’hébergement, Nexa Go pour les courses, la livraison de repas de restaurants et la livraison locale, Nexa Pay pour les paiements, Nexa Fresh pour les courses alimentaires, Nexa Market pour le commerce et Nexa Jobs pour l’emploi. Nexa est conçue au Maroc, avec l’ambition à long terme de s’étendre en Afrique du Nord.",
  },
  ecosystem: {
    eyebrow: "L’écosystème Nexa",
    title1: "Une expérience différente.",
    title2: "Pour chaque moment de la journée.",
    blurb1: "Des produits ciblés. Une vision connectée.",
    blurb2: "On commence avec Stays. Puis le reste.",
  },
  stories: {
    eyebrow: "Les produits",
    title1: "La vie avance.",
    title2: "Nous construisons pour elle.",
    blurb1: "Concentrés sur l’essentiel.",
    blurb2: "Prêts pour le plus grand tableau.",
    staysTitle1: "Quelque part de neuf.",
    staysTitle2: "Un sentiment de chez soi.",
    staysBody:
      "Trouvez des hébergements au Maroc, avec plus de clarté et une réservation plus confiante. Votre prochain chapitre commence par un lieu.",
    staysCta: "Trouver un hébergement avec Nexa Stays",
    staysMeet: "Découvrir Nexa Stays",
    staysFootnote: "Notre première expérience grand public",
    photoLabel: "Marrakech, Maroc",
    photoTag: "Un autre rythme.",
    photoDisclaimer: "Inspiration destination",
    photoAlt: "Cour intérieure calme et piscine au Riad Le Rihani à Marrakech",
    goTitle1: "Se déplacer, commander",
    goTitle2: "et envoyer localement.",
    goBody:
      "Nexa Go réunit courses locales, livraison de repas de restaurants et livraison locale générale dans un seul service.",
    goMeet: "Découvrir Nexa Go — courses et livraison de repas",
    freshTitle1: "Les courses,",
    freshTitle2: "livrées rapidement.",
    freshBody:
      "Nexa Fresh est dédié spécifiquement à la livraison de courses et aux essentiels du quotidien — objectif de moins de 15 minutes là où c’est possible.",
    freshMeet: "Découvrir Nexa Fresh",
    payTitle1: "Un peu moins entre",
    payTitleEm: "vous et payé.",
    payBody:
      "Transferts du quotidien, paiements commerçants et checkout Nexa. Nous construisons une expérience de paiement qui rassemble.",
    payCta: "Découvrir Nexa Pay",
    payNote: "Disponibilité et fonctions introduites par étapes.",
    marketHeadline: "Une bonne trouvaille change la journée.",
    jobsHeadline: "Et votre prochain chapitre ?",
    marketBody:
      "Une marketplace qui relie personnes, vendeurs et entreprises. Découvrez des produits, comparez et prenez part au commerce numérique local.",
    jobsBody:
      "Nexa Jobs est conçu pour relier les gens aux opportunités et aider les entreprises à trouver les talents dont elles ont besoin.",
    marketMeet: "Découvrir Nexa Market",
    jobsMeet: "Découvrir Nexa Jobs",
    exploreProduct: "Explorer",
    horizonEyebrow: "À l’horizon",
    horizonTitle: "Nexa Maps & Nexa Cloud",
    horizonBody:
      "Découverte locale et couches numériques à plus long terme — produits futurs.",
    horizonCta: "Voir tous les produits",
  },
  why: {
    eyebrow: "Pourquoi Nexa",
    title1: "Solides seuls.",
    title2: "Meilleurs ensemble.",
    p1: "La vie circule entre lieux, plans et personnes. Vos expériences numériques devraient pouvoir suivre.",
    p2: "Nous construisons des produits ciblés sur des bases partagées, pour que des liens utiles puissent grandir entre eux.",
    link: "Découvrir l’écosystème numérique Nexa",
  },
  journey: {
    eyebrow: "Le lien dans le quotidien",
    title: "Un week-end à Marrakech.",
    blurb1: "Un voyage. Plusieurs besoins.",
    blurb2: "Voyez comment Nexa pourrait les relier.",
  },
  proof: {
    eyebrow: "Par où ça commence",
    title1: "Un vrai produit.",
    title2: "Le début de quelque chose de plus grand.",
    body: "Tout écosystème doit commencer quelque part. Pour Nexa, ce point de départ est l’hébergement — des séjours plus clairs et structurés au Maroc.",
    cta: "Découvrir Nexa Stays",
    liveNow: "Produit de lancement",
    aside: "Hébergement au Maroc",
  },
  morocco: {
    photoLabel: "On commence près de chez soi.",
    photoAlt:
      "Rue de Marrakech avec commerces locaux, passants et architecture terracotta",
    eyebrow: "Notre point de départ",
    title1: "Conçu au Maroc.",
    title2: "Avec un peu",
    titleEm: "plus en tête.",
    p1: "Construire près des gens. Comprendre leur journée. Créer quelque chose d’utile.",
    p2: "Le Maroc est là où nous commençons, apprenons et grandissons — avec l’ambition, à terme, de relier davantage l’Afrique du Nord.",
    link: "Mieux connaître Nexa",
    geoFrom: "Maroc",
    geoTo: "Afrique du Nord",
  },
  roadmap: {
    eyebrow: "Pas à pas",
    title: "Construire la suite.",
    link: "Notre feuille de route",
  },
  build: {
    eyebrow: "Construire avec nous",
    title1: "Il y a de la place",
    title2: "pour vous dans cette histoire.",
    body1: "Ingénieurs, designers, opérateurs et entreprises.",
    body2: "Aidez à façonner le quotidien avec Nexa.",
    careersSmall: "Apportez votre curiosité",
    careers: "Construire votre carrière avec Nexa",
    partnersSmall: "Apportez votre activité",
    partners: "Devenir partenaire de l’écosystème",
  },
  updates: {
    eyebrow: "Construire Nexa",
    title: "Suivre les avancées.",
    body: "Développements produit et actualités de l’entreprise, au fil de l’eau.",
    cardEyebrow: "Produit / Nexa Stays",
    cardTitle: "L’écosystème commence avec Stays.",
    cardLink: "Ce que nous construisons",
  },
  finalCta: {
    title1: "Commencez avec Nexa Stays.",
    title2: "Voyez où commence l’écosystème.",
    cta: "Découvrir Nexa Stays",
  },
  productShort: {
    stays: "Découverte et réservation d’hébergements, conçues pour plus de clarté et de confiance.",
    go: "Courses locales, livraison de repas et livraison locale générale.",
    pay: "Une future couche de paiement pour les transactions Nexa prises en charge.",
    fresh: "Livraison rapide de courses pour les essentiels du quotidien.",
    market: "Une marketplace numérique reliant clients et commerçants.",
    jobs: "Une plateforme carrières reliant talents et opportunités.",
    maps: "Mieux connaître les alentours.",
    cloud: "Une couche numérique à plus long terme.",
  },
  productVerb: {
    stays: "Séjourner",
    go: "Se déplacer",
    pay: "Payer",
    fresh: "Courses",
    market: "Acheter",
    jobs: "Travailler",
    maps: "Explorer",
    cloud: "Créer",
  },
};

const ar: Dictionary = {
  skip: "تخطّى إلى المحتوى",
  nav: {
    products: "المنتجات",
    ecosystem: "النظام البيئي",
    insights: "رؤى",
    whyNexa: "لماذا نكسا",
    roadmap: "خارطة الطريق",
    about: "من نحن",
    careers: "الوظائف",
    contact: "تواصل",
    exploreStays: "اكتشف Nexa Stays",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    mainNav: "التنقل الرئيسي",
    mobileNav: "تنقل الجوال",
    homeAria: "الصفحة الرئيسية لنكسا",
    language: "اللغة",
  },
  footer: {
    tagline: "نظام بيئي واحد\nللحياة اليومية.",
    builtIn: "بُني في المغرب. مصمّم للنمو.",
    products: "منتجاتنا",
    company: "الشركة",
    connect: "لنتواصل",
    partnerships: "الشراكات",
    contact: "تواصل",
    linkedin: "LinkedIn",
    privacy: "الخصوصية",
    terms: "الشروط",
    cookies: "ملفات تعريف الارتباط",
    credits: "حقوق الصور",
    moroccoFirst: "المغرب أولاً. والمزيد قادم.",
    about: "من نحن",
    whyNexa: "لماذا نكسا",
    roadmap: "خارطة الطريق",
    careers: "الوظائف",
    updates: "التحديثات",
    insights: "رؤى",
  },
  status: {
    Launching: "قيد الإطلاق",
    Planned: "مخطط",
    "In development roadmap": "في خارطة التطوير",
    "Long-term roadmap": "خارطة طريق طويلة الأمد",
    Future: "مستقبلي",
    Live: "متاح",
    "Coming soon": "قريباً",
    "In development": "قيد التطوير",
  },
  hero: {
    eyebrow: "بُني في المغرب",
    titleLine1: "نظام بيئي واحد",
    titleEm: "للحياة اليومية.",
    body: "أماكن للإقامة. طرق للتنقل. المزيد مما يهم.",
    bodyBreak: "عائلة من الخدمات الرقمية المتخصصة، مترابطة عبر نكسا.",
    primaryCta: "اكتشف Nexa Stays",
    secondaryCta: "استكشف النظام البيئي",
    liveNote: "يبدأ النظام البيئي مع Nexa Stays — الإقامة في المغرب.",
    artCaption: "قليل من الترابط أكثر.",
    signatureLine1: "تجارب مختلفة.",
    signatureStrong: "عائلة نكسا واحدة.",
    scrollCue: "هناك المزيد في نكسا",
  },
  idea: {
    index: "01 / الفكرة",
    title1: "منتجات مركّزة.",
    title2: "نظام بيئي مترابط واحد.",
    body: "نكسا ليست تطبيقاً واحداً يحاول فعل كل شيء. إنها نظام بيئي من منتجات متخصصة، كل منها مصمّم لغرض واضح ويتعزّز عبر روابط مدروسة مع البقية.",
    entityBlock:
      "نكسا شركة تكنولوجيا مغربية تبني نظاماً بيئياً مترابطاً من خدمات رقمية متخصصة للحياة اليومية. يشمل النظام البيئي Nexa Stays للإقامة، وNexa Go للرحلات وتوصيل طعام المطاعم والتوصيل المحلي، وNexa Pay للمدفوعات، وNexa Fresh للبقالة، وNexa Market للتجارة، وNexa Jobs للتوظيف. تُبنى نكسا في المغرب بطموح طويل الأمد للتوسع عبر شمال أفريقيا.",
  },
  ecosystem: {
    eyebrow: "النظام البيئي لنكسا",
    title1: "تجربة مختلفة.",
    title2: "لكل جزء من يومك.",
    blurb1: "منتجات مركّزة. رؤية مترابطة واحدة.",
    blurb2: "نبدأ مع Stays. ثم نبني ما يلي.",
  },
  stories: {
    eyebrow: "تعرّف على المنتجات",
    title1: "الحياة تمضي.",
    title2: "ونحن نبني من أجلها.",
    blurb1: "مركّزون على التفاصيل الصغيرة.",
    blurb2: "جاهزون للصورة الأكبر.",
    staysTitle1: "مكان جديد.",
    staysTitle2: "شعور بالمنزل.",
    staysBody:
      "اكتشف أماكن للإقامة في المغرب، بتفاصيل أوضح وتجربة حجز أكثر ثقة. فصلك التالي يبدأ بمكان.",
    staysCta: "اعثر على إقامة مع Nexa Stays",
    staysMeet: "تعرّف على Nexa Stays",
    staysFootnote: "أول تجربة استهلاكية لنا",
    photoLabel: "مراكش، المغرب",
    photoTag: "إيقاع مختلف.",
    photoDisclaimer: "إلهام وجهة",
    photoAlt: "فناء هادئ ومسبح في رياض الريحاني بمراكش",
    goTitle1: "تنقّل، اطلب",
    goTitle2: "وأرسل محلياً.",
    goBody:
      "تجمع Nexa Go بين الرحلات المحلية وتوصيل طعام المطاعم والتوصيل المحلي العام في خدمة واحدة.",
    goMeet: "تعرّف على Nexa Go للرحلات وتوصيل الطعام",
    freshTitle1: "بقالة",
    freshTitle2: "تُسلَّم بسرعة.",
    freshBody:
      "Nexa Fresh مخصص لتوصيل البقالة وأساسيات المنزل اليومية — مع هدف طويل الأمد أقل من 15 دقيقة حيث يتوفر الدعم.",
    freshMeet: "تعرّف على Nexa Fresh",
    payTitle1: "مسافة أقل بينك وبين",
    payTitleEm: "الدفع.",
    payBody:
      "تحويلات يومية ومدفوعات التجار وcheckout نكسا. نبني تجربة دفع تجمعها معًا.",
    payCta: "اكتشف Nexa Pay",
    payNote: "التوفر والوظائف تُطرح على مراحل.",
    marketHeadline: "اكتشاف جيد يغيّر يومك.",
    jobsHeadline: "ما هو فصلك التالي؟",
    marketBody:
      "سوق يربط الناس والبائعين والشركات. اكتشف المنتجات، قارن الخيارات، وشارك في التجارة الرقمية المحلية.",
    jobsBody:
      "Nexa Jobs مصمّم لربط الناس بفرص العمل ومساعدة الشركات على إيجاد من تحتاجهم.",
    marketMeet: "تعرّف على Nexa Market",
    jobsMeet: "تعرّف على Nexa Jobs",
    exploreProduct: "استكشف",
    horizonEyebrow: "في الأفق",
    horizonTitle: "Nexa Maps و Nexa Cloud",
    horizonBody: "اكتشاف محلي وطبقات رقمية أطول أمدًا — منتجات مستقبلية.",
    horizonCta: "عرض كل المنتجات",
  },
  why: {
    eyebrow: "لماذا نكسا",
    title1: "جيدة بمفردها.",
    title2: "أفضل معًا.",
    p1: "الحياة تتحرك بين الأماكن والخطط والناس. ينبغي أن تستطيع تجاربك الرقمية أن تتبعك.",
    p2: "نبني منتجات مركّزة على أسس مشتركة، حتى تنمو روابط مفيدة بينها.",
    link: "تعرّف على النظام البيئي الرقمي لنكسا",
  },
  journey: {
    eyebrow: "الربط في الحياة اليومية",
    title: "عطلة نهاية أسبوع في مراكش.",
    blurb1: "رحلة واحدة. احتياجات مختلفة.",
    blurb2: "شاهد كيف يمكن لنكسا أن تجمعها.",
  },
  proof: {
    eyebrow: "من أين تبدأ نكسا",
    title1: "يبدأ النظام البيئي",
    title2: "مع Nexa Stays.",
    body: "كل نظام بيئي يحتاج نقطة بداية. بالنسبة لنكسا، تلك البداية هي الإقامة — إقامات قصيرة الأمد أوضح وأكثر تنظيماً في المغرب للضيوف والمضيفين.",
    cta: "اكتشف Nexa Stays",
    liveNow: "منتج الإطلاق",
    aside: "الإقامة في المغرب",
  },
  morocco: {
    photoLabel: "نبدأ قريبًا من المنزل.",
    photoAlt: "شارع في مراكش مع محلات محلية وناس وعمارة ترابية دافئة",
    eyebrow: "نقطة انطلاقنا",
    title1: "بُني في المغرب.",
    title2: "مع قليل من",
    titleEm: "الطموح أكثر.",
    p1: "ابنِ قريبًا من الناس. افهم يومهم. اصنع شيئًا مفيدًا.",
    p2: "المغرب هو حيث نبدأ ونتعلم وننمو — مع طموح طويل الأمد لربط المزيد من شمال أفريقيا.",
    link: "تعرّف على نكسا",
    geoFrom: "المغرب",
    geoTo: "شمال أفريقيا",
  },
  roadmap: {
    eyebrow: "خطوة بخطوة",
    title: "نبني ما يلي.",
    link: "خارطة طريقنا",
  },
  build: {
    eyebrow: "ابنِ معنا",
    title1: "هناك مساحة",
    title2: "لك في هذه القصة.",
    body1: "مهندسون ومصممون ومشغّلون وشركات.",
    body2: "ساعد في تشكيل الحياة اليومية مع نكسا.",
    careersSmall: "أحضر فضولك",
    careers: "ابنِ مسارك المهني مع نكسا",
    partnersSmall: "أحضر عملك",
    partners: "شارك في النظام البيئي",
  },
  updates: {
    eyebrow: "بناء نكسا",
    title: "تابع التقدم.",
    body: "تطورات المنتج وتحديثات الشركة، أولًا بأول.",
    cardEyebrow: "منتج / Nexa Stays",
    cardTitle: "يبدأ النظام البيئي مع Stays.",
    cardLink: "ما الذي نبنيه",
  },
  finalCta: {
    title1: "ابدأ مع Nexa Stays.",
    title2: "وانظر أين يبدأ النظام البيئي.",
    cta: "اكتشف Nexa Stays",
  },
  productShort: {
    stays: "اكتشاف وحجز الإقامة بمزيد من الوضوح والثقة.",
    go: "رحلات محلية وتوصيل طعام المطاعم والتوصيل المحلي العام.",
    pay: "طبقة دفع مستقبلية للمعاملات المدعومة عبر نكسا.",
    fresh: "توصيل سريع للبقالة وأساسيات الحياة اليومية.",
    market: "سوق رقمي يربط العملاء والتجار.",
    jobs: "منصة وظائف تربط الناس بالفرص.",
    maps: "تعرّف على ما حولك.",
    cloud: "طبقة رقمية أطول أمدًا.",
  },
  productVerb: {
    stays: "إقامة",
    go: "تنقل",
    pay: "دفع",
    fresh: "بقالة",
    market: "تسوق",
    jobs: "عمل",
    maps: "استكشاف",
    cloud: "إنشاء",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function translateStatus(
  locale: Locale,
  status: string,
): string {
  const map = dictionaries[locale].status;
  return map[status as keyof typeof map] ?? status;
}
