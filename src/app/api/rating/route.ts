import { NextResponse } from 'next/server'

import { createClient } from '@libsql/client'

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

// Initialisation sécurisée : exécutée au premier appel GET/POST
async function initDB() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS ratings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rating INTEGER NOT NULL
    );
  `)
}

export async function GET() {
  await initDB()

  const result = await client.execute('SELECT rating FROM ratings')

  // TS n’aime pas "row.rating" car Row est "Record<string, unknown>"
  const rows = result.rows.map((r) => ({
    rating: Number(r.rating),
  }))

  const count = rows.length

  if (count === 0) {
    return NextResponse.json({ average: 0, count: 0 })
  }

  const sum = rows.reduce((acc, r) => acc + r.rating, 0)
  const average = +(sum / count).toFixed(1)

  return NextResponse.json({ average, count })
}

export async function POST(request: Request) {
  await initDB()

  const body = await request.json()
  const rating = Number(body.rating)

  if (!rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Note invalide' }, { status: 400 })
  }

  await client.execute({
    sql: 'INSERT INTO ratings (rating) VALUES (?)',
    args: [rating],
  })

  return NextResponse.json({ success: true })
}
