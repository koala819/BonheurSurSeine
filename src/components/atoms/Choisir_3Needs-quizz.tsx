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
      "Tu parcoures chaque jour de grandes distances (parfois +40 km) là où il y a peu de pistes cyclables, ou parfois des axes dégradés. Il te faut une machine fiable, endurante, et dotée d'une suspension rassurante pour t'insérer partout.",
    wheels: [
      'Leaperkim Patton-S',
      'Nosfet Xeno',
      'Leaperkim Lynx-S',
      'Kingsong S19',
    ],
  },
  P7_loisir_suspendu: {
    title: '🌲 Le Voltigeur',
    subtitle: 'Franchissements, amortis et sorties en forêt (Offroad)',
    description:
      "Pour toi, la gyroroue est synonyme d'acrobaties, de terre et de sauts. Une bonne suspension à grand débattement est indispensable pour te permettre d'évoluer sur ce relief et survoler les obstacles.",
    wheels: [
      'Begode Extreme',
      'Kingsong S22 Pro',
      'Leaperkim Lynx-S',
      'Nosfet Apex',
    ],
  },
  P8_loisir_vitesse: {
    title: '🏎️ Le Pistard',
    subtitle: 'Stabilité à haute vitesse et accélérations',
    description:
      "Tu recherches l'adrénaline sur l'asphalte, la réactivité des accélérations et une tenue impériale à vitesse élevée. Il te faut une roue performante et optimisée, un châssis ultra-rigide et de bons power-pads.",
    wheels: ['Begode Blitz / Race', 'Inmotion P6', 'Nosfet Apex'],
  },
  P9_loisir_endurance: {
    title: '🗺️ Le Voyageur',
    subtitle: 'Autonomie pour de longues heures en roadtrip',
    description:
      'Ton plaisir ultime est de partir rouler toute la journée sans surveiller ta jauge de batterie. Tu privilégies une capacité en Wh gigantesque et une stabilité rassurante, quitte à accepter une roue lourde qui ne quitte presque jamais le sol.',
    wheels: ['Leaperkim Sherman-L', 'Leaperkim Sherman-S'],
  },
}

