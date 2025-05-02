'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import ImageGameOver from '@/public/game/GameOver.png'

export default function RexEUC() {
  const router = useRouter()
  const dinoRef = useRef<HTMLDivElement>(null)
  const [cactusList, setCactusList] = useState<{ id: number; left: number }[]>(
    [],
  )
  const cactusIdRef = useRef(0)
  const bonusRef = useRef<HTMLDivElement>(null)

  const [isJumping, setIsJumping] = useState(false) // État de saut
  const [isGameOver, setIsGameOver] = useState(false) // Game over ?
  const [isStarted, setIsStarted] = useState(false) // Le jeu a-t-il commencé ?
  const [score, setScore] = useState(0) // Score courant
  const [highScore, setHighScore] = useState(0) // Meilleur score
  const [lives, setLives] = useState(1) // Nombre de vies restantes
  const [bonusCount, setBonusCount] = useState(0) // Compteur de bonus collectés
  const cactusRefs = useRef<{ [key: number]: HTMLDivElement | null }>({}) // Références aux cactus à l'écran
  const [bonusTop, setBonusTop] = useState(56 + Math.random() * 5) // Position verticale du bonus (aléatoire)
  const [showLifeGain, setShowLifeGain] = useState(false) // Affiche le "+1 ❤️"
  const [showBonus, setShowBonus] = useState(true) // Faut-il afficher le bonus ?
  const getCactusSpeed = () => {
    if (score > 300) return 4.3
    if (score > 200) return 4.5
    if (score > 100) return 4.8
    return 5 // durée en secondes
  }

  const jumpSound = useRef<HTMLAudioElement>(null)
  const gameOverSound = useRef<HTMLAudioElement>(null)
  const bonusSound = useRef<HTMLAudioElement>(null)
  const enterSound = useRef<HTMLAudioElement>(null)
  const lifeSound = useRef<HTMLAudioElement>(null)

  //-------------------------------------------------------------------//
  // SON DE DEMARRAGE LORS DU CHARGEMENT DE LA PAGE
  useEffect(() => {
    enterSound.current?.play()
  }, [])

  //-------------------------------------------------------------------//
  // Fonction du Saut
  const handleJump = () => {
    if (!isJumping) {
      jumpSound.current?.play()
      setIsJumping(true)
      setTimeout(() => setIsJumping(false), 500)
    }
  }
  // Gestion Barre espace
  useEffect(() => {
    const startHandler = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        if (isGameOver) {
          setIsGameOver(false)
          setIsStarted(true)
          setScore(0)
          setLives(1)
          setBonusCount(0)
        } else if (!isStarted) {
          setIsStarted(true)
        } else {
          handleJump()
        }
      }
    }
    window.addEventListener('keydown', startHandler)
    return () => window.removeEventListener('keydown', startHandler)
  }, [isStarted, isGameOver])

  //-------------------------------------------------------------------//
  // Création des castus = chaque cactus a un id unique
  const addCactus = () => {
    cactusIdRef.current += 1
    const id = cactusIdRef.current
    setCactusList((prev) => [...prev, { id, left: 100 }])
    // Supprime le cactus après 9 secondes
    setTimeout(() => {
      setCactusList((prev) => {
        delete cactusRefs.current[id] // 🔧 important pour éviter les collisions fantômes
        return prev.filter((c) => c.id !== id)
      })
    }, 10000)
  }
  // Boucle de génération de cactus : tous les 1sec à 3sec
  useEffect(() => {
    if (!isStarted || isGameOver) return
    let isCancelled = false
    const spawnLoop = () => {
      if (isCancelled) return
      addCactus()
      const nextDelay = 1000 + Math.random() * 2000
      setTimeout(spawnLoop, nextDelay)
    }
    spawnLoop()
    return () => {
      isCancelled = true
    }
  }, [isStarted, isGameOver])
  //Mouvement des cactus
  useEffect(() => {
    if (isStarted && !isGameOver) {
      const interval = setInterval(() => {
        setBonusTop(44 + Math.random() * 20)
        setShowBonus(true)
      }, 8000) // revient toutes les 8s (ou ce que tu veux)
      return () => clearInterval(interval)
    }
  }, [isStarted, isGameOver])
  //Mouvement des cactus
  useEffect(() => {
    if (!isStarted || isGameOver) return
    const interval = setInterval(() => {
      setCactusList(
        (prev) =>
          prev
            .map((cactus) => ({
              ...cactus,
              left: cactus.left - 1.5, // ajuste la vitesse selon la difficulté
            }))
            .filter((cactus) => cactus.left > -10), // supprime hors écran
      )
    }, 50) //Déplace les cactus vers la gauche toutes les 50 ms.
    return () => clearInterval(interval)
  }, [isStarted, isGameOver, score])

  //-------------------------------------------------------------------//
  //Création des BONUS
  useEffect(() => {
    if (isStarted && !isGameOver) {
      const interval = setInterval(() => {
        setBonusTop(44 + Math.random() * 2)
      }, 8000) // Repositionne toutes les 8s
      return () => clearInterval(interval)
    }
  }, [isStarted, isGameOver])

  //-------------------------------------------------------------------//
  // AUGMENTATION DU SCORE et HIGHSCORE
  useEffect(() => {
    if (!isStarted || isGameOver) return
    const interval = setInterval(() => setScore((s) => s + 1), 250)
    return () => clearInterval(interval)
  }, [isStarted, isGameOver])
  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore')
    if (savedHighScore) setHighScore(parseInt(savedHighScore))
  }, [])

  //-------------------------------------------------------------------//
  // Détection des collisions CACTUS ET BONUS
  useEffect(() => {
    if (!isStarted || isGameOver) return
    const interval = setInterval(() => {
      const dino = dinoRef.current
      const bonus = bonusRef.current

      // Collision CACTUS
      if (dino && cactusList.length > 0) {
        const dinoRect = dino.getBoundingClientRect()
        cactusList.forEach((cactus) => {
          const cactusEl = cactusRefs.current[cactus.id] as HTMLElement
          if (!cactusEl) return
          const cactusRect = cactusEl.getBoundingClientRect()
          const overlap = !(
            dinoRect.right < cactusRect.left ||
            dinoRect.left > cactusRect.right ||
            dinoRect.bottom < cactusRect.top ||
            dinoRect.top > cactusRect.bottom
          )
          // Perte vie, sinon GameOver
          if (overlap) {
            if (lives > 1) {
              setLives((l) => l - 1)
            } else {
              gameOverSound.current?.play()
              setIsGameOver(true)
              setHighScore((prev) => {
                const newHigh = Math.max(prev, score)
                localStorage.setItem('highScore', newHigh.toString())
                return newHigh
              })
            }
          }
        })
      }

      // Collision BONUS
      if (dino && bonus) {
        const dinoRect = dino.getBoundingClientRect()
        const bonusRect = bonus.getBoundingClientRect()
        const overlap = !(
          dinoRect.right < bonusRect.left ||
          dinoRect.left > bonusRect.right ||
          dinoRect.bottom < bonusRect.top ||
          dinoRect.top > bonusRect.bottom
        )
        // Collecte du BONUS = +4bonus et 1 vie
        if (overlap && !bonus.classList.contains('collected')) {
          bonus.classList.add('collected') // évite de déclencher plusieurs fois
          bonusSound.current?.play()
          setBonusCount((b) => {
            const newCount = b + 1
            if (newCount >= 4) {
              setLives((l) => l + 1)
              lifeSound.current?.play()
              setShowLifeGain(true)
              setTimeout(() => setShowLifeGain(false), 1000)
              return 0
            }
            return newCount
          })
          // Reset animation + re-apparition du bonus
          bonus.classList.remove('collected-animation')
          void bonus.offsetWidth // force le reflow
          setTimeout(() => {
            bonus.classList.remove('collected')
          }, 1550) // évite les collisions multiples pendant 1.55s
        }
      }
    }, 50)
    return () => clearInterval(interval)
  }, [isStarted, isGameOver, lives, score, cactusList])

  //-------------------------------------------------------------------//
  //MISE EN PLACE DES ELEMENTS
  return (
    /* BACKGROUND */
    <div
      className="relative w-full max-w-md h-80 bg-white border shadow overflow-hidden mx-auto"
      style={{
        backgroundImage: 'url("/game/background-day.png")',
      }}
      onClick={() => {
        if (isGameOver) {
          setIsGameOver(false)
          setIsStarted(true)
          setScore(0)
          setLives(1)
          setBonusCount(0)
        } else if (!isStarted) {
          setIsStarted(true)
        } else {
          handleJump()
        }
      }}
      onTouchStart={() => {
        if (isGameOver) {
          setIsGameOver(false)
          setIsStarted(true)
          setScore(0)
          setLives(1)
          setBonusCount(0)
        } else if (!isStarted) {
          setIsStarted(true)
        } else {
          handleJump()
        }
      }}
    >
      {!isStarted && !isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xl z-10 bg-white/80">
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-yellow-600">
            Appuie sur Espace pour démarrer
          </button>
        </div>
      )}
      {isGameOver && (
        <div className="absolute inset-0 z-10 bg-white/90 flex flex-col items-center justify-center space-y-4">
          <Image src={ImageGameOver} alt="Game Over" className="w-40 h-auto" />
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setIsGameOver(false)
                setIsStarted(true)
                setScore(0)
                setLives(1)
                setBonusCount(0)
              }}
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-yellow-600"
            >
              Jouer
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-yellow-600"
            >
              Quitter
            </button>
          </div>
        </div>
      )}
      {showLifeGain && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-red-600 text-xl font-bold animate-ping">
          +1 ❤️
        </div>
      )}

      {/* AFFICHAGE LIGNE DU HAUT : SCORE ET VIE */}
      <div className="absolute top-1 left-2 text-sm font-bold text-black">
        Score: {score} | Record: {highScore}
      </div>
      <div className="absolute top-1 right-2 text-sm font-bold text-black">
        Vies: {lives}
      </div>
      <div className="absolute top-6 right-2 text-sm font-bold text-yellow-600">
        Bonus: {bonusCount} / 4
      </div>

      {/* LE WHEELER / DINO */}
      <div
        ref={dinoRef}
        className={`absolute left-10 w-12 h-12 bg-no-repeat bg-contain transition-all duration-15 ${isJumping ? 'top-44' : 'top-56'} ${isStarted && !isGameOver ? 'animate-dino' : ''}`}
        style={{ backgroundImage: 'url("/game/wheelerBsS-sprite.png")' }}
      />

      {/* VOITURE / CACTUS */}
      {cactusList.map((cactus) => (
        <div
          key={cactus.id}
          ref={(el: HTMLDivElement | null) => {
            cactusRefs.current[cactus.id] = el
          }}
          className="absolute bottom-4 w-16 h-16 bg-no-repeat bg-contain animate-cactus"
          style={{
            backgroundImage: 'url("/game/voiture.png")',
            animation: `cactusMove ${getCactusSpeed()}s linear forwards`,
          }}
        />
      ))}

      {/* BONUS */}
      {isStarted && !isGameOver && showBonus && (
        <div
          key={bonusTop}
          ref={bonusRef}
          className="absolute w-6 h-6 bg-no-repeat bg-contain animate-bonus"
          style={{
            top: `${bonusTop}%`,
            backgroundImage: 'url("/game/bonus.png")',
          }}
          onAnimationEnd={(e) => {
            if (e.animationName === 'BONUSmove') {
              setShowBonus(false)
            }
          }}
        />
      )}

      {/* LE SOL */}
      <div
        className="absolute bottom-0 w-full h-12 ground-animate"
        style={{
          backgroundImage: 'url("/game/ground-sprite.png")',
          backgroundSize: 'cover', // ou 'contain' selon l'effet souhaité
          backgroundRepeat: 'repeat-x', // Répéter horizontalement si le sol est plus petit que la largeur de l'écran
        }}
      />

      {/* LES FICHIERS AUDIO */}
      <audio ref={jumpSound} src="/game/sound_jump.mp3" />
      <audio ref={gameOverSound} src="/game/sound_gameover.mp3" />
      <audio ref={lifeSound} src="/game/sound_bonus.wav" />
      <audio ref={bonusSound} src="/game/sound_youpi.wav" />
      <audio ref={enterSound} src="/game/sound_enter.wav" />
    </div>
  )
}
