'use client'

import { useState } from 'react'

export default function Navbar(){
  const [active, setActive] = useState('home')

  const handleScroll = (id) => {
    setActive(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return(
    <nav className="flex justify-between items-center px-20 py-6 fixed w-full top-0 z-40 bg-white/10 backdrop-blur-md">
      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center font-semibold text-gray-700">
        H
      </div>

      <div className="flex text-gray-800 gap-2">
        <button 
          onClick={() => handleScroll('home')} 
          className={`px-4 py-2 rounded-full font-light tracking-wider transition ${active === 'home' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          Accueil
        </button>
        <button 
          onClick={() => handleScroll('about')} 
          className={`px-6 py-2 rounded-full font-light tracking-wider transition ${active === 'about' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          À Propos
        </button>
        <button 
          onClick={() => handleScroll('projects')} 
          className={`px-6 py-2 rounded-full font-light tracking-wider transition ${active === 'projects' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          Projets
        </button>
        <button 
          onClick={() => handleScroll('contact')} 
          className={`px-6 py-2 rounded-full font-light tracking-wider transition ${active === 'contact' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}