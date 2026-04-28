import { motion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=573134982178&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, type: 'spring', stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-7 right-7 z-[200] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
      style={{ background: '#22C55E', boxShadow: '0 8px 32px rgba(34,197,94,0.45)' }}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={27} color="#fff" />

      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full"
        style={{ background: '#22C55E' }}
      />
    </motion.a>
  )
}
