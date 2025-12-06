import { createClient } from '@libsql/client'

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

if (!url || !authToken) {
  throw new Error(
    'Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN in environment variables',
  )
}

const client =
  (globalThis as any).__tursoClient ??
  createClient({
    url,
    authToken,
  })

;(globalThis as any).__tursoClient = client

export default client
