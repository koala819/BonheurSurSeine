'use client'

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const endTime = +new Date('2024-02-04T20:00:00')
    const now = +new Date()
    const difference = endTime - now
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-4">Chargement...</h1>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold mb-4">Compte à Rebours</h1>
      <div className="text-2xl">
        {timeLeft.days ||
        timeLeft.hours ||
        timeLeft.minutes ||
        timeLeft.seconds ? (
          <div>
            {timeLeft.days}j : {timeLeft.hours}h : {timeLeft.minutes}m :{' '}
            {timeLeft.seconds}s
          </div>
        ) : (
          <div>Terminé!</div>
        )}
      </div>
      <ReactPlayer
        controls={true}
        url={' https://youtu.be/Bwa8aESCdoY'}
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default CountTimer
