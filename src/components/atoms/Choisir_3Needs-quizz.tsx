'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  /*ModalHeader,*/
} from '@heroui/react'
import { useState } from 'react'

//import { FaDAndDBeyond } from 'react-icons/fa'

// Définition des 13 profils cibles (conclusions)
const PROFILES = {
  P1_debutant_occasion: {
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
    title: '🚆 Multimodalité Ultralégère',
    subtitle: 'Légèreté, compacité et discrétion non négociable',
    description:
      'Ta priorité absolue est la légèreté et la praticité afin de discrètement combiner la roue avec le métro, le bus, le train et des escaliers. La suspension est volontairement exclue afin de préserver la compacité et le poids.',
    wheels: ['Begode Mten4', 'Kingsong 14D', 'Inmotion V8S'],
  },
  P2_2_multimodal_classique: {
    title: '🚇 Multimodalité Classique',
    subtitle: 'Compromis compacité / autonomie (max 25 kg)',
    description:
      "Tu dois régulièrement soulever ta roue mais tu parcours parfois de plus longues distances. Tu acceptes un poids allant jusqu'à environ 25 kg en échange d'une autonomie accrue.",
    wheels: ['Kingsong 16S', 'Inmotion V10F', 'Kingsong 18XL'],
  },
  P2_3_multimodal_suspendue: {
    title: '🚉 Multimodalité Suspendue',
    subtitle: 'Compacité et confort',
    description:
      "Tu dois régulièrement soulever ta roue mais tu souhaites bénéficier d'un meilleur confort. La suspension reste légère et la machine conserve un gabarit raisonnable.",
    wheels: ['Inmotion V9', 'Kingsong S18', 'Nosfet Aero'],
  },
  P3_occasionnel_court: {
    title: '🚶 L’Occasionnel',
    subtitle: 'Simplicité et fiabilité sans complication',
    description:
      "Tu cherches une roue simple pour des déplacements occasionnels ou de petites balades dominicales sans chichi. Pas besoin d'un monstre de puissance : tu privilégies des modèles sûrs et faciles à prendre en main.",
    wheels: ['Kingsong 16S', 'Inmotion V10F', 'Kingsong 18XL'],
  },
  P4_commuter_regulier: {
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
    title: '⚡ Le Super Commuter',
    subtitle: 'Endurance et sécurité sur route',
    description:
      'Tu parcours quotidiennement de grandes distances (parfois +40 km), souvent sur des axes routiers dégradés ou là où les pistes cyclables sont inexistantes. Il te faut une machine robuste, confortable et  rassurante pour affronter la route avec confiance.',
    wheels: ['Leaperkim Patton-S', 'Nosfet Xeno', 'Kingsong S19'],
  },
  P6_super_commuter_xxl: {
    title: '🚀 Le Super Commuter XXL',
    subtitle: 'Longues distances à rythme soutenu',
    description:
      "Tu effectues de longs trajets quotidiens à un rythme soutenu. Tu as besoin d'une machine fiable, stable, dotée d'un grand diamètre de roue, d'une excellente autonomie et capable d'affronter sereinement la route sur la durée.",
    wheels: ['Leaperkim Lynx-S', 'Begode F18'],
  },
  P7_voltigeur: {
    title: '🌲 Le Voltigeur',
    subtitle: 'Off-road, bosses et franchissements',
    description:
      "Pour toi, la gyroroue est synonyme d'acrobaties, de hors-piste, de bosses et de sauts. Une excellente suspension est indispensable pour absorber les chocs et survoler les obstacle sur les terrains les plus accidentés.",
    wheels: ['Kingsong S22', 'Nosfet Apex', 'Begode Extreme'],
  },
  P8_pistard: {
    title: '🏎️ Le Pistard',
    subtitle: 'Performance et précision sur asphalte',
    description:
      "Tu recherches l'adrénaline, les accélérations franches et une tenue impériale à haute vitesse. Tu privilégies les machines les plus performantes du marché.",
    wheels: ['Begode Blitz', 'Begode Race', 'Inmotion P6', 'Nosfet Apex'],
  },
  P9_1_voyageur: {
    title: '🗺️ Le Voyageur',
    subtitle: 'Longues randonnées',
    description:
      'Ton plaisir est de partir en randonnée en toute liberté. Tu privilégies une excellente autonomie et un confort premium pour enchaîner les kilomètres sans fatigue.',
    wheels: ['Nosfet Xeno', 'Leaperkim Lynx-S'],
  },
  P9_2_grand_voyageur: {
    title: '🌍 Le Grand Voyageur',
    subtitle: 'Roadtrips et autonomie sans compromis',
    description:
      "Tu veux parcourir des distances exceptionnelles sans te soucier de la recharge. La capacité batterie et la stabilité routière passent avant toute considération de poids ou d'encombrement.",
    wheels: ['Leaperkim Sherman-L', 'Begode F22', 'Leaperkim Oryx'],
  },
  P10_indecis: {
    title: '🤔 L’Indécis',
    subtitle: 'Mes coups de cœurs pour ne plus douter…',
    description:
      "Tu découvres encore la gyroroue et tu ne sais pas précisément quel sera ton usage principal. Plutôt que de choisir une machine trop spécialisée, privilégie une roue capable de t'accompagner dans tes premiers trajets, tes balades et dans la découverte du bonheur d'aller rouler.",
    wheels: ['Kingsong 16S Pro', 'Nosfet Aero', 'Nosfet Xeno'],
  },
}

