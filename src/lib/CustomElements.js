import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { pageVariant, pageTransition } from './variants'

import favicon from '../images/favicons/favicon.ico'
import favSm from '../images/favicons/favicon-16x16.png'
import favLg from '../images/favicons/favicon-32x32.png'
import favApple from '../images/favicons/apple-touch-icon.png'
import manifest from '../images/favicons/site.webmanifest'
import browserConfig from '../images/favicons/browserconfig.xml'

const CustomLink = ({ children, to, ...props }) => {
  return (
    <motion.span whileHover={{ color: 'var(--accent-color)' }}>
      <NavLink
        to={to}
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'var(--font-color)'
        })}
        {...props}
      >
        {children}
      </NavLink>
    </motion.span>
  )
}

const PageDiv = ({title, description, children}) => {
  return <motion.div
  initial="out"
  animate="in"
  exit="out"
  variants={pageVariant}
  transition={pageTransition}
  >
    <Helmet>
      <title>{title} | CodingJustin</title>
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" sizes="180x180" href={favApple}/>
      <link rel="icon" type="image/png" href={favicon}/>
      <link rel="icon" type="image/png" sizes="32x32" href={favLg}/>
      <link rel="icon" type="image/png" sizes="16x16" href={favSm}/>
      <link rel="manifest" href={manifest}/>
      <meta name="msapplication-config" content={browserConfig} />
      <meta name="msapplication-TileColor" content="#68D391"/>
      <meta name="theme-color" content="#68D391"/>
    </Helmet> 
    {children}
  </motion.div>
}

export { CustomLink, PageDiv }
