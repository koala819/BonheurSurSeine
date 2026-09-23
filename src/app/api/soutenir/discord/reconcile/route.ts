// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  isDiscordRoleConfigured,
  reconcileDiscordRoles,
} from '@/src/features/soutenir/server/discord-role'
import { timingSafeEqual } from 'node:crypto'

export const runtime = 'nodejs'

function validAuthorization(request: NextRequest) {
  const secret = process.env.BSS_SOUTENIR_DISCORD_SYNC_SECRET?.trim()
  const provided = request.headers.get('authorization')?.replace(/^Bearer /, '')

  if (!secret || !provided) {
    return false
  }

  const expectedBuffer = Buffer.from(secret)
  const providedBuffer = Buffer.from(provided)

  return (
    expectedBuffer.length === providedBuffer.length &&
    timingSafeEqual(expectedBuffer, providedBuffer)
  )
}

export async function POST(request: NextRequest) {
  if (!process.env.BSS_SOUTENIR_DISCORD_SYNC_SECRET?.trim()) {
    return NextResponse.json(
      { error: 'Synchronisation non configurée.' },
      { status: 503 },
    )
  }

  if (!validAuthorization(request)) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  if (!isDiscordRoleConfigured()) {
    return NextResponse.json(
      { error: 'Rôle Discord non configuré.' },
      { status: 503 },
    )
  }

  const counts = await reconcileDiscordRoles()

  return NextResponse.json({ counts })
}
