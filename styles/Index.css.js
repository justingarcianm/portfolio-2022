import styled from 'styled-components'
import { motion } from 'framer-motion'
import { size } from '../theme/global.css'
import { SectionDiv } from '../theme/global.css'
import { PostHeading } from '../components/Post/Post.css'

export const HomeTitle = styled.h1`
  line-height: 6rem;
  font-weight: 600;

  & span {
    color: ${props => props.theme.accent};
    display: block;
    width: max-content;
    font-size: 4rem;
    line-height: 5rem;
    text-transform: uppercase;

    @media ${size.medium} {
      display: table-cell;
    }
  }
`

export const AboutSection = styled(SectionDiv)`
  grid-template-columns: 3fr 2fr;
  align-items: center;
  gap: 3rem;

  & > div div {
    position: relative;
    margin-bottom: 1rem;

    & h1 {
      font-size: 4rem;
      margin: 0.5rem 0;
    }
  }
  & img {
    @media${size.medium} {
      max-width:300px!important;
      max-height:300px!important;
    }
  }
`

export const UnderLine = styled(motion.div)`
position: absolute;
bottom: -1px;
left: 0;
right: 0;
height: 3px;
background-color: ${props => props.theme.accent};
border-radius:20px;
}
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & span {
    text-align: center;
    width: fit-content;
    background-color: var(--light);
    color: var(--dark);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: all ease 300ms;

    &:hover,
    &.active {
      box-shadow: var(--box-shadow-hover);
      background-color: ${props => props.theme.accent};
      color: var(--light);
    }
  }
`

export const WorkHeading = styled(PostHeading)`
  & a {
    background-color: ${props => props.theme.body};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: ${props => props.theme.color};
    box-shadow: var(--box-shadow);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: 300ms all ease;

    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
  }
`

export const WorkLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media ${size.small} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const WorkContent = styled.div`
  & img {
    max-width: 100%;
    border-radius: 20px;
  }
`
export const HR = styled(motion.hr)`
  border-top: 2px solid ${props => props.theme.accent};
`

export const NotFoundLayout = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
