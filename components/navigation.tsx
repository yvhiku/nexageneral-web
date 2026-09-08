"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { STAYS_URL } from "@/lib/products";
import {
  detectLocale,
  getDictionary,
  localeHome,
  localeMeta,
  localePath,
  localizedHrefForSwitch,
  locales,
  type Locale,
} from "@/lib/i18n";

export function Navigation() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const t = getDictionary(locale).nav;
  const home = localeHome[locale];
  const links: [string, string][] = [
    [t.products, localePath(locale, "/products")],
    [t.ecosystem, localePath(locale, "/ecosystem")],
    [t.insights, localePath(locale, "/insights")],
    [t.whyNexa, localePath(locale, "/why-nexa")],
    [t.roadmap, localePath(locale, "/roadmap")],
    [t.about, localePath(locale, "/about")],
  ];
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href={home} aria-label={t.homeAria} className="wordmark">
          <Brand product="black" size={31} />
          nexa<span className="wordmark-dot">.</span>
        </Link>
        <nav aria-label={t.mainNav} className="desktop-nav">
          {links.map(([label, url]) => (
            <Link href={url} key={url}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-end">
          <nav className="lang-switch" aria-label={t.language}>
            {locales.map((code: Locale) => (
              <Link
                key={code}
                href={localizedHrefForSwitch(pathname, code)}
                hrefLang={localeMeta[code].htmlLang}
                className={code === locale ? "active" : undefined}
                aria-current={code === locale ? "page" : undefined}
              >
                {localeMeta[code].label}
              </Link>
            ))}
          </nav>
          <a
            className="nav-cta"
            href={STAYS_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t.exploreStays} <ArrowUpRight size={17} />
          </a>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label={t.mobileNav} className="mobile-nav">
          {[
            ...links,
            [t.careers, localePath(locale, "/careers")],
            [t.contact, localePath(locale, "/contact")],
          ].map(([label, url]) => (
            <Link onClick={() => setOpen(false)} key={url} href={url}>
              {label}
              <ArrowUpRight size={17} />
            </Link>
          ))}
          <div className="lang-switch mobile-lang">
            {locales.map((code: Locale) => (
              <Link
                key={code}
                href={localizedHrefForSwitch(pathname, code)}
                onClick={() => setOpen(false)}
                className={code === locale ? "active" : undefined}
              >
                {localeMeta[code].label}
              </Link>
            ))}
          </div>
          <a href={STAYS_URL} target="_blank" rel="noreferrer">
            {t.exploreStays} <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
