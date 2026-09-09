/**
 * Build delivery assets for mascots WITHOUT touching the PNG masters.
 *
 *   public/mascots/{name}.png          → master (source of truth, never served)
 *   public/mascots/{name}.webp         → what the site serves (lossless WebP,
 *                                        resized to 2x of the largest CSS box)
 *   public/mascots/thumbs/{name}.webp  → 128px lossless thumbs for roadmap markers
 *
 * Lossless WebP = identical pixels to a resized PNG (no chroma subsampling,
 * no blocking), ~3x smaller than the master. Quality is verified per file by
 * decoding the WebP and comparing it byte-for-byte to the resized reference.
 *
 * Run: npm run optimize:mascots
 */
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "public/mascots");
const thumbsDir = join(dir, "thumbs");
mkdirSync(thumbsDir, { recursive: true });

/**
 * Longest-edge caps = 2x the largest CSS box each asset is displayed in.
 *   hero (parent)            475px tall  → 1000
 *   product heroes / corp    420px tall  → 1000
 *   home cards               ≤400px      → 800
 *   family                   720px wide  → 1440
 */
const HOME_CARD = new Set(["stays", "go", "pay", "fresh", "market", "jobs"]);
const ROADMAP = /roadmap$/;
const THUMB = 128;

function capFor(name) {
  if (name === "family") return { width: 1440 };
  if (HOME_CARD.has(name)) return { width: 800, height: 800 };
  return { width: 1000, height: 1000 };
}

const resizeOpts = {
  fit: "inside",
  withoutEnlargement: true,
  kernel: "lanczos3",
};

const webpOpts = { lossless: true, effort: 6 };

async function assertIdentical(webpBuffer, referencePng, label) {
  const [a, b] = await Promise.all([
    sharp(webpBuffer).ensureAlpha().raw().toBuffer(),
    sharp(referencePng).ensureAlpha().raw().toBuffer(),
  ]);
  if (a.length !== b.length) {
    throw new Error(`${label}: WebP dimensions differ from the resized PNG`);
  }
  // Alpha must match everywhere; RGB must match wherever the pixel is visible.
  // (Lossless WebP zeroes RGB under alpha=0 — invisible, so it's ignored.)
  for (let i = 0; i < a.length; i += 4) {
    if (a[i + 3] !== b[i + 3]) {
      throw new Error(`${label}: alpha channel differs from the resized PNG`);
    }
    if (a[i + 3] !== 0 && (a[i] !== b[i] || a[i + 1] !== b[i + 1] || a[i + 2] !== b[i + 2])) {
      throw new Error(`${label}: visible pixels differ from the resized PNG`);
    }
  }
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
let masterTotal = 0;
let deliveryTotal = 0;

const masters = readdirSync(dir)
  .filter((f) => extname(f) === ".png")
  .sort();

for (const file of masters) {
  const name = basename(file, ".png");
  const src = join(dir, file);
  masterTotal += statSync(src).size;

  const base = sharp(src).resize({ ...capFor(name), ...resizeOpts });
  const reference = await base.clone().png().toBuffer();
  const webp = await base.clone().webp(webpOpts).toBuffer({ resolveWithObject: true });
  await assertIdentical(webp.data, reference, name);
  // Write the verified bytes as-is (sharp(...).toFile would re-encode lossy).
  writeFileSync(join(dir, `${name}.webp`), webp.data);
  deliveryTotal += webp.data.length;
  console.log(
    `${name.padEnd(20)} ${String(webp.info.width + "x" + webp.info.height).padEnd(10)} ${kb(statSync(src).size).padStart(7)} → ${kb(webp.data.length).padStart(6)}`,
  );

  if (ROADMAP.test(name)) {
    const thumbBase = sharp(src).resize({ width: THUMB, height: THUMB, ...resizeOpts });
    const thumbRef = await thumbBase.clone().png().toBuffer();
    const thumb = await thumbBase.clone().webp(webpOpts).toBuffer();
    await assertIdentical(thumb, thumbRef, `${name} thumb`);
    writeFileSync(join(thumbsDir, `${name}.webp`), thumb);
    console.log(`${"  └ thumb".padEnd(20)} ${String(THUMB).padEnd(10)} ${"".padStart(7)}   ${kb(thumb.length).padStart(6)}`);
  }
}

console.log(`\nmasters ${kb(masterTotal)} → delivery ${kb(deliveryTotal)} (lossless, pixel-identical at display size)`);
