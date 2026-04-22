import { motion } from 'framer-motion'

const logos = [
  { name: 'Viali', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Viali-r33tphlumnh5l63zavs69cdkvvwaa5zyriiy4ddjb4.png' },
  { name: 'ARK', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-ARK-r33tia6e8dm0ksktdrn555ucxjez9pe1rugxo0270g.png' },
  { name: 'Felcan', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Felcan-r33ss67se1va2qi5uhc7vr1ew83xgdqgum3drarvuo.png' },
  { name: 'Estervi', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Estervi-r33t7mo8rz10zw1vl5vcvumakbx8173kb4atv3utj4.png' },
  { name: 'Masherland', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Masherland-r33sc377g3unexv7rj217t5gyvdtqtvtb08a4umebk.png' },
  { name: 'Robusta', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Robusta-r33rwx2d5d321hwhcgzsh4ynu05kionrjx76b344qo.png' },
  { name: 'Herreros', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Herreros-r33sllcgjsv0t0289my8fet974jfknm3y1p0tkj3eo.png' },
  { name: 'San Polos', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-San-Polos-r33rqd5hhy433df6m50flahyqagfunn4zhgaumty4g.png' },
  { name: 'Superiores', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Superiores-r33rgr8vmwykevdmpzhq3psc4htd61hwzxdm8t2tq8.png' },
  { name: 'Titinos', url: 'https://www.marquillasyetiquetas.co/wp-content/uploads/elementor/thumbs/Logo-Titinos-r33r06dd349hmhgmjbhmmeemwtjae8od1v4ai3nthc.png' },
]

const track = [...logos, ...logos]

export default function Clients() {
  return (
    <section id="clientes" style={{ padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#F97316', fontSize: 11, fontWeight: 700, padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            Ellos confiaron en nosotros
          </div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
            Marcas que eligen{' '}
            <span style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>calidad</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Empresas líderes de la industria textil colombiana nos eligen para dar identidad a sus productos.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll track */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #0A0A0A, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #0A0A0A, transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 16, width: 'max-content' }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0, width: 180, height: 80,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '0 24px', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <img src={logo.url} alt={logo.name} style={{ maxHeight: 44, maxWidth: 120, objectFit: 'contain', filter: 'brightness(0.65)', transition: 'filter 0.2s' }}
                onMouseEnter={e => e.target.style.filter = 'brightness(1)'}
                onMouseLeave={e => e.target.style.filter = 'brightness(0.65)'}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonial */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{
            marginTop: 64, borderRadius: 24,
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            padding: '48px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(249,115,22,0.06), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 64, color: '#F97316', lineHeight: 0.8, marginBottom: 24, position: 'relative' }}>"</div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.75, maxWidth: 600, margin: '0 auto 20px', position: 'relative' }}>
            La calidad de sus marquillas le da un valor diferencial increíble a nuestras prendas. El equipo siempre cumple con los tiempos y supera nuestras expectativas.
          </p>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, position: 'relative' }}>— Cliente de la industria textil bogotana</div>
        </motion.div>
      </div>
    </section>
  )
}
