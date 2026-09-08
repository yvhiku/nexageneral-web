import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { HomePage } from "@/components/home-page";
import { homeSeo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...toMetadata(homeSeo.fr),
  openGraph: {
    ...toMetadata(homeSeo.fr).openGraph,
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
