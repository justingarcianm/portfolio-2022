import styled from 'styled-components'
import { SectionDiv } from '../../theme/global.css'
import { size } from '../../theme/global.css'

export const ListingDiv = styled(SectionDiv)`
  grid-template-columns: 1fr 2fr;

  & img {
    border-radius:7px;
    box-shadow: var(--box-shadow);
  }

  @media ${size.medium} {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    & img {
      text-align:center;
    }
  }
`

export const ListingLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`
