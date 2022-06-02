import styled from 'styled-components'
import { motion } from 'framer-motion'

import { SectionDiv } from '../../theme/global.css'

export const ContactSection = styled(SectionDiv)`
  grid-template-columns: 2fr 1fr;
  gap: 0 4rem;
  align-items: baseline;
  overflow: hidden;
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
  border: 2px solid ${props => props.theme.color};
  border-radius: 7px;
  color: var(--font-color);
  transition: 300ms all ease-in-out;
  margin-bottom: 1rem;

  &:focus {
    border-color: ${props => props.theme.accent};
  }
`
