# Nexa mascot asset preparation

## Current serving model (2026-09-08)

The site serves **PNG masters only** from `public/mascots/{name}.png` via `Mascot` in `components/brand.tsx`. Converted mascot WebPs are not used.

| Name | File | Notes |
|------|------|--------|
| parent | `parent.png` | Homepage hero |
| go | `go.png` | Homepage Go card (flying pose) |
| nexagoriding | `nexagoriding.png` | `/go/` product page |
| fresh | `fresh.png` | Homepage / product |
| pay | `pay.png` | Homepage / product |
| market | `market.png` | Homepage / product |
| stays | `stays.png` | Homepage / product |
| jobs | `jobs.png` | Homepage / product |
| family | `family.png` | Final CTA |

## Optional background cut

If a new PNG still has a studio black plate, edge flood-fill with:

```bash
node scripts/cut-mascot-bg.mjs <input.png> <output.webp>
```

Prefer keeping/serving a transparent PNG master when the art is already cut. The helper currently writes WebP for tooling convenience; copy or re-export PNG for production if needed.

## Earlier notes

Pose replacements (pay, market, jobs, stays) and earlier launch-set prep remain historical; see git history for prior WebP cutout workflow.
