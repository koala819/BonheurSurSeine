'use client'

import { useState } from 'react'

// Définition des 9 profils cibles (conclusions)
const PROFILES = {
  P1_debutant_occasion: {
    title: '🎓 Le Débutant Malin',
    subtitle: "Roue d'apprentissage & d'occasion",
    description:
      "Pour débuter sans stress, le choix le plus pragmatique est une roue d'occasion, pas trop lourde et réputée robuste. Cela évite le déchirement d'abîmer une machine neuve lors de l'apprentissage. Privilégie des valeurs sûres faciles à revendre une fois que tu auras progressé.",
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
    wheels: ['Begode Mten4', 'Kingsong 14D', 'Inmotion V8S', 'Kingsong 16S'],
  },
  P3_multimodal_long: {
    title: '🚇 Le Multimodal XXL',
    subtitle: 'Compromis compacité / confort / autonomie (max 25 kg)',
    description:
      "Tu dois régulièrement soulever ta roue mais tu parcoures parfois de plus longues distances. Tu acceptes un poids allant jusqu'à 25 kg en échange d'un meilleur confort ou d'une autonomie accrue. La suspension reste légère et optionnelle.",
    wheels: [
      'Inmotion V10F',
      'Kingsong 18XL',
      'Inmotion V9 (suspendue légère)',
      'Kingsong S18 (suspendue légère)',
      'Nosfet Aero (suspendue légère)',
    ],
  },
  P4_occasionnel_court: {
    title: '🚶 Trajet Occasionnel',
    subtitle: "Fiabilité éprouvée et simplicité d'utilisation",
    description:
      "Tu cherches une roue pour des petits déplacements occasionnels ou de mini balades dominicales sans chichi. Pas besoin d'un monstre de puissance : tu privilégies des modèles simples, sûrs, faciles à prendre en main.",
    wheels: ['Inmotion V10F', 'Kingsong 16S', 'Inmotion V9 (suspendue légère)'],
  },
  P5_commuter_regulier: {
    title: '🚴 Trajet Quotidien',
    subtitle: 'Confort et réactivité pour la ville',
    description:
      'Tu utilises ta roue régulièrement pour aller travailler ou te déplacer sur de moyennes distances. La suspension est ici un atout pour gommer les pavés, réduire la fatigue et rouler sereinement aux côtés des autres usagers.',
    wheels: ['Nosfet Aero', 'Nosfet Aeon', 'Kingsong S16 Pro'],
  },
  P6_super_commuter: {
    title: '⚡ Trajet Intensif',
    subtitle: 'Taillé pour affronter la route',
    description:
      "Tu parcoures chaque jour de grandes distances (parfois plus de 30 ou 40 km) là où il y a peu de pistes cyclables, ou parfois des axes dégradés. Il te faut une machine fiable, endurante, et  dotée d'une suspension rassurante pour t'insérer partout.",
    wheels: [
      'Leaperkim Patton-S',
      'Nosfet Xeno',
      'Leaperkim Lynx-S',
      'Kingsong S19',
    ],
  },
  P7_loisir_suspendu: {
    title: '🌲 Le Baroudeur',
    subtitle: 'Franchissement, amorti et sorties en forêt (Offroad)',
    description:
      "Pour toi, la gyroroue est synonyme d'accrobatie, de terre et de sauts. Une bonne suspension à grand débattement est indispensable te permettre d'évoluer sur ce relief et survoler les obstacles.",
    wheels: [
      'Begode Extreme',
      'Kingsong S22 Pro',
      'Leaperkim Lynx-S',
      'Nosfet Apex',
    ],
  },
  P8_loisir_vitesse: {
    title: '🏎️ Le Routard',
    subtitle: 'Stabilité à haute vitesse, rigidité et accélérations',
    description:
      "Tu recherches l'adrénaline sur l'asphalte, la réactivité des accélérations et une tenue impériale à vitesse élevée. Il te faut une tension élevée (High Voltage), des pads ergonomiques parfaitement ajustés et un châssis ultra-rigide.",
    wheels: ['Begode Blitz / Race', 'Inmotion P6', 'Nosfet Apex'],
  },
  P9_loisir_endurance: {
    title: '🗺️ Le Voyageur',
    subtitle: 'Autonomie démesurée pour de longues heures de roadtrip',
    description:
      'Ton plaisir ultime est de partir rouler toute la journée sans jamais surveiller ta jauge de batterie. Tu privilégies une capacité en Wh gigantesque et une stabilité rassurante, quitte à accepter une roue lourde qui ne quitte presque jamais le sol.',
    wheels: ['Leaperkim Sherman-L', 'Leaperkim Sherman-S'],
  },
}

