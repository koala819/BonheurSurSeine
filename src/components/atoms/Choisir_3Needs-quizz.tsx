'use client'

import { useState } from 'react'

// Définition des 9 profils cibles (conclusions)
const PROFILES = {
  P1_debutant_occasion: {
    title: '🎓 Le Débutant Malin',
    subtitle: "Roue d'apprentissage & d'occasion",
    description:
      "Pour débuter sans stress, le choix le plus pragmatique est une roue d'occasion, pas trop lourde et réputée robuste. Cela éviter le déchirement d'abîmer une machine neuve lors de l'apprentissage. Privilégie des valeurs sûres très faciles à revendre une fois que tu auras progressé.",
    wheels: [
      'Inmotion V8F / V8S / V10F (occasion)',
      'Kingsong KS-16S / 16X (occasion)',
      'Kingsong KS-18L / 18XL (occasion)',
    ],
  },
  P2_multimodal_court: {
    title: '🚆 Le Multimodal Léger',
    subtitle: 'Légèreté et compacité non négociables (poids plume)',
    description:
      "Ta priorité absolue est de combiner la roue avec d'autres moyens de transport (métro, bus, train, coffre de voiture) ou de monter des escaliers/escalators. La suspension est donc volontairement exclue pour préserver sa compacité et maintenir la roue sous la barre des 15kg.",
    wheels: ['Kingsong KS-14D', 'Inmotion V8S', 'Begode Mten4 / Mten5'],
  },
  P3_multimodal_long: {
    title: '🚇 Le Multimodal Grande Distance',
    subtitle: 'Le bon compromis compacité / autonomie (Max 25 kg)',
    description:
      "Tu dois régulièrement soulever ta roue mais tu parcoures parfois de plus longues distances. Tu acceptes un poids allant jusqu'à 25 kg en échange d'un meilleur confort ou d'une autonomie accrue. La suspension reste légère et optionnelle.",
    wheels: [
      'Inmotion V10F',
      'Kingsong KS-18XL',
      'Kingsong S18 (suspendue légère)',
      'Nosfe Aero (suspendue légère)',
    ],
  },
  P4_occasionnel_court: {
    title: '🚶 Le Trajet Occasionnel et/ou Court',
    subtitle: "Fiabilité éprouvée et simplicité d'utilisation",
    description:
      "Tu cherches une roue pour des petits déplacements quotidiens ou de mini balades dominicales sans chichi. Pas besoin d'un monstre de puissance : tu privilégies des modèles simples, sûrs, faciles à prendre en main.",
    wheels: [
      'Inmotion V10F',
      'Kingsong KS-16S',
      'Kingsong S18 (Pour le confort)',
    ],
  },
  P5_commuter_regulier: {
    title: '🚴 Le Trajet Régulier (quotidien)',
    subtitle: 'Confort, sécurité et réactivité pour la ville',
    description:
      'Tu utilises ta gyroroue très régulièrement pour aller travailler ou te déplacer sur de moyennes distances. Une suspension moderne de taille moyenne est ici un excellent atout pour gommer les pavés, réduire la fatigue articulaire et rouler sereinement aux côtés des voitures.',
    wheels: ['Kingsong KS-S16 Pro', 'Begode Aeon', 'Begode Aero'],
  },
  P6_super_commuter: {
    title: '⚡ Le Trajet Long Quotidien',
    subtitle: "Le 'Super-Commuter' taillé pour affronter la route",
    description:
      "Tu parcoures de grandes distances chaque jour (parfois plus de 30 ou 40 km) sur des axes rapides ou dégradés. Il te faut une machine extrêmement fiable, dotée d'une gestion thermique irréprochable, d'une excellente suspension et d'un couple moteur rassurant pour t'insérer partout.",
    wheels: [
      'Leaperkim Patton-S',
      'Begode Xeno',
      'Leaperkim Lynx-S',
      'Kingsong S19',
    ],
  },
  P7_loisir_suspendu: {
    title: '🌲 Le Baroudeur Tout-Terrain',
    subtitle: 'Franchissement, amorti et sorties en forêt (Offroad)',
    description:
      "Pour toi, la gyroroue est synonyme d'aventure sauvage, de sentiers de terre et de sauts de racines. Une suspension de premier ordre à grand débattement est indispensable pour garantir un contrôle optimal dans le relief et survoler les obstacles.",
    wheels: [
      'Begode Extreme',
      'Kingsong S22 Pro',
      'Leaperkim Lynx-S',
      'Begode Apex',
    ],
  },
  P8_loisir_vitesse: {
    title: '🏎️ Le Routard Sportif',
    subtitle: 'Stabilité à haute vitesse, rigidité et accélérations',
    description:
      "Tu recherches l'adrénaline sur l'asphalte, la réactivité des accélérations et une tenue impériale à vitesse élevée. Il te faut une tension élevée (High Voltage), des pads ergonomiques parfaitement ajustés et un châssis ultra-rigide.",
    wheels: ['Begode Blitz / Race', 'Inmotion P6', 'Begode Apex'],
  },
  P9_loisir_endurance: {
    title: '🗺️ Le Voyageur au Long Cours',
    subtitle: 'Autonomie démesurée pour de longues heures de roadtrip',
    description:
      'Ton plaisir ultime est de partir rouler toute la journée sans jamais surveiller ta jauge de batterie. Tu privilégies une capacité en Wh gigantesque et une stabilité rassurante, quitte à accepter une roue lourde qui ne quitte presque jamais le sol.',
    wheels: ['Leaperkim Sherman-L', 'Leaperkim Sherman S'],
  },
}

