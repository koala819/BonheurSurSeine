'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import BonheurSurSeine from '@/public/BonheurSurSeine_logo.png'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) {
      return
    }

    function calculateTimeLeft(): TimeLeft {
      const endTime = +new Date('2024-02-04T20:00:00')
      const now = +new Date()
      const difference = endTime - now
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    function timerUpdate() {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        router.push('/accueil')
      }
    }

    timerUpdate()
    const timerId = setInterval(timerUpdate, 1000)

    return () => clearInterval(timerId)
  }, [hasMounted, router])

  if (!hasMounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center space-y-8 w-full md:w-2/3">
      <Image
        src={BonheurSurSeine}
        alt="Bonheur Sur Seine Logo"
        width={150}
        height={500}
        className="rounded-lg cursor-pointer"
      />
      <h1 className="text-4xl font-bold mb-4">Compte à Rebours</h1>
      <div className="text-2xl">
        {timeLeft.days}j : {timeLeft.hours}h : {timeLeft.minutes}m :{' '}
        {timeLeft.seconds}s
      </div>
      <div
        className="flex justify-center w-full"
        style={{ position: 'relative', paddingTop: '56.25%' }}
      >
        <ReactPlayer
          url="https://youtu.be/zh5neo3xsa0"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls
        />
      </div>
    </div>
  )
}

export default CountTimer
