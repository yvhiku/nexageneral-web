# Nexa mascot asset preparation

## Current homepage mascots (2026-09-08)

Replaced poses for **pay**, **market**, **jobs**, and **stays** from supplied new artwork (black studio backgrounds). Edge-connected near-black flood-fill → true alpha WebP in `public/mascots/{pay,market,jobs,stays}.webp`.

Sources (Cursor session assets):

- `nexapaynewpose-*.png` — standing, phone “All set!”
- `nexamarketnewpose-*.png` — sitting among market parcels/bags
- `nexastaysnewpose-*.jpg` — sitting on suitcase with stay props
- `nexajobsnewposeEN-*.jpg` — desk / thumbs-up with jobs UI chrome

`go.webp`, `fresh.webp`, and `parent.webp` unchanged in this pass.

Regenerate cutouts (from this repo root):

```bash
# inputs: paths to the four source images
node scripts/cut-mascot-bg.mjs
```

(If the helper script is absent, re-run the flood-fill snippet used in the 2026-09-08 update, or restore from git history.)

Alpha checked via corner samples (`rgba(0,0,0,0)`) and transparent-pixel counts. Jobs keeps internal black desk/chair/books; only backdrop black connected to the canvas edge was cleared.

---

## Earlier preparation (launch set)

Built-in image_gen tool, background-extraction edits. Inputs: `/Users/apple/Downloads/nexa{stays,go,pay,fresh,market,jobs}pose.png`. Market previously used a white-canvas fallback; **market now has true alpha** like the other product mascots.
