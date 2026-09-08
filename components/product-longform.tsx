import Link from "next/link";
import { Arrow } from "@/components/brand";
import { getProductLongform } from "@/lib/product-pages";

export function ProductLongform({ slug }: { slug: string }) {
  const content = getProductLongform(slug);
  if (!content) return null;

  const faqJsonLd =
    content.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <div className="product-longform">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {content.sections.map((section) => (
        <section key={section.id} className="longform-section" id={section.id}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {section.bullets && section.bullets.length > 0 && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      {content.faq.length > 0 && (
        <section className="longform-section" id="faq">
          <h2>Common questions</h2>
          <div className="longform-faq">
            {content.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {slug === "stays" && (
        <p className="fine-print">
          Looking for places to stay?{" "}
          <a href="https://nexastays.ma" className="text-link">
            Find accommodation with Nexa Stays <Arrow external />
          </a>
        </p>
      )}
      {slug === "go" && (
        <p className="fine-print">
          Groceries belong to a different product.{" "}
          <Link href="/fresh" className="text-link">
            Discover Nexa Fresh <Arrow />
          </Link>
        </p>
      )}
    </div>
  );
}
