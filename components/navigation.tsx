"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { STAYS_URL } from "@/lib/products";
const links = [
  ["Products", "/products"],
  ["Ecosystem", "/ecosystem"],
  ["Why Nexa", "/why-nexa"],
  ["Roadmap", "/roadmap"],
  ["About", "/about"],
];
export function Navigation() {
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
        <Link href="/" aria-label="Nexa home" className="wordmark">
          <Brand product="black" size={31} />
          nexa<span className="wordmark-dot">.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([label, url]) => (
            <Link href={url} key={url}>
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="nav-cta"
          href={STAYS_URL}
          target="_blank"
          rel="noreferrer"
        >
          Explore Nexa Stays <ArrowUpRight size={17} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="mobile-nav"
        >
          {[...links, ["Careers", "/careers"], ["Contact", "/contact"]].map(
            ([label, url]) => (
              <Link onClick={() => setOpen(false)} key={url} href={url}>
                {label}
                <ArrowUpRight size={17} />
              </Link>
            ),
          )}
          <a href={STAYS_URL} target="_blank" rel="noreferrer">
            Explore Nexa Stays <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
