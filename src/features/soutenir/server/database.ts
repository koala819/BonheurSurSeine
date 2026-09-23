// BSS-SOUTENIR — Module plateforme de soutien
import { type Client, createClient } from '@libsql/client'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import 'server-only'

type SoutenirGlobal = typeof globalThis & {
  __bssSoutenirDatabase?: Client
  __bssSoutenirDatabaseInitialization?: Promise<void>
}

const globalForSoutenir = globalThis as SoutenirGlobal

function getDefaultLocalDatabaseUrl() {
  if (process.env.VERCEL === '1' || process.env.VERCEL_ENV) {
    throw new Error(
      'La base de données dédiée au soutien doit être configurée sur Vercel.',
    )
  }

  const databasePath = join(
    process.cwd(),
    'src',
    'features',
    'soutenir',
    'data',
    'soutenir-local.db',
  )

  mkdirSync(dirname(databasePath), { recursive: true })

  return `file:${databasePath.replaceAll('\\', '/')}`
}

export function getSoutenirDatabase() {
  if (globalForSoutenir.__bssSoutenirDatabase) {
    return globalForSoutenir.__bssSoutenirDatabase
  }

  const url =
    process.env.BSS_SOUTENIR_DATABASE_URL?.trim() ||
    getDefaultLocalDatabaseUrl()
  const authToken = process.env.BSS_SOUTENIR_DATABASE_AUTH_TOKEN
  const client = createClient(authToken ? { authToken, url } : { url })

  globalForSoutenir.__bssSoutenirDatabase = client

  return client
}

export function hasConfiguredSoutenirDatabase() {
  return Boolean(process.env.BSS_SOUTENIR_DATABASE_URL?.trim())
}

async function traceInitializationStep<T>(
  step: string,
  operation: () => Promise<T>,
): Promise<T> {
  try {
    return await operation()
  } catch (error) {
    // Nom d'étape uniquement : ne jamais journaliser l'URL ni le jeton Turso.
    process.stderr.write(`BSS-SOUTENIR database initialization: ${step}\n`)
    throw error
  }
}

