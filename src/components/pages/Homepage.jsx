import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Hero'
import About from './About'
import WhyChooseUs from './WhyChooseUs'
import Testimonial from './Testimonial'
import ContactUs from './ContactUs'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    const handleInitialScroll = () => {
      // Wait for DOM to be ready
      setTimeout(() => {
        if (location.hash) {
          const element = document.querySelector(location.hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        } else {
          // If no hash, scroll to top
          window.scrollTo(0, 0)
        }
      }, 100)
    }

    handleInitialScroll()

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [location])

  return (
    <div className="flex flex-col">
      <section id="hero" className="min-h-screen snap-start">
        <Hero />
      </section>
      
      <section id="about" className="min-h-screen">
        <About />
      </section>
      
      <section id="why-us" className="min-h-screen">
        <WhyChooseUs />
      </section>
      
      <section id="testimonial" className="min-h-screen">
        <Testimonial />
      </section>
      
      <section id="contact" className="min-h-screen">
        <ContactUs />
      </section>
    </div>
  )
}

export default HomePage
