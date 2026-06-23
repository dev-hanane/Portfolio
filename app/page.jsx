'use client'

import Navbar from '@/src/components/Navbar'
import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import Projects from '@/src/components/Projects'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}
