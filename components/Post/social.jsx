import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { SocialWrapper, SocialLink } from './Post.css'

const Social = ({ link }) => {
  const copyLink = e => {
    e.preventDefault()
    return navigator.clipboard.writeText(`${link}`)
  }

  return (
    <SocialWrapper>
      <SocialLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
        target="_blank"
        bg="#4267B2"
        whileHover={{
          scale: 1.2
        }}
      >
        <FaFacebookF />
      </SocialLink>
      <SocialLink
        href={`https://twitter.com/intent/tweet?text=${link}`}
        target="_blank"
        bg="#1DA1F2"
        whileHover={{
          scale: 1.2
        }}
      >
        <FaTwitter />
      </SocialLink>
      <SocialLink
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`}
        target="_blank"
        bg="#0072b1"
        whileHover={{
          scale: 1.2
        }}
      >
        <FaLinkedinIn />
      </SocialLink>
      <SocialLink
        href={`${link}`}
        target="_blank"
        bg="#1d1d1d"
        whileHover={{
          scale: 1.2
        }}
        onClick={e => copyLink(e)}
      >
        <FaLink />
      </SocialLink>
      <SocialLink
        href={`mailto:?body=${link}`}
        target="_blank"
        bg="#c71610"
        whileHover={{
          scale: 1.2
        }}
      >
        <MdMail />
      </SocialLink>
    </SocialWrapper>
  )
}

export default Social
