import {
  ArrowRight,
  CarFront,
  Package,
  ShoppingBag,
  BriefcaseBusiness,
  UserRound,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { Arrow } from "@/components/brand";

export function ProductFocus({ slug }: { slug: string }) {
  if (slug === "go")
    return (
      <>
        <section className="mobility-focus mobility-focus-three">
          <div>
            <CarFront size={32} strokeWidth={1.4} />
            <span className="eyebrow">LOCAL RIDES WITH NEXA GO</span>
            <h2>Local rides when you need them.</h2>
            <p>
              Request local transportation and move around supported cities
              through Nexa Go.
            </p>
          </div>
          <div>
            <UtensilsCrossed size={32} strokeWidth={1.4} />
            <span className="eyebrow">RESTAURANT FOOD DELIVERY</span>
            <h2>Your local restaurants, delivered.</h2>
            <p>
              Discover participating restaurants and order prepared meals for
              local delivery.
            </p>
          </div>
          <div>
            <Package size={32} strokeWidth={1.4} />
            <span className="eyebrow">GENERAL LOCAL DELIVERY</span>
            <h2>Send it locally.</h2>
            <p>
              Documents, parcels, retail purchases and everyday personal
              deliveries across your city.
            </p>
          </div>
        </section>
        <section className="product-details go-disambiguation">
          <div>
            <div className="eyebrow">NEXA GO VS NEXA FRESH</div>
            <h2 style={{ marginTop: 18 }}>
              Different delivery needs. Different products.
            </h2>
          </div>
          <div className="prose" style={{ maxWidth: 720 }}>
            <p>
              Nexa Go handles rides, restaurant food and general local delivery.
              Nexa Fresh is dedicated specifically to groceries and everyday
              grocery essentials.
            </p>
            <p>
              Keeping the services separate allows each product to be optimized
              for its own category.
            </p>
            <Link href="/fresh" className="text-link">
              Discover Nexa Fresh groceries <Arrow />
            </Link>
          </div>
        </section>
        <section className="product-details">
          <div>
            <div className="eyebrow">HOW NEXA GO CONNECTS</div>
            <h2 style={{ marginTop: 18 }}>
              Part of the Nexa ecosystem.
            </h2>
          </div>
          <div className="prose" style={{ maxWidth: 720 }}>
            <p>
              A Nexa Stays guest could use Go for transportation and restaurant
              orders. A Nexa Market customer could potentially use Go for
              selected local deliveries. Nexa Pay may eventually support
              compatible transactions across the service.
            </p>
            <p>
              These connections will be introduced progressively as the products
              become available.
            </p>
            <Link href="/ecosystem" className="text-link">
              Learn about the Nexa digital ecosystem <Arrow />
            </Link>
          </div>
        </section>
      </>
    );
  if (slug === "fresh")
    return (
      <section className="fresh-focus">
        <div className="fresh-time">
          <strong>15</strong>
          <span>
            MINUTES
            <br />
            OUR DELIVERY TARGET
          </span>
        </div>
        <div>
          <div className="eyebrow">GROCERIES. THAT’S OUR FOCUS.</div>
          <h2>
            Everyday groceries,
            <br />
            delivered faster.
          </h2>
          <p>
            Nexa Fresh is dedicated to groceries and household essentials —
            not restaurant meals. The under-15-minute target applies only where
            local operations can support it.
          </p>
          <div className="grocery-list">
            <span>Fruit & vegetables</span>
            <span>Dairy & drinks</span>
            <span>Pantry essentials</span>
            <span>Household & personal care</span>
          </div>
        </div>
      </section>
    );
  if (slug === "pay")
    return (
      <section className="payment-focus">
        <div>
          <Smartphone size={35} strokeWidth={1.3} />
          <h2>
            Payments designed
            <br />
            to connect the ecosystem.
          </h2>
          <p>
            Capabilities will be developed progressively, subject to regulatory,
            operational and technical requirements. Nexa Pay is on the
            development roadmap.
          </p>
        </div>
        <ol>
          <li>
            <span>01</span>
            <strong>Checkout</strong>
            <p>Pay for supported Nexa services.</p>
            <ArrowRight size={20} />
          </li>
          <li>
            <span>02</span>
            <strong>Merchants</strong>
            <p>Selected partner digital payments.</p>
            <ArrowRight size={20} />
          </li>
          <li>
            <span>03</span>
            <strong>QR & connect</strong>
            <p>Simpler flows across compatible products.</p>
            <ArrowRight size={20} />
          </li>
        </ol>
      </section>
    );
  if (slug === "jobs" || slug === "market") {
    const jobs = slug === "jobs";
    return (
      <section
        className={`audience-focus ${jobs ? "jobs-focus" : "market-focus"}`}
      >
        <h2>
          {jobs
            ? "Find opportunity. Find talent."
            : "Built for buyers and merchants."}
        </h2>
        <div>
          <article>
            {jobs ? <UserRound size={30} /> : <ShoppingBag size={30} />}
            <span className="eyebrow">
              {jobs ? "FOR CANDIDATES" : "FOR BUYERS"}
            </span>
            <h3>
              {jobs
                ? "Discover relevant opportunities."
                : "Explore products with clarity."}
            </h3>
            <p>
              {jobs
                ? "Job listings, candidate profiles, application tracking and employer information."
                : "Structured categories, clearer merchant information and a consistent purchasing experience."}
            </p>
          </article>
          <article>
            {jobs ? <BriefcaseBusiness size={30} /> : <Package size={30} />}
            <span className="eyebrow">
              {jobs ? "FOR EMPLOYERS" : "FOR MERCHANTS"}
            </span>
            <h3>
              {jobs
                ? "Reach suitable candidates."
                : "An additional digital channel."}
            </h3>
            <p>
              {jobs
                ? "Employer profiles, vacancy publishing, candidate discovery and recruitment tools."
                : "Product listings, storefront profiles, order management and selected delivery integrations."}
            </p>
          </article>
        </div>
      </section>
    );
  }
  return null;
}
