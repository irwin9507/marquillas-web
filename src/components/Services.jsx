import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'

const services = [
  { name: 'Impresión DTF', tag: 'POPULAR', desc: 'Transferencia directa con colores vibrantes y alta durabilidad para cualquier tela.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Estampados.jpg' },
  { name: 'Microinyección', desc: 'Etiquetas de alta precisión con acabado premium inyectadas directamente en el tejido.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Microinyeccion-1.jpg' },
  { name: 'Corte y Grabado Láser', desc: 'Precisión láser para cortes y grabados detallados en múltiples materiales.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Corte-y-grabado-laser.jpg' },
  { name: 'Repujado', desc: 'Relieves 3D que dan textura y distinción a tus etiquetas y accesorios.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Repujado-2.jpg' },
  { name: 'Parches Textiles', desc: 'Apliques bordados con diseños personalizados para prendas y accesorios.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Parches-Textiles.jpg' },
  { name: 'CNC', desc: 'Control numérico para piezas y accesorios de máxima precisión industrial.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/CNC.jpg' },
  { name: 'Cinta Marquilla', desc: 'Marquillas en cinta tejida o impresa, ideales para etiquetado textil y uniformes.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Cinta-Marquilla.jpg' },
  { name: 'Estampados', desc: 'Serigrafía y estampado en caliente para grandes volúmenes con colores exactos.', img: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Estampados.jpg' },
]

function Card({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.5 }}
      style={{
        borderRadius: 20, overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'pointer', transition: 'border-color 0.3s, transform 0.3s',
      }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(37,99,235,0.35)' }}
    >
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
        {s.tag && (
          <span style={{ position: 'absolute', top: 14, left: 14, background: '#2563EB', color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 100, letterSpacing: '0.06em' }}>
            {s.tag}
          </span>
        )}
      </div>
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff' }}>{s.name}</h3>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 18, lineHeight: 1 }}>↗</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 13.5, lineHeight: 1.65 }}>{s.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="servicios" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 56 }}>
          <div style={{ display: 'inline-block', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', color: '#2563EB', fontSize: 11, fontWeight: 700, padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            Nuestros Servicios
          </div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
            Todo lo que tu marca{' '}
            <span style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>necesita</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 17, maxWidth: 520, lineHeight: 1.7 }}>
            9 tipos de fabricación con tecnología de punta y acabados premium para la industria textil colombiana.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="services-grid">
          {services.map((s, i) => <Card key={s.name} s={s} i={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=573134982178"
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2563EB', color: '#fff', padding: '14px 32px', borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,99,235,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <WhatsAppIcon size={18} color="#fff" /> Solicitar cotización
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .services-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