// Les questions croisant usages, contraintes physiques et budget
const QUESTIONS = [
  {
    id: 1,
    text: 'Quel est ton niveau actuel ?',
    options: [
      {
        text: 'Débutant (je cherche à apprendre et faire mes premiers pas)',
        profile: 'Q1_debutant_occasion',
      },
      {
        text: 'Déjà wheeler, régulier ou occasionnel',
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
    text: 'Tu recherches principalement une roue pour ?',
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
        text: 'Occasionnellement ou pour de courtes distances (<10km)',
        profile: 'Q4_distance_court',
      },
      {
        text: 'Régulièrement sur des distances moyennes (10-30km)',
        profile: 'Q4_distance_moyen',
      },
      {
        text: 'Quotidiennement sur de longues distances (>30km)',
        profile: 'Q4_distance_long',
      },
    ],
  },
  {
    id: 5,
    text: 'Quel est ton rapport aux escaliers et aux transports ?',
    options: [
      {
        text: 'Intensif : très souvent le train/métro/bus ou des escaliers (poids max 15kg)',
        profile: 'Q5_max15kg',
      },
      {
        text: 'Modéré : quelques marches de temps en temps  (poids max 25kg)',
        profile: 'Q5_max25kg',
      },
      {
        text: 'Quasiment jamais (poids non limitant)',
        profile: 'Q5_poidsnolimit',
      },
    ],
  },
  {
    id: 6,
    text: 'Sur quel type de terrain vas-tu majoritairement évoluer ?',
    options: [
      {
        text: 'Pistes cyclables et rues apaisées de centre-ville',
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
        text: 'Franchissement, sauts, jouer avec le relief et les bosses',
        profile: 'Q7_loisir_suspendu',
      },
      {
        text: 'Vitesse, accélération franche et trajectoire acérée',
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
        text: 'Peu importante : je privilégie la simplicité, la compacité et le coût',
        profile: 'Q8_sans_suspension',
      },
      {
        text: 'Très importante : pour préserver mon confort et ma sécurité',
        profile: 'Q8_avec_suspension',
      },
    ],
  },
  {
    id: 9,
    text: 'Côté entretien et réglages :',
    options: [
      {
        text: 'Je veux un engin simple avec le moins de maintenance possible',
        profile: 'Q9_entretien_simple',
      },
      {
        text: 'Je peux gérer les réglages ou des réparations réguliers',
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
  const [isModalOpen, setIsModalOpen] = useState(false) // Contrôle de la modale

  const handleStart = () => {
    setCurrentStep(1)
    setIsModalOpen(true)
  }
  const handleAnswer = (optionProfile: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionProfile }))
    setCurrentStep((prev) => prev + 1)
  }
  const handleBack = () => {
    if (currentStep > 1) {
      // Retour classique à la question précédente
      setCurrentStep((prev) => prev - 1)
    } else if (currentStep === 1) {
      // Si on recule depuis la Q1, on ferme la modale et on reset
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
    setCurrentStep(1) // Relance à la question 1 sans fermer la modale
  }

  // Algorithme d'aiguillage d'experts
  const calculateResult = (): {
    key: keyof typeof PROFILES
    showWarning_debutant: boolean
    showWarning_entretien: boolean
    showWarning_suspension: boolean
  } => {
    const q1 = answers[1] // Niveau (débutant-pratiquant)
    const q2 = answers[2] // Gabarit (standard-lourd)
    const q3 = answers[3] // Objectif (utilitaire-loisir)
    const q4 = answers[4] // Distance (court-moyen-long)
    const q5 = answers[5] // Contrainte poids (15kg-25kg-sans limite)
    const q6 = answers[6] // Terrain (lisse-route-offroad)
    const q7 = answers[7] // Loisir (saut-vitesse-endurance)
    const q8 = answers[8] // Suspension (oui-non)
    const q9 = answers[9] // Entretien (simple-bricoleur)
    const q10 = answers[10] // Budget (serré-moyen-premium)

    let resultKey: keyof typeof PROFILES = 'P5_commuter_regulier'

    // ======================================
    // 1 - DEBUTANT
    // ======================================
    if (q1 === 'Q1_debutant_occasion') {
      resultKey = 'P1_debutant_occasion'
    }

    // ======================================
    // 2 - LOISIR
    // ======================================
    else if (q3 === 'Q3_loisir') {
      // Offroad / franchissement / saut
      if (q7 === 'Q7_loisir_suspendu' || q6 === 'Q6_offroad') {
        resultKey = 'P7_loisir_suspendu'
      }
      // Vitesse
      else if (q7 === 'Q7_loisir_vitesse') {
        resultKey = 'P8_loisir_vitesse'
      }
      // Endurance
      else if (q7 === 'Q7_loisir_endurance') {
        resultKey = 'P9_loisir_endurance'
      }
    }

    // ======================================
    // 3 - UTILITAIRE
    // ======================================
    else if (q3 === 'Q3_utilitaire') {
      // ==================================
      // PORTAGE INTENSIF
      // MAX 15 KG
      // ==================================
      if (q5 === 'Q5_max15kg') {
        // Gros gabarit :
        // une roue trop légère devient limitée
        if (q2 === 'Q2_gabarit_lourd') {
          resultKey = 'P3_multimodal_long'
        } else {
          resultKey = 'P2_multimodal_court'
        }
      }

      // ==================================
      // PORTAGE OCCASIONNEL
      // MAX 25 KG
      // ==================================
      else if (q5 === 'Q5_max25kg') {
        // Courte distance + terrain facile
        // priorité à la compacité
        if (q4 === 'Q4_distance_court' && q6 === 'Q6_lisse') {
          resultKey = 'P3_multimodal_long'
        }
        // Terrain dégradé :
        // le confort devient prioritaire
        else if (q6 === 'Q6_chaussee' || q6 === 'Q6_offroad') {
          if (q8 === 'Q8_avec_suspension') {
            resultKey = 'P5_commuter_regulier'
          } else {
            resultKey = 'P3_multimodal_long'
          }
        } else {
          resultKey = 'P3_multimodal_long'
        }
      }

      // ==================================
      // PAS DE CONTRAINTE DE POIDS
      // ==================================
      else if (q5 === 'Q5_poidsnolimit') {
        // ------------------------------
        // COURTES DISTANCES
        // ------------------------------
        if (q4 === 'Q4_distance_court') {
          if (q6 === 'Q6_lisse') {
            if (q8 === 'Q8_avec_suspension') {
              resultKey = 'P5_commuter_regulier'
            } else {
              resultKey = 'P4_occasionnel_court'
            }
          } else {
            resultKey = 'P5_commuter_regulier'
          }
        }
        // ------------------------------
        // DISTANCES MOYENNES
        // ------------------------------
        else if (q4 === 'Q4_distance_moyen') {
          if (q6 === 'Q6_lisse') {
            resultKey = 'P5_commuter_regulier'
          } else if (q8 === 'Q8_avec_suspension') {
            resultKey = 'P6_super_commuter'
          } else {
            resultKey = 'P5_commuter_regulier'
          }
        }
        // ------------------------------
        // LONGUES DISTANCES
        // ------------------------------
        else if (q4 === 'Q4_distance_long') {
          if (q8 === 'Q8_avec_suspension') {
            resultKey = 'P6_super_commuter'
          } else {
            resultKey = 'P5_commuter_regulier'
          }
        }
      }
    }

    // ======================================
    // WARNING ENTRETIEN
    // APRÈS DÉTERMINATION DU PROFIL
    // ======================================
    const showWarning_debutant =
      q1 === 'Q1_debutant_occasion' &&
      (q10 === 'Q10_budget_premium' || q10 === 'Q10_budget_moyen')
    const showWarning_suspension =
      q8 === 'Q8_sans_suspension' &&
      (resultKey === 'P6_super_commuter' || resultKey === 'P7_loisir_suspendu')
    const showWarning_entretien =
      q9 === 'Q9_entretien_simple' &&
      (resultKey === 'P6_super_commuter' || resultKey === 'P7_loisir_suspendu')

    return {
      key: resultKey,
      showWarning_debutant,
      showWarning_entretien,
      showWarning_suspension,
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
                    const isSelected = answers[currentStep] === option.profile

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.profile)}
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

                <p className="text-sm md:text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 p-2 rounded-lg border border-gray-100 dark:border-gray-700 text-justify mb-2 leading-relaxed">
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
            {/* Bouton de gauche : Retour (pendant les questions) ou Refaire (aux résultats) */}
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
