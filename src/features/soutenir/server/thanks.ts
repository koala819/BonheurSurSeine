// BSS-SOUTENIR — Module plateforme de soutien
import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'

import 'server-only'

export type ThanksProfile = {
  consentAt: string | null
  pseudonym: string | null
}

export async function getContributorThanksProfile(
  contributorId: string,
): Promise<ThanksProfile> {
  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [contributorId],
    sql: `SELECT thanks_pseudonym, thanks_consent_at
      FROM bss_soutenir_contributors WHERE id = ? LIMIT 1`,
  })
  const row = result.rows[0]

  return {
    consentAt: row?.thanks_consent_at ? String(row.thanks_consent_at) : null,
    pseudonym: row?.thanks_pseudonym ? String(row.thanks_pseudonym) : null,
  }
}

export async function saveContributorThanksProfile(
  contributorId: string,
  pseudonym: string | null,
) {
  await initializeSoutenirDatabase()

  const now = new Date().toISOString()
  await getSoutenirDatabase().execute({
    args: [pseudonym, pseudonym ? now : null, now, contributorId],
    sql: `UPDATE bss_soutenir_contributors
      SET thanks_pseudonym = ?, thanks_consent_at = ?, updated_at = ?
      WHERE id = ?`,
  })
}

export async function getThanksPseudonyms() {
  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [new Date().toISOString()],
    sql: `SELECT contributor.thanks_pseudonym
      FROM bss_soutenir_contributors contributor
      WHERE contributor.thanks_consent_at IS NOT NULL
        AND contributor.thanks_pseudonym IS NOT NULL
        AND EXISTS (
          SELECT 1 FROM bss_soutenir_contributions contribution
          WHERE contribution.contributor_id = contributor.id
            AND contribution.status = 'paid'
            AND (contribution.mode = 'monthly' OR contribution.access_expires_at IS NOT NULL)
            AND (contribution.access_expires_at IS NULL OR contribution.access_expires_at > ?)
        )
      ORDER BY contributor.thanks_pseudonym COLLATE NOCASE, contributor.id`,
  })

  return result.rows.map((row) => String(row.thanks_pseudonym))
}
