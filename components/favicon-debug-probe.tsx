"use client";

import { useEffect } from "react";

/** Temporary debug probe — favicon / brand logo hypotheses. */
export function FaviconDebugProbe() {
  useEffect(() => {
    // #region agent log
    const log = (hypothesisId: string, message: string, data: Record<string, unknown>) => {
      fetch("http://127.0.0.1:7805/ingest/315090d2-bb21-4782-b5a6-812a11cf32fe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "f6e6e4",
        },
        body: JSON.stringify({
          sessionId: "f6e6e4",
          runId: "favicon-post",
          hypothesisId,
          location: "components/favicon-debug-probe.tsx",
          message,
          data,
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    };

    const iconLinks = Array.from(
      document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]'),
    ).map((el) => ({
      rel: el.getAttribute("rel"),
      href: el.getAttribute("href"),
      sizes: el.getAttribute("sizes"),
      type: el.getAttribute("type"),
    }));

    const brandImgs = Array.from(
      document.querySelectorAll("img.brand-icon, .wordmark img, header img"),
    ).map((el) => ({
      src: (el as HTMLImageElement).currentSrc || (el as HTMLImageElement).src,
      className: el.className,
      w: (el as HTMLImageElement).naturalWidth,
      h: (el as HTMLImageElement).naturalHeight,
    }));

    log("A", "header brand image sources", {
      brandImgs,
      usesBlack: brandImgs.some((b) => /black/i.test(b.src)),
      usesNexaColor: brandImgs.some((b) => /\/brand\/nexa\./i.test(b.src)),
    });

    log("B", "document icon link tags", {
      href: location.href,
      iconLinks,
    });

    const probe = async (path: string, hypothesisId: string) => {
      try {
        const res = await fetch(path, { cache: "no-store" });
        const buf = await res.arrayBuffer();
        const bytes = new Uint8Array(buf);
        const isPng =
          bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
        const isIco = bytes[0] === 0x00 && bytes[1] === 0x00 && bytes[2] === 0x01;
        // Sample a mid-file byte pattern isn't a pixel; for PNG decode via bitmap
        let center: number[] | null = null;
        if (isPng && typeof createImageBitmap === "function") {
          const bmp = await createImageBitmap(new Blob([buf], { type: "image/png" }));
          const canvas = document.createElement("canvas");
          canvas.width = bmp.width;
          canvas.height = bmp.height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(bmp, 0, 0);
            const px = ctx.getImageData(
              Math.floor(bmp.width / 2),
              Math.floor(bmp.height / 2),
              1,
              1,
            ).data;
            center = [px[0], px[1], px[2], px[3]];
          }
          bmp.close();
        }
        log(hypothesisId, `fetched ${path}`, {
          status: res.status,
          contentType: res.headers.get("content-type"),
          bytes: buf.byteLength,
          isPng,
          isIco,
          centerRGBA: center,
          looksLikeBlueStar:
            center !== null && center[2] > 150 && center[0] < 120 && center[3] > 200
              ? false
              : center !== null && center[0] > 200 && center[1] > 180 && center[2] < 220
                ? "warm-core"
                : center,
        });
      } catch (e) {
        log(hypothesisId, `fetch failed ${path}`, {
          error: e instanceof Error ? e.message : String(e),
        });
      }
    };

    void probe("/icons/favicon-48.v1.png", "C");
    void probe("/icon-48.png", "C");
    void probe("/favicon.ico", "C");
    void probe("/brand/black.webp", "A");
    void probe("/brand/nexa.webp", "A");
    log("B", "post-fix icon path check", {
      expectedVersioned: "/icons/favicon-48.v1.png",
      hasVersionedLink: iconLinks.some((l) =>
        (l.href || "").includes("/icons/favicon-48.v1.png"),
      ),
      stillOnlyLegacy: iconLinks.every(
        (l) => !(l.href || "").includes("/icons/"),
      ),
    });
    // #endregion
  }, []);

  return null;
}
