'use client'

import { useState } from 'react'

import { calculateResult } from './Choisir_3Needs-quizz-algo'
import { PROFILES } from './Choisir_3Needs-quizz-data-profil'
import { QUESTIONS } from './Choisir_3Needs-quizz-data-questions'

export const QuizBesoins_beta = () => {
  // 0 = Accueil, 1-10 = Questions dynamiques dans la modale, >10 = Résultat
  const [answers, setAnswers] = useState<Record<number, string>>({})

  return (
    <>
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

        {/* RÉSULTAT EN DIRECT À DROITE DE LA GRILLE */}
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
                const liveResult = calculateResult(answers)
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
      {/* --- FIN CONFIGURATEUR VISUEL (BETA) --- */}
    </>
  )
}
