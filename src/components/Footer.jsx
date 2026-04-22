export default function Footer() {
  const serviceLinks = ['Impresión DTF', 'Microinyección', 'Corte Láser', 'Repujado', 'Parches Textiles', 'CNC', 'Estampados']

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <img src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Logo-Marka-Minimalista.png" alt="Marquillas y Etiquetas"
              style={{ height: 52, objectFit: 'contain', marginBottom: 16 }} />
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Fabricantes de marquillas, etiquetas y accesorios textiles en Bogotá. Más de 20 años dando identidad a las marcas colombianas.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { href: 'https://api.whatsapp.com/send?phone=573134982178', label: '💬' },
                { href: 'https://www.instagram.com/marquillas_etiquetas/', label: '📸' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 16, transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>Servicios</div>
            <ul style={{ listStyle: 'none' }}>
              {serviceLinks.map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <a href="#servicios" style={{ color: 'rgba(255,255,255,0.38)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#F97316'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.38)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Payment */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>Contacto</div>
            {[
              '📍 Cll 19 Sur #24G-15, Bogotá',
              '📞 +57 313 498 2178',
              '✉️ disenodtf@gmail.com',
            ].map(t => (
              <div key={t} style={{ color: 'rgba(255,255,255,0.38)', fontSize: 14, marginBottom: 10 }}>{t}</div>
            ))}

            <div style={{ marginTop: 28 }}>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Métodos de pago</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                {[
                  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Nequi.png',
                  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Bancolombia.png',
                  'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Daviplata.png',
                ].map((src, i) => (
                  <img key={i} src={src} alt="pago" style={{ height: 28, objectFit: 'contain', filter: 'brightness(0.6)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>© 2025 Marquillas y Etiquetas. Todos los derechos reservados.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Política de privacidad', 'Términos de uso'].map(t => (
              <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
      `}</style>
    </footer>
  )
}
