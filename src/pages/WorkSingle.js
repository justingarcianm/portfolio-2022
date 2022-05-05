import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'

const WorkSingle = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      Work Single
    </motion.div>
  )
}

export default WorkSingle
