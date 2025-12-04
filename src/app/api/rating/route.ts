import { NextResponse } from 'next/server'

import Database from 'better-sqlite3'

const db = new Database('database/rating.db')

// Initialise la table au cas où
db.exec(`
  CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rating INTEGER NOT NULL
  );
`)

export async function GET() {
  const rows = db.prepare('SELECT rating FROM ratings').all()
  const count = rows.length

  if (count === 0) {
    return NextResponse.json({ average: 0, count: 0 })
  }

  const sum = rows.reduce(
    (acc: number, r: { rating: number }) => acc + r.rating,
    0,
  )
  const average = (sum / count).toFixed(1)

  return NextResponse.json({ average, count })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { rating } = body

  if (!rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Note invalide' }, { status: 400 })
  }

  db.prepare('INSERT INTO ratings (rating) VALUES (?)').run(rating)

  return NextResponse.json({ success: true })
}
