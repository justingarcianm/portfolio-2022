import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Paragraph } from '../utils/CustomElements'

const Listing = ({ work }) => {
  const {
    workTitle,
    workImage,
    workSlug,
    workDescription,
    repoLink,
    liveLink
  } = work

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1, type: 'spring' }}
      className="listing-container"
    >
      <div className="listing-img">
        <img
          src={workImage.data.attributes.formats.single.url}
          alt={workTitle}
        />
      </div>
      <div className="listing-content">
        <h3>{workTitle}</h3>
        <div className="listing-description">
          <Paragraph>{workDescription}</Paragraph>
        </div>
        <div className="listing-links">
          <div className="page-link">
            <button className="link-button">
              <Link href={`${workSlug}`}>Read More</Link>
            </button>
          </div>
          <div className="project-links">
            <Link href={`${repoLink}`} target="_blank">
              <motion.span whileHover={{ color: 'var(--accent-color)' }}>
                {' '}
                <FaGithub /> Repo
              </motion.span>
            </Link>
            <Link href={`${liveLink}`} target="_blank">
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
