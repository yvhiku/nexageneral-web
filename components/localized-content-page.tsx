import Link from "next/link";
import { Brand, Arrow, Mascot, Status } from "@/components/brand";
import { Ecosystem } from "@/components/ecosystem";
import { Journey } from "@/components/journey";
import { Roadmap } from "@/components/roadmap";
import {
  getProduct,
  products,
  STAYS_URL,
  LINKEDIN_URL,
} from "@/lib/products";
import {
  getLocalizedCompany,
  getLocalizedProduct,
} from "@/lib/localized-pages";
import {
  localePath,
  translateStatus,
  type Locale,
} from "@/lib/i18n";
import { getBreadcrumbJsonLd, getProductServiceJsonLd } from "@/lib/entity";
import { insights } from "@/lib/insights";
import { notFound } from "next/navigation";

function Directory({
  locale,
  only,
}: {
  locale: Locale;
  only?: string[];
}) {
  const list = only
    ? only.map((s) => getProduct(s)).filter(Boolean)
    : products.filter((p) => p.slug !== "maps" && p.slug !== "cloud");
  return (
    <div className="product-directory">
      {list.map((p, i) => (
        <Link
          href={localePath(locale, `/${p!.slug}`)}
          key={p!.slug}
          className="directory-item"
        >
          <div className="directory-top">
            <span>
              0{i + 1} / {p!.verb}
            </span>
            <Arrow />
          </div>
          <Brand product={p!.logo ?? p!.slug} size={64} />
          <h3>{p!.name}</h3>
          <p>{getLocalizedProduct(locale, p!.slug)?.short ?? p!.short}</p>
          <Status status={translateStatus(locale, p!.status)} />
        </Link>
      ))}
    </div>
  );
}

