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
import { homeSeo, toMetadata, homeLanguageAlternates } from "@/lib/seo";

const enHome = toMetadata(homeSeo.en, { alternates: homeLanguageAlternates });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexa.ma"),
  ...enHome,
  title: {
    default: homeSeo.en.title,
    absolute: homeSeo.en.title,
    template: "%s | Nexa",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nexa",
    ...enHome.openGraph,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: homeSeo.en.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.en.title,
    description: homeSeo.en.description,
    images: ["/og/default.png"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
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
