'use client'

import { Search, SlidersHorizontal } from 'lucide-react'

interface CarFiltersProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function CarFilters({ 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  setSearchQuery 
}: CarFiltersProps) {
  const categories = ['All', 'Sedan', 'SUV', 'Hatchback', 'Sports']

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
      <div className="flex p-1 bg-slate-100 rounded-2xl w-full md:w-auto overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeCategory === cat 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex gap-4 w-full md:w-auto">
        <div className="relative flex-grow md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:border-blue-600 focus:ring-0 transition-all text-sm font-medium"
          />
        </div>
        <button className="p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
