import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "public/og/default.png");
const logoPath = join(root, "public/brand/nexa.webp");

mkdirSync(dirname(outPath), { recursive: true });

const width = 1200;
const height = 630;

const logo = await sharp(logoPath)
  .resize({ width: 160, height: 160, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5f9fc"/>
      <stop offset="55%" stop-color="#e8f1fa"/>
      <stop offset="100%" stop-color="#d7e7f6"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="220" fill="#2368b7" fill-opacity="0.08"/>
  <circle cx="180" cy="540" r="180" fill="#2368b7" fill-opacity="0.06"/>
  <text x="96" y="360" font-family="Manrope, Arial, sans-serif" font-size="64" font-weight="600" fill="#1c242b" letter-spacing="-1.5">Nexa</text>
  <text x="96" y="430" font-family="DM Sans, Arial, sans-serif" font-size="34" fill="#3a4a57">One ecosystem for everyday life.</text>
  <text x="96" y="490" font-family="DM Sans, Arial, sans-serif" font-size="22" fill="#63717d">Built in Morocco. Starting with Nexa Stays.</text>
  <text x="96" y="560" font-family="DM Sans, Arial, sans-serif" font-size="20" fill="#2368b7">nexa.ma</text>
</svg>`);

await sharp(svg)
  .composite([{ input: logo, left: 96, top: 120 }])
  .png()
  .toFile(outPath);

console.log(`Wrote ${outPath}`);
