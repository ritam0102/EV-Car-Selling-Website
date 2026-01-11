'use client'

import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo size={40} />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                ZENVY<span className="text-blue-600">EV</span>
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Accelerating the world's transition to sustainable energy through high-performance electric vehicles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Models</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Model S</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Model X</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Model 3</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Model Y</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cybertruck</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Newsroom</Link></li>
              <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">Get the latest updates on new models and technology.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-0 transition-all text-slate-900 dark:text-white"
              />
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © 2026 Zenvy EV Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-400 dark:text-slate-500 text-sm hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 dark:text-slate-500 text-sm hover:text-slate-600 dark:hover:text-slate-300">Terms of Service</Link>
            <Link href="#" className="text-slate-400 dark:text-slate-500 text-sm hover:text-slate-600 dark:hover:text-slate-300">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
