import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  { icon: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Calidad-2.png', title: 'Calidad garantizada', desc: 'Control estricto en cada etapa de producción para resultados impecables.' },
  { icon: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Avance-2.png', title: 'Tecnología avanzada', desc: 'Maquinaria de última generación para acabados precisos y de primera.' },
  { icon: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Experiencia-2.png', title: '+20 años de experiencia', desc: 'Dos décadas sirviendo a la industria textil colombiana con excelencia.' },
  { icon: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Personalizacion-2.png', title: 'Personalización total', desc: 'Cada producto adaptado a la identidad y necesidades específicas de tu marca.' },
]

export default function Values() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* ambient glow */}
      <div style={{ position: 'absolute', left: -100, top: '50%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(249,115,22,0.05)', filter: 'blur(80px)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="values-grid">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
              <img
                src="https://www.marquillasyetiquetas.co/wp-content/uploads/2013/07/nosotros-1024x681.jpg"
                alt="Taller"
                style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{
                position: 'absolute', bottom: -20, right: -20,
                background: '#111', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20, padding: '20px 24px', backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', gap: 16,
              }}
            >
              <img src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/20-anos-experiencia.png" alt="20 años" style={{ width: 56, height: 56, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>+20 años</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 2 }}>en la industria textil</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div ref={ref}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{ display: 'inline-block', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#F97316', fontSize: 11, fontWeight: 700, padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}
            >
              Por qué elegirnos
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}
            >
              Fabricamos con{' '}
              <span style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>precisión</span>{' '}
              y pasión
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}
            >
              Somos una empresa bogotana especializada en la fabricación de marquillas, etiquetas y accesorios para la industria textil. Combinamos experiencia artesanal con tecnología de vanguardia.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.09 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 16, padding: '16px 18px', transition: 'border-color 0.2s',
                  }}
                  whileHover={{ borderColor: 'rgba(249,115,22,0.2)' }}
                >
                  <img src={p.icon} alt={p.title} style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 4 }}>{p.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}>{p.desc}</div>
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
