import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { insights } from "@/lib/insights";
import { localizedSlugs } from "@/lib/i18n";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const enCore = [
    "",
    ...products.map((p) => p.slug),
    "products",
    "ecosystem",
    "insights",
    ...insights.map((a) => `insights/${a.slug}`),
    "why-nexa",
    "roadmap",
    "about",
    "careers",
    "partners",
    "updates",
    "contact",
    "privacy",
    "terms",
    "cookies",
    "credits",
  ];

  const localeHomes = ["fr", "ar"];
  const localePaths = [
    ...localeHomes,
    ...localeHomes.flatMap((loc) => [
      `${loc}/insights`,
      ...localizedSlugs.map((s) => `${loc}/${s}`),
    ]),
  ];

  const all = [...enCore, ...localePaths];

  return all.map((path) => {
    const isHome = path === "" || path === "fr" || path === "ar";
    const isInsight =
      path === "insights" ||
      path.startsWith("insights/") ||
      path.endsWith("/insights");
    const baseSlug = path.includes("/") ? path.split("/").pop()! : path;
    const isProduct = products.some((p) => p.slug === baseSlug);
    const isFuture = baseSlug === "maps" || baseSlug === "cloud";
    return {
      url: `https://nexa.ma/${path}${path ? "/" : ""}`,
      changeFrequency: isHome || isInsight ? "weekly" : "monthly",
      priority: isHome
        ? 1
        : isInsight && (path === "insights" || path.endsWith("/insights"))
          ? 0.75
          : isInsight
            ? 0.65
            : isProduct && !isFuture
              ? 0.8
              : isFuture
                ? 0.3
                : 0.5,
    };
  });
}
