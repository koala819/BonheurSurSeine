'use client'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import ModalAvis from '@/src/components/atoms/Merci_RatingStars2touslesAvis'

//import confetti from 'canvas-confetti'
import 'slick-carousel/slick/slick-theme.css'
// Import CSS slick-carousel
import 'slick-carousel/slick/slick.css'

type CommentItem = {
  rating: number
  pseudo: string
  comment: string
}

type Stats = {
  average: number
  count: number
  comments: CommentItem[]
  countsByRating: Record<number, number>
}

export default function RatingStars2() {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)

  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)

  const [comments, setComments] = useState<CommentItem[]>([])
  const [countsByRating, setCountsByRating] = useState<Record<number, number>>(
    {},
  )

  const [pseudo, setPseudo] = useState('')
  const [comment, setComment] = useState('')

  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)

  // pour affichage de la fenetre supplémentaire
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Référence au slider
  const sliderRef = useRef<Slider>(null)
  const lastSubmitTimeRef = useRef<number>(0)

  async function fetchData() {
    try {
      const response = await fetch('/api/ratingv3')

      if (!response.ok) {
        throw new Error('Erreur chargement')
      }

      const data: Stats = await response.json()

      setAverage(Number(data.average || 0))
      setCount(Number(data.count || 0))
      setComments(data.comments || [])
      setCountsByRating(data.countsByRating || {})
    } catch {
      setFeedback('❌ Impossible de charger les avis')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function sendRating(rating: number) {
    const now = Date.now()
    if (loading) {
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

    if (now - lastSubmitTimeRef.current < 30000) {
      setFeedback('⏳ Tu as déjà envoyé une note…')
      return
    }
    lastSubmitTimeRef.current = now
    setLoading(true)
    setSelected(rating)
    setFeedback('⏳ Envoi en cours…')

    try {
      const response = await fetch('/api/ratingv3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          pseudo,
          comment,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur')
      }

      if (data.approved) {
        const newComment: CommentItem = {
          rating,
          pseudo,
          comment,
        }

        setComments((prev) => [newComment, ...prev.slice(0, 9)])

        sliderRef.current?.slickGoTo(0)
      }

      setPseudo('')
      setComment('')

      setFeedback(
        data.approved
          ? '✅ Merci pour ton avis !'
          : '✅ Commentaire bien reçu !',
      )

      fetchData()
    } catch (err) {
      setFeedback('❌ Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  const starStats = [5, 4, 3, 2, 1].map((star) => {
    const total = countsByRating[star] || 0
    const percent = count > 0 ? Math.round((total / count) * 100) : 0

    return {
      star,
      total,
      percent,
    }
  })

  // Configuration react-slick pour commentaires
  const sliderSettings = {
    dots: false,
    infinite: comments.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: comments.length > 1,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg text-center font-bold text-black dark:text-white">
        Tu as apprécié mon site ?<span className="font-normal"> Dis-le 🙂</span>
      </div>

      {/* ------------------------------------------------------ */}
      {/* Étoiles cliquables */}
      <div className="text-center items-center space-x-1 font-semibold cursor-pointer">
        {[1, 2, 3, 4, 5].map((val) => (
          <span
            key={val}
            onMouseEnter={() => setHovered(val)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => sendRating(val)}
            className={`text-3xl transition ${
              val <= (hovered || selected) ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full max-w-md text-sm mt-2">
        <input
          type="text"
          placeholder="Ton prénom"
          maxLength={20}
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="border rounded px-2 py-2 text-black dark:text-white bg-slate-200 dark:bg-slate-800"
        />

        <textarea
          placeholder="Ton commentaire (150 caractères max)"
          maxLength={150}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="border rounded px-2 py-2 text-black dark:text-white bg-slate-200 dark:bg-slate-800
          resize-none"
        />
      </div>

      {/* Feedback doux */}
      {feedback && (
        <div className="text-sm mt-2 text-emerald-600 dark:text-emerald-400">
          {feedback}
        </div>
      )}

      {/* ------------------------------------------------------ */}
      {/* Moyenne */}
      <div className="text-center mt-4">
        <span className="text-yellow-500 font-bold text-base">
          {average.toFixed(2)}⭐
        </span>{' '}
        (
        <span
          onClick={() => setIsModalOpen(true)}
          className="text-gray-500 dark:text-white font-normal text-base cursor-pointer underline hover:no-underline"
          title="Voir tous les avis"
          role="button"
          tabIndex={0}
        >
          {count} avis
        </span>
        )
      </div>

      <div className="items-center flex flex-col md:flex-row w-full max-w-3xl rounded-lg border-2 border-cyan-500 bg-slate-50 dark:bg-slate-950 relative p-2 gap-2">
        <div className="w-full md:w-1/2 max-w-md space-y-1 p-1">
          {starStats.map((s) => (
            <div key={s.star} className="flex items-center text-sm font-mono">
              <span className="w-8">{s.star}★</span>

              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-3 overflow-hidden">
                <div
                  className="bg-orange-400 h-3 transition-all"
                  style={{ width: `${s.percent}%` }}
                />
              </div>

              <span className="w-8 text-right">{s.total}</span>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          {comments.length > 0 && (
            <Slider ref={sliderRef} {...sliderSettings}>
              {comments.map((c, i) => (
                <div key={i}>
                  <div className="text-center bg-slate-200 dark:bg-gray-800 rounded-lg p-3 min-h-[120px] flex flex-col justify-center">
                    <div className="font-semibold">{c.pseudo}</div>

                    <div className="text-orange-400 text-xl">
                      {'★'.repeat(c.rating)}
                      {'☆'.repeat(5 - c.rating)}
                    </div>

                    <div className="text-sm italic text-gray-700 dark:text-gray-300 break-words">
                      “{c.comment}”
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>

      {/* ------------------- Bouton inutile ------------------- */}
      {/*<div className="m-1 flex justify-center">
        <Button
          color="primary"
          variant="flat"
          onPress={() => setIsModalOpen(true)}
        >
          Voir les avis
        </Button>
      </div>*/}

      {/* ----Phrase supprimée pour pas attirer l'attention : mise dans mentions légales ---- */}
      {/*<div className="text-left text-gray-500 dark:text-gray-300 text-xs">
        Les propos haineux, discriminatoires ou offensants seront supprimés sans
        préavis.
      </div>*/}

      {/* ------------------------------------------------------ */}
      <ModalAvis isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
