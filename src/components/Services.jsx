import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'

const services = [
  { name: 'Impresión DTF',        tag: 'POPULAR', desc: 'Transferencia directa con colores vibrantes y alta durabilidad para cualquier tela.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Estampados.jpg' },
  { name: 'Microinyección',                       desc: 'Etiquetas de alta precisión con acabado premium inyectadas directamente en el tejido.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Microinyeccion-1.jpg' },
  { name: 'Corte y Grabado Láser',                desc: 'Precisión láser para cortes y grabados detallados en múltiples materiales.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Corte-y-grabado-laser.jpg' },
  { name: 'Repujado',                             desc: 'Relieves 3D que dan textura y distinción a tus etiquetas y accesorios.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Repujado-2.jpg' },
  { name: 'Parches Textiles',                     desc: 'Apliques bordados con diseños personalizados para prendas y accesorios.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Parches-Textiles.jpg' },
  { name: 'CNC',                                  desc: 'Control numérico para piezas y accesorios de máxima precisión industrial.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/CNC.jpg' },
  { name: 'Cinta Marquilla',                      desc: 'Marquillas en cinta tejida o impresa, ideales para etiquetado textil y uniformes.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Cinta-Marquilla.jpg' },
  { name: 'Estampados',                           desc: 'Serigrafía y estampado en caliente para grandes volúmenes con colores exactos.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Estampados.jpg' },
]

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const [activeIdx, setActiveIdx] = useState(0)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    return scrollYProgress.on('change', v => {
      setActiveIdx(Math.min(Math.floor(v * services.length), services.length - 1))
    })
  }, [scrollYProgress])

  const s = services[activeIdx]

  return (
    <div id="servicios">
      <section ref={containerRef} style={{ height: `${services.length * 100}vh` }}>
        <div style={{
          position: 'sticky', top: 0, height: '100vh',
          background: '#0A0A0A', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Progress bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.05)', zIndex: 10 }}>
            <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #2563EB, #60A5FA)', width: progressWidth }} />
          </div>

          {/* Ambient glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 68% 50%, rgba(37,99,235,0.08), transparent 55%)',
          }} />

          {/* ── Desktop layout: side by side ── */}
          <div className="svc-desktop" style={{
            flex: 1, display: 'flex', alignItems: 'center',
            maxWidth: 1280, margin: '0 auto', width: '100%',
            padding: '80px 48px 48px', gap: 56,
          }}>
            {/* Left panel */}
            <div style={{ flex: '0 0 44%', maxWidth: '44%' }}>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600, marginBottom: 20 }}>
                Nuestros servicios
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 22 }}>
                    <span style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 800,
                      fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1,
                      background: 'linear-gradient(160deg, rgba(37,99,235,0.65), rgba(37,99,235,0.1))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      {String(activeIdx + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.16)', fontSize: 20, fontWeight: 300 }}>
                      / {String(services.length).padStart(2, '0')}
                    </span>
                  </div>

                  {s.tag && (
                    <div style={{
                      display: 'inline-block', marginBottom: 18,
                      background: '#2563EB', color: '#fff',
                      fontSize: 10, fontWeight: 700, padding: '4px 12px',
                      borderRadius: 100, letterSpacing: '0.08em',
                    }}>
                      {s.tag}
                    </div>
                  )}

                  <h2 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800,
                    fontSize: 'clamp(28px, 3.5vw, 50px)', lineHeight: 1.1,
                    letterSpacing: '-0.02em', color: '#fff', marginBottom: 18,
                  }}>
                    {s.name}
                  </h2>

                  <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 16, lineHeight: 1.78, marginBottom: 32, maxWidth: 400 }}>
                    {s.desc}
                  </p>

                  <a
                    href={`https://api.whatsapp.com/send?phone=573134982178&text=${encodeURIComponent(`Hola! Estoy interesado en el servicio de ${s.name}.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#2563EB', color: '#fff', fontWeight: 700,
                      padding: '12px 24px', borderRadius: 100, fontSize: 14,
                      textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.4)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <WhatsAppIcon size={16} color="#fff" />
                    Cotizar este servicio
                  </a>
                </motion.div>
              </AnimatePresence>

              <div style={{ display: 'flex', gap: 6, marginTop: 48, flexWrap: 'wrap' }}>
                {services.map((_, i) => (
                  <div key={i} style={{
                    height: 4, borderRadius: 2,
                    width: i === activeIdx ? 28 : 8,
                    background: i === activeIdx ? '#2563EB' : 'rgba(255,255,255,0.12)',
                    transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                  }} />
                ))}
              </div>
            </div>

            {/* Right image */}
            <div style={{
              flex: 1, height: 'calc(100vh - 200px)', minHeight: 320,
              borderRadius: 24, overflow: 'hidden', position: 'relative',
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={s.img} alt={s.name}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to right, rgba(10,10,10,0.3), transparent 40%), linear-gradient(to top, rgba(10,10,10,0.55), transparent 50%)',
              }} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={`lbl-${activeIdx}`}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute', bottom: 26, left: 26,
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12,
                    color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.12em',
                  }}
                >
                  {s.name}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Mobile layout: image top + content bottom ── */}
          <div className="svc-mobile-layout" style={{ flex: 1, display: 'none', flexDirection: 'column' }}>
            {/* Image — top 42% */}
            <div style={{ position: 'relative', height: '42%', overflow: 'hidden', flexShrink: 0 }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={`mob-img-${activeIdx}`}
                  src={s.img} alt={s.name}
                  initial={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%)',
              }} />

              {/* Counter overlay on image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mob-num-${activeIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', top: 16, left: 20, display: 'flex', alignItems: 'baseline', gap: 6 }}
                >
                  <span style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 40, lineHeight: 1,
                    background: 'linear-gradient(160deg, rgba(37,99,235,0.8), rgba(37,99,235,0.2))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {String(activeIdx + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 14, fontWeight: 300 }}>
                    / {String(services.length).padStart(2, '0')}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Tag */}
              {s.tag && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: '#2563EB', color: '#fff',
                  fontSize: 10, fontWeight: 700, padding: '4px 12px',
                  borderRadius: 100, letterSpacing: '0.08em',
                }}>
                  {s.tag}
                </div>
              )}
            </div>

            {/* Content — bottom 58% */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 24px 16px', overflow: 'hidden' }}>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600, marginBottom: 10 }}>
                Nuestros servicios
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`mob-content-${activeIdx}`}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800,
                    fontSize: 'clamp(22px, 6vw, 32px)', lineHeight: 1.15,
                    letterSpacing: '-0.02em', color: '#fff', marginBottom: 10,
                  }}>
                    {s.name}
                  </h2>

                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    {s.desc}
                  </p>

                  <a
                    href={`https://api.whatsapp.com/send?phone=573134982178&text=${encodeURIComponent(`Hola! Estoy interesado en el servicio de ${s.name}.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#2563EB', color: '#fff', fontWeight: 700,
                      padding: '11px 20px', borderRadius: 100, fontSize: 13,
                      textDecoration: 'none', cursor: 'pointer',
                    }}
                  >
                    <WhatsAppIcon size={14} color="#fff" />
                    Cotizar este servicio
                  </a>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div style={{ display: 'flex', gap: 5, marginTop: 20, flexWrap: 'wrap' }}>
                {services.map((_, i) => (
                  <div key={i} style={{
                    height: 3, borderRadius: 2,
                    width: i === activeIdx ? 24 : 6,
                    background: i === activeIdx ? '#2563EB' : 'rgba(255,255,255,0.12)',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  }} />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            animate={{ opacity: activeIdx === 0 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, pointerEvents: 'none',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              scroll para explorar
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              style={{ width: 1, height: 22, background: 'linear-gradient(to bottom, #2563EB, transparent)' }}
            />
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .svc-desktop      { display: none !important; }
          .svc-mobile-layout { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
