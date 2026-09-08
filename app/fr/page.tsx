import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { HomePage } from "@/components/home-page";
import { homeSeo, toMetadata, homeLanguageAlternates } from "@/lib/seo";

const frHome = toMetadata(homeSeo.fr, { alternates: homeLanguageAlternates });

export const metadata: Metadata = {
  ...frHome,
  openGraph: {
    ...frHome.openGraph,
    locale: "fr_FR",
  },
};

export default function FrenchHome() {
  return (
    <>
      <DocumentLocale locale="fr" />
      <HomePage locale="fr" />
    </>
  );
}
