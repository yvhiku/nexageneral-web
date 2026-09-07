import {
  ArrowRight,
  CarFront,
  Package,
  ShoppingBag,
  BriefcaseBusiness,
  UserRound,
  Smartphone,
} from "lucide-react";
export function ProductFocus({ slug }: { slug: string }) {
  if (slug === "go")
    return (
      <section className="mobility-focus">
        <div>
          <CarFront size={32} strokeWidth={1.4} />
          <span className="eyebrow">FOR THE PLACES YOU GO</span>
          <h2>A ride across town.</h2>
          <p>
            From everyday plans to somewhere new. A focused ride experience,
            from pickup to arrival.
          </p>
        </div>
        <div>
          <Package size={32} strokeWidth={1.4} />
          <span className="eyebrow">FOR THE THINGS YOU SEND</span>
          <h2>A delivery across the neighborhood.</h2>
          <p>
            Documents, packages and everyday items. General local delivery
            belongs to Go; groceries belong to Fresh.
          </p>
        </div>
      </section>
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
            Milk for the morning.
            <br />A little time for yourself.
          </h2>
          <p>
            Fresh is dedicated to groceries and everyday essentials. The
            under-15-minute target applies only where local operations can
            support it.
          </p>
          <div className="grocery-list">
            <span>Fruit & vegetables</span>
            <span>Bread & bakery</span>
            <span>Milk & dairy</span>
            <span>Everyday essentials</span>
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
            Everyday transactions.
            <br />A considered approach.
          </h2>
          <p>
            Features and availability will be introduced in phases. Nexa Pay is
            currently in development.
          </p>
        </div>
        <ol>
          <li>
            <span>01</span>
            <strong>Send</strong>
            <p>Person-to-person transfers.</p>
            <ArrowRight size={20} />
          </li>
          <li>
            <span>02</span>
            <strong>Pay</strong>
            <p>QR and merchant transactions.</p>
            <ArrowRight size={20} />
          </li>
          <li>
            <span>03</span>
            <strong>Connect</strong>
            <p>Checkout across supported Nexa products.</p>
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
            ? "Opportunity works both ways."
            : "A marketplace has two sides."}
        </h2>
        <div>
          <article>
            {jobs ? <UserRound size={30} /> : <ShoppingBag size={30} />}
            <span className="eyebrow">
              {jobs ? "FOR CANDIDATES" : "FOR SHOPPERS"}
            </span>
            <h3>
              {jobs
                ? "Find a role that fits."
                : "Find your next good discovery."}
            </h3>
            <p>
              {jobs
                ? "Explore work opportunities, build your profile and keep track of applications."
                : "Discover products, compare options and get to know the people behind what you buy."}
            </p>
          </article>
          <article>
            {jobs ? <BriefcaseBusiness size={30} /> : <Package size={30} />}
            <span className="eyebrow">
              {jobs ? "FOR EMPLOYERS" : "FOR SELLERS"}
            </span>
            <h3>
              {jobs
                ? "Find the people you need."
                : "Bring your business online."}
            </h3>
            <p>
              {jobs
                ? "Publish roles, review candidates and organize recruitment in one focused experience."
                : "Present your products and connect with buyers through a structured marketplace."}
            </p>
          </article>
        </div>
      </section>
    );
  }
  return null;
}
