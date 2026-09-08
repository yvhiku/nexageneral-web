import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Brand, Arrow, Mascot, Status } from "@/components/brand";
import { Ecosystem } from "@/components/ecosystem";
import { Journey } from "@/components/journey";
import { Roadmap } from "@/components/roadmap";
import { Reveal } from "@/components/reveal";
import { products, STAYS_URL } from "@/lib/products";
import {
  type Locale,
  getDictionary,
  translateStatus,
} from "@/lib/i18n";

const homeDirectory = products.filter(
  (p) => p.slug !== "maps" && p.slug !== "cloud",
);

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

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
            <span /> {t.hero.eyebrow}
          </div>
          <h1>
            {t.hero.titleLine1}
            <br />
            {locale === "en" ? (
              <>
                for <em>{t.hero.titleEm}</em>
              </>
            ) : locale === "fr" ? (
              <>
                pour <em>{t.hero.titleEm}</em>
              </>
            ) : (
              <em>{t.hero.titleEm}</em>
            )}
          </h1>
          <p>
            {t.hero.body}
            <br className="desktop-break" /> {t.hero.bodyBreak}
          </p>
          <div className="button-row">
            <a
              href={STAYS_URL}
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.primaryCta} <Arrow external />
            </a>
            <Link href="#ecosystem" className="text-link">
              {t.hero.secondaryCta} <Arrow />
            </Link>
          </div>
          <div className="hero-note">
            <span className="live-dot" /> {t.hero.liveNote}
          </div>
        </div>
        <div className="hero-art">
          <span className="hero-art-caption">{t.hero.artCaption}</span>
          <Mascot name="parent" priority />
          <div className="hero-signature">
            <Brand size={24} />
            <span>
              {t.hero.signatureLine1}
              <br />
              <strong>{t.hero.signatureStrong}</strong>
            </span>
          </div>
        </div>
        <a href="#idea" className="scroll-cue">
          <ArrowDown size={15} /> {t.hero.scrollCue}
        </a>
      </section>
      <section id="idea" className="idea container" data-reveal>
        <div className="section-index">{t.idea.index}</div>
        <h2>
          {t.idea.title1}
          <br />
          <span>{t.idea.title2}</span>
        </h2>
        <p>{t.idea.body}</p>
      </section>
      <section id="ecosystem" className="ecosystem-section section-pad">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <div className="eyebrow">{t.ecosystem.eyebrow}</div>
              <h2>
                {t.ecosystem.title1}
                <br />
                {t.ecosystem.title2}
              </h2>
            </div>
            <p>
              {t.ecosystem.blurb1}
              <br />
              {t.ecosystem.blurb2}
            </p>
          </div>
          <div className="product-directory">
            {homeDirectory.map((p, i) => (
              <Link
                href={`/${p.slug}`}
                key={p.slug}
                className="directory-item"
                style={{ "--product-color": p.color } as React.CSSProperties}
              >
                <div className="directory-top">
                  <span>
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {t.productVerb[p.slug] ?? p.verb}
                  </span>
                  <ArrowUpRight size={18} />
                </div>
                <Brand product={p.logo ?? p.slug} size={48} />
                <h3>{p.name}</h3>
                <p>{t.productShort[p.slug] ?? p.short}</p>
                <Status
                  status={translateStatus(locale, p.status)}
                  live={p.status === "Live"}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="stories container section-pad">
        <div className="section-heading" data-reveal>
          <div>
            <div className="eyebrow">{t.stories.eyebrow}</div>
            <h2>
              {t.stories.title1}
              <br />
              {t.stories.title2}
            </h2>
          </div>
          <p>
            {t.stories.blurb1}
            <br />
            {t.stories.blurb2}
          </p>
        </div>
        <article className="stays-story" data-reveal>
          <div className="story-copy">
            <div className="product-lockup">
              <Brand product="stays" size={32} />
              <span>nexa stays</span>
              <Status
                status={translateStatus(locale, "Live")}
                live
              />
            </div>
            <h2>
              {t.stories.staysTitle1}
              <br />
              {t.stories.staysTitle2}
            </h2>
            <p>{t.stories.staysBody}</p>
            <a
              href={STAYS_URL}
              className="button dark"
              target="_blank"
              rel="noreferrer"
            >
              {t.stories.staysCta} <Arrow external />
            </a>
            <Link href="/stays" className="text-link secondary-link">
              {t.stories.staysMeet} <Arrow />
            </Link>
            <span className="story-footnote">{t.stories.staysFootnote}</span>
          </div>
          <div className="stays-photo">
            <Image
              src="/photos/riad.webp"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
              alt={t.stories.photoAlt}
            />
            <div className="photo-label">
              <span>{t.stories.photoLabel}</span>
              <span>{t.stories.photoTag}</span>
            </div>
            <span className="photo-disclaimer">
              {t.stories.photoDisclaimer}
            </span>
          </div>
        </article>
        <div className="paired-stories">
          <article className="product-story go-story" data-reveal>
            <div className="product-lockup">
              <Brand product="go" size={31} />
              <span>nexa go</span>
              <Status status={translateStatus(locale, "Coming soon")} />
            </div>
            <div className="small-story-copy">
              <h2>
                {t.stories.goTitle1}
                <br />
                {t.stories.goTitle2}
              </h2>
              <p>{t.stories.goBody}</p>
              <Link href="/go" className="text-link">
                {t.stories.goMeet} <Arrow />
              </Link>
            </div>
            <Mascot name="go" />
          </article>
          <article className="product-story fresh-story" data-reveal>
            <div className="product-lockup">
              <Brand product="fresh" size={31} />
              <span>nexa fresh</span>
              <Status status={translateStatus(locale, "Coming soon")} />
            </div>
            <div className="small-story-copy">
              <h2>
                {t.stories.freshTitle1}
                <br />
                {t.stories.freshTitle2}
              </h2>
              <p>{t.stories.freshBody}</p>
              <Link href="/fresh" className="text-link">
                {t.stories.freshMeet} <Arrow />
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
              <Status status={translateStatus(locale, "In development")} />
            </div>
            <h2>
              {t.stories.payTitle1}
              <br />
              {locale === "en" ? (
                <>
                  you and <em>{t.stories.payTitleEm}</em>
                </>
              ) : (
                <em>{t.stories.payTitleEm}</em>
              )}
            </h2>
            <p>{t.stories.payBody}</p>
            <Link href="/pay" className="button light">
              {t.stories.payCta} <Arrow />
            </Link>
            <span className="pay-note">{t.stories.payNote}</span>
          </div>
          <Mascot name="pay" />
        </article>
        <div className="paired-stories">
          <article className="product-story market-story" data-reveal>
            <div className="product-lockup">
              <Brand product="market" size={31} />
              <span>nexa market</span>
              <Status status={translateStatus(locale, "Coming soon")} />
            </div>
            <div className="small-story-copy">
              <h2>{t.stories.marketHeadline}</h2>
              <p>{t.stories.marketBody}</p>
              <Link href="/market" className="text-link">
                {t.stories.marketMeet} <Arrow />
              </Link>
            </div>
            <Mascot name="market" />
          </article>
          <article className="product-story jobs-story" data-reveal>
            <div className="product-lockup">
              <Brand product="jobs" size={31} />
              <span>nexa jobs</span>
              <Status status={translateStatus(locale, "Coming soon")} />
            </div>
            <div className="small-story-copy">
              <h2>{t.stories.jobsHeadline}</h2>
              <p>{t.stories.jobsBody}</p>
              <Link href="/jobs" className="text-link">
                {t.stories.jobsMeet} <Arrow />
              </Link>
            </div>
            <Mascot name="jobs" />
          </article>
        </div>
        <Link href="/products" className="horizon-collapsed" data-reveal>
          <div>
            <div className="eyebrow">{t.stories.horizonEyebrow}</div>
            <h3>{t.stories.horizonTitle}</h3>
            <p>{t.stories.horizonBody}</p>
          </div>
          <span className="text-link">
            {t.stories.horizonCta} <Arrow />
          </span>
        </Link>
      </section>
      <section className="connection-section section-pad">
        <div className="container connection-grid">
          <div data-reveal>
            <div className="eyebrow">{t.why.eyebrow}</div>
            <h2>
              {t.why.title1}
              <br />
              <span>{t.why.title2}</span>
            </h2>
            <p>{t.why.p1}</p>
            <p>{t.why.p2}</p>
            <Link href="/why-nexa" className="text-link">
              {t.why.link} <Arrow />
            </Link>
          </div>
          <Ecosystem />
        </div>
      </section>
      <section className="journey-section container section-pad" data-reveal>
        <div className="section-heading">
          <div>
            <div className="eyebrow">{t.journey.eyebrow}</div>
            <h2>{t.journey.title}</h2>
          </div>
          <p>
            {t.journey.blurb1}
            <br />
            {t.journey.blurb2}
          </p>
        </div>
        <Journey />
      </section>
      <section className="proof-section container" data-reveal>
        <Mascot name="stays" />
        <div>
          <div className="eyebrow">{t.proof.eyebrow}</div>
          <h2>
            {t.proof.title1}
            <br />
            {t.proof.title2}
          </h2>
          <p>{t.proof.body}</p>
          <a
            className="text-link"
            href={STAYS_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t.proof.cta} <Arrow external />
          </a>
        </div>
        <div className="proof-aside">
          <span className="live-dot" /> {t.proof.liveNow}
          <br />
          <strong>Nexa Stays</strong>
          <span>{t.proof.aside}</span>
        </div>
      </section>
      <section className="morocco-section container section-pad" data-reveal>
        <div className="morocco-photo">
          <Image
            src="/photos/marrakech.webp"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
            alt={t.morocco.photoAlt}
          />
          <span>{t.morocco.photoLabel}</span>
        </div>
        <div className="morocco-copy">
          <div className="eyebrow">{t.morocco.eyebrow}</div>
          <h2>
            {t.morocco.title1}
            <br />
            {t.morocco.title2}
            <br />
            <em>{t.morocco.titleEm}</em>
          </h2>
          <p>{t.morocco.p1}</p>
          <p>{t.morocco.p2}</p>
          <Link href="/about" className="text-link">
            {t.morocco.link} <Arrow />
          </Link>
          <div className="geography">
            {t.morocco.geoFrom} <Arrow /> {t.morocco.geoTo}
          </div>
        </div>
      </section>
      <section className="roadmap-section container section-pad" data-reveal>
        <div className="section-heading">
          <div>
            <div className="eyebrow">{t.roadmap.eyebrow}</div>
            <h2>{t.roadmap.title}</h2>
          </div>
          <Link href="/roadmap" className="text-link">
            {t.roadmap.link} <Arrow />
          </Link>
        </div>
        <Roadmap />
      </section>
      <section className="build-section">
        <div className="container build-inner" data-reveal>
          <div>
            <div className="eyebrow">{t.build.eyebrow}</div>
            <h2>
              {t.build.title1}
              <br />
              {t.build.title2}
            </h2>
            <p>
              {t.build.body1}
              <br />
              {t.build.body2}
            </p>
          </div>
          <div className="build-links">
            <Link href="/careers">
              <span>
                <small>{t.build.careersSmall}</small>
                {t.build.careers}
              </span>
              <Arrow external />
            </Link>
            <Link href="/partners">
              <span>
                <small>{t.build.partnersSmall}</small>
                {t.build.partners}
              </span>
              <Arrow external />
            </Link>
          </div>
        </div>
      </section>
      <section className="updates-section container section-pad" data-reveal>
        <div>
          <div className="eyebrow">{t.updates.eyebrow}</div>
          <h2>{t.updates.title}</h2>
          <p>{t.updates.body}</p>
        </div>
        <Link href="/updates" className="update-link">
          <span className="eyebrow">{t.updates.cardEyebrow}</span>
          <h3>{t.updates.cardTitle}</h3>
          <span className="text-link">
            {t.updates.cardLink} <Arrow />
          </span>
        </Link>
      </section>
      <section className="final-cta container" data-reveal>
        <Brand size={46} />
        <h2>
          {t.finalCta.title1}
          <br />
          {t.finalCta.title2}
        </h2>
        <a
          href={STAYS_URL}
          className="button primary"
          target="_blank"
          rel="noreferrer"
        >
          {t.finalCta.cta} <Arrow external />
        </a>
      </section>
    </main>
  );
}
