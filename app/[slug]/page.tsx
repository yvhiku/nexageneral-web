import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brand, Arrow, Mascot, Status } from "@/components/brand";
import { Ecosystem } from "@/components/ecosystem";
import { Journey } from "@/components/journey";
import { ProductFocus } from "@/components/product-focus";
import { Roadmap } from "@/components/roadmap";
import { products, getProduct, STAYS_URL, LINKEDIN_URL } from "@/lib/products";
const pages: Record<
  string,
  { title: string; eyebrow: string; description: string }
> = {
  products: {
    title: "A purpose for every product.",
    eyebrow: "Our products",
    description:
      "Eight focused experiences. A family of products for the places you go, the things you need and what comes next.",
  },
  ecosystem: {
    title: "Different experiences. One connected ecosystem.",
    eyebrow: "The Nexa ecosystem",
    description:
      "Every Nexa product has a clear purpose. We’re building the connections that make them more useful together.",
  },
  "why-nexa": {
    title: "Everyday life shouldn’t feel fragmented.",
    eyebrow: "Why Nexa",
    description:
      "Focused products, shared foundations and useful connections. A simple idea, built one experience at a time.",
  },
  roadmap: {
    title: "Building what’s next.",
    eyebrow: "Our roadmap",
    description:
      "We begin with a real product, then expand as the technology, operations and ecosystem mature.",
  },
  about: {
    title: "Built close to everyday life.",
    eyebrow: "About Nexa",
    description:
      "Nexa is a Moroccan technology company building a connected ecosystem of specialized digital services. We’re starting with accommodation and growing from there.",
  },
  careers: {
    title: "Help write the next chapter.",
    eyebrow: "Careers at Nexa",
    description:
      "Build useful products. Work close to real problems. Help shape an ecosystem from its earliest stages.",
  },
  partners: {
    title: "Build the ecosystem with us.",
    eyebrow: "Partnerships",
    description:
      "We’re interested in working with businesses and people who can help make everyday experiences better across Morocco.",
  },
  updates: {
    title: "Follow what we’re building.",
    eyebrow: "Nexa updates",
    description:
      "A place for product developments and meaningful company progress.",
  },
  contact: {
    title: "Let’s make a useful connection.",
    eyebrow: "Contact Nexa",
    description:
      "Get in touch about Nexa, opportunities to work together or the ecosystem we’re building.",
  },
  privacy: {
    title: "Privacy.",
    eyebrow: "Website information",
    description:
      "How this corporate website handles information, and where to find information about individual Nexa services.",
  },
  terms: {
    title: "Using this website.",
    eyebrow: "Website information",
    description:
      "Information about the Nexa corporate website and its relationship to individual Nexa products.",
  },
  cookies: {
    title: "Cookies and local storage.",
    eyebrow: "Website information",
    description:
      "A straightforward explanation of this website’s browser storage.",
  },
  credits: {
    title: "The people behind the pictures.",
    eyebrow: "Image credits",
    description:
      "Real Moroccan places, photographed by real people. Thank you to the creators whose work appears here.",
  },
};
export const dynamicParams = false;
export function generateStaticParams() {
  return [
    ...products.map((p) => ({ slug: p.slug })),
    ...Object.keys(pages).map((slug) => ({ slug })),
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  const page = pages[slug];
  return {
    title: product
      ? `${product.name} — ${product.category}`
      : (page?.title ?? "Not found"),
    description: product?.description ?? page?.description,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title: product?.name ?? page?.title,
      description: product?.description ?? page?.description,
      url: `/${slug}/`,
    },
  };
}
function Bread({ label }: { label: string }) {
  return (
    <div className="breadcrumbs">
      <Link href="/">Nexa</Link>
      <span>/</span>
      <span>{label}</span>
    </div>
  );
}
function ContactLink({ label = "Connect with Nexa" }: { label?: string }) {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noreferrer"
      className="button primary"
    >
      {label} <Arrow external />
    </a>
  );
}
function Directory() {
  return (
    <div className="product-directory">
      {products.map((p, i) => (
        <Link href={`/${p.slug}`} key={p.slug} className="directory-item">
          <div className="directory-top">
            <span>
              0{i + 1} / {p.verb}
            </span>
            <Arrow external />
          </div>
          <Brand product={p.logo ?? p.slug} size={48} />
          <h3>{p.name}</h3>
          <p>{p.short}</p>
          <Status status={p.status} />
        </Link>
      ))}
    </div>
  );
}
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (product)
    return (
      <main id="main" className="container">
        <div style={{ paddingTop: 30 }}>
          <Bread label={product.name} />
        </div>
        <section
          className={`product-hero ${slug}`}
          style={
            {
              "--product-tint": product.tint,
              "--product-color": product.color,
            } as React.CSSProperties
          }
        >
          <div>
            <div className="product-lockup">
              <Brand product={product.logo ?? product.slug} size={40} />
              <span>{product.name}</span>
              <Status status={product.status} />
            </div>
            <h1>{product.headline}</h1>
            <p>{product.description}</p>
            {slug === "stays" ? (
              <a
                href={STAYS_URL}
                target="_blank"
                rel="noreferrer"
                className="button dark"
              >
                Explore Nexa Stays <Arrow external />
              </a>
            ) : (
              <Link href="/roadmap" className="text-link">
                See where it fits in our roadmap <Arrow />
              </Link>
            )}
            <Link href="/ecosystem" className="eyebrow">
              Part of the Nexa ecosystem
            </Link>
          </div>
          {product.mascot ? (
            <Mascot name={product.mascot} />
          ) : (
            <div className="product-symbol">
              <Brand product={slug} size={160} />
            </div>
          )}
        </section>
        <ProductFocus slug={slug} />
        <section className="product-details">
          <div>
            <div className="eyebrow">
              {slug === "stays" ? "THE EXPERIENCE" : "THE DIRECTION"}
            </div>
            <h2 style={{ marginTop: 18 }}>
              {slug === "cloud"
                ? "A longer-term vision."
                : slug === "stays"
                  ? "A little more clarity. At every step."
                  : "A clear purpose. A focused experience."}
            </h2>
          </div>
          <ol className="detail-list">
            {product.details.map((detail, i) => (
              <li key={detail}>
                <span>0{i + 1}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </section>
        {slug === "stays" && (
          <>
            <div className="photo-wide">
              <Image
                src="/photos/riad.webp"
                fill
                sizes="90vw"
                alt="Courtyard at Riad Le Rihani, Marrakech — destination inspiration"
              />
            </div>
            <p className="fine-print">
              Destination inspiration: Riad Le Rihani, Marrakech. Photography
              does not indicate a Nexa listing or partnership.
            </p>
          </>
        )}
        {product.connections.length > 0 && (
          <section className="related-products">
            <div className="eyebrow">BETTER TOGETHER</div>
            <h2 style={{ marginTop: 18 }}>
              Where the connections could take you.
            </h2>
            <p>
              These are planned connections within the Nexa ecosystem.
              Availability depends on each product and integration.
            </p>
            <div className="related-list">
              {product.connections.map((s) => (
                <Link key={s} href={`/${s}`}>
                  <Brand product={s} size={29} />
                  {getProduct(s)?.name}
                  <Arrow />
                </Link>
              ))}
            </div>
          </section>
        )}
        <section className="subpage-cta" style={{ marginBottom: 80 }}>
          <div>
            <h3>
              {slug === "stays"
                ? "A place for your next chapter."
                : "See the bigger picture."}
            </h3>
            <p>
              {slug === "stays"
                ? "Explore accommodation in Morocco."
                : "Discover the products that make up Nexa."}
            </p>
          </div>
          <Link
            href={slug === "stays" ? STAYS_URL : "/ecosystem"}
            className="button primary"
          >
            {slug === "stays" ? "Explore Nexa Stays" : "Explore the ecosystem"}
            <Arrow />
          </Link>
        </section>
      </main>
    );
  const page = pages[slug];
  if (!page) notFound();
  return (
    <main id="main">
      <section className="page-hero container">
        <Bread
          label={
            slug === "why-nexa"
              ? "Why Nexa"
              : slug[0].toUpperCase() + slug.slice(1)
          }
        />
        <div className="eyebrow">{page.eyebrow}</div>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>
      <div className="container page-content">
        {slug === "products" && (
          <>
            <Directory />
            <section className="subpage-cta">
              <h3>Independent experiences. A shared direction.</h3>
              <Link href="/ecosystem" className="text-link">
                How Nexa connects <Arrow />
              </Link>
            </section>
          </>
        )}
        {slug === "ecosystem" && (
          <>
            <div className="connection-grid">
              <div>
                <h2>
                  Focused by product.
                  <br />
                  Connected by Nexa.
                </h2>
                <p>
                  Stay, move, pay, shop, work and discover. Each product focuses
                  on one part of everyday life.
                </p>
                <p>
                  Shared foundations can make it easier to move between
                  experiences as the ecosystem grows. Select a product to
                  explore its purpose and current status.
                </p>
              </div>
              <Ecosystem />
            </div>
            <section style={{ marginTop: 80 }}>
              <div className="eyebrow">A CONNECTED JOURNEY</div>
              <h2 style={{ margin: "16px 0 35px" }}>A weekend in Marrakech.</h2>
              <Journey />
            </section>
            <section style={{ marginTop: 70 }}>
              <h2 style={{ marginBottom: 35 }}>Meet the family.</h2>
              <Directory />
            </section>
          </>
        )}
        {slug === "why-nexa" && (
          <>
            <div className="prose">
              <h2>Every product has one clear job.</h2>
              <p>
                A booking platform should help you find a place to stay. A
                mobility service should help you get there. Good experiences
                begin with focus.
              </p>
              <p>
                Nexa brings those focused experiences into one family, with
                shared infrastructure and a long-term plan for useful
                connections.
              </p>
              <h2>Connection should earn its place.</h2>
              <p>
                Finding a neighborhood, booking a nearby stay and planning a
                ride are different tasks within the same trip. That is the kind
                of connection we want to make easier.
              </p>
              <p>
                The ecosystem is being built in stages. We start with Nexa
                Stays, learn from real use and expand deliberately.
              </p>
            </div>
            <div className="principles">
              {[
                [
                  "Useful first",
                  "Solve a real problem before adding another feature.",
                ],
                [
                  "Local understanding",
                  "Build close to the people and businesses using the products.",
                ],
                [
                  "Earn trust",
                  "Make clarity, reliability and transparency part of everyday use.",
                ],
              ].map(([title, body], i) => (
                <div className="principle" key={title}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <Link href="/roadmap" className="button primary">
              See how we’re building it <Arrow />
            </Link>
          </>
        )}
        {slug === "roadmap" && (
          <>
            <Roadmap />
            <section className="prose" style={{ marginTop: 65 }}>
              <h2>Start with something useful.</h2>
              <p>
                Nexa Stays is our first consumer experience. It gives us a
                focused place to put the principles behind Nexa into practice.
              </p>
              <h2>Build the next connections carefully.</h2>
              <p>
                Nexa Pay is in development. Go and Fresh form the next stage of
                the ecosystem, with mobility, general delivery and groceries
                serving distinct needs.
              </p>
              <h2>Make progress visible.</h2>
              <p>
                Market and Jobs broaden the longer-term network. Maps and Cloud
                remain future directions, with detailed capabilities still to be
                defined.
              </p>
              <p>
                We use product stages instead of announcing uncommitted launch
                dates. Private beta labels will apply only to experiences
                available to invited users.
              </p>
            </section>
            <Directory />
          </>
        )}
        {slug === "about" && (
          <>
            <div className="morocco-section" style={{ paddingTop: 0 }}>
              <div className="morocco-photo">
                <Image
                  src="/photos/marrakech.webp"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  alt="Everyday street life in Marrakech"
                />
              </div>
              <div className="prose">
                <h2>We start where we can learn.</h2>
                <p>
                  Morocco is our starting point. Building here means staying
                  close to the people, businesses and everyday behaviors we aim
                  to serve.
                </p>
                <p>
                  Our mission is to make everyday digital life simpler and more
                  connected. We begin with accommodation, then expand into
                  complementary services as the ecosystem develops.
                </p>
                <p>
                  Our long-term ambition reaches across North Africa. The work
                  starts with useful products, one step at a time.
                </p>
              </div>
            </div>
            <div className="principles">
              {[
                ["Useful first", "Technology should solve real problems."],
                [
                  "Specialized by design",
                  "Every product should be clear about its purpose.",
                ],
                [
                  "Connected by intent",
                  "Connect experiences where it helps people.",
                ],
                [
                  "Local understanding",
                  "Learn from actual needs and everyday behavior.",
                ],
                ["Earn trust", "Build with reliability and transparency."],
                ["Think long term", "Grow the ecosystem deliberately."],
              ].map(([title, body], i) => (
                <div className="principle" key={title}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <div className="company-links">
              <div className="company-link">
                <h3>Help build Nexa.</h3>
                <p>Bring your perspective to the products and company.</p>
                <Link href="/careers" className="text-link">
                  Careers <Arrow />
                </Link>
              </div>
              <div className="company-link">
                <h3>Connect your business.</h3>
                <p>Explore opportunities to work with the ecosystem.</p>
                <Link href="/partners" className="text-link">
                  Partnerships <Arrow />
                </Link>
              </div>
            </div>
          </>
        )}
        {slug === "careers" && (
          <>
            <div className="principles">
              {[
                [
                  "Engineering",
                  "Build reliable systems, APIs and applications.",
                ],
                [
                  "Product & design",
                  "Turn everyday needs into useful, recognizable experiences.",
                ],
                [
                  "Operations",
                  "Make the digital experience work in the real world.",
                ],
                ["Growth", "Help Nexa reach guests, hosts and businesses."],
                [
                  "Partnerships",
                  "Build relationships with businesses and communities.",
                ],
              ].map(([title, body], i) => (
                <div className="principle" key={title}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <div className="empty-state">
              <h2>Keep in touch.</h2>
              <p>
                There are no individual vacancies published on this website yet.
                Follow Nexa for role announcements or introduce yourself through
                our company page.
              </p>
              <ContactLink label="Find Nexa on LinkedIn" />
            </div>
            <p className="fine-print">
              Looking for the Nexa Jobs product?{" "}
              <Link href="/jobs" className="text-link">
                Explore Nexa Jobs <Arrow />
              </Link>
            </p>
          </>
        )}
        {slug === "partners" && (
          <>
            <div className="prose">
              <h2>Useful connections start with people.</h2>
              <p>
                Nexa is building a portfolio of everyday services, starting with
                accommodation. We welcome conversations with businesses that
                understand their communities and want to help shape what comes
                next.
              </p>
            </div>
            <div className="company-links">
              <div className="company-link">
                <Brand product="stays" size={40} />
                <h3>Hosts & accommodation</h3>
                <p>
                  Explore the live Nexa Stays experience and opportunities to
                  present your property.
                </p>
                <a
                  href={STAYS_URL}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Nexa Stays <Arrow external />
                </a>
              </div>
              <div className="company-link">
                <Brand size={40} />
                <h3>Ecosystem partnerships</h3>
                <p>
                  Local commerce, operations and technology. Talk to us about
                  how your business could contribute as Nexa grows.
                </p>
                <Link href="/contact" className="text-link">
                  Connect with Nexa <Arrow />
                </Link>
              </div>
            </div>
          </>
        )}
        {slug === "updates" && (
          <>
            <article className="update-article">
              <Brand product="stays" size={80} />
              <div>
                <Status status="Live" />
                <h2>Nexa starts with Stays.</h2>
                <p>
                  Our first consumer experience is accommodation in Morocco.
                  Nexa Stays is the starting point for a wider family of focused
                  digital services.
                </p>
                <a
                  href={STAYS_URL}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the product <Arrow external />
                </a>
              </div>
            </article>
            <section className="subpage-cta">
              <div>
                <h3>Follow the next steps.</h3>
                <p>Find company announcements on Nexa’s LinkedIn page.</p>
              </div>
              <ContactLink label="Follow Nexa" />
            </section>
          </>
        )}
        {slug === "contact" && (
          <>
            <div className="company-links" style={{ marginTop: 0 }}>
              <div className="company-link">
                <h3>Company & partnerships</h3>
                <p>
                  For company enquiries, partnerships or an introduction,
                  connect with Nexa through our official LinkedIn page.
                </p>
                <ContactLink />
              </div>
              <div className="company-link">
                <h3>Nexa Stays enquiries</h3>
                <p>
                  For accommodation, host information or help with a stay, use
                  the contact and support options within Nexa Stays.
                </p>
                <a
                  href={STAYS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Go to Nexa Stays <Arrow external />
                </a>
              </div>
            </div>
          </>
        )}
        {slug === "privacy" && (
          <div className="prose">
            <h2>This corporate website</h2>
            <p>
              This site provides information about Nexa and its products. The
              application does not include account registration, contact forms,
              advertising trackers or analytics scripts. Product selections and
              journey interactions stay in the page’s temporary memory.
            </p>
            <h2>Hosting and external services</h2>
            <p>
              The hosting provider may process technical request information to
              deliver and protect the website. If you access a private preview,
              its provider may require authentication under its own privacy
              terms.
            </p>
            <p>
              Links to Nexa Stays, LinkedIn and image-credit sources take you to
              separate websites. Those services have their own privacy
              information and may process data when you visit them.
            </p>
            <h2>Individual Nexa products</h2>
            <p>
              This page describes the corporate website only. Review the privacy
              information provided within a Nexa product before registering,
              booking or using that service.
            </p>
            <h2>Contact</h2>
            <p>
              For corporate privacy enquiries, use the channel listed on the{" "}
              <Link href="/contact">contact page</Link>. Avoid sending sensitive
              account or booking information through social media.
            </p>
          </div>
        )}
        {slug === "terms" && (
          <div className="prose">
            <h2>About this site</h2>
            <p>
              This website introduces Nexa, its products and its development
              roadmap. Information about planned products describes a direction
              and does not establish an availability or launch-date commitment.
            </p>
            <h2>Product availability</h2>
            <p>
              Product status labels distinguish public services, development
              work and future concepts. Features and availability may change as
              products develop. Illustrative ecosystem journeys do not mean all
              integrations are currently available.
            </p>
            <h2>Separate product services</h2>
            <p>
              Bookings, transactions and other product activities happen through
              the relevant Nexa service and are subject to the terms provided
              there. This corporate website does not process bookings or
              payments.
            </p>
            <h2>Brand and photography</h2>
            <p>
              Nexa names, logos and mascot artwork identify the Nexa ecosystem.
              Third-party photographs are credited on the{" "}
              <Link href="/credits">image credits page</Link> and remain subject
              to their respective licenses. Accommodation imagery is destination
              inspiration and does not establish a listing or partnership.
            </p>
            <h2>Questions</h2>
            <p>
              Use the <Link href="/contact">contact page</Link> for questions
              about this website.
            </p>
          </div>
        )}
        {slug === "cookies" && (
          <div className="prose">
            <h2>No application cookies</h2>
            <p>
              This corporate website does not set application cookies or use
              local storage. Interactive product selections are temporary and
              reset when you reload the page.
            </p>
            <h2>No advertising or analytics scripts</h2>
            <p>
              The site includes no advertising pixels or analytics integrations.
              Fonts, logos, mascot artwork and page photographs are served with
              the website.
            </p>
            <h2>Hosting and linked websites</h2>
            <p>
              A hosting or private-preview provider may use its own cookies for
              access or security. Other websites linked from Nexa may use
              cookies under their own policies.
            </p>
          </div>
        )}
        {slug === "credits" && (
          <div className="prose">
            <h2>Nexa identity</h2>
            <p>
              Original logos and mascot references supplied by Nexa. Mascot
              backgrounds prepared for web use while retaining the supplied
              character designs.
            </p>
            <h2>Riad courtyard, Marrakech</h2>
            <p>
              Photograph by{" "}
              <a
                href="https://unsplash.com/photos/a-courtyard-with-a-pool-and-elegant-architecture-TFhl8b-rRPg"
                target="_blank"
                rel="noreferrer"
              >
                Alexander Psiuk / Unsplash
              </a>
              , showing Riad Le Rihani. Used under the{" "}
              <a href="https://unsplash.com/license">Unsplash License</a>.
              Displayed with a responsive crop.
            </p>
            <p>
              This is destination inspiration. Its inclusion does not indicate
              that the property is a Nexa listing or partner.
            </p>
            <h2>Marrakech street</h2>
            <p>
              <a href="https://commons.wikimedia.org/wiki/File:Marrakech_street.jpg">
                Marrakech street
              </a>{" "}
              by Edviges. Licensed under{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
              . Displayed with responsive cropping; the underlying photograph is
              supplied unchanged.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
