import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: justify;
`

export const Button = styled(motion.span)`
  all: unset;
  background-color: var(--accent-color);
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-size: 1.5rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  color: var(--always-light);
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  position: relative;
  transition: all 200ms;
`
export const PostContainer = styled(Container)`
  max-width:100vw;
`;

export const SectionDiv = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  gap: 0 2rem;
  align-items: center;
  padding: 2rem 0;
  width:inherit;
  height:inherit;
  position:relative;
`

export const ContactSection = styled(SectionDiv)`
  grid-template-columns: 2fr 1fr;
  gap: 0 4rem;
  align-items: baseline;
  overflow:hidden;
`

export const ContactSubHeading = styled(motion.h2)`
font-size:5rem;
color:var(--background-color);
text-shadow: 0px 0px 0px red;
`;

export const BGImageWrapper = styled.div`
width:300px;
padding:1rem;
`;

export const ImageWrapper = styled.div`
  width:100%;
  min-height:400px;
  position:relative;
  box-shadow:var(--box-shadow);
`;

export const ListingDiv = styled(SectionDiv)`
  grid-template-columns: 1fr 2fr;
`

export const ListingLinks = styled.div`
display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`

export const ToggleBtn = styled(motion.div)`
  padding: 0.7rem;
  background-color: var(--toggle-bg);
  border-radius: 8px;
  color: var(--always-light);
  cursor: pointer;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
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
  z-index: 10;
  backdrop-filter: blur(5px);
  box-shadow: var(--box-shadow);
  border-radius: 7px;
  left: 50%;
  transform: translateX(-50%);
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
`

export const MenuLinks = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 7px;
  background-color: var(--nav-bg);
  position: absolute;
  min-width: 14rem;
  transform: translate3d(-190px, 15px, 0px);
  border: 1px solid var(--font-color);
  transform-origin: top right;
  visibility: ${props => (props.display ? 'visible' : 'hidden')};
  opacity: ${props => (props.display ? 1 : 0)};
  z-index: ${props => (props.display ? 2 : -1)};
  transition: 500ms ease all;
`

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled(motion.input)`
  outline: none;
  border: none;
  margin-top: 0.5rem;
  width: -webkit-fill-available;
  font-size: 1rem;
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem;
  background-color: transparent;
  border: 2px solid var(--font-color);
  border-radius: 7px;
  color: var(--font-color);
`

export const IndexHeading = styled.h2`
  font-size: 7rem;
  line-height: 1em;
`

export const IndexSubHeading = styled.h2`
  font-size: 4rem;
  color: var(--accent-color);
  line-height: 1em;
  font-weight: 400;
`

export const FooterSocial = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
background-position: center;
background-size: cover;
height: 200px;
width: 350px;
border-radius: 7px;
padding: 1.5rem;
position: relative;
background-image:url('${props => props.bg || ''}')
`;

export const CardContent = styled(motion.a)`
position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: #1a202c70;
  border-radius: inherit;
  color: var(--always-light);
  font-size: 1.3rem;
  padding:1rem;
  text-align:center;
`;

export const PostTitle = styled(motion.div)`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  width:100%;
  z-index:10;
  & h2 {
    font-size:5rem;
  }
`;

export const PostHeader = styled(motion.div)`
  position:relative;
  width: 100%;
  height: 60vh;
  margin:auto;
  background-color:var(--accent-color);
  & > div {
    position:absolute;
    height:inherit;
    right:0;
    width:50%;
    top:50%;
    transform:translateY(-50%);
    color:var(--always-dark);
  }
  & > div:first-child {
    left:10%;
    width:60%;
    z-index:10;
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    gap:2rem;
    & h2 {
      font-size: clamp( 2rem, 5vw, 6rem );
      font-weight:600;
    }
    & p {
      width:50%;
    }
    & .categories {
      background-color:var(--always-light);
      padding:.5rem 1rem;
      border-radius:20px;
      width:fit-content;
    }
  }
`;

export const AuthorMeta = styled.div`
  width:fit-content;
  display:grid;
  grid-template-columns: 1fr 4fr;
  gap:.5rem;
  align-items:center;
  & > span:first-child {
    border-radius:50%;
    width:50px;
  }
`

export const MDContainer = styled(SectionDiv)`
  & * {
    max-width:800px;
    margin:auto;
    text-align:justify;
  }
  & h1,h2,h3,h4,h5,h6 {
    margin: 1.5rem auto .5rem auto;
    width:100%;
  }
  & img,pre {
    margin:1rem auto;
    width:100%;
  }
  & p {
    font-size:1.1rem;
    line-height:2.1rem;
  }
`;

export const SocialWrapper = styled.div`
  display:flex;
  gap: 1rem;
  justify-content:flex-start;
  align-items: baseline;
  max-width:100%;
  width:800px;
  border-top: 2px solid var(--accent-color);
  padding-top:2rem;
  margin:auto;
`;

export const SocialLink = styled(motion.a)`
background-color:${props => props.bg || 'transparent'};
display:flex;
justify-content:center;
align-items: center;
padding:.5rem;
border-radius:var(--border-radius);
box-shadow:var(--box-shadow);
color:var(--always-light);
`;