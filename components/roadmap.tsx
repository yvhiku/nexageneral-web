import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Stage = {
  label: string;
  status: string;
  items: string[];
  active?: boolean;
};

const stagesByLocale: Record<Locale, Stage[]> = {
  en: [
    {
      label: "First",
      status: "Launch product",
      items: ["Stays"],
      active: true,
    },
    {
      label: "Building progressively",
      status: "In development roadmap",
      items: ["Pay"],
    },
    { label: "Next phase", status: "Planned", items: ["Go", "Fresh"] },
    {
      label: "Expanding",
      status: "Long-term roadmap",
      items: ["Market", "Jobs"],
    },
    { label: "Beyond", status: "Future", items: ["Maps", "Cloud"] },
  ],
  fr: [
    {
      label: "D’abord",
      status: "Produit de lancement",
      items: ["Stays"],
      active: true,
    },
    {
      label: "Construction progressive",
      status: "Feuille de route — développement",
      items: ["Pay"],
    },
    { label: "Phase suivante", status: "Planifié", items: ["Go", "Fresh"] },
    {
      label: "Expansion",
      status: "Feuille de route long terme",
      items: ["Market", "Jobs"],
    },
    { label: "Au-delà", status: "Futur", items: ["Maps", "Cloud"] },
  ],
  ar: [
    {
      label: "أولاً",
      status: "منتج الإطلاق",
      items: ["Stays"],
      active: true,
    },
    {
      label: "بناء تدريجي",
      status: "في خارطة التطوير",
      items: ["Pay"],
    },
    { label: "المرحلة التالية", status: "مخطط", items: ["Go", "Fresh"] },
    {
      label: "التوسع",
      status: "خارطة طريق طويلة الأمد",
      items: ["Market", "Jobs"],
    },
    { label: "ما بعد ذلك", status: "مستقبلي", items: ["Maps", "Cloud"] },
  ],
};

const finePrint: Record<Locale, string> = {
  en: "This roadmap represents Nexa’s current strategic direction. Product scope, sequencing and timing may evolve as the company grows.",
  fr: "Cette feuille de route représente la direction stratégique actuelle de Nexa. Le périmètre, l’ordre et le calendrier des produits peuvent évoluer.",
  ar: "تمثّل خارطة الطريق هذه التوجه الاستراتيجي الحالي لنكسا. قد يتطور نطاق المنتجات وترتيبها وتوقيتها مع نمو الشركة.",
};

export function Roadmap({ locale = "en" }: { locale?: Locale }) {
  const stages = stagesByLocale[locale];
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
            {s.items.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                Nexa {item}
              </Link>
            ))}
            <small>{s.status}</small>
          </div>
        ))}
      </div>
      <p className="fine-print">{finePrint[locale]}</p>
    </>
  );
}
