import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI search discovery (not the same as training permission)
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: "https://nexa.ma/sitemap.xml",
  };
}
