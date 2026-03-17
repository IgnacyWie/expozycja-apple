'use client'

import { useState, useEffect } from 'react'
import TetrisLoading from './tetris-loader'

interface PageLoaderProps {
  children: React.ReactNode
  duration?: number // Duration in milliseconds (default 1500ms = 1.5 seconds)
}

export function PageLoader({ children, duration = 1500 }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for the specified duration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center justify-center">
          <TetrisLoading size="md" speed="fast" showLoadingText={true} loadingText="Loading..." />
        </div>
      </div>
    )
  }

  return <>{children}</>
}
