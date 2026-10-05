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
    <LegalLayout title="Mentions légales">
      <p>
        Les champs entre crochets sont à compléter avec les informations d’immatriculation d’On Impact
        avant mise en production.
      </p>
      <LegalSection title="Éditeur">
        <p>On Impact — formations IA, bureautique, graphisme et création web.</p>
        <p>Forme juridique : [forme juridique]</p>
        <p>Siège social : [adresse complète]</p>
        <p>SIRET : [numéro SIRET] — RCS : [ville et numéro]</p>
        <p>TVA intracommunautaire : [numéro de TVA], le cas échéant</p>
        <p>Contact : page Contact du site.</p>
      </LegalSection>
      <LegalSection title="Directeur de la publication">
        <p>[Nom du directeur ou de la directrice de la publication]</p>
      </LegalSection>
      <LegalSection title="Hébergement">
        <p>[Nom de l’hébergeur]</p>
        <p>[Adresse de l’hébergeur]</p>
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
