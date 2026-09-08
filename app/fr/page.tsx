import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Nexa — Un écosystème pour le quotidien",
  description:
    "Un écosystème connecté conçu au Maroc. Découvrez Nexa Stays et notre famille grandissante de services.",
  alternates: { canonical: "/fr/" },
  openGraph: {
    locale: "fr_FR",
    title: "Nexa — Un écosystème pour le quotidien",
    description:
      "Services numériques spécialisés. Conçu au Maroc. On commence avec Nexa Stays.",
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
