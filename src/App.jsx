import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Services from './components/Services'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoBar />
      <Services />
      <Products />
      <Testimonials />
      <WhyUs />
      <CTABanner />
      <Contact />
      <Footer />
      {/* Botón flotante WhatsApp — visible en toda la página */}
      <WhatsAppFloat />
    </>
  )
}