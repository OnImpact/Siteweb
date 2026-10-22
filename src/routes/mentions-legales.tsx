import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — On Impact" },
      {
        name: "description",
        content: "Mentions légales du site On Impact.",
      },
    ],
  }),
  component: LegalNotice,
});

function LegalNotice() {
  return (
    <LegalLayout title="Mentions légales" updated="22 octobre 2026">
      <LegalSection title="Éditeur">
        <p>ON IMPACT — formations IA, bureautique, graphisme et création web.</p>
        <p>Société par actions simplifiée (SAS)</p>
        <p>
          Siège social : 13 rue Saint-Lazare
          <br />
          60200 Compiègne
        </p>
        <p>SIREN : 106 752 637</p>
        <p>SIRET (siège) : 106 752 637 00012</p>
        <p>RCS Compiègne</p>
        <p>N° TVA intracommunautaire : FR07106752637</p>
        <p>Code NAF / APE : 62.20G — Conseil en systèmes et logiciels informatiques</p>
        <p>Immatriculée le 14 juin 2026</p>
        <p>Contact : page Contact du site.</p>
      </LegalSection>
      <LegalSection title="Directeur de la publication">
        <p>Antoine de Grande, président</p>
      </LegalSection>
      <LegalSection title="Hébergement">
        <p>Vercel Inc.</p>
        <p>
          440 N Barranca Avenue #4133
          <br />
          Covina, CA 91723
          <br />
          États-Unis
        </p>
        <p>
          <a
            href="https://vercel.com"
            className="text-white underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            vercel.com
          </a>
        </p>
      </LegalSection>
      <LegalSection title="Données personnelles">
        <p>
          Le traitement des données collectées via le site est décrit dans la{" "}
          <Link to="/politique-de-confidentialite" className="text-white underline underline-offset-4">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
