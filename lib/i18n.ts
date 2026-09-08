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

export type Dictionary = {
  skip: string;
  nav: {
    products: string;
    ecosystem: string;
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
  };
  status: {
    Live: string;
    "Coming soon": string;
    "In development": string;
    Future: string;
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
    builtIn: "Built in Morocco.",
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
  },
  status: {
    Live: "Live",
    "Coming soon": "Coming soon",
    "In development": "In development",
    Future: "Future",
  },
  hero: {
    eyebrow: "Built in Morocco",
    titleLine1: "One ecosystem",
    titleEm: "everyday life.",
    body: "Places to stay. Ways to move. More of what matters.",
    bodyBreak: "A family of focused digital services, connected by Nexa.",
    primaryCta: "Explore Nexa Stays",
    secondaryCta: "Explore the ecosystem",
    liveNote: "Nexa Stays is live — accommodation in Morocco.",
    artCaption: "A little more connected.",
    signatureLine1: "Different experiences.",
    signatureStrong: "One Nexa family.",
    scrollCue: "There’s more to Nexa",
  },
  idea: {
    index: "01 / The idea",
    title1: "Each product has a purpose.",
    title2: "Together, they mean more.",
    body: "Nexa is a growing family of specialized digital services. Each one is built around a part of everyday life. Use them independently, with connections that become more useful as we grow.",
  },
  ecosystem: {
    eyebrow: "The Nexa ecosystem",
    title1: "A different experience.",
    title2: "For every part of your day.",
    blurb1: "Focused products. One connected vision.",
    blurb2: "Starting with Stays. Building what comes next.",
  },
  stories: {
    eyebrow: "Meet the products",
    title1: "Life happens.",
    title2: "We’re building for it.",
    blurb1: "Focused on the little things.",
    blurb2: "Ready for the bigger picture.",
    staysTitle1: "Somewhere new.",
    staysTitle2: "A feeling of home.",
    staysBody:
      "Discover places to stay across Morocco, with clearer details and a more confident booking experience. Your next chapter starts with a place.",
    staysCta: "Find your stay",
    staysMeet: "Meet Nexa Stays",
    staysFootnote: "Our first consumer experience",
    photoLabel: "Marrakech, Morocco",
    photoTag: "A different pace.",
    photoDisclaimer: "Destination inspiration",
    photoAlt: "A quiet courtyard and pool at Riad Le Rihani in Marrakech",
    goTitle1: "Your city.",
    goTitle2: "Your next move.",
    goBody:
      "A ride across town. A package across the neighborhood. Go gets people and things moving.",
    goMeet: "Meet Nexa Go",
    freshTitle1: "Less waiting.",
    freshTitle2: "More living.",
    freshBody:
      "Everyday groceries, delivered quickly. A target of under 15 minutes, where supported.",
    freshMeet: "Meet Nexa Fresh",
    payTitle1: "A little less between",
    payTitleEm: "paid.",
    payBody:
      "Everyday transfers, merchant payments and Nexa checkout. We’re building a payment experience that brings it together.",
    payCta: "Discover Nexa Pay",
    payNote: "Availability and functionality introduced in phases.",
    marketHeadline: "A good find changes your day.",
    jobsHeadline: "What’s your next chapter?",
    marketBody:
      "A marketplace connecting people, sellers and businesses. Discover products, compare options and take part in local digital commerce.",
    jobsBody:
      "Nexa Jobs is being designed to connect people with work opportunities and help businesses find the people they need.",
    marketMeet: "Meet Nexa Market",
    jobsMeet: "Meet Nexa Jobs",
    exploreProduct: "Explore",
    horizonEyebrow: "On the horizon",
    horizonTitle: "Nexa Maps & Nexa Cloud",
    horizonBody: "Local discovery and longer-term digital layers — future products.",
    horizonCta: "See all products",
  },
  why: {
    eyebrow: "Why Nexa",
    title1: "Good on their own.",
    title2: "Better together.",
    p1: "Life moves between places, plans and people. Your digital experiences should be able to follow.",
    p2: "We’re building focused products with shared foundations, so useful connections can grow between them.",
    link: "The idea behind Nexa",
  },
  journey: {
    eyebrow: "The connection in everyday life",
    title: "A weekend in Marrakech.",
    blurb1: "One trip. A few different needs.",
    blurb2: "See how Nexa could bring them together.",
  },
  proof: {
    eyebrow: "Where it starts",
    title1: "A real product.",
    title2: "The start of something bigger.",
    body: "Nexa Stays is live. Our first opportunity to put clarity, local understanding and focused product design into people’s hands.",
    cta: "Explore Nexa Stays",
    liveNow: "Live now",
    aside: "Accommodation in Morocco",
  },
  morocco: {
    photoLabel: "Starting close to home.",
    photoAlt:
      "Marrakech street with local shops, people and warm terracotta architecture",
    eyebrow: "Our starting point",
    title1: "Built in Morocco.",
    title2: "With a little",
    titleEm: "more in mind.",
    p1: "Build close to people. Understand their day. Make something useful.",
    p2: "Morocco is where we start, learn and grow—with a long-term ambition to connect more of North Africa.",
    link: "Get to know Nexa",
    geoFrom: "Morocco",
    geoTo: "North Africa",
  },
  roadmap: {
    eyebrow: "One step at a time",
    title: "Building what’s next.",
    link: "Our roadmap",
  },
  build: {
    eyebrow: "Build with us",
    title1: "There’s room",
    title2: "for you in this story.",
    body1: "Engineers, designers, operators and businesses.",
    body2: "Help shape what everyday life with Nexa becomes.",
    careersSmall: "Bring your curiosity",
    careers: "Build your career with Nexa",
    partnersSmall: "Bring your business",
    partners: "Partner with the ecosystem",
  },
  updates: {
    eyebrow: "Building Nexa",
    title: "Follow the progress.",
    body: "Product developments and company updates, as they happen.",
    cardEyebrow: "Product / Nexa Stays",
    cardTitle: "Our first experience is live.",
    cardLink: "What we’re building",
  },
  finalCta: {
    title1: "Start with a stay.",
    title2: "See where it takes you.",
    cta: "Explore Nexa Stays",
  },
  productShort: {
    stays: "Find your place in Morocco.",
    go: "People and packages, on the move.",
    pay: "Everyday payments, connected.",
    fresh: "Fresh essentials, delivered quickly.",
    market: "Discover, buy and sell.",
    jobs: "Find work. Find your people.",
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
    builtIn: "Conçu au Maroc.",
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
  },
  status: {
    Live: "En ligne",
    "Coming soon": "Bientôt",
    "In development": "En développement",
    Future: "Futur",
  },
  hero: {
    eyebrow: "Conçu au Maroc",
    titleLine1: "Un écosystème",
    titleEm: "du quotidien.",
    body: "Des lieux où séjourner. Des façons de se déplacer. Plus de ce qui compte.",
    bodyBreak: "Une famille de services numériques ciblés, reliés par Nexa.",
    primaryCta: "Découvrir Nexa Stays",
    secondaryCta: "Explorer l’écosystème",
    liveNote: "Nexa Stays est en ligne — l’hébergement au Maroc.",
    artCaption: "Un peu plus connectés.",
    signatureLine1: "Des expériences différentes.",
    signatureStrong: "Une famille Nexa.",
    scrollCue: "Il y a plus chez Nexa",
  },
  idea: {
    index: "01 / L’idée",
    title1: "Chaque produit a un rôle.",
    title2: "Ensemble, ils vont plus loin.",
    body: "Nexa est une famille grandissante de services numériques spécialisés. Chacun répond à une part du quotidien. Utilisez-les séparément ; les liens gagneront en utilité au fil du temps.",
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
    staysCta: "Trouver un séjour",
    staysMeet: "Découvrir Nexa Stays",
    staysFootnote: "Notre première expérience grand public",
    photoLabel: "Marrakech, Maroc",
    photoTag: "Un autre rythme.",
    photoDisclaimer: "Inspiration destination",
    photoAlt: "Cour intérieure calme et piscine au Riad Le Rihani à Marrakech",
    goTitle1: "Votre ville.",
    goTitle2: "Votre prochain trajet.",
    goBody:
      "Un trajet en ville. Un colis dans le quartier. Go fait bouger les gens et les choses.",
    goMeet: "Découvrir Nexa Go",
    freshTitle1: "Moins d’attente.",
    freshTitle2: "Plus de vie.",
    freshBody:
      "Les courses du quotidien, livrées rapidement. Objectif : moins de 15 minutes, là où c’est possible.",
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
    link: "L’idée derrière Nexa",
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
    body: "Nexa Stays est en ligne. Notre première occasion de mettre clarté, ancrage local et design produit ciblé entre les mains des gens.",
    cta: "Découvrir Nexa Stays",
    liveNow: "En ligne",
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
    cardTitle: "Notre première expérience est en ligne.",
    cardLink: "Ce que nous construisons",
  },
  finalCta: {
    title1: "Commencez par un séjour.",
    title2: "Voyez où cela mène.",
    cta: "Découvrir Nexa Stays",
  },
  productShort: {
    stays: "Trouvez votre place au Maroc.",
    go: "Personnes et colis, en mouvement.",
    pay: "Les paiements du quotidien, reliés.",
    fresh: "L’essentiel frais, livré vite.",
    market: "Découvrir, acheter et vendre.",
    jobs: "Trouver un travail. Trouver vos gens.",
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
    builtIn: "بُني في المغرب.",
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
  },
  status: {
    Live: "متاح",
    "Coming soon": "قريباً",
    "In development": "قيد التطوير",
    Future: "مستقبلي",
  },
  hero: {
    eyebrow: "بُني في المغرب",
    titleLine1: "نظام بيئي واحد",
    titleEm: "للحياة اليومية.",
    body: "أماكن للإقامة. طرق للتنقل. المزيد مما يهم.",
    bodyBreak: "عائلة من الخدمات الرقمية المتخصصة، مترابطة عبر نكسا.",
    primaryCta: "اكتشف Nexa Stays",
    secondaryCta: "استكشف النظام البيئي",
    liveNote: "Nexa Stays متاح الآن — الإقامة في المغرب.",
    artCaption: "قليل من الترابط أكثر.",
    signatureLine1: "تجارب مختلفة.",
    signatureStrong: "عائلة نكسا واحدة.",
    scrollCue: "هناك المزيد في نكسا",
  },
  idea: {
    index: "01 / الفكرة",
    title1: "لكل منتج غرض.",
    title2: "ومعًا تعني أكثر.",
    body: "نكسا عائلة متنامية من الخدمات الرقمية المتخصصة. كل واحدة مبنية حول جزء من الحياة اليومية. استخدمها بشكل مستقل، مع روابط تصبح أكثر فائدة مع نمونا.",
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
    staysCta: "اعثر على إقامتك",
    staysMeet: "تعرّف على Nexa Stays",
    staysFootnote: "أول تجربة استهلاكية لنا",
    photoLabel: "مراكش، المغرب",
    photoTag: "إيقاع مختلف.",
    photoDisclaimer: "إلهام وجهة",
    photoAlt: "فناء هادئ ومسبح في رياض الريحاني بمراكش",
    goTitle1: "مدينتك.",
    goTitle2: "حركتك التالية.",
    goBody:
      "رحلة عبر المدينة. طرد عبر الحي. Go يحرّك الناس والأشياء.",
    goMeet: "تعرّف على Nexa Go",
    freshTitle1: "انتظار أقل.",
    freshTitle2: "حياة أكثر.",
    freshBody:
      "مشتريات يومية، تُسلَّم بسرعة. هدف أقل من 15 دقيقة حيث يتوفر الدعم.",
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
    link: "الفكرة خلف نكسا",
  },
  journey: {
    eyebrow: "الربط في الحياة اليومية",
    title: "عطلة نهاية أسبوع في مراكش.",
    blurb1: "رحلة واحدة. احتياجات مختلفة.",
    blurb2: "شاهد كيف يمكن لنكسا أن تجمعها.",
  },
  proof: {
    eyebrow: "من أين نبدأ",
    title1: "منتج حقيقي.",
    title2: "بداية شيء أكبر.",
    body: "Nexa Stays متاح. أول فرصة لنا لوضع الوضوح والفهم المحلي وتصميم المنتج المركّز بين أيدي الناس.",
    cta: "اكتشف Nexa Stays",
    liveNow: "متاح الآن",
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
    cardTitle: "أول تجربة لنا متاحة الآن.",
    cardLink: "ما الذي نبنيه",
  },
  finalCta: {
    title1: "ابدأ بإقامة.",
    title2: "وانظر إلى أين تأخذك.",
    cta: "اكتشف Nexa Stays",
  },
  productShort: {
    stays: "اعثر على مكانك في المغرب.",
    go: "ناس وطرود، في حركة.",
    pay: "مدفوعات يومية، مترابطة.",
    fresh: "أساسيات طازجة، بسرعة.",
    market: "اكتشف، اشترِ، وبِع.",
    jobs: "اعثر على عمل. اعثر على ناسك.",
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
