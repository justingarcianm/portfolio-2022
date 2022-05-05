import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'

const PostSingle = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      PostSingle
    </motion.div>
  )
}

export default PostSingle
