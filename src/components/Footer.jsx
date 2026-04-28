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

const serviceLinks = ['Impresión DTF', 'Microinyección', 'Corte Láser', 'Repujado', 'Parches Textiles', 'CNC', 'Estampados']

const contactInfo = [
  { Icon: MapPin, text: 'Cll 19 Sur #24G-15, Bogotá' },
  { Icon: Phone,  text: '+57 313 498 2178' },
  { Icon: Mail,   text: 'disenodtf@gmail.com' },
]

const paymentLogos = [
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Nequi.png',
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Bancolombia.png',
  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Daviplata.png',
]

function SocialBtn({ href, children, label }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{
        width: 40, height: 40, borderRadius: '50%', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        color: 'rgba(255,255,255,0.55)', transition: 'border-color 0.2s, background 0.2s', cursor: 'pointer',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'; e.currentTarget.style.background = 'rgba(37,99,235,0.1)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 64, paddingBottom: 32, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <img
              src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Logo-Marka-Minimalista.png"
              alt="Marquillas y Etiquetas"
              style={{ height: 48, objectFit: 'contain', display: 'block', marginBottom: 20 }}
              loading="lazy"
            />
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Fabricantes de marquillas, etiquetas y accesorios textiles en Bogotá. Más de 20 años dando identidad a las marcas colombianas.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <SocialBtn href="https://api.whatsapp.com/send?phone=573134982178" label="WhatsApp">
                <WhatsAppIcon size={17} color="#25D366" />
              </SocialBtn>
              <SocialBtn href="https://www.instagram.com/marquillas_etiquetas/" label="Instagram">
                <InstagramIcon size={16} />
              </SocialBtn>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
              Servicios
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <a
                    href="#servicios"
                    style={{
                      color: 'rgba(255,255,255,0.38)', fontSize: 13.5, textDecoration: 'none',
                      display: 'inline-flex', alignItems: 'center', gap: 4,
                      transition: 'color 0.2s', cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
              Contacto
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {contactInfo.map(({ Icon, text }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Icon size={14} style={{ color: 'rgba(37,99,235,0.7)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13.5, lineHeight: 1.5 }}>{text}</span>
                </li>
              ))}
            </ul>

            <div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Métodos de pago
              </p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                {paymentLogos.map((src, i) => (
                  <img key={i} src={src} alt="pago" style={{ height: 28, objectFit: 'contain', filter: 'brightness(0.55)' }} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: 12 }}>
            © 2025 Marquillas y Etiquetas. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Política de privacidad', 'Términos de uso'].map(t => (
              <a
                key={t} href="#"
                style={{ color: 'rgba(255,255,255,0.22)', fontSize: 12, textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
      `}</style>
    </footer>
  )
}
