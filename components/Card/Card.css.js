import styled from 'styled-components'
import { motion } from 'framer-motion'
import { size } from '../../theme/global.css';

export const CardWrapper = styled.div`
background-position: center;
background-size: cover;
height: 200px;
border-radius: 7px;
padding: 1.5rem;
position: relative;
background-image:url('${props => props.bg || ''}');
box-shadow:var(--box-shadow);
  &:hover {
    box-shadow:var(--box-shadow-hover);
  }

  @media ${size.medium} {
    margin-bottom:2rem;
  }
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
  color: var(--light);
  font-size: 1.3rem;
  padding:1rem;
  text-align:center;

  @media ${size.medium} {
    opacity:1!important;
  }
`;