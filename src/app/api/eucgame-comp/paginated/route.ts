// src/app/api/ratings/paginated/route.ts
import { NextResponse } from 'next/server'

import client from '@/src/lib/turso'

export const dynamic = 'force-dynamic'

// Initialisation DB
let dbReady: Promise<void> | null = null

function initDBOnce() {
  if (!dbReady) {
    dbReady = client
      .execute(
        `
        CREATE TABLE IF NOT EXISTS eucgame_avis (
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

export async function GET(request: Request) {
  await initDBOnce()

  const url = new URL(request.url)

  // valeurs fixes par défaut
  const offset = Number(url.searchParams.get('offset') || '0')
  const limit = Number(url.searchParams.get('limit') || '10')

  // Total d'avis approuvés
  const totalResult = await client.execute(`
    SELECT COUNT(*) as total
    FROM eucgame_avis
    WHERE approved = 1 AND comment IS NOT NULL AND comment != ''
  `)

  const totalCount = Number((totalResult.rows as any[])[0].total || 0)

  // Page courante
  const pageResult = await client.execute(
    `
      SELECT rating, pseudo, comment, created_at
      FROM eucgame_avis
      WHERE approved = 1 AND comment IS NOT NULL AND comment != ''
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `,
    [limit, offset],
  )

  const items = (pageResult.rows as any[]).map((r) => ({
    rating: Number(r.rating),
    pseudo: r.pseudo || 'Anonyme',
    comment: r.comment,
    created_at: r.created_at,
  }))

  return NextResponse.json({
    totalCount,
    items,
    hasMore: offset + limit < totalCount,
  })
}
