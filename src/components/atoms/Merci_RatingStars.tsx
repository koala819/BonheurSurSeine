'use client'

import { useEffect, useRef, useState } from 'react'

export default function RatingStars() {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)
  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)

  // Ref pour garder le timestamp du dernier envoi
  const lastSubmitTimeRef = useRef<number>(0)

  async function fetchAverage() {
    const response = await fetch('/api/rating')
    const data = await response.json()
    setAverage(Number(data.average))
    setCount(data.count)
  }

  async function sendRating(rating: number) {
    const now = Date.now()
    if (now - lastSubmitTimeRef.current < 10000) {
      alert('Tu as déjà envoyé une note. Merci !')
      return // Ignore la soumission si moins de 10s depuis la dernière
    }

    lastSubmitTimeRef.current = now

    setSelected(rating)

    try {
      await fetch('/api/rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating }),
      })
      fetchAverage()
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi de la note.")
    }
  }

  useEffect(() => {
    fetchAverage()
  }, [])

  return (
    <div className="flex flex-col items-center">
      {/* Ligne : invitation à donner son avis */}
      <div>
        <div className="text-lg text-left font-bold text-black cursor-pointer dark:text-white">
          Tu as apprécié mon site&nbsp;?
          <span className="font-normal"> Dis-le&nbsp;! 🙂</span>
        </div>
        {/* Ligne 1 : étoiles + note + nombre d'avis */}
        <div className="flex items-center space-x-2 text-lg font-semibold cursor-pointer">
          {/* Étoiles cliquables */}
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onMouseEnter={() => setHovered(value)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => sendRating(value)}
                className={`text-2xl transition ${
                  value <= (hovered || selected)
                    ? 'text-yellow-400'
                    : 'text-gray-400'
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Note moyenne */}
          <span className="text-yellow-500 font-bold">
            {average.toFixed(1)}⭐
          </span>

          {/* Nombre d'avis */}
          <span className="text-gray-500 dark:text-black font-normal">
            ({count} avis)
          </span>
        </div>
      </div>
    </div>
  )
}
