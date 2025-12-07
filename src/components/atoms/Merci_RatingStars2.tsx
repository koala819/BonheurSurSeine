'use client'

import { useEffect, useRef, useState } from 'react'

type CommentItem = {
  rating: number
  pseudo: string
  comment: string
}

type Stats = {
  average: number
  count: number
  comments: CommentItem[]
}

export default function RatingStars2() {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)
  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)

  const [comments, setComments] = useState<CommentItem[]>([])
  const [current, setCurrent] = useState<CommentItem | null>(null)

  const [pseudo, setPseudo] = useState('')
  const [comment, setComment] = useState('')

  const [feedback, setFeedback] = useState('')

  const lastSubmitTimeRef = useRef<number>(0)

  async function fetchData() {
    const response = await fetch('/api/rating')
    const data: Stats = await response.json()

    setAverage(Number(data.average))
    setCount(data.count)
    setComments(data.comments || [])
  }

  async function sendRating(rating: number) {
    const now = Date.now()

    if (now - lastSubmitTimeRef.current < 10000) {
      setFeedback('⏳ Tu as déjà envoyé une note…')
      return
    }

    if (!pseudo.trim()) {
      setFeedback('✏️ Entre un pseudo et un commentaire')
      return
    }

    if (!comment.trim()) {
      setFeedback('✏️ Entre un pseudo et un commentaire')
      return
    }

    lastSubmitTimeRef.current = now
    setSelected(rating)

    setFeedback('⏳ Envoi en cours…')

    try {
      await fetch('/api/rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          pseudo,
          comment,
        }),
      })

      setFeedback('✅ Merci pour ton avis !')

      setPseudo('')
      setComment('')

      fetchData()
    } catch {
      setFeedback('❌ Une erreur est survenue')
    }
  }

  // Rotation auto des commentaires
  useEffect(() => {
    if (comments.length === 0) return

    const interval = setInterval(() => {
      const random = comments[Math.floor(Math.random() * comments.length)]
      setCurrent(random)
    }, 4000)

    return () => clearInterval(interval)
  }, [comments])

  useEffect(() => {
    fetchData()
  }, [])

  // Calcul répartition des étoiles
  const starStats = [5, 4, 3, 2, 1].map((star) => {
    const total = comments.filter((c) => c.rating === star).length
    const percent = count > 0 ? Math.round((total / count) * 100) : 0
    return { star, total, percent }
  })

  return (
    <div className="flex flex-col items-center">
      {/* Titre */}
      <div className="text-lg text-center font-bold text-black cursor-pointer dark:text-white">
        Tu as apprécié mon site&nbsp;?
        <span className="font-normal"> Dis-le 🙂</span>
      </div>

      {/* Étoiles cliquables */}
      <div className="text-center items-center space-x-1 font-semibold cursor-pointer">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => sendRating(value)}
            className={`text-3xl cursor-pointer transition ${
              value <= (hovered || selected)
                ? 'text-orange-500'
                : 'text-gray-400'
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Formulaire */}
      <div className="flex flex-col gap-1 w-full max-w-md text-sm ">
        <input
          type="text"
          placeholder="Ton prénom"
          maxLength={20}
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="border rounded px-2 py-2 text-black dark:text-white"
        />
        <textarea
          placeholder="Ton commentaire (100 caractères max)"
          maxLength={100}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={2}
          className="border rounded px-2 py-2 text-black dark:text-white resize-none"
        />
      </div>
      {/* Feedback doux */}
      {feedback && (
        <div className="text-sm text-emerald-600 dark:text-emerald-400 transition-opacity">
          {feedback}
        </div>
      )}

      {/* Moyenne */}
      <div className="text-center mt-4">
        <span className="text-yellow-500 font-bold text-base">
          {average.toFixed(2)}⭐
        </span>
        <span className="text-gray-500 dark:text-white font-normal text-base">
          {' '}
          ({count} avis)
        </span>
      </div>

      {/* Historique */}
      <div className="items-center flex flex-col md:flex-row w-full max-w-3xl rounded-lg border-2 border-cyan-500 bg-slate-50 dark:bg-slate-950 relative p-1 space-x-1">
        {/* Stats par étoiles */}
        <div className="w-full md:w-1/2 max-w-md space-y-0 p-1">
          {starStats.map((s) => (
            <div
              key={s.star}
              className="flex items-center text-sm font-mono ml-2"
            >
              <span className="w-8">{s.star}★</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-3 mx-0 overflow-hidden">
                <div
                  className="bg-orange-400 h-3 transition-all"
                  style={{ width: `${s.percent}%` }}
                />
              </div>
              <span className="w-8 text-right font-mono">{s.total}</span>
            </div>
          ))}
        </div>
        {/* Défilement commentaires */}
        <div className="w-full md:w-1/2 max-w-md space-y-0 p-1">
          {current && (
            <div className="w-full max-w-md text-center bg-slate-400 dark:bg-gray-800 rounded-lg animate-pulse transition-opacity">
              {/* Pseudo */}
              <div className="font-semibold">{current.pseudo}</div>
              {/* Étoiles */}
              <div className="text-orange-400 text-xl">
                {'★'.repeat(current.rating)}
                {'☆'.repeat(5 - current.rating)}
              </div>
              {/* Commentaire */}
              <div className="text-sm italic text-gray-700 dark:text-gray-300">
                “{current.comment}”
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-left text-gray-500 dark:text-gray-300 text-xs">
        Les propos haineux, discriminatoires ou offensants seront supprimés sans
        préavis.
      </div>
    </div>
  )
}