// Les questions croisant usages, contraintes physiques et budget
const QUESTIONS = [
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
        value: 'Q1_pratiquant',
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
        value: 'Q3_polyvalent',
      },
    ],
  },
  {
    id: 4,
    text: 'Quelle distance penses-tu parcourir lors de tes trajets habituels ?',
    options: [
      {
        text: 'Petits trajets ou très courtes balades (-10km)',
        value: 'Q4_distance_courte',
      },
      {
        text: 'Trajets réguliers de moyenne distance (10-30km)',
        value: 'Q4_distance_moyenne',
      },
      {
        text: 'Longues distances régulières (30-60km)',
        value: 'Q4_distance_longue',
      },
      {
        text: 'Très longues distances (+60km)',
        value: 'Q4_distance_tres_longue',
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
        value: 'Q6_terrain_lisse',
      },
      {
        text: 'Varié : routes d’agglomération, chaussée dégradés et pavés',
        value: 'Q6_terrain_chaussee',
      },
      {
        text: 'Tout-terrain : forêts, sentiers et reliefs accidentés',
        value: 'Q6_terrain_offroad',
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
        text: 'Serré : cible l’occasion ou l’entrée de gamme (-1500€) ',
        value: 'Q9_budget_serre',
      },
      {
        text: 'Intermédiaire : le cœur du marché (1500-3000€)',
        value: 'Q9_budget_moyen',
      },
      {
        text: 'Premium / No Limit : orienté performance (+3000€)',
        value: 'Q9_budget_premium',
      },
    ],
  },
  {
    id: 10,
    text: 'En cas de compromis, quelle est ta priorité absolue ?',
    options: [
      {
        text: 'Le prix avant tout : je ne peux pas dépasser mon budget',
        value: 'Q10_priorite_budget',
      },
      {
        text: "La logistique : le poids et l'encombrement sont mes limites physiques",
        value: 'Q10_priorite_poids',
      },
      {
        text: "L'usage : je veux la machine idéale pour mes trajets/sensations",
        value: 'Q10_priorite_usage',
      },
    ],
  },
]

