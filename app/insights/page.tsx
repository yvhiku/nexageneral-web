import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/brand";
import {
  insightCategories,
  insights,
  type InsightCategory,
} from "@/lib/insights";
import { insightsLanguageAlternates, toMetadata } from "@/lib/seo";
import { getBreadcrumbJsonLd } from "@/lib/entity";

export const metadata: Metadata = toMetadata(
  {
    title: "Nexa Insights — Digital Morocco, Hospitality, Mobility & Commerce",
    description:
      "Authoritative perspectives from Nexa on digital services in Morocco — hospitality, mobility, delivery, commerce and product strategy.",
    path: "/insights/",
  },
  { alternates: insightsLanguageAlternates() },
);

export default function InsightsIndexPage() {
  const categories = Object.keys(insightCategories) as InsightCategory[];

  return (
    <main id="main" className="container insights-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Nexa", path: "/" },
              { name: "Insights", path: "/insights/" },
            ]),
          ),
        }}
      />
      <div style={{ paddingTop: 30 }} className="breadcrumbs">
        <Link href="/">Nexa</Link>
        <span>/</span>
        <span>Insights</span>
      </div>
      <header className="page-hero" style={{ paddingInline: 0 }}>
        <div className="eyebrow">Nexa Insights</div>
        <h1>Knowledge about the categories we are building.</h1>
        <p>
          Nexa Insights publishes focused perspectives on digital services in
          Morocco. Not generic startup content — topics tied to accommodation,
          mobility, delivery, commerce and how specialized products connect.
        </p>
      </header>
      <div className="insights-categories">
        {categories.map((key) => {
          const meta = insightCategories[key];
          const articles = insights.filter((a) => a.category === key);
          return (
            <section key={key} className="insights-category">
              <h2>{meta.label}</h2>
              <p>{meta.blurb}</p>
              <ul className="insights-list">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/insights/${a.slug}/`}>
                      <strong>{a.title}</strong>
                      <span>
                        {a.published} · {a.readingMinutes} min
                      </span>
                      <span className="text-link">
                        Read <Arrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
