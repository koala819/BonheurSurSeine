import { createClient } from '@libsql/client'

function getClient() {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url || !authToken) {
    throw new Error(
      'Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN in environment variables',
    )
  }

  const globalClient = (globalThis as any).__tursoClient
  if (globalClient) {
    return globalClient
  }

  const client = createClient({ url, authToken })
  ;(globalThis as any).__tursoClient = client
  return client
}

const client = {
  execute: (...args: any[]) => getClient().execute(...args),
}

export default client
