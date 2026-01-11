'use client'

import { useActionState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, MapPin, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'
import { cn } from '@/lib/utils'

const initialState = {
  message: '',
  success: false,
  errors: {}
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions about our models, charging infrastructure, or want to schedule a private viewing? Our team is here to help you transition to the future of motion.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Our Showroom</h4>
                  <p className="text-slate-500">123 Electric Way, Innovation District, CA 90210</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-500">+1 (555) 000-00-000</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Support</h4>
                  <p className="text-slate-500">hello@zenvy.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            {state?.success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">{state.message}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        className={cn(
                          "w-full pl-12 pr-4 py-3.5 bg-white border rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                          state?.errors?.name ? "border-red-500" : "border-slate-200 focus:border-blue-600"
                        )}
                      />
                    </div>
                    {state?.errors?.name && <p className="text-red-500 text-xs font-medium ml-1">{state.errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        name="phone"
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className={cn(
                          "w-full pl-12 pr-4 py-3.5 bg-white border rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                          state?.errors?.phone ? "border-red-500" : "border-slate-200 focus:border-blue-600"
                        )}
                      />
                    </div>
                    {state?.errors?.phone && <p className="text-red-500 text-xs font-medium ml-1">{state.errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      name="address"
                      type="text" 
                      placeholder="123 Street, City, Country"
                      className={cn(
                        "w-full pl-12 pr-4 py-3.5 bg-white border rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                        state?.errors?.address ? "border-red-500" : "border-slate-200 focus:border-blue-600"
                      )}
                    />
                  </div>
                  {state?.errors?.address && <p className="text-red-500 text-xs font-medium ml-1">{state.errors.address}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className={cn(
                        "w-full pl-12 pr-4 py-3.5 bg-white border rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none",
                        state?.errors?.message ? "border-red-500" : "border-slate-200 focus:border-blue-600"
                      )}
                    />
                  </div>
                  {state?.errors?.message && <p className="text-red-500 text-xs font-medium ml-1">{state.errors.message}</p>}
                </div>

                {state?.message && !state.success && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm font-medium">
                    <AlertCircle className="w-4 h-4" />
                    {state.message}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-slate-200"
                >
                  {isPending ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
