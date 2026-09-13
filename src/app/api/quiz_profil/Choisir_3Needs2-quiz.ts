'use server'

import { ProfileKey } from '@/src/components/atoms/Choisir_3Needs1-quiz-list-profils'

import fs from 'fs'
import path from 'path'

export interface QuizResult {
  key: ProfileKey
  showWarning_debutant: boolean
  showWarning_entretien: boolean
  showWarning_suspension: boolean
}

let rulesCache: Record<string, QuizResult> | null = null

function loadRulesFromCSV(): Record<string, QuizResult> {
  if (rulesCache) return rulesCache
  //=> Le fichier CSV est un "Enregistrer Sous" fait sous Excel :
  //   selectionnez CSV UTF8 (délimité par des virgules)
  //   sur une version française, ce sera des ";"
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'api',
    'quiz_profil',
    'Choisir_3Needs2-quiz-recommandations_v2026-08-29_CSVUTF8.csv',
  )

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  // Découpage compatible Unix (\n) et Windows (\r\n)
  const lines = fileContent.split(/\r?\n/)
  const rulesMap: Record<string, QuizResult> = {}

  if (lines.length <= 1) return {}

  // Détection automatique du séparateur (virgule ou point-virgule)
  const separator = lines[0].includes(';') ? ';' : ','

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const col = line
      .split(separator)
      .map((cell) => cell.trim().replace(/^"|"$/g, ''))

    if (col.length < 15) continue

    // Clef formée par les réponses Q1 à Q10 (colonnes 1 à 10)
    const key = col.slice(1, 11).join('|')

    // Extraction des 3 colonnes d'avertissements (index 11, 12, 13)
    const warnings = [col[11], col[12], col[13]].map((w) => w.toLowerCase())

    rulesMap[key] = {
      key: col[14] as ProfileKey, // Colonne PROFIL (index 14)
      showWarning_debutant: warnings.includes('debutant'),
      showWarning_suspension: warnings.includes('suspension'),
      showWarning_entretien: warnings.includes('entretien'),
    }
  }

  rulesCache = rulesMap
  return rulesMap
}

export async function calculateResultAction(
  answers: Record<number, string>,
): Promise<QuizResult> {
  const rules = loadRulesFromCSV()

  const key = Array.from({ length: 10 }, (_, i) => answers[i + 1] || '').join(
    '|',
  )

  return (
    rules[key] || {
      key: 'P5_indecis',
      showWarning_debutant: false,
      showWarning_entretien: false,
      showWarning_suspension: false,
    }
  )
}
