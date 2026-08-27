export interface Option {
  text: string
  value: string
}

export interface Question {
  id: number
  text: string
  options: Option[]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Quel est ton niveau actuel ?',
    options: [
      {
        text: 'Débutant : je veux apprendre et faire mes premiers pas',
        value: 'Q1_debutant',
      },
      {
        text: 'Déjà wheeler : je pratique de manière régulière ou occasionnelle',
        value: 'Q1_wheeler',
      },
    ],
  },
  {
    id: 2,
    text: 'Quel est ton gabarit approximatif (une fois équipé) ?',
    options: [
      {
        text: 'Moins de 90kg (gabarit standard à léger)',
        value: 'Q2_gabarit_standard',
      },
      {
        text: '90kg ou plus (gabarit lourd)',
        value: 'Q2_gabarit_lourd',
      },
    ],
  },
  {
    id: 3,
    text: 'Tu recherches principalement une roue pour quel type d’usage ?',
    options: [
      {
        text: 'Trajets utilitaires (travail, courses, déplacements quotidiens)',
        value: 'Q3_utilitaire',
      },
      {
        text: 'Sorties loisirs (balades du week-end, tout-terrain, sensations de glisse)',
        value: 'Q3_loisir',
      },
      {
        text: 'Un peu des deux : je cherche une roue pour tout faire',
        value: 'Q3_tout',
      },
    ],
  },
  {
    id: 4,
    text: 'Quelle distance penses-tu parcourir lors de tes trajets habituels ?',
    options: [
      {
        text: 'Petits trajets ou très courtes balades (-10km)',
        value: 'Q4_distance1_courte',
      },
      {
        text: 'Trajets réguliers de moyenne distance (10-30km)',
        value: 'Q4_distance2_moyenne',
      },
      {
        text: 'Longues distances régulières (30-60km)',
        value: 'Q4_distance3_longue',
      },
      {
        text: 'Très longues distances (+60km)',
        value: 'Q4_distance4_tres_longue',
      },
    ],
  },
  {
    id: 5,
    text: 'Quel sera ton rapport aux escaliers et aux transports en commun ?',
    options: [
      {
        text: 'Intensif (escaliers, bus, etc.), je dois porter la roue (max 15kg)',
        value: 'Q5_portage_intensif',
      },
      {
        text: 'Modéré, il y a quelques marches à l’occasion (max 25kg)',
        value: 'Q5_portage_modere',
      },
      {
        text: 'Quasiment jamais (poids non limitant)',
        value: 'Q5_portage_rare',
      },
    ],
  },
  {
    id: 6,
    text: 'Sur quel type de terrain vas-tu majoritairement évoluer ?',
    options: [
      {
        text: 'Propre : pistes cyclables, chemins lisses et rues apaisées',
        value: 'Q6_terrain1_lisse',
      },
      {
        text: 'Varié : routes d’agglomération, chaussée dégradés et pavés',
        value: 'Q6_terrain2_chaussee',
      },
      {
        text: 'Tout-terrain : forêts, sentiers et reliefs accidentés',
        value: 'Q6_terrain3_offroad',
      },
    ],
  },
  {
    id: 7,
    text: 'Si tu penses à tes sorties loisirs, qu’est-ce qui te fait vibrer ?',
    options: [
      {
        text: 'Offroad : franchissement, hors-piste, jouer avec le relief et les bosses',
        value: 'Q7_style_offroad',
      },
      {
        text: 'Vitesse : accélérations franches sur l’asphalte et trajectoire acérée',
        value: 'Q7_style_vitesse',
      },
      {
        text: 'Endurance : enchaîner les kilomètres autant que la batterie le permet',
        value: 'Q7_style_endurance',
      },
      {
        text: 'Découverte : je veux surtout voir ce que la gyroroue me réserve',
        value: 'Q7_style_decouverte',
      },
    ],
  },
  {
    id: 8,
    text: 'Quelle importance accordes-tu à la suspension ?',
    options: [
      {
        text: 'Secondaire : je privilégie la simplicité, la compacité et un coût réduit',
        value: 'Q8_suspension_sans',
      },
      {
        text: 'Prioritaire : indispensable pour mon confort face aux pièges de la route',
        value: 'Q8_suspension_avec',
      },
    ],
  },
  {
    id: 9,
    text: 'Quel est ton budget maximal pour cet achat ?',
    options: [
      {
        text: 'Serré : cible l’occasion ou l’entrée de gamme (-1500€)',
        value: 'Q9_budget1_serre',
      },
      {
        text: 'Intermédiaire : le cœur du marché (1500-3000€)',
        value: 'Q9_budget2_moyen',
      },
      {
        text: 'Premium / No Limit : orienté performance (+3000€)',
        value: 'Q9_budget3_premium',
      },
    ],
  },
  {
    id: 10,
    text: 'En cas de compromis, quelle est ta priorité absolue ?',
    options: [
      {
        text: 'Le prix : je ne veux surtout pas dépasser mon budget',
        value: 'Q10_priorite_budget',
      },
      {
        text: "Le poids : avec l'encombrement, c'est une limite prioritaire",
        value: 'Q10_priorite_poids',
      },
      {
        text: "L'usage : je veux la machine idéale pour mes trajets/sensations",
        value: 'Q10_priorite_usage',
      },
    ],
  },
]
