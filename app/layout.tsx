import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FaviconDebugProbe } from "@/components/favicon-debug-probe";
import {
  DEFAULT_OG_IMAGE,
  homeSeo,
  toMetadata,
  homeLanguageAlternates,
} from "@/lib/seo";
import { SITE_FAVICON_ICO, SITE_ICONS } from "@/lib/site-icons";

const enHome = toMetadata(homeSeo.en, { alternates: homeLanguageAlternates });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexa.ma"),
  ...enHome,
  title: {
    default: homeSeo.en.title,
    absolute: homeSeo.en.title,
    template: "%s | Nexa",
  },
  // Versioned PNG paths (Stays pattern) so Chrome drops a stuck letter-N favicon cache.
  icons: {
    icon: [
      { url: SITE_ICONS.favicon48, type: "image/png", sizes: "48x48" },
      { url: SITE_ICONS.favicon32, type: "image/png", sizes: "32x32" },
      { url: SITE_ICONS.favicon16, type: "image/png", sizes: "16x16" },
      { url: SITE_ICONS.icon192, type: "image/png", sizes: "192x192" },
      { url: SITE_ICONS.icon512, type: "image/png", sizes: "512x512" },
      { url: SITE_FAVICON_ICO, sizes: "any" },
    ],
    apple: [{ url: SITE_ICONS.apple, sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nexa",
    ...enHome.openGraph,
    images: [{ ...DEFAULT_OG_IMAGE, alt: homeSeo.en.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.en.title,
    description: homeSeo.en.description,
    images: [DEFAULT_OG_IMAGE.url],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <FaviconDebugProbe />
        {children}
        <Footer />
      </body>
    </html>
  );
}