// Les 9 questions croisant usages, contraintes physiques et budget
const QUESTIONS = [
  {
    id: 1,
    text: 'Quel est ton niveau actuel en gyroroue ?',
    options: [
      {
        text: 'Débutant (je cherche à apprendre et faire mes premiers pas)',
        profile: 'Q1_debutant_occasion',
      },
      {
        text: 'Déjà wheeler régulier ou occasionnel',
        profile: 'Q1_pratiquant',
      },
    ],
  },
  {
    id: 2,
    text: 'Quel est ton gabarit approximatif (tout équipé) ?',
    options: [
      {
        text: 'Moins de 90 kg',
        profile: 'Q2_gabarit_standard',
      },
      {
        text: '90 kg ou plus',
        profile: 'Q2_gabarit_lourd',
      },
    ],
  },
  {
    id: 3,
    text: 'Tu recherches une roue principalement pour :',
    options: [
      {
        text: 'Des trajets occasionnels ou quotidiens (travail, obligations)',
        profile: 'Q3_utilitaire',
      },
      {
        text: 'Mes loisirs, mes sorties du week-end et le plaisir de glisse',
        profile: 'Q3_loisir',
      },
    ],
  },
  {
    id: 4,
    text: 'À quelle fréquence et sur quelle distance vas-tu rouler ?',
    options: [
      {
        text: 'Occasionnellement ou pour de courtes distances (<10km AR)',
        profile: 'Q4_distance_court',
      },
      {
        text: 'Régulièrement sur des distances moyennes (10-30km AR)',
        profile: 'Q4_distance_moyen',
      },
      {
        text: 'Quotidiennement sur de longues distances (>30km AR)',
        profile: 'Q4_distance_long',
      },
    ],
  },
  {
    id: 5,
    text: 'Quel est ton rapport aux escaliers et aux transports (manipulation à la main) ?',
    options: [
      {
        text: "Intensif : je prends souvent le train/métro/bus, j'ai des escaliers obligatoires (poids jusqu'à 15kg)",
        profile: 'Q5_leger',
      },
      {
        text: "Modéré : quelques marches de temps en temps ou un coffre de voiture (poids toléré jusqu'à 25kg)",
        profile: 'Q5_moyen',
      },
      {
        text: "Quasiment jamais : je roule de mon point de départ à mon point d'arrivée (poids non limitant)",
        profile: 'Q5_lourd',
      },
    ],
  },
  {
    id: 6,
    text: 'Sur quel type de terrain vas-tu majoritairement évoluer ?',
    options: [
      {
        text: 'Pistes cyclables lisses et petites rues apaisées de centre-ville',
        profile: 'Q6_lisse',
      },
      {
        text: "Chaussée partagée, routes d'agglomération",
        profile: 'Q6_chaussee',
      },
      {
        text: 'Chemins de terre, forêts, sentiers accidentés',
        profile: 'Q6_offroad',
      },
    ],
  },
  {
    id: 7,
    text: "Quand tu penses à tes sorties loisir, qu'est-ce qui te fait vibrer ?",
    options: [
      {
        text: 'Le franchissement, les sauts, jouer avec le relief et les bosses',
        profile: 'Q7_loisir_suspendu',
      },
      {
        text: "La vitesse, l'accélération franche et la précision de trajectoire sur route",
        profile: 'Q7_loisir_vitesse',
      },
      {
        text: 'Enchaîner les kilomètres autant que la batterie le permettra',
        profile: 'Q7_loisir_endurance',
      },
    ],
  },
  {
    id: 8,
    text: 'Quelle importance accordes-tu à la suspension ?',
    options: [
      {
        text: 'Peu importante : je privilégie la simplicité mécanique, la compacité et le coût réduit',
        profile: 'Q8_sans_suspension',
      },
      {
        text: 'Très importante : pour préserver mes articulations, mon confort et ma sécurité',
        profile: 'Q8_avec_suspension',
      },
    ],
  },
  {
    id: 9,
    text: 'Côté entretien et réglages :',
    options: [
      {
        text: 'Zéro prise de tête : je veux un engin simple avec le moins de maintenance possible',
        profile: 'Q9_entretien_simple',
      },
      {
        text: 'Pas de problème : je peux gérer les réglages ou des réparations réguliers',
        profile: 'Q9_entretien_bricoleur',
      },
    ],
  },
  {
    id: 10,
    text: 'Quel est ton budget maximal ?',
    options: [
      {
        text: 'Budget serré (moins de 1 500€)',
        profile: 'Q10_budget_serre',
      },
      {
        text: 'Budget intermédiaire (1 500€ à 2 500€)',
        profile: 'Q10_budget_moyen',
      },
      {
        text: 'Budget premium (2 500€ et plus)',
        profile: 'Q10_budget_premium',
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
  const handleBack = () => {
    if (currentStep > 1) {
      // Retour classique à la question précédente
      setCurrentStep((prev) => prev - 1)
    } else if (currentStep === 1) {
      // Retour à l'accueil (étape 0) -> on nettoie impérativement les réponses
      setAnswers({})
      setCurrentStep(0)
    }
  }

  const resetQuiz = () => {
    setAnswers({})
    setCurrentStep(1) // Relance directement à la question 1
  }

  // Algorithme d'aiguillage d'experts exploitant l'ensemble des 9 variables
  const calculateResult = (): {
    key: keyof typeof PROFILES
    showWarning_debutant: boolean
    showWarning_entretien: boolean
  } => {
    const q1 = answers[1] // Niveau (débutant-pratiquant)
    const q2 = answers[2] // Gabarit (standart-lourd)
    const q3 = answers[3] // Objectif (utilitaire-loisir)
    const q4 = answers[4] // Distance (court-moyen-long)
    const q5 = answers[5] // Contrainte Poids (leger-moyen-lourd)
    const q6 = answers[6] // Terrain (lisse-route-offroad)
    const q7 = answers[7] // Loisir (saut-vitesse-endurance)
    const q8 = answers[8] // Suspension (oui-non)
    const q9 = answers[9] // Entretien (simple-bricoleur)
    const q10 = answers[10] // Budget (serré-moyen-premium)

    const isBeginner = q1 === 'Q1_debutant_occasion'
    const heavyRider = q2 === 'Q2_gabarit_lourd'
    const showWarning_entretien = q9 === 'Q9_entretien_simple'
    const showWarning_debutant =
      isBeginner && (q10 === 'Q10_budget_premium' || q10 === 'Q10_budget_moyen')

    // Un wheeler lourd nécessite davantage de stabilité, de couple et de confort.
    const adjustProfileForBody = (
      profile: keyof typeof PROFILES,
    ): keyof typeof PROFILES => {
      if (heavyRider) {
        if (profile === 'P2_multimodal_court') {
          return 'P3_multimodal_long'
        }
        if (profile === 'P4_occasionnel_court') {
          return 'P5_commuter_regulier'
        }
      }
      return profile
    }

    /*-------------------------------------------------*/
    /* 1) CAS PARTICULIER : APPRENTISSAGE              */
    /* choix rationnel : apprendre sur roue occasion   */
    if (
      isBeginner &&
      q4 === 'Q4_distance_court' &&
      q10 !== 'Q10_budget_premium'
    ) {
      return {
        key: 'P1_debutant_occasion',
        showWarning: false,
      }
    }

    /*-------------------------------------------------*/
    /* 2) USAGE LOISIR                                 */
    if (q3 === 'Q3_loisir') {
      if (q6 === 'Q6_offroad' || q7 === 'Q7_loisir_suspendu') {
        /* refus suspension et refus maintenance =  message sensibilisation */
        if (q8 === 'Q8_sans_suspension' || q9 === 'Q9_entretien_simple') {
          return {
            key: 'P7_loisir_suspendu',
            showWarning_entretien,
          }
        }
        return {
          key: adjustProfileForBody('P7_loisir_suspendu'),
          showWarning,
        }
      }
      if (q7 === 'Q7_loisir_vitesse') {
        return {
          key: 'P8_loisir_vitesse',
          showWarning,
        }
      }
      if (q7 === 'Q7_loisir_endurance') {
        return {
          key: 'P9_loisir_endurance',
          showWarning,
        }
      }
    }

    /*-------------------------------------------------*/
    /* 3) USAGE UTILITAIRE                             */
    if (q3 === 'Q3_utilitaire') {
      if (q4 === 'Q4_distance_court') {
        if (q5 === 'Q5_leger') {
          return {
            key: adjustProfileForBody('P2_multimodal_court'),
            showWarning,
          }
        }
        return {
          key: 'P4_occasionnel_court',
          showWarning,
        }
      }
      if (q4 === 'Q4_distance_moyen') {
        if (q5 === 'Q5_leger' || q5 === 'Q5_moyen') {
          return {
            key: 'P3_multimodal_long',
            showWarning,
          }
        }
        return {
          key: 'P5_commuter_regulier',
          showWarning,
        }
      }
      if (q4 === 'Q4_distance_long') {
        if (q5 === 'Q5_leger' || q5 === 'Q5_moyen') {
          return {
            key: 'P3_multimodal_long',
            showWarning,
          }
        }
        if (q8 === 'Q8_avec_suspension') {
          if (refusesMaintenance) {
            return {
              key: adjustProfileForBody('P5_commuter_regulier'),
              showWarning,
            }
          }
          return {
            key: adjustProfileForBody('P6_super_commuter'),
            showWarning,
          }
        }
        return {
          key: 'P5_commuter_regulier',
          showWarning,
        }
      }
    }

    /*-------------------------------------------------*/
    /* 4) PAR DEFAUT                                   */
    return {
      key: 'P5_commuter_regulier',
      showWarning,
    }
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
            <div className="flex items-center gap-2">
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="p-1 px-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-sm hover:shadow active:scale-95 transition-all"
                  aria-label="Retour à la question précédente"
                >
                  ← Retour
                </button>
              )}
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Question {currentStep} sur {QUESTIONS.length}
              </span>
            </div>
            <div className="flex-1 max-w-[150px] bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
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
            {QUESTIONS[currentStep - 1].options.map((option, idx) => {
              // 1. On vérifie si cette option est celle actuellement stockée pour cette question
              const isSelected = answers[currentStep] === option.profile

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.profile)}
                  // 2. On applique les classes CSS dynamiquement selon l'état de sélection
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-150 text-sm md:text-base font-medium ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/20'
                      : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{option.text}</span>
                    {isSelected && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold ml-2">
                        ✓
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Écran des Résultats */}
      {currentStep > QUESTIONS.length && resultData && (
        <div className="py-1 animate-fade-in">
          {/* Profil */}
          <div className="text-center mb-1">
            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full">
              Ton Profil
            </span>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mt-2">
              {resultData.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium italic mt-0.5">
              {resultData.subtitle}
            </p>
          </div>
          {/* Encart WARNING */}
          {result?.showWarning_debutant && (
            <div className="mb-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
              💡 <strong>Le conseil du pro : </strong>Même si ton usage à moyen
              terme nécessite une roue performante et que tu disposes du budget,
              je recommande généralement de faire tes premières armes (quelques
              semaines d&apos;apprentissage) sur une roue d&apos;occasion moins
              chère pour assimiler la technique sans craindre d&apos;abimer une
              roue neuve&nbsp;!
            </div>
          )}
          {result?.showWarning_entretien && (
            <div className="mb-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
              💡 <strong>Le conseil du pro : </strong> Une roue nécessite un
              minimum d&apos;entretien et de suivi, d&apos;autant plus si elle
              est munie d&apos;une suspension et que tu souhaites pratiquer le
              offroad ou faire du saut&nbsp;!
            </div>
          )}
          {/* description */}
          <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-800 text-justify shadow-sm mb-4 leading-relaxed">
            {resultData.description}
          </p>
          {/* Modèles */}
          <div className="mb-2">
            <h4 className="text-sm font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300 text-center mb-3">
              🎯 Exemples de modèles adaptés :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {resultData.wheels.map((wheel, index) => (
                <div
                  key={index}
                  className="p-3 bg-emerald-100 dark:bg-emerald-800 dark:text-white text-center font-semibold rounded-lg shadow-sm hover:scale-[1.02] transition-transform text-sm md:text-base"
                >
                  {wheel}
                </div>
              ))}
            </div>
          </div>
          {/* Mention de mise à jour de la sélection */}
          <p className="text-center text-xs text-gray-600 dark:text-gray-300 my-1">
            Sélection mise à jour en juillet 2026 selon l&apos;état actuel du
            marché.
          </p>
          {/* Refaire le test */}
          <div className="text-center border-t border-gray-200 dark:border-gray-600 pt-2 mt-0">
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg
              text-sm font-medium shadow-md transition-all active:scale-95"
            >
              Refaire le test 🔄
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
