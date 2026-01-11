'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className, size = 40 }: LogoProps) {
  return (
    <div 
      className={cn("relative flex items-center justify-center", className)} 
      style={{ width: size, height: size }}
    >
      <img 
        src="/logo01.svg" 
        alt="Zenvy EV Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  )
}
