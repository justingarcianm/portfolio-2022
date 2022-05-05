import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'

const NotFound = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      404
    </motion.div>
  )
}

export default NotFound
