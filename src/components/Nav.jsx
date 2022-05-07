import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import DarkModeToggle from './DarkModeToggle'
import { CustomLink } from '../lib/CustomElements'
const Nav = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu-list')
    return menu.classList.toggle('open')
  }

  return (
    <nav>
       <div className="fixed">
       <div className="nav-container">
          <div id="home-link">
            <NavLink to="/">
              <h1>Justin Garcia</h1>
            </NavLink>
          </div>
            <div className="links-container">
            <div className="site-links">
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/work">Work</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
            <a
              href="https://github.com/justingarcianm/Portfolio-2022"
              target="_blank"
              rel="noreferrer"
            >
              <motion.span
                initial={{ color: 'var(--font-color)' }}
                whileHover={{ color: 'var(--accent-color)' }}
              >
                <FaGithub /> Source
              </motion.span>
            </a>
          </div>
          <div className="stacked">
            <DarkModeToggle />
            <div className="stacked-menu">
              <div className="stacked-btn" onClick={toggleMenu}>
                <CgMenu />
              </div>
              <div className="menu-list">
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/work">Work</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <a
                  href="https://github.com/justingarcianm/Portfolio-2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.span initial={{color:'var(--font-color)'}} whileHover={{ color: 'var(--accent-color)' }}>
                    <FaGithub /> Source
                  </motion.span>
                </a>
              </div>
            </div>
          </div>
            </div>
        </div>
       </div>
    </nav>
  )
}

export default Nav
