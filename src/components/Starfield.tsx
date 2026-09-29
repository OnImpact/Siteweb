import { useEffect, useRef } from "react";
import stars from "@/assets/starfield.png";
import { HERO_ANIM_VH } from "@/components/AsteroidScroll";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

export function Starfield() {
  const layerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const hero = document.querySelector("[data-hero-scroll]");
        const img = imgRef.current;
        const layer = layerRef.current;
        if (!img || !layer) return;
        let t = 0;
        if (hero instanceof HTMLElement) {
          const animSpan = window.innerHeight * HERO_ANIM_VH;
          t = clamp((window.scrollY - hero.offsetTop) / Math.max(animSpan, 1));
        }
        const fadeOut = clamp((t - 0.65) / 0.2);
        const fadeIn = clamp((t - 0.88) / 0.12);
        img.style.transform = `translate(-50%, -50%) scale(${1 + t * 1.7 - fadeIn * 1.05})`;
        layer.style.opacity = String(1 - fadeOut * (1 - fadeIn));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      <img
        ref={imgRef}
        src={stars}
        alt=""
        className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] max-w-none object-cover select-none"
        style={{ transform: "translate(-50%, -50%) scale(1)" }}
        draggable={false}
      />
    </div>
  );
}
