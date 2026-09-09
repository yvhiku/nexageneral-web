/**
 * Dedicated 1200×630 OG compositions from product action art + family.
 * Repositions scenes with safe margins — does not blind-crop website heroes.
 * Run: npm run og:products
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ogDir = join(root, "public/og");
const mascots = join(root, "public/mascots");

mkdirSync(ogDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

/** @type {{ slug: string; name: string; tint: string; source: string; line: string }[]} */
const products = [
  {
    slug: "stays",
    name: "Nexa Stays",
    tint: "#fff0f3",
    source: "nexastaysbanner.png",
    line: "Accommodation in Morocco",
  },
  {
    slug: "go",
    name: "Nexa Go",
    tint: "#fff6d9",
    source: "nexagoriding.png",
    line: "Rides, food & local delivery",
  },
  {
    slug: "pay",
    name: "Nexa Pay",
    tint: "#eef1fd",
    source: "nexapaybanner.png",
    line: "Payments for the Nexa ecosystem",
  },
  {
    slug: "fresh",
    name: "Nexa Fresh",
    tint: "#eef8f0",
    source: "nexafreshriding.png",
    line: "Grocery delivery in Morocco",
  },
  {
    slug: "market",
    name: "Nexa Market",
    tint: "#f4eef8",
    source: "nexamarketbanner.png",
    line: "Digital marketplace in Morocco",
  },
  {
    slug: "jobs",
    name: "Nexa Jobs",
    tint: "#f3f4f6",
    source: "nexajobsbanner.png",
    line: "Careers & recruitment in Morocco",
  },
];

function escapeXml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function composeOg({ slug, name, tint, source, line }) {
  const artPath = join(mascots, source);
  const artH = Math.round(HEIGHT * 0.88);
  const art = await sharp(artPath)
    .resize({
      height: artH,
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer({ resolveWithObject: true });

  const left = Math.max(520, WIDTH - art.info.width - 36);
  const top = Math.round((HEIGHT - art.info.height) / 2);

  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${tint}"/>
  <text x="64" y="250" font-family="Manrope, Arial, sans-serif" font-size="52" font-weight="700" fill="#1c242b" letter-spacing="-1.2">${escapeXml(name)}</text>
  <text x="64" y="310" font-family="DM Sans, Arial, sans-serif" font-size="28" fill="#3a4a57">${escapeXml(line)}</text>
  <text x="64" y="560" font-family="DM Sans, Arial, sans-serif" font-size="22" fill="#2368b7">Built in Morocco · nexa.ma</text>
</svg>`);

  const out = join(ogDir, `${slug}.png`);
  await sharp(svg)
    .composite([{ input: art.data, left, top }])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

async function composeEcosystem() {
  const art = await sharp(join(mascots, "family.png"))
    .resize({
      width: 700,
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer({ resolveWithObject: true });

  const left = WIDTH - art.info.width - 40;
  const top = Math.round((HEIGHT - art.info.height) / 2);
  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f5f9fc"/>
  <text x="64" y="250" font-family="Manrope, Arial, sans-serif" font-size="48" font-weight="700" fill="#1c242b" letter-spacing="-1.2">Nexa Ecosystem</text>
  <text x="64" y="310" font-family="DM Sans, Arial, sans-serif" font-size="26" fill="#3a4a57">Specialized by design. Connected with purpose.</text>
  <text x="64" y="560" font-family="DM Sans, Arial, sans-serif" font-size="22" fill="#2368b7">Built in Morocco · nexa.ma</text>
</svg>`);

  const out = join(ogDir, "ecosystem.png");
  await sharp(svg)
    .composite([{ input: art.data, left, top }])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

for (const p of products) await composeOg(p);
await composeEcosystem();
