import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/brand";
import { DocumentLocale } from "@/components/document-locale";
import { getBreadcrumbJsonLd } from "@/lib/entity";
import {
  insightCategories,
  insights,
  type InsightCategory,
} from "@/lib/insights";
import { insightsHubCopy } from "@/lib/localized-pages";
import { insightsLanguageAlternates, toMetadata } from "@/lib/seo";

const copy = insightsHubCopy.ar;

export const metadata: Metadata = toMetadata(copy.seo, {
  alternates: insightsLanguageAlternates(),
});

export default function ArabicInsightsPage() {
  const categories = Object.keys(insightCategories) as InsightCategory[];

  return (
    <>
      <DocumentLocale locale="ar" />
      <main id="main" className="container insights-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getBreadcrumbJsonLd([
                { name: "Nexa", path: "/ar/" },
                { name: "Insights", path: "/ar/insights/" },
              ]),
            ),
          }}
        />
        <div style={{ paddingTop: 30 }} className="breadcrumbs">
          <Link href="/ar/">Nexa</Link>
          <span>/</span>
          <span>رؤى</span>
        </div>
        <header className="page-hero" style={{ paddingInline: 0 }}>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
          <p className="insight-meta">{copy.note}</p>
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
                          {a.published} · {a.readingMinutes} min · EN
                        </span>
                        <span className="text-link">
                          {copy.read} <Arrow />
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
    </>
  );
}
