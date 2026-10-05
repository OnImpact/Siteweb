import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import illustratorIcon from "@/assets/tools/illustrator.png";
import photoshopIcon from "@/assets/tools/photoshop.png";
import canvaIcon from "@/assets/tools/canva.png";
import chatgptIcon from "@/assets/tools/chatgpt.png";
import excelIcon from "@/assets/tools/excel.png";
import geminiIcon from "@/assets/tools/gemini.png";
import claudeIcon from "@/assets/tools/claude.png";
import higgsfieldIcon from "@/assets/tools/higgsfield.png";
import meteorite from "@/assets/meteorite.png";

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

  return (
    <div className="relative -mt-[clamp(3rem,8vh,5.5rem)] h-[clamp(22rem,56vh,40rem)] w-full overflow-visible">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="constellation-aura pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <polyline
          points={polyline}
          fill="none"
          stroke="#2f6dff"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="constellation-aura-stroke"
        />
        <polyline
          points={polyline}
          fill="none"
          stroke="#b9d2ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="constellation-aura-core"
        />
      </svg>
      {CONSTELLATION_LAYOUT.map((pos) => (
        <span
          key={`aura-${pos.x}-${pos.y}`}
          aria-hidden
          className="constellation-aura-node pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        />
      ))}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 z-[2] h-full w-full"
        aria-hidden
      >
        <polyline
          points={polyline}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {CONSTELLATION_LAYOUT.map((pos, i) => {
        const id = tools[i];
        if (!id) return null;
        const src = TOOL_ICONS[id];
        return (
          <div
            key={`${id}-${i}`}
            className="absolute z-10 size-[clamp(3.4rem,6.2vw,4.75rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.15rem] bg-black"
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

function MeteorDrop() {
  return (
    <div className="flex min-h-[clamp(4.4rem,11vw,7.2rem)] items-center justify-center">
      <img
        src={meteorite}
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none block h-[clamp(4.4rem,11vw,7.2rem)] w-auto origin-center -translate-x-[22%] translate-y-[6%] -rotate-45 select-none"
      />
    </div>
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
      className="px-[clamp(1rem,4vw,1.5rem)] pt-[clamp(3.5rem,10vh,6.5rem)] pb-[clamp(5rem,12vh,8rem)]"
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

      <div className="mt-[clamp(3.5rem,9vh,6.5rem)] overflow-hidden bg-[#2f6dff] py-[clamp(1.9rem,5.5vh,2.9rem)]">
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
        <div className="relative z-10 px-[clamp(1rem,4vw,1.5rem)] pt-[clamp(8rem,18vh,13rem)] pb-[clamp(0.75rem,2vh,1.4rem)]">
          <h2 className="mx-auto inline-block text-left font-display leading-[0.92] tracking-wide">
            <span className="block text-[clamp(1.7rem,5.4vw,3.65rem)] text-[#b4b4b4]">
              L&apos;OUTIL N&apos;EST RIEN
            </span>
            <span className="mt-[0.28em] block text-[clamp(3.05rem,10vw,6.9rem)] text-white">
              SANS LA MÉTHODE
            </span>
          </h2>

          <p className="mt-[clamp(2rem,5vh,3.2rem)] text-[clamp(0.74rem,1.15vw,0.95rem)] uppercase tracking-[0.42em] text-white">
            Nos solutions
          </p>
          <p className="mt-[clamp(0.7rem,1.6vh,1.15rem)] font-display text-[clamp(1.85rem,5.1vw,3.35rem)] leading-[1.15] tracking-wide text-white">
            TROIS PILIERS FONDAMENTAUX.
          </p>

          <div className="mt-[clamp(1.25rem,3vh,2rem)] flex flex-wrap items-center justify-center gap-[clamp(0.85rem,1.8vw,1.35rem)]">
            {PILLARS.map((item) => {
              const selected = item.id === pillar;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPillar(item.id)}
                  className={`rounded-full border px-[clamp(1.3rem,2.6vw,1.95rem)] py-[0.7rem] text-[clamp(0.74rem,1.1vw,0.92rem)] uppercase tracking-[0.14em] transition-colors ${
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

          <p
            id="methode-phrase"
            className="mx-auto mt-[clamp(1.15rem,2.6vh,1.8rem)] max-w-3xl text-[clamp(0.92rem,1.45vw,1.18rem)] font-bold leading-[1.45] text-white"
          >
            On Ne Vous Apprend Pas Un Outil. On Vous Apprend
            <span className="mt-[0.35em] block">
              À Choisir Le Bon, Au Bon Moment, Pour Le Bon Résultat.
            </span>
          </p>
        </div>

        <ToolConstellation tools={current.path} />
      </section>

      <section className="flex flex-col items-center bg-black px-[clamp(1rem,4vw,1.5rem)] pb-[clamp(4rem,12vh,6.5rem)] pt-[clamp(3rem,8vh,4.5rem)]">
        <MeteorDrop />
        <h2 className="text-center font-display text-[clamp(2.4rem,9vw,5.8rem)] leading-none tracking-wide">
          BRISEZ VOS LIMITES
        </h2>
        <Link
          to="/contact"
          className="mt-[clamp(1.6rem,4.5vh,2.4rem)] inline-flex items-center justify-center rounded-full bg-[#2f6dff] px-[clamp(1.6rem,4vw,2.6rem)] py-[clamp(0.7rem,1.5vw,0.95rem)] text-[clamp(0.72rem,1.15vw,0.92rem)] font-bold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.03]"
        >
          Osez vous lancer
        </Link>
      </section>

    </div>
  );
}
