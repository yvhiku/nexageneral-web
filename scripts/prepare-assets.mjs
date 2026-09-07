import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
const base =
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/Downloads/";
const logos = {
  nexa: "logo nexa/logo Nexa general/300ppi/nexa.png",
  black: "logo nexa/logo Nexa general/300ppi/nexa-black.png",
  white: "logo nexa/logo Nexa general/300ppi/nexa-white.png",
  stays: "logo nexa/logo Nexa stays/300ppi/nexastays.png",
  go: "logo nexa/logo Nexa go/300ppi/nexago.png",
  pay: "logo nexa/logo Nexa pay/300ppi/nexapay.png",
  fresh: "Logo Nexa Fresh /300ppi/nexafresh.png",
  market: "logo Nexa market/300ppi/nexamarket.png",
  jobs: "Nexa Jobs/300ppi/nexajobs.png",
};
await mkdir("public/brand", { recursive: true });
await mkdir("public/mascots", { recursive: true });
for (const [name, path] of Object.entries(logos)) {
  await copyFile(base + path, `public/brand/${name}.png`);
  await sharp(base + path)
    .resize(160, 160, { fit: "inside" })
    .webp({ quality: 95 })
    .toFile(`public/brand/${name}.webp`);
}
await sharp("/Users/apple/Downloads/nexaparentpose.png")
  .trim()
  .resize({ width: 900 })
  .webp({ quality: 95 })
  .toFile("public/mascots/parent.webp");
