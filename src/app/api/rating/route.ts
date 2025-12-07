import { NextResponse } from 'next/server'

import client from '@/src/lib/turso'

// =====================================================
// Mots interdits
// =====================================================
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

// =====================================================
// Nettoyage & modération
// =====================================================
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
  return text.replace(/[\s\-.,'"]/g, '')
}

function containsBannedWord(comment: string): string | null {
  const cleaned = cleanText(comment)
  for (const w of bannedWords) {
    if (cleaned.includes(w)) return w
  }
  return null
}

// =====================================================
// Initialisation DB (une seule fois)
// =====================================================
let dbReady: Promise<void> | null = null

function initDBOnce() {
  if (!dbReady) {
    dbReady = client
      .execute(
        `
      CREATE TABLE IF NOT EXISTS ratingsfull (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        rating INTEGER NOT NULL,
        pseudo TEXT,
        comment TEXT,
        approved INTEGER DEFAULT 0,
        flagged TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `,
      )
      .then(() => {})
  }
  return dbReady
}

// =====================================================
// GET — données + commentaires aléatoires
// =====================================================
export async function GET() {
  await initDBOnce()

  // Notes approuvées
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

  // 1. Récupère uniquement les IDs approuvés
  const idsResult = await client.execute(`
    SELECT id
    FROM ratingsfull
    WHERE approved = 1 AND comment IS NOT NULL AND comment != ''
  `)
  const ids = idsResult.rows.map((r: any) => r.id)

  // 2. Mélange local (Fisher-Yates) — super rapide
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[ids[i], ids[j]] = [ids[j], ids[i]]
  }

  // 3. Garde seulement 10 IDs
  const selectedIds = ids.slice(0, 10)

  let comments = []
  if (selectedIds.length > 0) {
    const placeholders = selectedIds.map(() => '?').join(',')
    const commentsResult = await client.execute(
      `
        SELECT rating, pseudo, comment
        FROM ratingsfull
        WHERE id IN (${placeholders})
      `,
      selectedIds,
    )

    comments = commentsResult.rows.map((r: any) => ({
      rating: Number(r.rating),
      pseudo: r.pseudo || 'Anonyme',
      comment: r.comment,
    }))
  }

  return NextResponse.json({
    average,
    count,
    comments,
  })
}

// =====================================================
// POST (lors de la saisie) — modération + insertion
// =====================================================
export async function POST(request: Request) {
  await initDBOnce()

  const body = await request.json()
  const rating = Number(body.rating)
  const pseudo = body.pseudo
  const comment = body.comment

  // Validation note
  if (!rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Note invalide' }, { status: 400 })
  }

  // Nettoyage pseudo et commentaire
  const safePseudo =
    typeof pseudo === 'string' && pseudo.trim()
      ? pseudo.trim().slice(0, 20)
      : 'Anonyme'
  const safeComment =
    typeof comment === 'string' ? comment.trim().slice(0, 60) : ''
  // Flag des saisies posant pbm
  let approved = 1
  let flagged: string | null = null

  const flaggedComment = containsBannedWord(safeComment)
  if (flaggedComment) {
    approved = 0
    flagged = flaggedComment
  }

  const flaggedPseudo = containsBannedWord(safePseudo)
  if (flaggedPseudo) {
    approved = 0
    flagged = flaggedPseudo
  }

  // Insertion en base
  await client.execute({
    sql: `
      INSERT INTO ratingsfull (rating, pseudo, comment, approved, flagged)
      VALUES (?, ?, ?, ?, ?)
    `,
    args: [rating, safePseudo, safeComment || null, approved, flagged],
  })

  return NextResponse.json({ success: true })
}
