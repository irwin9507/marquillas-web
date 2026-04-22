import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Servicios', 'Nosotros', 'Clientes', 'Contacto']

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#inicio">
            <img
              src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Logo-Marka-Minimalista.png"
              alt="Marquillas y Etiquetas"
              style={{ height: 44, objectFit: 'contain' }}
            />
          </a>

          {/* Desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >
                {l}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=573134982178"
              target="_blank" rel="noopener noreferrer"
              style={{
                background: '#2563EB', color: '#fff', padding: '10px 22px',
                borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                transition: 'transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.background = '#1D4ED8' }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.background = '#2563EB' }}
            >
              <WhatsAppIcon size={16} color="#fff" /> Cotizar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8 }}
            className="show-mobile"
          >
            <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 5, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 5, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <div style={{ width: 24, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
            }}
          >
            {links.map(l => (
              <a
                key={l} href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ color: '#fff', fontSize: 32, fontFamily: 'Syne, sans-serif', fontWeight: 700, textDecoration: 'none' }}
              >
                {l}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=573134982178"
              target="_blank" rel="noopener noreferrer"
              style={{ background: '#2563EB', color: '#fff', padding: '14px 36px', borderRadius: 100, fontSize: 18, fontWeight: 700, textDecoration: 'none', marginTop: 16 }}
            >
              <WhatsAppIcon size={20} color="#fff" /> Cotizar ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
