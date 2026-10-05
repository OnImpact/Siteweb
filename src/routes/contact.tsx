import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import logo from "@/assets/logo-on-impact.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — On Impact" },
      {
        name: "description",
        content: "Prenez rendez-vous avec On Impact pour une formation ou un projet web.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#2f6dff] text-white">
      <header className="flex items-center bg-black px-[clamp(0.9rem,4vw,2.5rem)] py-5">
        <Link to="/" className="inline-flex" aria-label="On Impact">
          <img src={logo} alt="On Impact" className="h-[clamp(1.2rem,2.1vw,1.75rem)] w-auto" />
        </Link>
      </header>
      <h1 className="flex min-h-[clamp(6.5rem,18vh,9.5rem)] items-center justify-center px-6 text-center font-display text-[clamp(1.8rem,6vw,3.6rem)] tracking-[0.08em]">
        CONTACTEZ NOUS
      </h1>
      <div className="mx-auto w-full max-w-5xl overflow-hidden px-[clamp(1rem,4vw,1.5rem)] pb-[clamp(2.5rem,7vh,4.5rem)]">
        <CalendlyEmbed />
      </div>
    </div>
  );
}
