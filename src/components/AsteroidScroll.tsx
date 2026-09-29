import { useEffect, useRef, useState } from "react";
import f1 from "@/assets/asteroid/asteroid-1.png";
import f2 from "@/assets/asteroid/asteroid-2.png";
import f3 from "@/assets/asteroid/asteroid-3.png";
import f4 from "@/assets/asteroid/asteroid-4.png";
import f5 from "@/assets/asteroid/asteroid-5.png";
import f6 from "@/assets/asteroid/asteroid-6.png";
import f7 from "@/assets/asteroid/asteroid-7.png";
import f8 from "@/assets/asteroid/asteroid-8.png";
import f9 from "@/assets/asteroid/asteroid-9.png";
import f10 from "@/assets/asteroid/asteroid-10.png";
import heroTitle from "@/assets/creer-votre-impact.png";
import { ServicesReveal } from "@/components/ServicesReveal";

const FRAMES = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
const BLUR_FROM = FRAMES.length - 4;
export const HERO_ANIM_VH = 3.2;

const clamp = (v: number) => Math.min(1, Math.max(0, v));

function frameBlur(index: number) {
  if (index < BLUR_FROM) return 0;
  return 2 + (index - BLUR_FROM) * 2;
}

export function AsteroidScroll({
  page,
  onPageChange,
  locked = false,
}: {
  page: 0 | 1;
  onPageChange: (page: 0 | 1, source: "auto" | "manual") => void;
  locked?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    // preload all frames so the sequence never flickers
    FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = sectionRef.current;
        if (!el) return;
        const animSpan = window.innerHeight * HERO_ANIM_VH;
        const raw = window.scrollY - el.offsetTop;
        setP(clamp(raw / Math.max(animSpan, 1)));
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

  // phases
  const explosion = clamp(p / 0.7); // frame sequence 1 -> 10
  const vanish = clamp((p - 0.58) / 0.16); // debris + glow leave the screen
  const reveal = clamp((p - 0.5) / 0.34);
  const debrisOpacity = 1 - vanish;
  const framePos = explosion * (FRAMES.length - 1); // continuous position 0 -> 9
  const tension = clamp(p / 0.15); // early tremble
  const shake = tension * (1 - clamp((p - 0.15) / 0.2)) * 5;
  // fragments grow bigger and bigger as the explosion progresses
  const growth = 1 + explosion * explosion * 0.9;
  // from frame 6 (index 5) onwards, the debris starts overflowing the screen
  const overflowStart = 5;
  const overflowBump =
    framePos <= overflowStart ? 0 : Math.min((framePos - overflowStart) / 1.5, 1) * 0.5;
  const titleDrop = clamp(p / 0.4);
  const asteroidDrop = clamp(p / 0.2);

  return (
    <div
      ref={sectionRef}
      data-hero-scroll
      className="relative"
      style={{ height: `calc(${HERO_ANIM_VH + 1} * 100dvh)` }}
    >
      <div className="sticky top-0 flex h-dvh items-center justify-center overflow-hidden [container-type:size]">
        <div className="intro-rise-soft intro-delay-2 pointer-events-none absolute inset-0">
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ transform: `translateY(${-11 + asteroidDrop * 5}vh)` }}
          >
        {/* orbit rings */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: "78cqmin",
            height: "78cqmin",
            transform: `scale(${1 + explosion * 0.6}) rotate(${p * 60}deg)`,
            opacity: 1 - explosion,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid oklch(1 0 0 / 14%)" }}
          />
          <div className="orbit-spin-cw absolute inset-0">
            <div className="orbit-arc absolute inset-0" />
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: "115cqmin",
            height: "115cqmin",
            transform: `scale(${1 + explosion * 0.9})`,
            opacity: 1 - explosion,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid oklch(1 0 0 / 9%)" }}
          />
          <div className="orbit-spin-ccw absolute inset-0">
            <div className="orbit-arc absolute inset-0 opacity-70" />
          </div>
        </div>

        <div className="asteroid-cloud-x pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="asteroid-cloud-y flex h-full w-full items-center justify-center">
          {/* glow behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute h-[70cqmin] w-[70cqmin] rounded-full blur-3xl"
            style={{
              background: "var(--primary)",
              opacity: (0.12 + explosion * 0.3) * Math.pow(debrisOpacity, 1.6),
              transform: `scale(${1 + explosion * 1.6 + vanish * 0.8})`,
            }}
          />

          {/* asteroid frame sequence */}
          <div
            className="relative h-[min(80cqmin,86%)] w-[min(80cqmin,86%)]"
            style={{
              transform: `translate(${Math.sin(p * 140) * shake}px, ${Math.cos(p * 190) * shake}px) scale(${(growth + overflowBump) * (1 + vanish * 0.35)})`,
              opacity: debrisOpacity,
              visibility: debrisOpacity === 0 ? "hidden" : "visible",
            }}
          >
            {FRAMES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === 0 ? "Astéroïde" : ""}
                className="absolute inset-0 h-full w-full object-contain"
                style={{
                  opacity: clamp(1 - Math.abs(i - framePos) * 1.6),
                  ...(frameBlur(i) > 0
                    ? { filter: `blur(${frameBlur(i) * (1 - vanish)}px)` }
                    : {}),
                }}
                draggable={false}
              />
            ))}
            {/* core flash at the moment of impact */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--primary-glow) 0%, var(--primary) 35%, transparent 70%)",
                opacity: Math.max(0, Math.sin(explosion * Math.PI)) * 0.5 * debrisOpacity,
                transform: `scale(${0.3 + explosion * 1.4})`,
                filter: "blur(18px)",
              }}
            />
          </div>
          </div>
        </div>
        </div>
        </div>

        {/* hero title before the break */}
        <div className="intro-rise-soft intro-delay-3 pointer-events-none absolute bottom-1 left-0 right-0 px-2 text-center">
          <div
            style={{
              opacity: 1 - titleDrop * 0.9,
              transform: `translateY(${titleDrop * 42}vh)`,
            }}
          >
            <h1 className="mx-auto w-[min(94cqw,92rem)]">
              <img
                src={heroTitle}
                alt="Créer votre impact"
                className="h-auto w-full select-none"
                draggable={false}
              />
            </h1>
          </div>
        </div>

        <ServicesReveal
          reveal={reveal}
          page={page}
          onPageChange={onPageChange}
          paused={locked || p >= 0.98}
        />
      </div>
    </div>
  );
}
