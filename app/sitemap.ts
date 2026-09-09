import type { MetadataRoute } from "next";
import { NEXA_ORIGIN } from "@/lib/entity";
import { products } from "@/lib/products";
import { insights } from "@/lib/insights";
import { localizedSlugs } from "@/lib/i18n";
import {
  homeLanguageAlternates,
  insightsLanguageAlternates,
  pageLanguageAlternates,
} from "@/lib/seo";

export const dynamic = "force-static";

const FUTURE_SLUGS = new Set(["maps", "cloud"]);

function urlFor(path: string) {
  if (!path) return `${NEXA_ORIGIN}/`;
  return `${NEXA_ORIGIN}/${path.replace(/^\/+|\/+$/g, "")}/`;
}

function insightDate(slug?: string) {
  if (slug) {
    const article = insights.find((a) => a.slug === slug);
    return article?.updated ?? article?.published;
  }
  return insights.reduce((latest, article) => {
    const date = article.updated ?? article.published;
    return date > latest ? date : latest;
  }, "");
}

function entry(
  path: string,
  extra: Omit<MetadataRoute.Sitemap[number], "url">,
): MetadataRoute.Sitemap[number] {
  return { url: urlFor(path), ...extra };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homes = ["", "fr", "ar"].map((path) =>
    entry(path, {
      changeFrequency: "weekly",
      priority: 1,
      alternates: homeLanguageAlternates,
    }),
  );

  const mirrored = localizedSlugs.flatMap((slug) => {
    const isProduct = products.some((p) => p.slug === slug);
    const isFuture = FUTURE_SLUGS.has(slug);
    const meta = {
      changeFrequency: "monthly" as const,
      priority: isProduct && !isFuture ? 0.8 : isFuture ? 0.3 : 0.5,
      alternates: pageLanguageAlternates(slug),
    };
    return ["", "fr", "ar"].map((locale) =>
      entry(locale ? `${locale}/${slug}` : slug, meta),
    );
  });

  const insightHubs = ["insights", "fr/insights", "ar/insights"].map((path) =>
    entry(path, {
      lastModified: insightDate(),
      changeFrequency: "weekly",
      priority: 0.75,
      alternates: insightsLanguageAlternates(),
    }),
  );

  const insightArticles = insights.map((article) =>
    entry(`insights/${article.slug}`, {
      lastModified: insightDate(article.slug),
      changeFrequency: "weekly",
      priority: 0.65,
      alternates: insightsLanguageAlternates(article.slug),
    }),
  );

  return [...homes, ...mirrored, ...insightHubs, ...insightArticles];
}
