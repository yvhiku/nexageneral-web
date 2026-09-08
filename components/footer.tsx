"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand, Arrow } from "./brand";
import { products, LINKEDIN_URL } from "@/lib/products";
import {
  detectLocale,
  getDictionary,
  localeHome,
  localePath,
} from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const t = getDictionary(locale).footer;
  const home = localeHome[locale];
  const lp = (path: string) => localePath(locale, path);
  const tagline = t.tagline.split("\n");
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Link href={home} className="wordmark">
            <Brand product="white" size={38} />
            nexa.
          </Link>
          <p>
            {tagline[0]}
            <br />
            {tagline[1]}
          </p>
          <span>{t.builtIn}</span>
        </div>
        <div>
          <h3>{t.products}</h3>
          {products
            .filter((p) => p.slug !== "maps" && p.slug !== "cloud")
            .map((p) => (
              <Link key={p.slug} href={lp(`/${p.slug}`)}>
                {p.name}
              </Link>
            ))}
        </div>
        <div>
          <h3>{t.company}</h3>
          {(
            [
              [t.about, "about"],
              [t.whyNexa, "why-nexa"],
              [t.roadmap, "roadmap"],
              [t.insights, "insights"],
              [t.careers, "careers"],
              [t.updates, "updates"],
            ] as const
          ).map(([n, s]) => (
            <Link href={lp(`/${s}`)} key={s}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t.connect}</h3>
          <Link href={lp("/partners")}>{t.partnerships}</Link>
          <Link href={lp("/contact")}>{t.contact}</Link>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            {t.linkedin} <Arrow external />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nexa</span>
        <div>
          <Link href={lp("/privacy")}>{t.privacy}</Link>
          <Link href={lp("/terms")}>{t.terms}</Link>
          <Link href={lp("/cookies")}>{t.cookies}</Link>
          <Link href={lp("/credits")}>{t.credits}</Link>
        </div>
        <span>{t.moroccoFirst}</span>
      </div>
    </footer>
  );
}