export const QuizBesoins = () => {
  const [currentStep, setCurrentStep] = useState(0)
  // 0 = Accueil, 1-10 = Questions dynamiques, >10 = Résultat
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isModalOpen, setIsModalOpen] = useState(false) // Contrôle de la modale
  const handleStart = () => {
    setCurrentStep(1)
    setIsModalOpen(true)
  }
  const getNextStep = (value: string): number | 'RESULT' => {
    if (currentStep < QUESTIONS.length) {
      return currentStep + 1
    }
    return 'RESULT'
  }
  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: value,
    }))

    const nextStep = getNextStep(value)

    if (nextStep === 'RESULT') {
      setCurrentStep(QUESTIONS.length + 1)
    } else {
      setCurrentStep(nextStep)
    }
  }
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    } else if (currentStep === 1) {
      setIsModalOpen(false)
      setAnswers({})
      setCurrentStep(0)
    }
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setAnswers({})
    setCurrentStep(0)
  }
  const resetQuiz = () => {
    setAnswers({})
    setCurrentStep(1)
  }

  const calculateResult = (): {
    key: keyof typeof PROFILES
    showWarning_debutant: boolean
    showWarning_entretien: boolean
    showWarning_suspension: boolean
  } => {
    const q1 = answers[1]
    const q2 = answers[2]
    const q3 = answers[3]
    const q4 = answers[4]
    const q5 = answers[5]
    const q6 = answers[6]
    const q7 = answers[7]
    const q8 = answers[8]
    const q9 = answers[9]
    const q10 = answers[10]
    let resultKey: keyof typeof PROFILES = 'P10_indecis'
    // ==========================================
    // FILTRE ENTONNOIR 1 : LE BUDGET EST ROI
    // ==========================================
    if (q10 === 'Q10_priorite_budget') {
      if (q9 === 'Q9_budget_serre' && q5 !== 'Q5_portage_intensif') {
        resultKey = 'P1_debutant_occasion'
      } else if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q5 === 'Q5_portage_modere') {
        resultKey =
          q8 === 'Q8_suspension_avec'
            ? 'P2_3_multimodal_suspendue'
            : 'P2_2_multimodal_classique'
      }
    }
    // ==========================================
    // FILTRE ENTONNOIR 2 : LE POIDS EST ROI
    // ==========================================
    if (
      resultKey === 'P10_indecis' &&
      (q10 === 'Q10_priorite_poids' || q5 === 'Q5_portage_intensif')
    ) {
      if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q5 === 'Q5_portage_modere') {
        resultKey =
          q8 === 'Q8_suspension_avec'
            ? 'P2_3_multimodal_suspendue'
            : 'P2_2_multimodal_classique'
      }
    }
    // ==========================================
    // FILTRE ENTONNOIR 3 : L'USAGE/PLAISIR EST ROI (Tronc commun)
    // ==========================================
    if (resultKey === 'P10_indecis') {
      // --- BRANCHE A : USAGE UTILITAIRE ---
      if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte' || q4 === 'Q4_distance_moyenne') {
          resultKey = 'P4_commuter_regulier'
        } else if (
          q4 === 'Q4_distance_longue' ||
          q4 === 'Q4_distance_tres_longue'
        ) {
          resultKey =
            q2 === 'Q2_gabarit_lourd'
              ? 'P6_super_commuter_xxl'
              : 'P5_super_commuter'
        }
      }
      // --- BRANCHE B : USAGE LOISIR ---
      else if (q3 === 'Q3_loisir') {
        if (q4 === 'Q4_distance_courte') {
          resultKey = 'P3_occasionnel_court'
        } else if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad') {
          resultKey = 'P7_voltigeur'
        } else if (q7 === 'Q7_style_vitesse') {
          resultKey = 'P8_pistard'
        } else if (q7 === 'Q7_style_endurance') {
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        }
      }
      // --- BRANCHE C : USAGE POLYVALENT OU STYLE DÉCOUVERTE ---
      else if (q3 === 'Q3_polyvalent' || q7 === 'Q7_style_decouverte') {
        if (q4 === 'Q4_distance_longue' || q4 === 'Q4_distance_tres_longue') {
          resultKey = 'P5_super_commuter'
        } else {
          resultKey = 'P10_indecis'
        }
      }
    }
    // --- CHUTE DE SÉCURITÉ ---
    if (resultKey === 'P10_indecis' && q9 === 'Q9_budget_serre') {
      resultKey = 'P1_debutant_occasion'
    }
    return {
      key: resultKey,
      showWarning_debutant:
        q1 === 'Q1_debutant' && resultKey !== 'P1_debutant_occasion',
      showWarning_entretien: [
        'P5_super_commuter',
        'P6_super_commuter_xxl',
        'P7_voltigeur',
        'P8_pistard',
        'P9_1_voyageur',
        'P9_2_grand_voyageur',
      ].includes(resultKey),
      showWarning_suspension: [
        'P2_3_multimodal_suspendue',
        'P4_commuter_regulier',
        'P5_super_commuter',
        'P6_super_commuter_xxl',
        'P7_voltigeur',
        'P9_1_voyageur',
        'P9_2_grand_voyageur',
      ].includes(resultKey),
    }
  }
  const result = currentStep > QUESTIONS.length ? calculateResult() : null
  const resultData = result ? PROFILES[result.key] : null

  return (
    <>
      {/* --- ÉCRAN D'ACCUEIL (Fixe sur la page) --- */}
      <div className="scroll-mt-56 mb-6 py-3 px-6 border border-emerald-500/30 rounded-xl bg-slate-100 dark:bg-gray-800/50 shadow-inner">
        <div className="text-center py-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            <span className="text-4xl">🎯</span> Découvre ton profil&nbsp;!
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-1 mb-4 max-w-md mx-auto">
            Réponds aux questions pour analyser tes contraintes, identifier tes
            besoins, cibler ton usage et découvrir les modèles les plus
            recommandées.
          </p>
          <button
            onClick={handleStart}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-md transition-all active:scale-95"
          >
            Commencer le test
          </button>
        </div>
      </div>

      {/* --- CONFIGURATEUR VISUEL (BETA) --- */}
      <div className="mb-8 grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm">
        {/* QUESTIONS */}
        <div className="xl:col-span-2 text-xs">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 p-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 text-xs">
              {QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="text-xs rounded-lg border border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-900"
                >
                  <h4 className="font-semibold text-xs text-gray-900 dark:text-white mb-3">
                    {question.id}. {question.text}
                  </h4>
                  <div className="space-y-1 text-xs">
                    {question.options.map((option, index) => {
                      const isSelected = answers[question.id] === option.value
                      return (
                        <button
                          key={index}
                          onClick={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              [question.id]: option.value,
                            }))
                          }
                          className={`w-full text-left p-1 rounded-lg border-0.5 text-xs transition-all ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500'
                              : 'border-gray-600 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-40 ring-1'
                          }`}
                        >
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-xs">{option.text}</span>
                            {isSelected && (
                              <span className="font-bold text-emerald-600 text-xs">
                                ✓
                              </span>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RESULTAT EN DIRECT A DROITE DE LA GRILLE */}
        <div className="xl:col-span-1">
          <div className="sticky top-24 rounded-xl border border-emerald-500/30 bg-white dark:bg-gray-800 p-4 shadow-md">
            {Object.keys(answers).length < QUESTIONS.length ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">🎯</div>

                <p className="font-semibold text-gray-900 dark:text-white">
                  Profil en cours d&apos;analyse
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Réponds aux {QUESTIONS.length} questions pour afficher une
                  recommandation complète.
                </p>

                <div className="mt-4 text-xs text-gray-500">
                  {Object.keys(answers).length} / {QUESTIONS.length} réponses
                </div>
              </div>
            ) : (
              (() => {
                const liveResult = calculateResult()
                const liveData = PROFILES[liveResult.key]

                return (
                  <>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-black text-gray-900 dark:text-white">
                        {liveData.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">
                        {liveData.subtitle}
                      </p>
                    </div>
                    <div className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed mb-4">
                      {liveData.description}
                    </div>
                    <div className="space-y-2">
                      {liveData.wheels.map((wheel, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-lg text-center font-medium bg-emerald-100 dark:bg-emerald-900/40"
                        >
                          {wheel}
                        </div>
                      ))}
                    </div>
                    {(liveResult.showWarning_debutant ||
                      liveResult.showWarning_entretien ||
                      liveResult.showWarning_suspension) && (
                      <div className="mt-4 space-y-2">
                        {liveResult.showWarning_debutant && (
                          <div className="p-2 rounded-lg text-xs bg-amber-50 border border-amber-300 dark:text-amber-900">
                            💡 Débutant : une occasion reste souvent plus
                            pertinente pour apprendre.
                          </div>
                        )}
                        {liveResult.showWarning_entretien && (
                          <div className="p-2 rounded-lg text-xs bg-amber-50 border border-amber-300 dark:text-amber-900">
                            💡 Ce profil implique davantage d&apos;entretien.
                          </div>
                        )}
                        {liveResult.showWarning_suspension && (
                          <div className="p-2 rounded-lg text-xs bg-amber-50 border border-amber-300 dark:text-amber-900">
                            💡 Une suspension semble particulièrement adaptée à
                            ton usage.
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )
              })()
            )}
          </div>
        </div>
      </div>

      {/* --- MODALE (Questions & Résultats un par un) --- */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size="2xl"
        placement="center"
        backdrop="opaque"
        scrollBehavior="inside"
        classNames={{
          backdrop: 'bg-black/60 backdrop-blur-sm',
          closeButton:
            'right-3 left-auto top-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white',
        }}
      >
        <ModalContent className="rounded-xl bg-slate-100 dark:bg-gray-800 p-1">
          {/* HEADER DYNAMIQUE */}
          <div className="mx-4 text-lg font-semibold mt-1 mb-1 border-b border-gray-200 dark:border-gray-700 pb-2">
            {currentStep <= QUESTIONS.length ? (
              <div className="flex flex-col w-full pr-6">
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-1">
                  Question {currentStep} sur {QUESTIONS.length}
                </span>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{
                      width: `${(currentStep / QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full ">
                  Ton Profil
                </span>
              </div>
            )}
          </div>

          {/* CORPS DE LA MODALE */}
          <ModalBody className="space-y-2 min-h-[23vh] max-h-[70vh] overflow-y-auto pt-0 px-4">
            {/* ETAT : QUESTIONS */}
            {currentStep >= 1 && currentStep <= QUESTIONS.length && (
              <div className="animate-fade-in">
                <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {QUESTIONS[currentStep - 1].text}
                </h4>
                <div className="space-y-1">
                  {QUESTIONS[currentStep - 1].options.map((option, idx) => {
                    const isSelected = answers[currentStep] === option.value

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left p-1.5 rounded-lg border transition-all duration-150 text-xs sm:text-sm font-base ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/20'
                            : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm">
                            {option.text}
                          </span>
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

            {/* ETAT : RÉSULTAT */}
            {currentStep > QUESTIONS.length && resultData && (
              <div className="animate-fade-in">
                <div className="mb-1">
                  <p className="text-center mb-2 text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                    {resultData.title}
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-medium text-center">
                    {resultData.subtitle}
                  </p>
                </div>

                <p className="text-sm md:text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 p-2 rounded-lg border border-gray-100 dark:border-gray-700 mb-2 leading-relaxed">
                  {resultData.description}
                </p>
                {/* Encart WARNING */}
                {result?.showWarning_debutant && (
                  <div className="mt-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs md:text-sm">
                    💡 <strong>Débutant : </strong>
                    Même si ton usage et ton budget permettent d&apos;envisager
                    une roue performante, je recommande de faire tes premières
                    armes sur une roue d&apos;occasion moins chère. Tu
                    apprendras plus sereinement et tu limiteras le risque
                    d&apos;abîmer une roue neuve.
                  </div>
                )}
                {result?.showWarning_entretien && (
                  <div className="mt-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs md:text-sm">
                    💡 <strong>Entretien : </strong>
                    Les roues performantes demandent davantage de suivi. Une
                    suspension ou un usage intensif impliquent un minimum de
                    contrôles et d&apos;entretien réguliers.
                  </div>
                )}
                {result?.showWarning_suspension && (
                  <div className="mt-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs md:text-sm">
                    💡 <strong>Suspension : </strong>
                    Ton usage correspond à des situations où une suspension
                    apporte un vrai gain de confort, de contrôle et de sécurité,
                    notamment sur longues distances ou terrains dégradés.
                  </div>
                )}

                {/* Modèles */}
                <div className="mb-2">
                  <h4 className="text-sm font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300 text-center mt-3 mb-2">
                    🎯 Exemples de modèles adaptés :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mx-4 sm:mx-0">
                    {resultData.wheels.map((wheel, index) => (
                      <div
                        key={index}
                        className="p-2 bg-emerald-100 dark:bg-emerald-800/80 dark:text-white text-center font-semibold rounded-lg text-sm hover:scale-[1.02] transition-transform "
                      >
                        {wheel}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mention de mise à jour de la sélection */}
                <p className="text-center text-xs text-gray-500 dark:text-gray-300 my-1">
                  Sélection mise à jour en juillet 2026 selon l&apos;état actuel
                  du marché.
                </p>
              </div>
            )}
          </ModalBody>

          {/* FOOTER DE LA MODALE */}
          <ModalFooter className="border-t border-gray-200 dark:border-gray-700 flex justify-between items-center pt-3 pb-2">
            {/* Bouton : Retour (pendant les questions) ou Refaire (aux résultats) */}
            {currentStep <= QUESTIONS.length ? (
              <Button
                variant="flat"
                onPress={handleBack}
                className="rounded-xl bg-white  dark:bg-gray-700 text-gray-800 dark:text-white font-medium
                hover:bg-slate-200 dark:hover:bg-slate-600 transition-transform"
              >
                ← Retour
              </Button>
            ) : (
              <Button
                variant="light"
                onPress={resetQuiz}
                className="rounded-xl bg-white  dark:bg-gray-700 text-gray-800 dark:text-white font-medium
                hover:bg-slate-200 dark:hover:bg-slate-600 transition-transform"
              >
                🔄 Refaire le test
              </Button>
            )}
            {/* Bouton de droite : Fermer */}
            <Button
              variant="light"
              onPress={handleCloseModal}
              className="rounded-xl bg-white  dark:bg-gray-700 text-gray-800 dark:text-white font-medium
                hover:bg-slate-200 dark:hover:bg-slate-600 transition-transform"
            >
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
