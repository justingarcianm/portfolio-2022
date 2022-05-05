import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'

const Work = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      Work
    </motion.div>
  )
}

export default Work
