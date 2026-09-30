import { useEffect, useRef, useState } from "react";
import illustratorIcon from "@/assets/tools/illustrator.png";
import photoshopIcon from "@/assets/tools/photoshop.png";
import canvaIcon from "@/assets/tools/canva.png";
import chatgptIcon from "@/assets/tools/chatgpt.png";
import excelIcon from "@/assets/tools/excel.png";
import geminiIcon from "@/assets/tools/gemini.png";
import claudeIcon from "@/assets/tools/claude.png";
import higgsfieldIcon from "@/assets/tools/higgsfield.png";
import meteorite from "@/assets/meteorite.png";
import constellationBg from "@/assets/fond-constellation.png";

const MARQUEE = [
  "UN PROMPT QUI SERT",
  "UN TABLEAU QUI PARLE",
  "UN VISUEL QUI CAPTE",
];

const STATS = [
  {
    percent: "70%",
    prefix: "DES",
    highlight: "TPE-PME",
    underline: "NE MAÎTRISENT PAS",
    rest: "LES OUTILS D'IA",
    lossLead: "PERDENT DU",
    lossWord: "TEMPS",
    caption: ["AVANT MÊME", "D'AVOIR COMMENCÉ"],
  },
  {
    percent: "60%",
    prefix: "DES",
    highlight: "SALARIÉS",
    underline: "NE MAÎTRISENT PAS",
    rest: "LES OUTILS BUREAUTIQUES",
    lossLead: "PERDENT DU",
    lossWord: "TEMPS",
    caption: ["AVANT MÊME DE", "FINIR LA TÂCHE"],
  },
  {
    percent: "51%",
    prefix: "DES",
    highlight: "PETITES ENTREPRISES",
    underline: "NE MAÎTRISENT PAS",
    rest: "LES OUTILS GRAPHIQUES",
    lossLead: "PERDENT DES",
    lossWord: "CLIENTS",
    caption: ["AVANT MÊME LE", "1ER CONTACT"],
  },
] as const;

const STAT_MS = 7000;

const PILLARS = [
  {
    id: "graphisme",
    label: "Formation Graphisme",
    path: ["illustrator", "photoshop", "canva", "higgsfield"],
  },
  {
    id: "ia",
    label: "Formation IA",
    path: ["claude", "chatgpt", "gemini", "higgsfield"],
  },
  {
    id: "bureautique",
    label: "Formation Bureautique",
    path: ["excel", "chatgpt", "canva", "gemini"],
  },
] as const;

type PillarId = (typeof PILLARS)[number]["id"];

const TOOL_ICONS: Record<string, string> = {
  illustrator: illustratorIcon,
  photoshop: photoshopIcon,
  canva: canvaIcon,
  chatgpt: chatgptIcon,
  excel: excelIcon,
  gemini: geminiIcon,
  claude: claudeIcon,
  higgsfield: higgsfieldIcon,
};

const TOOL_LABELS: Record<string, string> = {
  illustrator: "Illustrator",
  photoshop: "Photoshop",
  canva: "Canva",
  chatgpt: "ChatGPT",
  excel: "Excel",
  gemini: "Gemini",
  claude: "Claude",
  higgsfield: "Higgsfield",
};

const CONSTELLATION_LAYOUT = [
  { x: 16.5, y: 30 },
  { x: 38, y: 74 },
  { x: 61.5, y: 58 },
  { x: 84.5, y: 24 },
] as const;

