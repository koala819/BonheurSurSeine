export interface ProfileData {
  id: string
  title: string
  subtitle: string
  description: string
  wheels: string[]
}

export const PROFILES: Record<string, ProfileData> = {
  P0_reveur: {
    id: 'P0_reveur',
    title: '💭 Le Doux Rêveur',
    subtitle: "Même en rêve, cette roue n'existe pas…",
    description:
      "Tu recherches une roue ultra-légère avec une autonomie géante ? Une machine de course au prix d'une entrée de gamme ? Cela n'existe pas (encore). Il faut impérativement revoir tes attentes, ton budget ou tes contraintes.",
    wheels: ['🦄 Licorne', '🐑 Mouton à 5 pattes', '🪄 Abracadabra'],
  },
  P1_debutant_malin: {
    id: 'P1_debutant_malin',
    title: '🎓 Le Débutant Malin',
    subtitle: "Roue d'apprentissage et d'occasion",
    description:
      "Pour débuter sans stress, le choix le plus pragmatique est une roue d'occasion, pas trop lourde et réputée robuste. Cela évite le déchirement d'abîmer une machine neuve lors de l'apprentissage. Privilégie des valeurs sûres faciles à revendre une fois que tu auras progressé.",
    wheels: [
      'Inmotion V8/V8F/V10F (occasion)',
      'Kingsong KS-16S/16X (occasion)',
      'Kingsong KS-18L/18XL (occasion)',
    ],
  },
  P2_1_ultra_leger: {
    id: 'P2_1_ultra_leger',
    title: "🚉 L'Ultra Léger",
    subtitle: 'Légèreté, compacité et discrétion non négociable',
    description:
      "Ta priorité absolue est la légèreté et la praticité afin de discrètement combiner la roue avec d'autres moyens de transport (métro, bus, train) et/ou de monter des escaliers/escalators. La suspension est donc volontairement exclue pour préserver sa compacité et son poids.",
    wheels: ['Begode Mten4', 'Kingsong 14D', 'Inmotion V8S'],
  },
  P2_2_agile: {
    id: 'P2_2_agile',
    title: "⚙️ L'Agile",
    subtitle: 'Compromis compacité et autonomie (max 25 kg)',
    description:
      "Tu fais tes trajets avec ta roue, mais tu souhaites conserver une roue compacte et discrète. Il te faut une roue très agile. Même si tu dois régulièrement soulever ta roue, tu acceptes un poids allant jusqu'à 25 kg en échange d'une autonomie accrue.",
    wheels: ['Kingsong 16S', 'Inmotion V10F', 'Kingsong 18L'],
  },
  P2_3_citadin_exigeant: {
    id: 'P2_3_citadin_exigeant',
    title: '🏙️ Le Citadin Exigeant',
    subtitle: 'Compacité et confort',
    description:
      "Tu dois régulièrement soulever ta roue mais tu souhaites bénéficier d'un meilleur confort. La suspension reste légère et la machine conserve un gabarit raisonnable.",
    wheels: ['Inmotion V9', 'Kingsong S18', 'Nosfet Aero'],
  },
  P2_4_regulier: {
    id: 'P2_4_regulier',
    title: '⏱️ Le Régulier',
    subtitle: 'Confort et polyvalence au quotidien',
    description:
      'Tu utilises ta roue régulièrement pour aller travailler ou te déplacer sur de moyennes distances. La suspension devient ici un véritable atout pour amortir les chocs, réduire la fatigue et rouler sereinement aux côtés des autres usagers.',
    wheels: ['Kingsong S16 Pro', 'Nosfet Aeon', 'Inmotion V12S', 'Begode F16'],
  },
  P2_5_commuter: {
    id: 'P2_5_commuter',
    title: '⚡ Le Commuter',
    subtitle: 'Endurance et sécurité sur route',
    description:
      'Tu parcours quotidiennement de grandes distances (parfois +40 km), souvent sur des axes routiers dégradés ou là où les pistes cyclables sont inexistantes. Il te faut une machine robuste, confortable et rassurante pour affronter la route avec confiance.',
    wheels: ['Leaperkim Patton-S', 'Nosfet Xeno', 'Kingsong S19'],
  },
  P2_6_commuterXXL: {
    id: 'P2_6_commuterXXL',
    title: '🚀 Le Super Commuter',
    subtitle: 'Longues distances à rythme soutenu',
    description:
      "Tu effectues de longs trajets quotidiens à un rythme soutenu. Tu as besoin d'une machine fiable, stable, dotée d'un grand diamètre de roue, d'une excellente autonomie et capable d'affronter sereinement la route sur la durée.",
    wheels: ['Leaperkim Lynx-S', 'Begode F18'],
  },
  P3_indecis: {
    id: 'P3_indecis',
    title: '🤔 L’Indécis',
    subtitle: 'Mes coups de cœur pour ne plus douter…',
    description:
      "Tu ne sais pas précisément quel sera ton usage principal, ou tu découvres encore la gyroroue. Plutôt que de choisir une machine trop spécialisée, privilégie une roue capable de t'accompagner dans tes premiers trajets, tes balades et dans la découverte du bonheur d'aller rouler.",
    wheels: ['Kingsong 16S Pro', 'Nosfet Aero', 'Nosfet Xeno'],
  },
  P4_0_occasionnel: {
    id: 'P4_0_occasionnel',
    title: '☀️ L’Occasionnel',
    subtitle: 'Simplicité et fiabilité sans complication',
    description:
      "Tu cherches une roue simple pour des déplacements occasionnels ou de petites balades dominicales sans chichi. Pas besoin d'un monstre de puissance : tu privilégies des modèles sûrs et faciles à prendre en main.",
    wheels: ['Kingsong 16S', 'Inmotion V10F', 'Kingsong 18XL'],
  },
  P4_1_voltigeur: {
    id: 'P4_1_voltigeur',
    title: '🌲 Le Voltigeur',
    subtitle: 'Off-road, bosses et franchissements',
    description:
      "Pour toi, la gyroroue est synonyme d'acrobaties, de hors-piste, de bosses et de sauts. Une excellente suspension est indispensable pour absorber les chocs et survoler les obstacles sur les terrains les plus accidentés.",
    wheels: ['Kingsong S22', 'Nosfet Apex', 'Begode Extreme'],
  },
  P4_2_pistard: {
    id: 'P4_2_pistard',
    title: '🏎️ Le Pistard',
    subtitle: 'Performance et précision sur asphalte',
    description:
      "Tu recherches l'adrénaline, les accélérations franches et une tenue impériale à haute vitesse. Tu privilégies les machines les plus performantes du marché.",
    wheels: ['Begode Blitz', 'Begode Race', 'Inmotion P6', 'Nosfet Apex'],
  },
  P4_3_voyageur: {
    id: 'P4_3_voyageur',
    title: '🧭 Le Voyageur',
    subtitle: 'Longues randonnées',
    description:
      'Ton plaisir est de partir en randonnée en toute liberté. Tu privilégies une excellente autonomie et un confort premium pour enchaîner les kilomètres sans fatigue.',
    wheels: ['Begode Falcon Pro', 'Nosfet Xeno', 'Leaperkim Lynx-S'],
  },
  P4_4_grand_voyageur: {
    id: 'P4_4_grand_voyageur',
    title: '🗺️ Le Grand Voyageur',
    subtitle: 'Roadtrips et autonomie sans compromis',
    description:
      "Tu veux parcourir des distances exceptionnelles sans te soucier de la recharge. La capacité batterie et la stabilité routière passent avant toute considération de poids ou d'encombrement.",
    wheels: ['Leaperkim Sherman-L', 'Kingsong F22', 'Leaperkim Oryx'],
  },
}

export type ProfileKey = keyof typeof PROFILES
