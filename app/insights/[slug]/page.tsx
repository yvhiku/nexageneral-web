import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/brand";
import { getBreadcrumbJsonLd, NEXA_ORIGIN } from "@/lib/entity";
import {
  getInsight,
  insightCategories,
  insights,
} from "@/lib/insights";
import { toMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Not found" };
  return toMetadata({
    title: `${article.title} | Nexa Insights`,
    description: article.description,
    path: `/insights/${article.slug}/`,
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const category = insightCategories[article.category];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    author: {
      "@type": "Organization",
      name: "Nexa",
      url: NEXA_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: "Nexa",
      url: NEXA_ORIGIN,
      logo: `${NEXA_ORIGIN}/brand/nexa.webp`,
    },
    mainEntityOfPage: `${NEXA_ORIGIN}/insights/${article.slug}/`,
  };

  return (
    <main id="main" className="container insights-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Nexa", path: "/" },
              { name: "Insights", path: "/insights/" },
              { name: article.title, path: `/insights/${article.slug}/` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ paddingTop: 30 }} className="breadcrumbs">
        <Link href="/">Nexa</Link>
        <span>/</span>
        <Link href="/insights/">Insights</Link>
        <span>/</span>
        <span>{category.label}</span>
      </div>
      <article>
        <header className="page-hero" style={{ paddingInline: 0 }}>
          <div className="eyebrow">{category.label}</div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <p className="insight-meta">
            Published {article.published}
            {article.updated ? ` · Updated ${article.updated}` : ""} ·{" "}
            {article.readingMinutes} min read
          </p>
        </header>
        <div className="prose insight-body">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
        </div>
        <footer className="subpage-cta">
          <div>
            <h3>Explore the Nexa ecosystem</h3>
            <p>See how specialized products connect across everyday life.</p>
          </div>
          <Link href="/ecosystem/" className="button primary">
            Learn about the Nexa digital ecosystem <Arrow />
          </Link>
        </footer>
      </article>
    </main>
  );
}
