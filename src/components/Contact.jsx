import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function InfoRow({ icon, label, value, href }) {
  const inner = (
    <div
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 16,
        background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16, padding: '14px 18px',
        transition: 'border-color 0.2s, background 0.2s',
        textDecoration: 'none', color: 'inherit', cursor: href ? 'pointer' : 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 12, flexShrink: 0,
        background: 'rgba(37,99,235,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{label}</div>
        <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, lineHeight: 1.4 }}>{value}</div>
      </div>
      {href && <ArrowUpRight size={14} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: 2 }} />}
    </div>
  )

  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>{inner}</a>
    : inner
}

const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: 12, padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none',
  fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif', transition: 'border-color 0.2s, background 0.2s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const msg = `Hola! Me llamo ${fd.get('nombre')}${fd.get('empresa') ? ` de ${fd.get('empresa')}` : ''}. Estoy interesado en: ${fd.get('servicio') || 'sus servicios'}. ${fd.get('desc') || ''}`
    window.open(`https://api.whatsapp.com/send?phone=573134982178&text=${encodeURIComponent(msg)}`, '_blank')
  }

  const focusStyle = 'rgba(37,99,235,0.5)'
  const blurStyle = 'rgba(255,255,255,0.09)'
  const onFocus = e => { e.target.style.borderColor = focusStyle; e.target.style.background = 'rgba(255,255,255,0.06)' }
  const onBlur = e => { e.target.style.borderColor = blurStyle; e.target.style.background = 'rgba(255,255,255,0.04)' }

  return (
    <section id="contacto" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, top: '50%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(37,99,235,0.04)', filter: 'blur(80px)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)',
              color: '#2563EB', fontSize: 11, fontWeight: 700,
              padding: '6px 16px', borderRadius: 100, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: 20,
            }}>
              Contáctanos
            </div>

            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px,3vw,44px)', lineHeight: 1.1,
              letterSpacing: '-0.02em', marginBottom: 16, color: '#fff',
            }}>
              Hablemos de tu{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                próximo proyecto
              </span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              Cotiza sin compromiso. Respondemos en menos de 24 horas y te asesoramos en todo el proceso de personalización.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <InfoRow icon={<WhatsAppIcon size={20} color="#25D366" />} label="WhatsApp" value="+57 313 498 2178" href="https://api.whatsapp.com/send?phone=573134982178" />
              <InfoRow icon={<Phone size={18} style={{ color: '#2563EB' }} />} label="Teléfonos" value="+57 313 498 2178 · +57 302 705 3531 · +57 302 861 5976" />
              <InfoRow icon={<Mail size={18} style={{ color: '#2563EB' }} />} label="Email" value="disenodtf@gmail.com" href="mailto:disenodtf@gmail.com" />
              <InfoRow icon={<MapPin size={18} style={{ color: '#2563EB' }} />} label="Dirección" value="Cll 19 Sur #24G-15 · Bogotá D.C, Colombia" />
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[
                { href: 'https://www.instagram.com/marquillas_etiquetas/', icon: <InstagramIcon size={14} />, label: 'Instagram' },
                { href: 'https://api.whatsapp.com/send?phone=573134982178', icon: <WhatsAppIcon size={13} color="currentColor" />, label: 'WhatsApp' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)', padding: '9px 18px',
                    borderRadius: 100, fontSize: 13, fontWeight: 500, textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s', cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{
              background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, padding: '36px 32px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 0% 0%, rgba(37,99,235,0.06), transparent 60%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.4), transparent)' }} />

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, marginBottom: 24, color: '#fff', position: 'relative' }}>
                Solicita una cotización
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ name: 'nombre', ph: 'Tu nombre', req: true }, { name: 'empresa', ph: 'Tu empresa' }].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{f.ph}{f.req ? ' *' : ''}</label>
                      <input name={f.name} type="text" placeholder={f.ph} required={f.req} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Servicio de interés</label>
                  <select name="servicio" style={{ ...inputStyle, background: 'rgba(17,17,17,0.9)', appearance: 'none' }} onFocus={onFocus} onBlur={onBlur}>
                    <option value="">Seleccionar...</option>
                    {['Impresión DTF', 'Microinyección', 'Corte y Grabado Láser', 'Repujado', 'Parches Textiles', 'CNC', 'Cinta Marquilla', 'Estampados', 'Otro'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Descripción del pedido</label>
                  <textarea name="desc" rows={4} placeholder="Cuéntanos sobre tu proyecto: cantidad, materiales, colores, etc."
                    style={{ ...inputStyle, resize: 'none' }} onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(37,99,235,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%', background: '#2563EB', color: '#fff', border: 'none',
                    borderRadius: 14, padding: '16px', fontSize: 15, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1D4ED8'}
                  onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}
                >
                  <WhatsAppIcon size={18} color="#fff" />
                  Enviar por WhatsApp
                </motion.button>
                <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12, textAlign: 'center' }}>
                  Te respondemos en menos de 24 horas hábiles
                </p>
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
