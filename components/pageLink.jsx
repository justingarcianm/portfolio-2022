import { LinkButton } from '../theme/global.css'
import Link from 'next/link'

const PageLink = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref>
      <LinkButton
        initial={{ boxShadow: 'var(--box-shadow)' }}
        whileHover={{ boxShadow: 'var(--box-shadow-hover)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        {...props}
      >
        {children}
      </LinkButton>
    </Link>
  )
}

export default PageLink
