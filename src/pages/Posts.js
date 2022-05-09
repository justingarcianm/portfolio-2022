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
      <div className="post-header">
        <h2>Posts</h2>
      </div>
      <div className="post-list"></div>
    </motion.div>
  )
}

export default Posts
