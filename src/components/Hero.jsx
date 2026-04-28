import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, animate, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

/* Floating shape — outer div drives scroll parallax, inner drives entrance */
function Shape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = 'rgba(255,255,255,0.06)', parallaxY }) {
  return (
    <motion.div className={className} style={{ position: 'absolute', y: parallaxY }}>
      <motion.div
        initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
        animate={{ opacity: 1, y: 0, rotate }}
        transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width, height, position: 'relative' }}
        >
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 9999,
            background: `linear-gradient(to right, ${gradient}, transparent)`,
            backdropFilter: 'blur(2px)',
            border: '2px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px 0 rgba(255,255,255,0.04)',
          }} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

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

  return (
    <span ref={ref} style={{
      fontFamily: 'Syne, sans-serif', fontWeight: 800,
      fontSize: 'clamp(26px,3vw,38px)',
      background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.6))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      {prefix}{display}
    </span>
  )
}

const stats = [
  { prefix: '+', to: 20, label: 'Años de experiencia' },
  { prefix: '+', to: 10, label: 'Marcas confiadas' },
  { prefix: '',  to: 9,  label: 'Tipos de servicio' },
]

const gridImgs = [
  { src: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Microinyeccion-1.jpg', span: true },
  { src: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Repujado-2.jpg' },
  { src: 'https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/Parches-Textiles.jpg' },
]

export default function Hero() {
  /* Scroll parallax values */
  const { scrollY } = useScroll()
  const bgY       = useTransform(scrollY, [0, 700], [0, 110])
  const contentY  = useTransform(scrollY, [0, 700], [0, -55])
  const imgGridY  = useTransform(scrollY, [0, 700], [0,  75])
  const shape1Y   = useTransform(scrollY, [0, 700], [0,  90])
  const shape2Y   = useTransform(scrollY, [0, 700], [0,  55])
  const shape3Y   = useTransform(scrollY, [0, 700], [0, 130])
  const shape4Y   = useTransform(scrollY, [0, 700], [0,  40])

  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, overflow: 'hidden' }}>

      {/* Shapes — each at different parallax depth */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Shape parallaxY={shape1Y} delay={0.2}  width={580} height={130} rotate={12}  gradient="rgba(37,99,235,0.15)"  className="left-[-8%] top-[18%]" />
        <Shape parallaxY={shape2Y} delay={0.5}  width={340} height={85}  rotate={-10} gradient="rgba(79,70,229,0.12)"  className="right-[4%] top-[10%]" />
        <Shape parallaxY={shape3Y} delay={0.7}  width={220} height={58}  rotate={22}  gradient="rgba(96,165,250,0.1)"  className="right-[18%] bottom-[22%]" />
        <Shape parallaxY={shape4Y} delay={0.35} width={170} height={46}  rotate={-22} gradient="rgba(139,92,246,0.1)"  className="left-[14%] bottom-[14%]" />
      </div>

      {/* Parallax background */}
      <motion.div style={{ position: 'absolute', inset: 0, y: bgY, pointerEvents: 'none' }}>
        <img
          src="https://www.marquillasyetiquetas.co/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-05-at-5.05-scaled.jpg"
          alt="" style={{ width: '100%', height: '115%', objectFit: 'cover', opacity: 0.12 }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.1) 40%, #0A0A0A)' }} />
        <div style={{
          position: 'absolute', top: '35%', left: '25%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(37,99,235,0.07)', filter: 'blur(100px)',
          transform: 'translate(-50%,-50%)',
        }} />
      </motion.div>

      {/* Content grid */}
      <div style={{
        position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto',
        padding: '80px 24px', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
      }} className="hero-grid">

        {/* Copy — slight upward parallax */}
        <motion.div style={{ y: contentY }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 100,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
              marginBottom: 28,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
              Bogotá, Colombia · Desde 2003
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(40px,5.5vw,70px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: 20, color: '#fff',
            }}
          >
            Marquillas
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #fff 50%, #2563EB 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              &amp; Etiquetas
            </span>
            <br />
            de calidad
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}
          >
            Fabricamos marquillas, etiquetas y accesorios textiles con tecnología de punta y personalización total para tu marca en Bogotá.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=573134982178"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#2563EB', color: '#fff', fontWeight: 700,
                padding: '14px 28px', borderRadius: 100, fontSize: 15,
                textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <WhatsAppIcon size={17} color="#fff" />
              Pedir cotización
            </a>
            <a
              href="#servicios"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.8)', fontWeight: 600,
                padding: '14px 28px', borderRadius: 100, fontSize: 15,
                textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >
              Ver servicios <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}
            style={{ display: 'flex', gap: 40, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <Counter prefix={s.prefix} to={s.to} />
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image grid — slower parallax = feels farther away */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, y: imgGridY }}
          className="hero-img-grid"
        >
          {gridImgs.map((img, i) => (
            <div
              key={img.src}
              style={{
                borderRadius: 20, overflow: 'hidden', position: 'relative',
                height: img.span ? 220 : 165,
                gridColumn: img.span ? '1 / -1' : 'auto',
              }}
            >
              <img
                src={img.src} alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                loading={i === 0 ? 'eager' : 'lazy'}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, pointerEvents: 'none' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #2563EB, transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:0.5; transform:scale(0.85) } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-img-grid { display: none !important; }
        }
      `}</style>
    </section>
  )
}
