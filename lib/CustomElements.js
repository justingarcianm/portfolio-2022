import Link from 'next/link'
import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from './variants'

export const CustomLink = ({ children, to, ...props }) => {
  return (
    <motion.span whileHover={{ color: 'var(--accent-color)' }}>
      <Link
        href={to}
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'var(--font-color)'
        })}
        {...props}
      >
        {children}
      </Link>
    </motion.span>
  )
}

export const Section = ({children, delay}) => {
  <motion.div
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
}