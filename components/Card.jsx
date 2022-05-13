import Link from 'next/link'
import { motion } from 'framer-motion'

const Card = ({ cardTitle, cardSlug, cardImg, cardPath }) => {
  return (
    <Link
      href={`/${cardPath}/${cardSlug}`}
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
