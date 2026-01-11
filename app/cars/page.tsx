'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CarCard, { Car } from '@/components/CarCard'
import CarFilters from '@/components/CarFilters'
import { motion } from 'framer-motion'

const ALL_CARS: Car[] = [
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
  },
  {
    id: '4',
    name: "Zenvy Model Y",
    type: "Compact SUV",
    category: "SUV",
    price: "₹65,00,000",
    range: "330 mi",
    speed: "135 mph",
    acceleration: "4.8s",
    battery: "75 kWh",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '5',
    name: "Zenvy Model 2",
    type: "Compact Hatchback",
    category: "Hatchback",
    price: "₹25,00,000",
    range: "250 mi",
    speed: "125 mph",
    acceleration: "6.5s",
    battery: "50 kWh",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '6',
    name: "Zenvy Roadster",
    type: "Supercar",
    category: "Sports",
    price: "₹90,00,000",
    range: "620 mi",
    speed: "250+ mph",
    acceleration: "1.9s",
    battery: "200 kWh",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800"
  }
]

export default function CarsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCars = useMemo(() => {
    return ALL_CARS.filter(car => {
      const matchesCategory = activeCategory === 'All' || car.category === activeCategory
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           car.type.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6"
            >
              Explore Our <span className="text-blue-600">Fleet</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl"
            >
              Discover the perfect blend of performance, luxury, and sustainability. 
              From daily commuters to high-performance supercars.
            </motion.p>
          </div>

          <CarFilters 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {filteredCars.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100">
              <div className="text-slate-400 mb-4">No models found matching your criteria.</div>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
