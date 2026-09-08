"use client";
import { useState } from "react";
import Link from "next/link";
import { Brand, Arrow } from "./brand";
import type { Locale } from "@/lib/i18n";

type Step = {
  slug: string;
  title: string;
  body: string;
  label: string;
};

const stepsByLocale: Record<Locale, Step[]> = {
  en: [
    {
      slug: "maps",
      title: "Find your neighborhood.",
      body: "A quiet corner of the medina, a favorite café, a place that feels like you. Start by discovering the area.",
      label: "Discover",
    },
    {
      slug: "stays",
      title: "Make yourself at home.",
      body: "Discover a place nearby through Nexa Stays, with clearer details and a more structured booking experience.",
      label: "Stay",
    },
    {
      slug: "go",
      title: "Get there. Order dinner.",
      body: "Nexa Go helps you ride from the station or airport to your stay — and later order from a nearby restaurant.",
      label: "Go",
    },
    {
      slug: "fresh",
      title: "Groceries for the apartment.",
      body: "Need everyday essentials? Nexa Fresh handles groceries and household items — separate from restaurant delivery.",
      label: "Fresh",
    },
    {
      slug: "pay",
      title: "Pay where supported.",
      body: "As Nexa Pay develops, supported transactions across the ecosystem can become easier to manage.",
      label: "Pay",
    },
  ],
  fr: [
    {
      slug: "maps",
      title: "Trouvez votre quartier.",
      body: "Un coin calme de la médina, un café préféré, un lieu qui vous ressemble. Commencez par découvrir le quartier.",
      label: "Découvrir",
    },
    {
      slug: "stays",
      title: "Installez-vous.",
      body: "Trouvez un hébergement à proximité avec Nexa Stays — détails plus clairs et réservation plus structurée.",
      label: "Séjour",
    },
    {
      slug: "go",
      title: "Arrivez. Commandez à dîner.",
      body: "Nexa Go vous aide à vous rendre de la gare ou de l’aéroport à votre séjour — puis à commander dans un restaurant proche.",
      label: "Go",
    },
    {
      slug: "fresh",
      title: "Courses pour l’appartement.",
      body: "Besoin d’essentiels ? Nexa Fresh s’occupe des courses et du ménage — distinct de la livraison de repas.",
      label: "Fresh",
    },
    {
      slug: "pay",
      title: "Payez là où c’est pris en charge.",
      body: "Au fur et à mesure du développement de Nexa Pay, les transactions prises en charge dans l’écosystème pourront être plus simples.",
      label: "Payer",
    },
  ],
  ar: [
    {
      slug: "maps",
      title: "اعثر على حيّك.",
      body: "ركن هادئ في المدينة القديمة، مقهى مفضل، مكان يشبهك. ابدأ باكتشاف المنطقة.",
      label: "اكتشف",
    },
    {
      slug: "stays",
      title: "اجعل نفسك في بيتك.",
      body: "اعثر على إقامة قريبة عبر Nexa Stays، بتفاصيل أوضح وتجربة حجز أكثر تنظيماً.",
      label: "إقامة",
    },
    {
      slug: "go",
      title: "صل. واطلب العشاء.",
      body: "تساعدك Nexa Go على الانتقال من المحطة أو المطار إلى إقامتك — ثم طلب وجبة من مطعم قريب.",
      label: "Go",
    },
    {
      slug: "fresh",
      title: "بقالة للشقة.",
      body: "تحتاج أساسيات يومية؟ تتولى Nexa Fresh البقالة ومستلزمات المنزل — منفصلة عن توصيل المطاعم.",
      label: "Fresh",
    },
    {
      slug: "pay",
      title: "ادفع حيث يُدعم ذلك.",
      body: "مع تطور Nexa Pay، يمكن أن تصبح المعاملات المدعومة عبر النظام البيئي أسهل في الإدارة.",
      label: "ادفع",
    },
  ],
};

const chrome: Record<
  Locale,
  { aria: string; explore: string; note: string; eyebrow: (slug: string) => string }
> = {
  en: {
    aria: "A weekend in Marrakech",
    explore: "Explore Nexa",
    note: "An illustration of the ecosystem we’re building. Availability and connections will be introduced in stages.",
    eyebrow: (slug) => `Nexa ${slug}`,
  },
  fr: {
    aria: "Un week-end à Marrakech",
    explore: "Découvrir Nexa",
    note: "Illustration de l’écosystème que nous construisons. Disponibilité et connexions introduites par étapes.",
    eyebrow: (slug) => `Nexa ${slug}`,
  },
  ar: {
    aria: "عطلة نهاية أسبوع في مراكش",
    explore: "استكشف نكسا",
    note: "رسم توضيحي للنظام البيئي الذي نبنيه. سيُطرح التوفر والروابط على مراحل.",
    eyebrow: (slug) => `نكسا ${slug}`,
  },
};

export function Journey({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState(1);
  const steps = stepsByLocale[locale];
  const t = chrome[locale];
  const current = steps[step];
  return (
    <div className="journey">
      <div className="journey-tabs" role="tablist" aria-label={t.aria}>
        {steps.map((s, i) => (
          <button
            id={`journey-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === step}
            aria-controls="journey-panel"
            tabIndex={i === step ? 0 : -1}
            key={s.slug}
            className={step === i ? "active" : ""}
            onClick={() => setStep(i)}
            onKeyDown={(e) => {
              let next = i;
              if (e.key === "ArrowRight") next = (i + 1) % steps.length;
              else if (e.key === "ArrowLeft")
                next = (i + steps.length - 1) % steps.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = steps.length - 1;
              else return;
              e.preventDefault();
              setStep(next);
              document.getElementById(`journey-tab-${next}`)?.focus();
            }}
          >
            <span>0{i + 1}</span>
            {s.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="journey-panel"
        aria-labelledby={`journey-tab-${step}`}
        className="journey-panel"
      >
        <div className="journey-mark">
          <Brand product={current.slug} size={96} />
        </div>
        <div>
          <span className="eyebrow">{t.eyebrow(current.slug)}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          <Link href={`/${current.slug}`} className="text-link">
            {t.explore} {current.slug} <Arrow />
          </Link>
        </div>
      </div>
      <p className="journey-note">{t.note}</p>
    </div>
  );
}
