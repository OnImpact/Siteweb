import { Link } from "@tanstack/react-router";
import adventureCover from "@/assets/creation-web/adventure-cover.png";
import adventureSite from "@/assets/creation-web/adventure-site.png";
import earthHorizon from "@/assets/creation-web/earth-horizon.png";
import nightMountains from "@/assets/creation-web/night-mountains.png";

const MARQUEE = ["DESIGN SUR MESURE", "EXPÉRIENCE FLUIDE", "CONVERSION"];

export function CreationWebSuite() {
  const loop = [...MARQUEE, ...MARQUEE, ...MARQUEE];

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[clamp(1.4rem,5vh,2.6rem)] bg-gradient-to-b from-black to-transparent"
      />
      <section
        id="creation"
        className="px-[clamp(1rem,4vw,1.5rem)] pt-[clamp(3.2rem,9vh,5.5rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-[clamp(2.4rem,6vw,4.5rem)] md:grid-cols-2">
          <article className="text-center md:text-left">
            <p className="text-[clamp(0.72rem,1.15vw,0.9rem)] font-bold uppercase tracking-[0.18em] text-white">
              Un site qui performe
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,7.2vw,4.7rem)] leading-[0.88] tracking-wide">
              DÉCLENCHEZ
              <br />
              L&apos;ACTION.
            </h2>
            <p className="mx-auto mt-[clamp(1rem,2.6vh,1.5rem)] max-w-sm text-[clamp(0.82rem,1.25vw,1rem)] leading-relaxed text-white/70 md:mx-0">
              Un parcours pensé pour la prise de contact.
            </p>
          </article>
          <article className="text-center md:text-left">
            <p className="text-[clamp(0.72rem,1.15vw,0.9rem)] font-bold uppercase tracking-[0.18em] text-white">
              Un site qui rayonne
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,7.2vw,4.7rem)] leading-[0.88] tracking-wide">
              MARQUEZ
              <br />
              LES ESPRITS.
            </h2>
            <p className="mx-auto mt-[clamp(1rem,2.6vh,1.5rem)] max-w-sm text-[clamp(0.82rem,1.25vw,1rem)] leading-relaxed text-white/70 md:mx-0">
              Un univers graphique qui vous distingue.
            </p>
          </article>
        </div>
      </section>

      <div className="overflow-hidden bg-[#2f6dff] py-[clamp(1.9rem,5.5vh,2.9rem)]">
        <div className="suite-marquee-track flex w-max items-center whitespace-nowrap font-display text-[clamp(1.05rem,3.2vw,2rem)] tracking-[0.08em] text-white">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center">
              <span>{item}</span>
              <span className="mx-[clamp(0.7rem,2vw,1.4rem)]">•</span>
            </span>
          ))}
        </div>
      </div>

      <section className="px-[clamp(1rem,4vw,1.5rem)] py-[clamp(3.6rem,10vh,6.5rem)]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-[clamp(1.8rem,5vw,3.5rem)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="text-center md:text-left">
            <h2 className="font-display text-[clamp(2.3rem,6.4vw,4.4rem)] leading-[0.9] tracking-wide">
              DE LA
              <br />
              MAQUETTE À
              <br />
              LA CRÉATION.
            </h2>
            <p className="mt-[clamp(1.1rem,3vh,1.8rem)] text-[clamp(0.9rem,1.35vw,1.1rem)] font-bold leading-relaxed text-white/80">
              Votre vision prend forme.
              <br />
              Puis prend vie.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[clamp(0.7rem,1.8vw,1.3rem)]">
            <img
              src={adventureCover}
              alt="Maquette magazine Adventure"
              className="aspect-[3/4] w-full object-cover shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            />
            <img
              src={adventureSite}
              alt="Site Adventure en ligne"
              className="aspect-[3/4] w-full object-cover shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>

      <section id="apropos" className="relative isolate overflow-hidden bg-black">
        <img
          src={earthHorizon}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/25 to-black/70" />
        <div className="relative flex min-h-[clamp(24rem,56vh,36rem)] flex-col items-center justify-center px-[clamp(1rem,4vw,1.5rem)] py-[clamp(4.5rem,12vh,7.5rem)] text-center">
          <p className="text-[clamp(0.62rem,1vw,0.78rem)] uppercase tracking-[0.42em] text-white">
            Nos engagements
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,7.4vw,5.2rem)] leading-[0.9] tracking-wide [text-shadow:0_0_24px_rgba(0,0,0,0.55)]">
            BEAU. FLUIDE. EFFICACE
          </h2>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#020617]">
        <img
          src={nightMountains}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="relative z-[1] mx-auto flex min-h-[clamp(28rem,64vh,40rem)] max-w-5xl flex-col items-center justify-end px-[clamp(1rem,4vw,1.5rem)] pb-[clamp(3.2rem,8vh,5rem)] pt-[clamp(6rem,16vh,10rem)] text-center">
          <p className="text-[clamp(0.62rem,1vw,0.78rem)] uppercase tracking-[0.38em] text-white/80">
            Plus qu&apos;un simple site web
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,6.6vw,4.6rem)] leading-[0.9] tracking-wide">
            DONNEZ UNE NOUVELLE
            <br />
            DIMENSION À VOTRE MARQUE
          </h2>
          <Link
            to="/contact"
            className="mt-[clamp(1.6rem,4.5vh,2.4rem)] inline-flex items-center justify-center rounded-full bg-[#2f6dff] px-[clamp(1.6rem,4vw,2.6rem)] py-[clamp(0.7rem,1.5vw,0.95rem)] text-[clamp(0.72rem,1.15vw,0.92rem)] font-bold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.03]"
          >
            Parlons de votre projet
          </Link>
        </div>
      </section>
    </div>
  );
}
