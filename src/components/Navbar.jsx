import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'rgba(13,13,13,0.92)'
    : 'transparent'
  const navBorder = scrolled
    ? '1px solid rgba(255,255,255,0.08)'
    : '1px solid transparent'
  const navRadius = scrolled ? 18 : 0
  const navMaxW = scrolled ? 720 : 1280
  const navShadow = scrolled ? '0 8px 32px rgba(0,0,0,0.55)' : 'none'

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 2, background: '#2563EB', transformOrigin: 'left', zIndex: 200,
        }}
      />

      {/* Nav wrapper */}
      <div style={{
        position: 'fixed', top: 12, left: 0, right: 0,
        zIndex: 100, display: 'flex', justifyContent: 'center', padding: '0 16px',
      }}>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 20px', height: 56, width: '100%',
            maxWidth: navMaxW, background: navBg, border: navBorder,
            borderRadius: navRadius, backdropFilter: scrolled ? 'blur(24px)' : 'none',
            boxShadow: navShadow,
            transition: 'max-width 0.5s ease, background 0.4s, border-color 0.4s, border-radius 0.4s, backdrop-filter 0.4s, box-shadow 0.4s',
          }}
        >
          {/* Logo */}
          <a href="#inicio" style={{ flexShrink: 0 }}>
            <img
              src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Logo-Marka-Minimalista.png"
              alt="Marquillas y Etiquetas"
              style={{ height: 36, objectFit: 'contain' }}
            />
          </a>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 500,
                  textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s', cursor: 'pointer',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a
              href="https://api.whatsapp.com/send?phone=573134982178"
              target="_blank" rel="noopener noreferrer"
              className="nav-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#2563EB', color: '#fff', fontSize: 13, fontWeight: 600,
                padding: '8px 18px', borderRadius: 100, textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1D4ED8'
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#2563EB'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <WhatsAppIcon size={13} color="#fff" />
              Cotizar
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              className="nav-burger"
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer', padding: 8, display: 'none',
              }}
              aria-label="Menú"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 98,
              background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: '100%', maxWidth: 320, padding: '0 32px' }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: 'block', width: '100%', textAlign: 'center',
                    padding: '18px 0', fontSize: 26, fontFamily: 'Syne, sans-serif',
                    fontWeight: 700, color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                href="https://api.whatsapp.com/send?phone=573134982178"
                target="_blank" rel="noopener noreferrer"
                style={{
                  marginTop: 28, width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 8, background: '#2563EB', color: '#fff',
                  padding: '16px', borderRadius: 18, fontWeight: 700, fontSize: 15,
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                <WhatsAppIcon size={18} color="#fff" />
                Cotizar ahora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-links { display: flex !important; }
        .nav-cta { display: inline-flex !important; }
        .nav-burger { display: none !important; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
