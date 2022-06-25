import styled from 'styled-components'
import { motion } from 'framer-motion'

export const size = {
  xLarge: '(max-width: 2000px)',
  large: '(max-width: 1400px)',
  medium: '(max-width: 850px)',
  small: '(max-width: 600px)'
}

export const CopyLink = styled.a`
  color: ${props => props.theme.link};
  transition: all ease 300ms;

  &:hover {
    text-decoration: underline;
  }
`

export const Container = styled.div`
  width: -webkit-fill-available;
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  position: relative;
  transition: all 200ms;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const SectionDiv = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;
  width: inherit;
  height: inherit;
  position: relative;

  @media ${size.medium} {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`
export const LinkButton = styled(motion.a)`
  all: unset;
  background-color: ${props => props.theme.accent};
  padding: 0.5rem 3rem;
  border-radius: 8px;
  text-align: center;
  color: var(--light);
  cursor: pointer;
  margin: 0 auto;
  display: block;
  font-size: 1.4rem;

  @media ${size.medium} {
    width: -webkit-fill-available;
  }
`