// Les 9 questions croisant usages, contraintes physiques et budget
const QUESTIONS = [
  {
    id: 1,
    text: 'Quel est ton niveau actuel en gyroroue ?',
    options: [
      {
        text: 'Grand débutant (je cherche à apprendre et faire mes premiers pas)',
        profile: 'Q1_debutant_occasion',
      },
      {
        text: "Déjà initié ou pratiquant régulier (je veux évoluer ou m'équiper à long terme)",
        profile: 'Q1_pratiquant',
      },
    ],
  },
  {
    id: 2,
    text: 'Tu recherches une roue principalement pour :',
    options: [
      {
        text: 'Mes trajets obligatoires quotidiens (travail, obligations)',
        profile: 'Q2_utilitaire',
      },
      {
        text: 'Mes loisirs, mes sorties du week-end et le plaisir de glisse',
        profile: 'Q2_loisir',
      },
    ],
  },
  {
    id: 3,
    text: 'À quelle fréquence et sur quelle distance vas-tu rouler ?',
    options: [
      {
        text: 'Occasionnellement ou pour de courtes distances (< 10 km AR)',
        profile: 'Q3_distance_court',
      },
      {
        text: 'Régulièrement sur des distances moyennes (10 à 30 km AR)',
        profile: 'Q3_distance_moyen',
      },
      {
        text: 'Quotidiennement sur de longues distances (> 30 km AR)',
        profile: 'Q3_distance_long',
      },
    ],
  },
  {
    id: 4,
    text: 'Quel est ton rapport aux escaliers et aux transports (manipulation à la main) ?',
    options: [
      {
        text: "Intensif : je prends souvent le train/métro/bus, j'ai des escaliers obligatoires (poids plume exigé < 15 kg)",
        profile: 'Q4_léger',
      },
      {
        text: "Modéré : quelques marches de temps en temps ou un coffre de voiture (poids toléré jusqu'à 25kg)",
        profile: 'Q4_moyen',
      },
      {
        text: "Quasiment jamais : je roule de mon point de départ à mon point d'arrivée (poids non limitant)",
        profile: 'Q4_lourd',
      },
    ],
  },
  {
    id: 5,
    text: 'Sur quel type de terrain vas-tu majoritairement évoluer ?',
    options: [
      {
        text: 'Pistes cyclables lisses et petites rues appaisées de centre-ville',
        profile: 'Q5_lisse',
      },
      {
        text: "Chaussée partagée, routes d'agglomération",
        profile: 'Q5_chaussée',
      },
      {
        text: 'Chemins de terre, forêts, sentiers accidentés',
        profile: 'Q5_offroad',
      },
    ],
  },
  {
    id: 6,
    text: "Quand tu penses à tes sorties loisir, qu'est-ce qui te fait vibrer ?",
    options: [
      {
        text: 'Le franchissement, les sauts, jouer avec le relief et les bosses',
        profile: 'Q6_loisir_suspendu',
      },
      {
        text: "La vitesse, l'accélération franche et la précision de trajectoire sur route",
        profile: 'Q6_loisir_vitesse',
      },
      {
        text: 'Enchaîner les kilomètres autant la batterie le permettra',
        profile: 'Q6_loisir_endurance',
      },
    ],
  },
  {
    id: 7,
    text: 'Quelle importance accordes-tu à la suspension ?',
    options: [
      {
        text: 'Peu importante : je privilégie la simplicité mécanique, la compacité et le coût réduit',
        profile: 'Q7_sans_suspension',
      },
      {
        text: 'Très importante : pour préserver mes articulations, mon confort et ma sécurité',
        profile: 'Q7_avec_suspension',
      },
    ],
  },
  {
    id: 8,
    text: 'Côté entretien et réglages mécaniques :',
    options: [
      {
        text: 'Zéro prise de tête : je veux un engin simple qui demande le moins de maintenance possible',
        profile: 'Q8_entretien_simple',
      },
      {
        text: "Pas de problème : je peux gérer la pression d'un amortisseur ou les vérifications de base",
        profile: 'Q8_entretien_bricoleur',
      },
    ],
  },
  {
    id: 9,
    text: 'Quel est ton budget maximal ?',
    options: [
      {
        text: "Budget serré (moins de 1500 € ou marché de l'occasion)",
        profile: 'Q9_budget_serré',
      },
      {
        text: 'Budget intermédiaire (1500 € à 2500 €)',
        profile: 'Q9_budget_moyen',
      },
      {
        text: 'Budget premium (plus de 2500 € pour le meilleur matériel)',
        profile: 'Q9_budget_premium',
      },
    ],
  },
]

