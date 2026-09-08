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
  const product = getLocalizedProduct("ar", slug);
  const company = getLocalizedCompany("ar", slug);
  const seo = product?.seo ?? company?.seo;
  if (!seo) return { title: "غير موجود" };
  return toMetadata(seo, { alternates: pageLanguageAlternates(slug) });
}

export default async function ArabicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <DocumentLocale locale="ar" />
      <LocalizedContentPage locale="ar" slug={slug} />
    </>
  );
}
