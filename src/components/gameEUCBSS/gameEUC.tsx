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
  const recentlyHitCactus = useRef<Set<number>>(new Set())
  const [bonusTop, setBonusTop] = useState(56) // Position verticale du bonus (pas d aléatoire)
  const [showLifeGain, setShowLifeGain] = useState(false) // Affiche le "+1 ❤️"
  const [showLifePerte, setShowLifePerte] = useState(false) // Affiche le "-1 💀"
  const [showBonus, setShowBonus] = useState(true) // Faut-il afficher le bonus ?
  const jumpAllowed = useRef(true) // Pour éviter les sauts multiples.

  /*const getCactusSpeed = () => {
    if (score > 500) return 4.45
    if (score > 450) return 4.5
    if (score > 400) return 4.55
    if (score > 350) return 4.6
    if (score > 300) return 4.65
    if (score > 280) return 4.7
    if (score > 260) return 4.75
    if (score > 240) return 4.8
    if (score > 220) return 4.85
    if (score > 200) return 4.9
    if (score > 180) return 4.95
    if (score > 160) return 5.0
    if (score > 140) return 5.05
    if (score > 120) return 5.1
    if (score > 100) return 5.15
    return 5.2
  }*/
  const getCactusSpeed = () => Math.max(3, 5.2 - score * 0.002) // 5.2 = durée en secondes

  const jumpSound = useRef<HTMLAudioElement>(null)
  const gameOverSound = useRef<HTMLAudioElement>(null)
  const bonusSound = useRef<HTMLAudioElement>(null)
  const enterSound = useRef<HTMLAudioElement>(null)
  const lifeSound = useRef<HTMLAudioElement>(null)
  const collisionSound = useRef<HTMLAudioElement>(null)

  //-------------------------------------------------------------------//
  // SON DE DEMARRAGE LORS DU CHARGEMENT DE LA PAGE
  useEffect(() => {
    enterSound.current?.play()
  }, [])

  //-------------------------------------------------------------------//
  // Gestion du Saut avec blocage anti-maintien de la barre espace
  const jumpCooldown = useRef(false)

  const handleJump = () => {
    if (!isJumping && !jumpCooldown.current) {
      jumpSound.current?.play()
      setIsJumping(true)
      jumpCooldown.current = true
      // Animation de saut : 400ms
      setTimeout(() => {
        setIsJumping(false)
      }, 380)
      // Cooldown d'entrée : 200ms
      setTimeout(() => {
        jumpCooldown.current = false
      }, 200)
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
          jumpAllowed.current = false
        } else if (!isStarted) {
          setIsStarted(true)
          jumpAllowed.current = false
        } else if (!isJumping && jumpAllowed.current) {
          handleJump()
          jumpAllowed.current = false // bloque tant que touche pas relâchée
        }
      }
    }
    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jumpAllowed.current = true
      }
    }
    window.addEventListener('keydown', startHandler)
    window.addEventListener('keyup', keyUpHandler)
    return () => {
      window.removeEventListener('keydown', startHandler)
      window.removeEventListener('keyup', keyUpHandler)
    }
  }, [isStarted, isGameOver, isJumping])

  //-------------------------------------------------------------------//
  // Création des castus = chaque cactus a un id unique
  const addCactus = () => {
    cactusIdRef.current += 1
    const id = cactusIdRef.current
    setCactusList((prev) => [...prev, { id, left: 100 }])
    // Supprime le cactus après 10 secondes
    setTimeout(() => {
      setCactusList((prev) => {
        delete cactusRefs.current[id] // 🔧 important pour éviter les collisions fantômes
        return prev.filter((c) => c.id !== id)
      })
    }, 10000)
  }
  // Boucle de génération de cactus : tous les 0.9sec à 3sec
  useEffect(() => {
    if (!isStarted || isGameOver) return
    let isCancelled = false
    const spawnLoop = () => {
      if (isCancelled) return
      addCactus()
      const nextDelay = 900 + Math.random() * 1500
      setTimeout(spawnLoop, nextDelay)
    }
    spawnLoop()
    return () => {
      isCancelled = true
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
        setBonusTop(54 + Math.random() * 2)
        setShowBonus(true)
      }, 6000) // revient toutes les 8s (ou ce que tu veux)
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
          if (recentlyHitCactus.current.has(cactus.id)) return
          const cactusEl = cactusRefs.current[cactus.id] as HTMLElement
          if (!cactusEl) return
          const cactusRect = cactusEl.getBoundingClientRect()
          const overlap = !(
            dinoRect.right - 10 < cactusRect.left + 10 ||
            dinoRect.left + 10 > cactusRect.right - 10 ||
            dinoRect.bottom - 5 < cactusRect.top + 10 ||
            dinoRect.top + 10 > cactusRect.bottom - 5
          )

          // Perte vie, sinon GameOver
          if (overlap) {
            collisionSound.current?.play()
            setShowLifePerte(true)
            setTimeout(() => setShowLifePerte(false), 5000) //meme durée que l'animation ping
            recentlyHitCactus.current.add(cactus.id)
            setTimeout(() => {
              recentlyHitCactus.current.delete(cactus.id)
            }, 1500)
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
          // Empêche nouvelle collision
          bonus.classList.add('collected')
          // Déclenche l'animation de collecte
          bonus.classList.add('collected-animation')
          void bonus.offsetWidth // force le reflow

          // Joue le son et traite le gain
          bonusSound.current?.play()
          setBonusCount((b) => {
            const newCount = b + 1
            if (newCount >= 4) {
              setLives((l) => l + 1)
              lifeSound.current?.play()
              setShowLifeGain(true)
              setTimeout(() => setShowLifeGain(false), 5000) //meme durée sur animation-ping
              return 0
            }
            return newCount
          })
          // Nettoyage après l'animation
          setTimeout(() => {
            bonus.classList.remove('collected-animation')
            bonus.classList.remove('collected')
          }, 2500) // doit correspondre à la durée de l'animation CSS
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
      /*onClick={() => {
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
      }}*/
    >
      {!isStarted && !isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xl z-10 bg-white/80">
          <button
            onClick={() => {
              setIsGameOver(false)
              setIsStarted(true)
              setScore(0)
              setLives(1)
              setBonusCount(0)
            }}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-yellow-600"
          >
            Démarrer
          </button>
          <p className="absolute bottom-1 items-center text-xs font-bold text-black">
            Appuie sur Espace pour sauter
          </p>
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
              onClick={() => router.push('/mille-merci')}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-yellow-600"
            >
              Quitter
            </button>
            <p className="absolute bottom-1 items-center text-xs font-bold text-black">
              Appuie sur Espace pour sauter
            </p>
          </div>
        </div>
      )}
      {showLifeGain && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-red-600 text-xl font-bold animate-pingVIEMORT">
          +1 ❤️
        </div>
      )}
      {showLifePerte && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-black text-xl font-bold animate-pingVIEMORT">
          -1 💀
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
        className={`absolute left-10 w-12 h-12 bg-no-repeat bg-contain transition-all duration-400 ${isJumping ? 'top-44' : 'top-56'} ${isStarted && !isGameOver ? 'animate-dino' : ''}`}
        style={{ backgroundImage: 'url("/game/wheelerBsS-sprite.png")' }}
      />

      {/* VOITURE / CACTUS */}
      {cactusList.map((cactus) => (
        <div
          key={cactus.id}
          ref={(el: HTMLDivElement | null) => {
            cactusRefs.current[cactus.id] = el
          }}
          className="absolute bottom-4 w-16 h-16 bg-no-repeat bg-contain"
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
      <audio ref={collisionSound} src="/game/sound_collision.wav" />
    </div>
  )
}
