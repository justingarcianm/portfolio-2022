import styled from 'styled-components'
import { SectionDiv } from '../../theme/global.css'

export const ListingDiv = styled(SectionDiv)`
  grid-template-columns: 1fr 2fr;
`

export const ListingLinks = styled.div`
display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;