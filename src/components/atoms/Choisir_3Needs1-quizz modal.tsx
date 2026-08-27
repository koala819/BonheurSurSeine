'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Spinner,
} from '@heroui/react'
import { useState } from 'react'

import { PROFILES } from './Choisir_3Needs1-quizz-data-profil'
import { QUESTIONS } from './Choisir_3Needs1-quizz-data-questions'

import {
  type QuizResult,
  calculateResultAction,
} from '@/src/app/api/quiz_profil/Choisir_3Needs2-quizz'

export const QuizBesoins_modal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  // 0 = Accueil, 1-10 = Questions dynamiques dans la modale, >10 = Résultat
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleStart = () => {
    setCurrentStep(1)
    setIsModalOpen(true)
  }

  const getNextStep = (): number | 'RESULT' => {
    if (currentStep < QUESTIONS.length) {
      return currentStep + 1
    }
    return 'RESULT'
  }

  const handleAnswer = async (value: string) => {
    const updatedAnswers = {
      ...answers,
      [currentStep]: value,
    }
    setAnswers(updatedAnswers)

    const nextStep = getNextStep()
    if (nextStep === 'RESULT') {
      setIsLoading(true)
      try {
        const res = await calculateResultAction(updatedAnswers)
        setResult(res)
        setCurrentStep(QUESTIONS.length + 1)
      } catch (error) {
        console.error('Erreur lors du calcul du profil :', error)
      } finally {
        setIsLoading(false)
      }
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
      setResult(null)
      setCurrentStep(0)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setAnswers({})
    setResult(null)
    setCurrentStep(0)
  }

  const resetQuiz = () => {
    setAnswers({})
    setResult(null)
    setCurrentStep(1)
  }

  const resultData = result ? PROFILES[result.key] : null

  return (
    <>
      {/* --- ÉCRAN D'ACCUEIL (Fixe sur la page) --- */}
      <div
        className="scroll-mt-56 mb-6 py-3 px-6 border border-emerald-500/30 rounded-xl bg-emerald-100 shadow-inner
         dark:bg-emerald-800 dark:border-emerald-600"
      >
        <div className="text-center py-2">
          <h3 className="text-xl font-bold ">
            <span className="text-4xl">🎯</span> Découvre ton profil&nbsp;!
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 mb-4 max-w-md mx-auto">
            Réponds aux questions pour analyser tes contraintes, identifier tes
            besoins, cibler ton usage et découvrir les modèles les plus
            recommandés.
          </p>
          <button
            onClick={handleStart}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-md transition-all active:scale-95"
          >
            Commencer le test
          </button>
        </div>
      </div>

      {/* --- MODALE (Déroulement pas à pas) --- */}
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
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full">
                  Ton Profil
                </span>
              </div>
            )}
          </div>

          {/* CORPS DE LA MODALE */}
          <ModalBody className="space-y-2 min-h-[23vh] max-h-[70vh] overflow-y-auto pt-0 px-4">
            {/* ÉTAT : CHARGEMENT DU RÉSULTAT */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12 space-y-3">
                <Spinner color="success" size="lg" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Analyse de tes réponses en cours...
                </p>
              </div>
            )}

            {/* ÉTAT : QUESTIONS PAS À PAS */}
            {!isLoading &&
              currentStep >= 1 &&
              currentStep <= QUESTIONS.length && (
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

            {/* ÉTAT : RÉSULTAT FINAL DANS LA MODALE */}
            {!isLoading && currentStep > QUESTIONS.length && resultData && (
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

                {/* Encarts d'avertissement */}
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
                        className="p-2 bg-emerald-100 dark:bg-emerald-800/80 dark:text-white text-center font-semibold rounded-lg text-sm hover:scale-[1.02] transition-transform"
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
                variant="light"
                onPress={handleBack}
                isDisabled={isLoading}
                className="rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium
                hover:bg-slate-200 dark:hover:bg-slate-600 transition-transform"
              >
                ← Retour
              </Button>
            ) : (
              <Button
                variant="light"
                onPress={resetQuiz}
                isDisabled={isLoading}
                className="rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium
                hover:bg-slate-200 dark:hover:bg-slate-600 transition-transform"
              >
                🔄 Refaire le test
              </Button>
            )}
            {/* Bouton de droite : Fermer */}
            <Button
              variant="light"
              onPress={handleCloseModal}
              className="rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium
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
