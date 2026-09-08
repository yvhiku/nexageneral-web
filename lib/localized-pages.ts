import type { Locale } from "@/lib/i18n";
import type { SeoEntry } from "@/lib/seo";

export type LocalizedHero = {
  eyebrow: string;
  title: string;
  description: string;
};

export type LocalizedProse = {
  heading: string;
  paragraphs: string[];
};

export type LocalizedProductCopy = {
  seo: SeoEntry;
  seoH1: string;
  answerBlock: string;
  headline: string;
  short: string;
  description: string;
  details: string[];
  longform: {
    sections: { id: string; heading: string; paragraphs: string[]; bullets?: string[] }[];
    faq: { q: string; a: string }[];
  };
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
};

export type LocalizedCompanyPage = {
  seo: SeoEntry;
  hero: LocalizedHero;
  sections: LocalizedProse[];
};

const frProducts: Record<string, LocalizedProductCopy> = {
  stays: {
    seo: {
      title: "Nexa Stays — Plateforme d’hébergement au Maroc | Nexa",
      description:
        "Nexa Stays est la plateforme d’hébergement de Nexa pour des séjours de courte durée plus clairs et structurés au Maroc — premier produit de l’écosystème Nexa.",
      path: "/fr/stays/",
    },
    seoH1: "Nexa Stays : hébergement au Maroc",
    answerBlock:
      "Nexa Stays est la plateforme d’hébergement de Nexa au sein de l’écosystème Nexa au Maroc. Elle est conçue pour rendre les séjours de courte durée plus clairs et structurés pour les voyageurs et les hôtes. Nexa Stays est le produit de lancement de Nexa. La page corporate est sur nexa.ma ; l’expérience commerciale de réservation est sur nexastays.ma.",
    headline: "Séjournez avec plus de confiance.",
    short:
      "Découverte et réservation d’hébergement conçues pour plus de clarté et de confiance.",
    description:
      "Nexa Stays est une plateforme marocaine d’hébergement créée pour rendre les séjours de courte durée plus clairs, plus sûrs et plus structurés pour les voyageurs et les hôtes.",
    details: [
      "Explorez des logements avec des informations, photos et règles de maison plus claires.",
      "Faites des demandes de réservation structurées avec une meilleure communication.",
      "Gestion respectueuse de la vie privée des adresses et vérification des hôtes.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Qu’est-ce que Nexa Stays ?",
          paragraphs: [
            "Nexa Stays est la plateforme d’hébergement de Nexa pour découvrir et réserver des séjours de courte durée au Maroc. C’est le premier produit grand public de l’écosystème Nexa.",
            "Le produit met l’accent sur des annonces plus claires, des demandes structurées, la confiance entre voyageurs et hôtes, et un partage progressif des informations sensibles.",
            "nexa.ma/stays explique le produit dans l’écosystème. L’expérience commerciale de réservation est sur nexastays.ma.",
          ],
        },
        {
          id: "morocco",
          heading: "Conçu pour le Maroc",
          paragraphs: [
            "Nexa Stays est développé autour des réalités du marché marocain de l’hébergement — attentes locales, pratiques des hôtes et dynamiques des villes — plutôt que de simplement copier une plateforme internationale.",
          ],
        },
        {
          id: "status",
          heading: "Statut actuel",
          paragraphs: [
            "Nexa Stays est le produit de lancement de Nexa. Disponibilité, fonctionnalités et villes évoluent avec le service. Pour réserver : nexastays.ma.",
          ],
        },
      ],
      faq: [
        {
          q: "Qu’est-ce que Nexa Stays ?",
          a: "Nexa Stays est la plateforme d’hébergement marocaine de Nexa pour des séjours de courte durée plus clairs et structurés. C’est le premier produit de l’écosystème.",
        },
        {
          q: "Où réserver un séjour ?",
          a: "L’expérience commerciale est sur nexastays.ma. La page nexa.ma/stays présente le produit et sa place dans Nexa.",
        },
        {
          q: "Nexa Stays est-il disponible hors du Maroc ?",
          a: "Nexa Stays commence au Maroc. Une expansion plus large suivrait une exécution solide sur le marché domestique.",
        },
      ],
    },
    ctaTitle: "Votre prochain séjour commence ici.",
    ctaBody:
      "Découvrez Nexa Stays et suivez le lancement de la première expérience Nexa.",
    ctaLabel: "Trouver un hébergement avec Nexa Stays",
  },
  go: {
    seo: {
      title: "Nexa Go Maroc — Courses, repas et livraison locale | Nexa",
      description:
        "Nexa Go est la plateforme de mobilité et de livraison de Nexa au Maroc pour les courses locales, la livraison de repas de restaurants et la livraison locale générale — au sein de l’écosystème Nexa.",
      path: "/fr/go/",
    },
    seoH1: "Nexa Go Maroc : courses, repas et livraison locale",
    answerBlock:
      "Nexa Go est un service planifié de mobilité et de livraison locale au sein de l’écosystème Nexa au Maroc. Il est conçu pour réunir courses locales, livraison de repas de restaurants et livraison locale générale dans un seul service focalisé. La livraison de courses alimentaires appartient à Nexa Fresh, pas à Nexa Go.",
    headline: "Se déplacer. Commander. Livrer.",
    short:
      "Courses locales, livraison de repas de restaurants et livraison locale générale.",
    description:
      "Nexa Go est le service de mobilité et de livraison de Nexa, conçu pour réunir courses locales, livraison de repas de restaurants et livraison locale générale au Maroc.",
    details: [
      "Demandez des courses locales et suivez clairement l’avancement du trajet.",
      "Découvrez des restaurants participants et commandez des repas préparés.",
      "Envoyez ou recevez documents, colis et achats du quotidien en local.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Qu’est-ce que Nexa Go ?",
          paragraphs: [
            "Nexa Go est la plateforme prévue de mobilité et de livraison locale de Nexa au Maroc. Elle réunit trois besoins du quotidien : courses locales, livraison de repas de restaurants et livraison locale générale.",
          ],
        },
        {
          id: "vs-fresh",
          heading: "Go n’est pas Fresh",
          paragraphs: [
            "La livraison de repas de restaurants appartient à Nexa Go. Les courses alimentaires et essentiels du foyer appartiennent à Nexa Fresh — des modèles opérationnels différents.",
          ],
        },
        {
          id: "status",
          heading: "Statut",
          paragraphs: [
            "Nexa Go est planifié. Le périmètre et le calendrier dépendent de la capacité opérationnelle et de la demande.",
          ],
        },
      ],
      faq: [
        {
          q: "Nexa Go livre-t-il les courses alimentaires ?",
          a: "Non. Les courses appartiennent à Nexa Fresh. Nexa Go couvre courses, repas de restaurants et livraison locale générale.",
        },
        {
          q: "Quand Nexa Go sera-t-il disponible ?",
          a: "Nexa Go est sur la feuille de route. Le lancement dépendra de la préparation opérationnelle dans les zones supportées.",
        },
      ],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits qui composent Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
  pay: {
    seo: {
      title: "Nexa Pay Maroc — Paiements numériques pour l’écosystème Nexa",
      description:
        "Nexa Pay Maroc est prévu comme couche de paiement pour les services Nexa et expériences marchandes supportés au Maroc, développé progressivement au sein de l’écosystème Nexa.",
      path: "/fr/pay/",
    },
    seoH1: "Nexa Pay Maroc : paiements numériques",
    answerBlock:
      "Nexa Pay Maroc est prévu comme couche de paiement pour les services Nexa supportés et certaines expériences marchandes au sein de l’écosystème Nexa. Ce n’est pas une banque. Les capacités seront introduites progressivement, sous réserve des exigences réglementaires, opérationnelles et techniques au Maroc.",
    headline: "Des paiements qui relient l’expérience.",
    short: "Une future couche de paiement pour les transactions Nexa supportées.",
    description:
      "Nexa Pay est prévu comme couche de paiement pour certains services Nexa et expériences marchandes. Son but : faciliter et clarifier les transactions supportées dans l’écosystème.",
    details: [
      "Paiement cohérent pour les services Nexa supportés.",
      "Paiements marchands et expériences QR le cas échéant, par phases.",
      "Capacités sous réserve des exigences réglementaires, opérationnelles et techniques.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Qu’est-ce que Nexa Pay ?",
          paragraphs: [
            "Nexa Pay est la couche de paiement prévue pour les services Nexa supportés et certaines expériences marchandes au Maroc, introduite progressivement.",
          ],
        },
      ],
      faq: [
        {
          q: "Qu’est-ce que Nexa Pay ?",
          a: "Nexa Pay Maroc est prévu comme couche de paiement pour les services Nexa supportés et certaines expériences marchandes au sein de l’écosystème Nexa au Maroc.",
        },
        {
          q: "Nexa Pay est-il disponible au Maroc ?",
          a: "Nexa Pay est sur la feuille de route de développement pour le Maroc. Ce n’est pas encore un produit de paiement public entièrement live.",
        },
        {
          q: "Nexa Pay est-il une banque ?",
          a: "Non. Nexa Pay est conçu comme couche de transaction pour l’écosystème, sous réserve des exigences réglementaires — pas comme banque de plein exercice.",
        },
        {
          q: "Est-ce le même produit que d’autres apps nommées Nexa Pay ?",
          a: "Non. Cette page décrit Nexa Pay comme produit de Nexa, l’entreprise technologique marocaine sur nexa.ma — pas des produits sans lien qui partagent un nom similaire ailleurs.",
        },
      ],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits qui composent Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
  fresh: {
    seo: {
      title: "Nexa Fresh — Livraison de courses au Maroc | Nexa",
      description:
        "Nexa Fresh est le service de livraison de courses de Nexa pour les essentiels du quotidien au Maroc — distinct de la livraison de repas sur Nexa Go.",
      path: "/fr/fresh/",
    },
    seoH1: "Nexa Fresh : livraison de courses au Maroc",
    answerBlock:
      "Nexa Fresh est le service planifié de livraison de courses au sein de l’écosystème Nexa au Maroc, centré sur les essentiels du quotidien. La livraison de repas de restaurants appartient à Nexa Go. Les deux produits sont séparés par conception.",
    headline: "Les courses, rapidement.",
    short: "Livraison rapide de courses pour les essentiels du quotidien.",
    description:
      "Nexa Fresh est le service dédié de livraison de courses et d’essentiels du foyer au Maroc — séparé de la livraison de repas de restaurants sur Nexa Go.",
    details: [
      "Commandez courses et essentiels du quotidien pour une livraison locale rapide.",
      "Conçu autour inventaire, substitutions et paniers ménagers — pas autour des menus restaurant.",
      "Objectif long terme : moins de 15 minutes là où les opérations le permettent.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Qu’est-ce que Nexa Fresh ?",
          paragraphs: [
            "Nexa Fresh est le produit courses de Nexa. Il se concentre sur l’épicerie et les essentiels du foyer, pas sur les repas de restaurants.",
          ],
        },
        {
          id: "vs-go",
          heading: "Fresh n’est pas Go",
          paragraphs: [
            "Les repas de restaurants appartiennent à Nexa Go. Garder la frontière claire permet à chaque produit de rester exécutable.",
          ],
        },
      ],
      faq: [
        {
          q: "Puis-je commander un repas de restaurant sur Fresh ?",
          a: "Non. Les repas de restaurants sont prévus sur Nexa Go. Fresh est dédié aux courses.",
        },
      ],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits qui composent Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
  market: {
    seo: {
      title: "Nexa Market — Marketplace numérique au Maroc | Nexa",
      description:
        "Nexa Market est prévu comme marketplace e-commerce de Nexa reliant clients et marchands au Maroc.",
      path: "/fr/market/",
    },
    seoH1: "Nexa Market : marketplace numérique au Maroc",
    answerBlock:
      "Nexa Market est prévu comme marketplace numérique au sein de l’écosystème Nexa au Maroc, reliant clients et marchands. Il est sur la feuille de route long terme et n’est pas une marketplace publique active aujourd’hui.",
    headline: "Le commerce, plus près.",
    short: "Une marketplace numérique reliant clients et marchands.",
    description:
      "Nexa Market est prévu comme marketplace e-commerce de Nexa pour connecter clients et marchands au Maroc.",
    details: [
      "Découverte de produits et marchands dans une expérience dédiée.",
      "Connexions possibles avec livraison locale (Go) et paiements supportés (Pay).",
      "Feuille de route long terme — après les fondations de l’écosystème.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Qu’est-ce que Nexa Market ?",
          paragraphs: [
            "Nexa Market est la direction e-commerce à long terme de Nexa pour le Maroc — une marketplace dédiée, pas un fourre-tout dans une super-app.",
          ],
        },
      ],
      faq: [
        {
          q: "Nexa Market est-il disponible ?",
          a: "Nexa Market est sur la feuille de route long terme. Il suivra une exécution solide des produits prioritaires.",
        },
      ],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits qui composent Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
  jobs: {
    seo: {
      title: "Nexa Jobs — Emploi et recrutement au Maroc | Nexa",
      description:
        "Nexa Jobs est prévu comme plateforme carrières de Nexa reliant candidats et employeurs au Maroc.",
      path: "/fr/jobs/",
    },
    seoH1: "Nexa Jobs : emploi et recrutement au Maroc",
    answerBlock:
      "Nexa Jobs est prévu comme plateforme carrières au sein de l’écosystème Nexa au Maroc, reliant candidats et employeurs. Il est distinct des carrières au sein de l’entreprise Nexa (nexa.ma/careers).",
    headline: "Trouver l’opportunité.",
    short: "Une plateforme carrières reliant personnes et opportunités.",
    description:
      "Nexa Jobs est prévu comme plateforme carrières de Nexa pour connecter candidats et employeurs au Maroc.",
    details: [
      "Offres et profils dans une expérience emploi dédiée.",
      "Conçu pour le marché du travail marocain au fil du temps.",
      "Feuille de route long terme au sein de l’écosystème Nexa.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Qu’est-ce que Nexa Jobs ?",
          paragraphs: [
            "Nexa Jobs est la direction emploi à long terme de Nexa — distincte de la page Carrières de l’entreprise Nexa.",
          ],
        },
      ],
      faq: [
        {
          q: "Nexa Jobs est-il le recrutement interne de Nexa ?",
          a: "Non. Les carrières chez Nexa sont sur nexa.ma/careers. Nexa Jobs est un produit prévu pour candidats et employeurs.",
        },
      ],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits qui composent Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
  maps: {
    seo: {
      title: "Nexa Maps — Concept futur Nexa",
      description:
        "Nexa Maps est un concept futur au sein de l’écosystème Nexa. Ce n’est pas un produit public actif.",
      path: "/fr/maps/",
    },
    seoH1: "Nexa Maps : concept futur",
    answerBlock:
      "Nexa Maps est un concept futur au sein de l’écosystème Nexa. Ce n’est pas un produit public actif.",
    headline: "Explorer ce qui est à proximité.",
    short: "Un concept futur — pas un produit actif.",
    description:
      "Nexa Maps est un concept futur. Ce n’est pas un produit public actif.",
    details: [
      "Direction exploratoire pour découvrir ce qui est à proximité.",
      "Pas commercialisé comme offre actuelle.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Concept futur",
          paragraphs: [
            "Nexa Maps n’est pas un produit public actif. Les six produits cœur restent Stays, Go, Pay, Fresh, Market et Jobs.",
          ],
        },
      ],
      faq: [],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits cœur de Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
  cloud: {
    seo: {
      title: "Nexa Cloud — Concept futur Nexa",
      description:
        "Nexa Cloud représente une direction d’infrastructure numérique à plus long terme. Ce n’est pas un produit public actif.",
      path: "/fr/cloud/",
    },
    seoH1: "Nexa Cloud : concept futur",
    answerBlock:
      "Nexa Cloud représente une direction d’infrastructure numérique à plus long terme pour Nexa. Ce n’est pas un produit public actif.",
    headline: "Une couche numérique à plus long terme.",
    short: "Une direction future — pas un produit actif.",
    description:
      "Nexa Cloud représente une direction d’infrastructure à plus long terme. Ce n’est pas un produit public actif.",
    details: [
      "Vision exploratoire au-delà de la feuille de route produit actuelle.",
      "Pas commercialisé comme offre actuelle.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "Concept futur",
          paragraphs: [
            "Nexa Cloud n’est pas un produit public actif.",
          ],
        },
      ],
      faq: [],
    },
    ctaTitle: "Voir le tableau d’ensemble.",
    ctaBody: "Découvrez les produits cœur de Nexa.",
    ctaLabel: "Explorer l’écosystème",
  },
};

