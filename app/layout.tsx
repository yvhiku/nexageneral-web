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
export const metadata: Metadata = {
  metadataBase: new URL("https://nexa.ma"),
  title: {
    default: "Nexa — One ecosystem for everyday life",
    template: "%s | Nexa",
  },
  alternates: { canonical: "/" },
  description:
    "A connected ecosystem built in Morocco. Discover Nexa Stays and our growing family of services for mobility, payments, groceries, commerce, jobs and local discovery.",
  icons: { icon: "/brand/nexa.webp" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nexa",
    title: "Nexa — One ecosystem for everyday life",
    description:
      "Specialized digital services. Built in Morocco. Starting with Nexa Stays.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Nexa — One ecosystem for everyday life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa — One ecosystem for everyday life",
    description:
      "Specialized digital services. Built in Morocco. Starting with Nexa Stays.",
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
