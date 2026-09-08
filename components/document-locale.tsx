"use client";

import { useEffect } from "react";
import { type Locale, localeMeta } from "@/lib/i18n";

/** Sets documentElement lang/dir for locale routes (root layout stays en). */
export function DocumentLocale({ locale }: { locale: Locale }) {
  useEffect(() => {
    const meta = localeMeta[locale];
    const root = document.documentElement;
    root.lang = meta.htmlLang;
    root.dir = meta.dir;
    return () => {
      root.lang = "en";
      root.dir = "ltr";
    };
  }, [locale]);
  return null;
}
