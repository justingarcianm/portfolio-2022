import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLink } from 'react-icons/fa'

const Listing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1, type: 'spring' }}
      className="listing-container"
    >
      <div className="listing-img">
        <img src="" alt="" />
      </div>
      <div className="listing-content">
        <h3>Title</h3>
        <div className="listing-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            repellendus pariatur velit odio voluptas ut eius nulla, dicta
            obcaecati. Eius.
          </p>
        </div>
        <div className="listing-links">
          <div className="page-link">
            <button className="link-button">Read More</button>
          </div>
          <div className="project-links">
            <Link to="#">
              <motion.span whileHover={{ color: 'var(--accent-color)' }}>
                {' '}
                <FaGithub /> Repo
              </motion.span>
            </Link>
            <Link to="#">
              {' '}
              <motion.span whileHover={{ color: 'var(--accent-color)' }}>
                <FaLink /> Demo
              </motion.span>{' '}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Listing
