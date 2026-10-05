import { Link } from "@tanstack/react-router";

const LINKS = [
  { to: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { to: "/cgv", label: "CGV" },
  { to: "/cgu", label: "CGU" },
  { to: "/mentions-legales", label: "Mentions légales" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-[clamp(1rem,4vw,2rem)] py-8">
      <nav
        aria-label="Informations légales"
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.72rem] uppercase tracking-[0.16em] text-white/70"
      >
        {LINKS.map((item) => (
          <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="mt-4 text-center text-xs text-white/40">© {new Date().getFullYear()} On Impact</p>
    </footer>
  );
}