export function LocalizedContentPage({
  locale,
  slug,
}: {
  locale: Exclude<Locale, "en">;
  slug: string;
}) {
  const productBase = getProduct(slug);
  const productCopy = getLocalizedProduct(locale, slug);
  const company = getLocalizedCompany(locale, slug);
  const lp = (href: string) => localePath(locale, href);

  if (productBase && productCopy) {
    const faqJsonLd =
      productCopy.longform.faq.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: productCopy.longform.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }
        : null;

    return (
      <main id="main" className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getBreadcrumbJsonLd([
                { name: "Nexa", path: locale === "fr" ? "/fr/" : "/ar/" },
                {
                  name: locale === "fr" ? "Produits" : "المنتجات",
                  path: `/${locale}/products/`,
                },
                { name: productBase.name, path: `/${locale}/${slug}/` },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getProductServiceJsonLd({
                product: productBase,
                description: productCopy.answerBlock,
                path: `/${locale}/${slug}/`,
              }),
            ),
          }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        <div style={{ paddingTop: 30 }} className="breadcrumbs">
          <Link href={lp("/")}>Nexa</Link>
          <span>/</span>
          <Link href={lp("/products")}>
            {locale === "fr" ? "Produits" : "المنتجات"}
          </Link>
          <span>/</span>
          <span>{productBase.name}</span>
        </div>
        <section
          className={`product-hero ${slug}`}
          style={
            {
              "--product-tint": productBase.tint,
              "--product-color": productBase.color,
            } as React.CSSProperties
          }
        >
          <div>
            <div className="product-lockup">
              <Brand
                product={productBase.logo ?? productBase.slug}
                size={56}
              />
              <span>{productBase.name}</span>
              <Status status={translateStatus(locale, productBase.status)} />
            </div>
            <h1>{productCopy.seoH1}</h1>
            <p className="product-brand-line">{productCopy.headline}</p>
            <p className="product-answer-block">{productCopy.answerBlock}</p>
            {slug === "stays" ? (
              <a
                href={STAYS_URL}
                target="_blank"
                rel="noreferrer"
                className="button dark"
              >
                {productCopy.ctaLabel} <Arrow external />
              </a>
            ) : (
              <Link href={lp("/roadmap")} className="text-link">
                {locale === "fr"
                  ? "Voir sa place dans la feuille de route"
                  : "مكانه في خارطة الطريق"}{" "}
                <Arrow />
              </Link>
            )}
            <Link href={lp("/ecosystem")} className="eyebrow">
              {locale === "fr"
                ? "En savoir plus sur l’écosystème Nexa"
                : "تعرّف على منظومة نكسا"}
            </Link>
          </div>
          {productBase.mascot ? (
            <Mascot name={productBase.mascot} />
          ) : (
            <div className="product-symbol">
              <Brand product={slug} size={200} />
            </div>
          )}
        </section>

        <div className="product-longform">
          {productCopy.longform.sections.map((section) => (
            <section key={section.id} className="longform-section" id={section.id}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {productCopy.longform.faq.length > 0 && (
            <section className="longform-section" id="faq">
              <h2>{locale === "fr" ? "Questions fréquentes" : "أسئلة شائعة"}</h2>
              <div className="longform-faq">
                {productCopy.longform.faq.map((item) => (
                  <div key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <section className="product-details">
          <div>
            <div className="eyebrow">
              {locale === "fr" ? "LA DIRECTION" : "الاتجاه"}
            </div>
            <h2 style={{ marginTop: 18 }}>{productCopy.headline}</h2>
          </div>
          <ol className="detail-list">
            {productCopy.details.map((detail, i) => (
              <li key={detail}>
                <span>0{i + 1}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {productBase.connections.length > 0 && (
          <section className="related-products">
            <div className="eyebrow">
              {locale === "fr" ? "MIEUX ENSEMBLE" : "أفضل معاً"}
            </div>
            <h2 style={{ marginTop: 18 }}>
              {locale === "fr"
                ? "Où les connexions pourraient vous mener."
                : "إلى أين قد تأخذك الاتصالات."}
            </h2>
            <div className="related-list">
              {productBase.connections.map((s) => (
                <Link key={s} href={lp(`/${s}`)}>
                  <Brand product={s} size={38} />
                  {getProduct(s)?.name}
                  <Arrow />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="subpage-cta" style={{ marginBottom: 80 }}>
          <div>
            <h3>{productCopy.ctaTitle}</h3>
            <p>{productCopy.ctaBody}</p>
          </div>
          <Link
            href={slug === "stays" ? STAYS_URL : lp("/ecosystem")}
            className="button primary"
            {...(slug === "stays"
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {productCopy.ctaLabel} <Arrow />
          </Link>
        </section>
      </main>
    );
  }

  if (!company) notFound();

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Nexa", path: locale === "fr" ? "/fr/" : "/ar/" },
              {
                name: company.hero.eyebrow,
                path: `/${locale}/${slug}/`,
              },
            ]),
          ),
        }}
      />
      <section className="page-hero container">
        <div className="breadcrumbs">
          <Link href={lp("/")}>Nexa</Link>
          <span>/</span>
          <span>{company.hero.eyebrow}</span>
        </div>
        <div className="eyebrow">{company.hero.eyebrow}</div>
        <h1>{company.hero.title}</h1>
        <p>{company.hero.description}</p>
      </section>
      <div className="container page-content">
        {slug === "products" && (
          <>
            <div className="prose" style={{ marginBottom: 40, maxWidth: 720 }}>
              {company.sections.map((s) => (
                <section key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </section>
              ))}
            </div>
            <Directory
              locale={locale}
              only={["stays", "go", "pay", "fresh", "market", "jobs"]}
            />
            <section className="subpage-cta">
              <Link href={lp("/ecosystem")} className="text-link">
                {locale === "fr"
                  ? "En savoir plus sur l’écosystème Nexa"
                  : "تعرّف على منظومة نكسا"}{" "}
                <Arrow />
              </Link>
            </section>
            <section style={{ marginTop: 50 }}>
              <h2 style={{ marginBottom: 20 }}>
                {locale === "fr" ? "Depuis Insights" : "من الرؤى"}
              </h2>
              <ul className="insights-list compact">
                {insights.slice(0, 3).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/insights/${a.slug}/`}>
                      <strong>{a.title}</strong>
                      <span className="text-link">
                        {locale === "fr" ? "Lire" : "اقرأ"} <Arrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {slug === "ecosystem" && (
          <>
            <div className="connection-grid">
              <div>
                <h2>{company.sections[0]?.heading}</h2>
                {company.sections[0]?.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <Ecosystem />
            </div>
            <div className="prose" style={{ marginTop: 60, maxWidth: 760 }}>
              {company.sections.slice(1).map((s) => (
                <section key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </section>
              ))}
            </div>
            <section style={{ marginTop: 80 }}>
              <Journey locale={locale} />
            </section>
            <section style={{ marginTop: 70 }}>
              <h2 style={{ marginBottom: 35 }}>
                {locale === "fr" ? "La famille Nexa." : "عائلة نكسا."}
              </h2>
              <Directory
                locale={locale}
                only={["stays", "go", "pay", "fresh", "market", "jobs"]}
              />
            </section>
          </>
        )}

        {slug === "roadmap" && (
          <>
            <Roadmap locale={locale} />
            <section className="prose" style={{ marginTop: 65 }}>
              {company.sections.map((s) => (
                <section key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </section>
              ))}
            </section>
            <Directory locale={locale} />
          </>
        )}

        {(slug === "why-nexa" ||
          slug === "about" ||
          slug === "careers" ||
          slug === "partners" ||
          slug === "updates" ||
          slug === "contact" ||
          slug === "privacy" ||
          slug === "terms" ||
          slug === "cookies" ||
          slug === "credits") && (
          <div className="prose">
            {company.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </section>
            ))}
            {slug === "updates" && (
              <p>
                <Link href={lp("/insights")} className="text-link">
                  Insights <Arrow />
                </Link>
              </p>
            )}
            {slug === "contact" && (
              <p>
                <a href={LINKEDIN_URL} className="text-link" target="_blank" rel="noreferrer">
                  LinkedIn <Arrow external />
                </a>
              </p>
            )}
            {slug === "careers" && (
              <p>
                <Link href={lp("/jobs")} className="text-link">
                  Nexa Jobs <Arrow />
                </Link>
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
