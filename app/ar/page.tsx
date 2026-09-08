import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { HomePage } from "@/components/home-page";
import { homeSeo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...toMetadata(homeSeo.ar),
  openGraph: {
    ...toMetadata(homeSeo.ar).openGraph,
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
