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

/* ── Sticky scroll (desktop) ─────────────────────────────── */
function StickyShowcase() {
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
    <section ref={containerRef} style={{ height: `${services.length * 100}vh` }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        background: '#0A0A0A', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Top progress bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.05)', zIndex: 10 }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #2563EB, #60A5FA)', width: progressWidth }} />
        </div>

        {/* Ambient glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 68% 50%, rgba(37,99,235,0.08), transparent 55%)',
        }} />

        {/* Content row */}
        <div style={{
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
                {/* Big number */}
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

            {/* Pill dots */}
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
            flex: 1,
            height: 'calc(100vh - 200px)', minHeight: 320,
            borderRadius: 24, overflow: 'hidden', position: 'relative',
          }}>
            {/* Outer glow */}
            <div style={{
              position: 'absolute', inset: -40, zIndex: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12), transparent 65%)',
              filter: 'blur(24px)',
            }} />

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={s.img} alt={s.name}
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
              />
            </AnimatePresence>

            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 2,
              background: 'linear-gradient(to right, rgba(10,10,10,0.3), transparent 40%), linear-gradient(to top, rgba(10,10,10,0.55), transparent 50%)',
            }} />

            {/* Label watermark */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`lbl-${activeIdx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute', bottom: 26, left: 26, zIndex: 3,
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12,
                  color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.12em',
                }}
              >
                {s.name}
              </motion.div>
            </AnimatePresence>
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
  )
}

/* ── Mobile grid fallback ─────────────────────────────────── */
function MobileGrid() {
  return (
    <div style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)',
            color: '#2563EB', fontSize: 11, fontWeight: 700,
            padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            Nuestros Servicios
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px,7vw,42px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#fff',
          }}>
            Todo lo que tu marca necesita
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }} className="svc-mob-grid">
          {services.map(s => (
            <div key={s.name} style={{ borderRadius: 18, overflow: 'hidden', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ height: 170, overflow: 'hidden', position: 'relative' }}>
                <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%)' }} />
                {s.tag && (
                  <span style={{ position: 'absolute', top: 12, left: 12, background: '#2563EB', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100 }}>
                    {s.tag}
                  </span>
                )}
              </div>
              <div style={{ padding: '14px 16px 18px' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 6 }}>{s.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.43)', fontSize: 12.5, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://api.whatsapp.com/send?phone=573134982178"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#2563EB', color: '#fff', fontWeight: 700,
              padding: '14px 32px', borderRadius: 100, fontSize: 15,
              textDecoration: 'none',
            }}
          >
            <WhatsAppIcon size={18} color="#fff" />
            Solicitar cotización
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div id="servicios">
      <div className="svc-sticky"><StickyShowcase /></div>
      <div className="svc-mobile"><MobileGrid /></div>

      <style>{`
        .svc-mobile { display: none; }
        @media (max-width: 768px) {
          .svc-sticky { display: none; }
          .svc-mobile { display: block; }
          .svc-mob-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) { .svc-mob-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
