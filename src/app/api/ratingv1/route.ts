import { NextResponse } from 'next/server'

import client from '@/src/lib/turso'

export const dynamic = 'force-dynamic'

// Initialisation de la table au démarrage
let dbReady: Promise<void> | null = null

function initDBOnce() {
  if (!dbReady) {
    dbReady = client
      .execute(`
    CREATE TABLE IF NOT EXISTS ratings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rating INTEGER NOT NULL
    );
  `)
      .then(() => {})
  }
  return dbReady
}

export async function GET() {
  await initDBOnce()

  const result = await client.execute('SELECT rating FROM ratings')

  const rows = result.rows as any[]
  const count = rows.length

  if (count === 0) {
    return NextResponse.json({ average: 0, count: 0 })
  }

  const sum = rows.reduce((acc, r) => acc + Number(r.rating), 0)
  const average = (sum / count).toFixed(2)

  return NextResponse.json({ average, count })
}

export async function POST(request: Request) {
  await initDBOnce()

  const { rating } = await request.json()

  if (!rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Note invalide' }, { status: 400 })
  }

  await client.execute({
    sql: 'INSERT INTO ratings (rating) VALUES (?)',
    args: [rating],
  })

  return NextResponse.json({ success: true })
}
