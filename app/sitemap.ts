import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    ...products.map((p) => p.slug),
    "products",
    "ecosystem",
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
  ].map((path) => ({
    url: `https://nexa.ma/${path}${path ? "/" : ""}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === "" ? 1 : products.some((p) => p.slug === path) ? 0.8 : 0.5,
  }));
}
