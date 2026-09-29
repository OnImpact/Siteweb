import { useEffect, useState } from "react";
import titreFormations from "@/assets/services/titre-formations.png";
import titreCreation from "@/assets/services/titre-creation-web.png";
import solFormation from "@/assets/services/sol-formation.png";
import solCreation from "@/assets/services/sol-creation-web.png";
import fusee from "@/assets/services/fusee.png";
import satellite from "@/assets/services/satellite.png";
import planeteGpt from "@/assets/services/planete-chatgpt.png";
import planeteClaude from "@/assets/services/planete-claude.png";

type ServicesRevealProps = {
  reveal: number;
  page: 0 | 1;
  onPageChange: (page: 0 | 1, source: "auto" | "manual") => void;
  paused?: boolean;
};

const SLIDE_MS = 10000;
const GAP_MS = 1000;

function Chevrons({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 28 18"
      className="h-[0.7em] w-[1.15em] shrink-0"
      aria-hidden
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M3 3 L11 9 L3 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 3 L21 9 L13 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesReveal({
  reveal,
  page,
  onPageChange,
  paused = false,
}: ServicesRevealProps) {
  const [fill, setFill] = useState(0);
  const [manual, setManual] = useState(false);
  const active = reveal >= 0.88;

  const goTo = (next: 0 | 1) => {
    setManual(true);
    setFill(1);
    onPageChange(next, "manual");
  };

  useEffect(() => {
    if (paused) setFill(1);
  }, [paused, page]);

  useEffect(() => {
    if (!active) {
      setFill(0);
      return;
    }
    if (manual || paused) return;

    let raf = 0;
    let start = performance.now();
    let current: 0 | 1 = page;
    let phase: "fill" | "gap" = "fill";
    const tick = (now: number) => {
      if (phase === "fill") {
        const t = Math.min(1, (now - start) / SLIDE_MS);
        setFill(t);
        if (t >= 1) {
          phase = "gap";
          start = now;
          setFill(1);
        }
      } else if (now - start >= GAP_MS) {
        current = current === 0 ? 1 : 0;
        onPageChange(current, "auto");
        setFill(0);
        phase = "fill";
        start = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, manual, paused, onPageChange, page]);

  const form = page === 0 ? 1 : 0;
  const web = page === 1 ? 1 : 0;
  const fill1 = manual ? (page === 0 ? 1 : 0) : page === 0 ? fill : 1;
  const fill2 = manual ? (page === 1 ? 1 : 0) : page === 1 ? fill : 0;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [container-type:size]"
      style={{ opacity: reveal }}
    >
      <div
        className="service-float-a absolute right-[0.4cqw] top-[22cqh] z-[1] hidden w-[clamp(1.2rem,7.5cqmin,4.8rem)] transition-opacity duration-700 md:block"
        style={{ opacity: form }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgb(255 120 35 / 80%) 0%, rgb(255 80 12 / 40%) 42%, transparent 72%)",
          }}
        />
        <img
          src={planeteClaude}
          alt=""
          className="relative z-[1] h-auto w-full select-none"
          draggable={false}
        />
      </div>
      <div
        className="service-float-b absolute right-[2.2cqw] top-[28cqh] z-[1] hidden w-[clamp(3.2rem,18cqmin,11.5rem)] transition-opacity duration-700 md:block"
        style={{ opacity: form }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[165%] w-[165%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(20 230 170 / 75%) 0%, rgb(10 180 150 / 38%) 42%, transparent 72%)",
          }}
        />
        <img
          src={planeteGpt}
          alt=""
          className="relative z-[1] h-auto w-full select-none"
          draggable={false}
        />
      </div>

      <div className="absolute left-1/2 top-[clamp(6.4rem,22cqh,26cqh)] z-[1] w-[min(90cqw,76rem)] -translate-x-1/2 text-center md:top-[clamp(5.2rem,21cqh,24cqh)] md:w-[min(86cqw,74rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[70%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary-glow) 70%, transparent) 0%, color-mix(in oklab, var(--primary) 45%, transparent) 38%, transparent 72%)",
          }}
        />
        <p className="relative z-[1] mb-[clamp(0.45rem,1.5cqh,1.2rem)] text-[clamp(0.7rem,1.35cqw,0.95rem)] uppercase tracking-[0.58em] text-white/90">
          Nos services
        </p>
        <div className="relative z-[1] mx-auto w-full">
          <img
            src={titreFormations}
            alt=""
            aria-hidden
            className="h-auto w-full opacity-0"
            draggable={false}
          />
          <img
            src={titreFormations}
            alt="Formations"
            className="absolute inset-0 h-full w-full object-contain object-center select-none transition-opacity duration-700"
            style={{ opacity: form }}
            draggable={false}
          />
          <img
            src={titreCreation}
            alt="Création web"
            className="absolute inset-0 h-full w-full origin-center -translate-y-[2%] scale-[1.18] object-contain object-center select-none transition-opacity duration-700"
            style={{ opacity: web }}
            draggable={false}
          />
        </div>
      </div>

      <div className="hill-soft-edge absolute inset-x-0 bottom-0 z-[2] h-[min(72cqh,calc(100%-8.5rem))] min-h-[54%] translate-y-[2.5cqh]">
        <img
          src={solFormation}
          alt=""
          className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-[center_42%] select-none transition-opacity duration-700"
          style={{ opacity: form }}
          draggable={false}
        />
        <img
          src={solFormation}
          alt=""
          aria-hidden
          className="hill-rim-blur absolute inset-x-0 bottom-0 h-full w-full object-cover object-[center_42%] select-none transition-opacity duration-700"
          style={{ opacity: form }}
          draggable={false}
        />
        <img
          src={solCreation}
          alt=""
          className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-[center_42%] select-none transition-opacity duration-700"
          style={{ opacity: web }}
          draggable={false}
        />
        <img
          src={solCreation}
          alt=""
          aria-hidden
          className="hill-rim-blur absolute inset-x-0 bottom-0 h-full w-full object-cover object-[center_42%] select-none transition-opacity duration-700"
          style={{ opacity: web }}
          draggable={false}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black via-black/45 to-transparent"
        />
      </div>

      <div
        className="service-float-c absolute left-[clamp(0.7rem,3.6cqw,3.2rem)] top-[clamp(2.4rem,8cqh,11cqh)] z-[3] w-[clamp(4rem,22cqmin,17.5rem)] transition-opacity duration-700"
        style={{ opacity: form }}
      >
        <img
          src={fusee}
          alt=""
          className="h-auto w-full -rotate-[6deg] select-none"
          draggable={false}
        />
      </div>
      <div
        className="service-float-d absolute right-[clamp(1.2rem,12cqw,52cqw)] top-[clamp(4.4rem,16cqh,30cqh)] z-[3] w-[clamp(4.2rem,23cqmin,17.5rem)] transition-opacity duration-700"
        style={{ opacity: form }}
      >
        <img
          src={satellite}
          alt=""
          className="h-auto w-full rotate[25deg] select-none"
          draggable={false}
        />
      </div>

      <div className="absolute inset-x-0 bottom-[clamp(0.7rem,4.6cqh,5.5cqh)] z-[4] flex flex-col items-center px-[clamp(0.9rem,4cqw,2rem)] text-center">
        <div className="relative w-full max-w-[min(42rem,92cqw)] min-h-[clamp(3.6rem,12cqh,6.2rem)]">
          <p
            className="text-[clamp(0.72rem,1.55cqw,1.05rem)] leading-snug text-white transition-opacity duration-700"
            style={{ opacity: form }}
          >
            Formez vos équipes à l’
            <span className="font-bold">
              IA
            </span>
            , à la{" "}
            <span className="font-bold">
              Bureautique
            </span>{" "}
            et au{" "}
            <span className="font-bold">
              Graphisme
            </span>
            <br className="hidden sm:inline" />{" "}
            avec des programmes sur mesure, pensés pour les TPE/PME.
            <br />
            Des compétences Immédiatement applicables au quotidien.
          </p>
          <p
            className="absolute inset-0 text-[clamp(0.72rem,1.55cqw,1.05rem)] leading-snug text-white transition-opacity duration-700"
            style={{ opacity: web }}
          >
            Des sites rapides, sur mesure, pensés pour convertir dès la première
            seconde.
            <br />
            Une présence web claire, conçue pour les TPE/PME.
            <br />
            Un impact visible, immédiatement.
          </p>
        </div>

        <div className="mt-[clamp(0.9rem,2.8cqh,2rem)] flex items-center gap-[clamp(0.5rem,1.2cqw,0.9rem)] text-[clamp(0.58rem,1.05cqw,0.72rem)] tracking-[0.38em] text-white/65">
          <button
            type="button"
            className={`pointer-events-auto cursor-pointer bg-transparent p-0 tracking-[0.38em] ${page === 0 ? "text-white" : ""}`}
            aria-label="Afficher Formations"
            onClick={() => goTo(0)}
          >
            01
          </button>
          <div className="flex w-[clamp(8rem,28cqw,16rem)] items-center gap-[0.4em]">
            <button
              type="button"
              className="pointer-events-auto relative h-[0.28em] min-h-px flex-1 cursor-pointer overflow-visible rounded-full border-0 bg-white/20 p-0 after:absolute after:-inset-y-3 after:inset-x-0"
              aria-label="Afficher Formations"
              onClick={() => goTo(0)}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7eb3ff] to-[#2f6dff]"
                style={{ width: `${fill1 * 100}%` }}
              />
            </button>
            <button
              type="button"
              className="pointer-events-auto relative h-[0.28em] min-h-px flex-1 cursor-pointer overflow-visible rounded-full border-0 bg-white/20 p-0 after:absolute after:-inset-y-3 after:inset-x-0"
              aria-label="Afficher Création web"
              onClick={() => goTo(1)}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7eb3ff] to-[#2f6dff]"
                style={{ width: `${fill2 * 100}%` }}
              />
            </button>
          </div>
          <button
            type="button"
            className={`pointer-events-auto cursor-pointer bg-transparent p-0 tracking-[0.38em] ${page === 1 ? "text-white" : ""}`}
            aria-label="Afficher Création web"
            onClick={() => goTo(1)}
          >
            02
          </button>
        </div>

        <p
          className="mt-[clamp(0.85rem,2.6cqh,2rem)] flex items-center gap-[0.55em] font-display text-[clamp(0.7rem,1.5cqw,1rem)] uppercase tracking-[0.32em] text-white"
          style={{ transform: "skewX(-10deg)" }}
        >
          <Chevrons />
          Glisser pour découvrir
          <Chevrons flip />
        </p>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[clamp(3.2rem,9vh,5.5rem)]"
      >
        <div className="section-seam-blur absolute inset-x-0 -bottom-3 h-[70%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/80" />
      </div>
    </div>
  );
}
