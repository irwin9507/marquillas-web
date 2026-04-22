import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Values from './components/Values'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Services />
      <Values />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
