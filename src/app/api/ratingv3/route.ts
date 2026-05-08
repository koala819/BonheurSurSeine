import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

import client from '@/src/lib/turso'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

// =====================================================
// Types
// =====================================================

type CommentRow = {
  rating: number
  pseudo: string
  comment: string
}

// =====================================================
// Anti spam mémoire simple
// =====================================================

const rateLimitMap = new Map<string, number>()

const RATE_LIMIT_DELAY = 60_000

// =====================================================
// Mots interdits
// =====================================================

const bannedWords = [
  'con ',
  'connard',
  'idiot',
  'fdp',
  'merde',
  'travelo',
  'pute',
  'salope',
  'bite ',
  'naz',
  'fuck',
  'youpin',
  'wizzas',
  'connard ',
  'idiot',
  'pd ',
  'PD ',
  'fdp',
  'bobo',
  'parisien',
  'juif',
  'shit',
  'abruti',
  'salope ',
  'tamere',
  'triso',
  'pauv',
  'gogo',
  'debile',
  'bite',
  'encul',
  'cul',
  'tarace',
]

// =====================================================
// Utils
// =====================================================

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

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

function cleanText(str: string): string {
  return replaceLeetspeak(removeAccents(str.toLowerCase())).replace(
    /[^a-z0-9]/g,
    '',
  )
}

function containsBannedWord(str: string): string | null {
  const cleaned = cleanText(str)

  for (const word of bannedWords) {
    const cleanedWord = cleanText(word)

    if (cleaned.includes(cleanedWord)) {
      return word
    }
  }

  return null
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidPseudo(str: string): boolean {
  return /^[\p{L}\p{N} ._-]+$/u.test(str)
}

// =====================================================
// DB init
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
          approved INTEGER DEFAULT 1,
          flagged TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `,
      )
      .then(() => {})
  }

  return dbReady
}

// =====================================================
// GET
// =====================================================

export async function GET() {
  await initDBOnce()

  const globalResult = await client.execute(`
    SELECT
      COUNT(*) as count,
      AVG(rating) as average
    FROM ratingsfull
    WHERE approved = 1
  `)

  const statsRow = globalResult.rows[0] as {
    count: number
    average: number
  }

  const count = Number(statsRow.count || 0)
  const average = Number(statsRow.average || 0)

  const countsResult = await client.execute(`
    SELECT rating, COUNT(*) as count
    FROM ratingsfull
    WHERE approved = 1
    GROUP BY rating
  `)

  const countsByRating: Record<number, number> = {}

  for (const row of countsResult.rows as any[]) {
    countsByRating[row.rating] = Number(row.count)
  }

  const commentsResult = await client.execute(`
    SELECT rating, pseudo, comment
    FROM ratingsfull
    WHERE approved = 1
      AND comment IS NOT NULL
      AND comment != ''
    ORDER BY created_at DESC
    LIMIT 10
  `)

  const comments: CommentRow[] = commentsResult.rows.map((r: any) => ({
    rating: Number(r.rating),
    pseudo: r.pseudo || 'Anonyme',
    comment: r.comment,
  }))

  return NextResponse.json({
    average,
    count,
    comments,
    countsByRating,
  })
}

// =====================================================
// POST
// =====================================================

export async function POST(request: Request) {
  await initDBOnce()

  try {
    const body = await request.json()

    const rating = Number(body.rating)
    const pseudo = String(body.pseudo || '')
    const comment = String(body.comment || '')

    // Validation note
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Note invalide' }, { status: 400 })
    }

    // Validation pseudo
    if (!pseudo.trim()) {
      return NextResponse.json({ error: 'Pseudo obligatoire' }, { status: 400 })
    }

    if (!isValidPseudo(pseudo)) {
      return NextResponse.json({ error: 'Pseudo invalide' }, { status: 400 })
    }

    // Validation commentaire
    if (!comment.trim()) {
      return NextResponse.json(
        { error: 'Commentaire obligatoire' },
        { status: 400 },
      )
    }

    const safePseudo = pseudo.trim().slice(0, 20)
    const safeComment = comment.trim().slice(0, 150)

    // =====================================================
    // Anti spam IP
    // =====================================================

    const headersList = await headers()

    const ip =
      headersList.get('x-forwarded-for') ||
      headersList.get('x-real-ip') ||
      'unknown'

    const lastRequest = rateLimitMap.get(ip)

    if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_DELAY) {
      return NextResponse.json(
        {
          error: 'Trop de requêtes. Réessaie plus tard.',
        },
        {
          status: 429,
        },
      )
    }

    rateLimitMap.set(ip, Date.now())

    // =====================================================
    // Modération
    // =====================================================

    let approved = 1
    let flagged: string | null = null

    const badPseudo = containsBannedWord(safePseudo)
    const badComment = containsBannedWord(safeComment)

    if (badPseudo || badComment) {
      approved = 0
      flagged = badPseudo || badComment
    }

    // =====================================================
    // Insert DB
    // =====================================================

    await client.execute({
      sql: `
        INSERT INTO ratingsfull (
          rating,
          pseudo,
          comment,
          approved,
          flagged
        )
        VALUES (?, ?, ?, ?, ?)
      `,
      args: [rating, safePseudo, safeComment, approved, flagged],
    })

    // =====================================================
    // Email
    // =====================================================

    const email = process.env.MAIL_USER
    const pass = process.env.MAIL_PWD
    const host = process.env.MAIL_HOST
    const port = process.env.MAIL_PORT

    if (email && pass && host && port) {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port),
        secure: parseInt(port) === 465,
        auth: {
          user: email,
          pass,
        },
      })

      const safePseudoHtml = escapeHtml(safePseudo)
      const safeCommentHtml = escapeHtml(safeComment)

      await transporter.sendMail({
        from: `"Site BsS - Avis" <${email}>`,
        to: 'bonheursurseine@gmail.com;fabien.wheeler@gmail.com',
        subject: `💬 Nouvel avis (${rating}⭐) : ${safePseudo}`,
        text: `
Pseudo : ${safePseudo}
Note : ${rating}/5
Commentaire :
${safeComment}

Modération : ${approved ? 'APPROUVÉ AUTOMATIQUEMENT' : 'BLOQUÉ AUTOMATIQUEMENT'}
Mot détecté : ${flagged || 'aucun'}
        `,
        html: `
          <h2>Nouveau commentaire reçu</h2>

          <p><strong>Pseudo :</strong> ${safePseudoHtml}</p>
          <p><strong>Note :</strong> ${rating} ⭐</p>
          <p><strong>Commentaire :</strong><br>${safeCommentHtml}</p>

          <hr />

          <p>
            <strong>Modération :</strong>
            ${approved ? '✅ APPROUVÉ AUTOMATIQUEMENT' : '❌ BLOQUÉ AUTOMATIQUEMENT'}
          </p>
          <p>
            <strong>Mot bloquant détecté :</strong>
            ${flagged || 'aucun'}
          </p>
          <p>
            <i>Pour approuver manuellement un commentaire bloqué à tort, aller dans la base Turso et modifier le statut <strong>approved</strong></i>.
          </p>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      approved,
      flagged,
    })
  } catch (err) {
    return NextResponse.json(
      {
        error: 'Erreur serveur',
      },
      {
        status: 500,
      },
    )
  }
}
