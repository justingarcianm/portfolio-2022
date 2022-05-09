import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Card = ({ cardTitle, cardSlug, cardImg, cardPath }) => {
  return (
    <Link
      to={`/${cardPath}/${cardSlug}`}
      className="card"
      style={{ backgroundImage: `url(${cardImg})` }}
    >
      <motion.div
        className="card-content"
        initial={{
          opacity: 0
        }}
        whileHover={{
          opacity: 1
        }}
      >
        <h3>{cardTitle}</h3>
      </motion.div>
    </Link>
  )
}

export default Card
