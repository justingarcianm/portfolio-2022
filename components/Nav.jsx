import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import DarkModeToggle from './darkModeToggle'
import NavLink from './navLink'
import {
  NavBar,
  NavWrapper,
  Fixed,
  NavLinksWrapper,
  Stacked,
  StackedBtn,
  MenuLinks
} from '../utils/CustomElements'
const Nav = props => {
  const { path } = props
  const [display, setDisplay] = useState(false)
  const toggleMenu = () => setDisplay(!display)

  return (
    <NavBar>
      <Fixed>
        <NavWrapper>
          <h1>
            <Link href="/">Justin Garcia</Link>
          </h1>
          <NavLinksWrapper>
            <div className="site-links">
              <NavLink path={path} href="/about">
                About
              </NavLink>
              <NavLink path={path} href="/works">
                Work
              </NavLink>
              <NavLink path={path} href="/posts">
                Posts
              </NavLink>
              <Link
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
              </Link>
            </div>
            <Stacked>
              <DarkModeToggle />
              <div className="stacked-menu">
                <StackedBtn onClick={toggleMenu}>
                  <CgMenu />
                </StackedBtn>
                <MenuLinks display={display}>
                  <Link path={path} href="/about">
                    About
                  </Link>
                  <Link path={path} href="/works">
                    Work
                  </Link>
                  <Link path={path} href="/posts">
                    Posts
                  </Link>
                  <Link
                    href="https://github.com/justingarcianm/Portfolio-2022"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.span
                      initial={{ color: 'var(--font-color)' }}
                      whileHover={{ color: 'var(--accent-color)' }}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaGithub /> Source
                    </motion.span>
                  </Link>
                </MenuLinks>
              </div>
            </Stacked>
          </NavLinksWrapper>
        </NavWrapper>
      </Fixed>
    </NavBar>
  )
}

export default Nav
