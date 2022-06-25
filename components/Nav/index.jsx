import { useState } from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { CgMenu, CgClose } from 'react-icons/cg'
import DarkModeToggle from './darkModeToggle'
import NavLink from './navLink'
import {
  HeaderLink,
  Logo,
  NavBar,
  NavWrapper,
  Fixed,
  NavLinksWrapper,
  Stacked,
  StackedBtn,
  MenuLinks
} from './Nav.css'

const Nav = props => {
  const [open,setOpen] = useState(false)
  const { path } = props


  const toggleMenu = () => {
    let menuLinks = document.querySelector('.toggle-btn')
    setOpen(!open)
    menuLinks.style.maxHeight === '0px' ? 
    menuLinks.style.maxHeight = `${menuLinks.scrollHeight}px` : 
    menuLinks.style.maxHeight = '0px'
  }

  return (
    <NavBar>
      <Fixed>
        <NavWrapper>
          <Logo href="/">Justin Garcia</Logo>
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
              <HeaderLink
                href="https://github.com/justingarcianm/Portfolio-2022"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Source
              </HeaderLink>
            </div>
            <Stacked>
              <DarkModeToggle
                themeToggler={props.themeToggler}
                theme={props.theme}
              />
              <div className="stacked-menu">
                <StackedBtn onClick={toggleMenu}>
                  {open ? <CgClose/> : <CgMenu /> }
                </StackedBtn>
                <MenuLinks className="toggle-btn" style={{maxHeight:'0px'}}>
                    <Link path={path} href="/about">
                      About
                    </Link>
                    <Link path={path} href="/works">
                      Work
                    </Link>
                    <Link path={path} href="/posts">
                      Posts
                    </Link>
                    <HeaderLink
                      href="https://github.com/justingarcianm/Portfolio-2022"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub /> Source
                    </HeaderLink>
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
