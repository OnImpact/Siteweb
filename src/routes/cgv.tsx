import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente — On Impact" },
      {
        name: "description",
        content: "Conditions générales de vente de la SAS On Impact.",
      },
    ],
  }),
  component: TermsOfSale,
});

function Subheading({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 font-semibold text-white">{children}</h3>;
}

function TermsOfSale() {
  return (
    <LegalLayout title="Conditions générales de vente" updated="17 août 2026">
      <p className="font-semibold text-white">de la SAS ON IMPACT</p>
      <p>
        Toute commande passée à la SAS On Impact entraîne de plein droit l’acceptation des présentes
        conditions générales de vente qui prévalent sur tout autre document du client. Il ne peut y
        être dérogé que par accord express et écrit d’un représentant de la SAS On Impact dûment
        habilité à cet effet.
      </p>
      <p>
        Tout document postérieur à un devis ou contrat qui aurait pour but de le compléter, de le
        modifier ou de déroger aux conditions initialement prévues sera considéré comme nul et de nul
        effet.
      </p>
      <p>
        Seul un nouveau devis accepté et confirmé par la SAS On Impact pourra annuler et remplacer un
        devis précédent qui serait incomplet ou obsolète.
      </p>

      <LegalSection title="Article 1 : Champ d'application">
        <p>
          Les présentes conditions générales de vente s’appliquent à toutes les prestations fournies
          par la SAS On Impact (ci-après dénommée « le Prestataire ») à ses clients (ci-après
          dénommés « le Client »).
        </p>
        <p>Elles régissent les relations contractuelles entre le Prestataire et le Client.</p>
        <Subheading>1. Description des prestations d’Audience Performance</Subheading>
        <p>
          Le Prestataire propose des prestations telles que la conception, le développement,
          l’édition, l’exploitation, la maintenance et la commercialisation de logiciels,
          d’applications informatiques et de systèmes d’intelligence artificielle, ainsi que de tout
          système d’aide à la décision, à la saisie ou à l’automatisation destinés aux particuliers,
          aux entreprises et aux organisations.
        </p>
        <p>
          La SAS On Impact propose également des prestations de conseil, d’audit, d’accompagnement,
          d’intégration et d’automatisation de processus et de flux de travail, notamment au moyen de
          technologies d’intelligence artificielle, d’automatisation et d’outils numériques.
        </p>
        <p>
          Le Prestataire dispense aussi des activités de formation, sur place ou à distance, dans tous
          domaines et notamment relatives aux outils numériques, bureautiques, logiciels et
          technologies développés ou utilisés par la Société.
        </p>
        <p>
          Le Prestataire peut également développer des activités de communication, de marketing, de
          publicité, de relations publiques et de stratégie digitale.
        </p>
        <p>
          Les détails des prestations sont définis dans le devis établi par le Prestataire et accepté
          par le Client.
        </p>
      </LegalSection>

      <LegalSection title="Article 2 : Devis">
        <Subheading>2.1 Établissement du devis</Subheading>
        <p>
          Toute demande de Prestations donnera lieu à l’établissement d’un devis par la SAS On Impact,
          établi sur la base des informations communiquées par le Client.
        </p>
        <p>
          Le devis, une fois signé par le Client, doit s’entendre comme un contrat, au sens et avec
          les conséquences des articles 1101 à 1231-7 du Code civil.
        </p>
        <p>
          Le devis mentionne la description des prestations de ventes ou de services, les tarifs, les
          délais de réalisation et les modalités de paiement.
        </p>
        <p>
          Toute modification de ces informations est susceptible d’entraîner une modification du devis,
          notamment des conditions financières et des délais de livraison qui y seraient prévus.
        </p>
        <p>
          L’acceptation du devis par le Client vaut commande ferme et irrévocable des Prestations et
          acceptation sans réserve des présentes conditions générales de vente.
        </p>
        <p>
          Le Client déclare et reconnaît avoir choisi les Prestations de son seul chef et sous sa
          seule responsabilité. Le Prestataire n’est engagé que par les commandes figurant sur le
          devis.
        </p>
        <p>
          La signature du devis engage le Client de manière ferme et définitive, même en cas de
          financement de cette commande par un tiers.
        </p>
        <Subheading>2.2 Reconduction des devis d’abonnement</Subheading>
        <p>
          Les devis d’abonnement sont renouvelés pour une durée et à des conditions identiques par
          tacite reconduction.
        </p>
        <p>
          Le Client ou le Prestataire pourront, par courrier recommandé (LRAR), indiquer leur volonté
          de ne pas reconduire le devis d’abonnement, avec un préavis d’au moins un mois ferme avant le
          terme initialement prévu.
        </p>
      </LegalSection>

      <LegalSection title="Article 3 : Engagement de collaboration et de bonne foi des parties">
        <p>
          Avant l’envoi de devis ou la conclusion du contrat, le Client s’engage à porter à la
          connaissance du Prestataire toutes les données et informations utiles à l’accomplissement de
          sa Prestation.
        </p>
        <p>
          Le Client s’engage à coopérer de manière active et en pleine bonne foi avec le Prestataire.
        </p>
        <p>
          Le Prestataire porte à la connaissance du Client toutes les informations nécessaires sur les
          caractéristiques essentielles des biens et des services qu’il fournit.
        </p>
        <p>
          Le Prestataire s’engage à collaborer pleinement avec le Client pour faciliter les conditions
          d’intervention et assurer l’exécution satisfaisante des services qu’il délivre.
        </p>
      </LegalSection>

      <LegalSection title="Article 4 : Livraison">
        <p>
          Les délais d’exécution et de livraison de la commande sont indiqués dans le devis à titre
          purement indicatif et sans garantie. Les retards d’exécution et/ou de livraison ne donnent
          pas au Client le droit d’annuler la commande considérée ni de la refuser. Ils ne peuvent
          donner lieu à retenue, compensation, pénalités ou dommages intérêts.
        </p>
        <p>
          En toute hypothèse, les délais de livraison sont de plein droit suspendus par tout événement
          ou circonstance indépendants de la volonté du Prestataire et ayant pour effet de retarder la
          livraison des Prestations.
        </p>
        <p>
          La signature par le Client de documents techniques livrés par le Prestataire vaut réception
          et acceptation définitives des Prestations, sans restriction ni réserve d’aucune sorte.
        </p>
        <p>
          L’utilisation ou l’exploitation publique de n’importe quelle nature d’un document technique
          livré par le Prestataire au Client, vaut réception et acceptation définitives des
          Prestations, sans restriction ni réserve d’aucune sorte.
        </p>
      </LegalSection>

      <LegalSection title="Article 6 : Risques">
        <Subheading>6.1</Subheading>
        <p>
          Les risques afférents à tous éléments matériels remis par la SAS On Impact au Client dans le
          cadre de la fourniture de ses Prestations sont transférés au Client à la livraison desdits
          éléments.
        </p>
        <Subheading>6.2</Subheading>
        <p>
          En aucun cas la responsabilité de la SAS On Impact ne peut être engagée en lien avec le
          contenu de ses Prestations.
        </p>
        <p>
          À cet égard, le Prestataire se réserve le droit de refuser de concevoir des Prestations
          contenant des informations, textes et/ou images contraires à l’ordre public et aux bonnes
          mœurs ou qui ne seraient pas conformes à la législation et la réglementation en vigueur. Ce
          refus ne pourra d’aucune manière constituer une rupture de la relation contractuelle.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 : Résiliation anticipée">
        <p>
          La SAS On Impact pourra résilier, de plein droit, sans indemnité et sans préavis le contrat
          ou le devis et recouvrer immédiatement le montant total de ses créances dans les cas
          suivants :
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Lorsque le Client a cédé tout ou partie de ses droits au titre du contrat ou du devis sans
            avoir obtenu l’autorisation écrite du Prestataire et/ou malgré le refus du Prestataire.
          </li>
          <li>
            En cas de défaut ou de retard de paiement pour des raisons imputables au Client, et plus
            généralement, en cas d’inexécution de l’une de ses obligations, et ce, 8 jours après mise
            en demeure délivrée par lettre recommandée avec AR demeurée infructueuse.
          </li>
          <li>
            En cas de modification de l’environnement et/ou des systèmes informatiques du Client, ne
            permettant plus l’exécution de la mission du Prestataire dans les conditions initialement
            prévues dans le contrat ou le devis.
          </li>
          <li>
            En cas de procédure de surendettement, de sauvegarde, de redressement ou de liquidation
            judiciaire, de conciliation avec ses créanciers pour le règlement de ses dettes, ou toute
            procédure similaire en vigueur dans le pays du Client.
          </li>
        </ul>
        <Subheading>7.1 Indemnité de résiliation</Subheading>
        <p>
          En cas de résiliation pour l’un des motifs qui précèdent ou pour tout autre motif imputable
          au Client comme en cas de résiliation anticipée par le Client avant le terme fixé
          contractuellement, celui-ci sera redevable, en sus des créances déjà facturées et non
          réglées, et de celles à échoir et d’une indemnité de résiliation irréductible égale à 20 %
          HT des sommes prévues au devis ou contrat.
        </p>
        <Subheading>7.2</Subheading>
        <p>
          Le paiement de toutes les sommes dues et de l’indemnité mentionnée à l’article 7.1 devra être
          effectué dans un délai de 30 jours à compter de la date de résiliation anticipée du contrat.
        </p>
      </LegalSection>

      <LegalSection title="Article 8 : Prix">
        <Subheading>8.1</Subheading>
        <p>
          Les Prestations sont facturées au prix TTC indiqué sur le devis accepté par le Client et dans
          les conditions qui y sont définies.
        </p>
        <p>
          Un acompte, dont le montant sera fixé dans le devis ou le contrat, devra être réglé par le
          Client avant tout engagement de frais par le Prestataire, et conditionnera le commencement
          d’exécution des Prestations commandées par le Client.
        </p>
        <Subheading>8.2</Subheading>
        <p>
          Les frais de transport, de déplacement, d’hébergement et/ou de livraison, engagés par la SAS
          On Impact pour les besoins de la fourniture des Prestations, et non prévues dans le devis ou
          le contrat, seront remboursés sans délai par le Client sur présentation des justificatifs
          correspondants.
        </p>
        <Subheading>8.3</Subheading>
        <p>
          En ce qui concerne la création de contenus, quel que soit leur nature, les prestations
          facturées d’une demi-journée correspondent à 4 heures (hors temps de trajet), et les
          prestations d’une journée correspondent à 8 heures (hors temps de trajet). Si la mission
          dépasse le temps initialement prévu dans le devis ou le contrat, le Prestataire se réserve le
          droit d’ajuster sa facturation en conséquence.
        </p>
      </LegalSection>

      <LegalSection title="Article 9 : Paiement">
        <Subheading>9.1</Subheading>
        <p>
          Les factures sont payables à 30 jours, à l’exception de la facture d’acompte payable à
          réception.
        </p>
        <p>
          Par dérogation à ce principe, le Prestataire et le Client pourront prévoir un délai supérieur
          à 30 jours à condition que ce délai soit expressément indiqué dans le devis.
        </p>
        <p>
          Pour les devis ou contrats d’abonnement, le règlement des factures émises s’effectuera au
          début de chaque mois ou trimestre de la période d’engagement.
        </p>
        <p>Ce paiement pourra être effectué par :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            soit prélèvements bancaires réalisés par la SAS On Impact via un mandat de prélèvement
            GOCARDLESS préalablement signé par le Client ;
          </li>
          <li>soit par virement bancaire sur le compte du Prestataire.</li>
        </ul>
        <Subheading>9.2</Subheading>
        <p>
          Tout retard et/ou tout défaut de paiement d’une facture à son échéance entraîne l’exigibilité
          de toutes les sommes échues et à échoir y compris les frais de recouvrement et intérêts, et
          notamment de toutes les autres factures émises relativement aux Prestations concernées comme
          de toutes les autres factures qui auraient été précédemment émises à l’égard du même Client.
        </p>
        <Subheading>9.3</Subheading>
        <p>
          En outre, dans le cas où les sommes dues à la SAS On Impact seraient réglées avec retard par
          rapport à l’échéance prévue ou ne seraient pas réglées, conformément à l’article L.441-6 du
          Code de commerce, des pénalités de retard seront dues au Prestataire, dès le lendemain de la
          date de paiement fixée.
        </p>
        <p>
          Le taux d’intérêt de ces pénalités de retard sera égal à 5 fois le taux d’intérêt légal en
          vigueur. Les pénalités de retard sont calculées sur le montant HT de la facture en souffrance
          et sont exigibles dès le premier jour de retard sans qu’un rappel ni une mise en demeure ne
          soient nécessaires.
        </p>
        <p>
          Le client sera également redevable, à titre de clause pénale, d’une indemnité de 40 €
          représentant les frais de recouvrement postaux.
        </p>
        <Subheading>9.4</Subheading>
        <p>
          D’autre part, tout retard de paiement entraînera, sauf accord préalable de la SAS On Impact,
          la suspension de l’exécution de toutes commandes et/ou Prestations, sans que le Client ne
          puisse prétendre se prévaloir d’un quelconque préjudice.
        </p>
        <Subheading>9.5</Subheading>
        <p>
          En cas de modification de la situation financière du Client, le Prestataire se réserve la
          possibilité d’exiger la constitution de sûretés et/ou le règlement comptant des Prestations,
          préalablement à la fourniture de ces dernières.
        </p>
      </LegalSection>

      <LegalSection title="Article 10 : Obligation de moyen du Prestataire">
        <p>
          La SAS On Impact s’engage à déployer tous les efforts et moyens nécessaires pour fournir des
          services de qualité. Elle ne peut néanmoins garantir des résultats spécifiques ni assumer une
          obligation de résultats quant aux performances ou aux objectifs commerciaux visés par le
          Client.
        </p>
        <p>
          Le Client reconnaît et accepte que les actions et les résultats des prestations de la Société
          peuvent être soumis à des variations imprévisibles et dépendent de multiples facteurs
          échappant au contrôle du Prestataire.
        </p>
        <p>
          Par conséquent, le Prestataire ne peut être tenu responsable des résultats spécifiques, du
          retour sur investissement ou de tout autre indicateur, liés à ses interventions.
        </p>
        <p>
          La SAS On Impact s’engage à mettre en œuvre son expertise et son expérience pour optimiser
          les performances et maximiser les chances de succès de ses prestations. Le Client comprend et
          accepte que les résultats réels peuvent différer des attentes ou des projections initiales.
        </p>
        <p>
          En conséquence, la SAS On Impact ne pourra être tenue responsable des conséquences directes
          ou indirectes découlant de la non-atteinte des résultats escomptés dans le cadre de ses
          prestations.
        </p>
        <p>
          Il est rappelé au Client son devoir de collaborer activement et de bonne foi avec la SAS On
          Impact et de fournir toutes les informations pertinentes pour faciliter la mise en place des
          actions du Prestataire.
        </p>
        <p>
          En outre, le Client est encouragé à communiquer ses objectifs commerciaux et ses attentes de
          manière claire et transparente au Prestataire afin de favoriser une compréhension mutuelle.
        </p>
        <p>
          En signant le devis, le Client reconnaît que le Prestataire ne peut garantir des résultats
          spécifiques, et renonce à toute réclamation ou mise en cause de la responsabilité du
          Prestataire à cet égard.
        </p>
      </LegalSection>

      <LegalSection title="Article 11 : Exclusion de responsabilité en cas de problème avec les plateformes">
        <p>
          La SAS On Impact décline toute responsabilité en cas de problèmes survenant avec l’une des
          plateformes tierces utilisées dans le cadre de ses prestations. Cela inclut, sans s’y
          limiter, les plateformes dites « réseaux sociaux », et toutes les plateformes d’intelligence
          artificielle.
        </p>
        <p>
          En tant que Prestataire, la SAS On Impact mettra en œuvre tous les moyens techniques
          nécessaires pour assurer le bon fonctionnement de ses actions et de ses productions.
          Cependant, en raison de la nature évolutive des plateformes tierces et de leur gestion
          indépendante, le Prestataire ne peut garantir leur disponibilité continue, leur performance
          ou leur bon fonctionnement.
        </p>
        <p>
          Le Client reconnaît que le Prestataire ne peut être tenu responsable des problèmes techniques,
          des pannes, des modifications de fonctionnalités, des erreurs, des retards, des pertes de
          données, des suspensions de compte ou de tout autre dysfonctionnement lié aux plateformes
          tierces.
        </p>
        <p>
          Les obligations financières du Client envers la SAS On Impact demeurent inchangées, même en
          cas de problèmes survenant du fait des plateformes tierces.
        </p>
        <p>
          En conséquence, le Client est tenu de continuer à régler le montant des prestations
          conformément aux modalités de paiement convenues dans les devis et les factures.
        </p>
        <p>
          Il est recommandé au Client de se conformer aux conditions d’utilisation et aux politiques des
          plateformes tierces concernées. En cas de difficultés rencontrées avec une plateforme tierce,
          il peut bénéficier de l’assistance du Prestataire dans la mesure du possible et dans les
          limites de ses compétences.
        </p>
        <p>
          Toutefois, le Client comprend et accepte que la résolution des problèmes avec les plateformes
          tierces relève de sa propre responsabilité et qu’il doit prendre les mesures nécessaires pour
          y remédier, le cas échéant.
        </p>
      </LegalSection>

      <LegalSection title="Article 12 : Propriété intellectuelle">
        <Subheading>12.1</Subheading>
        <p>
          Le Client reconnaît et accepte que la SAS On Impact est seule titulaire des droits d’auteur
          sur les créations quelle que soit leur nature, les logiciels, les algorithmes réalisés dans
          le cadre des Prestations qu’elle doit au Client et s’interdit en conséquence de porter
          directement ou indirectement une quelconque atteinte à ces droits. Il s’engage à ne pas
          communiquer ses créations, ses logiciels et ses algorithmes à des tiers à titre gratuit ou
          onéreux, à ne pas les commercialiser directement ou indirectement, à ne pas les reproduire
          sur quelque support que ce soit, même gratuitement ou pour ses propres besoins, et à ne les
          réutiliser d’aucune façon sans l’accord exprès du Prestataire.
        </p>
        <p>
          En cas de non-respect de ces engagements, le Client sera tenu d’indemniser la SAS On Impact
          du préjudice ainsi subi par elle par une somme égale au double du montant de l’intégralité du
          contrat ou devis considéré, calculée TTC.
        </p>
        <Subheading>12.2</Subheading>
        <p>
          Les droits patrimoniaux afférents aux créations quelle que soit leur nature, logiciels et
          algorithmes réalisés par la SAS On Impact dans le cadre de la fourniture des Prestations et
          retenus par le Client (ci-après les « Créations ») seront cédés au Client pour les
          exploitations prévues à la commande et dans les conditions prévues au devis accepté par le
          Client, après complet paiement des sommes dues à ce titre et mentionnées à l’article 9 des
          présentes conditions générales de vente. À défaut, aucun droit n’est cédé.
        </p>
        <p>
          Le prix de cession des droits patrimoniaux sera indiqué dans le devis ou le contrat établi
          pour les Prestations ou dans un devis spécifique. En tout état de cause, les droits afférents
          aux créations non retenues par le client dans le cadre des propositions présentées par la SAS
          On Impact ne sont pas cédés, sauf convention contraire des parties.
        </p>
        <Subheading>12.3</Subheading>
        <p>
          La cession des droits (droits d’auteur, droits voisins, droit à l’image, etc.) détenus, le
          cas échéant par des tiers et exploités dans les prestations, fera l’objet d’un devis
          spécifique.
        </p>
        <Subheading>12.4</Subheading>
        <p>
          La propriété des supports matériels des Créations et des logiciels est transférée au Client,
          après complet paiement à la SAS On Impact de toutes sommes dues et à l’exception des
          originaux des œuvres graphiques, plastiques ou informatiques qui restent la propriété du
          Prestataire.
        </p>
        <Subheading>12.5</Subheading>
        <p>
          Le Client autorise gracieusement la SAS On Impact à reproduire et à représenter en tout ou
          partie ces échantillons et/ou Créations et/ou logiciels, dans un but d’information, de
          promotion ou de présentation de ses propres travaux, sur tous supports, dans le monde entier
          et pour la durée maximale de protection des droits y afférents, ainsi qu’à les citer de même
          que le Client, à titre de référence commerciale.
        </p>
      </LegalSection>

      <LegalSection title="Article 13 : Exclusion de garantie">
        <Subheading>13.1</Subheading>
        <p>
          La SAS On Impact ne garantit que l’existence matérielle des Créations et Prestations à
          l’exclusion de la jouissance paisible des droits cédés. Elle s’engage toutefois à effectuer
          les démarches raisonnables afin de vérifier la disponibilité des droits cédés, dans le cadre
          de ses créations, et à informer le client de leur résultat afin qu’il fasse son affaire
          personnelle de leur acquisition, le cas échéant.
        </p>
        <p>
          La SAS On Impact ne pourra être tenue d’aucune façon responsable des conséquences d’une
          éventuelle action du Client et/ou action de quelque nature que ce soit d’un tiers à
          l’encontre du Client sur le fondement d’une atteinte à des droits antérieurs de quelque
          nature que ce soit du fait de ses Créations.
        </p>
        <Subheading>13.2</Subheading>
        <p>
          La SAS On Impact décline toute responsabilité de quelque nature que ce soit en cas de
          modification par le Client et/ou tout fournisseur et/ou sous-traitant du contenu de ses
          Prestations et/ou Créations et/ou logiciels après réception et/ou validation de ces derniers
          et notamment des fichiers informatiques les contenant.
        </p>
        <p>
          Le Client est seul responsable de la transposition des Créations sur les supports et produits
          définitifs, la SAS On Impact décline toute responsabilité quant au rendu final de ses
          Créations qu’elle a seulement pour mission de concevoir.
        </p>
      </LegalSection>

      <LegalSection title="Article 14 : Garanties">
        <p>
          Le Client s’engage à fournir à la SAS On Impact des informations justes et sincères pour
          l’accomplissement des Prestations et s’engage à la prévenir de toute modification concernant
          les informations fournies.
        </p>
        <p>
          Le Client garantit au Prestataire qu’il détient les droits afférents aux marques, modèles et
          créations qu’il fournit à la SAS On Impact pour la réalisation de ses Prestations et
          Créations et/ou qu’il demande à la SAS On Impact de reproduire, adapter et plus généralement
          de s’inspirer pour la réalisation des Prestations et Créations. Il garantit qu’aucun élément
          fourni à la SAS On Impact ne porte atteinte aux lois et règlements et notamment à des droits
          de propriété intellectuelle ou à l’image de tiers et qu’aucun ne comporte un contenu
          diffamatoire, mensonger, sexiste ou raciste.
        </p>
      </LegalSection>

      <LegalSection title="Article 15 : Sous-traitants">
        <p>
          La SAS On Impact est libre de faire appel au fournisseur et/ou sous-traitant de son choix
          pour l’exécution de la commande qui lui est passée sauf demande particulière du Client de
          faire appel à un fournisseur et/ou sous-traitant particulier.
        </p>
        <p>
          Dans tous les cas, le fournisseur et/ou le sous-traitant facturera directement le Client. Le
          Prestataire ne pourra, en aucun cas, être tenu responsable d’une quelconque défaillance ou
          inexécution dudit fournisseur et/ou sous-traitant.
        </p>
      </LegalSection>

      <LegalSection title="Article 16 : Confidentialité">
        <p>
          Le Prestataire et le Client s’engagent à conserver confidentielles les informations de toute
          nature échangées entre eux dans le cadre de la fourniture des Prestations, relatives
          notamment à leur organisation interne, leurs clients, leurs tarifs, leurs données
          personnelles, à l’exception de celles appartenant au domaine public.
        </p>
        <p>
          Cette obligation de confidentialité est valable pendant toute la durée du contrat et
          subsistera après sa résiliation, quelle qu’en soit la cause.
        </p>
      </LegalSection>

      <LegalSection title="Article 17 : Limitation de responsabilité">
        <p>
          La responsabilité de la SAS On Impact est expressément limitée à la réparation des dommages
          matériels directs, à l’exclusion de tous dommages immatériels et ou indirects, tels que, et
          sans limitation, perte d’une chance, perte de chiffre d’affaires, perte d’exploitation,
          préjudice commercial, perte d’image… etc qui seraient consécutifs à un défaut d’exécution des
          Prestations.
        </p>
        <p>
          En outre, dans tous les cas où la loi permet une telle limitation, la responsabilité globale
          de la SAS On Impact dans le cadre de la fourniture des Prestations est expressément limitée
          aux sommes versées par le client à ce titre.
        </p>
      </LegalSection>

      <LegalSection title="Article 18 : Divers">
        <p>
          Le fait pour la SAS On Impact de ne pas se prévaloir d’un manquement par le Client à l’une
          quelconque de ses obligations au titre des conditions générales de vente ne vaut pas
          renonciation à l’exécution de l’obligation considérée.
        </p>
        <p>
          La SAS On Impact s’engage à respecter la législation et la réglementation relatives à la
          protection des données personnelles et à ne traiter et utiliser les données personnelles
          collectées que dans la mesure nécessaire à l’exécution des services confiés par le Client.
        </p>
        <p>
          En cas de force majeure, telle que définie par la loi, empêchant l’exécution des prestations,
          le Prestataire est libéré de ses obligations contractuelles, sans que le Client puisse
          prétendre à un quelconque remboursement des sommes versées au prestataire ou à une quelconque
          indemnisation ou réparation.
        </p>
      </LegalSection>

      <LegalSection title="Article 19 : Modification des CGV">
        <p>La SAS On Impact se réserve le droit de modifier ses CGV à tout moment.</p>
        <p>
          Les nouvelles conditions s’appliqueront de fait à tous les nouveaux contrats et aux contrats
          en cours après notification au client par courriel, sauf opposition écrite de celui-ci,
          notifiée par LRAR dans un délai de 30 jours.
        </p>
      </LegalSection>

      <LegalSection title="Article 20 : Litiges">
        <p>
          Les présentes conditions générales de ventes sont conformes à la loi et à la réglementation
          françaises. À défaut de résolution amiable de tout litige relatif à leur interprétation ou à
          l’exécution des clauses des devis et contrats sera de la compétence exclusive des Tribunaux
          du ressort de Compiègne (Oise).
        </p>
        <p>
          Le Prestataire et le Client conviennent également que tous les contentieux et les désaccords
          qui pourraient surgir entre eux pendant ou après leur relation contractuelle, quels que
          soient leurs natures, relèveront des Tribunaux du ressort de Compiègne (Oise).
        </p>
        <p>Fait à Compiègne, le 17 août 2026.</p>
        <p className="font-semibold text-white">SAS On Impact.</p>
      </LegalSection>
    </LegalLayout>
  );
}
