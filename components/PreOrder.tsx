'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface PreOrderProps {
  onOrder?: () => void
}

export default function PreOrder({ onOrder }: PreOrderProps) {
  const [selectedModel, setSelectedModel] = useState('Model S')
  const [selectedColor, setSelectedColor] = useState('Midnight Silver')

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`PreOrder button clicked. selectedModel: ${selectedModel}, selectedColor: ${selectedColor}`);
    
    if (onOrder) {
      onOrder();
    } else {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const colors = [
    { name: 'Midnight Silver', class: 'bg-slate-600' },
    { name: 'Deep Blue', class: 'bg-blue-800' },
    { name: 'Solid Black', class: 'bg-black' },
    { name: 'Pearl White', class: 'bg-slate-100' },
    { name: 'Red Multi-Coat', class: 'bg-red-600' },
  ]

  return (
    <section id="pre-order" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Pre-Order Your Zenvy</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10">Secure your place in the future of mobility. Select your configuration and place a refundable deposit.</p>
              
              <form className="space-y-8" onSubmit={handlePlaceOrder}>
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Select Model</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Model S', 'Model X', 'Model 3'].map((model) => (
                      <button
                        key={model}
                        type="button"
                        onClick={() => {
                          setSelectedModel(model);
                          console.log(`Model selected. selectedModel: ${model}`);
                        }}
                        className={`py-3 rounded-xl font-bold transition-all border-2 ${
                          selectedModel === model 
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                          : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-200 dark:hover:border-slate-700'
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Exterior Color</label>
                  <div className="flex gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => {
                          setSelectedColor(color.name);
                          console.log(`Color selected. selectedColor: ${color.name}`);
                        }}
                        className={`w-10 h-10 rounded-full transition-all ring-offset-2 ${color.class} ${
                          selectedColor === color.name ? 'ring-2 ring-blue-600 scale-110' : 'hover:scale-110'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 font-medium">{selectedColor}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-0 transition-all text-slate-900 dark:text-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-0 transition-all text-slate-900 dark:text-white" placeholder="Doe" />
                  </div>
                </div>

                <button type="submit" className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-lg shadow-slate-200 dark:shadow-none">
                  Place Order — ₹2,00,000 Deposit
                </button>

                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Fully refundable deposit. Delivery expected Q4 2025.
                </div>
              </form>
            </div>

            <div className="bg-slate-900 relative hidden lg:block">
              <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&q=80&w=1000" 
                  alt="Car Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-20 text-white">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Premium Interior</h3>
                  <p className="text-slate-300 mb-6">Vegan leather, sustainable wood accents, and a 17-inch cinematic display come standard with every {selectedModel}.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      22-speaker premium audio
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      HEPA air filtration system
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      Heated seats for every passenger
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}