const arProducts: Record<string, LocalizedProductCopy> = {
  stays: {
    seo: {
      title: "Nexa Stays — منصة إقامة في المغرب | نكسا",
      description:
        "Nexa Stays منصة الإقامة لدى نكسا لإقامات قصيرة أوضح وأكثر تنظيماً في المغرب — منتج الإطلاق في منظومة نكسا.",
      path: "/ar/stays/",
    },
    seoH1: "Nexa Stays: الإقامة في المغرب",
    answerBlock:
      "Nexa Stays منصة الإقامة لدى نكسا ضمن منظومة نكسا في المغرب. تُبنى لجعل الإقامات القصيرة أوضح وأكثر تنظيماً للضيوف والمضيفين. Nexa Stays منتج الإطلاق لدى نكسا. الصفحة المؤسسية على nexa.ma وتجربة الحجز التجارية على nexastays.ma.",
    headline: "أقم بثقة أكبر.",
    short: "اكتشاف وحجز الإقامة بمزيد من الوضوح والثقة.",
    description:
      "Nexa Stays منصة مغربية للإقامة تُبنى لجعل الإقامات القصيرة أوضح وأكثر أماناً وتنظيماً للضيوف والمضيفين.",
    details: [
      "استكشف أماكن الإقامة بمعلومات وصور وقواعد منزل أوضح.",
      "قدّم طلبات حجز منظمة مع تواصل أفضل.",
      "مشاركة عناوين بحذر للخصوصية وتحقق من المضيفين.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "ما هو Nexa Stays؟",
          paragraphs: [
            "Nexa Stays منصة نكسا لاكتشاف وحجز الإقامات القصيرة في المغرب، وأول منتج موجّه للسوق في منظومة نكسا.",
            "التجربة التجارية للحجز على nexastays.ma. صفحة الشركة على nexa.ma/stays.",
          ],
        },
        {
          id: "status",
          heading: "الوضع الحالي",
          paragraphs: [
            "Nexa Stays منتج الإطلاق لدى نكسا. التوفر والميزات والمدن تتطور مع الخدمة.",
          ],
        },
      ],
      faq: [
        {
          q: "أين أحجز إقامة؟",
          a: "التجربة التجارية على nexastays.ma. nexa.ma/stays يشرح المنتج ضمن نكسا.",
        },
      ],
    },
    ctaTitle: "إقامتك التالية تبدأ هنا.",
    ctaBody: "اكتشف Nexa Stays وتابع إطلاق أول تجربة نكسا.",
    ctaLabel: "ابحث عن إقامة مع Nexa Stays",
  },
  go: {
    seo: {
      title: "Nexa Go المغرب — تنقل وطعام وتوصيل محلي | نكسا",
      description:
        "Nexa Go منصة التنقل والتوصيل لدى نكسا في المغرب للرحلات وتوصيل طعام المطاعم والتوصيل المحلي العام — ضمن منظومة نكسا.",
      path: "/ar/go/",
    },
    seoH1: "Nexa Go المغرب: تنقل وطعام وتوصيل محلي",
    answerBlock:
      "Nexa Go خدمة مخططة للتنقل والتوصيل المحلي ضمن منظومة نكسا في المغرب. مصممة لدعم الرحلات المحلية وتوصيل طعام المطاعم والتوصيل المحلي العام في خدمة مركّزة واحدة. توصيل البقالة يخص Nexa Fresh وليس Go.",
    headline: "تنقّل. اطلب. وصّل.",
    short: "رحلات محلية وتوصيل طعام المطاعم والتوصيل المحلي العام.",
    description:
      "Nexa Go خدمة التنقل والتوصيل لدى نكسا، مصممة لجمع الرحلات المحلية وتوصيل وجبات المطاعم والتوصيل المحلي العام في المغرب.",
    details: [
      "اطلب رحلات محلية وتابع تقدّم الرحلة بوضوح.",
      "اكتشف مطاعم مشاركة واطلب وجبات للتوصيل.",
      "أرسل أو استلم مستندات وطرود ومشتريات يومية محلياً.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "ما هو Nexa Go؟",
          paragraphs: [
            "Nexa Go منصة مخططة للتنقل والتوصيل المحلي: رحلات، توصيل طعام مطاعم، وتوصيل محلي عام.",
          ],
        },
        {
          id: "vs-fresh",
          heading: "Go ليس Fresh",
          paragraphs: [
            "طعام المطاعم ضمن Go. البقالة ضمن Nexa Fresh.",
          ],
        },
      ],
      faq: [
        {
          q: "هل يوصل Go البقالة؟",
          a: "لا. البقالة لـ Nexa Fresh. Go للرحلات وطعام المطاعم والتوصيل المحلي العام.",
        },
      ],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا.",
    ctaLabel: "استكشف المنظومة",
  },
  pay: {
    seo: {
      title: "Nexa Pay المغرب — مدفوعات رقمية لمنظومة نكسا",
      description:
        "Nexa Pay المغرب طبقة دفع مخططة لخدمات نكسا والتجارب التجارية المدعومة في المغرب، تُطوَّر تدريجياً ضمن منظومة نكسا.",
      path: "/ar/pay/",
    },
    seoH1: "Nexa Pay المغرب: مدفوعات رقمية",
    answerBlock:
      "Nexa Pay المغرب طبقة دفع مخططة لخدمات نكسا المدعومة وبعض تجارب التجار ضمن منظومة نكسا. ليست بنكاً. تُقدَّم القدرات تدريجياً وفق المتطلبات التنظيمية والتشغيلية والتقنية في المغرب.",
    headline: "مدفوعات تربط التجربة.",
    short: "طبقة دفع مستقبلية لمعاملات نكسا المدعومة.",
    description:
      "Nexa Pay طبقة دفع مخططة لخدمات نكسا المختارة وتجارب التجار، لتسهيل المعاملات المدعومة عبر المنظومة.",
    details: [
      "دفع متسق لخدمات نكسا المدعومة.",
      "مدفوعات تجار وتجارب QR عند الحاجة، على مراحل.",
      "القدرات تخضع للمتطلبات التنظيمية والتشغيلية والتقنية.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "ما هو Nexa Pay؟",
          paragraphs: [
            "Nexa Pay طبقة الدفع المخططة للمعاملات المدعومة ضمن منظومة نكسا في المغرب.",
          ],
        },
      ],
      faq: [
        {
          q: "هل Nexa Pay متاح الآن؟",
          a: "Nexa Pay على خارطة طريق التطوير ويُقدَّم تدريجياً وفق المتطلبات.",
        },
      ],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا.",
    ctaLabel: "استكشف المنظومة",
  },
  fresh: {
    seo: {
      title: "Nexa Fresh — توصيل البقالة في المغرب | نكسا",
      description:
        "Nexa Fresh خدمة توصيل البقالة لدى نكسا لأساسيات الحياة اليومية في المغرب — منفصلة عن توصيل طعام المطاعم على Nexa Go.",
      path: "/ar/fresh/",
    },
    seoH1: "Nexa Fresh: توصيل البقالة في المغرب",
    answerBlock:
      "Nexa Fresh خدمة مخططة لتوصيل البقالة ضمن منظومة نكسا في المغرب، تركّز على أساسيات الحياة اليومية. توصيل طعام المطاعم يخص Nexa Go. المنتجان منفصلان عمداً.",
    headline: "البقالة بسرعة.",
    short: "توصيل سريع للبقالة وأساسيات الحياة اليومية.",
    description:
      "Nexa Fresh خدمة مخصصة لتوصيل البقالة وأساسيات المنزل في المغرب — منفصلة عن توصيل وجبات المطاعم على Nexa Go.",
    details: [
      "اطلب البقالة والأساسيات للتوصيل المحلي السريع.",
      "مصمم حول المخزون والاستبدال وسلة المنزل — لا قوائم المطاعم.",
      "هدف طويل الأمد: أقل من 15 دقيقة حيث تسمح العمليات.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "ما هو Nexa Fresh؟",
          paragraphs: [
            "Nexa Fresh منتج البقالة لدى نكسا، وليس توصيل وجبات المطاعم.",
          ],
        },
      ],
      faq: [
        {
          q: "هل أطلب طعام مطعم عبر Fresh؟",
          a: "لا. طعام المطاعم ضمن Nexa Go. Fresh للبقالة.",
        },
      ],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا.",
    ctaLabel: "استكشف المنظومة",
  },
  market: {
    seo: {
      title: "Nexa Market — سوق رقمي في المغرب | نكسا",
      description:
        "Nexa Market سوق إلكتروني مخطط من نكسا يربط العملاء والتجار في المغرب.",
      path: "/ar/market/",
    },
    seoH1: "Nexa Market: سوق رقمي في المغرب",
    answerBlock:
      "Nexa Market سوق رقمي مخطط ضمن منظومة نكسا في المغرب لربط العملاء والتجار. على خارطة الطريق طويلة الأمد وليس سوقاً عاماً نشطاً اليوم.",
    headline: "التجارة أقرب.",
    short: "سوق رقمي يربط العملاء والتجار.",
    description:
      "Nexa Market سوق إلكتروني مخطط لربط العملاء والتجار في المغرب.",
    details: [
      "اكتشاف منتجات وتجار في تجربة مخصصة.",
      "ارتباطات محتملة مع التوصيل المحلي (Go) والدفع المدعوم (Pay).",
      "خارطة طريق طويلة الأمد.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "ما هو Nexa Market؟",
          paragraphs: [
            "Nexa Market اتجاه التجارة الإلكترونية طويل الأمد لدى نكسا للمغرب.",
          ],
        },
      ],
      faq: [
        {
          q: "هل Market متاح؟",
          a: "Nexa Market على خارطة الطريق طويلة الأمد.",
        },
      ],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا.",
    ctaLabel: "استكشف المنظومة",
  },
  jobs: {
    seo: {
      title: "Nexa Jobs — وظائف وتوظيف في المغرب | نكسا",
      description:
        "Nexa Jobs منصة وظائف مخططة من نكسا تربط المرشحين وأصحاب العمل في المغرب.",
      path: "/ar/jobs/",
    },
    seoH1: "Nexa Jobs: وظائف وتوظيف في المغرب",
    answerBlock:
      "Nexa Jobs منصة وظائف مخططة ضمن منظومة نكسا في المغرب لربط المرشحين وأصحاب العمل. تختلف عن وظائف شركة نكسا نفسها (nexa.ma/careers).",
    headline: "اعثر على الفرصة.",
    short: "منصة وظائف تربط الناس بالفرص.",
    description:
      "Nexa Jobs منصة وظائف مخططة لربط المرشحين وأصحاب العمل في المغرب.",
    details: [
      "وظائف وملفات في تجربة توظيف مخصصة.",
      "مصمم لسوق العمل المغربي مع الوقت.",
      "خارطة طريق طويلة الأمد ضمن منظومة نكسا.",
    ],
    longform: {
      sections: [
        {
          id: "what",
          heading: "ما هو Nexa Jobs؟",
          paragraphs: [
            "Nexa Jobs اتجاه التوظيف طويل الأمد — مختلف عن صفحة وظائف شركة نكسا.",
          ],
        },
      ],
      faq: [
        {
          q: "هل Jobs للتوظيف الداخلي في نكسا؟",
          a: "لا. وظائف نكسا على nexa.ma/careers. Nexa Jobs منتج مخطط للمرشحين وأصحاب العمل.",
        },
      ],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا.",
    ctaLabel: "استكشف المنظومة",
  },
  maps: {
    seo: {
      title: "Nexa Maps — مفهوم مستقبلي لنكسا",
      description:
        "Nexa Maps مفهوم مستقبلي ضمن منظومة نكسا. ليس منتجاً عاماً نشطاً.",
      path: "/ar/maps/",
    },
    seoH1: "Nexa Maps: مفهوم مستقبلي",
    answerBlock:
      "Nexa Maps مفهوم مستقبلي ضمن منظومة نكسا. ليس منتجاً عاماً نشطاً.",
    headline: "تعرّف على ما حولك.",
    short: "مفهوم مستقبلي — ليس منتجاً نشطاً.",
    description: "Nexa Maps مفهوم مستقبلي. ليس منتجاً عاماً نشطاً.",
    details: ["اتجاه استكشافي.", "لا يُسوَّق كعرض حالي."],
    longform: {
      sections: [
        {
          id: "what",
          heading: "مفهوم مستقبلي",
          paragraphs: [
            "Nexa Maps ليس منتجاً عاماً نشطاً.",
          ],
        },
      ],
      faq: [],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا الأساسية.",
    ctaLabel: "استكشف المنظومة",
  },
  cloud: {
    seo: {
      title: "Nexa Cloud — مفهوم مستقبلي لنكسا",
      description:
        "Nexa Cloud يمثل اتجاهاً أطول أمداً للبنية الرقمية. ليس منتجاً عاماً نشطاً.",
      path: "/ar/cloud/",
    },
    seoH1: "Nexa Cloud: مفهوم مستقبلي",
    answerBlock:
      "Nexa Cloud يمثل اتجاهاً أطول أمداً للبنية الرقمية لدى نكسا. ليس منتجاً عاماً نشطاً.",
    headline: "طبقة رقمية أطول أمداً.",
    short: "اتجاه مستقبلي — ليس منتجاً نشطاً.",
    description:
      "Nexa Cloud اتجاه بنية أطول أمداً. ليس منتجاً عاماً نشطاً.",
    details: ["رؤية استكشافية.", "لا يُسوَّق كعرض حالي."],
    longform: {
      sections: [
        {
          id: "what",
          heading: "مفهوم مستقبلي",
          paragraphs: [
            "Nexa Cloud ليس منتجاً عاماً نشطاً.",
          ],
        },
      ],
      faq: [],
    },
    ctaTitle: "انظر الصورة الأكبر.",
    ctaBody: "اكتشف منتجات نكسا الأساسية.",
    ctaLabel: "استكشف المنظومة",
  },
};

const frCompany: Record<string, LocalizedCompanyPage> = {
  products: {
    seo: {
      title: "Produits Nexa — Services numériques pour le Maroc",
      description:
        "Explorez les services numériques spécialisés de Nexa pour le Maroc : Stays, Go, Pay, Fresh, Market et Jobs — chacun avec un rôle clair dans un écosystème connecté.",
      path: "/fr/products/",
    },
    hero: {
      eyebrow: "Nos produits",
      title: "Des produits construits autour de besoins réels.",
      description:
        "Nexa réunit des services numériques spécialisés : hébergement, mobilité, livraison, paiements, courses, commerce et emploi. Chaque produit a son rôle. Ensemble, ils forment l’écosystème Nexa.",
    },
    sections: [
      {
        heading: "Quels produits propose Nexa ?",
        paragraphs: [
          "Les six produits cœur sont Nexa Stays, Nexa Go, Nexa Pay, Nexa Fresh, Nexa Market et Nexa Jobs. Maps et Cloud restent des concepts futurs — pas des produits publics actifs.",
        ],
      },
    ],
  },
  ecosystem: {
    seo: {
      title: "Écosystème Nexa — Services numériques connectés au Maroc",
      description:
        "Découvrez comment les services numériques spécialisés de Nexa se connectent : hébergement, mobilité, livraison, paiements, courses, commerce et emploi au Maroc.",
      path: "/fr/ecosystem/",
    },
    hero: {
      eyebrow: "L’écosystème Nexa",
      title: "Des produits différents. Une seule Nexa.",
      description:
        "Nexa construit des services numériques spécialisés pour des besoins du quotidien différents, tout en partageant une vision plus large. Des connexions utiles là où elles améliorent vraiment l’expérience.",
    },
    sections: [
      {
        heading: "Concentré par produit. Relié par Nexa.",
        paragraphs: [
          "Une seule application devient vite complexe quand chaque service est forcé dans la même interface. Nexa construit des produits spécialisés, puis les relie là où cela crée de la valeur.",
          "Séjourner. Se déplacer, manger et livrer. Payer. Faire ses courses. Acheter en ligne. Trouver une opportunité.",
        ],
      },
      {
        heading: "Comment les connexions pourraient fonctionner",
        paragraphs: [
          "Voyage : réservez via Nexa Stays, déplacez-vous et commandez un repas via Nexa Go, faites les courses via Nexa Fresh, payez via Nexa Pay lorsque c’est supporté.",
          "Commerce : trouvez un produit via Nexa Market, livraison locale éligible via Nexa Go, paiement supporté via Nexa Pay.",
          "Principe : l’intégration doit résoudre un problème. Sinon, elle n’a pas besoin d’exister.",
        ],
      },
    ],
  },
  "why-nexa": {
    seo: {
      title: "Pourquoi Nexa — Construire des services numériques pour le Maroc",
      description:
        "Pourquoi Nexa construit des produits numériques spécialisés pour le Maroc — focus avant l’échelle, compréhension locale, connexions utiles.",
      path: "/fr/why-nexa/",
    },
    hero: {
      eyebrow: "Pourquoi Nexa",
      title: "Pourquoi Nexa ?",
      description:
        "Parce que les services numériques du quotidien peuvent être plus focalisés, plus locaux et mieux connectés.",
    },
    sections: [
      {
        heading: "Le focus avant l’échelle",
        paragraphs: [
          "Nous ne croyons pas au lancement de toutes les idées en même temps. Chaque produit Nexa doit mériter sa place en résolvant bien un problème précis.",
        ],
      },
      {
        heading: "Comprendre le local",
        paragraphs: [
          "Construire au Maroc signifie concevoir autour des attentes, entreprises, villes, comportements de paiement, langues et confiance locaux.",
        ],
      },
      {
        heading: "Des connexions avec un but",
        paragraphs: [
          "L’écosystème grandit lorsque les connexions rendent quelque chose plus simple, plus clair ou plus utile — pas pour remplir une checklist marketing.",
        ],
      },
    ],
  },
  roadmap: {
    seo: {
      title: "Feuille de route Nexa — Construire l’écosystème numérique du Maroc",
      description:
        "Voyez comment Nexa construit son écosystème au Maroc par étapes — en commençant par Nexa Stays, puis Pay, Go, Fresh, Market et Jobs.",
      path: "/fr/roadmap/",
    },
    hero: {
      eyebrow: "Notre feuille de route",
      title: "Construire Nexa une étape à la fois.",
      description:
        "La vision long terme de Nexa est large. Son exécution sera délibérée — produits introduits progressivement selon la préparation, la demande et la capacité opérationnelle.",
    },
    sections: [
      {
        heading: "Étape 1 — Nexa Stays",
        paragraphs: [
          "L’hébergement est la première catégorie. Nexa Stays est le point de départ de l’écosystème sur le marché.",
        ],
      },
      {
        heading: "Étape 2 — Nexa Pay",
        paragraphs: [
          "Une couche de transaction est importante pour un écosystème connecté. Nexa Pay sera développé progressivement, sous réserve des exigences réglementaires, techniques et partenariales.",
        ],
      },
      {
        heading: "Étape 3 — Nexa Go et Nexa Fresh",
        paragraphs: [
          "Nexa Go couvre courses, livraison de repas de restaurants et livraison locale générale. Nexa Fresh est dédié aux courses alimentaires. Deux modèles de fulfillment distincts.",
        ],
      },
      {
        heading: "Étape 4 — Nexa Market et Nexa Jobs",
        paragraphs: [
          "À mesure que l’écosystème grandit, Nexa pourra s’étendre au commerce numérique et à l’emploi. Maps et Cloud restent des directions futures.",
          "Cette feuille de route est une direction, pas une promesse de tout lancer d’un coup.",
        ],
      },
    ],
  },
  about: {
    seo: {
      title: "À propos de Nexa — Entreprise technologique marocaine",
      description:
        "À propos de Nexa, entreprise technologique marocaine qui construit un écosystème connecté de services numériques spécialisés, en commençant par Nexa Stays.",
      path: "/fr/about/",
    },
    hero: {
      eyebrow: "À propos de Nexa",
      title: "Construire une technologie utile pour le quotidien.",
      description:
        "Nexa est une entreprise technologique marocaine qui développe des produits numériques spécialisés : hébergement, mobilité, livraison, paiements, courses, commerce et emploi. Nous construisons l’écosystème progressivement, en commençant par Nexa Stays.",
    },
    sections: [
      {
        heading: "Nexa en un coup d’œil",
        paragraphs: [
          "Entreprise : Nexa. Type : entreprise technologique. Modèle : écosystème connecté de services numériques spécialisés. Origine et marché principal : Maroc. Ambition long terme : Afrique du Nord. Produit de lancement : Nexa Stays. Produits cœur : Stays, Go, Pay, Fresh, Market et Jobs. Site corporate : nexa.ma. Réservation Stays : nexastays.ma.",
        ],
      },
      {
        heading: "Ce que Nexa construit",
        paragraphs: [
          "Nexa construit des produits spécialisés avec des rôles clairs, puis les relie là où la connexion crée de la valeur réelle — pas une super-app surchargée.",
          "Statuts : Stays en lancement · Pay en feuille de route développement · Go et Fresh planifiés · Market et Jobs long terme · Maps et Cloud concepts futurs.",
        ],
      },
      {
        heading: "Domaines officiels",
        paragraphs: [
          "nexa.ma — entreprise, écosystème et autorité produit. nexastays.ma — expérience commerciale d’hébergement Nexa Stays.",
        ],
      },
    ],
  },
  careers: {
    seo: {
      title: "Carrières chez Nexa — Construire avec une entreprise technologique marocaine",
      description:
        "Explorez les carrières chez Nexa, entreprise technologique marocaine qui construit des services numériques pour le quotidien.",
      path: "/fr/careers/",
    },
    hero: {
      eyebrow: "Carrières chez Nexa",
      title: "Construisez le prochain chapitre de Nexa.",
      description:
        "Nexa est construite par des personnes en technologie, produit, opérations, marketing et business. L’équipe grandira avec l’entreprise.",
    },
    sections: [
      {
        heading: "Travailler chez Nexa",
        paragraphs: [
          "Nous recherchons des personnes qui veulent construire des produits utiles pour le Maroc — avec rigueur, clarté et ambition long terme.",
          "Pour le produit emploi prévu (candidats et employeurs), voir Nexa Jobs. Cette page concerne les carrières au sein de l’entreprise Nexa.",
        ],
      },
    ],
  },
  partners: {
    seo: {
      title: "Partenariats Nexa — Construire l’écosystème numérique du Maroc",
      description:
        "Partenairez avec Nexa dans l’hospitalité, la restauration, la logistique, la technologie et les collaborations stratégiques au Maroc.",
      path: "/fr/partners/",
    },
    hero: {
      eyebrow: "Partenariats",
      title: "Construire avec Nexa.",
      description:
        "Nexa crée un écosystème qui dépend de relations solides avec des entreprises locales, opérateurs, sociétés technologiques et partenaires stratégiques.",
    },
    sections: [
      {
        heading: "Types de partenariats",
        paragraphs: [
          "Hospitalité et hébergement, restaurants et livraison, logistique, technologie et collaborations stratégiques — selon le produit et le stade.",
        ],
      },
    ],
  },
  updates: {
    seo: {
      title: "Actualités Nexa — Progrès produits et entreprise",
      description:
        "Suivez les développements produits et les progrès de Nexa à mesure que l’écosystème numérique au Maroc grandit.",
      path: "/fr/updates/",
    },
    hero: {
      eyebrow: "Actualités Nexa",
      title: "Suivez ce que nous construisons.",
      description:
        "Un espace pour les développements produits et les progrès significatifs de l’entreprise.",
    },
    sections: [
      {
        heading: "Où lire plus",
        paragraphs: [
          "Pour des perspectives plus longues sur le digital au Maroc, l’hospitalité, la mobilité et le commerce, visitez Nexa Insights.",
        ],
      },
    ],
  },
  contact: {
    seo: {
      title: "Contact Nexa — Parler à l’équipe Nexa",
      description:
        "Contactez Nexa pour l’entreprise, les partenariats, les carrières, les médias ou les demandes Nexa Stays.",
      path: "/fr/contact/",
    },
    hero: {
      eyebrow: "Contact Nexa",
      title: "Parler à Nexa.",
      description:
        "Produits, partenariat, carrière ou entreprise — contactez l’équipe Nexa appropriée.",
    },
    sections: [
      {
        heading: "Nous écrire",
        paragraphs: [
          "Utilisez les canaux indiqués sur cette page selon votre demande. Pour réserver un séjour, utilisez nexastays.ma.",
        ],
      },
    ],
  },
  privacy: {
    seo: {
      title: "Confidentialité — Site Nexa",
      description: "Comment le site corporate Nexa traite les informations.",
      path: "/fr/privacy/",
    },
    hero: {
      eyebrow: "Informations du site",
      title: "Confidentialité.",
      description:
        "Comment ce site corporate traite les informations, et où trouver les informations des services Nexa individuels.",
    },
    sections: [
      {
        heading: "Périmètre",
        paragraphs: [
          "Cette page concerne nexa.ma. Les produits individuels peuvent avoir leurs propres politiques lorsque les services sont actifs.",
        ],
      },
    ],
  },
  terms: {
    seo: {
      title: "Conditions d’utilisation — Site Nexa",
      description: "Conditions d’utilisation du site corporate Nexa.",
      path: "/fr/terms/",
    },
    hero: {
      eyebrow: "Informations du site",
      title: "Utiliser ce site.",
      description:
        "Informations sur le site corporate Nexa et sa relation aux produits Nexa individuels.",
    },
    sections: [
      {
        heading: "Périmètre",
        paragraphs: [
          "Ce site présente l’entreprise et l’écosystème. Les conditions des produits commerciaux (par ex. nexastays.ma) s’appliquent séparément.",
        ],
      },
    ],
  },
  cookies: {
    seo: {
      title: "Cookies — Site Nexa",
      description: "Informations cookies et stockage local pour nexa.ma.",
      path: "/fr/cookies/",
    },
    hero: {
      eyebrow: "Informations du site",
      title: "Cookies et stockage local.",
      description: "Explication simple du stockage navigateur de ce site.",
    },
    sections: [
      {
        heading: "Usage",
        paragraphs: [
          "Ce site corporate utilise un stockage navigateur limité pour le fonctionnement de base. Voir la page Cookies EN pour le détail technique si besoin.",
        ],
      },
    ],
  },
  credits: {
    seo: {
      title: "Crédits photos — Nexa",
      description: "Crédits photographiques des images utilisées sur le site Nexa.",
      path: "/fr/credits/",
    },
    hero: {
      eyebrow: "Crédits photos",
      title: "Les personnes derrière les images.",
      description:
        "De vrais lieux marocains, photographiés par de vraies personnes. Merci aux créateurs.",
    },
    sections: [
      {
        heading: "Remerciements",
        paragraphs: [
          "Les crédits détaillés figurent sur la version anglaise de cette page lorsque les attributions individuelles sont listées.",
        ],
      },
    ],
  },
};

const arCompany: Record<string, LocalizedCompanyPage> = {
  products: {
    seo: {
      title: "منتجات نكسا — خدمات رقمية للمغرب",
      description:
        "استكشف خدمات نكسا الرقمية المتخصصة للمغرب: Stays وGo وPay وFresh وMarket وJobs — لكل منها دور واضح في منظومة واحدةتصلة.",
      path: "/ar/products/",
    },
    hero: {
      eyebrow: "منتجاتنا",
      title: "منتجات مبنية حول احتياجات يومية حقيقية.",
      description:
        "نكسا تجمع خدمات رقمية متخصصة: الإقامة والتنقل والتوصيل والمدفوعات والبقالة والتجارة والتوظيف. لكل منتج غرضه. معاً تشكّل منظومة نكسا.",
    },
    sections: [
      {
        heading: "ما منتجات نكسا؟",
        paragraphs: [
          "المنتجات الستة الأساسية: Nexa Stays وNexa Go وNexa Pay وNexa Fresh وNexa Market وNexa Jobs. Maps وCloud مفاهيم مستقبلية — ليست منتجات عامة نشطة.",
        ],
      },
    ],
  },
  ecosystem: {
    seo: {
      title: "منظومة نكسا — خدمات رقمية مترابطة في المغرب",
      description:
        "تعرّف كيف تتصل خدمات نكسا المتخصصة عبر الإقامة والتنقل والتوصيل والمدفوعات والبقالة والتجارة والتوظيف في المغرب.",
      path: "/ar/ecosystem/",
    },
    hero: {
      eyebrow: "منظومة نكسا",
      title: "منتجات مختلفة. نكسا واحدة.",
      description:
        "نكسا تبني خدمات رقمية متخصصة لاحتياجات يومية مختلفة مع رؤية أوسع. اتصالات مفيدة حيث تحسّن التجربة فعلاً.",
    },
    sections: [
      {
        heading: "تركيز لكل منتج. ربط عبر نكسا.",
        paragraphs: [
          "تطبيق واحد يصبح معقداً عندما تُفرض كل خدمة في الواجهة نفسها. نكسا تبني منتجات متخصصة ثم تربطها حيث تخلق قيمة حقيقية.",
        ],
      },
      {
        heading: "كيف قد تعمل الاتصالات",
        paragraphs: [
          "السفر: احجز عبر Stays، تنقّل واطلب وجبة عبر Go، بقالة عبر Fresh، وادفع عبر Pay عند الدعم.",
          "التجارة: منتج عبر Market، توصيل محلي مؤهل عبر Go، دفع مدعوم عبر Pay.",
          "المبدأ: التكامل يجب أن يحل مشكلة. وإلا فلا داعي له.",
        ],
      },
    ],
  },
  "why-nexa": {
    seo: {
      title: "لماذا نكسا — بناء خدمات رقمية للمغرب",
      description:
        "لماذا تبني نكسا منتجات رقمية متخصصة للمغرب — التركيز قبل التوسع، فهم محلي، واتصالات هادفة.",
      path: "/ar/why-nexa/",
    },
    hero: {
      eyebrow: "لماذا نكسا",
      title: "لماذا نكسا؟",
      description:
        "لأن خدمات الحياة اليومية الرقمية يمكن أن تكون أكثر تركيزاً ومحلية واتصالاً.",
    },
    sections: [
      {
        heading: "التركيز قبل التوسع",
        paragraphs: [
          "لا نؤمن بإطلاق كل الأفكار دفعة واحدة. كل منتج نكسا يجب أن يستحق مكانه بحل مشكلة محددة جيداً.",
        ],
      },
      {
        heading: "فهم المحلي",
        paragraphs: [
          "البناء في المغرب يعني التصميم حول التوقعات والشركات والمدن وسلوك الدفع واللغة والثقة المحلية.",
        ],
      },
    ],
  },
  roadmap: {
    seo: {
      title: "خارطة طريق نكسا — بناء المنظومة الرقمية للمغرب",
      description:
        "كيف تبني نكسا منظومتها في المغرب على مراحل — بدءاً من Nexa Stays ثم Pay وGo وFresh وMarket وJobs.",
      path: "/ar/roadmap/",
    },
    hero: {
      eyebrow: "خارطة الطريق",
      title: "نبني نكسا مرحلة تلو الأخرى.",
      description:
        "رؤية نكسا طويلة الأمد واسعة. التنفيذ سيكون متعمداً — منتجات تُقدَّم تدريجياً حسب الجاهزية والطلب والقدرة التشغيلية.",
    },
    sections: [
      {
        heading: "المرحلة 1 — Nexa Stays",
        paragraphs: ["الإقامة أول فئة. Nexa Stays نقطة انطلاق المنظومة."],
      },
      {
        heading: "المرحلة 2 — Nexa Pay",
        paragraphs: [
          "طبقة المعاملات مهمة لمنظومة متصلة. Nexa Pay يُطوَّر تدريجياً وفق المتطلبات.",
        ],
      },
      {
        heading: "المرحلة 3 — Nexa Go و Nexa Fresh",
        paragraphs: [
          "Go: رحلات وطعام مطاعم وتوصيل محلي عام. Fresh: بقالة. نموذجان مختلفان.",
        ],
      },
      {
        heading: "المرحلة 4 — Nexa Market و Nexa Jobs",
        paragraphs: [
          "مع نمو المنظومة قد تتوسع نكسا للتجارة والتوظيف. Maps وCloud اتجاهات مستقبلية.",
        ],
      },
    ],
  },
  about: {
    seo: {
      title: "عن نكسا — شركة تكنولوجيا مغربية",
      description:
        "عن نكسا، شركة تكنولوجيا مغربية تبني منظومة متصلة من خدمات رقمية متخصصة، بدءاً من Nexa Stays.",
      path: "/ar/about/",
    },
    hero: {
      eyebrow: "عن نكسا",
      title: "نبني تقنية مفيدة للحياة اليومية.",
      description:
        "نكسا شركة تكنولوجيا مغربية تطوّر منتجات رقمية متخصصة عبر الإقامة والتنقل والتوصيل والمدفوعات والبقالة والتجارة والتوظيف. نبني المنظومة تدريجياً بدءاً من Nexa Stays.",
    },
    sections: [
      {
        heading: "نكسا بإيجاز",
        paragraphs: [
          "الشركة: نكسا. النوع: شركة تكنولوجيا. النموذج: منظومة متصلة من خدمات رقمية متخصصة. الأصل والسوق الأساسي: المغرب. الطموح طويل الأمد: شمال أفريقيا. منتج الإطلاق: Nexa Stays. المنتجات الأساسية: Stays وGo وPay وFresh وMarket وJobs. الموقع المؤسسي: nexa.ma. حجز Stays: nexastays.ma.",
        ],
      },
      {
        heading: "ما الذي تبنيه نكسا",
        paragraphs: [
          "نكسا تبني منتجات متخصصة بأغراض واضحة ثم تربطها حيث يخلق الربط قيمة حقيقية — لا تطبيقاً واحداً مثقلاً بكل شيء.",
          "الحالات: Stays قيد الإطلاق · Pay على خارطة التطوير · Go وFresh مخططان · Market وJobs طويل الأمد · Maps وCloud مفاهيم مستقبلية.",
        ],
      },
      {
        heading: "النطاقات الرسمية",
        paragraphs: [
          "nexa.ma — الشركة والمنظومة وسلطة المنتج. nexastays.ma — تجربة حجز Nexa Stays التجارية.",
        ],
      },
    ],
  },
  careers: {
    seo: {
      title: "وظائف نكسا — ابنِ مع شركة تكنولوجيا مغربية",
      description:
        "استكشف الوظائف لدى نكسا، شركة تكنولوجيا مغربية تبني خدمات رقمية للحياة اليومية.",
      path: "/ar/careers/",
    },
    hero: {
      eyebrow: "وظائف نكسا",
      title: "ابنِ الفصل التالي من نكسا.",
      description:
        "تُبنى نكسا بأيدي أشخاص في التقنية والمنتج والعمليات والتسويق والأعمال. سينمو الفريق مع الشركة.",
    },
    sections: [
      {
        heading: "العمل في نكسا",
        paragraphs: [
          "نبحث عن أشخاص يريدون بناء منتجات مفيدة للمغرب. لمنتج التوظيف المخطط للمرشحين وأصحاب العمل، انظر Nexa Jobs.",
        ],
      },
    ],
  },
  partners: {
    seo: {
      title: "شراكات نكسا — ابنِ المنظومة الرقمية للمغرب",
      description:
        "شارك مع نكسا عبر الضيافة والمطاعم واللوجستيات والتقنية والتعاون الاستراتيجي في المغرب.",
      path: "/ar/partners/",
    },
    hero: {
      eyebrow: "الشراكات",
      title: "ابنِ مع نكسا.",
      description:
        "نكسا تخلق منظومة تعتمد على علاقات قوية مع الأعمال المحلية والمشغّلين وشركات التقنية والشركاء الاستراتيجيين.",
    },
    sections: [
      {
        heading: "أنواع الشراكات",
        paragraphs: [
          "ضيافة وإقامة، مطاعم وتوصيل، لوجستيات، تقنية وتعاون استراتيجي — حسب المنتج والمرحلة.",
        ],
      },
    ],
  },
  updates: {
    seo: {
      title: "تحديثات نكسا — تقدّم المنتجات والشركة",
      description:
        "تابع تطورات منتجات نكسا وتقدّم الشركة مع نمو المنظومة الرقمية في المغرب.",
      path: "/ar/updates/",
    },
    hero: {
      eyebrow: "تحديثات نكسا",
      title: "تابع ما نبنيه.",
      description: "مساحة لتطورات المنتج والتقدّم المهم للشركة.",
    },
    sections: [
      {
        heading: "اقرأ المزيد",
        paragraphs: [
          "لوجهات نظر أطول عن الرقمي في المغرب والضيافة والتنقل والتجارة، زر Nexa Insights.",
        ],
      },
    ],
  },
  contact: {
    seo: {
      title: "اتصل بنكسا — تحدّث مع فريق نكسا",
      description:
        "تواصل مع نكسا بشأن الشركة أو الشراكات أو الوظائف أو الإعلام أو استفسارات Nexa Stays.",
      path: "/ar/contact/",
    },
    hero: {
      eyebrow: "اتصل بنكسا",
      title: "تحدّث مع نكسا.",
      description:
        "سواء كنت مهتماً بمنتج أو شراكة أو فرصة عمل أو الشركة نفسها، يمكنك الوصول إلى فريق نكسا المناسب هنا.",
    },
    sections: [
      {
        heading: "راسلنا",
        paragraphs: [
          "استخدم القنوات المناسبة لطلبك. لحجز إقامة استخدم nexastays.ma.",
        ],
      },
    ],
  },
  privacy: {
    seo: {
      title: "الخصوصية — موقع نكسا",
      description: "كيف يتعامل موقع نكسا المؤسسي مع المعلومات.",
      path: "/ar/privacy/",
    },
    hero: {
      eyebrow: "معلومات الموقع",
      title: "الخصوصية.",
      description: "كيف يتعامل هذا الموقع المؤسسي مع المعلومات.",
    },
    sections: [
      {
        heading: "النطاق",
        paragraphs: [
          "هذه الصفحة تخص nexa.ma. قد يكون للمنتجات الفردية سياساتها الخاصة عند تفعيل الخدمات.",
        ],
      },
    ],
  },
  terms: {
    seo: {
      title: "شروط الاستخدام — موقع نكسا",
      description: "شروط استخدام موقع نكسا المؤسسي.",
      path: "/ar/terms/",
    },
    hero: {
      eyebrow: "معلومات الموقع",
      title: "استخدام هذا الموقع.",
      description: "معلومات عن موقع نكسا المؤسسي وعلاقته بمنتجات نكسا.",
    },
    sections: [
      {
        heading: "النطاق",
        paragraphs: [
          "يعرض هذا الموقع الشركة والمنظومة. شروط المنتجات التجارية (مثل nexastays.ma) منفصلة.",
        ],
      },
    ],
  },
  cookies: {
    seo: {
      title: "ملفات تعريف الارتباط — موقع نكسا",
      description: "معلومات ملفات تعريف الارتباط والتخزين المحلي لـ nexa.ma.",
      path: "/ar/cookies/",
    },
    hero: {
      eyebrow: "معلومات الموقع",
      title: "ملفات تعريف الارتباط والتخزين المحلي.",
      description: "شرح مبسّط لتخزين المتصفح في هذا الموقع.",
    },
    sections: [
      {
        heading: "الاستخدام",
        paragraphs: [
          "يستخدم هذا الموقع تخزيناً محدوداً في المتصفح للوظائف الأساسية.",
        ],
      },
    ],
  },
  credits: {
    seo: {
      title: "اعتمادات الصور — نكسا",
      description: "اعتمادات التصوير للصور المستخدمة في موقع نكسا.",
      path: "/ar/credits/",
    },
    hero: {
      eyebrow: "اعتمادات الصور",
      title: "الأشخاص وراء الصور.",
      description: "أماكن مغربية حقيقية، صوّرها أشخاص حقيقيون. شكراً للمبدعين.",
    },
    sections: [
      {
        heading: "شكر",
        paragraphs: [
          "التفاصيل الكاملة للاعتمادات على النسخة الإنجليزية عند إدراج الأسماء.",
        ],
      },
    ],
  },
};

export function getLocalizedProduct(
  locale: Locale,
  slug: string,
): LocalizedProductCopy | undefined {
  if (locale === "fr") return frProducts[slug];
  if (locale === "ar") return arProducts[slug];
  return undefined;
}

export function getLocalizedCompany(
  locale: Locale,
  slug: string,
): LocalizedCompanyPage | undefined {
  if (locale === "fr") return frCompany[slug];
  if (locale === "ar") return arCompany[slug];
  return undefined;
}

export const insightsHubCopy: Record<
  Exclude<Locale, "en">,
  { seo: SeoEntry; eyebrow: string; title: string; description: string; note: string; read: string }
> = {
  fr: {
    seo: {
      title: "Nexa Insights — Maroc digital, hospitalité, mobilité et commerce",
      description:
        "Perspectives de Nexa sur les services numériques au Maroc — hospitalité, mobilité, livraison, commerce et stratégie produit.",
      path: "/fr/insights/",
    },
    eyebrow: "Nexa Insights",
    title: "Des connaissances sur les catégories que nous construisons.",
    description:
      "Nexa Insights publie des perspectives ciblées sur les services numériques au Maroc — liées à l’hébergement, la mobilité, la livraison, le commerce et la façon dont les produits spécialisés se connectent.",
    note: "Les articles sont actuellement publiés en anglais. Les hubs FR/AR aident la découverte ; le contenu long reste sur les URL EN.",
    read: "Lire",
  },
  ar: {
    seo: {
      title: "رؤى نكسا — المغرب الرقمي والضيافة والتنقل والتجارة",
      description:
        "وجهات نظر من نكسا حول الخدمات الرقمية في المغرب — الضيافة والتنقل والتوصيل والتجارة واستراتيجية المنتج.",
      path: "/ar/insights/",
    },
    eyebrow: "رؤى نكسا",
    title: "معرفة حول الفئات التي نبنيها.",
    description:
      "تنشر رؤى نكسا وجهات نظر مركّزة عن الخدمات الرقمية في المغرب — مرتبطة بالإقامة والتنقل والتوصيل والتجارة وكيفية اتصال المنتجات المتخصصة.",
    note: "المقالات منشورة حالياً بالإنجليزية. مراكز FR/AR تساعد على الاكتشاف؛ المحتوى الطويل على روابط EN.",
    read: "اقرأ",
  },
};
