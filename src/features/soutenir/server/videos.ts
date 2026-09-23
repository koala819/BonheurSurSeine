// BSS-SOUTENIR — Module plateforme de soutien
import {
  getSoutenirDatabase,
  hasConfiguredSoutenirDatabase,
  initializeSoutenirDatabase,
} from './database'

import { randomUUID } from 'node:crypto'
import { readFile, rename, unlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import 'server-only'

export type ContributorVideo = {
  id: string
  title: string
  description: string | null
  url: string
}

const VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/
const VIDEO_FILE_PATH = join(
  process.cwd(),
  'src',
  'features',
  'soutenir',
  'data',
  'videos.local.json',
)
let pendingWrite: Promise<void> = Promise.resolve()

function getYouTubeVideoId(rawUrl: string) {
  let url: URL

  try {
    url = new URL(rawUrl)
  } catch {
    return null
  }

  if (url.protocol !== 'https:' || url.username || url.password) {
    return null
  }

  let id: string | null = null

  if (url.hostname === 'youtu.be') {
    id = url.pathname.slice(1)
  } else if (
    url.hostname === 'youtube.com' ||
    url.hostname === 'www.youtube.com' ||
    url.hostname === 'm.youtube.com'
  ) {
    const segments = url.pathname.split('/').filter(Boolean)

    if (url.pathname === '/watch') {
      id = url.searchParams.get('v')
    } else if (
      segments.length === 2 &&
      ['shorts', 'live', 'embed'].includes(segments[0])
    ) {
      id = segments[1]
    }
  }

  return id && VIDEO_ID_PATTERN.test(id) ? id : null
}

export async function getContributorVideos(): Promise<ContributorVideo[]> {
  if (hasConfiguredSoutenirDatabase()) {
    await initializeSoutenirDatabase()

    const result = await getSoutenirDatabase().execute(
      `SELECT id, title, description, url FROM bss_soutenir_videos
        ORDER BY created_at ASC, id ASC LIMIT 101`,
    )

    if (result.rows.length > 100) {
      throw new Error('Liste de vidéos invalide.')
    }

    return result.rows.map((row) => {
      const id = typeof row.id === 'string' ? row.id : ''
      const title = typeof row.title === 'string' ? row.title : ''
      const description =
        typeof row.description === 'string' ? row.description : null
      const url = typeof row.url === 'string' ? row.url : ''

      if (
        !VIDEO_ID_PATTERN.test(id) ||
        getYouTubeVideoId(url) !== id ||
        !title ||
        title.length > 120 ||
        (description && description.length > 240)
      ) {
        throw new Error('Entrée vidéo invalide.')
      }

      return { id, title, description, url }
    })
  }

  let contents: string

  try {
    contents = await readFile(VIDEO_FILE_PATH, 'utf8')
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return []
    }

    throw error
  }

  const entries: unknown = JSON.parse(contents)

  if (!Array.isArray(entries) || entries.length > 100) {
    throw new Error('Liste de vidéos locale invalide.')
  }

  const seenIds = new Set<string>()

  return entries.map((entry: unknown) => {
    if (!entry || typeof entry !== 'object') {
      throw new Error('Entrée vidéo locale invalide.')
    }

    const { title, description, url } = entry as Record<string, unknown>
    const id = typeof url === 'string' ? getYouTubeVideoId(url) : null
    const cleanTitle = typeof title === 'string' ? title.trim() : ''
    const cleanDescription =
      typeof description === 'string' ? description.trim() : null

    if (
      !id ||
      !cleanTitle ||
      cleanTitle.length > 120 ||
      (cleanDescription && cleanDescription.length > 240) ||
      seenIds.has(id)
    ) {
      throw new Error('Entrée vidéo locale invalide.')
    }

    seenIds.add(id)

    return {
      id,
      title: cleanTitle,
      description: cleanDescription || null,
      url: `https://www.youtube.com/watch?v=${id}`,
    }
  })
}

export async function addContributorVideo(input: {
  title: string
  description: string
  url: string
}) {
  const title = input.title.trim()
  const description = input.description.trim()
  const id = getYouTubeVideoId(input.url.trim())

  if (!id || !title || title.length > 120 || description.length > 240) {
    throw new Error('Titre, description ou lien YouTube invalide.')
  }

  if (hasConfiguredSoutenirDatabase()) {
    await initializeSoutenirDatabase()

    const result = await getSoutenirDatabase().execute({
      args: [
        id,
        title,
        description || null,
        `https://www.youtube.com/watch?v=${id}`,
        new Date().toISOString(),
      ],
      sql: `INSERT INTO bss_soutenir_videos (
        id, title, description, url, created_at
      ) SELECT ?, ?, ?, ?, ?
      WHERE (SELECT COUNT(*) FROM bss_soutenir_videos) < 100`,
    })

    if (result.rowsAffected !== 1) {
      throw new Error('La liste de vidéos est pleine.')
    }

    return
  }

  const write = pendingWrite.then(async () => {
    const videos = await getContributorVideos()

    if (videos.length >= 100 || videos.some((video) => video.id === id)) {
      throw new Error('Cette vidéo existe déjà ou la liste est pleine.')
    }

    const entries = [
      ...videos.map((video) => ({
        title: video.title,
        url: video.url,
        ...(video.description ? { description: video.description } : {}),
      })),
      {
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        ...(description ? { description } : {}),
      },
    ]
    const temporaryPath = `${VIDEO_FILE_PATH}.${randomUUID()}.tmp`

    try {
      await writeFile(temporaryPath, `${JSON.stringify(entries, null, 2)}\n`, {
        encoding: 'utf8',
        flag: 'wx',
      })
      await rename(temporaryPath, VIDEO_FILE_PATH)
    } finally {
      await unlink(temporaryPath).catch(() => undefined)
    }
  })

  pendingWrite = write.catch(() => undefined)
  await write
}
