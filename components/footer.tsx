"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand, Arrow } from "./brand";
import { products, LINKEDIN_URL } from "@/lib/products";
import { detectLocale, getDictionary, localeHome } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const t = getDictionary(locale).footer;
  const home = localeHome[locale];
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
          {products.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`}>
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
              [t.careers, "careers"],
              [t.updates, "updates"],
            ] as const
          ).map(([n, s]) => (
            <Link href={`/${s}`} key={s}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t.connect}</h3>
          <Link href="/partners">{t.partnerships}</Link>
          <Link href="/contact">{t.contact}</Link>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            {t.linkedin} <Arrow external />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nexa</span>
        <div>
          <Link href="/privacy">{t.privacy}</Link>
          <Link href="/terms">{t.terms}</Link>
          <Link href="/cookies">{t.cookies}</Link>
          <Link href="/credits">{t.credits}</Link>
        </div>
        <span>{t.moroccoFirst}</span>
      </div>
    </footer>
  );
}
