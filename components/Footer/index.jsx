import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import NavLink from '../Nav/navLink'
import { FooterContainer, FooterSocial } from './Footer.css'
import { HeaderLink } from '../Nav/Nav.css'

const Footer = ({ path }) => {
  return (
    <FooterContainer>
      <div className="copyright">Powered by &copy;CodingJustin 2022</div>
      <div className="footer-links-container">
        <div className="footer-links">
          <NavLink path={path} href="/about">
            About
          </NavLink>
          <NavLink path={path} href="/works">
            Work
          </NavLink>
          <NavLink path={path} href="/posts">
            Posts
          </NavLink>
        </div>
        <FooterSocial>
          <HeaderLink
            href="https://github.com/justingarcianm/Portfolio-2022"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </HeaderLink>

          <HeaderLink
            href="https://github.com/justingarcianm/Portfolio-2022"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </HeaderLink>
        </FooterSocial>
      </div>
    </FooterContainer>
  )
}

export default Footer
