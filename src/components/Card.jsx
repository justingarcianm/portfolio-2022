import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @props - ({ cardTitle,cardSlug,cardType,cardImg })
const Card = () => {
  return (
    <Link
      to="/posts/dfa"
      className="card"
      style={{ backgroundImage: `url(https://bit.ly/dan-abramov)` }}
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
        <h3>Card Title goes here</h3>
      </motion.div>
    </Link>
  )
}

export default Card
