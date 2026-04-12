'use client'

import { Button } from '@heroui/react'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import ModalAvis from '@/src/components/gameEUCBSS/notif-eucgame2-touslesavis'

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
  countsByRating?: Record<number, number>
}

export default function RatingStars2() {
  const [count, setCount] = useState(0)

  const [comments, setComments] = useState<CommentItem[]>([])

  const [pseudo, setPseudo] = useState('')
  const [comment, setComment] = useState('')

  const [feedback, setFeedback] = useState('')

  const lastSubmitTimeRef = useRef<number>(0)

  // pour affichage de la fenetre supplémentaire
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Référence au slider
  const sliderRef = useRef<Slider>(null)

  async function fetchData() {
    const response = await fetch('/api/eucgame-com')
    const data: Stats = await response.json()

    setCount(data.count)
    setComments(data.comments || [])
  }

  // Lancement de l'animation confetti
  {
    /*const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }
    */
  }

  // ---------------------------------------
  // ⬇️ Envoi note + email
  // ---------------------------------------
  async function sendRating(rating: number) {
    const now = Date.now()
    //anti-spam 30sec entre chaque envoi
    if (now - lastSubmitTimeRef.current < 30000) {
      setFeedback('⏳ Tu as déjà envoyé une note…')
      return
    }
    if (!pseudo.trim() || !comment.trim()) {
      setFeedback('✏️ Entre un pseudo et un commentaire')
      return
    }

    lastSubmitTimeRef.current = now

    setFeedback('⏳ Envoi en cours…')

    try {
      // 1️⃣ Sauvegarde Turso
      await fetch('/api/eucgame-com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          pseudo,
          comment,
        }),
      })

      // 2️⃣ Envoi email
      await fetch('/api/eucgame-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, pseudo, comment }),
      })

      const newComment = { rating, pseudo, comment }
      setPseudo('')
      setComment('')

      // Ajout immédiat du commentaire dans le carrousel
      setComments((prev) => [newComment, ...prev])

      // Forcer le slider à afficher la première slide (nouveau commentaire)
      sliderRef.current?.slickGoTo(0)

      // Après 4 secondes, on recharge les commentaires "officiels"
      setTimeout(() => {
        fetchData()
        setFeedback('✅ Merci pour ton avis !')
      }, 4000)
    } catch {
      setFeedback('❌ Une erreur est survenue')
    }
  }

  // Surveille le feedback pour déclencher le confetti uniquement quand le message est le message de succès
  {
    /*
  useEffect(() => {
    if (feedback === '✅ Merci pour ton avis !') {
      launchConfetti()
    }
  }, [feedback])
*/
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Configuration react-slick pour commentaires
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
    adaptiveHeight: false,
  }

  return (
    <div className="flex flex-col items-center">
      {/* Titre */}
      <div className="text-lg text-center font-bold text-black dark:text-white">
        Félicitations ! Tu as trouvé la page mystère du site...
        <br />
        <span className="font-normal">
          Alors laisse une trace de ton passage 🙂
        </span>
      </div>

      {/* ------------------------------------------------------ */}
      {/* Formulaire */}
      <div className="flex flex-col gap-1 w-full max-w-md text-sm mb-1">
        <input
          type="text"
          placeholder="Ton prénom"
          maxLength={20}
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="border rounded px-2 py-2 text-black dark:text-white"
        />

        <textarea
          placeholder="Ton message (250 caractères max)"
          maxLength={250}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          className="border rounded px-2 py-2 text-black dark:text-white resize-none"
        />
      </div>

      {/* Feedback doux */}
      {feedback && (
        <div className="text-sm text-emerald-600 dark:text-emerald-400 transition-opacity">
          {feedback}
        </div>
      )}

      <Button
        style={{
          backgroundColor: '#0ea5e9',
          color: 'white',
        }}
        variant="flat"
        onPress={() => sendRating(5)}
        className="mb-3"
      >
        Envoyer
      </Button>

      {/* ------------------------------------------------------ */}
      {/* Historique */}
      <div className="items-center flex flex-col md:flex-row w-full max-w-3xl rounded-lg border-2 border-cyan-500 relative p-3 space-x-1 gap-3 bg-slate-400">
        {/* Slider commentaires */}
        <div className="w-full space-y-0 px-4 mb-4">
          <Slider ref={sliderRef} {...sliderSettings}>
            {comments.map((c, i) => (
              <div
                key={i}
                className="w-full h-full text-center bg-white dark:bg-gray-800 rounded-lg p-2"
              >
                <div className="font-semibold dark:text-white">{c.pseudo}</div>
                <div className="text-sm italic dark:text-gray-300">
                  “{c.comment}”
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ------------------- Bouton ------------------- */}
      <div className="m-1 flex justify-center">
        <Button
          style={{
            backgroundColor: '#0ea5e9',
            color: 'white',
          }}
          variant="flat"
          onPress={() => setIsModalOpen(true)}
        >
          Voir tous les messages ({count})
        </Button>
      </div>

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
