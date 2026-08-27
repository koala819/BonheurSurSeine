'use server'

import { ProfileKey } from '@/src/components/atoms/Choisir_3Needs1-quizz-data-profil'

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

  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'api',
    'quiz_profil',
    'Choisir_3Needs2-QUIZZ_RECO_v2026-08-29.csv',
  )

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  // Découpage compatible Unix (\n) et Windows (\r\n)
  const lines = fileContent.split(/\r?\n/)
  const rulesMap: Record<string, QuizResult> = {}

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    // Nettoyage de chaque cellule (retrait des guillemets et espaces)
    const col = line.split(';').map((cell) => cell.trim().replace(/^"|"$/g, ''))

    if (col.length < 15) continue

    // Clef formée par les réponses Q1 à Q10 (colonnes 1 à 10)
    const key = col.slice(1, 11).join('|')

    rulesMap[key] = {
      key: col[14] as ProfileKey,
      showWarning_debutant: col[11] === 'TRUE' || col[11] === '1',
      showWarning_entretien: col[12] === 'TRUE' || col[12] === '1',
      showWarning_suspension: col[13] === 'TRUE' || col[13] === '1',
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
