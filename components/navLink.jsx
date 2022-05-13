import { motion } from "framer-motion"
import Link from 'next/link'

const NavLink = ({ href, children, path }) => {
    
    const active = path === href
    return <motion.span initial={{color:'inherit'}}
    whileHover={{color:'var(--accent-color)'}}
    style={{ color:`${ active ? 'var(--accent-color' : 'var(--font-color)' }`, margin:'0 1rem' }}
>
    <Link href={href} >
       {children}
        </Link>
        </motion.span>
   
}

export default NavLink