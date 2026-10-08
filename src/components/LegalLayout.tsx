import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-on-impact.png";

export function LegalLayout({
  title,
  updated = "1er octobre 2026",
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center px-[clamp(0.9rem,4vw,2.5rem)] py-5">
        <Link to="/" className="inline-flex" aria-label="On Impact">
          <img src={logo} alt="On Impact" className="h-[clamp(1.2rem,2.1vw,1.75rem)] w-auto" />
        </Link>
      </header>
      <article className="mx-auto w-full max-w-3xl px-[clamp(1rem,4vw,1.5rem)] pb-8 pt-4">
        <h1 className="font-display text-[clamp(2rem,6vw,3.4rem)] leading-none tracking-wide">{title}</h1>
        <p className="mt-4 text-sm text-white/45">Dernière mise à jour : {updated}</p>
        <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-white/80">{children}</div>
      </article>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