async function initializeSchema() {
  const database = getSoutenirDatabase()

  if (
    process.env.VERCEL === '1' &&
    process.env.VERCEL_ENV === 'preview' &&
    process.env.VERCEL_GIT_COMMIT_REF === 'dev'
  ) {
    await traceInitializationStep('connectivity-select', () =>
      database.execute('SELECT 1'),
    )
  }

  await traceInitializationStep('foreign-keys-pragma', () =>
    database.execute('PRAGMA foreign_keys = ON'),
  )

  const tableCreation = database.batch(
    [
      `CREATE TABLE IF NOT EXISTS bss_soutenir_contributors (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL COLLATE NOCASE UNIQUE,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_contributions (
        id TEXT PRIMARY KEY,
        contributor_id TEXT NOT NULL,
        mode TEXT NOT NULL CHECK (mode IN ('once', 'monthly')),
        amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
        currency TEXT NOT NULL DEFAULT 'EUR',
        status TEXT NOT NULL CHECK (
          status IN ('simulated', 'pending', 'paid', 'refunded', 'cancelled')
        ),
        access_starts_at TEXT NOT NULL,
        access_expires_at TEXT,
        stripe_checkout_session_id TEXT,
        stripe_customer_id TEXT,
        stripe_payment_intent_id TEXT,
        stripe_subscription_id TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (contributor_id)
          REFERENCES bss_soutenir_contributors(id)
          ON DELETE CASCADE
      )`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_contributions_contributor_idx
        ON bss_soutenir_contributions(contributor_id)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_contributions_status_idx
        ON bss_soutenir_contributions(status)`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_webhook_events (
        id TEXT PRIMARY KEY,
        type TEXT NOT NULL,
        stripe_created_at TEXT NOT NULL,
        processed_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_magic_links (
        id TEXT PRIMARY KEY,
        contributor_id TEXT NOT NULL,
        token_hash TEXT NOT NULL UNIQUE,
        expires_at TEXT NOT NULL,
        used_at TEXT,
        created_at TEXT NOT NULL,
        FOREIGN KEY (contributor_id)
          REFERENCES bss_soutenir_contributors(id)
          ON DELETE CASCADE
      )`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_sessions (
        id TEXT PRIMARY KEY,
        contributor_id TEXT NOT NULL,
        token_hash TEXT NOT NULL UNIQUE,
        expires_at TEXT NOT NULL,
        created_at TEXT NOT NULL,
        last_seen_at TEXT NOT NULL,
        FOREIGN KEY (contributor_id)
          REFERENCES bss_soutenir_contributors(id)
          ON DELETE CASCADE
      )`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_magic_links_contributor_idx
        ON bss_soutenir_magic_links(contributor_id)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_magic_links_expiry_idx
        ON bss_soutenir_magic_links(expires_at)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_sessions_contributor_idx
        ON bss_soutenir_sessions(contributor_id)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_sessions_expiry_idx
        ON bss_soutenir_sessions(expires_at)`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_discord_oauth_states (
        id TEXT PRIMARY KEY,
        contributor_id TEXT NOT NULL,
        session_id TEXT NOT NULL,
        state_hash TEXT NOT NULL UNIQUE,
        expires_at TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (contributor_id)
          REFERENCES bss_soutenir_contributors(id)
          ON DELETE CASCADE,
        FOREIGN KEY (session_id)
          REFERENCES bss_soutenir_sessions(id)
          ON DELETE CASCADE
      )`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_discord_links (
        contributor_id TEXT PRIMARY KEY,
        discord_user_id TEXT NOT NULL UNIQUE,
        username TEXT NOT NULL,
        global_name TEXT,
        avatar_hash TEXT,
        linked_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        role_status TEXT NOT NULL DEFAULT 'pending',
        role_granted_at TEXT,
        role_synced_at TEXT,
        FOREIGN KEY (contributor_id)
          REFERENCES bss_soutenir_contributors(id)
          ON DELETE CASCADE
      )`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_discord_states_session_idx
        ON bss_soutenir_discord_oauth_states(session_id)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_discord_states_expiry_idx
        ON bss_soutenir_discord_oauth_states(expires_at)`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_video_admin_links (
        id TEXT PRIMARY KEY,
        admin_email TEXT NOT NULL,
        token_hash TEXT NOT NULL UNIQUE,
        expires_at TEXT NOT NULL,
        used_at TEXT,
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_video_admin_sessions (
        id TEXT PRIMARY KEY,
        admin_email TEXT NOT NULL,
        token_hash TEXT NOT NULL UNIQUE,
        expires_at TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS bss_soutenir_videos (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        url TEXT NOT NULL UNIQUE,
        created_at TEXT NOT NULL
      )`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_videos_created_idx
        ON bss_soutenir_videos(created_at)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_video_admin_links_expiry_idx
        ON bss_soutenir_video_admin_links(expires_at)`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_video_admin_sessions_expiry_idx
        ON bss_soutenir_video_admin_sessions(expires_at)`,
    ],
    'write',
  )
  await traceInitializationStep('create-tables-batch', () => tableCreation)

  const contributorColumns = await database.execute(
    'PRAGMA table_info(bss_soutenir_contributors)',
  )
  const contributorColumnNames = new Set(
    contributorColumns.rows.map((column) => String(column.name)),
  )

  if (!contributorColumnNames.has('thanks_pseudonym')) {
    await database.execute(
      'ALTER TABLE bss_soutenir_contributors ADD COLUMN thanks_pseudonym TEXT',
    )
  }

  if (!contributorColumnNames.has('thanks_consent_at')) {
    await database.execute(
      'ALTER TABLE bss_soutenir_contributors ADD COLUMN thanks_consent_at TEXT',
    )
  }

  const columns = await database.execute(
    'PRAGMA table_info(bss_soutenir_contributions)',
  )
  const columnNames = new Set(columns.rows.map((column) => String(column.name)))
  const stripeColumns = [
    'stripe_checkout_session_id',
    'stripe_customer_id',
    'stripe_payment_intent_id',
    'stripe_subscription_id',
  ]

  for (const columnName of stripeColumns) {
    if (!columnNames.has(columnName)) {
      await database.execute(
        `ALTER TABLE bss_soutenir_contributions ADD COLUMN ${columnName} TEXT`,
      )
    }
  }

  const discordColumns = await database.execute(
    'PRAGMA table_info(bss_soutenir_discord_links)',
  )
  const discordColumnNames = new Set(
    discordColumns.rows.map((column) => String(column.name)),
  )
  const missingDiscordColumns = [
    { name: 'role_status', definition: "TEXT NOT NULL DEFAULT 'pending'" },
    { name: 'role_granted_at', definition: 'TEXT' },
    { name: 'role_synced_at', definition: 'TEXT' },
  ]

  for (const column of missingDiscordColumns) {
    if (!discordColumnNames.has(column.name)) {
      await database.execute(
        `ALTER TABLE bss_soutenir_discord_links ADD COLUMN ${column.name} ${column.definition}`,
      )
    }
  }

  await database.batch(
    [
      `CREATE UNIQUE INDEX IF NOT EXISTS bss_soutenir_contributions_stripe_session_idx
        ON bss_soutenir_contributions(stripe_checkout_session_id)
        WHERE stripe_checkout_session_id IS NOT NULL`,
      `CREATE UNIQUE INDEX IF NOT EXISTS bss_soutenir_contributions_stripe_subscription_idx
        ON bss_soutenir_contributions(stripe_subscription_id)
        WHERE stripe_subscription_id IS NOT NULL`,
      `CREATE INDEX IF NOT EXISTS bss_soutenir_contributions_stripe_payment_idx
        ON bss_soutenir_contributions(stripe_payment_intent_id)
        WHERE stripe_payment_intent_id IS NOT NULL`,
    ],
    'write',
  )
}

export async function initializeSoutenirDatabase() {
  if (!globalForSoutenir.__bssSoutenirDatabaseInitialization) {
    globalForSoutenir.__bssSoutenirDatabaseInitialization = initializeSchema()
  }

  try {
    await globalForSoutenir.__bssSoutenirDatabaseInitialization
  } catch (error) {
    globalForSoutenir.__bssSoutenirDatabaseInitialization = undefined
    throw error
  }
}
