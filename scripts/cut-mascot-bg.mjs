import sharp from "sharp";
import { basename, join } from "node:path";

/**
 * Flood-fill near-black from image edges → transparent WebP mascot.
 * Usage: node scripts/cut-mascot-bg.mjs <input> <output.webp>
 */
const [, , input, output] = process.argv;
if (!input || !output) {
  console.error(
    "Usage: node scripts/cut-mascot-bg.mjs <input.(png|jpg)> <output.webp>",
  );
  process.exit(1);
}

function isBg(r, g, b, threshold = 28) {
  return r <= threshold && g <= threshold && b <= threshold;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const visited = new Uint8Array(width * height);
const queue = [];
const idx = (x, y) => (y * width + x) * channels;
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (visited[p]) return;
  const i = idx(x, y);
  if (!isBg(data[i], data[i + 1], data[i + 2])) return;
  visited[p] = 1;
  queue.push(x, y);
};

for (let x = 0; x < width; x++) {
  push(x, 0);
  push(x, height - 1);
}
for (let y = 0; y < height; y++) {
  push(0, y);
  push(width - 1, y);
}

while (queue.length) {
  const y = queue.pop();
  const x = queue.pop();
  data[idx(x, y) + 3] = 0;
  push(x + 1, y);
  push(x - 1, y);
  push(x, y + 1);
  push(x, y - 1);
}

for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const i = idx(x, y);
    if (data[i + 3] === 0) continue;
    if (!isBg(data[i], data[i + 1], data[i + 2], 40)) continue;
    let nearClear = false;
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      if (data[idx(x + dx, y + dy) + 3] === 0) nearClear = true;
    }
    if (nearClear) data[i + 3] = 0;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .trim({ threshold: 3 })
  .resize({
    height: 1000,
    fit: "inside",
    withoutEnlargement: false,
    kernel: sharp.kernel.lanczos3,
  })
  .webp({ quality: 100, alphaQuality: 100, effort: 6, smartSubsample: true })
  .toFile(output);

const meta = await sharp(output).metadata();
console.log(
  `Wrote ${output} (${meta.width}x${meta.height}, alpha=${meta.hasAlpha}) from ${basename(input)}`,
);
