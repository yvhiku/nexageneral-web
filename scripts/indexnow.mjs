/**
 * Notify IndexNow (Bing & partners) after deploy.
 * Usage: INDEXNOW_KEY=... node scripts/indexnow.mjs
 * Or reads public/indexnow-key.txt
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const keyFile = join(root, "public", "indexnow-key.txt");
const key = process.env.INDEXNOW_KEY || (existsSync(keyFile) ? readFileSync(keyFile, "utf8").trim() : "");
if (!key) {
  console.error("Missing IndexNow key (INDEXNOW_KEY or public/indexnow-key.txt)");
  process.exit(1);
}

const host = "nexa.ma";
const keyLocation = `https://${host}/${key}.txt`;
const base = `https://${host}`;

// Prefer sitemap-derived list when out/ exists after build; else core URLs
let urlList = [
  `${base}/`,
  `${base}/fr/`,
  `${base}/ar/`,
  `${base}/products/`,
  `${base}/ecosystem/`,
  `${base}/insights/`,
  `${base}/stays/`,
  `${base}/go/`,
  `${base}/pay/`,
  `${base}/fresh/`,
  `${base}/market/`,
  `${base}/jobs/`,
  `${base}/about/`,
  `${base}/why-nexa/`,
  `${base}/roadmap/`,
];

const sitemapPath = join(root, "out", "sitemap.xml");
if (existsSync(sitemapPath)) {
  const xml = readFileSync(sitemapPath, "utf8");
  const found = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (found.length) urlList = found;
}

const body = {
  host,
  key,
  keyLocation,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow ${res.status} ${res.statusText} — ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