export const QuizBesoins = () => {
  const [currentStep, setCurrentStep] = useState(0) // 0 = Accueil, 1-9 = Questions
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleAnswer = (optionProfile: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionProfile }))
    setCurrentStep((prev) => prev + 1)
  }

  const resetQuiz = () => {
    setAnswers({})
    setCurrentStep(1)
  }

  // Algorithme d'aiguillage d'experts exploitant l'ensemble des 9 variables
  const calculateResult = (): {
    key: keyof typeof PROFILES
    showWarning: boolean
  } => {
    const q1 = answers[1] // Niveau
    const q2 = answers[2] // Objectif (Utilitaire vs Loisir)
    const q3 = answers[3] // Distance/Fréquence
    const q4 = answers[4] // Portage (Multimodal)
    const q5 = answers[5] // Terrain
    const q6 = answers[6] // Sensations loisir
    const q7 = answers[7] // Suspension (Impacte le confort & budget)
    const q8 = answers[8] // Entretien (Impacte la complexité technique)
    const q9 = answers[9] // Budget

    // RÈGLE SÉCURITÉ BUDGET SERRÉ < 1500€
    if (q9 === 'Q9_budget_serré') {
      if (q4 === 'Q4_léger')
        return { key: 'P2_multimodal_court', showWarning: false }
      if (q3 === 'Q3_distance_court')
        return { key: 'P4_occasionnel_court', showWarning: false }
      return { key: 'P1_debutant_occasion', showWarning: false }
    }

    // RÈGLE 1 : Le Débutant Malin
    if (q1 === 'Q1_debutant_occasion' && q9 !== 'Q9_budget_premium') {
      return { key: 'P1_debutant_occasion', showWarning: false }
    }

    // Garder en mémoire s'il s'agit d'un débutant ambitieux
    const isAmbitiousBeginner =
      q1 === 'Q1_debutant_occasion' && q9 === 'Q9_budget_premium'

    // RÈGLE 2 : Multimodal Court (Légèreté absolue, pas de suspension par défaut)
    if (q4 === 'Q4_léger') {
      return { key: 'P2_multimodal_court', showWarning: isAmbitiousBeginner }
    }

    // RÈGLE 3 : Multimodal Long (Poids max 25kg)
    if (
      q4 === 'Q4_lourd' &&
      (q3 === 'Q3_distance_moyen' || q3 === 'Q3_distance_long')
    ) {
      return { key: 'P3_multimodal_long', showWarning: isAmbitiousBeginner }
    }

    // RÈGLE D'EXCEPTION SANS SUSPENSION (Q7) :
    // Si l'utilisateur veut du régulier ou long trajet urbain, mais refuse absolument la suspension (q7)
    // ou refuse l'entretien d'une suspension (q8 === 'simple' sur un budget non premium) :
    // On l'oriente vers le Multimodal Long (caractérisé par d'excellentes roues non-suspendues comme la KS-18XL ou V10F)
    const refuseSuspension =
      q7 === 'Q7_sans_suspension' ||
      (q8 === 'Q8_entretien_simple' && q9 !== 'Q9_budget_premium')

    // RÈGLE 4 : Trajet occasionnel ou court
    if (q2 === 'utilitaire' && q3 === 'court') {
      return { key: 'P4_occasionnel_court', showWarning: isAmbitiousBeginner }
    }

    // RÈGLE 5 : Trajet régulier (Vélotaf moyen)
    if (q2 === 'Q2_utilitaire' && q3 === 'Q3_distance_moyen') {
      if (refuseSuspension) {
        return { key: 'P3_multimodal_long', showWarning: isAmbitiousBeginner } // Rapatriement sur une grande non-suspendue confortable
      }
      return { key: 'P5_commuter_regulier', showWarning: isAmbitiousBeginner }
    }

    // RÈGLE 6 : Trajet long quotidien (Super-Commuter)
    if (q2 === 'Q2_utilitaire' && q3 === 'Q3_distance_long') {
      if (refuseSuspension) {
        return { key: 'P3_multimodal_long', showWarning: isAmbitiousBeginner }
      }
      return { key: 'P6_super_commuter', showWarning: isAmbitiousBeginner }
    }

    // LOGIQUE LOISIR (Profils 7, 8, 9)
    if (q2 === 'Q2_loisir') {
      // Pour le tout-terrain (Loisir Suspendu), si l'utilisateur refuse absolument l'entretien d'une suspension (q8)
      // mais veut rouler offroad, on le redirige vers le Routard Sportif ou Voyageur s'ils sont moins exigeants en entretien d'amortisseurs pneumatiques complexes
      if (q6 === 'Q6_loisir_suspendu' || q5 === 'Q5_offroad') {
        if (q7 === 'Q7_sans_suspension') {
          return { key: 'P3_multimodal_long', showWarning: isAmbitiousBeginner } // Une roue passe-partout sans amortisseur
        }
        return { key: 'P7_loisir_suspendu', showWarning: isAmbitiousBeginner }
      }
      if (q6 === 'Q6_loisir_vitesse') {
        return { key: 'P8_loisir_vitesse', showWarning: isAmbitiousBeginner }
      }
      if (q6 === 'Q6_loisir_endurance') {
        return { key: 'P9_loisir_endurance', showWarning: isAmbitiousBeginner }
      }
    }

    // Chute par défaut (si aucune règle stricte n'est validée)
    return { key: 'P5_commuter_regulier', showWarning: isAmbitiousBeginner }
  }

  const result = currentStep > QUESTIONS.length ? calculateResult() : null
  const resultData = result ? PROFILES[result.key] : null

  return (
    <div className="scroll-mt-56 mb-6 py-3 px-6 border border-emerald-500/30 rounded-xl bg-slate-50 dark:bg-gray-800/50 shadow-inner">
      {/* Étape 0 : Accueil du test */}
      {currentStep === 0 && (
        <div className="text-center py-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            <span className="text-4xl">🎯</span> Découvre ton profil&nbsp;!
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4 max-w-md mx-auto">
            Réponds aux questions pour analyser tes contraintes, identifier tes
            besoins, cibler ton usage et découvrir les gyroroues les plus
            recommandées.
          </p>
          <button
            onClick={() => setCurrentStep(1)}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-md transition-all active:scale-95"
          >
            Commencer le test
          </button>
        </div>
      )}

      {/* Étapes 1 à 9 : Questions */}
      {currentStep >= 1 && currentStep <= QUESTIONS.length && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Question {currentStep} sur {QUESTIONS.length}
            </span>
            <div className="w-1/2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${(currentStep / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
            {QUESTIONS[currentStep - 1].text}
          </h4>

          <div className="space-y-2">
            {QUESTIONS[currentStep - 1].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.profile)}
                className="w-full text-left p-3.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-150 text-sm md:text-base font-medium"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Écran des Résultats */}
      {currentStep > QUESTIONS.length && resultData && (
        <div className="py-2 animate-fade-in">
          <div className="text-center mb-1">
            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full">
              Ton Profil
            </span>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mt-2">
              {resultData.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic mt-0.5">
              {resultData.subtitle}
            </p>
          </div>

          {/* Encart Débutant Ambitieux : Conseil de sécurité bienveillant */}
          {result?.showWarning && (
            <div className="mb-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
              💡 <strong>Le conseil du pro :</strong> Même si ton usage à moyen
              terme nécessite une roue performante et que tu disposes du budget,
              je recommande vivement de faire tes premières armes (quelques
              semaines d&apos;apprentissage) sur une roue d&apos;occasion moins
              chère pour assimiler la technique sans craindre les chutes
              inévitables du début&nbsp;!
            </div>
          )}

          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700/60 p-4 rounded-lg border border-gray-100 dark:border-gray-800 text-justify shadow-sm mb-6 leading-relaxed">
            {resultData.description}
          </p>

          <div className="mb-2">
            <h4 className="text-sm font-bold tracking-wide uppercase text-gray-500 dark:text-gray-400 text-center mb-3">
              🎯 Exemples de modèles adaptés :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {resultData.wheels.map((wheel, index) => (
                <div
                  key={index}
                  className="p-3 bg-emerald-600 text-white text-center font-bold rounded-lg shadow-sm hover:scale-[1.02] transition-transform text-sm md:text-base"
                >
                  {wheel}
                </div>
              ))}
            </div>
          </div>

          {/* Mention de mise à jour de la sélection */}
          <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-4 italic">
            Sélection mise à jour en juillet 2026 selon l&apos;état actuel du
            marché.
          </p>

          <div className="text-center border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
            <button
              onClick={resetQuiz}
              className="text-xs text-gray-500 dark:text-gray-400 underline hover:text-emerald-600 transition-colors"
            >
              Refaire le test 🔄
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
