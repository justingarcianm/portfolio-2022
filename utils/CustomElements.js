import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Paragraph = styled.p`
font-size:1.1rem;
line-height:1.5rem;
text-align:justify;
`;

export const Button = styled.button`
all: unset;
background-color: var(--accent-color);
padding: 0.5rem 1.5rem;
border-radius: 8px;
font-size: 1.5rem;
box-shadow: var(--box-shadow);
text-align: center;
color: var(--always-light);
`;

export const Container = styled.div`
width: 100%;
max-width: 1280px;
padding: 2rem;
margin: 0 auto;
position: relative;
transition: all 200ms;
`;

export const SectionDiv = styled(motion.section)`
display:grid;
grid-template-columns: repeat(${props => props.cols || 1},1fr);
gap: 0 2rem;
align-items:center;
padding:2rem 0;
`;

export const ContactSection = styled(SectionDiv)`
grid-template-columns: 2fr 1fr;
gap: 0 4rem;
`;

export const Listing = styled(SectionDiv)`
grid-template-columns: 2fr 1fr;
`;

export const SectionTitle = styled.h3`
    font-size:2rem;
    text-align:center;
    margin: 2rem 0;
`;

export const ToggleBtn = styled(motion.div)`
padding: 0.7rem;
  background-color: var(--toggle-bg);
  border-radius: 8px;
  color: var(--always-light);
  cursor: pointer;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
`;

export const NavBar = styled.nav`
width: 100%;
  position: relative;
  height: 4rem;
`;

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
`;

export const NavWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
`;

export const NavLinksWrapper = styled.div`
display: flex;
gap: 20px;
align-items: center;
`;

export const Underline = styled(motion.div)`
position: absolute;
bottom: -1px;
left: 0;
right: 0;
height: 3px;
background: var(--accent-color);
`;

export const Stacked = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 10px;
`;

export const StackedBtn = styled.div`
padding: 0.5rem;
font-size: 2rem;
border: 1px solid var(--font-color);
border-radius: 7px;
display: flex;
align-items: center;
cursor: pointer;
display:none;
`;

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
visibility: ${props => props.display ? 'visible': 'hidden'};
opacity: ${props => props.display ? 1 : 0};
z-index: ${props => props.display ? 2 : -1};
transition: 500ms ease all;
`;

export const FooterContainer = styled(Container)`
display:flex;
justify-content:space-between;
align-items:center;
`;