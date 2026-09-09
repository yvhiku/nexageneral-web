# Nexa mascot asset system

## Serving model

Site serves **PNG masters** from `public/mascots/{name}.png` via `Mascot` in `components/brand.tsx`.

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

Dedicated **1200×630** compositions in `public/og/` (not hero crops):

```bash
npm run og:products
```

| Page | OG file |
|------|---------|
| Product `/stays/` … `/jobs/` | `og/{slug}.png` |
| Ecosystem | `og/ecosystem.png` |
| Corporate default | `og/default.png` |

## Target taxonomy (future rename)

```text
public/mascots/{parent,stays,go,pay,fresh,market,jobs,family}/…
public/og/default.png | stays|go|pay|fresh|market|jobs|ecosystem.png
```
