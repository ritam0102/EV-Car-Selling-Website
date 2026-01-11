'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CarList from '@/components/CarList'
import Features from '@/components/Features'
import PreOrder from '@/components/PreOrder'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const handleOpenContact = () => {
    console.log("Opening Contact Form via Pre-Order trigger")
    setIsContactFormOpen(true)
    // Small delay to allow the form to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-600 dark:selection:text-blue-200">
      <Navbar onPreOrder={handleOpenContact} />
      <Hero />
      <CarList onOrder={handleOpenContact} />
      <Features />
      <PreOrder onOrder={handleOpenContact} />
      
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {console.log(`ContactForm rendered after PreOrder. Is ContactForm visible?`)}
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}