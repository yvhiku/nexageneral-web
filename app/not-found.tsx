import Link from "next/link";
import { Mascot, Arrow } from "@/components/brand";
export default function NotFound() {
  return (
    <main id="main" className="container">
      <section className="product-hero" style={{ background: "#eef5fd" }}>
        <div>
          <span className="eyebrow">404 / A SMALL DETOUR</span>
          <h1>
            Let’s get you
            <br />
            back on track.
          </h1>
          <p>
            We couldn’t find that page. There’s plenty more to explore in the
            Nexa ecosystem.
          </p>
          <Link href="/" className="button primary">
            Back to Nexa <Arrow />
          </Link>
        </div>
        <Mascot name="parent" />
      </section>
    </main>
  );
}
