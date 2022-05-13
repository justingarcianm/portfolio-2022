import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import NavLink from './navLink'
import { FooterContainer, FooterSocial } from '../utils/CustomElements'

const Footer = ({ path }) => {
  return (
    <FooterContainer>
      <div className="copyright">&copy; Justin Garcia 2022</div>
      <div className="footer-links-container">
        <div className="footer-links">
          <NavLink path={path} href="/about">
            About
          </NavLink>
          <NavLink path={path} href="/work">
            Work
          </NavLink>
          <NavLink path={path} href="/posts">
            Posts
          </NavLink>
        </div>
        <FooterSocial>
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
        </FooterSocial>
      </div>
    </FooterContainer>
  )
}

export default Footer
