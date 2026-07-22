export interface ProfileData {
  id: string
  title: string
  subtitle: string
  description: string
  wheels: string[]
}

export const PROFILES: Record<string, ProfileData> = {
  P1_debutant_occasion: {
    id: 'P1_debutant_occasion',
    title: '🎓 Le Débutant Malin',
    subtitle: "Roue d'apprentissage et d'occasion",
    description:
      "Pour débuter sans stress, le choix le plus pragmatique est une roue d'occasion, pas trop lourde et réputée robuste. Cela évite le déchirement d'abîmer une machine neuve lors de l'apprentissage. Privilégie des valeurs sûres faciles à revendre une fois que tu auras progressé.",
    wheels: [
      'Inmotion V8F / V8S / V10F (occasion)',
      'Kingsong KS-16S / 16X (occasion)',
      'Kingsong KS-18L / 18XL (occasion)',
    ],
  },
  P2_1_multimodal_ultraleger: {
    id: 'P2_1_multimodal_ultraleger',
    title: '🚆 Multimodalité Ultralégère',
    subtitle: 'Légèreté, compacité et discrétion non négociable',
    description:
      'Ta priorité absolue est la légèreté et la praticité afin de discrètement combiner la roue avec le métro, le bus, le train et des escaliers. La suspension est volontairement exclue afin de préserver la compacité et le poids.',
    wheels: ['Begode Mten4', 'Kingsong 14D', 'Inmotion V8S'],
  },
  P2_2_multimodal_classique: {
    id: 'P2_2_multimodal_classique',
    title: '🚇 Multimodalité Classique',
    subtitle: 'Compromis compacité / autonomie (max 25 kg)',
    description:
      "Tu dois régulièrement soulever ta roue mais tu parcours parfois de plus longues distances. Tu acceptes un poids allant jusqu'à environ 25 kg en échange d'une autonomie accrue.",
    wheels: ['Kingsong 16S', 'Inmotion V10F', 'Kingsong 18XL'],
  },
  P2_3_multimodal_suspendue: {
    id: 'P2_3_multimodal_suspendue',
    title: '🚉 Multimodalité Suspendue',
    subtitle: 'Compacité et confort',
    description:
      "Tu dois régulièrement soulever ta roue mais tu souhaites bénéficier d'un meilleur confort. La suspension reste légère et la machine conserve un gabarit raisonnable.",
    wheels: ['Inmotion V9', 'Kingsong S18', 'Nosfet Aero'],
  },
  P3_occasionnel_court: {
    id: 'P3_occasionnel_court',
    title: '🚶 L’Occasionnel',
    subtitle: 'Simplicité et fiabilité sans complication',
    description:
      "Tu cherches une roue simple pour des déplacements occasionnels ou de petites balades dominicales sans chichi. Pas besoin d'un monstre de puissance : tu privilégies des modèles sûrs et faciles à prendre en main.",
    wheels: ['Kingsong 16S', 'Inmotion V10F', 'Kingsong 18XL'],
  },
  P4_commuter_regulier: {
    id: 'P4_commuter_regulier',
    title: '🚴 Le Commuter Régulier',
    subtitle: 'Confort et polyvalence au quotidien',
    description:
      'Tu utilises ta roue régulièrement pour aller travailler ou te déplacer sur de moyennes distances. La suspension devient ici un véritable atout pour amortir les chocs, réduire la fatigue et rouler sereinement aux côtés des autres usagers.',
    wheels: [
      'Kingsong S16 Pro',
      'Nosfet Aero',
      'Nosfet Aeon',
      'Begode Falcon Pro',
      'Inmotion V12S',
      'Begode F16',
    ],
  },
  P5_super_commuter: {
    id: 'P5_super_commuter',
    title: '⚡ Le Super Commuter',
    subtitle: 'Endurance et sécurité sur route',
    description:
      'Tu parcours quotidiennement de grandes distances (parfois +40 km), souvent sur des axes routiers dégradés ou là où les pistes cyclables sont inexistantes. Il te faut une machine robuste, confortable et rassurante pour affronter la route avec confiance.',
    wheels: ['Leaperkim Patton-S', 'Nosfet Xeno', 'Kingsong S19'],
  },
  P6_super_commuter_xxl: {
    id: 'P6_super_commuter_xxl',
    title: '🚀 Le Super Commuter XXL',
    subtitle: 'Longues distances à rythme soutenu',
    description:
      "Tu effectues de longs trajets quotidiens à un rythme soutenu. Tu as besoin d'une machine fiable, stable, dotée d'un grand diamètre de roue, d'une excellente autonomie et capable d'affronter sereinement la route sur la durée.",
    wheels: ['Leaperkim Lynx-S', 'Begode F18'],
  },
  P7_voltigeur: {
    id: 'P7_voltigeur',
    title: '🌲 Le Voltigeur',
    subtitle: 'Off-road, bosses et franchissements',
    description:
      "Pour toi, la gyroroue est synonyme d'acrobaties, de hors-piste, de bosses et de sauts. Une excellente suspension est indispensable pour absorber les chocs et survoler les obstacles sur les terrains les plus accidentés.",
    wheels: ['Kingsong S22', 'Nosfet Apex', 'Begode Extreme'],
  },
  P8_pistard: {
    id: 'P8_pistard',
    title: '🏎️ Le Pistard',
    subtitle: 'Performance et précision sur asphalte',
    description:
      "Tu recherches l'adrénaline, les accélérations franches et une tenue impériale à haute vitesse. Tu privilégies les machines les plus performantes du marché.",
    wheels: ['Begode Blitz', 'Begode Race', 'Inmotion P6', 'Nosfet Apex'],
  },
  P9_1_voyageur: {
    id: 'P9_1_voyageur',
    title: '🗺️ Le Voyageur',
    subtitle: 'Longues randonnées',
    description:
      'Ton plaisir est de partir en randonnée en toute liberté. Tu privilégies une excellente autonomie et un confort premium pour enchaîner les kilomètres sans fatigue.',
    wheels: ['Nosfet Xeno', 'Leaperkim Lynx-S'],
  },
  P9_2_grand_voyageur: {
    id: 'P9_2_grand_voyageur',
    title: '🌍 Le Grand Voyageur',
    subtitle: 'Roadtrips et autonomie sans compromis',
    description:
      "Tu veux parcourir des distances exceptionnelles sans te soucier de la recharge. La capacité batterie et la stabilité routière passent avant toute considération de poids ou d'encombrement.",
    wheels: ['Leaperkim Sherman-L', 'Begode F22', 'Leaperkim Oryx'],
  },
  P10_indecis: {
    id: 'P10_indecis',
    title: '🤔 L’Indécis',
    subtitle: 'Mes coups de cœurs pour ne plus douter…',
    description:
      "Tu découvres encore la gyroroue et tu ne sais pas précisément quel sera ton usage principal. Plutôt que de choisir une machine trop spécialisée, privilégie une roue capable de t'accompagner dans tes premiers trajets, tes balades et dans la découverte du bonheur d'aller rouler.",
    wheels: ['Kingsong 16S Pro', 'Nosfet Aero', 'Nosfet Xeno'],
  },
}
