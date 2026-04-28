import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { BadgeCheck, Cpu, Award, Palette } from 'lucide-react'

const pillars = [
  { Icon: BadgeCheck, title: 'Calidad garantizada',     desc: 'Control estricto en cada etapa de producción para resultados impecables.' },
  { Icon: Cpu,        title: 'Tecnología avanzada',     desc: 'Maquinaria de última generación para acabados precisos y de primera.' },
  { Icon: Award,      title: '+20 años de experiencia', desc: 'Dos décadas sirviendo a la industria textil colombiana con excelencia.' },
  { Icon: Palette,    title: 'Personalización total',   desc: 'Cada producto adaptado a la identidad y necesidades específicas de tu marca.' },
]

function Counter({ to, prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(count, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: v => setDisplay(Math.floor(v)),
    })
    return () => ctrl.stop()
  }, [inView, to])

  return <span ref={ref}>{prefix}{display}</span>
}

/* 3D tilt image card */
function TiltImage() {
  const imgRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = e => {
    if (!imgRef.current) return
    const rect = imgRef.current.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2)
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2)
    setTilt({ x: dx * 7, y: dy * -5 })
  }

  const handleMouseLeave = () => { setTilt({ x: 0, y: 0 }); setHovered(false) }
  const handleMouseEnter = () => setHovered(true)

  return (
    <div
      ref={imgRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        borderRadius: 24, overflow: 'hidden', position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `perspective(1100px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.015 : 1})`,
        transition: 'transform 0.18s ease-out',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      <img
        src="https://www.marquillasyetiquetas.co/wp-content/uploads/2013/07/nosotros-1024x681.jpg"
        alt="Taller Marquillas y Etiquetas"
        style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, transparent 60%)' }} />

      {/* Moving highlight that tracks mouse — gives illusion of light source */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at ${50 + tilt.x * 4}% ${50 - tilt.y * 4}%, rgba(255,255,255,0.07), transparent 65%)`,
        transition: 'background 0.18s ease-out',
      }} />
    </div>
  )
}

export default function Values() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient */}
      <div style={{
        position: 'absolute', left: -100, top: '50%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(37,99,235,0.05)', filter: 'blur(80px)',
        transform: 'translateY(-50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="values-grid">

          {/* Image side with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', perspective: 1100 }}
          >
            <TiltImage />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                position: 'absolute', bottom: -20, right: -20,
                background: '#111', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20, padding: '18px 22px', backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 16, flexShrink: 0,
                background: 'rgba(37,99,235,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Award size={26} style={{ color: '#60A5FA' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800,
                  background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  <Counter to={20} prefix="+" />
                  <span style={{ fontSize: 14, marginLeft: 4 }}>años</span>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>en la industria textil</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{
                display: 'inline-block',
                background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)',
                color: '#2563EB', fontSize: 11, fontWeight: 700,
                padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 20,
              }}
            >
              Por qué elegirnos
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(26px,3.5vw,46px)', lineHeight: 1.1,
                letterSpacing: '-0.02em', marginBottom: 20, color: '#fff',
              }}
            >
              Fabricamos con{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                precisión
              </span>{' '}
              y pasión
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}
            >
              Somos una empresa bogotana especializada en la fabricación de marquillas, etiquetas y accesorios para la industria textil. Combinamos experiencia artesanal con tecnología de vanguardia.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {pillars.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.09 }}
                  whileHover={{ borderColor: 'rgba(37,99,235,0.2)', x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 16, padding: '14px 16px', transition: 'border-color 0.2s, transform 0.2s',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(37,99,235,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 3 }}>{title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .values-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}
