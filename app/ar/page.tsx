import type { Metadata } from "next";
import { DocumentLocale } from "@/components/document-locale";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "نكسا — نظام بيئي للحياة اليومية",
  description:
    "نظام بيئي متصل بُني في المغرب. اكتشف Nexa Stays وعائلتنا المتنامية من الخدمات.",
  alternates: { canonical: "/ar/" },
  openGraph: {
    locale: "ar_MA",
    title: "نكسا — نظام بيئي للحياة اليومية",
    description:
      "خدمات رقمية متخصصة. بُنيت في المغرب. نبدأ مع Nexa Stays.",
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
