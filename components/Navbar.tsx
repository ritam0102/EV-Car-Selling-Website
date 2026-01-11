'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  onPreOrder?: () => void
}

export default function Navbar({ onPreOrder }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'Features', href: '/#features' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={36} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
          )}>
            ZENVY<span className="text-blue-600">EV</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <button 
            onClick={onPreOrder}
            className="bg-slate-900 dark:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-lg shadow-slate-200 dark:shadow-none"
          >
            Pre-Order
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-600 dark:text-slate-400"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false)
              onPreOrder?.()
            }}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
          >
            Pre-Order Now
          </button>
        </div>
      )}
    </nav>
  )
}