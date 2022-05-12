import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { CustomLink } from '../lib/CustomElements'

const Footer = () => {
  return (
    <footer>
      <div className="footer-flex">
        <div className="copyright">&copy; Justin Garcia 2022</div>
        <div className="footer-links-container">
          <div className="footer-links">
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/work">Work</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
          </div>
          <div className="social">
            <Link
              href="https://github.com/justingarcianm/Portfolio-2022"
              target="_blank"
              rel="noreferrer"
            >
              <motion.span whileHover={{ color: 'var(--accent-color)' }}>
                <FaGithub />
              </motion.span>
            </Link>
            <Link
              href="https://github.com/justingarcianm/Portfolio-2022"
              target="_blank"
              rel="noreferrer"
            >
              <motion.span whileHover={{ color: 'var(--accent-color)' }}>
                <FaLinkedinIn />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
