"use client";
import { useState } from "react";
import Link from "next/link";
import { Brand, Arrow } from "./brand";
const steps = [
  {
    slug: "maps",
    title: "Find your neighborhood.",
    body: "A quiet corner of the medina, a favorite café, a place that feels like you. Start by discovering the area.",
    label: "Discover",
  },
  {
    slug: "stays",
    title: "Make yourself at home.",
    body: "Find a place nearby, get to know the details and choose the stay that fits your weekend.",
    label: "Stay",
  },
  {
    slug: "pay",
    title: "Take care of the payment.",
    body: "As supported integrations arrive, Nexa Pay is intended to make checkout a connected part of the trip.",
    label: "Pay",
  },
  {
    slug: "go",
    title: "And you’re on your way.",
    body: "Plan a ride to your accommodation through Nexa Go, with clear pickup and trip progress.",
    label: "Move",
  },
  {
    slug: "fresh",
    title: "Settle in. We’ll bring the groceries.",
    body: "Breakfast for tomorrow, something for tonight. The vision includes grocery delivery to supported stays.",
    label: "Settle in",
  },
];
export function Journey() {
  const [step, setStep] = useState(1);
  const current = steps[step];
  return (
    <div className="journey">
      <div
        className="journey-tabs"
        role="tablist"
        aria-label="A weekend in Marrakech"
      >
        {steps.map((s, i) => (
          <button
            id={`journey-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === step}
            aria-controls="journey-panel"
            tabIndex={i === step ? 0 : -1}
            key={s.slug}
            className={step === i ? "active" : ""}
            onClick={() => setStep(i)}
            onKeyDown={(e) => {
              let next = i;
              if (e.key === "ArrowRight") next = (i + 1) % steps.length;
              else if (e.key === "ArrowLeft")
                next = (i + steps.length - 1) % steps.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = steps.length - 1;
              else return;
              e.preventDefault();
              setStep(next);
              document.getElementById(`journey-tab-${next}`)?.focus();
            }}
          >
            <span>0{i + 1}</span>
            {s.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="journey-panel"
        aria-labelledby={`journey-tab-${step}`}
        className="journey-panel"
      >
        <div className="journey-mark">
          <Brand product={current.slug} size={75} />
        </div>
        <div>
          <span className="eyebrow">Nexa {current.slug}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          <Link href={`/${current.slug}`} className="text-link">
            Explore Nexa {current.slug} <Arrow />
          </Link>
        </div>
      </div>
      <p className="journey-note">
        An illustration of the ecosystem we’re building. Availability and
        connections will be introduced in stages.
      </p>
    </div>
  );
}
