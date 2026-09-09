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
import {
  DEFAULT_OG_IMAGE,
  homeSeo,
  toMetadata,
  homeLanguageAlternates,
} from "@/lib/seo";

const enHome = toMetadata(homeSeo.en, { alternates: homeLanguageAlternates });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexa.ma"),
  ...enHome,
  title: {
    default: homeSeo.en.title,
    absolute: homeSeo.en.title,
    template: "%s | Nexa",
  },
  // Transparent mark favicons (Stays-style knockout). Stable URLs — do not rotate.
  // Google prefers a crawlable 48×48 PNG; list it first.
  icons: {
    icon: [
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
