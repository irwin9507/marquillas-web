import { motion } from 'framer-motion'

const stats = [
  { value: '+20', label: 'Años de experiencia' },
  { value: '+10', label: 'Marcas confiaron' },
  { value: '9', label: 'Tipos de servicio' },
]

const gridImgs = [
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Microinyeccion-1.jpg',
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Repujado-2.jpg',
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Parches-Textiles.jpg',
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Cinta-Marquilla.jpg',
]

export default function Hero() {
  return (
    <section id="inicio" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', paddingTop: 72, overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-05-at-5.05-scaled.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.3) 40%, #0A0A0A)' }} />
        {/* Glow */}
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: 600, height: 600, borderRadius: '50%', background: 'rgba(249,115,22,0.08)', filter: 'blur(100px)', transform: 'translate(-50%,-50%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '60px 24px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
        {/* Copy */}
        <div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ marginBottom: 28 }}
          >
            <img
              src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Logo-Marka-Minimalista.png"
              alt="Marquillas y Etiquetas"
              style={{ height: 64, objectFit: 'contain', borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.02em' }}
          >
            Marquillas
            <br />
            <span style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              &amp; Etiquetas
            </span>
            <br />
            de calidad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}
          >
            Fabricamos marquillas, etiquetas y accesorios textiles con tecnología de punta y personalización total para tu marca en Bogotá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=573134982178"
              target="_blank" rel="noopener noreferrer"
              style={{ background: '#F97316', color: '#fff', padding: '14px 28px', borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(249,115,22,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Pedir cotización →
            </a>
            <a
              href="#servicios"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', padding: '14px 28px', borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: 40, marginTop: 52, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 30, fontWeight: 800, background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
          className="hero-img-grid"
        >
          {gridImgs.map((src, i) => (
            <div
              key={src}
              style={{
                borderRadius: 16, overflow: 'hidden',
                height: i === 0 ? 220 : 160,
                gridColumn: i === 0 ? '1 / -1' : 'auto',
                position: 'relative',
              }}
            >
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ width: 2, height: 36, background: 'linear-gradient(to bottom, #F97316, transparent)', borderRadius: 1 }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-img-grid { display: none !important; }
        }
      `}</style>
    </section>
  )
}
