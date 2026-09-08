/**
 * Generate non-authoritative Markdown snapshot of NEXA_ENTITY_REGISTER.
 * Source of truth: lib/entity-register.ts (exported via lib/entity.ts).
 *
 * Usage: npm run entity-register
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { NEXA_ENTITY_REGISTER } from "../lib/entity-register.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(
  root,
  "..",
  "docs",
  "2026-09-08_nexa-entity-register.generated.md",
);

function cell(value: string | null | undefined) {
  if (value == null || value === "") return "—";
  return String(value).replace(/\|/g, "\\|");
}

const rows = NEXA_ENTITY_REGISTER.map((e) => {
  return `| ${cell(e.id)} | ${cell(e.canonicalName)} | ${cell(e.shortDescription)} | ${cell(e.officialUrl)} | ${cell(e.commercialUrl)} | ${cell(e.role)} | ${cell(e.status)} | ${cell(e.parentId)} | ${cell(e.serviceCategory)} |`;
}).join("\n");

const md = `# Nexa entity register (generated snapshot)

> **Non-authoritative snapshot.** Source of truth: \`nexageneral-web/lib/entity.ts\` (\`NEXA_ENTITY_REGISTER\`, defined in \`lib/entity-register.ts\`). If this document conflicts with code, **code wins**. Regenerate with \`npm run entity-register\`.

Do not hand-edit this table as canonical. Maps and Cloud are intentionally omitted from the core register.

| id | canonicalName | shortDescription | officialUrl | commercialUrl | role | status | parentId | serviceCategory |
|---|---|---|---|---|---|---|---|---|
${rows}

Generated: ${new Date().toISOString().slice(0, 10)}
`;

writeFileSync(outPath, md, "utf8");
console.log(`Wrote ${outPath} (${NEXA_ENTITY_REGISTER.length} entities)`);
