import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink,  } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { SocialWrapper, SocialLink } from '../utils/CustomElements'

const Social = ({link}) => {
  return <SocialWrapper>
    <SocialLink
     href='#' 
     bg='#4267B2'
     whileHover={{
      scale:1.2
    }}
     >
        <FaFacebookF/>
    </SocialLink>
    <SocialLink
     href='#' 
     bg='#1DA1F2'
     whileHover={{
      scale:1.2
    }}
     >
        <FaTwitter/>
    </SocialLink>
    <SocialLink
     href='#' 
     bg='#0072b1'
     whileHover={{
      scale:1.2
    }}
     >
        <FaLinkedinIn/>
    </SocialLink>
    <SocialLink
     href='#' 
     bg='#1d1d1d'
     whileHover={{
      scale:1.2
    }}
     >
        <FaLink/>
    </SocialLink>
    <SocialLink
     href='#' 
     bg='#c71610'
     whileHover={{
       scale:1.2
     }}
     >
        <MdMail/>
    </SocialLink>
  </SocialWrapper>
}

export default Social