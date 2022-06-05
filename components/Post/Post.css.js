import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Container, size } from '../../theme/global.css'

export const PostHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
      90deg,
      ${props => props.theme.accent} 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${props => props.image}) no-repeat right center;
  background-size: contain;
  border-radius: 10px;
  padding: 2rem;

  & h1 {
    margin: 1rem 0;
  }

  & > div {
    position: relative;
    padding: 2rem;
    color: var(--light);
    max-width: 50%;
  }

  @media ${size.medium} {
    background: ${props => props.theme.accent};
    padding: 2rem;

    & > div {
      max-width: 100%;
      padding: 0;
    }

    & h1 {
      margin: 0.5rem 0;
      font-size: 2rem;
    }
  }
`

export const CategoryContainer = styled(motion.span)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  background-color: #eee;
  border-radius: 20px;
  font-size: 0.925rem;
  margin: 1rem 0;
  & p {
    margin: 0;
    padding: 0.5rem 1rem;
    background-color: #666;
    border-radius: inherit;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    color: var(--light);
    font-size: inherit;
  }

  & span {
    padding: 0.5rem;
    padding-right: 1rem;
    color: var(--dark);
    font-size: inherit;
  }
`

export const AuthorMeta = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  & img {
    border-radius: 50%;
  }

  & h4 {
    font-size: 0.925rem;
    margin: 0;
    line-height: 2rem;
  }

  & h5 {
    font-size: 0.8rem;
    line-height: 0.8rem;
    margin: 0;
  }
`

export const PostContainer = styled(Container)`
  max-width: 800px;

  & h2 {
    font-size: 2.5rem;
  }
  & img {
    max-width: 100%;
    border-radius: var(--border-radius);
  }

  @media ${size.medium} {
    padding: 0;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: baseline;
  max-width: 100%;
  padding-top: 2rem;
  margin: auto;

  @media ${size.medium} {
    justify-content:center;
  }
`

export const SocialLink = styled(motion.a)`
  background-color: ${props => props.bg || 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  color: var(--light);
`
