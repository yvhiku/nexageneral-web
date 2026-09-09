/**
 * Versioned favicon paths — same pattern as nexastays_web/lib/pwa-assets.ts.
 * Browsers (especially Chrome) cache favicons by URL in a separate DB; a path
 * bump is required when the mark changes or an old letter-N tile is stuck.
 * Bump SITE_ICON_VERSION together with ICON_VERSION in scripts/generate-favicons.mjs,
 * then run `npm run favicons`.
 */
export const SITE_ICON_VERSION = "v1";

/** Root fallback for clients that always request /favicon.ico */
export const SITE_FAVICON_ICO = "/favicon.ico" as const;

export const SITE_ICONS = {
  favicon16: `/icons/favicon-16.${SITE_ICON_VERSION}.png`,
  favicon32: `/icons/favicon-32.${SITE_ICON_VERSION}.png`,
  favicon48: `/icons/favicon-48.${SITE_ICON_VERSION}.png`,
  apple: `/icons/apple-touch-180.${SITE_ICON_VERSION}.png`,
  icon192: `/icons/icon-192.${SITE_ICON_VERSION}.png`,
  icon512: `/icons/icon-512.${SITE_ICON_VERSION}.png`,
} as const;
