import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'

const Posts = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      Posts
    </motion.div>
  )
}

export default Posts