function ToolConstellation({ tools }: { tools: readonly string[] }) {
  const points = [
    { x: -6, y: 26 },
    ...CONSTELLATION_LAYOUT,
    { x: 106, y: 16 },
  ];
  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dot.style.opacity = "0";
      return;
    }

    let raf = 0;
    const started = performance.now();
    const duration = 18000;
    const ease = (u: number) => u * u * (3 - 2 * u);
    const tick = (now: number) => {
      const length = path.getTotalLength();
      const cycle = ((now - started) / duration) % 2;
      const linear = cycle > 1 ? 2 - cycle : cycle;
      const point = path.getPointAtLength(ease(linear) * length);
      dot.style.left = `${point.x}%`;
      dot.style.top = `${point.y}%`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pathD]);

  return (
    <div className="relative h-[clamp(18rem,36vw,26rem)] w-full overflow-hidden bg-black">
      <img
        src={constellationBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <filter id="constellation-bloom" x="-40%" y="-80%" width="180%" height="260%">
            <feGaussianBlur stdDeviation="7" result="bloom" />
            <feMerge>
              <feMergeNode in="bloom" />
              <feMergeNode in="bloom" />
            </feMerge>
          </filter>
          <filter id="constellation-glow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polyline
          points={polyline}
          fill="none"
          stroke="#1c4fd0"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
          filter="url(#constellation-bloom)"
        />
        <polyline
          points={polyline}
          fill="none"
          stroke="#4b8dff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          filter="url(#constellation-bloom)"
        />
        <polyline
          points={polyline}
          fill="none"
          stroke="rgba(180, 210, 255, 0.7)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#constellation-glow)"
        />
        <polyline
          points={polyline}
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="0.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path ref={pathRef} d={pathD} fill="none" />
      </svg>

      <span ref={dotRef} className="constellation-dot" aria-hidden />

      {CONSTELLATION_LAYOUT.map((pos, i) => {
        const id = tools[i];
        if (!id) return null;
        const src = TOOL_ICONS[id];
        return (
          <div
            key={`${id}-${i}`}
            className="absolute z-10 size-[clamp(3.6rem,6.8vw,5.15rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.2rem] bg-black/55"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            title={TOOL_LABELS[id] ?? id}
          >
            {src ? (
              <img
                src={src}
                alt={TOOL_LABELS[id] ?? id}
                className="size-full object-contain"
                draggable={false}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function MeteorMark() {
  return (
    <img
      src={meteorite}
      alt=""
      aria-hidden
      className="block h-[clamp(4.4rem,11vw,7.2rem)] w-auto origin-center -translate-x-[22%] translate-y-[6%] -rotate-45 select-none"
      draggable={false}
    />
  );
}

function StatBoard({ slide }: { slide: (typeof STATS)[number] }) {
  return (
    <div className="flex w-full flex-col gap-[clamp(2rem,8vw,6rem)] pr-[clamp(1.4rem,6vw,3.4rem)] md:flex-row md:items-start md:justify-between">
      <article className="min-w-0 flex-1">
        <p className="inline-block bg-[#2f6dff] px-[0.18em] py-[0.06em] font-sans text-[clamp(4.4rem,14vw,8.4rem)] font-black leading-[0.82] tabular-nums text-white">
          {slide.percent}
        </p>
        <p className="mt-[clamp(0.8rem,2vh,1.4rem)] max-w-none text-[clamp(1.55rem,3.6vw,2.35rem)] font-bold leading-[1.08] tracking-wide text-white">
          {slide.prefix} <span className="text-[#2f6dff]">{slide.highlight}</span>
          <br />
          <span className="underline decoration-[#2f6dff] decoration-4 underline-offset-[6px]">
            {slide.underline}
          </span>
          <br />
          {slide.rest}
        </p>
      </article>
      <article className="flex-none">
        <div className="inline-flex translate-x-[clamp(1.4rem,6vw,3.4rem)] translate-y-[clamp(0.5rem,1.8vh,1.1rem)] flex-col items-center">
          <p className="bg-[#2f6dff] px-[0.55em] pb-[0.32em] pt-[0.90em] text-center font-display leading-[0.88] text-white">
            <span className="block text-[clamp(1.15rem,3.2vw,1.9rem)]">{slide.lossLead}</span>
            <span className="mt-[0.22em] block text-[clamp(3.6rem,10vw,6.4rem)]">{slide.lossWord}</span>
          </p>
          <p className="mt-[clamp(1.1rem,3vh,1.8rem)] text-center font-sans text-[clamp(1.15rem,2.4vw,1.55rem)] font-bold leading-[1.2] tracking-wide text-white">
            {slide.caption[0]}
            <br />
            {slide.caption[1]}
          </p>
        </div>
      </article>
    </div>
  );
}

function StatsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % STATS.length);
    }, STAT_MS);
    return () => window.clearTimeout(timer);
  }, [index]);

  const goTo = (next: number) => {
    if (next === index) return;
    setIndex(next);
  };

  const slide = STATS[index];

  return (
    <section
      id="services"
      className="px-[clamp(1rem,4vw,1.5rem)] pt-[clamp(3.5rem,10vh,6.5rem)] pb-[clamp(2.5rem,7vh,4.5rem)]"
    >
      <div className="relative mx-auto grid w-full max-w-7xl px-[clamp(0.5rem,2vw,1rem)]">
        <div className="invisible pointer-events-none col-start-1 row-start-1" aria-hidden>
          <StatBoard slide={STATS[2]} />
        </div>
        <div key={index} className="stat-swap col-start-1 row-start-1">
          <StatBoard slide={slide} />
        </div>
      </div>

      <div className="mt-[clamp(1.6rem,4vh,2.4rem)] flex items-center justify-center gap-2">
        {STATS.map((slide, i) => {
          const active = i === index;
          return (
            <button
              key={slide.percent}
              type="button"
              aria-label={`Statistique ${i + 1}`}
              onClick={() => goTo(i)}
              className={`relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
                active ? "w-8 bg-white/20" : "w-2 bg-white/30 hover:bg-white/55"
              }`}
            >
              {active ? (
                <span
                  key={index}
                  className="stat-progress absolute inset-y-0 left-0 w-full origin-left rounded-full bg-[#2f6dff]"
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function FormationsSuite() {
  const [pillar, setPillar] = useState<PillarId>("ia");
  const current = PILLARS.find((item) => item.id === pillar) ?? PILLARS[1];
  const loop = [...MARQUEE, ...MARQUEE, ...MARQUEE];

  return (
    <div className="relative overflow-x-clip bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[clamp(1.4rem,5vh,2.6rem)] bg-gradient-to-b from-black to-transparent"
      />
      <StatsCarousel />

      <div className="mt-[clamp(1.2rem,4vh,2.4rem)] overflow-hidden bg-[#2f6dff] py-[clamp(1.9rem,5.5vh,2.9rem)]">
        <div className="suite-marquee-track flex w-max items-center gap-0 whitespace-nowrap font-display text-[clamp(1.05rem,3.2vw,2rem)] tracking-[0.08em] text-white">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center">
              <span>{item}</span>
              <span className="mx-[clamp(0.7rem,2vw,1.4rem)] text-white">•</span>
            </span>
          ))}
        </div>
      </div>

      <section id="apropos" className="relative bg-black text-center">
        <div className="px-[clamp(1rem,4vw,1.5rem)] pt-[clamp(4.5rem,12vh,7.5rem)] pb-[clamp(2.4rem,6vh,3.6rem)]">
          <h2 className="mx-auto inline-block text-left font-display leading-[0.86] tracking-wide">
            <span className="block text-[clamp(1.45rem,4.8vw,3.15rem)] text-[#b4b4b4]">
              L&apos;OUTIL N&apos;EST RIEN
            </span>
            <span className="mt-[0.02em] block text-[clamp(2.65rem,9vw,6.05rem)] text-white">
              SANS LA MÉTHODE
            </span>
          </h2>

          <p className="mt-[clamp(3.2rem,9vh,5rem)] text-[clamp(0.62rem,1vw,0.78rem)] uppercase tracking-[0.42em] text-white">
            Nos solutions
          </p>
          <p className="mt-3 font-display text-[clamp(1.55rem,4.4vw,2.85rem)] tracking-wide text-white">
            TROIS PILIERS FONDAMENTAUX.
          </p>

          <div className="mt-[clamp(1.6rem,4.5vh,2.4rem)] flex flex-wrap items-center justify-center gap-[clamp(0.7rem,1.6vw,1.15rem)]">
            {PILLARS.map((item) => {
              const selected = item.id === pillar;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPillar(item.id)}
                  className={`rounded-full border px-[clamp(1.15rem,2.4vw,1.7rem)] py-[0.55rem] text-[clamp(0.62rem,0.95vw,0.76rem)] uppercase tracking-[0.14em] transition-colors ${
                    selected
                      ? "border-[#2f6dff] bg-[#2f6dff] text-white shadow-[0_0_14px_rgba(47,109,255,0.75)]"
                      : "border-white/90 bg-transparent text-white shadow-[0_0_12px_rgba(255,255,255,0.55)] hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <p className="mx-auto mt-[clamp(1.4rem,3.6vh,2rem)] max-w-2xl text-[clamp(0.78rem,1.2vw,0.98rem)] font-bold leading-[1.45] text-white">
            On Ne Vous Apprend Pas Un Outil. On Vous Apprend
            <br />
            À Choisir Le Bon, Au Bon Moment, Pour Le Bon Résultat.
          </p>
        </div>

        <ToolConstellation tools={current.path} />
      </section>

      <section className="flex flex-col items-center bg-black px-[clamp(1rem,4vw,1.5rem)] pb-[clamp(4rem,12vh,6.5rem)] pt-[clamp(3rem,8vh,4.5rem)]">
        <MeteorMark />
        <h2 className="text-center font-display text-[clamp(2.4rem,9vw,5.8rem)] leading-none tracking-wide">
          BRISEZ VOS LIMITES
        </h2>
      </section>

      <a
        id="contact"
        href="https://calendly.com/contact-onimpact/prise-de-contact"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[clamp(6.5rem,18vh,9.5rem)] items-center justify-center bg-[#2f6dff] px-6 text-center font-display text-[clamp(1.8rem,6vw,3.6rem)] tracking-[0.08em] text-white transition-opacity hover:opacity-90"
      >
        CONTACTEZ NOUS
      </a>
    </div>
  );
}
