"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/lib/products";
import { Brand, Status, Arrow } from "./brand";
import { detectLocale, localePath, translateStatus } from "@/lib/i18n";
const colors = [
  "#e8507a",
  "#eab126",
  "#3856bb",
  "#67a65a",
  "#954bce",
  "#999999",
  "#507b84",
  "#71839c",
];
export function Ecosystem() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const [selected, setSelected] = useState(0);
  const host = useRef<HTMLDivElement>(null);
  const active = useRef(0);
  useEffect(() => {
    active.current = selected;
  }, [selected]);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopped = false;
    let dispose: (() => void) | undefined;
    let start: (() => void) | undefined;
    let pause: (() => void) | undefined;
    let loading = false;
    let inView = false;
    async function init() {
      if (loading || motion.matches || stopped) return;
      loading = true;
      try {
        const T = await import("three");
        if (stopped || motion.matches) {
          loading = false;
          return;
        }
        const renderer = new T.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
        renderer.setClearColor(0, 0);
        renderer.domElement.setAttribute("aria-hidden", "true");
        el!.appendChild(renderer.domElement);
        const scene = new T.Scene();
        const camera = new T.OrthographicCamera(0, 1000, 0, 500, -10, 10);
        camera.position.z = 2;
        const curves = products.map((_, i) => {
          const x = i < 4 ? 150 : 850;
          const y = 57 + (i % 4) * 128;
          return new T.CubicBezierCurve3(
            new T.Vector3(500, 250, 0),
            new T.Vector3(i < 4 ? 350 : 650, 250, 0),
            new T.Vector3(i < 4 ? 350 : 650, y, 0),
            new T.Vector3(x, y, 0),
          );
        });
        const lines = curves.map((curve, i) => {
          const geometry = new T.BufferGeometry().setFromPoints(
            curve.getPoints(60),
          );
          const material = new T.LineBasicMaterial({
            color: colors[i],
            transparent: true,
            opacity: 0.18,
          });
          const line = new T.Line(geometry, material);
          scene.add(line);
          return line;
        });
        const dots = curves.map((_, i) => {
          const mesh = new T.Mesh(
            new T.CircleGeometry(3, 12),
            new T.MeshBasicMaterial({ color: colors[i], transparent: true }),
          );
          scene.add(mesh);
          return mesh;
        });
        const resize = () => {
          renderer.setSize(el!.clientWidth, el!.clientHeight);
        };
        const ro = new ResizeObserver(resize);
        ro.observe(el!);
        resize();
        const render = (time: number) => {
          curves.forEach((c, i) => {
            lines[i].material.opacity = i === active.current ? 0.8 : 0.15;
            dots[i].visible = i === active.current;
            dots[i].position.copy(c.getPoint((time * 0.00016 + i * 0.1) % 1));
          });
          renderer.render(scene, camera);
        };
        start = () => {
          if (!motion.matches && !document.hidden && inView)
            renderer.setAnimationLoop(render);
        };
        pause = () => renderer.setAnimationLoop(null);
        dispose = () => {
          ro.disconnect();
          renderer.setAnimationLoop(null);
          lines.forEach((l) => {
            l.geometry.dispose();
            l.material.dispose();
          });
          dots.forEach((d) => {
            d.geometry.dispose();
            d.material.dispose();
          });
          renderer.dispose();
          renderer.domElement.remove();
          el!.classList.remove("has-webgl");
        };
        el!.classList.add("has-webgl");
        start();
      } catch {
        /* The HTML and SVG diagram remain fully usable without WebGL. */
      }
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          if (!loading) void init();
          start?.();
        } else pause?.();
      },
      { rootMargin: "100px" },
    );
    io.observe(el);
    const visibility = () => (document.hidden ? pause?.() : start?.());
    document.addEventListener("visibilitychange", visibility);
    const change = () => {
      if (motion.matches) {
        pause?.();
        dispose?.();
        dispose = undefined;
        start = undefined;
        pause = undefined;
        loading = false;
      } else if (inView) void init();
    };
    motion.addEventListener("change", change);
    return () => {
      stopped = true;
      io.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", change);
      dispose?.();
    };
  }, []);
  const p = products[selected];
  return (
    <div className="ecosystem-widget">
      <div className="network">
        <div className="network-canvas" ref={host}>
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {products.map((_, i) => (
              <path
                key={i}
                d={`M500 250 C${i < 4 ? 350 : 650} 250 ${i < 4 ? 350 : 650} ${57 + (i % 4) * 128} ${i < 4 ? 150 : 850} ${57 + (i % 4) * 128}`}
                fill="none"
                stroke={colors[i]}
                opacity={selected === i ? 0.8 : 0.25}
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>
        <div className="network-parent">
          <Brand size={72} />
          <span>nexa</span>
        </div>
        {products.map((product, i) => (
          <button
            type="button"
            key={product.slug}
            className={`network-node ${selected === i ? "selected" : ""}`}
            style={{
              left: i < 4 ? "15%" : "85%",
              top: `${(57 + (i % 4) * 128) / 5}%`,
            }}
            onMouseEnter={() => setSelected(i)}
            onFocus={() => setSelected(i)}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            aria-controls="network-detail"
          >
            <Brand product={product.logo ?? product.slug} size={36} />
            <span>{product.name}</span>
          </button>
        ))}
      </div>
      <div className="network-detail" id="network-detail" aria-live="polite">
        <div>
          <span className="eyebrow">{p.category}</span>
          <h3>{p.short}</h3>
        </div>
        <Status status={translateStatus(locale, p.status)} />
        <Link
          href={localePath(locale, `/${p.slug}`)}
          aria-label={`Explore ${p.name}`}
          className="circle-link"
        >
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
