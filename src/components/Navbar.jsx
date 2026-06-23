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
    <nav className="flex justify-between items-center px-4 md:px-20 py-6 fixed w-full top-0 z-40 bg-white/10 backdrop-blur-md">
      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center font-semibold text-gray-700 text-sm md:text-base">
        H
      </div>

      <div className="flex text-gray-800 gap-1 md:gap-2">
        <button 
          onClick={() => handleScroll('home')} 
          className={`px-2 md:px-4 py-2 rounded-full font-light tracking-wider transition text-xs md:text-sm ${active === 'home' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          Accueil
        </button>
        <button 
          onClick={() => handleScroll('about')} 
          className={`px-2 md:px-6 py-2 rounded-full font-light tracking-wider transition text-xs md:text-sm ${active === 'about' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          À Propos
        </button>
        <button 
          onClick={() => handleScroll('projects')} 
          className={`px-2 md:px-6 py-2 rounded-full font-light tracking-wider transition text-xs md:text-sm ${active === 'projects' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          Projets
        </button>
        <button 
          onClick={() => handleScroll('contact')} 
          className={`px-2 md:px-6 py-2 rounded-full font-light tracking-wider transition text-xs md:text-sm ${active === 'contact' ? 'bg-white shadow-lg' : 'hover:bg-gray-100'}`}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}
