import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title: "Conditions générales d’utilisation — On Impact" },
      {
        name: "description",
        content: "Conditions d’utilisation du site On Impact.",
      },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalLayout title="Conditions générales d’utilisation">
      <p>
        Les présentes conditions encadrent l’accès et l’usage du site On Impact. Elles ne remplacent
        pas les conditions générales de vente, qui s’appliquent dès qu’une prestation est commandée.
      </p>
      <LegalSection title="Accès au site">
        <p>
          Le site est accessible gratuitement. On Impact peut en suspendre l’accès pour maintenance,
          mise à jour ou contrainte technique, sans que cela ouvre droit à indemnité.
        </p>
      </LegalSection>
      <LegalSection title="Contenu et propriété intellectuelle">
        <p>
          Les textes, visuels, marques, animations et la structure du site sont protégés. Toute
          reproduction ou réutilisation non autorisée, en dehors d’un usage privé ou d’une courte
          citation avec mention de la source, est interdite.
        </p>
      </LegalSection>
      <LegalSection title="Usage attendu">
        <p>
          L’utilisateur s’abstient de porter atteinte au site, d’en extraire les contenus de façon
          automatisée au-delà de ce que permet la loi, ou d’utiliser les formulaires et le module de
          contact pour envoyer des messages abusifs ou trompeurs.
        </p>
      </LegalSection>
      <LegalSection title="Informations publiées">
        <p>
          Les contenus du site présentent l’activité d’On Impact. Ils n’ont pas valeur d’offre
          contractuelle. Seul un devis accepté engage les parties sur une prestation.
        </p>
      </LegalSection>
      <LegalSection title="Liens">
        <p>
          Le site peut renvoyer vers des services tiers, notamment l’outil de prise de rendez-vous.
          On Impact n’est pas responsable du contenu ou des pratiques de ces services, qui ont leurs
          propres conditions.
        </p>
      </LegalSection>
      <LegalSection title="Responsabilité">
        <p>
          On Impact veille au bon fonctionnement du site mais ne garantit pas l’absence d’erreur, ni
          une disponibilité ininterrompue. La responsabilité d’On Impact ne peut être engagée pour un
          dommage lié à l’usage du site en dehors des cas prévus par la loi.
        </p>
      </LegalSection>
      <LegalSection title="Droit applicable">
        <p>Les présentes conditions sont soumises au droit français.</p>
      </LegalSection>
    </LegalLayout>
  );
}
