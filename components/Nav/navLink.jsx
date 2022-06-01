import Link from 'next/link'
import { HeaderLink } from './Nav.css'

const NavLink = ({ href, children, path }) => {
  const active = path === href
  return (
    <Link passHref href={href} >
      <HeaderLink active={active.toString()} > { children } </HeaderLink>
    </Link>
  )
}

export default NavLink
