import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { AsteroidScroll, HERO_ANIM_VH } from "@/components/AsteroidScroll";
import { CreationWebSuite } from "@/components/CreationWebSuite";
import { FormationsSuite } from "@/components/FormationsSuite";
import { Starfield } from "@/components/Starfield";
import logo from "@/assets/logo-on-impact.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "On Impact — Formations IA & création web" },
      {
        name: "description",
        content:
          "Studio IA et web : formations, création de sites et bibliothèque d'outils IA. Créez votre impact.",
      },
      { property: "og:title", content: "On Impact — Formations IA & création web" },
      {
        property: "og:description",
        content:
          "Studio IA et web : formations, création de sites et bibliothèque d'outils IA. Créez votre impact.",
      },
    ],
  }),
  component: Index,
});

function scrollToServices(behavior: ScrollBehavior = "smooth") {
  const el = document.querySelector("[data-hero-scroll]");
  if (!el) return;
  const animSpan = window.innerHeight * HERO_ANIM_VH;
  const top = el.getBoundingClientRect().top + window.scrollY + animSpan * 0.92;
  window.scrollTo({ top, behavior });
}

function Index() {
  const [service, setService] = useState<0 | 1>(0);
  const [locked, setLocked] = useState(false);
  const manualRef = useRef(false);

  const onPageChange = useCallback((next: 0 | 1, source: "auto" | "manual") => {
    if (source === "manual") {
      manualRef.current = true;
      setLocked(true);
      setService(next);
      return;
    }
    if (manualRef.current) return;
    setService(next);
  }, []);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash;
      if (hash === "#nos-services") {
        manualRef.current = true;
        setLocked(true);
        setService(0);
        requestAnimationFrame(() => scrollToServices("auto"));
      }
      if (hash === "#nos-services-web" || hash === "#creation") {
        manualRef.current = true;
        setLocked(true);
        setService(1);
        requestAnimationFrame(() => scrollToServices("auto"));
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const openService = (next: 0 | 1) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    manualRef.current = true;
    setLocked(true);
    setService(next);
    scrollToServices();
    window.history.replaceState(null, "", next === 0 ? "#nos-services" : "#nos-services-web");
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="intro-fade">
        <Starfield />
      </div>
      <header className="intro-rise-soft intro-delay-1 fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-[clamp(0.9rem,4vw,2.5rem)] py-[clamp(0.45rem,1.2vh,0.7rem)] backdrop-blur-sm">
        <a href="/" className="relative z-10 -ml-1 shrink-0 sm:-ml-3 md:-ml-5" aria-label="On Impact">
          <img
            src={logo}
            alt="On Impact"
            className="h-[clamp(1.2rem,2.1vw,1.75rem)] w-auto"
          />
        </a>
        <nav className="hidden gap-[clamp(1rem,2.4vw,2rem)] text-[clamp(0.75rem,1.05vw,0.9rem)] text-foreground/80 lg:flex">
          <a className="story-link" href="#nos-services" onClick={openService(0)}>
            Formations
          </a>
          <a className="story-link" href="#nos-services-web" onClick={openService(1)}>
            Création Web
          </a>
          <a className="story-link" href="#apropos">
            À propos
          </a>
        </nav>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-[clamp(0.75rem,1.6vw,1rem)] py-[clamp(0.3rem,0.7vw,0.4rem)] text-[clamp(0.72rem,1vw,0.875rem)] font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Nous contacter
          <ArrowUpRight className="size-[1.05em]" />
        </Link>
      </header>

      <main className="relative z-10">
        <AsteroidScroll page={service} onPageChange={onPageChange} locked={locked} />
        {service === 0 ? <FormationsSuite /> : <CreationWebSuite />}
      </main>
    </div>
  );
}
