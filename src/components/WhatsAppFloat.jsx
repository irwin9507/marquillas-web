import { motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=573134982178&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
      target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 200,
        width: 56, height: 56, borderRadius: '50%',
        background: '#22C55E',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(34,197,94,0.45)',
        textDecoration: 'none',
      }}
    >
      <WhatsAppIcon size={28} color="#fff" />
      <motion.span
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22C55E' }}
      />
    </motion.a>
  )
}
