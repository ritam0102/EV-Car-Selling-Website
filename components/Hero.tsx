'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Battery, Zap, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 dark:bg-blue-900/10 -skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4 fill-blue-700 dark:fill-blue-400" />
            THE FUTURE IS ELECTRIC
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
            Drive the <span className="text-blue-600">Evolution</span> of Motion.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Experience unparalleled performance, zero emissions, and cutting-edge technology. Join the revolution of sustainable luxury.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-700 transition-all group">
              Book a Test Drive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:border-blue-600 dark:hover:border-blue-500 transition-all">
              Explore Models
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">480<span className="text-blue-600 text-xl">mi</span></div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Max Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">2.1<span className="text-blue-600 text-xl">s</span></div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">0-60 mph</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">15<span className="text-blue-600 text-xl">min</span></div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Fast Charge</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
          <img 
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000" 
            alt="EV Car" 
            className="relative z-10 w-full h-auto rounded-3xl shadow-2xl shadow-blue-200/50 object-cover aspect-[4/3]"
          />
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100 dark:border-slate-800"
          >
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <Battery className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">100% Sustainable</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Eco-friendly materials</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
