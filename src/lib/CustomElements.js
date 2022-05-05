import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const CustomLink = ({ children, to, ...props }) => {
  return (
    <motion.span whileHover={{ color: 'var(--accent-color)' }}>
      <NavLink
        to={to}
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'inherit'
        })}
        {...props}
      >
        {children}
      </NavLink>
    </motion.span>
  )
}

export { CustomLink }
