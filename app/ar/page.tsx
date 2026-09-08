import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { HomePage } from "@/components/home-page";
import { homeSeo, toMetadata, homeLanguageAlternates } from "@/lib/seo";

const arHome = toMetadata(homeSeo.ar, { alternates: homeLanguageAlternates });

export const metadata: Metadata = {
  ...arHome,
  openGraph: {
    ...arHome.openGraph,
    locale: "ar_MA",
  },
};

export default function ArabicHome() {
  return (
    <>
      <DocumentLocale locale="ar" />
      <HomePage locale="ar" />
    </>
  );
}
