/**
 * Corporate default link-preview image.
 *
 *   public/og/default.png  → master artwork (1536×1024, never served)
 *   public/og/default.jpg  → what `DEFAULT_OG_IMAGE` in lib/seo.ts points at
 *                            (1200×800, JPEG q88, 4:4:4 — crawlers such as
 *                            WhatsApp/LinkedIn reject multi-MB previews)
 *
 * Run: npm run og
 */
import { statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const master = join(root, "public/og/default.png");
const out = join(root, "public/og/default.jpg");

const WIDTH = 1200;

const info = await sharp(master)
  .resize({ width: WIDTH, kernel: "lanczos3", withoutEnlargement: true })
  .flatten({ background: "#ffffff" })
  .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(out);

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
console.log(
  `wrote ${out} ${info.width}x${info.height} ${kb(info.size)} (master ${kb(statSync(master).size)})`,
);
