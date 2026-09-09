/**
 * Favicons from public/brand/nexa.png — same pipeline as nexastays_web
 * (scripts/generate-pwa-icons.ts): knock dark plate to alpha, then render the
 * mark on a transparent canvas with ~8% padding.
 *
 * Versioned outputs (Chrome favicon-cache bust, Stays pattern):
 *   public/icons/favicon-{16,32,48}.v1.png
 *   public/icons/apple-touch-180.v1.png
 *   public/icons/icon-{192,512}.v1.png
 *
 * Also writes root fallbacks used by some crawlers:
 *   public/favicon.ico, public/icon-48.png, public/icon.png, …
 *
 * Keep ICON_VERSION in sync with lib/site-icons.ts → SITE_ICON_VERSION.
 * Run: npm run favicons
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(root, "public/brand/nexa.png");
const iconsDir = join(root, "public/icons");
const out = (f) => join(root, "public", f);
const iconOut = (f) => join(iconsDir, f);

/** Keep in sync with lib/site-icons.ts → SITE_ICON_VERSION */
const ICON_VERSION = "v1";
const FAVICON_PADDING = 0.08;
const BLACK_LUMA_THRESHOLD = 28;

mkdirSync(iconsDir, { recursive: true });

async function knockoutBlackToAlpha(sourceBuf) {
  const { data, info } = await sharp(sourceBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  for (let i = 0; i < pixels.length; i += 4) {
    const luma = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
    if (luma <= BLACK_LUMA_THRESHOLD) pixels[i + 3] = 0;
  }

  return sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function renderTransparent(markBuf, size, padding = FAVICON_PADDING) {
  const inner = Math.max(1, Math.round(size * (1 - 2 * padding)));
  const logo = await sharp(markBuf)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: "lanczos3",
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

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

const source = await sharp(SOURCE).png().toBuffer();
const mark = await knockoutBlackToAlpha(source);

const pngs = {};
for (const size of [16, 32, 48, 180, 192, 512]) {
  pngs[size] = await renderTransparent(mark, size);
}

writeFileSync(iconOut(`favicon-16.${ICON_VERSION}.png`), pngs[16]);
writeFileSync(iconOut(`favicon-32.${ICON_VERSION}.png`), pngs[32]);
writeFileSync(iconOut(`favicon-48.${ICON_VERSION}.png`), pngs[48]);
writeFileSync(iconOut(`apple-touch-180.${ICON_VERSION}.png`), pngs[180]);
writeFileSync(iconOut(`icon-192.${ICON_VERSION}.png`), pngs[192]);
writeFileSync(iconOut(`icon-512.${ICON_VERSION}.png`), pngs[512]);

// Root fallbacks (crawlers / legacy)
writeFileSync(out("icon.png"), pngs[32]);
writeFileSync(out("icon-48.png"), pngs[48]);
writeFileSync(out("icon-192.png"), pngs[192]);
writeFileSync(out("icon-512.png"), pngs[512]);
writeFileSync(out("apple-icon.png"), pngs[180]);
writeFileSync(
  out("favicon.ico"),
  ico([
    [16, pngs[16]],
    [32, pngs[32]],
    [48, pngs[48]],
  ]),
);

console.log(
  `wrote public/icons/*.${ICON_VERSION}.png + root favicon.ico/icon-*.png (Stays-style transparent mark)`,
);
