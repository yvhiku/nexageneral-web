import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Brand, Arrow, Mascot, Status } from "@/components/brand";
import { Ecosystem } from "@/components/ecosystem";
import { Journey } from "@/components/journey";
import { Roadmap } from "@/components/roadmap";
import { Reveal } from "@/components/reveal";
import { products, STAYS_URL } from "@/lib/products";
export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nexa",
            url: "https://nexa.ma",
            logo: "https://nexa.ma/brand/nexa.webp",
            sameAs: ["https://www.linkedin.com/company/nexa-superapp/"],
          }),
        }}
      />
      <Reveal />
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow location">
            <span /> BUILT IN MOROCCO
          </div>
          <h1>
            One ecosystem
            <br />
            for <em>everyday life.</em>
          </h1>
          <p>
            Places to stay. Ways to move. More of what matters.
            <br className="desktop-break" /> A family of focused digital
            services, connected by Nexa.
          </p>
          <div className="button-row">
            <Link href="#ecosystem" className="button primary">
              Explore the ecosystem <Arrow />
            </Link>
            <a
              href={STAYS_URL}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Discover Nexa Stays <Arrow external />
            </a>
          </div>
          <div className="hero-note">
            <span className="live-dot" /> Starting with accommodation in
            Morocco.
          </div>
        </div>
        <div className="hero-art">
          <span className="hero-art-caption">A little more connected.</span>
          <Mascot name="parent" priority />
          <div className="hero-signature">
            <Brand size={24} />
            <span>
              Different experiences.
              <br />
              <strong>One Nexa family.</strong>
            </span>
          </div>
        </div>
        <a href="#idea" className="scroll-cue">
          <ArrowDown size={15} /> THERE’S MORE TO NEXA
        </a>
      </section>
      <section id="idea" className="idea container" data-reveal>
        <div className="section-index">01 / THE IDEA</div>
        <h2>
          Each product has a purpose.
          <br />
          <span>Together, they mean more.</span>
        </h2>
        <p>
          Nexa is a growing family of specialized digital services. Each one is
          built around a part of everyday life. Use them independently, with
          connections that become more useful as we grow.
        </p>
      </section>
      <section id="ecosystem" className="ecosystem-section section-pad">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <div className="eyebrow">THE NEXA ECOSYSTEM</div>
              <h2>
                A different experience.
                <br />
                For every part of your day.
              </h2>
            </div>
            <p>
              Eight clear purposes. One connected vision.
              <br />
              Starting with Stays. Building what comes next.
            </p>
          </div>
          <div className="product-directory">
            {products.map((p, i) => (
              <Link
                href={`/${p.slug}`}
                key={p.slug}
                className="directory-item"
                style={{ "--product-color": p.color } as React.CSSProperties}
              >
                <div className="directory-top">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {p.verb}
                  </span>
                  <ArrowUpRight size={18} />
                </div>
                <Brand product={p.logo ?? p.slug} size={48} />
                <h3>{p.name}</h3>
                <p>{p.short}</p>
                <Status status={p.status} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="stories container section-pad">
        <div className="section-heading" data-reveal>
          <div>
            <div className="eyebrow">MEET THE PRODUCTS</div>
            <h2>
              Life happens.
              <br />
              We’re building for it.
            </h2>
          </div>
          <p>
            Focused on the little things.
            <br />
            Ready for the bigger picture.
          </p>
        </div>
        <article className="stays-story" data-reveal>
          <div className="story-copy">
            <div className="product-lockup">
              <Brand product="stays" size={32} />
              <span>nexa stays</span>
              <Status status="Live" />
            </div>
            <h2>
              Somewhere new.
              <br />A feeling of home.
            </h2>
            <p>
              Discover places to stay across Morocco, with clearer details and a
              more confident booking experience. Your next chapter starts with a
              place.
            </p>
            <a
              href={STAYS_URL}
              className="button dark"
              target="_blank"
              rel="noreferrer"
            >
              Find your stay <Arrow external />
            </a>
            <Link href="/stays" className="text-link secondary-link">
              Meet Nexa Stays <Arrow />
            </Link>
            <span className="story-footnote">
              OUR FIRST CONSUMER EXPERIENCE
            </span>
          </div>
          <div className="stays-photo">
            <Image
              src="/photos/riad.webp"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
              alt="A quiet courtyard and pool at Riad Le Rihani in Marrakech"
            />
            <div className="photo-label">
              <span>MARRAKECH, MOROCCO</span>
              <span>A different pace.</span>
            </div>
            <span className="photo-disclaimer">Destination inspiration</span>
          </div>
        </article>
        <div className="paired-stories">
          <article className="product-story go-story" data-reveal>
            <div className="product-lockup">
              <Brand product="go" size={31} />
              <span>nexa go</span>
              <Status status="Coming soon" />
            </div>
            <div className="small-story-copy">
              <h2>
                Your city.
                <br />
                Your next move.
              </h2>
              <p>
                A ride across town. A package across the neighborhood. Go gets
                people and things moving.
              </p>
              <Link href="/go" className="text-link">
                Meet Nexa Go <Arrow />
              </Link>
            </div>
            <Mascot name="go" />
          </article>
          <article className="product-story fresh-story" data-reveal>
            <div className="product-lockup">
              <Brand product="fresh" size={31} />
              <span>nexa fresh</span>
              <Status status="Coming soon" />
            </div>
            <div className="small-story-copy">
              <h2>
                Less waiting.
                <br />
                More living.
              </h2>
              <p>
                Everyday groceries, delivered quickly. A target of under 15
                minutes, where supported.
              </p>
              <Link href="/fresh" className="text-link">
                Meet Nexa Fresh <Arrow />
              </Link>
            </div>
            <Mascot name="fresh" />
          </article>
        </div>
        <article className="pay-story" data-reveal>
          <div className="pay-copy">
            <div className="product-lockup">
              <Brand product="pay" size={32} />
              <span>nexa pay</span>
              <Status status="In development" />
            </div>
            <h2>
              A little less between
              <br />
              you and <em>paid.</em>
            </h2>
            <p>
              Everyday transfers, merchant payments and Nexa checkout. We’re
              building a payment experience that brings it together.
            </p>
            <Link href="/pay" className="button light">
              Discover Nexa Pay <Arrow />
            </Link>
            <span className="pay-note">
              Availability and functionality introduced in phases.
            </span>
          </div>
          <Mascot name="pay" />
        </article>
        <div className="commerce-stories">
          {products
            .filter((p) => ["market", "jobs"].includes(p.slug))
            .map((p) => (
              <article
                key={p.slug}
                className={`commerce-story ${p.slug}`}
                data-reveal
              >
                <div className="commerce-art">
                  <Mascot name={p.slug} />
                </div>
                <div className="product-lockup">
                  <Brand product={p.slug} size={28} />
                  <span>{p.name}</span>
                  <Status status={p.status} />
                </div>
                <h3>
                  {p.slug === "market"
                    ? "A good find changes your day."
                    : "What’s your next chapter?"}
                </h3>
                <p>{p.description}</p>
                <Link href={`/${p.slug}`} className="text-link">
                  Explore {p.name} <Arrow />
                </Link>
              </article>
            ))}
        </div>
        <div className="horizon-products">
          {products.slice(6).map((p) => (
            <Link key={p.slug} href={`/${p.slug}`}>
              <Brand product={p.slug} size={30} />
              <div>
                <h3>{p.name}</h3>
                <p>{p.short}</p>
              </div>
              <Status status={p.status} />
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="connection-section section-pad">
        <div className="container connection-grid">
          <div data-reveal>
            <div className="eyebrow">WHY NEXA</div>
            <h2>
              Good on their own.
              <br />
              <span>Better together.</span>
            </h2>
            <p>
              Life moves between places, plans and people. Your digital
              experiences should be able to follow.
            </p>
            <p>
              We’re building focused products with shared foundations, so useful
              connections can grow between them.
            </p>
            <Link href="/why-nexa" className="text-link">
              The idea behind Nexa <Arrow />
            </Link>
          </div>
          <Ecosystem />
        </div>
      </section>
      <section className="journey-section container section-pad" data-reveal>
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE CONNECTION IN EVERYDAY LIFE</div>
            <h2>A weekend in Marrakech.</h2>
          </div>
          <p>
            One trip. A few different needs.
            <br />
            See how Nexa could bring them together.
          </p>
        </div>
        <Journey />
      </section>
      <section className="proof-section container" data-reveal>
        <Mascot name="stays" />
        <div>
          <div className="eyebrow">WHERE IT STARTS</div>
          <h2>
            A real product.
            <br />
            The start of something bigger.
          </h2>
          <p>
            Nexa Stays is live. Our first opportunity to put clarity, local
            understanding and focused product design into people’s hands.
          </p>
          <a
            className="text-link"
            href={STAYS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Explore Nexa Stays <Arrow external />
          </a>
        </div>
        <div className="proof-aside">
          <span className="live-dot" /> LIVE NOW
          <br />
          <strong>Nexa Stays</strong>
          <span>Accommodation in Morocco</span>
        </div>
      </section>
      <section className="morocco-section container section-pad" data-reveal>
        <div className="morocco-photo">
          <Image
            src="/photos/marrakech.webp"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
            alt="Marrakech street with local shops, people and warm terracotta architecture"
          />
          <span>STARTING CLOSE TO HOME.</span>
        </div>
        <div className="morocco-copy">
          <div className="eyebrow">OUR STARTING POINT</div>
          <h2>
            Built in Morocco.
            <br />
            With a little
            <br />
            <em>more in mind.</em>
          </h2>
          <p>
            Build close to people. Understand their day. Make something useful.
          </p>
          <p>
            Morocco is where we start, learn and grow—with a long-term ambition
            to connect more of North Africa.
          </p>
          <Link href="/about" className="text-link">
            Get to know Nexa <Arrow />
          </Link>
          <div className="geography">
            MOROCCO <Arrow /> NORTH AFRICA
          </div>
        </div>
      </section>
      <section className="roadmap-section container section-pad" data-reveal>
        <div className="section-heading">
          <div>
            <div className="eyebrow">ONE STEP AT A TIME</div>
            <h2>Building what’s next.</h2>
          </div>
          <Link href="/roadmap" className="text-link">
            Our roadmap <Arrow />
          </Link>
        </div>
        <Roadmap />
      </section>
      <section className="build-section">
        <div className="container build-inner" data-reveal>
          <div>
            <div className="eyebrow">BUILD WITH US</div>
            <h2>
              There’s room
              <br />
              for you in this story.
            </h2>
            <p>
              Engineers, designers, operators and businesses.
              <br />
              Help shape what everyday life with Nexa becomes.
            </p>
          </div>
          <div className="build-links">
            <Link href="/careers">
              <span>
                <small>BRING YOUR CURIOSITY</small>Build your career with Nexa
              </span>
              <Arrow external />
            </Link>
            <Link href="/partners">
              <span>
                <small>BRING YOUR BUSINESS</small>Partner with the ecosystem
              </span>
              <Arrow external />
            </Link>
          </div>
        </div>
      </section>
      <section className="updates-section container section-pad" data-reveal>
        <div>
          <div className="eyebrow">BUILDING NEXA</div>
          <h2>Follow the progress.</h2>
          <p>Product developments and company updates, as they happen.</p>
        </div>
        <Link href="/updates" className="update-link">
          <span className="eyebrow">PRODUCT / NEXA STAYS</span>
          <h3>Our first experience is live.</h3>
          <span className="text-link">
            What we’re building <Arrow />
          </span>
        </Link>
      </section>
      <section className="final-cta container" data-reveal>
        <Brand size={46} />
        <h2>
          Start with a stay.
          <br />
          See where it takes you.
        </h2>
        <a
          href={STAYS_URL}
          className="button primary"
          target="_blank"
          rel="noreferrer"
        >
          Explore Nexa Stays <Arrow external />
        </a>
      </section>
    </main>
  );
}
