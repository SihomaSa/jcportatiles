import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './components/Products'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoBar />
      <Services />
      <Products />
      <WhyUs />
      <CTABanner />
      <Contact />
      <Footer />
    </>
  )
}
