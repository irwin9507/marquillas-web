import { motion } from 'framer-motion'

function InfoRow({ emoji, label, value, href }) {
  const inner = (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 16,
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: '16px 20px', transition: 'border-color 0.2s',
      textDecoration: 'none', color: 'inherit',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
        {emoji}
      </div>
      <div>
        <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{label}</div>
        <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{value}</div>
      </div>
      {href && <div style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.2)', fontSize: 18, alignSelf: 'center' }}>↗</div>}
    </div>
  )

  return href ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>{inner}</a> : inner
}

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const msg = `Hola! Me llamo ${fd.get('nombre')}${fd.get('empresa') ? ` de ${fd.get('empresa')}` : ''}. Estoy interesado en: ${fd.get('servicio') || 'sus servicios'}. ${fd.get('desc') || ''}`
    window.open(`https://api.whatsapp.com/send?phone=573134982178&text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contacto" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, top: '50%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(249,115,22,0.05)', filter: 'blur(80px)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#F97316', fontSize: 11, fontWeight: 700, padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Contáctanos
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
              Hablemos de tu{' '}
              <span style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>próximo proyecto</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              Cotiza sin compromiso. Respondemos en menos de 24 horas y te asesoramos en el proceso de personalización.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <InfoRow emoji="💬" label="WhatsApp" value="+57 313 498 2178" href="https://api.whatsapp.com/send?phone=573134982178" />
              <InfoRow emoji="📞" label="Teléfonos" value="+57 313 498 2178 · +57 302 705 3531 · +57 302 861 5976" />
              <InfoRow emoji="✉️" label="Email" value="disenodtf@gmail.com" href="mailto:disenodtf@gmail.com" />
              <InfoRow emoji="📍" label="Dirección" value="Cll 19 Sur #24G-15 · Bogotá D.C, Colombia" />
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
              <a href="https://www.instagram.com/marquillas_etiquetas/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', padding: '10px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                📸 Instagram
              </a>
              <a href="https://api.whatsapp.com/send?phone=573134982178" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', padding: '10px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(72,199,116,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 0% 0%, rgba(249,115,22,0.06), transparent 60%)', pointerEvents: 'none' }} />
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, marginBottom: 28, position: 'relative' }}>Solicita una cotización</h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ name: 'nombre', ph: 'Tu nombre', required: true }, { name: 'empresa', ph: 'Tu empresa' }].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{f.ph}</label>
                      <input name={f.name} type="text" placeholder={f.ph} required={f.required}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Servicio de interés</label>
                  <select name="servicio"
                    style={{ width: '100%', background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 14px', color: 'rgba(255,255,255,0.7)', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <option value="">Seleccionar...</option>
                    {['Impresión DTF', 'Microinyección', 'Corte y Grabado Láser', 'Repujado', 'Parches Textiles', 'CNC', 'Cinta Marquilla', 'Estampados', 'Otro'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Descripción del pedido</label>
                  <textarea name="desc" rows={4} placeholder="Cuéntanos sobre tu proyecto, cantidad, materiales, etc."
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', resize: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button type="submit"
                  style={{ width: '100%', background: '#F97316', color: '#fff', border: 'none', borderRadius: 14, padding: '16px', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(249,115,22,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  💬 Enviar por WhatsApp
                </button>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textAlign: 'center' }}>Te respondemos en menos de 24 horas hábiles</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}
