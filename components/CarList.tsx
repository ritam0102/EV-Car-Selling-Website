'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import CarCard, { Car } from './CarCard'

const FEATURED_CARS: Car[] = [
  {
    id: '1',
    name: "Zenvy Model S",
    type: "Luxury Sedan",
    category: "Sedan",
    price: "₹35,00,000",
    range: "405 mi",
    speed: "155 mph",
    acceleration: "3.1s",
    battery: "100 kWh",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    name: "Zenvy Model X",
    type: "Performance SUV",
    category: "SUV",
    price: "₹68,50,000",
    range: "348 mi",
    speed: "149 mph",
    acceleration: "3.8s",
    battery: "95 kWh",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    name: "Zenvy Model 3",
    type: "Compact Sedan",
    category: "Sedan",
    price: "₹38,00,000",
    range: "272 mi",
    speed: "140 mph",
    acceleration: "5.8s",
    battery: "60 kWh",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800"
  }
]

interface CarListProps {
  onOrder?: () => void
}

export default function CarList({ onOrder }: CarListProps) {
  return (
    <section id="cars" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Models</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg">Experience the pinnacle of electric engineering with our most popular vehicles.</p>
          </div>
          <Link 
            href="/cars" 
            className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group"
          >
            View All Models
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_CARS.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} onOrder={onOrder} />
          ))}
        </div>
      </div>
    </section>
  )
}

