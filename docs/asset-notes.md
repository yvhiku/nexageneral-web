# Nexa mascot asset system

## Serving model

- `public/mascots/{name}.png` — **PNG master**. Source of truth, never edited by scripts, never served.
- `public/mascots/{name}.webp` — **what the site serves** via `Mascot` in `components/brand.tsx`.
- `public/mascots/thumbs/{name}.webp` — 128px markers for the Roadmap (`<Mascot variant="thumb" />`).

Delivery files are **lossless WebP** (no chroma subsampling, no artefacts), resized to 2x the largest CSS box the asset is shown in. The build script decodes every WebP and fails if a single visible pixel differs from the resized master. Result: ~3x smaller than the PNGs, visually identical.

```bash
npm run optimize:mascots   # rerun after adding or replacing any PNG master
```

Caps: heroes/corporate/banners 1000px · home poses 800px · `family` 1440px wide · thumbs 128px. Adjust in `scripts/optimize-mascots.mjs` if a CSS box grows.

The site is a static export with `images.unoptimized`, so nothing is resized or re-encoded at request time — whatever is in `public/` ships as-is. Do **not** point `Mascot` back at `.png`.

## Favicons

Built from `public/brand/nexa-favicon-transparent.png` by `npm run favicons`: transparent blue mark (no tile). **Stable public URLs — do not rotate filenames:**

| URL | Size |
|-----|------|
| `/icon-48.png` | 48×48 (listed first; Google Search preferred) |
| `/icon.png` | 32×32 |
| `/icon-192.png` | 192×192 |
| `/icon-512.png` | 512×512 (also `Organization.logo` / `NEXA_LOGO`) |
| `/apple-icon.png` | 180×180 |
| `/favicon.ico` | 16 + 32 + 48 |

Hostname consolidation is **Nginx on the VPS** (`www` → `https://nexa.ma$request_uri`), not `vercel.json`. After deploy, request indexing for `https://nexa.ma/` in Search Console; the SERP icon updates on Google's recrawl schedule.

## Design rules (locked)

1. **Four roles** — Parent (corporate) · Product pose (home cards / compact markers) · Action/banner (product heroes + product OGs) · Family (rare ecosystem storytelling).
2. **One dominant mascot per viewport.**
3. **Prominence ∝ emotional storytelling** — high on heroes/errors/empty/social; low on specs/legal/dense copy.
4. **Service boundaries** — Fresh = groceries · Go = rides / restaurant food / local delivery · Market = shopping · Pay = payments · Jobs = careers · Stays = accommodation · Parent = company/ecosystem.
5. **Never reuse action banners as Roadmap/About/Why/Careers markers.**

## Filename map (current flat layout)

| Role | File | Use |
|------|------|-----|
| Parent about | `nexaparentabout.png` | About |
| Parent why | `nexaparentwhy.png` | Why Nexa |
| Parent neutral | `parent.png` | Home hero, 404 |
| Stays roadmap | `nexastaysroadmap.png` | Roadmap marker |
| Go roadmap | `nexagoroadmap.png` | Roadmap marker |
| Pay roadmap | `nexapayroadmap.png` | Roadmap marker |
| Fresh roadmap | `nexafreshroadmap.png` | Roadmap marker |
| Market roadmap | `nexamarketroadmap.png` | Roadmap marker |
| Jobs roadmap | `nexajobsroadmap.png` | Roadmap marker |
| Jobs careers | `nexajobscareers.png` | Careers |
| Family | `family.png` | Ecosystem + home CTA |
| Action banners | `nexastaysbanner`, `nexagoriding`, `nexapaybanner`, `nexafreshriding`, `nexamarketbanner`, `nexajobsbanner` | Product pages |
| Home poses | `stays`, `go`, `pay`, `fresh`, `market`, `jobs` | Homepage cards |

## Open Graph

Dedicated **1200×630** compositions in `public/og/` (not hero crops), lossless PNG:

```bash
npm run og:products   # product + ecosystem comps from mascot masters
npm run og            # og/default.png (master art) → og/default.jpg (1200×800, q88)
```

| Page | OG file |
|------|---------|
| Product `/stays/` … `/jobs/` | `og/{slug}.png` |
| Ecosystem | `og/ecosystem.png` |
| Corporate default | `og/default.jpg` (master: `og/default.png`, not served) |

Keep every OG under ~600KB — WhatsApp/LinkedIn crawlers drop heavier previews.

## Target taxonomy (future rename)

```text
public/mascots/{parent,stays,go,pay,fresh,market,jobs,family}/…
public/og/default.jpg | stays|go|pay|fresh|market|jobs|ecosystem.png
```
