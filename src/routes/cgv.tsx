import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente — On Impact" },
      {
        name: "description",
        content:
          "Conditions générales de vente des formations et prestations de création web On Impact.",
      },
    ],
  }),
  component: TermsOfSale,
});

function TermsOfSale() {
  return (
    <LegalLayout title="Conditions générales de vente">
      <p>
        Les présentes conditions régissent les prestations vendues par On Impact : formations (IA,
        bureautique, graphisme) et création de sites web. Le site ne permet pas de payer en ligne. Toute
        commande est conclue à partir d’un devis accepté.
      </p>
      <LegalSection title="Devis et commande">
        <p>
          Un devis précise le contenu de la prestation, son prix, son calendrier et les éléments à
          fournir par le client. La commande est ferme lorsque le client accepte le devis par écrit,
          y compris par e-mail. Le devis prévaut sur les présentes conditions s’il y déroge
          expressément.
        </p>
      </LegalSection>
      <LegalSection title="Prix et paiement">
        <p>
          Les prix sont ceux du devis accepté, exprimés en euros. Sauf mention contraire, ils
          s’entendent hors taxes. Les modalités de paiement, d’acompte et de solde sont indiquées sur
          le devis. À défaut de précision, un acompte peut être demandé avant le démarrage, le solde
          étant dû à la livraison ou à la fin de la formation.
        </p>
        <p>
          Tout retard de paiement peut donner lieu, après mise en demeure restée sans effet, à la
          suspension de la prestation et aux pénalités prévues par la loi.
        </p>
      </LegalSection>
      <LegalSection title="Formations">
        <p>
          Les formations sont réalisées selon le programme et les dates convenus. Le client fournit les
          accès, contenus et disponibilités nécessaires. Un report demandé par le client moins de cinq
          jours ouvrés avant la session peut être facturé, sauf empêchement justifié.
        </p>
      </LegalSection>
      <LegalSection title="Création web">
        <p>
          On Impact réalise le site décrit au devis. Le client valide les étapes prévues, en particulier
          la maquette et la mise en ligne. À défaut de retour dans le délai indiqué au devis, ou à
          défaut sous dix jours ouvrés, l’étape est réputée acceptée.
        </p>
        <p>
          Les textes, images et marques fournis par le client restent sa responsabilité. Il garantit
          disposer des droits nécessaires pour les utiliser.
        </p>
      </LegalSection>
      <LegalSection title="Rétractation">
        <p>
          Les clients professionnels ne bénéficient pas du droit de rétractation propre aux
          consommateurs. Lorsqu’un client agit en tant que consommateur, il dispose d’un délai de
          quatorze jours à compter de la conclusion du contrat pour se rétracter, sauf s’il a demandé
          que la prestation commence avant la fin de ce délai et en a reconnu la conséquence : la perte
          du droit de rétractation une fois la prestation pleinement exécutée.
        </p>
      </LegalSection>
      <LegalSection title="Propriété intellectuelle">
        <p>
          Sauf clause contraire du devis, les livrables spécifiquement créés pour le client lui sont
          cédés après paiement intégral, pour les usages prévus au devis. On Impact conserve ses
          méthodes, outils, modèles et savoir-faire, ainsi que le droit de mentionner la réalisation à
          titre de référence, sans divulguer d’informations confidentielles.
        </p>
      </LegalSection>
      <LegalSection title="Responsabilité">
        <p>
          On Impact est tenu à une obligation de moyens. Sa responsabilité ne couvre pas les dommages
          indirects, ni un usage des livrables non conforme au devis. Elle est, sauf faute lourde ou
          dolosive et sauf disposition légale impérative, limitée au montant hors taxes payé pour la
          prestation concernée.
        </p>
      </LegalSection>
      <LegalSection title="Droit applicable">
        <p>
          Les présentes conditions sont soumises au droit français. En cas de litige, une solution
          amiable sera recherchée avant toute action. À défaut, les tribunaux compétents sont ceux
          prévus par la loi.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
