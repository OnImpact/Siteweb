import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — On Impact" },
      {
        name: "description",
        content: "Politique de confidentialité du site On Impact : données collectées, finalités et droits.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <LegalSection title="Responsable du traitement">
        <p>
          Le site On Impact est édité par On Impact, studio de formations (IA, bureautique, graphisme) et
          de création web à destination des TPE et PME. Les informations d’identification complètes
          figurent dans les mentions légales.
        </p>
        <p>
          Pour toute question relative à vos données : utilisez la page Contact du site, ou l’adresse
          qui vous est communiquée lors d’un échange commercial.
        </p>
      </LegalSection>
      <LegalSection title="Données collectées">
        <p>Le site ne crée pas de compte utilisateur. Des données peuvent être collectées lorsque vous :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>prenez rendez-vous via le module Calendly intégré à la page Contact ;</li>
          <li>écrivez à On Impact par e-mail ou par tout autre moyen indiqué sur le site.</li>
        </ul>
        <p>
          Il s’agit notamment de votre nom, de votre adresse e-mail, de votre numéro de téléphone, du
          nom de votre société et des informations que vous choisissez d’indiquer pour préparer
          l’échange.
        </p>
        <p>
          Des données techniques de connexion (adresse IP, type de navigateur, pages consultées)
          peuvent être traitées par l’hébergeur afin d’assurer la sécurité et le bon fonctionnement du
          site.
        </p>
      </LegalSection>
      <LegalSection title="Finalités et bases légales">
        <p>Ces données sont utilisées pour :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>répondre à une demande de contact et organiser un rendez-vous (intérêt légitime ou mesures précontractuelles) ;</li>
          <li>établir un devis, conclure et exécuter une prestation de formation ou de création web (contrat) ;</li>
          <li>respecter les obligations comptables et légales (obligation légale) ;</li>
          <li>sécuriser le site et prévenir les abus (intérêt légitime).</li>
        </ul>
      </LegalSection>
      <LegalSection title="Destinataires">
        <p>
          Les données de prise de rendez-vous sont traitées via Calendly, dont le module est intégré à
          la page Contact. Calendly agit en qualité de sous-traitant pour cette fonction. D’autres
          prestataires peuvent intervenir uniquement dans la limite nécessaire à l’hébergement du site
          ou à l’exécution d’une prestation.
        </p>
        <p>On Impact ne vend pas vos données et ne les cède pas à des fins publicitaires.</p>
      </LegalSection>
      <LegalSection title="Durée de conservation">
        <p>
          Les demandes de contact sans suite sont conservées le temps de traiter la demande, puis au
          plus tard trois ans à compter du dernier échange. Les pièces liées à une prestation ou à une
          facture sont conservées pendant les durées imposées par la loi, notamment en matière
          comptable.
        </p>
      </LegalSection>
      <LegalSection title="Vos droits">
        <p>
          Vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation
          de leur traitement, ou vous opposer à un traitement fondé sur l’intérêt légitime. Lorsque le
          traitement repose sur le contrat, vous pouvez aussi demander la portabilité des données que
          vous avez fournies.
        </p>
        <p>
          Vous pouvez introduire une réclamation auprès de la CNIL (cnil.fr). Pour exercer vos droits,
          contactez On Impact via la page Contact. Une preuve d’identité pourra être demandée si la
          demande n’est pas assez certaine.
        </p>
      </LegalSection>
      <LegalSection title="Cookies">
        <p>
          Le site On Impact ne dépose pas de cookie publicitaire. L’affichage du module de prise de
          rendez-vous peut conduire Calendly à déposer des cookies nécessaires à son fonctionnement.
          Vous pouvez les refuser ou les supprimer depuis les réglages de votre navigateur.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
