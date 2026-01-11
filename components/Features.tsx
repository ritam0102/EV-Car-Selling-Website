'use client'

import { motion } from 'framer-motion'
import { BatteryCharging, ShieldCheck, Cpu, Wind, Smartphone, MapPin } from 'lucide-react'

const FEATURES = [
  {
    icon: <BatteryCharging className="w-8 h-8" />,
    title: "Ultra-Fast Charging",
    description: "Get up to 200 miles of range in just 15 minutes at any Volt Supercharger station."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Safety First",
    description: "5-star safety rating with advanced collision avoidance and emergency braking."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Autopilot",
    description: "Advanced AI-driven assistance for highway driving and automated parking."
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Aerodynamic Design",
    description: "Industry-leading drag coefficient for maximum efficiency and silent performance."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Connected App",
    description: "Control climate, monitor charging, and locate your car from anywhere in the world."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Global Network",
    description: "Access to over 50,000 charging points across the globe for worry-free travel."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for the Future</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every Zenvy EV vehicle is packed with industry-leading technology designed to make your driving experience safer, faster, and more enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 text-blue-500 group-hover:text-blue-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Battery Section */}
        <div className="mt-32 bg-slate-800/50 rounded-[3rem] p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Next-Gen Battery Tech</h3>
              <p className="text-slate-400 mb-8">
                Our proprietary solid-state battery technology provides 30% more energy density than traditional lithium-ion cells, allowing for longer range and faster charging cycles.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold mb-1">
                  <span>Charging Progress (15 min)</span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative z-10"
              >
                <BatteryCharging className="w-48 h-48 text-blue-500 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <img 
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600" 
                  alt="Battery Tech" 
                  className="rounded-2xl shadow-2xl border border-slate-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
