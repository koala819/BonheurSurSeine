// src/lib/turso.ts
import { createClient } from '@libsql/client'

const client =
  (globalThis as any).__tursoClient ??
  createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })

;(globalThis as any).__tursoClient = client

export default client
