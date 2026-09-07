# Nexa corporate website

Next.js App Router + TypeScript, statically exported. Uses original Nexa logos, reference-based mascot artwork, local fonts, and a lazily loaded Three.js ecosystem connection diagram. No database, authentication, payment processing or analytics in this corporate app.

## Run

- `npm install`
- `npm run dev -- --port 3100`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm start` (serve the production export on port 3100)

Production static output is in `out/`. Use a static host that supports directory indexes. `npm start` uses a static server; Next.js renders the HTML during the build.

## Content

Product definitions and statuses: `lib/products.ts`.
Homepage: `app/page.tsx`. Product and company pages: `app/[slug]/page.tsx`.
Shared design: `app/globals.css`.
Navigation uses `STAYS_URL` and `LINKEDIN_URL` from `lib/products.ts`.

Company-provided launch statuses are used. No fabricated team, vacancies, milestones, listing statistics, or regulatory claims. Maps and Cloud use neutral interface symbols because no original identities were supplied. Cross-product journeys are explicitly planned.

## Accessibility and animation

Keyboard-accessible navigation and tabs, skip link, visible focus, semantic headings and alt text. Three.js loads when the diagram approaches the viewport, pauses when offscreen or the document is hidden, and disposes GPU resources on unmount. Reduced-motion or WebGL failure leaves the SVG diagram and HTML product controls usable. Mascots remain 2D images.

## Assets and publication

Original supplied logos retained in `public/brand/` alongside optimized WebP versions. Mascots live in `public/mascots/`. Third-party photo provenance and licenses are on `/credits/`. Riad imagery is inspiration, not evidence of a Nexa listing. Review legal content, product availability and corporate contact routing before public launch. Canonicals target `https://nexa.ma`; private preview is separate from production DNS.
