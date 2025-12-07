import { NextResponse } from 'next/server'

import client from '@/src/lib/turso'

// =======================
// Mots interdits (minimisées, sans accents, sans espaces)
// =======================
const bannedWords = [
  'con',
  'connard',
  'idiot',
  'pd',
  'merde',
  'fdp',
  'bobo',
  'parisien',
  'juif',
  'youpin',
  'shit',
  'fuck',
  'abruti',
  'pute',
  'salope',
  'tamere',
  'triso',
  'encule',
]

// =======================
// Fonctions de nettoyage
// =======================

// Enlève accents (é, à, ü, etc.)
function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

// Remplace les chiffres/symboles par des lettres proches (leetspeak)
function replaceLeetspeak(str: string): string {
  return str
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/@/g, 'a')
    .replace(/\$/g, 's')
}

// Nettoyage général : minuscules, accents, leetspeak, suppression espaces & ponctuations
function cleanText(str: string): string {
  let text = str.toLowerCase()
  text = removeAccents(text)
  text = replaceLeetspeak(text)
  text = text.replace(/[\s\-.,'"]/g, '')
  return text
}

// =======================
// Modération complète
// =======================
function containsBannedWord(comment: string): string | null {
  const cleaned = cleanText(comment)

  for (const word of bannedWords) {
    if (cleaned.includes(word)) {
      return word
    }
  }

  return null
}

// =======================
// Init DB
// =======================
async function initDB() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS ratingsfull (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rating INTEGER NOT NULL,
      pseudo TEXT,
      comment TEXT,
      approved INTEGER DEFAULT 0,
      flagged TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `)
}

// S'assurer que la DB est prête
const dbReady = initDB()

// =======================
// GET : stats + commentaires aléatoires approuvés
// =======================
export async function GET() {
  await dbReady

  // Stats notes approuvées
  const ratingsResult = await client.execute(`
    SELECT rating
    FROM ratingsfull
    WHERE rating IS NOT NULL AND approved = 1
  `)
  const rows = ratingsResult.rows as any[]
  const count = rows.length

  let average = 0
  if (count > 0) {
    const sum = rows.reduce((acc, r) => acc + Number(r.rating), 0)
    average = Number((sum / count).toFixed(2))
  }

  // Commentaires approuvés aléatoires (limite 10)
  const commentsResult = await client.execute(`
    SELECT rating, pseudo, comment
    FROM ratingsfull
    WHERE approved = 1
      AND comment IS NOT NULL
      AND comment != ''
    ORDER BY random()
    LIMIT 10
  `)

  const commentsRows = commentsResult.rows as any[]

  return NextResponse.json({
    average,
    count,
    comments: commentsRows.map((r) => ({
      rating: Number(r.rating),
      pseudo: r.pseudo || 'Anonyme',
      comment: r.comment,
    })),
  })
}

// =======================
// POST : ajout commentaire avec modération avancée
// =======================
export async function POST(request: Request) {
  await dbReady

  const body = await request.json()
  const rating = Number(body.rating)
  const comment = body.comment
  const pseudo = body.pseudo

  // Validation note
  if (!rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Note invalide' }, { status: 400 })
  }

  // Nettoyage pseudo
  const safePseudo =
    typeof pseudo === 'string' && pseudo.trim()
      ? pseudo.trim().slice(0, 20)
      : 'Anonyme'

  // Nettoyage commentaire
  const safeComment =
    typeof comment === 'string' ? comment.trim().slice(0, 60) : ''

  // Modération avancée Commentaire et Pseudo
  let approved = 1
  let flagged: string | null = null

  const flaggedWord = containsBannedWord(safeComment)
  if (flaggedWord) {
    approved = 0
    flagged = flaggedWord
  }
  const flaggedPseudoWord = containsBannedWord(safePseudo)
  if (flaggedPseudoWord) {
    approved = 0
    flagged = flaggedPseudoWord
  }

  // Insertion en base
  await client.execute({
    sql: `
      INSERT INTO ratingsfull (rating, pseudo, comment, approved, flagged)
      VALUES (?, ?, ?, ?, ?)
    `,
    args: [rating, safePseudo, safeComment || null, approved, flagged],
  })

  // Réponse uniforme : ne jamais indiquer un refus
  return NextResponse.json({
    success: true,
  })
}
