import Link from "next/link";
import { Mascot } from "@/components/brand";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

type Stage = {
  label: string;
  status: string;
  items: { name: string; slug: string; mascot: string }[];
  active?: boolean;
};

const stagesByLocale: Record<Locale, Stage[]> = {
  en: [
    {
      label: "First",
      status: "Launch product",
      items: [{ name: "Stays", slug: "stays", mascot: "nexastaysroadmap" }],
      active: true,
    },
    {
      label: "Building progressively",
      status: "In development roadmap",
      items: [{ name: "Pay", slug: "pay", mascot: "nexapayroadmap" }],
    },
    {
      label: "Next phase",
      status: "Planned",
      items: [
        { name: "Go", slug: "go", mascot: "nexagoroadmap" },
        { name: "Fresh", slug: "fresh", mascot: "nexafreshroadmap" },
      ],
    },
    {
      label: "Expanding",
      status: "Long-term roadmap",
      items: [
        { name: "Market", slug: "market", mascot: "nexamarketroadmap" },
        { name: "Jobs", slug: "jobs", mascot: "nexajobsroadmap" },
      ],
    },
    { label: "Beyond", status: "Future", items: [] },
  ],
  fr: [
    {
      label: "D’abord",
      status: "Produit de lancement",
      items: [{ name: "Stays", slug: "stays", mascot: "nexastaysroadmap" }],
      active: true,
    },
    {
      label: "Construction progressive",
      status: "Feuille de route — développement",
      items: [{ name: "Pay", slug: "pay", mascot: "nexapayroadmap" }],
    },
    {
      label: "Phase suivante",
      status: "Planifié",
      items: [
        { name: "Go", slug: "go", mascot: "nexagoroadmap" },
        { name: "Fresh", slug: "fresh", mascot: "nexafreshroadmap" },
      ],
    },
    {
      label: "Expansion",
      status: "Feuille de route long terme",
      items: [
        { name: "Market", slug: "market", mascot: "nexamarketroadmap" },
        { name: "Jobs", slug: "jobs", mascot: "nexajobsroadmap" },
      ],
    },
    { label: "Au-delà", status: "Futur", items: [] },
  ],
  ar: [
    {
      label: "أولاً",
      status: "منتج الإطلاق",
      items: [{ name: "Stays", slug: "stays", mascot: "nexastaysroadmap" }],
      active: true,
    },
    {
      label: "بناء تدريجي",
      status: "في خارطة التطوير",
      items: [{ name: "Pay", slug: "pay", mascot: "nexapayroadmap" }],
    },
    {
      label: "المرحلة التالية",
      status: "مخطط",
      items: [
        { name: "Go", slug: "go", mascot: "nexagoroadmap" },
        { name: "Fresh", slug: "fresh", mascot: "nexafreshroadmap" },
      ],
    },
    {
      label: "التوسع",
      status: "خارطة طريق طويلة الأمد",
      items: [
        { name: "Market", slug: "market", mascot: "nexamarketroadmap" },
        { name: "Jobs", slug: "jobs", mascot: "nexajobsroadmap" },
      ],
    },
    { label: "ما بعد ذلك", status: "مستقبلي", items: [] },
  ],
};

const beyondItems: Record<Locale, string[]> = {
  en: ["Maps", "Cloud"],
  fr: ["Maps", "Cloud"],
  ar: ["Maps", "Cloud"],
};

const finePrint: Record<Locale, string> = {
  en: "This roadmap represents Nexa’s current strategic direction. Product scope, sequencing and timing may evolve as the company grows.",
  fr: "Cette feuille de route représente la direction stratégique actuelle de Nexa. Le périmètre, l’ordre et le calendrier des produits peuvent évoluer.",
  ar: "تمثّل خارطة الطريق هذه التوجه الاستراتيجي الحالي لنكسا. قد يتطور نطاق المنتجات وترتيبها وتوقيتها مع نمو الشركة.",
};

export function Roadmap({ locale = "en" }: { locale?: Locale }) {
  const stages = stagesByLocale[locale];
  const beyond = beyondItems[locale];
  return (
    <>
      <div className="roadmap">
        {stages.map((s, i) => (
          <div
            className={`roadmap-stage ${s.active ? "current" : ""}`}
            key={s.label}
          >
            <div className="roadmap-line">
              <span />0{i + 1}
            </div>
            <p className="eyebrow">{s.label}</p>
            {s.items.length > 0 ? (
              <ul className="roadmap-products">
                {s.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={localePath(locale, `/${item.slug}`)}
                      className="roadmap-product"
                    >
                      <Mascot
                        name={item.mascot}
                        variant="thumb"
                        className="roadmap-mascot"
                      />
                      <span>Nexa {item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="roadmap-beyond">
                {beyond.map((item) => (
                  <Link
                    key={item}
                    href={localePath(locale, `/${item.toLowerCase()}`)}
                  >
                    Nexa {item}
                  </Link>
                ))}
              </div>
            )}
            <small>{s.status}</small>
          </div>
        ))}
      </div>
      <p className="fine-print">{finePrint[locale]}</p>
    </>
  );
}
