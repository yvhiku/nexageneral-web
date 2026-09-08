import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { LocalizedContentPage } from "@/components/localized-content-page";
import { localizedSlugs } from "@/lib/i18n";
import {
  getLocalizedCompany,
  getLocalizedProduct,
} from "@/lib/localized-pages";
import { pageLanguageAlternates, toMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getLocalizedProduct("fr", slug);
  const company = getLocalizedCompany("fr", slug);
  const seo = product?.seo ?? company?.seo;
  if (!seo) return { title: "Introuvable" };
  return toMetadata(seo, { alternates: pageLanguageAlternates(slug) });
}

export default async function FrenchSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <DocumentLocale locale="fr" />
      <LocalizedContentPage locale="fr" slug={slug} />
    </>
  );
}
