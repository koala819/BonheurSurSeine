'use client'

import { useEffect, useState } from 'react'

import { Top as Navbar } from '@/src/components/templates/Navbar'

export function ClientNavbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <Navbar />
}
