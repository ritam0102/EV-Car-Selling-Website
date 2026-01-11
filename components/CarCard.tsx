'use client'

import { motion } from 'framer-motion'
import { Battery, Zap, Gauge, ChevronRight, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Car {
  id: string | number
  name: string
  type: string
  price: string
  range: string
  speed: string
  acceleration: string
  battery: string
  image: string
  category: 'Sedan' | 'SUV' | 'Hatchback' | 'Sports'
}

interface CarCardProps {
  car: Car
  index?: number
  onOrder?: () => void
}

export default function CarCard({ car, index = 0, onOrder }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-sm">
            {car.category}
          </span>
        </div>
        <div className="absolute top-6 right-6 bg-blue-600 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
          From {car.price}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-extrabold uppercase tracking-[0.2em]">{car.type}</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{car.name}</h3>
            </div>
            <button className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 transition-colors">
            <Battery className="w-5 h-5 text-blue-500 dark:text-blue-400 mb-2" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">{car.range}</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase">Range</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 transition-colors">
            <Zap className="w-5 h-5 text-blue-500 dark:text-blue-400 mb-2" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">{car.acceleration}</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase">0-60</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 transition-colors">
            <Gauge className="w-5 h-5 text-blue-500 dark:text-blue-400 mb-2" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">{car.speed}</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase">Top</span>
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <button 
            onClick={onOrder}
            className="flex-1 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-lg shadow-slate-200 dark:shadow-none"
          >
            Order Now
          </button>
          <button className="px-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-slate-900 dark:text-white hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

