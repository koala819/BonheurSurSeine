import { NextResponse } from 'next/server'

import client from '@/src/lib/turso'

// Initialisation de la table au démarrage
async function initDB() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS ratings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rating INTEGER NOT NULL
    );
  `)
}

// On s'assure que la DB est prête avant toute requête
const dbReady = initDB()

export async function GET() {
  await dbReady

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
  await dbReady

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
