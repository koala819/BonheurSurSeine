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
    text: 'Quel est ton niveau actuel en gyroroue ?',
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
    text: 'Quel est ton gabarit approximatif (une fois tout équipé) ?',
    options: [
      {
        text: 'Moins de 90 kg (gabarit standard à léger)',
        value: 'Q2_gabarit_standard',
      },
      {
        text: '90 kg ou plus (gabarit lourd)',
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
        text: 'Petits trajets ou très courtes balades (moins de 10 km)',
        value: 'Q4_distance_courte',
      },
      {
        text: 'Trajets réguliers de moyenne distance (10 à 30 km)',
        value: 'Q4_distance_moyenne',
      },
      {
        text: 'Longues distances régulières (30 à 60 km)',
        value: 'Q4_distance_longue',
      },
      {
        text: 'Très longues distances (plus de 60 km)',
        value: 'Q4_distance_tres_longue',
      },
    ],
  },
  {
    id: 5,
    text: 'Quel sera ton rapport aux escaliers et aux transports en commun ?',
    options: [
      {
        text: 'Intensif : je dois porter la roue très souvent (métro, bus, escaliers). Poids max 15kg.',
        value: 'Q5_portage_intensif',
      },
      {
        text: 'Modéré : quelques marches à l’occasion. Poids max 25kg.',
        value: 'Q5_portage_modere',
      },
      {
        text: 'Quasiment jamais : je roule directement de mon point A au point B. Poids non limitant.',
        value: 'Q5_portage_rare',
      },
    ],
  },
  {
    id: 6,
    text: 'Sur quel type de terrain vas-tu majoritairement évoluer ?',
    options: [
      {
        text: 'Asphalte propre : pistes cyclables, chemins lisses et rues apaisées de centre-ville',
        value: 'Q6_terrain_lisse',
      },
      {
        text: 'Urbain varié : routes d’agglomération, chaussée dégradés et pavés',
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
    text: 'Si tu penses à tes sorties ou à ton style de conduite idéal, qu’est-ce qui te fait vibrer ?',
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
        text: 'Endurance : enchaîner les kilomètres et rouler autant que la batterie le permettra',
        value: 'Q7_style_endurance',
      },
      {
        text: 'Découverte : je veux surtout explorer et voir ce que la gyroroue me réserve',
        value: 'Q7_style_decouverte',
      },
    ],
  },
  {
    id: 8,
    text: 'Quelle importance accordes-tu à la suspension ?',
    options: [
      {
        text: 'Secondaire : je privilégie la simplicité mécanique, la compacité et un coût réduit',
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
        text: 'Budget serré : moins de 1 500 € (cible l’occasion ou l’entrée de gamme)',
        value: 'Q9_budget_serre',
      },
      {
        text: 'Budget intermédiaire : 1 500 € à 2 500 € (le cœur du marché équilibré)',
        value: 'Q9_budget_moyen',
      },
      {
        text: 'Budget premium / No Limit : 2 500 € et plus (le haut de gamme performant)',
        value: 'Q9_budget_premium',
      },
    ],
  },
]

export const QuizBesoins = () => {
  const [currentStep, setCurrentStep] = useState(0)
  // 0 = Accueil, 1-6 = Questions dynamiques, >6 = Résultat
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isModalOpen, setIsModalOpen] = useState(false) // Contrôle de la modale
  const handleStart = () => {
    setCurrentStep(1)
    setIsModalOpen(true)
  }
  const getNextStep = (value: string): number | 'RESULT' => {
    // On passe simplement à la question suivante jusqu'à la fin
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
    const q8 = answers[8] // La question budget

    let resultKey: keyof typeof PROFILES = 'P10_indecis'

    // 1. CALCUL DU PROFIL CIBLE (indépendant du niveau/budget)
    if (q2 === 'polyvalent' || q7 === 'compromis' || q7 === 'exploration') {
      resultKey = 'P10_indecis'
    } else if (q2 === 'utilitaire') {
      if (q3 === 'portage_frequent') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q3 === 'portage_moderate') {
        resultKey =
          q7 === 'specialisee'
            ? 'P2_3_multimodal_suspendue'
            : 'P2_2_multimodal_classique'
      } else if (q3 === 'portage_rare') {
        if (q4 === 'distance_courte') resultKey = 'P3_occasionnel_court'
        else if (q4 === 'distance_moyenne') resultKey = 'P4_commuter_regulier'
        else if (q4 === 'distance_longue') resultKey = 'P5_super_commuter'
        else if (q4 === 'distance_tres_longue')
          resultKey = 'P6_super_commuter_xxl'
      }
    } else if (q2 === 'loisir') {
      if (q5 === 'offroad') {
        resultKey = 'P7_voltigeur'
      } else if (q5 === 'vitesse') {
        resultKey = 'P8_pistard'
      } else if (q5 === 'endurance') {
        resultKey =
          q6 === 'autonomie_max' ? 'P9_2_grand_voyageur' : 'P9_1_voyageur'
      } else {
        resultKey = 'P10_indecis'
      }
    }

    // 2. RÈGLE OVERRIDE : Débutant + Petit budget
    // Si c'est un débutant avec un petit budget, on force le profil P1
    if (q1 === 'debutant' && q8 === 'petit') {
      resultKey = 'P1_debutant_occasion'
    }

    // 3. RETOUR DES DONNÉES ET DES WARNINGS
    return {
      key: resultKey,
      // On affiche le warning UNIQUEMENT si le test a calculé un autre profil que P1 pour un débutant
      showWarning_debutant:
        q1 === 'debutant' && resultKey !== 'P1_debutant_occasion',
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

      {/* --- MODALE (Questions & Résultats) --- */}
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
                <a className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full ">
                  Ton Profil
                </a>
              </div>
            )}
          </div>

          {/* CORPS DE LA MODALE */}
          <ModalBody className="space-y-2 min-h-[20vh] max-h-[70vh] overflow-y-auto pt-0 px-4">
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
                        className={`w-full text-left p-1.5 rounded-lg border transition-all duration-150 text-sm sm:text-base font-medium ${
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

            {/* ETAT : RÉSULTAT */}
            {currentStep > QUESTIONS.length && resultData && (
              <div className="animate-fade-in">
                <div className="mb-1">
                  <p className="text-center mb-2 text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                    {resultData.title}
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mx-20 sm:mx-0">
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
                <p className="text-center text-xs text-gray-600 dark:text-gray-300 my-1">
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
                variant="light"
                onPress={handleBack}
                className="rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium"
              >
                ← Retour
              </Button>
            ) : (
              <Button
                variant="flat"
                color="primary" // Ajuste la couleur selon ton thème NextUI (ex: success)
                onPress={resetQuiz}
                className="rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium"
              >
                🔄 Refaire le test
              </Button>
            )}
            {/* Bouton de droite : Fermer */}
            <Button
              variant="solid"
              onPress={handleCloseModal}
              className="rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium"
            >
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
