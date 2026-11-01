'use client'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import ModalAvis from '@/src/components/atoms/Merci_RatingStars2touslesAvis'

import 'slick-carousel/slick/slick-theme.css'
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
      if (!response.ok) throw new Error('Erreur chargement')
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
    if (loading) return
    if (!pseudo.trim() || !comment.trim()) {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, pseudo, comment }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Erreur')

      if (data.approved) {
        setComments((prev) => [
          { rating, pseudo, comment },
          ...prev.slice(0, 9),
        ])
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
    } catch {
      setFeedback('❌ Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  const starStats = [5, 4, 3, 2, 1].map((star) => {
    const total = countsByRating[star] || 0
    const percent = count > 0 ? Math.round((total / count) * 100) : 0
    return { star, total, percent }
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
    adaptiveHeight: false,
  }

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {/* --- En-tête & Note interactive --- */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">
        Tu as apprécié mon site ?{' '}
        <span className="font-normal text-slate-600 dark:text-slate-300">
          Dis-le 🙂
        </span>
      </h3>
      {/* ------------------------------------------------------ */}
      {/* Étoiles cliquables */}
      <div className="flex justify-center space-x-1 cursor-pointer">
        {[1, 2, 3, 4, 5].map((val) => (
          <span
            key={val}
            onMouseEnter={() => setHovered(val)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => sendRating(val)}
            className={`text-4xl transition-transform hover:scale-110 ${
              val <= (hovered || selected)
                ? 'text-amber-500'
                : 'text-slate-300 dark:text-slate-500'
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Note globale & Nombre d'avis */}
      <div className="text-sm text-slate-600 dark:text-slate-400">
        <span className="text-amber-500 font-bold text-base">
          {average.toFixed(2)} ★
        </span>{' '}
        sur{' '}
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-cyan-600 dark:text-cyan-400 underline hover:no-underline font-medium focus:outline-none"
        >
          {count} avis
        </button>
      </div>

      {/* --- Formulaire de saisie modernisé --- */}
      <div className="flex flex-col gap-y-1 w-4/5 m-1">
        <input
          type="text"
          placeholder="Ton prénom/pseudo (20 caractères max)"
          maxLength={20}
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="w-full rounded-lg px-4 py-2.5 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-transparent focus:border-cyan-500 focus:outline-none transition-colors"
        />

        <textarea
          placeholder="Ton commentaire (150 caractères max)"
          maxLength={150}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="w-full rounded-lg px-4 py-2.5 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-transparent focus:border-cyan-500 focus:outline-none transition-colors resize-none"
        />

        {feedback && (
          <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 text-center">
            {feedback}
          </p>
        )}
      </div>

      {/* --- Statistiques & Carrousel d'avis --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-2 rounded-lg">
        {/* Barres de répartition */}
        <div className="flex flex-col justify-center space-y-1 px-2">
          {starStats.map((s) => (
            <div
              key={s.star}
              className="flex items-center text-xs font-mono text-slate-700 dark:text-slate-300"
            >
              <span className="w-6">{s.star}★</span>
              <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 mx-2 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${s.percent}%` }}
                />
              </div>
              <span className="w-6 text-right">{s.total}</span>
            </div>
          ))}
        </div>

        {/* Carrousel des avis */}
        <div className="flex items-center">
          {comments.length > 0 ? (
            <div className="w-full">
              <Slider ref={sliderRef} {...sliderSettings}>
                {comments.map((c, i) => (
                  <div key={i} className="outline-none">
                    <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-700/60 rounded-xl p-3 shadow-sm flex flex-col justify-between min-h-[110px]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                          {c.pseudo}
                        </span>
                        {/* Ancien code */}
                        {/*<div className="text-orange-400 text-xl">
                          {'★'.repeat(c.rating)}
                          {'☆'.repeat(5 - c.rating)}
                        </div>*/}
                        <div className="text-amber-500 text-sm">
                          {'★'.repeat(c.rating)}
                          <span className="text-slate-300 dark:text-slate-600">
                            {'★'.repeat(5 - c.rating)}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm italic text-slate-600 dark:text-slate-300 line-clamp-4 break-words">
                        “{c.comment}”
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="w-full text-center text-xs text-slate-400 italic py-6">
              Aucun avis pour le moment. Sois le premier !
            </div>
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
