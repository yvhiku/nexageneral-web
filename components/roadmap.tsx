import Link from "next/link";
const stages = [
  { label: "Now", status: "Available today", items: ["Stays"], active: true },
  { label: "Building", status: "In development", items: ["Pay"] },
  { label: "Coming next", status: "Coming soon", items: ["Go", "Fresh"] },
  {
    label: "Expanding",
    status: "Coming soon",
    items: ["Market", "Jobs", "Maps"],
  },
  { label: "Long term", status: "Future", items: ["Cloud"] },
];
export function Roadmap() {
  return (
    <>
      <div className="roadmap">
        {stages.map((s, i) => (
          <div
            className={`roadmap-stage ${s.active ? "current" : ""}`}
            key={s.label}
          >
            <div className="roadmap-line">
              <span />0{i + 1}
            </div>
            <p className="eyebrow">{s.label}</p>
            {s.items.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                Nexa {item}
              </Link>
            ))}
            <small>{s.status}</small>
          </div>
        ))}
      </div>
      <p className="fine-print">
        Product order, availability and timing may evolve as Nexa develops.
      </p>
    </>
  );
}
