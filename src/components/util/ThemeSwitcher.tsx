'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="dark:bg-cyan-800 "
    >
      {mounted && (theme === 'light' ? <Sun /> : <Moon />)}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
