'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    console.log('Formulaire envoyé:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return(
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-white/10">
      <div className="px-20 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              H
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Hanane Chaaouan</h2>
          <p className="text-gray-400">Élève ingénieure en informatique</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+212671484261" className="flex items-center justify-center gap-3 text-gray-400 hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3c0 1.105-.895 2-2 2h-2C9.716 23 3 16.284 3 8V6c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2v3c0 1.105-.895 2-2 2H9c1.066 1.555 2.678 2.813 4.513 3.487C15.738 11.147 17 9.289 17 7v-3c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2v3c0 1.105-.895 2-2 2h-1c1.066 1.555 2.678 2.813 4.513 3.487"/></svg>
                <span>06 71 48 42 61</span>
              </a>
              
              <a href="mailto:Chaaouanhanane18@gmail.com" className="flex items-center justify-center gap-3 text-gray-400 hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>Chaaouanhanane18@gmail.com</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Taza, Maroc</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-6">Réseaux</h3>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/dev-hanane" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              
              <a href="https://www.linkedin.com/in/hanane-chaaouan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.249-.129.597-.129.946v5.423h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.662 1.196-1.608 2.902-1.608 2.12 0 3.71 1.388 3.71 4.373v5.517zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.955.77-1.703 1.963-1.703 1.192 0 1.914.748 1.938 1.703 0 .948-.746 1.706-1.986 1.706zm1.581 11.597H3.715V9.806h3.203v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>

              <a href="mailto:Chaaouanhanane18@gmail.com" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-6">Formulaire de Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
              >
                Envoyer
              </button>
              {submitted && (
                <p className="text-green-400 text-sm">Message envoyé avec succès! ✓</p>
              )}
            </form>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500">© 2024 Hanane Chaaouan. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  )
}