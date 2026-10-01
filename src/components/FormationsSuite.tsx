import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const sparkRef = useRef<SVGEllipseElement>(null);

  useLayoutEffect(() => {
    const spark = sparkRef.current;
    const svg = spark?.ownerSVGElement;
    if (!spark || !svg) return;

    const fit = () => {
      const box = svg.getBoundingClientRect();
      if (!box.width || !box.height) return;
      const radius = 5.5;
      spark.setAttribute("rx", String(radius / (box.width / 100)));
      spark.setAttribute("ry", String(radius / (box.height / 100)));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-[clamp(22rem,56vh,40rem)] w-full overflow-hidden bg-black">
      <img
        src={constellationBg}
        alt=""
        aria-hidden
        className="constellation-bg pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />
      <img
        src={constellationBg}
        alt=""
        aria-hidden
        className="constellation-bg-blur pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black via-black/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-black via-black/55 to-transparent" />
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path id="constellation-route" d={pathD} fill="none" />
        <ellipse ref={sparkRef} rx="0.29" ry="0.91" fill="#fff" className="constellation-spark">
          <animateMotion
            dur="18s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#constellation-route" />
          </animateMotion>
        </ellipse>
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

const CALENDLY_URL =
  "https://calendly.com/contact-onimpact/prise-de-contact?background_color=2f6dff&text_color=ffffff&primary_color=2f6dff";

function CalendlyEmbed() {
  const [height, setHeight] = useState(1100);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("embed_domain", window.location.host);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("hide_gdpr_banner", "1");
    setSrc(url.toString());

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      const data = event.data as { event?: string; payload?: { height?: string } };
      if (data?.event !== "calendly.page_height" || !data.payload?.height) return;
      const px = Number.parseInt(data.payload.height, 10);
      if (px > 0) setHeight(px);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!src) return <div className="min-h-[740px] w-full" />;

  return (
    <iframe
      title="Prendre rendez-vous"
      src={src}
      scrolling="no"
      className="block w-full overflow-hidden border-0 bg-transparent"
      style={{ height }}
    />
  );
}

function MeteorVisual({ fixed }: { fixed?: { top: number; opacity: number } }) {
  return (
    <img
      src={meteorite}
      alt=""
      aria-hidden
      draggable={false}
      className="pointer-events-none block h-[clamp(4.4rem,11vw,7.2rem)] w-auto origin-center -translate-x-[22%] translate-y-[6%] -rotate-45 select-none"
      style={
        fixed
          ? {
              position: "fixed",
              top: fixed.top,
              left: "50%",
              zIndex: 40,
              opacity: fixed.opacity,
              transform: "translateX(-72%) translateY(6%) rotate(-45deg)",
            }
          : undefined
      }
    />
  );
}

function MeteorDrop() {
  const slotRef = useRef<HTMLDivElement>(null);
  const flyingRef = useRef<HTMLImageElement>(null);
  const poseRef = useRef({ top: 80, opacity: 0 });
  const [phase, setPhase] = useState<"wait" | "fall" | "rest">("wait");

  useEffect(() => {
    if (phase !== "fall") return;
    const flying = flyingRef.current;
    if (!flying) return;
    flying.style.top = `${poseRef.current.top}px`;
    flying.style.opacity = String(poseRef.current.opacity);
  }, [phase]);

  useEffect(() => {
    const phrase = document.getElementById("methode-phrase");
    const slot = slotRef.current;
    if (!phrase || !slot) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("rest");
      return;
    }

    let raf = 0;
    const update = () => {
      const phraseBottom = phrase.getBoundingClientRect().bottom + window.scrollY;
      const slotTop = slot.getBoundingClientRect().top + window.scrollY;
      const meteorHeight = slot.offsetHeight || 96;
      const gap = Math.max(1, slotTop - phraseBottom);
      const landing = Math.min(window.innerHeight * 0.34, Math.max(120, gap - window.innerHeight * 0.42));
      const start = phraseBottom;
      const end = Math.max(start + 1, slotTop - landing);
      const y = window.scrollY;

      if (y < start) {
        setPhase((current) => (current === "wait" ? current : "wait"));
        return;
      }

      const progress = Math.min(1, (y - start) / (end - start));
      if (progress >= 1) {
        setPhase((current) => (current === "rest" ? current : "rest"));
        return;
      }

      const fromTop = -meteorHeight;
      const slotScreen = slot.getBoundingClientRect().top;
      const top = fromTop + (slotScreen - fromTop) * progress;
      const opacity = Math.min(1, progress / 0.14);
      poseRef.current = { top, opacity };
      const flying = flyingRef.current;
      if (flying) {
        flying.style.top = `${top}px`;
        flying.style.opacity = String(opacity);
      }
      setPhase((current) => (current === "fall" ? current : "fall"));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={slotRef} className="flex min-h-[clamp(4.4rem,11vw,7.2rem)] items-center justify-center">
      {phase === "rest" ? <MeteorVisual /> : null}
      {phase === "fall"
        ? createPortal(
            <img
              ref={flyingRef}
              src={meteorite}
              alt=""
              aria-hidden
              draggable={false}
              className="pointer-events-none h-[clamp(4.4rem,11vw,7.2rem)] w-auto origin-center select-none"
              style={{
                position: "fixed",
                top: poseRef.current.top,
                left: "50%",
                zIndex: 40,
                opacity: poseRef.current.opacity,
                transform: "translateX(-72%) translateY(6%) rotate(-45deg)",
              }}
            />,
            document.body,
          )
        : null}
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
        <div className="px-[clamp(1rem,4vw,1.5rem)] pt-[clamp(8rem,18vh,13rem)] pb-[clamp(12rem,26vh,20rem)]">
          <h2 className="mx-auto inline-block text-left font-display leading-[0.92] tracking-wide">
            <span className="block text-[clamp(1.7rem,5.4vw,3.65rem)] text-[#b4b4b4]">
              L&apos;OUTIL N&apos;EST RIEN
            </span>
            <span className="mt-[0.28em] block text-[clamp(3.05rem,10vw,6.9rem)] text-white">
              SANS LA MÉTHODE
            </span>
          </h2>

          <p className="mt-[clamp(4.4rem,12vh,7rem)] text-[clamp(0.74rem,1.15vw,0.95rem)] uppercase tracking-[0.42em] text-white">
            Nos solutions
          </p>
          <p className="mt-[clamp(1.15rem,2.8vh,1.9rem)] font-display text-[clamp(1.85rem,5.1vw,3.35rem)] leading-[1.15] tracking-wide text-white">
            TROIS PILIERS FONDAMENTAUX.
          </p>

          <div className="mt-[clamp(2.6rem,6.5vh,4rem)] flex flex-wrap items-center justify-center gap-[clamp(0.85rem,1.8vw,1.35rem)]">
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
            className="mx-auto mt-[clamp(2.4rem,5.5vh,3.6rem)] max-w-3xl text-[clamp(0.92rem,1.45vw,1.18rem)] font-bold leading-[1.7] text-white"
          >
            On Ne Vous Apprend Pas Un Outil. On Vous Apprend
            <span className="mt-[0.65em] block">
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
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#2f6dff] pb-[clamp(2.5rem,7vh,4.5rem)]">
        <h2 className="flex min-h-[clamp(6.5rem,18vh,9.5rem)] items-center justify-center px-6 text-center font-display text-[clamp(1.8rem,6vw,3.6rem)] tracking-[0.08em] text-white">
          CONTACTEZ NOUS
        </h2>
        <div className="mx-auto mt-[clamp(1.5rem,4vh,2.5rem)] w-full max-w-5xl overflow-hidden px-[clamp(1rem,4vw,1.5rem)]">
          <CalendlyEmbed />
        </div>
      </section>
    </div>
  );
}
