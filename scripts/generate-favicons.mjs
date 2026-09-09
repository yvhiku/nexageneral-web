/**
 * Favicons from the parent brand mark (public/brand/nexa.png).
 *
 * The blue mark sits on a light rounded tile so it reads as a clear square at
 * 16–48px — Google Search only shows custom favicons that are recognisable at
 * that size, and rejects sparse/transparent marks in favour of the globe icon.
 *
 * Outputs (all in public/):
 *   icon-48.png (Google's preferred size), icon.png (32), icon-192.png,
 *   icon-512.png, apple-icon.png (180), favicon.ico (16 + 32 + 48, PNG-packed)
 *
 * Run: npm run favicons
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/brand/nexa.png");
const out = (f) => join(root, "public", f);

const TILE = "#eaf2fc"; // pale brand tint — readable in light and dark UIs
const MARK_RATIO = 0.74; // mark occupies 74% of the tile
const RADIUS_RATIO = 0.22;

/** Trimmed mark, once, at high resolution. */
const mark = await sharp(src).trim({ threshold: 10 }).png().toBuffer();

async function tile(size) {
  const r = Math.round(size * RADIUS_RATIO);
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="${TILE}"/></svg>`,
  );
  const inner = Math.round(size * MARK_RATIO);
  const m = await sharp(mark)
    .resize({ width: inner, height: inner, fit: "inside", kernel: "lanczos3" })
    .toBuffer({ resolveWithObject: true });
  return sharp(bg)
    .composite([
      {
        input: m.data,
        left: Math.round((size - m.info.width) / 2),
        top: Math.round((size - m.info.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const pngs = {};
for (const size of [16, 32, 48, 180, 192, 512]) pngs[size] = await tile(size);

writeFileSync(out("icon.png"), pngs[32]);
writeFileSync(out("icon-48.png"), pngs[48]);
writeFileSync(out("icon-192.png"), pngs[192]);
writeFileSync(out("icon-512.png"), pngs[512]);
writeFileSync(out("apple-icon.png"), pngs[180]);

/** ICO container with PNG-encoded entries (supported by every modern browser). */
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = header.length + dir.length;
  entries.forEach(([size, data], i) => {
    const o = i * 16;
    dir.writeUInt8(size === 256 ? 0 : size, o);
    dir.writeUInt8(size === 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += data.length;
  });
  return Buffer.concat([header, dir, ...entries.map(([, d]) => d)]);
}

writeFileSync(
  out("favicon.ico"),
  ico([
    [16, pngs[16]],
    [32, pngs[32]],
    [48, pngs[48]],
  ]),
);

console.log("wrote icon.png, icon-48.png, icon-192.png, icon-512.png, apple-icon.png, favicon.ico");
