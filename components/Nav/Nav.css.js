import styled from 'styled-components'
import { motion } from 'framer-motion'
import { size } from '../../theme/global.css'

export const HeaderLink = styled(motion.a)`
  color: ${props =>
    props.active === 'true'
      ? props => props.theme.accent
      : props => props.theme.color};
  transition: all ease-in-out 400ms;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.accent};
  }
`

export const Logo = styled.a`
  font-weight: 100;
  letter-spacing: 0.2rem;
  font-size: 2.1rem;
  font-family: 'Montserrat', sans-serif;
`

export const NavBar = styled.nav`
  width: 100%;
  position: relative;
  height: 4rem;
`

export const Fixed = styled.div`
  position: fixed;
  width: inherit;
  max-width: 1280px;
  z-index: 1;
  backdrop-filter: blur(5px);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  left: 50%;
  transform: translateX(-50%);

  @media ${size.medium} {
    border-radius: 0px;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  & .site-links {
    @media ${size.medium} {
      display: none;
    }
  }
`

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-color);
`

export const Stacked = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`

export const StackedBtn = styled.div`
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid var(--font-color);
  border-radius: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: none;
  position: relative;

  @media ${size.medium} {
    display: flex;
  }
`

export const MenuLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--nav-bg);
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.body};
  width: 100%;
  height: fit-content;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  transition: 500ms ease all;
  backdrop-filter: blur(5px);

  & a {
    font-weight: 600;
    font-size: 2rem;
    margin: 2rem;
  }
`

export const ToggleBtn = styled(motion.div)`
  padding: 0.7rem;
  background-color: ${props => props.theme.toggle};
  border-radius: 8px;
  color: var(--light);
  cursor: pointer;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
`
