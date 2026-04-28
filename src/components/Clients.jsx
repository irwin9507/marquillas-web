import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const logos = [
  { name: 'Viali',      url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Viali-r33tphlumnh5l63zavs69cdkvvwaa5zyriiy4ddjb4.png' },
  { name: 'ARK',        url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-ARK-r33tia6e8dm0ksktdrn555ucxjez9pe1rugxo0270g.png' },
  { name: 'Felcan',     url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Felcan-r33ss67se1va2qi5uhc7vr1ew83xgdqgum3drarvuo.png' },
  { name: 'Estervi',    url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Estervi-r33t7mo8rz10zw1vl5vcvumakbx8173kb4atv3utj4.png' },
  { name: 'Masherland', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Masherland-r33sc377g3unexv7rj217t5gyvdtqtvtb08a4umebk.png' },
  { name: 'Robusta',    url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Robusta-r33rwx2d5d321hwhcgzsh4ynu05kionrjx76b344qo.png' },
  { name: 'Herreros',   url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Herreros-r33sllcgjsv0t0289my8fet974jfknm3y1p0tkj3eo.png' },
  { name: 'San Polos',  url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-San-Polos-r33rqd5hhy433df6m50flahyqagfunn4zhgaumty4g.png' },
  { name: 'Superiores', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Superiores-r33rgr8vmwykevdmpzhq3psc4htd61hwzxdm8t2tq8.png' },
  { name: 'Titinos',    url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Titinos-r33r06dd349hmhgmjbhmmeemwtjae8od1v4ai3nthc.png' },
]

const testimonials = [
  {
    quote: 'La calidad de sus marquillas le da un valor diferencial increíble a nuestras prendas. El equipo siempre cumple con los tiempos y supera nuestras expectativas.',
    author: 'Carlos M.', role: 'Director de Producción · Empresa Textil', stars: 5,
  },
  {
    quote: 'Llevamos más de 5 años trabajando con ellos. La personalización total y la atención al detalle hacen la diferencia. Son nuestros aliados estratégicos.',
    author: 'Andrea L.', role: 'Gerente de Marca · Moda Nacional', stars: 5,
  },
  {
    quote: 'Entregaron exactamente lo que necesitábamos. Calidad premium, tiempos cumplidos y excelente servicio post-venta en cada pedido.',
    author: 'Jorge R.', role: 'Jefe de Compras · Corporación Industrial', stars: 5,
  },
]

const track = [...logos, ...logos]

export default function Clients() {
  return (
    <section id="clientes" style={{ padding: '100px 0' }}>
      {/* Header */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)',
            color: '#2563EB', fontSize: 11, fontWeight: 700,
            padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: 20,
          }}>
            Ellos confiaron en nosotros
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px,4vw,46px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', marginBottom: 16, color: '#fff',
          }}>
            Marcas que eligen{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              calidad
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Empresas líderes de la industria textil colombiana nos eligen para dar identidad a sus productos.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #0A0A0A, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #0A0A0A, transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 16, width: 'max-content' }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0, width: 180, height: 80,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '0 24px', transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
            >
              <img
                src={logo.url} alt={logo.name}
                style={{ maxHeight: 44, maxWidth: 120, objectFit: 'contain', filter: 'brightness(0.6)', transition: 'filter 0.2s' }}
                loading="lazy"
                onMouseEnter={e => e.target.style.filter = 'brightness(1)'}
                onMouseLeave={e => e.target.style.filter = 'brightness(0.6)'}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center', marginTop: 60, marginBottom: 32, fontWeight: 500 }}
        >
          Lo que dicen nuestros clientes
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -4, borderColor: 'rgba(37,99,235,0.22)' }}
              style={{
                background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24, padding: '28px', position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s', cursor: 'default',
              }}
            >
              {/* Top glow line */}
              <div style={{ position: 'absolute', inset: '0 0 auto', height: 1, background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.4), transparent)' }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={13} style={{ fill: '#2563EB', color: '#2563EB' }} />
                ))}
              </div>

              {/* Quote mark */}
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 48, color: 'rgba(37,99,235,0.3)', lineHeight: 0.8, marginBottom: 16 }}>"</div>

              {/* Text */}
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(37,99,235,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 13, color: '#60A5FA',
                }}>
                  {t.author[0]}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{t.author}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 1 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
