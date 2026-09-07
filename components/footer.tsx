import Link from "next/link";
import { Brand, Arrow } from "./brand";
import { products, LINKEDIN_URL } from "@/lib/products";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Link href="/" className="wordmark">
            <Brand product="white" size={38} />
            nexa.
          </Link>
          <p>
            One ecosystem
            <br />
            for everyday life.
          </p>
          <span>Built in Morocco.</span>
        </div>
        <div>
          <h3>Our products</h3>
          {products.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`}>
              {p.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          {[
            ["About", "about"],
            ["Why Nexa", "why-nexa"],
            ["Roadmap", "roadmap"],
            ["Careers", "careers"],
            ["Updates", "updates"],
          ].map(([n, s]) => (
            <Link href={`/${s}`} key={s}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h3>Let’s connect</h3>
          <Link href="/partners">Partnerships</Link>
          <Link href="/contact">Contact</Link>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn <Arrow external />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nexa</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/credits">Image credits</Link>
        </div>
        <span>Morocco first. More to come.</span>
      </div>
    </footer>
  );
}
